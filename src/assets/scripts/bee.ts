import { useEffect, useRef, useState } from "react";
import { useAppSettings } from "../../model/AppSettings";
import './beeUtils';
import { getCollisions, getCoordinates, getNewAngle, getRotateAngle } from "./beeUtils";

export const useBeePosition = () => {
  const distance = 40;
  const stepsToCountFuture = 5;
  const { settings } = useAppSettings();

  const left = useRef(0);
  const [nextLeftPositions, setNextLeftPositions] = useState<number[]>(Array.from({ length: stepsToCountFuture }, (_, index) => index * distance));
  const bottom = useRef(window.innerHeight * 0.5);
  const [nextBottomPositions, setNextBottomPositions] = useState<number[]>(new Array(stepsToCountFuture).fill(bottom.current));
  const angle = useRef(0);
  const [nextAngles, setNextAngles] = useState<number[]>(new Array(stepsToCountFuture).fill(0));
  const rotateAngle = useRef(0);
  const [nextRotateAngles, setNextRotateAngles] = useState<number[]>(new Array(stepsToCountFuture).fill(0));
  const rotateX = useRef(false);
  const [nextRotatesX, setNextRotatesX] = useState(new Array(stepsToCountFuture).fill(false));
  const rotateY = useRef(false);
  const [nextRotatesY, setNextRotatesY] = useState(new Array(stepsToCountFuture).fill(true));
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined);

  function move() {
    left.current = nextLeftPositions[0];
    bottom.current = nextBottomPositions[0];
    angle.current = nextAngles[0];
    rotateAngle.current = nextRotateAngles[0];
    rotateX.current = nextRotatesX[0];
    rotateY.current = nextRotatesY[0];
  }

  function setCoordinates(x: number, y: number) {
    setNextLeftPositions([...nextLeftPositions, Math.round(x)].slice(1));
    setNextBottomPositions([...nextBottomPositions, Math.round(y)].slice(1));
  }

  function setRotate(rotateAngle: number, rotateX: boolean = false, rotateY: boolean = false) {
    setNextRotateAngles([...nextRotateAngles, rotateAngle].slice(1));
    setNextRotatesX([...nextRotatesX, rotateX].slice(1));
    setNextRotatesY([...nextRotatesY, rotateY].slice(1));
  }

  function planMovementForPosition(x: number, y: number, angle: number) {
    let [leftOffset, bottomOffset] = getCoordinates(angle, distance);
    let [leftChange, bottomChange] = getCollisions(x + leftOffset, y + bottomOffset);
    let [newX, newY, newAngle] = [x + leftOffset, y + bottomOffset, angle];
    console.log(settings.animationsEnabled)
    console.log(leftChange)
    if (settings.animationsEnabled) {
      if (leftChange !== 1 || bottomChange !== 1 || Math.random() > 1 - window.innerWidth / 10000) {
        newAngle = getNewAngle(leftChange, bottomChange);
        [leftOffset, bottomOffset] = getCoordinates(angle, distance);
        [newX, newY] = [x + leftOffset, y + bottomOffset];
      }
    } else if (bottomChange > 0) {
      newAngle = -90;
      [newX, newY] = [x, y - distance];
    }
    return [newX, newY, newAngle]
  }

  function planMovement() {
    const [newX, newY, newAngle] = planMovementForPosition(nextLeftPositions[stepsToCountFuture - 1], nextBottomPositions[stepsToCountFuture - 1], nextAngles[stepsToCountFuture - 1]);
    setCoordinates(newX, newY);
    setNextAngles([...nextAngles, newAngle].slice(1));
    setRotate(getRotateAngle(newAngle), false, newAngle < 90 || newAngle > 270)
  }

  useEffect(() => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      planMovement();
      move();
    }, 500);
    setTimeout(() => {
      setTimeoutId(timeout)
    }, 500)
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeoutId])

  return [left, bottom, rotateX, rotateY, rotateAngle];
}