import React from 'react';

import Thumbnail from '../lib/thumbnail';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const name = 'Thumbnail';
const npmName = 'react-uikit-thumbnail';
const summary = 'Create different thumbnail images, which come in various styles and sizes.';

const propTuples = [{
    Prop: "height",
    Type: "string"
  }, {
    Prop: "img",
    Type: "object: See Img component props"
  }, {
    Prop: "medium",
    Type: "object: See Img component props"
  }, {
    Prop: "large",
    Type: "object: See Img component props"
  }, {
    Prop: "small",
    Type: "object: See Img component props"
  }, {
    Prop: "src",
    Type: "string"
  }, {
    Prop: "size",
    Type: "oneOf: 'large' | 'medium' | 'small' | 'mini' | 'expand'"
  }, {
    Prop: "type",
    Type: "oneOf: 'block' | 'figure' | 'link'. (Default is block)"
  }, {
    Prop: "width",
    Type: "string"
  }, {
    Prop: "xlarge",
    Type: "object: See Img component props"
}];

const basicExample = (
  <div>
    <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
    <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
    <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />
  </div>
);
const basicSnippet = `
  <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg' />
  <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg' />
  <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg' />`;

const captionExample = (
  <div>
    <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>div</code></Thumbnail>
    <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>link</code></Thumbnail>
    <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>figure</code></Thumbnail>
  </div>
);
const captionSnippet = `
  <Thumbnail height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>div</code></Thumbnail>
  <Thumbnail type='link' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>link</code></Thumbnail>
  <Thumbnail type='figure' height='100px' src='docs/images/placeholder_200x150_2.svg'>Caption <code>figure</code></Thumbnail>`;

const sizeExample = (
  <div>
    <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'><code>large</code></Thumbnail>
    <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'><code>medium</code></Thumbnail>
    <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'><code>small</code></Thumbnail>
    <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'><code>mini</code></Thumbnail>
    <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'><code>expand</code></Thumbnail>
  </div>
);
const sizeSnippet = `
  <Thumbnail size='large' src='docs/images/placeholder_600x400.svg'><code>large</code></Thumbnail>
  <Thumbnail size='medium' src='docs/images/placeholder_600x400.svg'><code>medium</code></Thumbnail>
  <Thumbnail size='small' src='docs/images/placeholder_600x400.svg'><code>small</code></Thumbnail>
  <Thumbnail size='mini' src='docs/images/placeholder_600x400.svg'><code>mini</code></Thumbnail>
  <Thumbnail size='expand' src='docs/images/placeholder_600x400.svg'><code>expand</code></Thumbnail>`;

const ThumbnailDoc = (props) => (
  <div data-markdown-omit-wrapper>
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      description={<div>
        <p>Thumbnail component creates a thumbnail around the Img component.</p>
        <p>There are three types of thumbnails: block, link and figure. Block is the defualt type. To change the type of thumbnail add the <code>type</code> prop and the respective type.</p>
      </div>}
      jsx={basicExample}
      snippet={basicSnippet}
    />
    <DocExample
      name="Thumbnail caption"
      description={<span>To add a caption, simply add it as a child of the thumbnail.</span>}
      jsx={captionExample}
      snippet={captionSnippet}
    />
    <DocExample
      name="Thumbnail sizes"
      description={<span>Thumbnails can be resized using the <code>size</code> prop.</span>}
      jsx={sizeExample}
      snippet={sizeSnippet}
    />
    <DocExample
      name="Img Props"
      description={<span>Props can be passed to the Img component by using the <code>img</code> prop. See Img compoent for further details.</span>}
    />
    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ThumbnailDoc;
