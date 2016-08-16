window.ExternalRichLink = (props) => {
  return(
    <a className="k-ExternalRichLink k-SwitchPlatform__item" href={ props.href }>
      <div className="k-ExternalRichLink__element k-SwitchPlatform__element">
        { props.children }
      </div>

      <div className="k-ExternalRichLink__element k-ExternalRichLink__element--pull-end k-ExternalRichLink__element--animate">
        <span className="k-ButtonIcon k-ButtonIcon--tiny">
          <svg className="k-ButtonIcon__svg" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z"/>
              <path d="M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z"/>
            </g>
          </svg>
        </span>
      </div>
    </a>
  );
}

ExternalRichLink.defaultProps = {
  href: '#',
  children: (<span style={ {border: '1px solid #d8d8d8',
                            padding: '9px 70px',
                            color: '#d8d8d8',
                            textTransform: 'uppercase',
                            textDecoration: 'none'} } href="#">LOGO</span>)
}
