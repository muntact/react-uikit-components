# React Uikit Note

Easily add notes to content.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-note --save;

    // ES6
    import Note from 'react-uikit-note';

    // ES5
    var Note = require('react-uikit-note');

<span>The Note component consists of a paragraph with a prefixed bagde. To create a Note component add a label for the badge prop `badge='NOTE'` and either add text as a child or to the `body` prop. If no bagde is provided the default badge is 'Note'</span>


### Code

      <div>
        <Note>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Note>
        <Note badge='EXAMPLE'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Note>
      </div>

## Note context

<span>Note badges can be given context using the badge prop and setting the context property</span>


### Code

      <div>
        <Note badge={{body: 'Success', context:'success'}}>Lorem ipsum dolor sit amet</Note>
        <Note badge={{body: 'Warning', context:'warning'}}>Lorem ipsum dolor sit amet</Note>
        <Note badge={{body: 'Danger', context:'danger'}}>Lorem ipsum dolor sit amet</Note>
      </div>

## Note Props

<span>See Badge component from more information</span>

## Note Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6edx3000a9puf438fcb1w">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6edx3000a9puf438fcb1w">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6edx3000a9puf438fcb1w">badge</td>

<td data-kitid="tabledata-[0, 1]-cj4n6edx3000a9puf438fcb1w">string or object. See Badge component for props.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6edx3000a9puf438fcb1w">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6edx3000a9puf438fcb1w">body</td>

<td data-kitid="tabledata-[1, 1]-cj4n6edx3000a9puf438fcb1w">string</td>

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