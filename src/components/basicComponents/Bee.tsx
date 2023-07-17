import React, { useState } from "react";
import { ReactComponent as BeeSVG } from "../../assets/images/bee.svg";

function getAngleInRadians(angle: number) {
  return (angle * Math.PI) / 180;
}

function getTopDistance(angle: number, distance: number) {
  return distance * Math.sin(getAngleInRadians(angle));
}


function getLeftDistance(angle: number, distance: number) {
  return distance * Math.cos(getAngleInRadians(angle));
}


export const Bee = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(window.innerHeight * 0.5);
  const [beeAngle, setBeeAngle] = useState(0);

  function moveBee(angle: number, distance: number): void {
    const leftOffset = getLeftDistance(angle, distance);
    const topOffset = getTopDistance(angle, distance);

    setLeft(left + leftOffset);
    setTop(top + topOffset);
  }

  setTimeout(() => {
      const distance = 30;
      const leftToMove = getLeftDistance(beeAngle, distance);
      const topToMove = getTopDistance(beeAngle, distance);
      let topChange = 0;
      let leftChange = 0;
      if (left + leftToMove < 0) {
        leftChange = 1;
      } else if (left + leftToMove > window.innerWidth - 100) {
        leftChange = -1;
      }
      if (top + topToMove < 0) {
        topChange = -1;
      } else if (top + topToMove > window.innerHeight - 100) {
        topChange = 1;
      }
      if (leftChange != 0 || topChange != 0) {
        let [minimum, maximum] = [0, 0]
        if (leftChange > 0) {
          if (topChange > 0) {
            minimum = 270;
            maximum = 360;
          } else if (topChange < 0) {
            minimum = 0;
            maximum = 90;
          } else {
            minimum = -90;
            maximum = 90;
          }
        } else if (leftChange < 0) {
          if (topChange > 0) {
            minimum = 180;
            maximum = 270;
          } else if (topChange < 0) {
            minimum = 90;
            maximum = 180;
          } else {
            minimum = 90;
            maximum = 270;
          }
        }
        const newAngle = Math.random() * (maximum - minimum) + minimum;
        setBeeAngle(newAngle % 360);
      }
      moveBee(beeAngle, distance)
      console.log(beeAngle)
      console.log(distance)
  }, 1000);

  return (
    <div id="bee-container">
      <BeeSVG id="bee" width="100px" height="100px" style={{left: left + 'px', bottom: top + 'px'}}/>
    </div>);
}
