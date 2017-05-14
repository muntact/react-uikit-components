import React, { PropTypes } from 'react';
import Codeblock from 'react-uikit-codeblock';

const DocExample = ({ name, description, table, jsx, snippet }) => (
  <section>
    { name &&
      <h2>{name}</h2>
    }
    { description &&
      <p>{description}</p>
    }
    { table &&
      table
    }

    {/* Hide the example header and jsx in a tag we plan to filter :p */}
    <div data-markdown-omit="true">
      <h3 className='example'>Example</h3>
      {jsx}
    </div>

    <h3 className='code'>Code</h3>

    <Codeblock scroll='text' lang="javascript">
      {snippet}
    </Codeblock>

  </section>
);

DocExample.propTypes = {
  description: PropTypes.string,
  jsx: PropTypes.node.isRequired,
  name: PropTypes.string,
  snippet: PropTypes.string.isRequired,
  table: PropTypes.node,
};

export default DocExample;
