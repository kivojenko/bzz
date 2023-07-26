import { Direction, directionsAngles } from "../../model/Direction";

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

export function getNewAngle(leftChange: number, bottomChange: number): number {
  const direction = directionsMatrix[leftChange][bottomChange];
  const [minimum, maximum] = directionsAngles[direction];
  const newAngle = generateRandomNumber(minimum, maximum);
  return newAngle % 360;
}

export function getRotateAngle(angle: number) {
  if (angle == -90 || angle == 270) {
    return 0;
  } else if (angle > -90 && angle < 90) {
    return angle;
  } else if (angle > 270) {
    return angle - 360;
  } else {
    return (angle - 180) * -1;
  }
}

export function getCoordinates(angle: number, distance: number) {
  const x = getXDistance(angle, distance);
  const y = getYDistance(angle, distance);
  return [x, y];
}

// 0 - low-collision
// 1 - no collision
// 2 - high-collision
export function getCollisions(x: number, y: number) {
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