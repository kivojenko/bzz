import React from "react";

export const CloudComponent = (backgroundImage: string, content: JSX.Element | string) => {
  const backgroundImageSVG = `url(` + require('../../assets/images/' + backgroundImage + '.svg') + `)`;
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