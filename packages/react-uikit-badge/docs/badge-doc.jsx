import React, { PropTypes } from 'react';
import Badge from '../lib/badge';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Badge';
const npmName = 'react-uikit-badge';
const summary = 'Easily create nicely looking badges to label and highlight your content.';
const propTuples = [
  {
    Prop: "context",
    Type: "oneOf: 'default' | 'muted' | 'primary' | 'secondary'"
  },
  {
    Prop: "block",
    Type: "bool"
  },
  {
    Prop: "body",
    Type: "string"
  },
  {
    Prop: "notification",
    Type: "bool"
  },
];

const generateExampleJSX = ({ block, context, notification = false, text }) => (
  <Badge {...{ block, context, notification }}>
    {text}
  </Badge>
);

generateExampleJSX.propTypes = {
  block: PropTypes.bool,
  context: PropTypes.string,
  notification: PropTypes.bool,
  text: PropTypes.oneOf([ PropTypes.number, PropTypes.string ]),
};


const generateCodeSnippet = ({ context, notification, text }) =>
  `<Badge${context ? ` context="${context}"`: ""}${notification ? " notification": ""}>${text}</Badge>`;

// An abstraction to save the same snippet being written multiple times
const exampleAbstraction = (argsArray) =>
  // There is a space at the end of the wrapping span element to span the badges.
  <div>{argsArray.map((arg) => <span>{generateExampleJSX(arg)} </span>)}</div>;

const blockArgs = [{ block: false, text: 'I am a span' }, { block: true, text: 'I am a div' }];
const blockExample = exampleAbstraction(blockArgs);
const blockSnippet = blockArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

const textArgs = [{ text: 'Info' }, { text: 'New' }, { text: 'Free' }];
const textExample = exampleAbstraction(textArgs);
const textSnippet = textArgs.map((arg) => generateCodeSnippet(arg)).join('\n');


const notificationArgs = [{ notification: true, text: 3 }, { notification: true, text: 20 }, { notification: true, text: 100 }];
const notificationExample = exampleAbstraction(notificationArgs);
const notificationSnippet = notificationArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

const contextArgs = [
  { context: 'success', text: 'success' }, { context: 'warning', text: 'warning' }, { context: 'danger', text: 'danger' },
  { context: 'success', notification: true, text: 1 }, { context: 'warning', notification: true, text: 10 }, { context: 'danger', notification: true, text: '100+' },
];
const contextExample = exampleAbstraction(contextArgs);
const contextSnippet = contextArgs.map((arg) => generateCodeSnippet(arg)).join('\n');


const BadgeDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Badge Element"
      description={`By default badges are <code>span<code> but they can be made <div>s by setting the \`block\` prop.`}
      jsx={blockExample}
      snippet={blockSnippet}
    />
    <DocExample
      name="Badge Text"
      description={`Text can be added either as \`children\` <Badge>Awesome</Badge> or by setting the \`body\` prop <Badge body='Awesome'/>.`}
      jsx={textExample}
      snippet={textSnippet}
    />
    <DocExample
      name="Badge notifications"
      description={`Use the \`notification\` prop to indicate that the badge is a notification. Typically it is used with numbers.`}
      jsx={notificationExample}
      snippet={notificationSnippet}
    />
    <DocExample
      name="Badge Contexts"
      description={`Add the \`context\` process with a value of "success", "warning" or "danger" for additional context.`}
      jsx={contextExample}
      snippet={contextSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default BadgeDoc;
