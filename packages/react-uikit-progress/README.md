# React Uikit Progress

Defines different styles for progress bars.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-progress --save;

    // ES6
    import Progress from 'react-uikit-progress';

    // ES5
    var Progress = require('react-uikit-progress');

## Progress

To create a Progress component set a number to the `bar` prop representing the percentage of the progress. Optionaly, text can be added to the bar my assigning the `body` prop.



### Code

    <Progress bar={40} body='40%'/>

## Progress sizes

To change the size of the progress bar assign the `size` prop to either small or mini.



### Code

      <Progress bar={50} />
      <Progress bar={60} size='small' />
      <Progress bar={70} size='mini' />

## Progress context

A context can be given to a progess bar by assigning the context to success, warning or danger.



### Code

      <Progress bar={70} context='success' />
      <Progress bar={60} context='warning' />
      <Progress bar={50} context='danger' />

## Striped

The Progress component can be striped by adding the `striped` prop. You can also add the `active` prop animate the stripes.



### Code

      <Progress bar={60} striped />
      <Progress bar={80} striped active />

## Combined



### Code

    <Progress bar={80} striped active size='small' context='danger'/>

## Progress Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6eaw1000h9hufiiobv9qm">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6eaw1000h9hufiiobv9qm">

<td colspan="2" data-kitid="tabledata-[0, 0]-cj4n6eaw1000h9hufiiobv9qm">active</td>

<td data-kitid="tabledata-[0, 1]-cj4n6eaw1000h9hufiiobv9qm">bool</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6eaw1000h9hufiiobv9qm">

<td colspan="2" data-kitid="tabledata-[1, 0]-cj4n6eaw1000h9hufiiobv9qm">bar</td>

<td data-kitid="tabledata-[1, 1]-cj4n6eaw1000h9hufiiobv9qm">number</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6eaw1000h9hufiiobv9qm">

<td colspan="2" data-kitid="tabledata-[2, 0]-cj4n6eaw1000h9hufiiobv9qm">body</td>

<td data-kitid="tabledata-[2, 1]-cj4n6eaw1000h9hufiiobv9qm">string</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6eaw1000h9hufiiobv9qm">

<td colspan="2" data-kitid="tabledata-[3, 0]-cj4n6eaw1000h9hufiiobv9qm">size</td>

<td data-kitid="tabledata-[3, 1]-cj4n6eaw1000h9hufiiobv9qm">oneOf: 'mini' | 'small'</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6eaw1000h9hufiiobv9qm">

<td colspan="2" data-kitid="tabledata-[4, 0]-cj4n6eaw1000h9hufiiobv9qm">context</td>

<td data-kitid="tabledata-[4, 1]-cj4n6eaw1000h9hufiiobv9qm">oneOf: 'success' | 'warning' | 'danger'</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6eaw1000h9hufiiobv9qm">

<td colspan="2" data-kitid="tabledata-[5, 0]-cj4n6eaw1000h9hufiiobv9qm">striped</td>

<td data-kitid="tabledata-[5, 1]-cj4n6eaw1000h9hufiiobv9qm">bool</td>

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