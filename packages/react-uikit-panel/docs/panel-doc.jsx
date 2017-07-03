// TODO: this file...
import React from 'react';

import Grid from 'react-uikit-grid';
import Table from 'react-uikit-table';

import Panel from '../lib/panel';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const name = 'Panel';
const npmName = 'react-uikit-panel';
const summary = 'Create layout boxes with different styles.';
const propTuples = [{
    Prop: "badge",
    Type: "string or object: {`{body , context}`}"
  }, {
    Prop: "box",
    Type: "bool"
  }, {
    Prop: "context",
    Type: "oneOf: 'primary' | 'secondary'"
  }, {
    Prop: "header",
    Type: "bool"
  }, {
    Prop: "hover",
    Type: "bool"
  }, {
    Prop: "icon",
    Type: "string"
  }, {
    Prop: "space",
    Type: "bool"
  }, {
    Prop: "teaser",
    Type: "objectOf: {`{src, alt}`}"
  }, {
    Prop: "type",
    Type: "oneOf: 'block' (default) | 'link'"
  }
];

const basicTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop: (<code>tilte</code>),
      Description: (<span>Add <code>title</code> prop to add the panel title.</span>),
    }, {
      Prop: (<code>badge</code>),
      Description: (<p>Add the <code>badge</code> prop to add a panel badge. Add <code>badge='value'</code> to set the body of the badge to the value of the string.
        Add <code>badge=&#123;&#123;body: 'value', context: 'danger'&#125;&#125;</code> to set the body and the context of the badge. Badge context can be success, warning or danger.</p>)
    },
  ]} />
);
const basicExample = (
  <Grid medium='1-3' large='1-3'>
    <Panel title='Title' badge={{body: 'hot', context: 'danger'}}>{loremIpsumString}</Panel>
  </Grid>
);
const basicSnippet = `
<Grid medium='1-3' large='1-3'>
  <Panel title='Title' badge={{body: 'hot', context: 'danger'}}>${loremIpsumString}</Panel>
</Grid>`;

const typesTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop: (<code>block</code>),
      Description: "Renders the panel as a block.",
    }, {
      Prop: (<code>link</code>),
      Description: (<span>Renders the panel inside of a block. The <code>link='url/path'</code> is required to set the link\'s address.</span>)
    },
  ]} />
);
const typesExample = (
  <Grid>
    <Panel colMedium='1-3' margin='bottom' box title='Block panel' type='block'>{loremIpsumString}</Panel>
    <Panel colMedium='1-3' box title='Link panel' type='link' link=''>{loremIpsumString}</Panel>
  </Grid>
);
const typesSnippet = `
<Grid>
  <Panel colMedium='1-3' margin='bottom' box title='Block panel' type='block'>${loremIpsumString}</Panel>
  <Panel colMedium='1-3' box title='Link panel' type='link' link=''>${loremIpsumString}</Panel>
</Grid>`;

const boxExample = (
  <Grid medium='1-3' large='1-3' indent>
    <Panel box title='Title' badge={{body: 'hot', context: 'danger'}}>{loremIpsumString}</Panel>
  </Grid>
);
const boxSnippet = `
<Grid medium='1-3' large='1-3' indent>
  <Panel box title='Title' badge={{body: 'hot', context: 'danger'}}>${loremIpsumString}</Panel>
</Grid>`;

const boxPrimaryExample = (
  <Grid>
    <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>{loremIpsumString}</Panel>
    <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>{loremIpsumString}</Panel>
    <Panel colMedium='1-3' box title='Title' context='primary'>{loremIpsumString}</Panel>
  </Grid>
);
const boxPrimarySnippet = `
<Grid>
  <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>${loremIpsumString}</Panel>
  <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>${loremIpsumString}</Panel>
  <Panel colMedium='1-3' box title='Title' context='primary'>${loremIpsumString}</Panel>
</Grid>`;

const boxSecondaryExample = (
  <Grid>
    <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>{loremIpsumString}.</Panel>
    <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>{loremIpsumString}.</Panel>
    <Panel colMedium='1-3' box title='Title' context='secondary'>{loremIpsumString}.</Panel>
  </Grid>
);
const boxSecondarySnippet = `
<Grid>
  <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>${loremIpsumString}.</Panel>
  <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>${loremIpsumString}.</Panel>
  <Panel colMedium='1-3' box title='Title' context='secondary'>${loremIpsumString}.</Panel>
</Grid>`;

