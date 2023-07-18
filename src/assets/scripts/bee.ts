import { useState } from "react";

const anglesMatrix = [
  [[180, 270], [90, 270], [90, 180]],
  [[180, 360], [0, 360], [0, 180]],
  [[270, 360], [-90, 90], [0, 90]]
]

const anglesSides = {
  north_east: [0, 90],
  north: [0, 180],
  north_west: [90, 180],
  west: [90, 270],
  south_west: [180, 270],
  south: [180, 360],
  south_east: [270, 360],
  east: [-90, 90]
}

function getAngleInRadians(angle: number) {
  return (angle * Math.PI) / 180;
}

function getBottomDistance(angle: number, distance: number) {
  return distance * Math.sin(getAngleInRadians(angle));
}


function getLeftDistance(angle: number, distance: number) {
  return distance * Math.cos(getAngleInRadians(angle));
}

function getNewAngle(leftChange: number, bottomChange: number) {
  let [minimum, maximum] = [0, 360]
  switch (bottomChange) {
    case 1:
      switch (leftChange) {
        case -1:

          break;
        case 1:
          break;
      }
      break;
    case -1:
      maximum = 360;
      break;
  }
  const newAngle = Math.random() * (maximum - minimum) + minimum;
  return newAngle % 360;
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
      leftChange = -1;
    } else if (left + leftToMove > window.innerWidth - 100) {
      leftChange = 1;
    }
    if (bottom + bottomToMove < 100) {
      bottomChange = -1;
    } else if (bottom + bottomToMove > window.innerHeight - 100) {
      bottomChange = 1;
    }
    if (leftChange != 0 || bottomChange != 0 || Math.random() > 0.9) {
      setAngle(getNewAngle(leftChange, bottomChange));
    }
    moveBee(angle, distance)
  }, 1000);

  return [left, bottom, 0, 0, angle]
}