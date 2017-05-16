import React from 'react';
import Article from '../lib/article';
// import Table from 'react-uikit-table';
import Note from 'react-uikit-note';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const name = 'Article';
const npmName = 'react-uikit-article';
const summary = 'Create articles within your page.';
const propTuples = [
  {
    Prop: "lead",
    Type: "string"
    // Description: "Highlights opening paragraph of the article."
  },
  {
    Prop: "meta",
    Type: "string"
    // Description: "Adds meta data about the article."
  },
  {
    Prop: "title",
    Type: "string"
    // Description: "Creates an article title"
  },
];

const generateExampleJSX = () => (
  <Article
    title='Article title'
    meta='Written by Super User on 12 April 2012. Posted in Blog'
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
);

const generateCodeSnippet = () =>
`<Article
  title='Article title'
  meta='Written by Super User on 12 April 2012. Posted in Blog'
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
</Article>`;

const ArticleDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <p>
      The article component constists of the article itself, a title, a lead and meta data.
    </p>
    {/* <Table>
      <thead>
        <tr>
          <th className='uk-text-left'>Prop</th>
          <th className='uk-text-left'>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='uk-text-left'><code>title</code></td>
          <td className='uk-text-left'>Creates an article title.</td>
        </tr>
        <tr>
          <td className='uk-text-left'><code>meta</code></td>
          <td className='uk-text-left'>Adds meta data about the article.</td>
        </tr>
        <tr>
          <td className='uk-text-left'><code>lead</code></td>
          <td className='uk-text-left'>Highlights opening paragraph of the article</td>
        </tr>
      </tbody>
    </Table> */}

    <DocExample
      name="Example"
      description="The article component constists of the article itself, a title, a lead and meta data"
      jsx={generateExampleJSX()}
      snippet={generateCodeSnippet()}
    />
    <Note>
      To create separate sections in an article use <code>&lt;hr className="uk-article-divider" &#47;&gt;</code>.
    </Note>

    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ArticleDoc;
