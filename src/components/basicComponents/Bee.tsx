import React, { useEffect, useMemo } from "react";
import { ReactComponent as BeeSVG } from "../../assets/images/bee.svg";
import { getBeePosition } from "../../assets/scripts/bee";


export const Bee = (props: { id: string }) => {
  getBeePosition(props.id);

  return <BeeSVG id={props.id} className="bee" width="100px" height="100px"/>;
}
