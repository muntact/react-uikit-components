# React Uikit Img

Easily create responsive images.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-img --save;

    // ES6
    import Img from 'react-uikit-img';

    // ES5
    var Img = require('react-uikit-img');



### Code

    <Img width='300px' height='200px' src='docs/images/placeholder_200x150_2.svg' />

## Responsive image

<span>The Image component can provide different images for various viewport widths. Enable responsive behavior by adding one or all of the responsive props `small`, `medium`, `large` or `xlarge`.  
Each responsive size takes a JSON object</span>

<table class="uk-table" data-kitid="cj4n6enoj0004aluf0ecxqs3n">

<thead>

<tr>

<th>JSON key</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enoj0004aluf0ecxqs3n">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enoj0004aluf0ecxqs3n">width</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enoj0004aluf0ecxqs3n">The width of the image. The default width is 100% if no width is specified</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enoj0004aluf0ecxqs3n">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enoj0004aluf0ecxqs3n">height</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enoj0004aluf0ecxqs3n">The height of the image. The default height is auto if no height is specified</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enoj0004aluf0ecxqs3n">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6enoj0004aluf0ecxqs3n">src</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enoj0004aluf0ecxqs3n">The src url for the image</td>

</tr>

</tbody>

</table>



### Code

      <Img
        small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
        medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
        large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
        xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
      />

## Cover images

<span>The `cover` prop allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image cover.</span>

<table class="uk-table" data-kitid="cj4n6enp20007aluf6f8w1oz2">

<thead>

<tr>

<th>JSON key</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enp20007aluf6f8w1oz2">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enp20007aluf6f8w1oz2">width</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enp20007aluf6f8w1oz2">The width of the image. The default width is 100% if no width is specified</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enp20007aluf6f8w1oz2">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enp20007aluf6f8w1oz2">height</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enp20007aluf6f8w1oz2">The height of the image. The default height is auto if no height is specified</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enp20007aluf6f8w1oz2">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6enp20007aluf6f8w1oz2">src</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enp20007aluf6f8w1oz2">The src url for the image</td>

</tr>

</tbody>

</table>



### Code

      <Img cover
        small={{height: '150px', src: 'docs/images/placeholder_200x150_1.svg'} }
        medium={{height: '250px', src: 'docs/images/placeholder_200x150_2.svg'} }
        large={{height: '350px', src: 'docs/images/placeholder_200x150_3.svg'} }
        xlarge={{height: '450px', src: 'docs/images/placeholder_200x150_4.svg'} }
      >
        <h1>Cover image</h1>
      </Img>

## Img Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6enpj000aalufwk1ur60d">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enpj000aalufwk1ur60d">alt</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enpj000aalufwk1ur60d">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enpj000aalufwk1ur60d">cover</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enpj000aalufwk1ur60d">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6enpj000aalufwk1ur60d">height</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enpj000aalufwk1ur60d">string</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6enpj000aalufwk1ur60d">large</td>

<td data-kitid="tabledata-[3, 1]-cj4n6enpj000aalufwk1ur60d">object: {`{width, height, src}`}</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6enpj000aalufwk1ur60d">medium</td>

<td data-kitid="tabledata-[4, 1]-cj4n6enpj000aalufwk1ur60d">object: {`{width, height, src}`}</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6enpj000aalufwk1ur60d">small</td>

<td data-kitid="tabledata-[5, 1]-cj4n6enpj000aalufwk1ur60d">object: {`{width, height, src}`}</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6enpj000aalufwk1ur60d">src</td>

<td data-kitid="tabledata-[6, 1]-cj4n6enpj000aalufwk1ur60d">string</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6enpj000aalufwk1ur60d">width</td>

<td data-kitid="tabledata-[7, 1]-cj4n6enpj000aalufwk1ur60d">string</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6enpj000aalufwk1ur60d">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6enpj000aalufwk1ur60d">xlarge</td>

<td data-kitid="tabledata-[8, 1]-cj4n6enpj000aalufwk1ur60d">object: {`{width, height, src}`}</td>

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