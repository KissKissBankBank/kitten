window.SliderTooltip = ({ className, percentage, children }) =>
  <div className={ classNames('k-SliderTooltip', className) }>
    <div className="k-SliderTooltip__tip">
      <div className="k-SliderTooltip__tip__content"
           style={ { left: percentage } }>
        { children }
      </div>
    </div>
    <div className="k-SliderTooltip__arrow">
      <div className="k-SliderTooltip__arrow__content"
           style={ { left: percentage } }></div>
    </div>
  </div>
