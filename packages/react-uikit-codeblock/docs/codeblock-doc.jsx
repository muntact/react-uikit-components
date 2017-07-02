import React from 'react';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const name = 'Codeblock';
const npmName = 'react-uikit-codeblock';
const summary = 'Displays code inside of a block.';

const snippet = `<Codeblock>
  {<div>...</div>}
</Codeblock>`;

const CodeblockDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={
        `To use Codeblock component place backticks inside of braces and place the code inside of the backticks.` +
        `For inline code use the html element <code>.`
      }
      snippet={snippet}
    />
    {/* TODO add the below doc snippet... */}
    {/* The scroll prop can be added to create a scrollable Codeblock. */}
    <DocFooter name={name} />
  </div>
);


export default CodeblockDoc;
