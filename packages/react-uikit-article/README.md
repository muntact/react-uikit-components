# React Uikit Article

Create articles within your page.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-article --save;

    // ES6
    import Article from 'react-uikit-article';

    // ES5
    var Article = require('react-uikit-article');

The article component constists of the article itself, a title, a lead and meta data.

## Example

The article component constists of the article itself, a title, a lead and meta data


### Code

    <Article
      title='Article title'
      meta='Written by Super User on 12 April 2012\. Posted in Blog'
      lead='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.' >

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <hr className="uk-article-divider" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a href="#">Read more</a>
    </Article>

<span class="uk-badge" data-kitid="badge-cj4n6enkt0004ajufcdvhx420">Note</span> To create separate sections in an article use `<hr className="uk-article-divider" />`.

## Article Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6enl00005ajuft5rmibp8">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6enl00005ajuft5rmibp8">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6enl00005ajuft5rmibp8">lead</td>

<td data-kitid="tabledata-[0, 1]-cj4n6enl00005ajuft5rmibp8">string</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6enl00005ajuft5rmibp8">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6enl00005ajuft5rmibp8">meta</td>

<td data-kitid="tabledata-[1, 1]-cj4n6enl00005ajuft5rmibp8">string</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6enl00005ajuft5rmibp8">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6enl00005ajuft5rmibp8">title</td>

<td data-kitid="tabledata-[2, 1]-cj4n6enl00005ajuft5rmibp8">string</td>

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