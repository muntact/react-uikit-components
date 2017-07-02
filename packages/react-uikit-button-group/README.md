# React Uikit Block

Separate content sections by bundling them in blocks with different styles.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-block --save;

    // ES6
    import Block from 'react-uikit-block';

    // ES5
    var Block = require('react-uikit-block');



### Code

    <Block context='muted' >
      <h4>Basic</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>

## Block Container

To put the Block in to a container use the <code>container</code> prop


### Code

    <Block context='muted' container >
      <h4>Muted + Container</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>

## Block Context

To apply different background colors, add one of the following values for the <code>context</code> prop.

<table class="uk-table" data-kitid="cj4n6evlt000eb8uf2aq90qn9">

<thead>

<tr>

<th>Value</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6evlt000eb8uf2aq90qn9">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6evlt000eb8uf2aq90qn9">default</td>

<td data-kitid="tabledata-[0, 1]-cj4n6evlt000eb8uf2aq90qn9">Add the default background color, usually white or similar.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6evlt000eb8uf2aq90qn9">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6evlt000eb8uf2aq90qn9">`muted`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6evlt000eb8uf2aq90qn9">Adds a light background color.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6evlt000eb8uf2aq90qn9">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6evlt000eb8uf2aq90qn9">`primary`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6evlt000eb8uf2aq90qn9">Adds the primary background color.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6evlt000eb8uf2aq90qn9">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6evlt000eb8uf2aq90qn9">`secondary`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6evlt000eb8uf2aq90qn9">Adds the secondary background color, usually a dark one.</td>

</tr>

</tbody>

</table>



### Code

    <Block context='default' container >
      <h4>Default</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>,<Block context='muted' container >
      <h4>Muted</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>,<Block context='primary' container >
      <h4>Primary</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>,<Block context='secondary' container >
      <h4>Secondary</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>

<span class="uk-badge" data-kitid="cj4n6evnq0011b8uf1notgrzc">NOTE</span> To properly display colors, borders and other elements on colored blocks, you might want to apply the contrast prop to the Block componet.

## Block large

To add the body in a container use the <code>container</code> prop.


### Code

    <Block context='secondary' container contrast large >
      <h4>Secondary</h4>
      <Grid widths='1-3'>
        <Panel>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
        <Panel >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Panel>
      </Grid>
    </Block>

## Block Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6evoc0018b8ufonr0c3oe">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6evoc0018b8ufonr0c3oe">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6evoc0018b8ufonr0c3oe">context</td>

<td data-kitid="tabledata-[0, 1]-cj4n6evoc0018b8ufonr0c3oe">oneOf: 'default' | 'muted' | 'primary' | 'secondary'</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6evoc0018b8ufonr0c3oe">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6evoc0018b8ufonr0c3oe">contrast</td>

<td data-kitid="tabledata-[1, 1]-cj4n6evoc0018b8ufonr0c3oe">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6evoc0018b8ufonr0c3oe">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6evoc0018b8ufonr0c3oe">large</td>

<td data-kitid="tabledata-[2, 1]-cj4n6evoc0018b8ufonr0c3oe">bool</td>

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