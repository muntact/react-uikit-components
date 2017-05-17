import React from 'react';
import Codeblock from '../../react-uikit-codeblock/lib/codeblock';
// import Note from '../../react-uikit-note/lib/note';

import DocHeader from '../../../common/components/DocHeader';
import DocFooter from '../../../common/components/DocFooter';

const name = 'Thumbnail';
const npmName = 'react-uikit-thumbnail';
const summary = 'Create different thumbnail images, which come in various styles and sizes.';
const url = 'http://otissv.github.io/react-uikit-components/';

const propTuples = [
  {
    name: "height",
    type: "string"
  },
  {
    name: "img",
    type: "object\nSee Img component props"
  },
  {
    name: "medium",
    type: "object\nSee Img component props"
  },
  {
    name: "large",
    type: "object\nSee Img component props"
  },
  {
    name: "small",
    type: "object\nSee Img component props"
  },
  {
    name: "size",
    type: "oneOf\nlarge, medium, small, mini or expand"
  },
  {
    name: "type",
    type: "oneOf\nblock, figure or link. (Default is block)"
  },
  {
    name: "width",
    type: "string"
  },
  {
    name: "xlarge",
    type: "object\nSee Img component props"
  },
];

const ThumbnailDoc = (props) => (
  <div>
    <DocHeader {... { name, npmName, summary, url }} />

    {/* ... examples... */}

    <DocFooter { ...{ name, propTuples }} />
  </div>
);

export default ThumbnailDoc;