const boxHoverExample = (
  <Grid indent>
    <Panel margin='bottom' title='Title' link='#' hover>{loremIpsumString}.</Panel>
    <Panel margin='bottom' title='Title' link='#' hover>{loremIpsumString}.</Panel>
    <Panel title='Title' link='#' hover>{loremIpsumString}.</Panel>
  </Grid>
);
const boxHoverSnippet = `
<Grid indent>
  <Panel margin='bottom' title='Title' link='#' hover>${loremIpsumString}.</Panel>
  <Panel margin='bottom' title='Title' link='#' hover>${loremIpsumString}.</Panel>
  <Panel title='Title' link='#' hover>${loremIpsumString}.</Panel>
</Grid>`;

const headerExample = (
  <Grid>
    <Panel header colMedium='1-3' title='Title' margin='bottom' >{loremIpsumString}.</Panel>
    <Panel header colMedium='1-3' title='Title' margin='bottom' >{loremIpsumString}.</Panel>
    <Panel header colMedium='1-3' title='Title' margin='bottom' >{loremIpsumString}.</Panel>
  </Grid>
);
const headerSnippet = `
<Grid>
  <Panel header colMedium='1-3' title='Title' margin='bottom' >${loremIpsumString}.</Panel>
  <Panel header colMedium='1-3' title='Title' margin='bottom' >${loremIpsumString}.</Panel>
  <Panel header colMedium='1-3' title='Title' margin='bottom' >${loremIpsumString}.</Panel>
</Grid>`;

const spaceExample = (
  <div>
    <Grid>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
    </Grid>
    <Grid>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
    </Grid>
  </div>
);
const spaceSnippet = `
<Grid>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
</Grid>
<Grid>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
  <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
</Grid>`;

const teaserExample = (
  <Grid>
    <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
    <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
    <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
  </Grid>
);
const teaserSnippet = `
<Grid>
  <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
  <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
  <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
</Grid>`;

const iconExample = (
  <Grid>
    <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
    <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
    <Panel icon='user' box colMedium='1-3' title='Title'>{loremIpsumString}</Panel>
  </Grid>
);
const iconSnippet = `
<Grid>
  <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>${loremIpsumString}</Panel>
  <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>${loremIpsumString}</Panel>
  <Panel icon='user' box colMedium='1-3' title='Title'>${loremIpsumString}</Panel>
</Grid>`;

const PanelDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      description="The Panel component consists of the panel itself, the panel title and a panel badge. To prevent redundant white space, top and bottom margins are removed from the panel's content.."
      table={basicTable}
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Panel Types"
      table={typesTable}
      jsx={typesExample}
      snippet={typesSnippet}
    />
    <DocExample
      name="Panel box"
      description="By default the Panel has no styling. The panel box places a box around a panel."
      jsx={boxExample}
      snippet={boxSnippet}
    />
    <DocExample
      name="Panel box primary"
      description={<span>Add the <code>context='primary'</code> prop to modify the box panel to emphasize it by using a different color.</span>}
      jsx={boxPrimaryExample}
      snippet={boxPrimarySnippet}
    />
    <DocExample
      name="Panel box secondary"
      description={<span>Add the <code>context='secondary'</code> prop to modify the box panel which will give it a white background.</span>}
      jsx={boxSecondaryExample}
      snippet={boxSecondarySnippet}
    />
    <DocExample
      name="Panel hover"
      description={<span>Add the <code>hover</code> prop to add a hover effect to the panel. This comes in handy when using the panel as a link.</span>}
      jsx={boxHoverExample}
      snippet={boxHoverSnippet}
    />
    <DocExample
      name="Panel header"
      description={<span>Add the <code>header</code> prop to separate the panel title and content with a horizontal line.</span>}
      jsx={headerExample}
      snippet={headerSnippet}
    />
    <DocExample
      name="Panel space"
      description={<span>Add the <code>space</code> prop to increase the spacing around the panel content.</span>}
      jsx={spaceExample}
      snippet={spaceSnippet}
    />
    <DocExample
      name="Panel box with teaser"
      description={<span>To display an image inside a panel box that is attached to the border of the panel without any spacing, just add the <code>teaser=&#123;&#123;src: , alt: &#125;&#125;</code> prop..</span>}
      jsx={teaserExample}
      snippet={teaserSnippet}
    />
    <DocExample
      name="Panel with icons"
      description={<span>Easily apply an icon from UIkit <a href='http://getuikit.com/docs/icon.html'>Icon</a> to your panel by adding <code>icon='icon-name'</code>.</span>}
      jsx={iconExample}
      snippet={iconSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default PanelDoc;
