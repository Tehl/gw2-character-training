import React from "react";

import "./LoadingMask.less";

const LoadingMask = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading">
        <div className="mask" />
        <div className="spinner" />
      </div>
    );
  }

  return null;
};

export default LoadingMask;
