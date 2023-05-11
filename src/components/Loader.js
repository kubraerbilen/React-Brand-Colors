import { useState } from "react";
import ContentLoader from "react-content-loader"
import React from "react"

function Loader() {

    return (
        <ContentLoader
            speed={2}
            width={500}
            height={84}
            viewBox="0 0 500 84"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="5" y="3" rx="3" ry="3" width="100" height="11" />
            <rect x="7" y="38" rx="0" ry="0" width="70" height="40" />
            <rect x="87" y="38" rx="0" ry="0" width="70" height="40" />
            <rect x="169" y="38" rx="0" ry="0" width="70" height="40" />
            <rect x="248" y="38" rx="0" ry="0" width="70" height="40" />
            <rect x="328" y="37" rx="0" ry="0" width="70" height="40" />
            <rect x="407" y="37" rx="0" ry="0" width="70" height="40" />
        </ContentLoader>
    )
}

export default Loader