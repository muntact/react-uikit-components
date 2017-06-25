import React from 'react';
import Alert from '../lib/alert';

import Button from 'react-uikit-button';
import uikit from 'react-uikit-base';
import velocity from 'velocity-animate';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [1, 0.5],
      translateX: [0, -300]
    },
    {display: 'block'}
  );
};


const handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [0, 1],
      translateX: [-300, 0]
    },
    {display: 'block'}
  );
};

const name = 'Alert';
const npmName = 'react-uikit-alert';
const summary = 'Defines styles for success, warning and error messages.';
const propTuples = [
  {
    name: "close",
    type: "func"
  },
  {
    name: "context",
    type: "oneOf: 'success' | 'warning' | 'danger'"
  },
  {
    name: "large",
    type: "bool"
  },
  {
    name: "show",
    type: "bool"
  },
];

const loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const alertOpenString = `const handleAlertOpen = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [1, 0.5],
      translateX: [0, -300]
    },
    {display: 'block'}
  );
};`;
const alertCloseString = `handleAlertClose = (e, kitid) => {
  e.preventDefault();
  const element = uikit.helpers.getElement(kitid);

  velocity(
    element,
    {
      opacity: [0, 1],
      translateX: [-300, 0]
    },
    {display: 'block'}
  );
};`;

const basicExample = (
  <div>
    <Button body='Open Alert' onClick={(e, kitid) => handleAlertOpen(e, 'alert1')} />
    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>{loremIpsumString}</Alert>
  </div>
);
const basicSnippet = `${alertOpenString}\n${alertCloseString}\n
  ...
  <div>
    <Button body='Open Alert' onClick={(e, kitid) => handleAlertOpen(e, 'alert1')} />
    <Alert close={(e, kitid) => handleAlertClose(e, kitid)} kitid='alert1'>{loremIpsumString}</Alert>
  </div>
`;

const contextExample = (
  <div>
    <Alert show context='success'>To indicate success or a positive message add the <code>context='success'</code> prop.</Alert>
    <Alert show context='warning'>To indicate a message containing a warning add the <code>context='warning'</code> prop.</Alert>
    <Alert show context='danger'>To indicate an important message add the <code>context='danger'</code> prop.</Alert>
  </div>
);
const contextSnippet = `
  <div>
    <Alert show context='success'>To indicate success or a positive message add the <code>context='success'</code> prop.</Alert>
    <Alert show context='warning'>To indicate a message containing a warning add the <code>context='warning'</code> prop.</Alert>
    <Alert show context='danger'>To indicate an important message add the <code>context='danger'</code> prop.</Alert>
  </div>`;

const sizeExample = <Alert show large ><h1>Important notice</h1>{loremIpsumString}</Alert>;
const sizeSnippet = `<Alert show large>\n  <h1>Important notice</h1>\n  ${loremIpsumString}\n</Alert>`;

const AlertDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={<div>
        <p>The alert component creates an alert box.</p>
        <p>To add a close button add the <code>close</code> prop with a callback. The kitid as well as the event will be passed to the callback alllowing for things such as animations.</p>
        <p>By default Alert components are set to display none. Add the <code>show</code> to make the component visible.</p>
      </div>}
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Alert contexts"
      description={<span>To change the context of an alert add <code>context='success'</code>, <code>context='warning'</code>, or <code>context='danger'</code> prop.</span>}
      jsx={contextExample}
      snippet={contextSnippet}
    />
    <DocExample
      name="Alert size"
      description={<span>To increase the spacing in an alert add the <code>large</code> prop to the alert component.</span>}
      jsx={sizeExample}
      snippet={sizeSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);


export default AlertDoc;
