import React from "react";

export const Cloud = (backgroundImage: string, content: JSX.Element | string) => {
  const backgroundImageSVG = `url(` + require('../../assets/images/clouds/' + backgroundImage + '.svg') + `)`;
  return (
    <div
      className="cloud"
      style={{
        WebkitMaskImage: backgroundImageSVG,
        maskImage: backgroundImageSVG
      }}
    >
      {content}
    </div>
  );
}