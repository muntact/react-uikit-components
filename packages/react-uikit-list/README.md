# React Uikit List

Dynamically creates lists.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-list --save;

    // ES6
    import List from 'react-uikit-list';

    // ES5
    var List = require('react-uikit-list');

## List types



## Unordered list



### Code

    <List items={['item', 'item', 'item']} />

## Description list



### Code

    <List type='description'>
      <dt>Description lists</dt>
      <dd>A description list defines terms and their corresponding descriptions.</dd>
      <dt>Lorem ipsum</dt>
      <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
      <dt>A long term is truncated</dt>
      <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
    </List>

## List with lines

<span>The `line` prop separates list items with lines.</span>


### Code

    <List line>
      <ListItem body='Item' />
      <ListItem body='Item' />
      <ListItem body='Item' />
    </List>

## Striped items

<span>The `striped` prop adds zebra-striping to list items</span>


### Code

    <List striped>
      <ListItem body='Item' />
      <ListItem body='Item' />
      <ListItem body='Item' />
    </List>

## Space items

<span>The `space` prop increases the spacing between list items</span>


### Code

    <List space>
      <ListItem body='Item' />
      <ListItem body='Item' />
      <ListItem body='Item' />
    </List>

## List link items

<span>To turn a ListItem into a link item, use the `href` prop.</span>


### Code

    <List space>
      <ListItem href='#' kitId='list-group-1.1' body='Active item' badge={{body: '2', notification: true}} />
      <ListItem href='#' kitId='list-group-1.2' body='Normal item' />
      <ListItem href='#' kitId='list-group-1.3' />
      <ListItem href='#' kitId='list-group-1.4' body='Normal item' badge={{body: '10', context: 'danger', notification: true}} />
    </List>

## Selectable list

<span>Link list can be made selectable by adding the `selectable` prop. Optional `checked` and `mulit` can also be added.</span>

<table class="uk-table" data-kitid="cj4n6er09000sarufh0nzj87v"><caption>Selectable props</caption>

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6er09000sarufh0nzj87v">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6er09000sarufh0nzj87v">checked=on</td>

<td data-kitid="tabledata-[0, 1]-cj4n6er09000sarufh0nzj87v">Takes an element to be displayed when the items checked prop is true.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6er09000sarufh0nzj87v">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6er09000sarufh0nzj87v">checked=off</td>

<td data-kitid="tabledata-[1, 1]-cj4n6er09000sarufh0nzj87v">Takes an element to be displayed when the items checked prop is false.</td>

</tr>

</tbody>

</table>



### Code

    const items = [
      {href: '#', kitId: 'list-group-1.1', body: 'Item 1', checked: true},
      {href: '#', kitId: 'list-group-1.2', body: 'Item 2'},
      {href: '#', kitId: 'list-group-1.3', body: 'Item 3'},
      {href: '#', kitId: 'list-group-1.4', body: 'Item 4'}
    ];
    ...
    <List
      line
      selectable={{
        checked: {
          on:  <i className={'uk-icon-check-circle'}></i>,
          off: <i className={'uk-icon-circle-o'}></i>
        }
      }}
      onClick={(e) => this.handleClick(e)}
      items={this.state.items}/>
    ...

## Horizontal description list

Displays the terms and descriptions side by side


### Code

    <List type='description' horizontal>
      <dt>Description lists</dt>
      <dd>A description list defines terms and their corresponding descriptions.</dd>
      <dt>Lorem ipsum</dt>
      <dd>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
      <dt>A long term is truncated</dt>
      <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
    </List>

## Dynamic list items

<span>List items can be dynamically created by setting the `items` prop to a collection of items.</span>


### Code

    <List line items={[
      {href: '#', kitId: 'list-group-1.1', body: 'Active item', badge: {body: '2', notification: true}},
      {href: '#', kitId: 'list-group-1.2', body: 'Normal item'},
      {href: '#', kitId: 'list-group-1.3', body: 'Disabled item'},
      {href: '#', kitId: 'list-group-1.4', body: 'Normal item', badge: {body: '10', context: 'danger', notification: true}}
    ]}/>

## Click and select events

<span>List item has an `onClick` prop which returns an object containing all the properties from the triggered event. There is also an addtional `item` property added for convinience.</span>

<table class="uk-table" data-kitid="cj4n6er17000zaruflon78ooj">

<thead>

<tr>

<th>property</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6er17000zaruflon78ooj">

<td colspan="2" data-kitid="tabledata-[0, 0]-cj4n6er17000zaruflon78ooj">component</td>

<td data-kitid="tabledata-[0, 1]-cj4n6er17000zaruflon78ooj">Items' component</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6er17000zaruflon78ooj">

<td colspan="2" data-kitid="tabledata-[1, 0]-cj4n6er17000zaruflon78ooj">index</td>

<td data-kitid="tabledata-[1, 1]-cj4n6er17000zaruflon78ooj">Items' index</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6er17000zaruflon78ooj">

<td colspan="2" data-kitid="tabledata-[2, 0]-cj4n6er17000zaruflon78ooj">kitid</td>

<td data-kitid="tabledata-[2, 1]-cj4n6er17000zaruflon78ooj">Items' id</td>

</tr>

</tbody>

</table>

## List Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6er1i0010aruf0vfzi108">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6er1i0010aruf0vfzi108">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6er1i0010aruf0vfzi108">`items`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6er1i0010aruf0vfzi108">array</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6er1i0010aruf0vfzi108">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6er1i0010aruf0vfzi108">`horizontal`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6er1i0010aruf0vfzi108">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6er1i0010aruf0vfzi108">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6er1i0010aruf0vfzi108">`line`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6er1i0010aruf0vfzi108">bool</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6er1i0010aruf0vfzi108">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6er1i0010aruf0vfzi108">`striped`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6er1i0010aruf0vfzi108">bool</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6er1i0010aruf0vfzi108">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6er1i0010aruf0vfzi108">`space`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6er1i0010aruf0vfzi108">bool</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6er1i0010aruf0vfzi108">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6er1i0010aruf0vfzi108">`type`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6er1i0010aruf0vfzi108">oneOf: 'description' | 'unordered'. Default is unordered</td>

</tr>

</tbody>

</table>

## List item Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6er1o0011arufrg5teo51">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6er1o0011arufrg5teo51">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6er1o0011arufrg5teo51">badge</td>

<td data-kitid="tabledata-[0, 1]-cj4n6er1o0011arufrg5teo51">object</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6er1o0011arufrg5teo51">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6er1o0011arufrg5teo51">body</td>

<td data-kitid="tabledata-[1, 1]-cj4n6er1o0011arufrg5teo51">string</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6er1o0011arufrg5teo51">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6er1o0011arufrg5teo51">href</td>

<td data-kitid="tabledata-[2, 1]-cj4n6er1o0011arufrg5teo51">string</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6er1o0011arufrg5teo51">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6er1o0011arufrg5teo51">onClick</td>

<td data-kitid="tabledata-[3, 1]-cj4n6er1o0011arufrg5teo51">func</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6er1o0011arufrg5teo51">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6er1o0011arufrg5teo51">onSelect</td>

<td data-kitid="tabledata-[4, 1]-cj4n6er1o0011arufrg5teo51">func</td>

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