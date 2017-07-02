# React Uikit Overlay

Create an image overlay. Useful for galleries or preview links.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-overlay --save;

    // ES6
    import Overlay from 'react-uikit-overlay';

    // ES5
    var Overlay = require('react-uikit-overlay');

Overlays are images that other elemets can be placed on top of.

## Example



### Code

      <Overlay width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
        <h3>Title</h3>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
      </Overlay>

## Overlay background

<span>Overlay can be given a background by adding the `background` prop.</span>


### Code

      <Overlay background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' >
        <h3>Title</h3>
        <p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr.</p>
      </Overlay>

## Overlay icon



### Code

    <Overlay icon background width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />

## Overlay image



### Code

    <Overlay image='docs/images/placeholder_600x400_2.svg' width='300px' height='250px' src='docs/images/placeholder_600x400.svg' />

## Overlay Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6f1mt000abuufkyr26bhm">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6f1mt000abuufkyr26bhm">alt</td>

<td data-kitid="tabledata-[0, 1]-cj4n6f1mt000abuufkyr26bhm">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6f1mt000abuufkyr26bhm">background</td>

<td data-kitid="tabledata-[1, 1]-cj4n6f1mt000abuufkyr26bhm">bool</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6f1mt000abuufkyr26bhm">flex</td>

<td data-kitid="tabledata-[2, 1]-cj4n6f1mt000abuufkyr26bhm">bool</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6f1mt000abuufkyr26bhm">height</td>

<td data-kitid="tabledata-[3, 1]-cj4n6f1mt000abuufkyr26bhm">string</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6f1mt000abuufkyr26bhm">icon</td>

<td data-kitid="tabledata-[4, 1]-cj4n6f1mt000abuufkyr26bhm">bool</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6f1mt000abuufkyr26bhm">image</td>

<td data-kitid="tabledata-[5, 1]-cj4n6f1mt000abuufkyr26bhm">string</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6f1mt000abuufkyr26bhm">large</td>

<td data-kitid="tabledata-[6, 1]-cj4n6f1mt000abuufkyr26bhm">object {`{width, height, url}`}</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6f1mt000abuufkyr26bhm">medium</td>

<td data-kitid="tabledata-[7, 1]-cj4n6f1mt000abuufkyr26bhm">object {`{width, height, url}`}</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6f1mt000abuufkyr26bhm">small</td>

<td data-kitid="tabledata-[8, 1]-cj4n6f1mt000abuufkyr26bhm">object {`{width, height, url}`}</td>

</tr>

<tr data-kitid="tablerow-9-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[9, 0]-cj4n6f1mt000abuufkyr26bhm">src</td>

<td data-kitid="tabledata-[9, 1]-cj4n6f1mt000abuufkyr26bhm">string</td>

</tr>

<tr data-kitid="tablerow-10-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[10, 0]-cj4n6f1mt000abuufkyr26bhm">width</td>

<td data-kitid="tabledata-[10, 1]-cj4n6f1mt000abuufkyr26bhm">string</td>

</tr>

<tr data-kitid="tablerow-11-cj4n6f1mt000abuufkyr26bhm">

<td colspan="1" data-kitid="tabledata-[11, 0]-cj4n6f1mt000abuufkyr26bhm">xlarge</td>

<td data-kitid="tabledata-[11, 1]-cj4n6f1mt000abuufkyr26bhm">object {`{width, height, url}`}</td>

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