import React from 'react';

import Grid from 'react-uikit-grid';
import Panel from 'react-uikit-panel';
import Table from 'react-uikit-table';
import Text from '../lib/text';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';


const name = 'Text';
const npmName = 'react-uikit-text';
const propTuples = [{
    Prop: "bold",
    Type: "bool"
  }, {
    Prop: "context",
    Type: "oneOf: 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'contrast'",
  }, {
    Prop: "heading",
    Type: "oneOf: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
  }, {
    Prop: "href",
    Type: "string for a type only.",
  }, {
    Prop: "size",
    Type: "oneOf: 'small' | 'large'",
  }, {
    Prop: "type",
    Type: "oneOf: 'a' | 'abbr' | 'code' | 'del' | 'dfn' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hr' | 'ins' | 'mark' | 'q' | 'p' (default) | 'small' | 'span' | 'strong'"
}];

const loremIpsumString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const textTypeTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>type='p'</code>,
      Description : <span>Define a paragraph using the <Text type='p' display='inline'>p type.</Text></span>
    }, {
      Prop       : <code>type='a'</code>,
      Description : <span>Turn text into hypertext using the <Text type='a'>a type.</Text></span>
    }, {
      Prop       : <code>type='em'</code>,
      Description : <span>Emphasize text using the <Text type='em'>em element</Text>.</span>
    }, {
      Prop       : <code>type='strong'</code>,
      Description : <span>Imply any extra importance using the <Text type='strong'>strong type</Text>.</span>
    }, {
      Prop       : <code>type='code'</code>,
      Description : <span>Define inline code snippets using the <Text type='code'>code type.</Text></span>
    },     {
      Prop : <code>type='ins'</code>,
      Description : <span>Mark document changes as inserted text using the <Text type='ins'>ins type</Text>.</span>,
    }, {
      Prop : <code>type='mark'</code>,
      Description : <span>Highlight text with no semantic meaning using the <Text type='mark'>mark type</Text>.</span>,
    }, {
      Prop : <code>type='q'</code>,
      Description : <span>Define inline quotations using <Text type='q'> q type</Text>.</span>,
    }, {
      Prop : <code>type='abbr'</code>,
      Description : <span>Define an abbreviation using the <Text type='abbr' title='Abbreviation Element'>abbr type</Text> with a <code>title=''</code>       Prop.</span>,
    }, {
      Prop : <code>type='del'</code>,
      Description : <span>Mark document changes as deleted text using the <Text type='del'>del type</Text> with a <code>title=''</code>       Prop.</span>,
    }, {
      Prop : <code>type='dfn'</code>,
      Description : <span>Define a definition term using the <Text type='dfn' title='Defines a definition term'>dfn type</Text> with a <code>title=''</code>       Prop.</span>,
    }, {
      Prop : <code>type='small'</code>,
      Description : <span>De-emphasize text for small print using the <Text type='small'>small</Text> type.</span>,
    }, {
      Prop : <code>type='h1'</code>,
      Description : <span>Define a h1 heading using the <Text type='h1' display='inline'>h1 type</Text>.</span>,
    }, {
      Prop : <code>type='h2'</code>,
      Description : <span>Define a h2 heading using the <Text type='h2' display='inline'>h2 type</Text>.</span>,
    }, {
      Prop : <code>type='h3'</code>,
      Description : <span>Define a h3 heading using the <Text type='h3' display='inline'>h3 type</Text>.</span>,
    }, {
      Prop : <code>type='h4'</code>,
      Description : <span>Define a h4 heading using the <Text type='h4' display='inline'>h4 type</Text>.</span>,
    }, {
      Prop : <code>type='h5'</code>,
      Description : <span>Define a h5 heading using the <Text type='h5' display='inline'>h5 type</Text></span>,
    }, {
      Prop : <code>type='h6'</code>,
      Description : <span>Define a h6 heading using the <Text type='h6' display='inline'>h6 type</Text>.</span>,
    }, {
      Prop : <code>type='span'</code>,
      Description : <span>Define parts of inline text with the <Text type='span' display='inline'>span type</Text>. Use when no other component or HTML element is suitable.</span>,
    }, {
      Prop : <code>type='hr'</code>,
      Description : <span>Create a horizontal rule by using the <code>hr type</code>.</span>,
    }]} />
);
const headingsTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>heading='h1'</code>,
      Description : "Changes the size of text to h1",
    }, {
      Prop       : <code>heading='h2'</code>,
      Description : "Changes the size of text to h2",
    }, {
      Prop       : <code>heading='h3'</code>,
      Description : "Changes the size of text to h3",
    }, {
      Prop       : <code>heading='h4'</code>,
      Description : "Changes the size of text to h4",
    }, {
      Prop       : <code>heading='h5'</code>,
      Description : "Changes the size of text to h5",
    }, {
      Prop       : <code>heading='h6'</code>,
      Description : "Changes the size of text to h6",
    }]} />
);
const sizeTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>size='small'</code>,
      Description : <span>Add the <code>size='small'</code> prop to <Text type='span' size='small'>decrease the font size.</Text></span>
    }, {
      Prop       : <code>size='large'</code>,
      Description : <span>Add the <code>size='large'</code> prop to <Text type='span' size='large'>increase the font size.</Text></span>
    }]} />
);

const contextTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>context='muted'</code>,
      Description : <Text context='muted'>Add the muted prop to mute text.</Text>,
    }, {
      Prop       : <code>context='primary'</code>,
      Description : <Text context='primary'>Add the primary prop to highlight additional information.</Text>,
    }, {
      Prop       : <code>context='success'</code>,
      Description : <Text context='success'>Add the success prop to indicate success.</Text>,
    }, {
      Prop       : <code>context='warning'</code>,
      Description : <Text context='warning'>Add the warning prop to indicate warning.</Text>,
    }, {
      Prop       : <code>context='danger'</code>,
      Description : <Text context='danger'>Add the danger prop to indicate danger.</Text>,
    }, {
      Prop       : <code>context='contrast'</code>,
      Description : <Text>Add the contrast prop to make the text context readable on flat context areas or pictures. It's usualy white.</Text>,
    }]} />
);
const contextSnippet = `
  <Text context='muted'>Add the muted props for text.</Text>
  <Text context='primary'>Add the primary props to text context.</Text>
  <Text context='success'>Add the success props to  your to text context.</Text>
  <Text context='warning'>Addthe  warning props to  your to text context.</Text>
  <Text context='danger'>Add the danger props to  your to text context.</Text>
  <Text context='contrast'>Add the contrast props to make the text context readable on flat context areas or pictures. It's often white.</Text>`;

const alignTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>textAlign='left'</code>,
      Description : "Aligns text to the left.",
    }, {
      Prop       : <code>textAlign='leftSmall'</code>,
      Description : "Aligns text to the left only on small devices.",
    }, {
      Prop       : <code>textAlign='leftMedium'</code>,
      Description : "Aligns text to the left on medium and small devices.",
    }, {
      Prop       : <code>textAlign='right'</code>,
      Description : "Aligns text to the right.",
    }, {
      Prop       : <code>textAlign='center'</code>,
      Description : "Centers text horizontally.",
    }, {
      Prop       : <code>textAlign='centerSmall'</code>,
      Description : "Centers text horizontally only on small devices.",
    }, {
      Prop       : <code>textAlign='centerMedium'</code>,
      Description : "Centers text horizontally on medium and small devices.",
    }, {
      Prop       : <code>textAlign='justify'</code>,
      Description : "Justifies text.",
    }]} />
);
const alignExample = (
  <Grid gutter='small' indent>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='leftSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-small'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='leftMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-medium'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='right'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='centerSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-small'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='centerMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-medium'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code></Text>
    </Panel>
  </Grid>
);
const alignSnippet = `
  <Grid gutter='small' indent>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='leftSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-small'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='leftMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-medium'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='right'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='centerSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-small'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='centerMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-medium'</code></Text>
    </Panel>
    <Panel box margin='bottom' col='1-2'>
      <Text textAlign='justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code></Text>
    </Panel>
  </Grid>`;

const verticalTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>textVertical='top'</code>,
      Description : "Aligns text to the top.",
    }, {
      Prop       : <code>textVertical='middle'</code>,
      Description : "Centers text vertically.",
    }, {
      Prop       : <code>textVertical='bottom'</code>,
      Description : "Aligns text to the bottom.",
    }]} />
);
const verticalExample = (
  <div>
    {/* TODO: fix. Description tied into the example... */}
    <p>As React adds additional spans around text you will need to manually add a few lines of css to your style file.</p>
    <Grid gutter='small'>
      <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
        <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='top' type='span'>Lorem ipsum <code>textVerticle='top'</code></Text>
      </Panel>
      <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
        <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='middle' type='span'>Lorem ipsum <code>textVerticle='middle'</code></Text>
      </Panel>
      <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
        <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='bottom' type='span'>Lorem ipsum <code>textVerticle='bottom'</code></Text>
      </Panel>
    </Grid>
  </div>
);
const verticalSnippet = `
  // style.css
  .uk-text-top > * {\n vertical-align: top;\n}
  ...

  // script.js
  <Grid gutter='small'>
    <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
      <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='top' type='span'>Lorem ipsum <code>textVerticle='top'</code></Text>
    </Panel>
    <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
      <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='middle' type='span'>Lorem ipsum <code>textVerticle='middle'</code></Text>
    </Panel>
    <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
      <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='bottom' type='span'>Lorem ipsum <code>textVerticle='bottom'</code></Text>
    </Panel>
  </Grid>`;

const textWrapTable = (
  <Table
    head={['Prop', 'Description']}
    body={[{
      Prop       : <code>textWrap='truncate'</code>,
      Description : "Prevents text from wrapping into multiple lines, truncating it instead.",
    }, {
      Prop       : <code>textWrap='break'</code>,
      Description : "Breaks strings if their length exceeds the width of their container.",
    }, {
      Prop       : <code>textWrap='nowrap'</code>,
      Description : "Breaks strings if their length exceeds the width of their container.",
    }]} />
);
const textWrapExample = (
  <Grid gutter='small' indent>
    <Panel col='1-3' box ><Text textWrap='truncate'>{loremIpsumString}<code>textWrap='truncate'</code></Text></Panel>
    <Panel col='1-3' box ><Text textWrap='break'>{loremIpsumString}<code>textWrap='break'</code></Text></Panel>
    <Panel col='1-3' box ><Text textWrap='nowrap'>{loremIpsumString}<code>textWrap='nowrap'</code></Text></Panel>
  </Grid>
);
const textWrapSnippet = `
  <Grid gutter='small' indent>
    <Panel col='1-3' box>\n      <Text textWrap='truncate'>${loremIpsumString}<code>textWrap='truncate'</code></Text>\n    </Panel>
    <Panel col='1-3' box>\n      <Text textWrap='break'>${loremIpsumString}<code>textWrap='break'</code></Text>\n    </Panel>
    <Panel col='1-3' box>\n      <Text textWrap='nowrap'>${loremIpsumString}<code>textWrap='nowrap'</code></Text>\n    </Panel>
  </Grid>`;

const TextDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName }} />
    <DocExample
      name="Text Types"
      description={<span>The Text component creates a number of various Text components. The default type is <code>p</code> which creates a paragraph.</span>}
      table={textTypeTable}
    />
    <DocExample
      name="Text headings"
      description={<span>Use <code>heading</code> prop to alter any of the Text component types to a heading.</span>}
      table={headingsTable}
      snippet={`<Text heading='h1'>...</Text>\n<Text heading='h2'>...</Text>\n<Text heading='h3'>...</Text>\n<Text heading='h4'>...</Text>\n<Text heading='h5'>...</Text>\n<Text heading='h6'>...</Text>`}
    />
    <DocExample
      name="Text bold"
      description={<span>Add the <code>bold</code> prop to create bold text.</span>}
      jsx={<p>This is <Text bold type='span'>bold text</Text>.</p>}
      snippet={`<Text bold type='span'>bold text</Text>`}
    />
    <DocExample
      name="Text size"
      description={<span>Text size can be changed by using one of the <code>size=''</code> props.</span>}
      table={sizeTable}
    />
    <DocExample
      name="Text context"
      description={<span>The text context prop can be used to give text context.</span>}
      table={contextTable}
      snippet={contextSnippet}
    />
    <DocExample
      name="Text align"
      description={<span>The textAlign prop horizontally aligns text.</span>}
      table={alignTable}
      jsx={alignExample}
      snippet={alignSnippet}
    />
    <DocExample
      name="Text vertical"
      description={<span>The textVertical prop vertically aligns text to an object.</span>}
      table={verticalTable}
      jsx={verticalExample}
      snippet={verticalSnippet}
    />
    <DocExample
      name="Text wrap"
      description={<span>The textWrap prop wraps text.</span>}
      table={textWrapTable}
      jsx={textWrapExample}
      snippet={textWrapSnippet}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default TextDoc;
