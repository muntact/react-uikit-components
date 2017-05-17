import React from 'react';
import Breadcrumb from '../lib/Breadcrumb';
import BreadcrumbItem from '../lib/breadcrumb-item';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const name = 'Breadcrumb';
const npmName = 'react-uikit-breadcrumb';
const summary = 'Create breadcrumbs to show users their location within a website.';
// TODO: add breadcrumb item to the snippet destructure...
{/*
<Codeblock>
  {`npm install react-uikit-breadcrumb --save;</code>

  // ES6
  Breadcrumb uikit from 'react-uikit-breadcrumb';
  BreadcrumbItem uikit from 'react-uikit-breadcrumb/lib/na-vitem';

  // ES5
  var Breadcrumb = require('react-uikit-breadcrumb').default;
  var BreadcrumbItem = require('react-uikit-breadcrumb/lib/breadcrumb-item').default;
  `}
</Codeblock>
*/}

const basicTable = (
  <Table head={['Type', 'Description']} body={[
    {
      type: 'link',
      description: 'Creates breadcrumb item as a Link'
    }, {
      type: 'acive',
      description: 'Shows the breadcrumb item as active'
    }, {
      type: 'disabled',
      description: 'Disables the breadcrumb Item'
    }
  ]} />
);
const basicJSX = (
  <Breadcrumb kitid='bread'>
    <BreadcrumbItem kitid='1' body='Home'/>
    <BreadcrumbItem kitid='4' type='link' body='link'/>
    <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
    <BreadcrumbItem kitid='2' type='active' body='Post'/>
  </Breadcrumb>
);
const basicSnippet = `<Breadcrumb kitid='bread'>
  <BreadcrumbItem kitid='1' body='Home'/>
  <BreadcrumbItem kitid='4' type='link' body='link'/>
  <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
  <BreadcrumbItem kitid='2' type='active' body='Post'/>
</Breadcrumb>`;

const breadcrumbTuples = [
  {
    prop: 'items',
    type: 'array'
  },
  {
    prop: 'type',
    type: 'oneOf active, link, or disabled'
  }
];
const breadcrumbItemTuples = [
  {
    prop: 'body',
    type: 'string'
  },
  {
    prop: 'href',
    type: 'string'
  },
  {
    prop: 'type',
    type: 'oneOf active, link, or disabled'
  }
];

const BreadcrumbDoc = () => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Breadcrumb"
      description={`The Breadcrumb component consists of links which are aligned side by side and separated by a divider.`}
      table={basicTable}
      jsx={basicJSX}
      snippet={basicSnippet}
    />
    <DocFooter {...{ name, propTuples: breadcrumbTuples }} />
    <DocFooter {...{ name: 'Breadcrumb Item', propTuples: breadcrumbItemTuples }} />
  </div>
);

export default BreadcrumbDoc;
