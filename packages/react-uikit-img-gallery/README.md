# React Uikit Img Gallery

Create gallery of images.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-img-gallery --save;

    // ES6
    import Img Gallery from 'react-uikit-img-gallery';

    // ES5
    var Img Gallery = require('react-uikit-img-gallery');

## Basic



### Code

    <ImgGroup items={[{
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }, {
     src: docs/images/placeholder_200x150_2.svg 
    }]}/>

## Img gallery items

<span>The `items` is an array which takes a collection of JSON objects. JSON object properties can be any of the props fom the Img component.</span>


### Code

    <ImgGroup items={[{
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }, {
     src: docs/images/placeholder_200x150_2.svg, margin: bottom right 
    }]}/>

## Img Gallery Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6f026000ibkuff43xood3">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6f026000ibkuff43xood3">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6f026000ibkuff43xood3">items</td>

<td data-kitid="tabledata-[0, 1]-cj4n6f026000ibkuff43xood3">array of objects; See Img component for props.</td>

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