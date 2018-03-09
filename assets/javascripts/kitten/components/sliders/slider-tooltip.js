import React from "react";
import classNames from "classnames";

export const SliderTooltip = ({ className, percentage, children }) => {
  return (
    <div className={classNames("k-SliderTooltip", className)}>
      <div className="k-SliderTooltip__tip">
        <div
          className="k-SliderTooltip__tip__content"
          style={{ left: percentage }}
        >
          {children}
        </div>
      </div>
      <div className="k-SliderTooltip__arrow">
        <div
          className="k-SliderTooltip__arrow__content"
          style={{ left: percentage }}
        />
      </div>
    </div>
  );
};

// DEPRECATED: do not use default export.
export default SliderTooltip;
