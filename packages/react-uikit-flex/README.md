# React Uikit Flex

Utilize the power of Flexbox to create a wide range of layouts.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-flex --save;

    // ES6
    import Flex from 'react-uikit-flex';

    // ES5
    var Flex = require('react-uikit-flex');

## Basic

Flex component uses flexbox, a concept that is still quite new but extremely powerful for creating layouts.


### Code

    <Flex>
      <Panel col='1-3' box>
        Box
      </Panel>
      <Panel col='1-3' box margin='left'>
        Box
      </Panel>
      <Panel col='1-3' box margin='left'>
        Box
      </Panel>
    </Flex>

## Flex alignment

These props define the horizontal and vertical alignment of Flex items and distribute the space between them.

<table class="uk-table" data-kitid="cj4n6fj3j0007d9ufa7gn3ehw">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`center`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to center Flex items horizontally.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`right`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to align Flex items to the right.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`top`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to align Flex items to the top.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`middle`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to align Flex items to the middle.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`bottom`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to align Flex items to the bottom.</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`between`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to distribute items evenly, with the first item at the beginning and last item at the end of the main axis.</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fj3j0007d9ufa7gn3ehw">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fj3j0007d9ufa7gn3ehw">`around`</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fj3j0007d9ufa7gn3ehw">Add this prop to distribute items evenly with equal space on both sides of each item.</td>

</tr>

</tbody>

</table>



### Code

    <Flex bottom middle>
      <Panel col='1-3' box style={[object Object]}>
        Box
      </Panel>
      <Panel col='1-3' box margin='left' style={[object Object]}>
        Box
      </Panel>
      <Panel col='1-3' box margin='left' style={[object Object]}>
        Box
      </Panel>
    </Flex>

## Flex direction

Directon props define the axis flex items placed on and their direction. By default, items run horizontally from left to right.

<table class="uk-table" data-kitid="cj4n6fj4g000dd9ufwp8lr7l3">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj4g000dd9ufwp8lr7l3">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj4g000dd9ufwp8lr7l3">`rowReverse`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj4g000dd9ufwp8lr7l3">Add this prop to lay out Flex items from right to left.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj4g000dd9ufwp8lr7l3">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj4g000dd9ufwp8lr7l3">`column`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj4g000dd9ufwp8lr7l3">Add this prop to lay out Flex items as vertical columns.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj4g000dd9ufwp8lr7l3">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj4g000dd9ufwp8lr7l3">`columnReverse`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj4g000dd9ufwp8lr7l3">Add this prop to lay out Flex items from bottom to top.</td>

</tr>

</tbody>

</table>



### Code

    <Flex direction='columnReverse'>
      <Panel col='1-3' box>
        1
      </Panel>
      <Panel col='1-3' box margin='bottom'>
        2
      </Panel>
      <Panel col='1-3' box margin='bottom'>
        3
      </Panel>
    </Flex>

## Flex row wrap

By default, Flex items fit themselves into one row. Add the row='wrap' prop so that the items wrap into another row when they no longer fit into the viewport. To change the items' direction so that they run from right to left, add the reverse prop. The following props modify the alignment of wrapping Flex items. To force the Flex items into one row, just add the nowrap prop.

<table class="uk-table" data-kitid="cj4n6fj50000jd9ufrex13k7m">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj50000jd9ufrex13k7m">`row='wrap'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to for wrap Flex items on multiple rows.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj50000jd9ufrex13k7m">`row='top'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to align multirow Flex items to the top.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj50000jd9ufrex13k7m">`row='middle'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to vertically center multirow Flex items.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fj50000jd9ufrex13k7m">`row='bottom'`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to align multiline Flex items to the bottom.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fj50000jd9ufrex13k7m">`row='between'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to distribute Flex item rows evenly, with the first row at the top and last row at the bottom of the container.</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fj50000jd9ufrex13k7m">`row='around'`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to distribute Flex rows evenly with equal space at the top and bottom of each row.</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fj50000jd9ufrex13k7m">`row='reverse'`</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to change the direction of the Flex items from right to left.</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fj50000jd9ufrex13k7m">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fj50000jd9ufrex13k7m">`row='nowrap'`</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fj50000jd9ufrex13k7m">Add this prop to remove row wrapping.</td>

</tr>

</tbody>

</table>



### Code

    <Flex>
      <Panel col='1-3' box margin='bottom right'>
        1
      </Panel>
      <Panel col='1-2' box margin='bottom right'>
        2
      </Panel>
      <Panel col='1-3' box margin='bottom right'>
        3
      </Panel>
      <Panel col='1-3' box margin='bottom right'>
        4
      </Panel>
      <Panel box>
        5
      </Panel>
      <Panel col='1-3' box margin='bottom right'>
        6
      </Panel>
    </Flex>

## Flex and grid

The Flex component can be combined with a grid from the Grid component by adding <code>grid</code> prop


### Code

    <Flex grid>
      <Panel col='1-3'>
        [object Object]
      </Panel>
      <Panel col='2-3' flexAlign=middle>
        [object Object]
      </Panel>
    </Flex>

## Flex order

To see how to order Flex items see <code>order</code> prop in the Base component under Utiliy props.

## Flex Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6fj6b000wd9ufftuahzn5">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj6b000wd9ufftuahzn5">around</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj6b000wd9ufftuahzn5">bottom</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj6b000wd9ufftuahzn5">between</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fj6b000wd9ufftuahzn5">center</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fj6b000wd9ufftuahzn5">direction</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fj6b000wd9ufftuahzn5">oneOf: 'rowReverse' | 'column' | 'columnReverse'</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fj6b000wd9ufftuahzn5">grid</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fj6b000wd9ufftuahzn5">middle</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fj6b000wd9ufftuahzn5">right</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6fj6b000wd9ufftuahzn5">row</td>

<td data-kitid="tabledata-[8, 1]-cj4n6fj6b000wd9ufftuahzn5">oneOf: 'wrap' | 'bottom' | 'middle' | 'top' | 'between' | 'around' | 'reverse' | 'nowrap'</td>

</tr>

<tr data-kitid="tablerow-9-cj4n6fj6b000wd9ufftuahzn5">

<td colspan="1" data-kitid="tabledata-[9, 0]-cj4n6fj6b000wd9ufftuahzn5">top</td>

<td data-kitid="tabledata-[9, 1]-cj4n6fj6b000wd9ufftuahzn5">bool</td>

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