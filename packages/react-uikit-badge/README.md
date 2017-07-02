# React Uikit Badge

Easily create nicely looking badges to label and highlight your content.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-badge --save;

    // ES6
    import Badge from 'react-uikit-badge';

    // ES5
    var Badge = require('react-uikit-badge');

## Badge Element

By default badges are <code>span<code> but they can be made <div>s by setting the `block` prop.


### Code

    <Badge>I am a span</Badge>
    <Badge>I am a div</Badge>

## Badge Text

Text can be added either as `children` <Badge>Awesome</Badge> or by setting the `body` prop <Badge body='Awesome'/>.


### Code

    <Badge>Info</Badge>
    <Badge>New</Badge>
    <Badge>Free</Badge>

## Badge notifications

Use the `notification` prop to indicate that the badge is a notification. Typically it is used with numbers.


### Code

    <Badge notification>3</Badge>
    <Badge notification>20</Badge>
    <Badge notification>100</Badge>

## Badge Contexts

Add the `context` process with a value of "success", "warning" or "danger" for additional context.


### Code

    <Badge context="success">success</Badge>
    <Badge context="warning">warning</Badge>
    <Badge context="danger">danger</Badge>
    <Badge context="success" notification>1</Badge>
    <Badge context="warning" notification>10</Badge>
    <Badge context="danger" notification>100+</Badge>

## Badge Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6eayq000k9jufwexgiib1">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6eayq000k9jufwexgiib1">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6eayq000k9jufwexgiib1">context</td>

<td data-kitid="tabledata-[0, 1]-cj4n6eayq000k9jufwexgiib1">oneOf: 'default' | 'muted' | 'primary' | 'secondary'</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6eayq000k9jufwexgiib1">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6eayq000k9jufwexgiib1">block</td>

<td data-kitid="tabledata-[1, 1]-cj4n6eayq000k9jufwexgiib1">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6eayq000k9jufwexgiib1">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6eayq000k9jufwexgiib1">body</td>

<td data-kitid="tabledata-[2, 1]-cj4n6eayq000k9jufwexgiib1">string</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6eayq000k9jufwexgiib1">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6eayq000k9jufwexgiib1">notification</td>

<td data-kitid="tabledata-[3, 1]-cj4n6eayq000k9jufwexgiib1">bool</td>

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