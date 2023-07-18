import React from "react";
import { ReactComponent as BeeSVG } from "../../assets/images/bee.svg";
import '../../assets/scripts/bee'
import { useBeePosition } from "../../assets/scripts/bee";


export const Bee = () => {
  const [x, y, angle] = useBeePosition();

  return (
    <div id="bee-container">
      <BeeSVG id="bee" width="100px" height="100px" style={{
        left: x + 'px',
        bottom: y + 'px',
        transform: "rotateY(" + ((270 < angle || angle < 90) ? 180 : 0) + "deg) rotate(" + angle % 180 + "deg)"
      }}/>
    </div>);
}
