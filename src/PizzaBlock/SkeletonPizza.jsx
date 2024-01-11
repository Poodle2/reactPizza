import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = (props) => (
    <ContentLoader
        rtl
        speed={1}
        width={280}
        height={450}
        viewBox="0 0 280 450"
        backgroundColor="#C0C0C0"
        foregroundColor="#e0e0e0"
        {...props}
    >
        <circle cx="140" cy="115" r="115" />>
        <rect x="0" y="245" rx="10" ry="10" width="280" height="25" />
        <rect x="0" y="287" rx="10" ry="10" width="280" height="90" />
        <rect x="160" y="404" rx="10" ry="10" width="120" height="30" />
        <rect x="0" y="400" rx="25" ry="25" width="140" height="45" />
    </ContentLoader>
)

export default SkeletonPizza