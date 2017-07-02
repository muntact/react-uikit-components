# React Uikit Breadcrumb

Create breadcrumbs to show users their location within a website.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-breadcrumb --save;

    // ES6
    import Breadcrumb from 'react-uikit-breadcrumb';

    // ES5
    var Breadcrumb = require('react-uikit-breadcrumb');

## Breadcrumb

The Breadcrumb component consists of links which are aligned side by side and separated by a divider.

<table class="uk-table" data-kitid="cj4n6ennj0002akuf3ceexvl0">

<thead>

<tr>

<th>Type</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6ennj0002akuf3ceexvl0">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6ennj0002akuf3ceexvl0">link</td>

<td data-kitid="tabledata-[0, 1]-cj4n6ennj0002akuf3ceexvl0">Creates breadcrumb item as a Link</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6ennj0002akuf3ceexvl0">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6ennj0002akuf3ceexvl0">acive</td>

<td data-kitid="tabledata-[1, 1]-cj4n6ennj0002akuf3ceexvl0">Shows the breadcrumb item as active</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6ennj0002akuf3ceexvl0">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6ennj0002akuf3ceexvl0">disabled</td>

<td data-kitid="tabledata-[2, 1]-cj4n6ennj0002akuf3ceexvl0">Disables the breadcrumb Item</td>

</tr>

</tbody>

</table>



### Code

    <Breadcrumb kitid='bread'>
      <BreadcrumbItem kitid='1' body='Home'/>
      <BreadcrumbItem kitid='4' type='link' body='link'/>
      <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
      <BreadcrumbItem kitid='2' type='active' body='Post'/>
    </Breadcrumb>

## Breadcrumb Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6enoh0004akufwb0sxd0y">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enoh0004akufwb0sxd0y">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enoh0004akufwb0sxd0y">items</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enoh0004akufwb0sxd0y">array</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enoh0004akufwb0sxd0y">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enoh0004akufwb0sxd0y">type</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enoh0004akufwb0sxd0y">oneOf active, link, or disabled</td>

</tr>

</tbody>

</table>

## Breadcrumb Item Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6enoo0005akufv4wa3pke">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enoo0005akufv4wa3pke">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enoo0005akufv4wa3pke">body</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enoo0005akufv4wa3pke">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enoo0005akufv4wa3pke">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enoo0005akufv4wa3pke">href</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enoo0005akufv4wa3pke">string</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enoo0005akufv4wa3pke">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6enoo0005akufv4wa3pke">type</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enoo0005akufv4wa3pke">oneOf active, link, or disabled</td>

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