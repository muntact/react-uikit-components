# React Uikit Codeblock

Displays code inside of a block.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-codeblock --save;

    // ES6
    import Codeblock from 'react-uikit-codeblock';

    // ES5
    var Codeblock = require('react-uikit-codeblock');

To use Codeblock component place backticks inside of braces and place the code inside of the backticks.For inline code use the html element <code>.

### Code

    <Codeblock>
      {<div>...</div>}
    </Codeblock>

## Codeblock Props

See Base for additional utility props.

## Tests

`npm run test` to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.  

## Build
`npm run build` to build files from distribution.  
`npm run build:watch` watches src directory and builds files on changes.  

## Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.  

## License
MIT