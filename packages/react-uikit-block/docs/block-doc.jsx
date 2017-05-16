import React, { PropTypes } from 'react';

import Block from '../lib/block';
import Grid from 'react-uikit-grid';
import Note from 'react-uikit-note';
import Panel from 'react-uikit-panel';
import Table from 'react-uikit-table';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const name = 'Block';
const npmName = 'react-uikit-block';
const summary = 'Separate content sections by bundling them in blocks with different styles.';
const propTuples = [
  {
    Prop: "context",
    Type: "oneOf: 'default' | 'muted' | 'primary' | 'secondary'"
  },
  {
    Prop: "contrast",
    Type: "bool"
  },
  {
    Prop: "large",
    Type: "bool"
  },
];

const generateExampleJSX = ({ context, container = false, contrast, key, large, title = 'block' }) => (
  <Block {...{ context, container, contrast, large, key }}>
    <h4>{title}</h4>
    <Grid widths='1-3'>
      <Panel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.
      </Panel>
      <Panel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.
      </Panel>
      <Panel>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna.
      </Panel>
    </Grid>
  </Block>
);

generateExampleJSX.propTypes = {
  context: PropTypes.string.isRequired,
  container: PropTypes.bool.isRequired,
  contrast: PropTypes.bool.isRequired,
  key: PropTypes.number,
  large: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const generateCodeSnippet = ({ context, container, contrast, large, title }) =>
`<Block ${context ? `context='${context}' ` : "" }${container ? "container " : "" }${contrast ? "contrast " : "" }${large ? "large " : "" }>
  <h4>${title}</h4>
  <Grid widths='1-3'>
    <Panel>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
    <Panel >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna.
    </Panel>
  </Grid>
</Block>`;

const mutedArgs = { context: "muted", title: 'Basic' };
const mutedExample = generateExampleJSX(mutedArgs);
const mutedSnippet = generateCodeSnippet(mutedArgs);

const containerArgs = { context: "muted", container: true, title: 'Muted + Container' };
const containerExample = generateExampleJSX(containerArgs);
const containerSnippet = generateCodeSnippet(containerArgs);

// TODO: replace the calls with maps...
const contextExamples = [
  { context: "default", container: true, title: 'Default' },
  { context: "muted", container: true, title: 'Muted' },
  { context: "primary", container: true, title: 'Primary' },
  { context: "secondary", container: true, title: 'Secondary' },
];
const contextTable = (
  <Table
    head={['Value', 'Description']}
    body={[{
      Value       : "default",
      Description : "Add the default background color, usually white or similar."
    }, {
      Value       : <code>muted</code>,
      Description : "Adds a light background color."
    }, {
      Value       : <code>primary</code>,
      Description : "Adds the primary background color."
    }, {
      Value       : <code>secondary</code>,
      Description : "Adds the secondary background color, usually a dark one."
    }]} />
);
const contextExample = (
  <div data-markdown-omit-wrapper="true">
    {contextExamples.map((example, key) => generateExampleJSX(example, key))}
  </div>
);

const contextSnippet = contextExamples
  .map((example) => generateCodeSnippet(example))
  .join();

const largeArgs = { context: "secondary", container: true, title: 'Secondary', contrast: true, large: true };
const largeExample = generateExampleJSX(largeArgs);
const largeSnippet = generateCodeSnippet(largeArgs);

const BlockDocs = () => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
      <DocExample jsx={mutedExample} snippet={mutedSnippet} />
      <DocExample
        name="Block Container"
        description="To put the Block in to a container use the <code>container</code> prop"
        jsx={containerExample}
        snippet={containerSnippet}
      />
      <DocExample
        name="Block Context"
        description="To apply different background colors, add one of the following values for the <code>context</code> prop."
        table={contextTable}
        jsx={contextExample}
        snippet={contextSnippet}
        scroll="text"
      />
        <Note badge='NOTE'>
          To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.
        </Note>
      <DocExample
        name="Block large"
        description="To add the body in a container use the <code>container</code> prop."
        jsx={largeExample}
        snippet={largeSnippet}
      />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default BlockDocs;
