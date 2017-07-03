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

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">`body`</td>

<td>Provides a body for a link.</td>

</tr>

<tr>

<td colspan="1">`href`</td>

<td>Provides a URL for a link.</td>

</tr>

<tr>

<td colspan="1">`active`</td>

<td>Shows the item as active.</td>

</tr>

<tr>

<td colspan="1">`subtitle`</td>

<td>Creates a subtitle.</td>

</tr>

<tr>

<td colspan="1">`type='link'`</td>

<td>Creates a link NavItem.</td>

</tr>

<tr>

<td colspan="1">`type='header'`</td>

<td>Creates a header NavItem.</td>

</tr>

<tr>

<td colspan="1">`type='body'`</td>

<td>Creates a body a link.</td>

</tr>

<tr>

<td colspan="1">`type='divider'`</td>

<td>Creates a divider NavItem for separating menu items.</td>

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

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">parent</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'dropdown' | 'side' | 'sub'</td>

</tr>

</tbody>

</table>

## Nav Props

See Base for additional utility props.

<table class="uk-table">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr>

<td colspan="1">body</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">href</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">active</td>

<td>bool</td>

</tr>

<tr>

<td colspan="1">subtitle</td>

<td>string</td>

</tr>

<tr>

<td colspan="1">type</td>

<td>oneOf: 'link' | 'header' | 'body' | 'divider'</td>

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