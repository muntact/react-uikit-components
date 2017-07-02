# React Uikit Grid

Create a fully responsive, fluid and nestable grid layout. The grid system of UIkit follows the mobile-first approach and accomodates up to 10 grid columns. It uses units with predefined classes inside each grid, which define the column col. It is also possible to combine the grid with the Flex component, although it works only in modern browsers.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-grid --save;

    // ES6
    import Grid from 'react-uikit-grid';

    // ES5
    var Grid = require('react-uikit-grid');

## Basic

To create the grid container, use the <code>&lt;Grid&gt;</code> component. A <code>&lt;ul&gt;</code> grid can be created by adding <code>list</code> prop. Columns can be added by adding the <code>col</code> prop to any react uikit component.<br />


### Code

    <Grid textAlign='center'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-2' box>Col</Panel>
      <Panel col='1-2' box>Col</Panel>
      <Panel col='3-10' box>Col</Panel>
      <Panel col='7-10' box>Col</Panel>
    </Grid>

## Grid Gutter

Grids automatically create a horizontal gutter between columns and a vertical one between two succeeding grids. By default, the grid gutter is wider on large screens.


### Code

    <Grid textAlign='center'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Medium Gutter

To apply a medium-sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.


### Code

    <Grid gutter='medium'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Small Gutter

To apply a medium-sized gutter between grid columns, just add the <code>gutter='medium'</code> prop.


### Code

    <Grid gutter='small'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Collapse Gutter

To remove the gutter entirely, just add the <code>gutter='collapse'</code> prop.


### Code

    <Grid gutter='collapse'>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
      <Panel col='1-3' box>Col</Panel>
    </Grid>

## Grid Divider

Add the <code>divider</code> prop to separate grid columns with lines. To separate grids with a horizontal line, just add the class to a &lt;hr&gt; or &lt;div&gt; element.


### Code

    <div>
      <Grid gutter='center' divider>
        <Panel col='1-3' box>Col</Panel>
        <Panel col='1-3' box>Col</Panel>
        <Panel col='1-3' box>Col</Panel>
      </Grid>
      <hr className="uk-grid-divider"/>
      <Grid gutter='center' divider>
        <Panel col='1-3' box>Col</Panel>
        <Panel col='1-3' box>Col</Panel>
        <Panel col='1-3' box>Col</Panel>
      </Grid>
    </div>

<span class="uk-badge" data-kitid="cj4n6faa20015cgufk6l6c7uk">NOTE</span> For horizontal divider use `<hr class="uk-grid-divider" />` can be used between grids.

## Match column heights

To match grid column heights add the <code>match</code> prop.


### Code

    <Grid match>
      <Panel col='1-3' box>Lorem ipsum dolor sit amet.</Panel>
      <Panel col='1-3'box>Lorem ipsum dolor sit amet.</Panel>
      <Panel col='1-3'box>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Panel>
    </Grid>

<span class="uk-badge" data-kitid="cj4n6faah001ccguf8d9n57qb">NOTE</span> If grid columns extend to a width of 100%, their heights will no longer be matched. This makes sense, for example, if they stack vertically in narrower viewports.

## Even grid columns

To create a grid whose child elements are evenly split, no need to apply the same prop to each child component. Just add one of the <code>widths</code> prop to the grid itself. Widths use the same values as the prop <code>col</code> from Base component utility props. For responsive widths, instead of the <code>widths</code> you can use <code>small</code>, <code>medium</code> and <code>large</code> respectively.


### Code

    <Grid widths='1-6' type='list'>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
      <Panel margin='top bottom' list box>Col</Panel>
    </Grid>

## Responsive grid widths

Responsive grid properties can be applied to all direct children of the <code>Grid</code> components by adding one of the width props to the grid itself. This will maintain evenly sized grid columns, regardless of the device.

<table class="uk-table" data-kitid="cj4n6faay001lcgufks2p8w0k">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6faay001lcgufks2p8w0k">

<td colspan="-1" data-kitid="tabledata-[0, 0]-cj4n6faay001lcgufks2p8w0k">`widths='value'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6faay001lcgufks2p8w0k">Affects direct children elements on all device.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6faay001lcgufks2p8w0k">

<td colspan="-1" data-kitid="tabledata-[1, 0]-cj4n6faay001lcgufks2p8w0k">`small='value'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6faay001lcgufks2p8w0k">Affects direct children elements on 480px and higher devices.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6faay001lcgufks2p8w0k">

<td colspan="-1" data-kitid="tabledata-[2, 0]-cj4n6faay001lcgufks2p8w0k">`medium='value'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6faay001lcgufks2p8w0k">Affects direct children elements on 768px and higher devices.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6faay001lcgufks2p8w0k">

<td colspan="-1" data-kitid="tabledata-[3, 0]-cj4n6faay001lcgufks2p8w0k">`large='value`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6faay001lcgufks2p8w0k">Affects direct children elements on 960px and higher devices.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6faay001lcgufks2p8w0k">

<td colspan="-1" data-kitid="tabledata-[4, 0]-cj4n6faay001lcgufks2p8w0k">`xlarge='value'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6faay001lcgufks2p8w0k">Affects direct children elements on 1220px and higher devices.</td>

</tr>

</tbody>

</table>

Responsive grid widths take the same values as col values. See base componmt for col values.



### Code

    <Grid type='list' widths='1-2' medium='1-3' large='1-6'>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
      <Panel list box>Col</Panel>
    </Grid>

## Indent grid

To indent the left grid margin add the <code>indent</code> prop to the Grid component.

## Grid Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6fabn001ucgufazey32bw">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fabn001ucgufazey32bw">divider</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fabn001ucgufazey32bw">bool</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fabn001ucgufazey32bw">gutter</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'small' | 'medium' | 'collapsed'</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fabn001ucgufazey32bw">indent</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'col' | 'values'</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fabn001ucgufazey32bw">match</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fabn001ucgufazey32bw">bool</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fabn001ucgufazey32bw">medium</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'col' | 'values'</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fabn001ucgufazey32bw">small</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'col' | 'values'</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fabn001ucgufazey32bw">type</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'block' | 'list'</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fabn001ucgufazey32bw">widths</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'col' | 'values'</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6fabn001ucgufazey32bw">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6fabn001ucgufazey32bw">xlarge</td>

<td data-kitid="tabledata-[8, 1]-cj4n6fabn001ucgufazey32bw">oneOf: 'col' | 'values'</td>

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