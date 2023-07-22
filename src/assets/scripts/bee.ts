import { useEffect, useState } from "react";
import { Direction, directionsAngles } from "../../model/Direction";
import { useAppSettings } from "../../model/AppSettings";

const directionsMatrix: Direction[][] = [
  ["north_east", "east", "south_east"],
  ["north", "any", "south"],
  ["north_west", "west", "south_west"]
]

function getAngleInRadians(angle: number) {
  return (angle * Math.PI) / 180;
}

function getYDistance(angle: number, distance: number) {
  return distance * Math.sin(getAngleInRadians(angle));
}


function getXDistance(angle: number, distance: number) {
  return distance * Math.cos(getAngleInRadians(angle));
}

function generateRandomNumber(minimum: number, maximum: number) {
  return Math.random() * (maximum - minimum) + minimum;
}

function getNewAngle(leftChange: number, bottomChange: number) : number {
  const direction = directionsMatrix[leftChange][bottomChange];
  const [minimum, maximum] = directionsAngles[direction];
  const newAngle = generateRandomNumber(minimum, maximum);
  return newAngle % 360;
}

function getRotateAngle(angle: number) {
  if (angle > -90 && angle < 90) {
    return angle;
  } else if (angle > 270) {
    return angle - 360;
  } else {
    return (angle - 180) * -1;
  }
}

function getCoordinates(angle: number, distance: number) {
  const x = getXDistance(angle, distance);
  const y = getYDistance(angle, distance);
  return [x, y];
}

// 0 - low-collision
// 1 - no collision
// 2 - high-collision
function getCollisions(x: number, y: number) {
  let yCollision = 1;
  let xCollision = 1;
  if (x < 50 && x > window.innerWidth - 150) {
    xCollision = x > window.innerWidth * 0.5 ? 2 : 0;
  } else if (x < 50) {
    xCollision = 0;
  } else if (x > window.innerWidth - 150) {
    xCollision = 2;
  }
  if (y < 50 && y > window.innerHeight - 150) {
    yCollision = y > window.innerHeight * 0.5 ? 2 : 0;
  } else if (y < 50) {
    yCollision = 0;
  } else if (y > window.innerHeight - 150) {
    yCollision = 2;
  }
  return [xCollision, yCollision];
}

export const useBeePosition = () => {
  const distance = 40;
  const { settings } = useAppSettings();
  const [left, setLeft] = useState(window.innerWidth * Math.random());
  const [bottom, setBottom] = useState(window.innerHeight * Math.random());
  const [angle, setAngle] = useState<number>(0);
  //let nextAngles: number[] = [0, 0, 0, 0, 0];
  const [rotateAngle, setRotateAngle] = useState<number>(0);
  const [rotateX, setRotateX] = useState<boolean>(false);
  //let nextRotatesX = [false, false, false, false, false];
  const [rotateY, setRotateY] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined);

  function planMovement() {
    let [leftOffset, bottomOffset] = getCoordinates(angle, distance);
    let [leftChange, bottomChange] = getCollisions(left + leftOffset, bottom + bottomOffset);
    if (settings.animationsEnabled) {
      if (leftChange !== 1 || bottomChange !== 1 || Math.random() > 0.95) {
        setAngle(getNewAngle(leftChange, bottomChange));
        [leftOffset, bottomOffset] = getCoordinates(angle, distance);
      }
      setRotateY(angle < 90 || angle > 270);
      setRotateX(false);
      setRotateAngle(getRotateAngle(angle))
      setLeft(Math.round(left + leftOffset));
      setBottom(Math.round(bottom + bottomOffset));
    } else if (bottomChange > 0) {
      setRotateX(false);
      setRotateAngle(0)
      setBottom(Math.round(bottom - distance))
    }
  }

  useEffect( () => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      planMovement();
    }, 500);
    setTimeoutId(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left, bottom, settings.animationsEnabled])

  return [left, bottom, rotateX, rotateY, rotateAngle];
}