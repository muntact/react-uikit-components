import React from 'react';
import Button from 'react-uikit-button';
import ButtonGroup from '../lib/button-group';

import DocHeader from '../../script-utils/lib/DocHeader';
import DocExample from '../../script-utils/lib/DocExample';
import DocFooter from '../../script-utils/lib/DocFooter';

const name = 'Button Group';
const npmName = 'react-uikit-button-group';
const summary = 'Easily create nicely looking group buttons.';


const generateExampleJSX = (context) => (
  <ButtonGroup display='block' margin='smallBottom'>
    <Button body='Link' type='link' context={context} />
    <Button body='Button' context={context}/>
    <Button body='Button' context={context}/>
  </ButtonGroup>
);

const generateCodeSnippet = (context) =>
  `<ButtonGroup display='block' margin='smallBottom'>
  <Button body='Link' type='link'${context ? ` context="${context}"`: ""}/>
  <Button body='Button${context ? ` context="${context}"`: ""}'/>
  <Button body='Button${context ? ` context="${context}"`: ""}'/>
</ButtonGroup>`;

const contextArgs = [null, 'primary', 'success', 'danger'];
const contextExample = (
  <div>
    {contextArgs.map((arg) => generateExampleJSX(arg))}
  </div>
);
const contextSnippet = contextArgs.map((arg) => generateCodeSnippet(arg)).join('\n');

const ButtonGroupDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Button Groups"
      description={`To create a Button group place the Buttons inside a ButtonGroup component.`}
      jsx={contextExample}
      snippet={contextSnippet}
    />
    <DocExample
      name="Button dropdown"
      description={`Buttons groups can also be used to create split buttons where one button handles the standard action while the other toggles a dropdown. See button dropdown in Dropdown component for more details.`}
    />
    <DocExample
      name="Checkbox buttons"
      description={`Coming soon...`}
    />
    <DocExample
      name="Radio buttons"
      description={`Coming soon...`}
    />
    <DocFooter name={name} />
  </div>
);


export default ButtonGroupDoc;
