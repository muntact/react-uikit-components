# React Uikit Panel

Create layout boxes with different styles.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-panel --save;

    // ES6
    import Panel from 'react-uikit-panel';

    // ES5
    var Panel = require('react-uikit-panel');

## Basic

The Panel component consists of the panel itself, the panel title and a panel badge. To prevent redundant white space, top and bottom margins are removed from the panel's content..

<table class="uk-table" data-kitid="cj4n6fdmb0002cqufw6s1583c">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fdmb0002cqufw6s1583c">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fdmb0002cqufw6s1583c">`tilte`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fdmb0002cqufw6s1583c"><span>Add `title` prop to add the panel title.</span></td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fdmb0002cqufw6s1583c">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fdmb0002cqufw6s1583c">`badge`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fdmb0002cqufw6s1583c">

Add the `badge` prop to add a panel badge. Add `badge='value'` to set the body of the badge to the value of the string. Add `badge={{body: 'value', context: 'danger'}}` to set the body and the context of the badge. Badge context can be success, warning or danger.

</td>

</tr>

</tbody>

</table>



### Code

    <Grid medium='1-3' large='1-3'>
      <Panel title='Title' badge={{body: 'hot', context: 'danger'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel Types

<table class="uk-table" data-kitid="cj4n6fdmz0006cqufbkk28itv">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fdmz0006cqufbkk28itv">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fdmz0006cqufbkk28itv">`block`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fdmz0006cqufbkk28itv">Renders the panel as a block.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fdmz0006cqufbkk28itv">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fdmz0006cqufbkk28itv">`link`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fdmz0006cqufbkk28itv"><span>Renders the panel inside of a block. The `link='url/path'` is required to set the link\'s address.</span></td>

</tr>

</tbody>

</table>



### Code

    <Grid>
      <Panel colMedium='1-3' margin='bottom' box title='Block panel' type='block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel colMedium='1-3' box title='Link panel' type='link' link=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel box

By default the Panel has no styling. The panel box places a box around a panel.


### Code

    <Grid medium='1-3' large='1-3' indent>
      <Panel box title='Title' badge={{body: 'hot', context: 'danger'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel box primary

<span>Add the `context='primary'` prop to modify the box panel to emphasize it by using a different color.</span>


### Code

    <Grid>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel colMedium='1-3' box title='Title' context='primary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel box secondary

<span>Add the `context='secondary'` prop to modify the box panel which will give it a white background.</span>


### Code

    <Grid>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel colMedium='1-3' box title='Title' margin='bottom' context='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel colMedium='1-3' box title='Title' context='secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
    </Grid>

## Panel hover

<span>Add the `hover` prop to add a hover effect to the panel. This comes in handy when using the panel as a link.</span>


### Code

    <Grid indent>
      <Panel margin='bottom' title='Title' link='#' hover>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel margin='bottom' title='Title' link='#' hover>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel title='Title' link='#' hover>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
    </Grid>

## Panel header

<span>Add the `header` prop to separate the panel title and content with a horizontal line.</span>


### Code

    <Grid>
      <Panel header colMedium='1-3' title='Title' margin='bottom' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel header colMedium='1-3' title='Title' margin='bottom' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
      <Panel header colMedium='1-3' title='Title' margin='bottom' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</Panel>
    </Grid>

## Panel space

<span>Add the `space` prop to increase the spacing around the panel content.</span>


### Code

    <Grid>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
    </Grid>
    <Grid>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
      <Panel space box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}.</Panel>
    </Grid>

## Panel box with teaser

<span>To display an image inside a panel box that is attached to the border of the panel without any spacing, just add the `teaser={{src: , alt: }}` prop..</span>


### Code

    <Grid>
      <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
      <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
      <Panel teaser={{src: 'docs/images/placeholder_600x400.svg', alt: 'placeholder image'}} box colMedium='1-3' title='Title' margin='bottom'>{loremIpsumString}</Panel>
    </Grid>

## Panel with icons

<span>Easily apply an icon from UIkit [Icon](http://getuikit.com/docs/icon.html) to your panel by adding `icon='icon-name'`.</span>


### Code

    <Grid>
      <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel icon='user' box colMedium='1-3' title='Title' margin='bottom'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
      <Panel icon='user' box colMedium='1-3' title='Title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Panel>
    </Grid>

## Panel Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6fdr6001hcquf380x5iq7">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fdr6001hcquf380x5iq7">badge</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fdr6001hcquf380x5iq7">string or object: {`{body , context}`}</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fdr6001hcquf380x5iq7">box</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fdr6001hcquf380x5iq7">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fdr6001hcquf380x5iq7">context</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fdr6001hcquf380x5iq7">oneOf: 'primary' | 'secondary'</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fdr6001hcquf380x5iq7">header</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fdr6001hcquf380x5iq7">bool</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fdr6001hcquf380x5iq7">hover</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fdr6001hcquf380x5iq7">bool</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fdr6001hcquf380x5iq7">icon</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fdr6001hcquf380x5iq7">string</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fdr6001hcquf380x5iq7">space</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fdr6001hcquf380x5iq7">bool</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fdr6001hcquf380x5iq7">teaser</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fdr6001hcquf380x5iq7">objectOf: {`{src, alt}`}</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6fdr6001hcquf380x5iq7">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6fdr6001hcquf380x5iq7">type</td>

<td data-kitid="tabledata-[8, 1]-cj4n6fdr6001hcquf380x5iq7">oneOf: 'block' (default) | 'link'</td>

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