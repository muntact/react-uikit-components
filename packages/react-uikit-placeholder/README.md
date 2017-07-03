# React Uikit Placeholder

Create a placeholder space that can be used for uploading files via drag and drop.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-placeholder --save;

    // ES6
    import Placeholder from 'react-uikit-placeholder';

    // ES5
    var Placeholder = require('react-uikit-placeholder');

<span class="uk-badge">note</span> Placeholder component does not include any drag and drop functionality



### Code

    <Placeholder  body='Placeholder' textAlign='center'/>

## Large placeholder



### Code

    <Placeholder large  body='Large placeholder' textAlign='center'/>

## Placeholder Props

See Base for additional utility props.

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">large</td>

<td>bool</td>

</tr>

</tbody>

</table>

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