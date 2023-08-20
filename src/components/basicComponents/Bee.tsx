import React, {useEffect, useState} from "react";
import {ReactComponent as BeeSVG} from "../../assets/images/bee.svg";
import {getCollisions, getCoordinates, getNewAngle, getRotateAngle} from "../../assets/scripts/beeUtils";


export const Bee = (props: { id: string }) => {
  const distance = 40;
  const stepsToCountFuture = 5;

  const [nextLeftPositions, setNextLeftPositions] = useState(Array.from({length: stepsToCountFuture}, (_, index) => index * distance));
  const [nextBottomPositions, setNextBottomPositions] = useState(new Array(stepsToCountFuture).fill(200));
  const [nextAngles, setNextAngles] = useState(new Array(stepsToCountFuture).fill(200));
  const [nextRotateAngles, setNextRotateAngles] = useState(new Array(stepsToCountFuture).fill(0));
  const [nextRotatesX, setNextRotatesX] = useState(new Array(stepsToCountFuture).fill(false));
  const [nextRotatesY, setNextRotatesY] = useState(new Array(stepsToCountFuture).fill(true));

  function setCoordinates(x: number, y: number, angle: number) {
    setNextLeftPositions([...nextLeftPositions.slice(1), Math.round(x)]);
    setNextBottomPositions([...nextBottomPositions.slice(1), Math.round(y)]);
    setNextAngles([...nextAngles.slice(1), angle])
  }

  function setRotate(rotateAngle: number, rotateX: boolean = false, rotateY: boolean = false) {
    setNextRotateAngles([...nextRotateAngles.slice(1), rotateAngle]);
    setNextRotatesX([...nextRotatesX.slice(1), rotateX]);
    setNextRotatesY([...nextRotatesY.slice(1), rotateY]);
  }

  function planMovementForPosition(x: number, y: number, angle: number) {
    let [leftOffset, bottomOffset] = getCoordinates(angle, distance);
    let [leftChange, bottomChange] = getCollisions(x + leftOffset, y + bottomOffset);
    let [newX, newY, newAngle] = [x + leftOffset, y + bottomOffset, angle];
    if (leftChange !== 1 || bottomChange !== 1 || Math.random() > 1 - window.innerWidth / 20000) {
      newAngle = getNewAngle(leftChange, bottomChange);
      [leftOffset, bottomOffset] = getCoordinates(newAngle, distance);
      [newX, newY] = [x + leftOffset, y + bottomOffset];
    }
    return [newX, newY, newAngle]
  }

  function planMovement() {
    const [newX, newY, newAngle] = planMovementForPosition(nextLeftPositions[stepsToCountFuture - 1], nextBottomPositions[stepsToCountFuture - 1], nextAngles[stepsToCountFuture - 1]);
    setCoordinates(newX, newY, newAngle);
    setRotate(getRotateAngle(newAngle), false, newAngle < 90 || newAngle > 270)
    // if (nextAngles.every((pos) => pos === nextAngles[0]) && nextRotatesX.every((rot) => rot === false) && Math.random() > 0.85) {
    //   setNextRotatesX([true, true, false, false, false])
    // }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      planMovement();
    }, 500);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [props.id, nextLeftPositions, nextBottomPositions])


  return <BeeSVG id={props.id} className="bee" width="100px" height="100px" style={{
    left: nextLeftPositions[0] + "px",
    bottom: nextBottomPositions[0] + "px",
    transform: "rotateX(" + (nextRotatesX[0] ? 180 : 0) + "deg) " +
      "rotateY(" + (nextRotatesY[0] ? 180 : 0) + "deg) " +
      "rotate(" + nextRotateAngles[0] + "deg)"
  }}/>;
}
