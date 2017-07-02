# React Uikit Thumbnail

Create different thumbnail images, which come in various styles and sizes.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-thumbnail --save;

    // ES6
    import Thumbnail from 'react-uikit-thumbnail';

    // ES5
    var Thumbnail = require('react-uikit-thumbnail');




### Code

      <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
      <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
      <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />

## Thumbnail caption

<span>To add a caption, simply add it as a child of the thumbnail.</span>


### Code

      <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>div</code></Thumbnail>
      <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>link</code></Thumbnail>
      <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>figure</code></Thumbnail>

## Thumbnail sizes

<span>Thumbnails can be resized using the `size` prop.</span>


### Code

      <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'><code>large</code></Thumbnail>
      <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'><code>medium</code></Thumbnail>
      <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'><code>small</code></Thumbnail>
      <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'><code>mini</code></Thumbnail>
      <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'><code>expand</code></Thumbnail>

## Img Props

<span>Props can be passed to the Img component by using the `img` prop. See Img compoent for further details.</span>

## Thumbnail Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6f3me000gc0ufbu5njwwh">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6f3me000gc0ufbu5njwwh">height</td>

<td data-kitid="tabledata-[0, 1]-cj4n6f3me000gc0ufbu5njwwh">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6f3me000gc0ufbu5njwwh">img</td>

<td data-kitid="tabledata-[1, 1]-cj4n6f3me000gc0ufbu5njwwh">object: See Img component props</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6f3me000gc0ufbu5njwwh">medium</td>

<td data-kitid="tabledata-[2, 1]-cj4n6f3me000gc0ufbu5njwwh">object: See Img component props</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6f3me000gc0ufbu5njwwh">large</td>

<td data-kitid="tabledata-[3, 1]-cj4n6f3me000gc0ufbu5njwwh">object: See Img component props</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6f3me000gc0ufbu5njwwh">small</td>

<td data-kitid="tabledata-[4, 1]-cj4n6f3me000gc0ufbu5njwwh">object: See Img component props</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6f3me000gc0ufbu5njwwh">src</td>

<td data-kitid="tabledata-[5, 1]-cj4n6f3me000gc0ufbu5njwwh">string</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6f3me000gc0ufbu5njwwh">size</td>

<td data-kitid="tabledata-[6, 1]-cj4n6f3me000gc0ufbu5njwwh">oneOf: 'large' | 'medium' | 'small' | 'mini' | 'expand'</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6f3me000gc0ufbu5njwwh">type</td>

<td data-kitid="tabledata-[7, 1]-cj4n6f3me000gc0ufbu5njwwh">oneOf: 'block' | 'figure' | 'link'. (Default is block)</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6f3me000gc0ufbu5njwwh">width</td>

<td data-kitid="tabledata-[8, 1]-cj4n6f3me000gc0ufbu5njwwh">string</td>

</tr>

<tr data-kitid="tablerow-9-cj4n6f3me000gc0ufbu5njwwh">

<td colspan="1" data-kitid="tabledata-[9, 0]-cj4n6f3me000gc0ufbu5njwwh">xlarge</td>

<td data-kitid="tabledata-[9, 1]-cj4n6f3me000gc0ufbu5njwwh">object: See Img component props</td>

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