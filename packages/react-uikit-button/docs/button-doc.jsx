import React, { PropTypes } from 'react';
import Button from '../lib/button';
import Table from 'react-uikit-table';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Button';
const npmName = 'react-uikit-button';
const summary = 'Easily create nice looking buttons, which come in different styles.';

const generateExampleJSX = ({ body, block, context, disabled, margin, type }) =>
  <Button {...{ body, block, context, disabled, margin, type }} />;

generateExampleJSX.propTypes = {
  body: PropTypes.string,
  block: PropTypes.bool,
  context: PropTypes.string,
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  type: PropTypes.string,
};

const generateCodeSnippet = ({ body, block, context, disabled, margin, size, type }) =>
  `<Button${body ? `body="${body}"`: ""}${context ? `context="${context}"`: ""}${margin ? `margin="${margin}"`: ""}${size ? `size="${size}"`: ""}${type ? `type="${type}"`: ""}${disabled ? " disabled": ""}${block ? " block": ""} />`;

// An abstraction to save the same snippet being written multiple times
const exampleAbstraction = (argsArray) =>
  // There is a space at the end of the wrapping span element to span the badges.
  <div>{argsArray.map((arg) => <div>{generateExampleJSX(arg)}</div>)}</div>;

const basicArgs = [
  { body: 'Button', margin: 'bottom right' },
  { body: 'Link', margin: 'bottom right', type: 'link' },
  { body: 'Submit', margin: 'bottom right', type: 'submit' },
  { body: 'Disabled', margin: 'bottom right', disabled: true },
  { type: 'close' },
];
const basicExample = exampleAbstraction(basicArgs);
const basicSnippet = basicArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

const contextArgs = [
  { body: 'Primary', context: 'primary', margin: 'bottom right' },
  { body: 'Success', context: 'success', margin: 'bottom right' },
  { body: 'Danger', context: 'danger', margin: 'bottom right' },
  { body: 'Link', context: 'link', type: 'Link' },
];
const contextExample = exampleAbstraction(contextArgs);
const contextSnippet = contextArgs.map((arg) => generateCodeSnippet(arg)).join('\n');
const contextTable = (
  <Table head={['Prop', 'Description']} body={[
    {
      type: <code>context='primary'</code>,
      description: 'Emphasizes to identify the primary action in a set of buttons.'
    }, {
      type: <code>context='success'</code>,
      description: 'Indicates a successful or positive action.'
    }, {
      type: <code>context='danger'</code>,
      description: 'Indicates a dangerous or negative action.'
    }, {
      type: <code>context='link'</code>,
      description: 'De-emphasizes to look like a link while maintaining button behavior.'
    }
  ]} />
);

const sizeArgs = [
  { body: 'Mini Button', size: 'mini', margin: 'bottom right' },
  { body: 'Mini Button', size: 'mini', margin: 'bottom', context: 'primary' },
  { body: 'Small Button', size: 'small', margin: 'bottom right' },
  { body: 'Small Button', size: 'small', margin: 'bottom', context: 'primary' },
  { body: 'Default Button', margin: 'bottom right' },
  { body: 'Default Button', margin: 'bottom', context: 'primary' },
  { body: 'Large Button', size: 'large', margin: 'bottom right' },
  { body: 'Large Button', size: 'large', margin: 'bottom', context: 'primary' },
];
const sizeExample = exampleAbstraction(sizeArgs);
const sizeSnippet = sizeArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

const blockArgs = [
  { body: 'Button', margin: 'small bottom', block: true },
  { body: 'Button', context: 'primary', block: true },
];
const blockExample = exampleAbstraction(blockArgs);
const blockSnippet = blockArgs.map((arg) => generateCodeSnippet(arg)).join('\n');


const propTuples = [{
    prop: 'body',
    type: 'string'
  }, {
    prop: 'block',
    type: 'bool'
  }, {
    prop: 'context',
    type: 'oneOf active, link, or disabled'
  }, {
    prop: 'disabled',
    type: 'bool'
  }, {
    prop: 'size',
    type: 'oneOf mini, small, or large'
  }, {
    prop: 'type',
    type: 'oneOf button, close, or link'
  }
];

const ButtonDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Types"
      description={
        `The Button component creates either a button, link, submit or a close button by setting the <code>type</code>.` +
        `By defualt the Button component will create a button if no type is provided.`
      }
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Button Contexts"
      description={`The color of the button can be easily changed by adding a context to the context prop.`}
      jsx={contextExample}
      table={contextTable}
      snippet={contextSnippet}
    />
    <DocExample
      name="Button Sizes"
      description={`To change the size of a Button set the <code>size</code> prop to mini, small, or large.`}
      jsx={sizeExample}
      snippet={sizeSnippet}
    />
    <DocExample
      name="Button Blocks"
      description={`To create a full width button add the <code>block</code> prop to the buttton component.`}
      jsx={blockExample}
      snippet={blockSnippet}
    />
    <DocExample
      name="Button dropdown"
      description={`Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.`}
    />
    <DocFooter {...{ name, propTuples }} />
  </div>
);

export default ButtonDoc;
