import { useAppSettings } from "../../model/AppSettings";
import './beeUtils';
import { getCollisions, getCoordinates, getNewAngle, getRotateAngle } from "./beeUtils";

export const getBeePosition = (id: string) => {
  const distance = 40;
  const stepsToCountFuture = 5;
  // const { settings } = useAppSettings();

  const nextLeftPositions = Array.from({ length: stepsToCountFuture }, (_, index) => index * distance);
  let left = nextLeftPositions[0];
  const nextBottomPositions = new Array(stepsToCountFuture).fill(window.innerHeight * 0.5);
  let bottom = nextBottomPositions[0];
  const nextAngles = new Array(stepsToCountFuture).fill(0);
  const angle = nextAngles[0];
  const nextRotateAngles = new Array(stepsToCountFuture).fill(0);
  const rotateAngle = nextRotateAngles[0];
  const nextRotatesX = new Array(stepsToCountFuture).fill(false);
  const rotateX = nextRotatesX[0];
  const nextRotatesY = new Array(stepsToCountFuture).fill(true);
  const rotateY = nextRotatesY[0];
  // const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined);

  function setCoordinates(x: number, y: number) {
    nextLeftPositions.push(Math.round(x));
    left = nextLeftPositions.shift() ?? 0;
    nextBottomPositions.push(Math.round(y));
    bottom = nextBottomPositions.shift() ?? 0;
  }

  function setRotate(rotateAngle: number, rotateX: boolean = false, rotateY: boolean = false) {
    nextRotateAngles.push(rotateAngle);
    nextRotatesX.push(rotateX);
    nextRotatesY.push(rotateY);
  }

  function planMovementForPosition(x: number, y: number, angle: number) {
    let [leftOffset, bottomOffset] = getCoordinates(angle, distance);
    let [leftChange, bottomChange] = getCollisions(x + leftOffset, y + bottomOffset);
    let [newX, newY, newAngle] = [x + leftOffset, y + bottomOffset, angle];
    // if (settings.animationsEnabled) {
      if (leftChange !== 1 || bottomChange !== 1 || Math.random() > 1 - window.innerWidth / 10000) {
        newAngle = getNewAngle(leftChange, bottomChange);
        [leftOffset, bottomOffset] = getCoordinates(angle, distance);
        [newX, newY] = [x + leftOffset, y + bottomOffset];
      }
    // } else if (bottomChange > 0) {
    //   newAngle = -90;
    //   [newX, newY] = [x, y - distance];
    // }
    return [newX, newY, newAngle]
  }

  function planMovement() {
    const [newX, newY, newAngle] = planMovementForPosition(nextLeftPositions[stepsToCountFuture - 1], nextBottomPositions[stepsToCountFuture - 1], nextAngles[stepsToCountFuture - 1]);
    setCoordinates(newX, newY);
    nextAngles.push(newAngle);
    setRotate(getRotateAngle(newAngle), false, newAngle < 90 || newAngle > 270)
  }

  const bee = document.getElementById(id);

  setInterval(() => {
    if (bee) {
      planMovement();
      console.log(left)
      bee?.setAttribute("style", `left: ${left}px, bottom: ${bottom}px
      transform:
    rotateX(${rotateX ? 180 : 0}) + "deg)
    rotateY(${rotateY ? 180 : 0}) + "deg)
    rotate(${rotateAngle}deg)`)
    } else {

    }
  }, 500);
}