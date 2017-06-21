import React, { PropTypes } from 'react';
import Codeblock from 'react-uikit-codeblock';

const DocExample = ({ name, description, table, jsx, snippet, scroll = null }) => (
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
    { jsx &&
      <div data-markdown-omit="true">
        <h3 className='example'>Example</h3>
        {jsx}
      </div>
    }
    { snippet &&
      <div data-markdown-omit-wrapper="true" style={{ marginTop: "10px" }}>
        <h3 className='code'>Code</h3>
        <Codeblock scroll={scroll} lang="javascript">
          {snippet}
        </Codeblock>
      </div>
    }

  </section>
);

DocExample.propTypes = {
  description: PropTypes.string,
  jsx: PropTypes.node.isRequired,
  name: PropTypes.string,
  snippet: PropTypes.string.isRequired,
  scroll: PropTypes.string,
  table: PropTypes.node,
};

export default DocExample;
