import React from "react";
import PropType from "prop-types";

import css from "./AdvertBanner.module.css";

import advertBannerData from "./configData";
import AdvertBannerItem from "./AdvertBannerItem";

const AdvertBanner = () => (
  <div className={css.container}>
    {advertBannerData.map(banner => (
      <AdvertBannerItem key={banner.id} {...banner} />
    ))}
  </div>
);

AdvertBanner.PropType = {
  title: PropType.string.isRequired,
  attach: PropType.string.isRequired,
  advertBannerClassName: PropType.string
};

AdvertBanner.defaultProps = {
  advertBannerClassName: ""
};

export default AdvertBanner;
