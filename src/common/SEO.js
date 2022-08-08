import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Postlab | {title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="postlab, postlabs, 포스트랩, 쿠폰, 카드, 멤버십, 할인, benefit, treasure hunter, 가격 비교 서비스, price comparison service" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;