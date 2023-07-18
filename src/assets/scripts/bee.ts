import { useEffect, useState } from "react";
import { Direction, directionsAngles } from "../../model/Direction";

const directionsMatrix: Direction[][] = [
  ["north_east", "east", "south_east"],
  ["north", "any", "south"],
  ["north_west", "west", "south_west"]
]

function getAngleInRadians(angle: number) {
  return (angle * Math.PI) / 180;
}

function getBottomDistance(angle: number, distance: number) {
  return distance * Math.sin(getAngleInRadians(angle));
}


function getLeftDistance(angle: number, distance: number) {
  return distance * Math.cos(getAngleInRadians(angle));
}

function getNewAngle(leftChange: number, bottomChange: number) : number {
  const direction = directionsMatrix[leftChange][bottomChange];
  let [minimum, maximum] = directionsAngles[direction];
  const newAngle = Math.random() * (maximum - minimum) + minimum;
  return newAngle % 360;
}

function getCoordinates(angle: number, distance: number) {
  const leftOffset = getLeftDistance(angle, distance);
  const bottomOffset = getBottomDistance(angle, distance);
  return [leftOffset, bottomOffset];
}

// 0 - up-collision
// 1 - no collision
// 2 - down-collision
function getCollisions(x: number, y: number) {
  let yCollision = 1;
  let xCollision = 1;
  if (x < 50) {
    xCollision = 0;
  } else if (x > window.innerWidth - 150) {
    xCollision = 2;
  }
  if (y < 50) {
    yCollision = 0;
  } else if (y > window.innerHeight - 150) {
    yCollision = 2;
  }
  return [xCollision, yCollision];
}

export const useBeePosition = () => {
  const distance = 100;
  const [left, setLeft] = useState(0);
  const [bottom, setBottom] = useState(window.innerHeight * 0.5);
  const [angle, setAngle] = useState<number>(0);
  const [rotateAngle, setRotateAngle] = useState<number>(0);
  const [rotateX, setRotateX] = useState<boolean>(false);
  const [rotateY, setRotateY] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      let [leftOffset, bottomOffset] = getCoordinates(angle, distance);
      let [leftChange, bottomChange] = getCollisions(left + leftOffset, bottom + bottomOffset);
      if (leftChange != 1 || bottomChange != 1) {
        setAngle(getNewAngle(leftChange, bottomChange));
        [leftOffset, bottomOffset] = getCoordinates(angle, distance);
        setRotateY(angle < 90 || angle > 270);
        setRotateX(false);
        setRotateAngle(angle % 180 )
      }
      setLeft(Math.round(left + leftOffset));
      setBottom(Math.round(bottom + bottomOffset));
    }, 1000);
  });

  return [left, bottom, rotateX, rotateY, rotateAngle]
}