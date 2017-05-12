'use strict';

import React, { PropTypes } from 'react';
import uikit from 'react-uikit-base';
import { either } from 'ufunc';
import Dialog from './dialog';
import Trigger from 'react-uikit-trigger';

const bodyStyle = (pading, overflow) => {
  const body = document.getElementsByTagName('body');
  body[0].style.paddingRight = pading;
  body[0].style.overflow = overflow;
};

const getOffCanvasElement = (kitid) => {
  return {
    offCanvas: uikit.helpers.getElement(`off-canvas-${kitid}`),
    dialog: uikit.helpers.getElement(`dialog-${kitid}`)
  };
};


class OffCanvas extends React.Component {
  constructor (props) {
    super(props);

    // TODO: probably need some handler funcs.
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleCloseClick (e) {
    e && e.preventDefault();

    const props = this.props;
    const { modal, dialog } = getOffCanvasElement(props.kitid);

    props.trigger.animate.out(modal, dialog);
    setTimeout(() => bodyStyle('', ''), 200);

  }

  handleToggleClick (e) {
    const props = this.props;
    const { modal, dialog } = getOffCanvasElement(props.kitid);

    const show = () => {
      bodyStyle('16px', 'hidden');
      props.trigger.animate.in(modal, dialog);
    };

    const hide = () => {
      const kitid = (e.target.dataset ? e.target.dataset.kitid : undefined);


      if (typeof kitid !== 'undefined') {
        const prefix = kitid.substr(0, kitid.indexOf('-'));

        if (prefix === 'modal') {
          this.handleCloseClick(e);
        }
      }
    };

    either(show, hide)(!this.props.show);
  }

  render () {
    const props = this.props;

    // CSS classes
    const cssClassNames = uikit.helpers.cleanClasses([
      'uk-offcanvas',
      props.classes,
      props.className
    ]);

    const ignoreProps = [
      'blank',
      'cancel',
      'caption',
      'children',
      'className',
      'classes',
      'close',
      'confirm',
      'dialog',
      'footer',
      'header',
      'kitid',
      'lightbox',
      'ok',
      'large',
      'show',
      'trigger',
      'type'
    ];


    const cleanProps = uikit.helpers.cleanProps(ignoreProps)({
      ...this.props,
      confirm: null,
      ok: null,
      show: null,
      trigger: null,
    });


    // Return Component
    return (
      <div>
        <Trigger {...props.trigger} kitid={`trigger-${props.kitid}`} onClick={this.handleToggleClick}/>

        <div {...cleanProps}
          className={cssClassNames}
          data-kitid={`off-canvas-${props.kitid}`}
          onClick={this.handleToggleClick}
        >
          <Dialog
            {...props.dialog}
            blank={props.blank}
            cancel={Object.assign(
              {
                kitid: `ok-${props.kitid}`,
                onClick: this.handleCloseClick
              },
              props.cancel
            )}
            caption={props.caption}
            confirm={{
              ...props.confirm,
              ...{
                kitid: `confirm-${props.kitid}`,
                onClick: this.handleConfirmClick
              }
            }}
            footer={props.footer}
            header={props.header}
            kitid={props.kitid}
            large={props.large}
            lightbox={props.lightbox}
            ok={Object.assign(
              {},
              props.ok,
              {
                kitid: `ok-${props.kitid}`,
                onClick: this.handleOkClick
              }
            )}
            onClose={props.close ? this.handleCloseClick: null}
            spinner={props.spinner}
            type={props.type}
          >
            {props.children}
          </Dialog>
        </div>
      </div>
    );
  }
}


OffCanvas.propTypes = {
  flip      : PropTypes.bool,
  mode      : PropTypes.oneOf(['push', 'slide', 'reveal', 'none']),
  // trigger   : React.PropTypes.object,
  type      : PropTypes.oneOf(['panel', 'nav']),
  //.... ?
  // show      : PropTypes.bool,
  // take a node as an arg...?
  // funcs required...
  blank     : React.PropTypes.bool,
  cancel    : React.PropTypes.object,
  caption   : React.PropTypes.node,
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  close     : React.PropTypes.bool,
  confirm   : React.PropTypes.object,
  dialog    : React.PropTypes.object,
  footer    : React.PropTypes.any,
  header    : React.PropTypes.any,
  kitid     : React.PropTypes.string,
  lightbox  : React.PropTypes.bool,
  ok        : React.PropTypes.object,
  show      : React.PropTypes.bool,
  trigger   : React.PropTypes.object,
  // type      : React.PropTypes.oneOf(['block', 'alert', 'prompt', 'confirm'])
};

OffCanvas.defaultProps = {
  type: 'push',
};

export default uikit.base(OffCanvas);
