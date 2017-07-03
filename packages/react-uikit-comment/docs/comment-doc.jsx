import React from 'react';
import Button from 'react-uikit-button';
import Comment from '../lib/comment';
import Table from 'react-uikit-table';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Comment';
const npmName = 'react-uikit-comment';
const summary = 'Create comments, for example about articles.';
const meta = (
  <div>
    <Button type='link' context='link' size='mini' body='12 days ago'/> |
    <Button type='link' context='link' size='mini' body='Profile'/> |
    <Button type='link' context='link' size='mini' body='#'/>
  </div>
);

const avatar = {src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'};
const generateExampleJSX = (primary) => (
  <Comment primary title='Author' meta={meta}
    avatar={avatar}>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua.
    </p>
  </Comment>
);

const generateCodeSnippet = (primary) => `
  const meta = <div>
    <Button type='link' context='link' size='mini' body='12 days ago'/> |
    <Button type='link' context='link' size='mini' body='Profile'/> |
    <Button type='link' context='link' size='mini' body='#'/>
  </div>;

  ...
  <Comment ${primary? "primary ": ""}title='Author' meta={meta}
    avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua.
    </p>
  </Comment>
  ...
`;

const basicExampleTable = (
  <Table>
    <thead>
      <tr>
        <th>Prop</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>avatar</code></td>
        <td>Add avatar prop to create an avatar for the comment author</td>
      </tr>
      <tr>
        <td><code>title</code></td>
        <td>Add tilte prop to createCreates a comment title.</td>
      </tr>
      <tr>
        <td><code>meta</code></td>
        <td>Add meta prop to add meta data about the comment.</td>
      </tr>
      <tr>
        <td><code>body</code></td>
        <td>
          Add body prop to add text comment body. Body is overridden
          if commet has children.
        </td>
      </tr>
    </tbody>
  </Table>
);
const basicExampleJSX = generateExampleJSX();
const basicExampleSnippet = generateCodeSnippet();

const primaryJSX = generateExampleJSX(true);
const primarySnippet = generateCodeSnippet(true);

const propTuples = [{
    prop: 'avatar',
    type: 'object \`{src, alt}\`',
  }, {
    prop: 'body',
    type: 'string'
  }, {
    prop: 'meta',
    type: 'any'
  }, {
    prop: 'primary',
    type: 'bool'
  }, {
    prop: 'title',
    type: 'string'
  }
];

const CommentDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <p>
      The Comment component consists of a comment header, including an
      avatar, a title and meta data, and a comment body.
    </p>
    <DocExample
      description={ `The Comment component consists of a comment header, including an avatar, a title and meta data, and a comment body.`}
      table={basicExampleTable}
      jsx={basicExampleJSX}
      snippet={basicExampleSnippet}
    />
    <DocExample
      name={'Comment Color'}
      description={'To style a comment differently, for example to highlight it as the admin\'s comment, just add the primary prop.'}
      jsx={primaryJSX}
      snippet={primarySnippet}
    />
    <DocFooter {...{ name, propTuples }} />
  </div>
);

export default CommentDoc;
