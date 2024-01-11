import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = (props) => (
    <ContentLoader
        rtl
        speed={4}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#bdbdbd"
        foregroundColor="#f2f2f2"
        {...props}
    >
        <circle cx="140" cy="125" r="125" />
        <rect x="0" y="260" rx="10" ry="10" width="280" height="20" />
        <rect x="0" y="295" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="400" rx="25" ry="25" width="152" height="45" />
        <rect x="160" y="410" rx="10" ry="10" width="120" height="25" />
    </ContentLoader>
)

export default SkeletonPizza