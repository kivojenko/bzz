import React from "react";
import { ReactComponent as BeeSVG } from "../../assets/images/bee.svg";
import '../../assets/scripts/bee'
import { useBeePosition } from "../../assets/scripts/bee";


export const Bee = (props: {id: string}) => {
  const [x, y, rotateX, rotateY, angle] = useBeePosition();

  return <BeeSVG id={props.id} className="bee" width="100px" height="100px" style={{
        left: x + 'px',
        bottom: y + 'px',
        transform:
          "rotateX(" + (rotateX ? 180 : 0) + "deg) " +
          "rotateY(" + (rotateY ? 180 : 0) + "deg) " +
          "rotate(" + angle + "deg)"
      }}/>;
}
