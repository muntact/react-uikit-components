'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
// import {
//  maybeIf,
//  either
// } from 'ufunc';
import Panel from 'react-uikit-panel';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';


const SideNav = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-offcanvas',
  ]);

  // Elements
  // const caption = maybeIf(
  //   <div className='uk-modal-caption'>{props.caption}</div>
  // )(props.caption);

  const type = {
    panel: <Panel
      className={cssClassNames}
      data-kitid={`dialog-${props.kitid}`}
    >
      {props.children}
    </Panel>,

    nav: <Nav
        type='side'
        cols='1-4'
        className={cssClassNames}
        data-kitid={`dialog-${props.kitid}`}>
      <NavItem body='Active' href='#' active />
      <NavItem body='Item' href='#' />
      <NavItem body='Item' href='#' />
      {props.children}
    </Nav>,
  };
  // if (props.confirm) console.log(props.confirm.show);

  // Return Component
  return type[props.type] || type['block'];
};


SideNav.propTypes = {
  children : React.PropTypes.any,
  flip     : React.PropTypes.bool,
  kitid    : React.PropTypes.string,
  type     : React.PropTypes.oneOf(['block', 'alert', 'prompt', 'confirm'])
};

export default uikit.base(SideNav);
