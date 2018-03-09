import React from "react";
import classNames from "classnames";
import Masonry from "react-masonry-component";

export const LegoGrid = props => {
  const { className, masonryProps, children, ...others } = props;
  const gridClassName = classNames("k-LegoGrid", className);

  return (
    <div className={gridClassName} {...others}>
      <Masonry {...masonryProps}>{children}</Masonry>
    </div>
  );
};

LegoGrid.Item = ({ children, ...props }) => {
  const itemClassName = classNames("k-LegoGrid__item", props.className);

  return (
    <div {...props} className={itemClassName}>
      <div className="k-LegoGrid__item__content">{children}</div>
    </div>
  );
};

LegoGrid.defaultProps = {
  className: null,
  masonryProps: {}
};

LegoGrid.Item.defaultProps = {
  className: null
};
