import React from 'react';

import ALink from '../custom-link';

import SlideToggle from "react-slide-toggle";
// const preventDefault = (e) => {
//   if (props.href === '#') {
//     e.preventDefault();
//   }

//   if (props.onClick) {
//     props.onClick();
//   }
// };
export default function Card(props) {
  const { title, expanded = false, adClass, iconClass, type = 'normal', url } = props;

  return 'normal' === type ? (
    <SlideToggle collapsed={expanded ? false : true}>
      {({ onToggle, setCollapsibleElement, toggleState }) => (
        <div className={`card ${adClass}`}>
          <div className={`card-header`} onClick={onToggle}>
            <ALink href="#" className={`toggle-button ${toggleState.toLowerCase()}`}>
              {iconClass ? <i className={iconClass}></i> : ''}
              {title ? title : ''}
            </ALink>
          </div>

          <div ref={setCollapsibleElement}>
            <div className="card-body overflow-hidden">{props.children}</div>
          </div>
        </div>
      )}
    </SlideToggle>
  ) : 'parse' === type ? (
    <SlideToggle collapsed={expanded ? false : true}>
      {({ onToggle, setCollapsibleElement, toggleState }) => (
        <>
          {/* <ALink
                                href={ url ? url : '#' }
                                content={ title }
                                className={ `parse-content ${ toggleState.toLowerCase() }` }
                                onClick={ ( e ) => { onToggle(); } }
                            >
                            </ALink> */}
          <a
            className={`parse-content ${toggleState.toLowerCase()}`}
            onClick={() => {
              onToggle();
            }}
          >
            <h3 className="widget-title">
              {' '}
              {title}
              <span className="toggle-btn p-0 parse-content"></span>
            </h3>
          </a>
          <div ref={setCollapsibleElement} className="overflow-hidden">
            {props.children}
          </div>
        </>
      )}
    </SlideToggle>
  ) : (
    <SlideToggle collapsed={expanded ? false : true}>
      {({ onToggle, setCollapsibleElement, toggleState }) => (
        <>
          <ALink href={url ? url : '#'}>
            {title}
            <span
              className={`toggle-btn ${toggleState.toLowerCase()}`}
              onClick={(e) => {
                onToggle();
                e.preventDefault();
              }}
            ></span>
          </ALink>

          <div ref={setCollapsibleElement} className="overflow-hidden">
            {props.children}
          </div>
        </>
      )}
    </SlideToggle>
  );
  return '';
}
