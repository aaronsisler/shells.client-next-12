import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./video-player.module.scss";

const VideoPlayer = ({ className, url }) => (
  <div className={cn(styles.videoPlayer, className)}>
    <iframe src={url} title="video player" width="100%" frameBorder="0" />
  </div>
);

VideoPlayer.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export { VideoPlayer };
