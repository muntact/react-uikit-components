import React, { PropTypes } from 'react';
import Codeblock from 'react-uikit-codeblock';

const DocHeader = ({ name, npmName, summary }) => (
  <div data-markdown-omit-wrapper="true">
    <section>
      <h1>React Uikit { name }</h1>
      <p className='uk-article-lead'>{ summary }</p>
      <p>
        See <a href="http://otissv.github.io/react-uikit-components">the website </a> for docs.
      </p>
    </section>
    <section>
      <h2>Usage</h2>
      <Codeblock lang="bash">
        {`npm install ${npmName} --save;`}
      </Codeblock>
      <Codeblock lang="javascript">
{`// ES6
import ${name} from '${npmName}';

// ES5
var ${name} = require('${npmName}');`}
      </Codeblock>
    </section>
  </div>
);

DocHeader.propTypes = {
  name: PropTypes.string.isRequired,
  npmName: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default DocHeader;
