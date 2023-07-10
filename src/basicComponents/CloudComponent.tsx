import React from "react";
import '../assets/images/cloud_small_1.svg'

export const CloudComponent = (backgroundImage: string, content: JSX.Element | string) => {
    return (<>
            <div
                className="cloud"
                style={{WebkitMaskImage: `url(` + require('../assets/images/' + backgroundImage + '.svg') + `)`}}>
                {content}
            </div>

        </>
    );
}