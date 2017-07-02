# React Uikit Comment

Create comments, for example about articles.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-comment --save;

    // ES6
    import Comment from 'react-uikit-comment';

    // ES5
    var Comment = require('react-uikit-comment');

The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.

The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.

<table class="uk-table" data-kitid="cj4n6evcp0002b7uf786rv2l0">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>`avatar`</td>

<td>Add avatar prop to create an avatar for the comment author</td>

</tr>

<tr>

<td>`title`</td>

<td>Add tilte prop to createCreates a comment title.</td>

</tr>

<tr>

<td>`meta`</td>

<td>Add meta prop to add meta data about the comment.</td>

</tr>

<tr>

<td>`body`</td>

<td>Add body prop to add text comment body. Body is overridden if commet has children.</td>

</tr>

</tbody>

</table>



### Code

      const meta = <div>
        <Button type='link' context='link' size='mini' body='12 days ago'/> |
        <Button type='link' context='link' size='mini' body='Profile'/> |
        <Button type='link' context='link' size='mini' body='#'/>
      </div>;

      ...
      <Comment title='Author' meta={meta}
        avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </Comment>
      ...

## Comment Color

To style a comment differently, for example to highlight it as the admin's comment, just add the primary prop.


### Code

      const meta = <div>
        <Button type='link' context='link' size='mini' body='12 days ago'/> |
        <Button type='link' context='link' size='mini' body='Profile'/> |
        <Button type='link' context='link' size='mini' body='#'/>
      </div>;

      ...
      <Comment primary title='Author' meta={meta}
        avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </Comment>
      ...

## Comment Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6eve4000db7ufq1b8wc3j">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6eve4000db7ufq1b8wc3j">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6eve4000db7ufq1b8wc3j">avatar</td>

<td data-kitid="tabledata-[0, 1]-cj4n6eve4000db7ufq1b8wc3j">object `{src, alt}`</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6eve4000db7ufq1b8wc3j">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6eve4000db7ufq1b8wc3j">body</td>

<td data-kitid="tabledata-[1, 1]-cj4n6eve4000db7ufq1b8wc3j">string</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6eve4000db7ufq1b8wc3j">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6eve4000db7ufq1b8wc3j">meta</td>

<td data-kitid="tabledata-[2, 1]-cj4n6eve4000db7ufq1b8wc3j">any</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6eve4000db7ufq1b8wc3j">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6eve4000db7ufq1b8wc3j">primary</td>

<td data-kitid="tabledata-[3, 1]-cj4n6eve4000db7ufq1b8wc3j">bool</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6eve4000db7ufq1b8wc3j">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6eve4000db7ufq1b8wc3j">title</td>

<td data-kitid="tabledata-[4, 1]-cj4n6eve4000db7ufq1b8wc3j">string</td>

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