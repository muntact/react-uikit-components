# React Uikit Button

Easily create nice looking buttons, which come in different styles.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-button --save;

    // ES6
    import Button from 'react-uikit-button';

    // ES5
    var Button = require('react-uikit-button');

## Types

The Button component creates either a button, link, submit or a close button by setting the <code>type</code>.By defualt the Button component will create a button if no type is provided.


### Code

    <Buttonbody="Button"margin="bottom right" />
    <Buttonbody="Link"margin="bottom right"type="link" />
    <Buttonbody="Submit"margin="bottom right"type="submit" />
    <Buttonbody="Disabled"margin="bottom right" disabled />
    <Buttontype="close" />

## Button Contexts

The color of the button can be easily changed by adding a context to the context prop.

<table class="uk-table" data-kitid="cj4n6enoi0008aiufmtr96ay5">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enoi0008aiufmtr96ay5">

<td colspan="2" data-kitid="tabledata-[0, 0]-cj4n6enoi0008aiufmtr96ay5">`context='primary'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enoi0008aiufmtr96ay5">Emphasizes to identify the primary action in a set of buttons.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enoi0008aiufmtr96ay5">

<td colspan="2" data-kitid="tabledata-[1, 0]-cj4n6enoi0008aiufmtr96ay5">`context='success'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enoi0008aiufmtr96ay5">Indicates a successful or positive action.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enoi0008aiufmtr96ay5">

<td colspan="2" data-kitid="tabledata-[2, 0]-cj4n6enoi0008aiufmtr96ay5">`context='danger'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enoi0008aiufmtr96ay5">Indicates a dangerous or negative action.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6enoi0008aiufmtr96ay5">

<td colspan="2" data-kitid="tabledata-[3, 0]-cj4n6enoi0008aiufmtr96ay5">`context='link'`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6enoi0008aiufmtr96ay5">De-emphasizes to look like a link while maintaining button behavior.</td>

</tr>

</tbody>

</table>



### Code

    <Buttonbody="Primary"context="primary"margin="bottom right" />
    <Buttonbody="Success"context="success"margin="bottom right" />
    <Buttonbody="Danger"context="danger"margin="bottom right" />
    <Buttonbody="Link"context="link"type="Link" />

## Button Sizes

To change the size of a Button set the <code>size</code> prop to mini, small, or large.


### Code

    <Buttonbody="Mini Button"margin="bottom right"size="mini" />
    <Buttonbody="Mini Button"context="primary"margin="bottom"size="mini" />
    <Buttonbody="Small Button"margin="bottom right"size="small" />
    <Buttonbody="Small Button"context="primary"margin="bottom"size="small" />
    <Buttonbody="Default Button"margin="bottom right" />
    <Buttonbody="Default Button"context="primary"margin="bottom" />
    <Buttonbody="Large Button"margin="bottom right"size="large" />
    <Buttonbody="Large Button"context="primary"margin="bottom"size="large" />

## Button Blocks

To create a full width button add the <code>block</code> prop to the buttton component.


### Code

    <Buttonbody="Button"margin="small bottom" block />
    <Buttonbody="Button"context="primary" block />

## Button dropdown

Buttons can also be used to trigger a dropdown. See button dropdown in Dropdown component for more details.

## Button Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6enqi000qaiufezv6eyca">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enqi000qaiufezv6eyca">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enqi000qaiufezv6eyca">body</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enqi000qaiufezv6eyca">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enqi000qaiufezv6eyca">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enqi000qaiufezv6eyca">block</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enqi000qaiufezv6eyca">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enqi000qaiufezv6eyca">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6enqi000qaiufezv6eyca">context</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enqi000qaiufezv6eyca">oneOf active, link, or disabled</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6enqi000qaiufezv6eyca">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6enqi000qaiufezv6eyca">disabled</td>

<td data-kitid="tabledata-[3, 1]-cj4n6enqi000qaiufezv6eyca">bool</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6enqi000qaiufezv6eyca">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6enqi000qaiufezv6eyca">size</td>

<td data-kitid="tabledata-[4, 1]-cj4n6enqi000qaiufezv6eyca">oneOf mini, small, or large</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6enqi000qaiufezv6eyca">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6enqi000qaiufezv6eyca">type</td>

<td data-kitid="tabledata-[5, 1]-cj4n6enqi000qaiufezv6eyca">oneOf button, close, or link</td>

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