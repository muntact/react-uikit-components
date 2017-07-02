# React Uikit Nav

Defines different styles for list navigations.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-nav --save;

    // ES6
    import Nav from 'react-uikit-nav';

    // ES5
    var Nav = require('react-uikit-nav');

## Nav

<span>Navigation consists of two components `<Nav>` and `<NavItem>`. The Nav component displays a list of links for various types of Navs. To choose a type of Nav the `type` prop must be added to the Nav component</span>

## Nav Side

<span>Add the `type="side"` prop to place a nav inside your sidebar, panels or anywhere else in your content.</span>


### Code

    <Grid>
      <Nav type='side' cols='1-4'>
        <NavItem label='Active' href='#' active />
        <NavItem parent label='Item' href='#' >
            <Nav type='sub'>
              <NavItem label='Sub item' href='#' />
              <NavItem label='Sub item' href='#' />
            </Nav>
          </NavItem>
        <NavItem label='Item' href='#' />
        <NavItem label='Item' href='#' />
      </Nav>
    </Grid>

## Navs Nested

<span>Navs can easily be nested insde of each other by using the Nav `parent` and `sub` props and the NavItems `parent` prop.</span>


### Code

    <Grid>
      <Nav  parenttype='side' cols='1-4'>
        <NavItem label='Active' href='#' active />
        <NavItem label='Item' href='#' />
        <NavItem label='Item' href='#' />
        <NavItem label='Item' href='#' />
      </Nav>
    </Grid>

## Nav Dropdown




### Code

    <Droppdown trigger={{
      body: 'Nav dropdown',
      animate: {
        in: (element) => this.animateIn(element),
        out: (element) => this.animateOut(element)
      }
    }}>
      <Nav parent type='dropdown' cols='1-4'>
        <NavItem body='Item' href='#' />
        <NavItem body='Another item' href='#' />
        <NavItem type='header' body='Header'/>
        <NavItem body='Item' href='#' />
        <NavItem body='Another item' href='#' />
      </Nav>
    </Droppdown>

## Nav Items

<span>The NavItem component creates a Nav item which can either be a link, header or a divider. This can be specified using the `type` prop. The default type is link.</span>

<table class="uk-table" data-kitid="cj4n6fj7k000qdbufazo5slpz">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj7k000qdbufazo5slpz">`body`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj7k000qdbufazo5slpz">Provides a body for a link.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj7k000qdbufazo5slpz">`href`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj7k000qdbufazo5slpz">Provides a URL for a link.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj7k000qdbufazo5slpz">`active`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj7k000qdbufazo5slpz">Shows the item as active.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fj7k000qdbufazo5slpz">`subtitle`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fj7k000qdbufazo5slpz">Creates a subtitle.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fj7k000qdbufazo5slpz">`type='link'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fj7k000qdbufazo5slpz">Creates a link NavItem.</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fj7k000qdbufazo5slpz">`type='header'`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fj7k000qdbufazo5slpz">Creates a header NavItem.</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fj7k000qdbufazo5slpz">`type='body'`</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fj7k000qdbufazo5slpz">Creates a body a link.</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fj7k000qdbufazo5slpz">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fj7k000qdbufazo5slpz">`type='divider'`</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fj7k000qdbufazo5slpz">Creates a divider NavItem for separating menu items.</td>

</tr>

</tbody>

</table>



### Code

    <Grid indent>
      <Nav type='side' cols='1-4'>
        <NavItem type='header' body='Header'/>
        <NavItem body='Active' href='#' active />
        <NavItem body='Item' href='#' />
        <NavItem body='Item' href='#' subtitle='Subtitle'/>
        <NavItem body='Item' href='#' />
        <NavItem type='divider' />
        <NavItem body='Item' href='#' />
      </Nav>
    </Grid>

## Nav Item collections

<span>An array of objects can be passed to the `items` prop of a Nav to generate NavItems</span>


### Code

    <Grid indent>
      <Nav cols='1-4' type='side' items={[{body: 'Home', href: '#', active: true}, {body: 'About', href: '#'}]} />
    </Grid>

## React Router



### Code

    <Nav type='side'>
      <NavItem><Link to="app">Home</Link></NavItem>
    </Nav>

## Nav Props

See base component for additional utility props.

<table class="uk-table" data-kitid="cj4n6fj8u0019dbuf388evhtg">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj8u0019dbuf388evhtg">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj8u0019dbuf388evhtg">parent</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj8u0019dbuf388evhtg">bool</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj8u0019dbuf388evhtg">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj8u0019dbuf388evhtg">type</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj8u0019dbuf388evhtg">oneOf: 'dropdown' | 'side' | 'sub'</td>

</tr>

</tbody>

</table>

## Nav Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6fj91001adbufiugrx3df">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj91001adbufiugrx3df">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj91001adbufiugrx3df">body</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj91001adbufiugrx3df">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj91001adbufiugrx3df">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj91001adbufiugrx3df">href</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj91001adbufiugrx3df">string</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj91001adbufiugrx3df">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj91001adbufiugrx3df">active</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj91001adbufiugrx3df">bool</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fj91001adbufiugrx3df">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fj91001adbufiugrx3df">subtitle</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fj91001adbufiugrx3df">string</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fj91001adbufiugrx3df">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fj91001adbufiugrx3df">type</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fj91001adbufiugrx3df">oneOf: 'link' | 'header' | 'body' | 'divider'</td>

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