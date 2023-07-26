import React from "react";
import { ReactComponent as BeeSVG } from "../../assets/images/bee.svg";
import '../../assets/scripts/bee'
import { useBeePosition } from "../../assets/scripts/bee";


export const Bee = (props: {id: string}) => {
  const [x, y, rotateX, rotateY, angle] = useBeePosition();

  return <BeeSVG id={props.id} className="bee" width="100px" height="100px" style={{
        left: x.current + 'px',
        bottom: y.current + 'px',
        transform:
          "rotateX(" + (rotateX.current ? 180 : 0) + "deg) " +
          "rotateY(" + (rotateY.current ? 180 : 0) + "deg) " +
          "rotate(" + angle.current + "deg)"
      }}/>;
}
