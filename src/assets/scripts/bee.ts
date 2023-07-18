import { useState } from "react";

function getAngleInRadians(angle: number) {
  return (angle * Math.PI) / 180;
}

function getBottomDistance(angle: number, distance: number) {
  return distance * Math.sin(getAngleInRadians(angle));
}


function getLeftDistance(angle: number, distance: number) {
  return distance * Math.cos(getAngleInRadians(angle));
}

export const useBeePosition = () => {
  const distance = 100;
  const [left, setLeft] = useState(0);
  const [bottom, setBottom] = useState(window.innerHeight * 0.5);
  const [angle, setAngle] = useState(0);

  function moveBee(angle: number, distance: number): void {
    const leftOffset = getLeftDistance(angle, distance);
    const bottomOffset = getBottomDistance(angle, distance);

    setLeft(Math.round(left + leftOffset));
    setBottom(Math.round(bottom + bottomOffset));
  }

  setTimeout(() => {
    const leftToMove = getLeftDistance(angle, distance);
    const bottomToMove = getBottomDistance(angle, distance);
    let bottomChange = 0;
    let leftChange = 0;
    if (left + leftToMove < 100) {
      leftChange = 1;
    } else if (left + leftToMove > window.innerWidth - 100) {
      leftChange = -1;
    }
    if (bottom + bottomToMove < 100) {
      bottomChange = -1;
    } else if (bottom + bottomToMove > window.innerHeight - 100) {
      bottomChange = 1;
    }
    if (leftChange != 0 || bottomChange != 0 || Math.random() > 0.9) {
      let [minimum, maximum] = [0, 360]
      if (leftChange > 0) {
        if (bottomChange > 0) {
          minimum = 270;
        } else if (bottomChange < 0) {
          maximum = 90;
        } else {
          minimum = -90;
          maximum = 90;
        }
      } else if (leftChange < 0) {
        if (bottomChange > 0) {
          minimum = 180;
          maximum = 270;
        } else if (bottomChange < 0) {
          minimum = 90;
          maximum = 180;
        } else {
          minimum = 90;
          maximum = 270;
        }
      }
      const newAngle = Math.random() * (maximum - minimum) + minimum;
      setAngle(newAngle % 360);
    }
    moveBee(angle, distance)
  }, 1000);

  return [left, bottom, angle]
}