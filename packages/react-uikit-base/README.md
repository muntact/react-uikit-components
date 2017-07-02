# React Uikit Base

Create react components for UIKit.

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-base --save;

    // ES6
    import Base from 'react-uikit-base';

    // ES5
    var Base = require('react-uikit-base');

## Base

To create a uikit component pass a component as an argument to the base property. The new component will have all the utility props avaliable to it.

### Code

    import React from 'react';

    const Component = ({ children, classes, className }) => {
      const cssClassNames = uikit.helpers.cleanClasses([ classes, className ]);

      return (<div className={cssClassNames}>{children}</div>);
    };

    uikit.base(Component);

    // <Component />

## Element

An empty component that has all the utility props can be quickly created by using the element property. This can be useful for generic containers.

### Code

    import React from 'react';

    const Col = uikit.element;
    // <Col>
    //  {this.props.children}
    // </Col>

## Helper functions

UIkit components come with a number of helper function to assist in the creation of new components.

### breakpoints

Returns media and screen objects for handling different responsive sizes.

## Media

Returns a string of the media size.

<table class="uk-table  uk-table-striped" data-kitid="cj4n6e7jk000495uf8fn1ec30"><caption>Responsive media sizes</caption>

<thead>

<tr>

<th>Media</th>

<th>Size</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6e7jk000495uf8fn1ec30">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6e7jk000495uf8fn1ec30">small</td>

<td data-kitid="tabledata-[0, 1]-cj4n6e7jk000495uf8fn1ec30">767</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6e7jk000495uf8fn1ec30">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6e7jk000495uf8fn1ec30">medium</td>

<td data-kitid="tabledata-[1, 1]-cj4n6e7jk000495uf8fn1ec30">768</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6e7jk000495uf8fn1ec30">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6e7jk000495uf8fn1ec30">large</td>

<td data-kitid="tabledata-[2, 1]-cj4n6e7jk000495uf8fn1ec30">960</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6e7jk000495uf8fn1ec30">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6e7jk000495uf8fn1ec30">xlarge</td>

<td data-kitid="tabledata-[3, 1]-cj4n6e7jk000495uf8fn1ec30">1200</td>

</tr>

</tbody>

</table>

### Code

    breakpoints.small; // 767
     breakpoints.medium; // 768
     breakpoints.large; // 960
     breakpoints.xlarge; // 1200

## Screen

Returns a true or false depending on the window.innerWidth.

<table class="uk-table  uk-table-striped" data-kitid="cj4n6e7ju000695uf3pkv6kuj"><caption>Responsive media sizes</caption>

<thead>

<tr>

<th>Screen</th>

<th>Size</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6e7ju000695uf3pkv6kuj">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6e7ju000695uf3pkv6kuj">small</td>

<td data-kitid="tabledata-[0, 1]-cj4n6e7ju000695uf3pkv6kuj">less than 767</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6e7ju000695uf3pkv6kuj">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6e7ju000695uf3pkv6kuj">medium</td>

<td data-kitid="tabledata-[1, 1]-cj4n6e7ju000695uf3pkv6kuj">More than 768 and less than 960</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6e7ju000695uf3pkv6kuj">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6e7ju000695uf3pkv6kuj">large</td>

<td data-kitid="tabledata-[2, 1]-cj4n6e7ju000695uf3pkv6kuj">More than 960 and less than 1200</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6e7ju000695uf3pkv6kuj">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6e7ju000695uf3pkv6kuj">xlarge</td>

<td data-kitid="tabledata-[3, 1]-cj4n6e7ju000695uf3pkv6kuj">More than 1200</td>

</tr>

</tbody>

</table>

### Code

    breakpoints.small; // 767
     breakpoints.medium; // 768
     breakpoints.large; // 960
     breakpoints.xlarge; // 1200

## closeClass

Return UIKits 'uk-close' class. If alt is passed as an argument 'uk-close-alt' is returned instead.

### Code

    closeClass();    // 'uk-close';
    closeClass(alt); // 'uk-close-alt';

## colSpan

Returns an array of available column width spans. See utility props below.

## cleanClasses

Returns a new array with all falsey values removed.

### Code

    class Alert ({ large, className}) => {
      ...
      const cssClassNames = uikit.helpers.cleanClasses(['uk-alert', className, large ? 'uk-alert-large' : null ]);
      ...
    }

    <Alert kitid='alert1'/>
    // <div data-kitid="alert1" class="uk-alert"></div>

## cleanProps

cleanProps take two arguments, props object and array of keys to be removed. A new object literal is returned excluding keys that were in the array.

### Code

    const MyComponent (props) = {
      ignoreProps = ['type'];
      return <div {...cleanProps(ignoreProps)(props)}></div>;
    };

## getClass

getClass takes two arguments. The key as a string and an object. If the key exists the value is returned, else an empty string is returned.

## stringToClasses

stringToClasses take two arguments. The string of keys and an object. A new string is returned containing all the values of the keys that exist in the object.

## queryData

Returns DOM node that matches a data attribute value.

### Code

    queryData('myAttr="myid2"');

    // <div data-myAttr="myid2"></div>

## queryDataAll

Returns all DOM nodes that match a data attribute value.

### Code

    queryData('myAttr="myid2"');

    // [
    //   <div data-myAttr="myid2"></div>
    //   <div data-myAttr="myid2"></div>
    //   <div data-myAttr="myid2"></div>
    // ]

## getElement

Returns DOM node that matches a data-kitid value.

### Code

    getElement('myid1');

    // <div data-kitid="myid1"></div>

## Utility props

<table class="uk-table  uk-table-striped" data-kitid="cj4n6e7km000e95ufs92hm1ka"><caption>Responsive media sizes</caption>

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6e7km000e95ufs92hm1ka">align</td>

<td colspan="1" data-kitid="tabledata-[0, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'left' | 'right' | 'center' | 'middleLeft' | 'middleRight'</td>

<td data-kitid="tabledata-[0, 2]-cj4n6e7km000e95ufs92hm1ka">Aligns elements with spacing between the text and the element.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6e7km000e95ufs92hm1ka">children</td>

<td colspan="1" data-kitid="tabledata-[1, 1]-cj4n6e7km000e95ufs92hm1ka">any</td>

<td data-kitid="tabledata-[1, 2]-cj4n6e7km000e95ufs92hm1ka">Children elements.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6e7km000e95ufs92hm1ka">className</td>

<td colspan="1" data-kitid="tabledata-[2, 1]-cj4n6e7km000e95ufs92hm1ka">string</td>

<td data-kitid="tabledata-[2, 2]-cj4n6e7km000e95ufs92hm1ka">CSS class names.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6e7km000e95ufs92hm1ka">borderRadius</td>

<td colspan="1" data-kitid="tabledata-[3, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'rounded' | 'circle'</td>

<td data-kitid="tabledata-[3, 2]-cj4n6e7km000e95ufs92hm1ka">Add rounded corners to an element.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6e7km000e95ufs92hm1ka">clear</td>

<td colspan="1" data-kitid="tabledata-[4, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'fix' | 'nbfc' | 'alt'</td>

<td data-kitid="tabledata-[4, 2]-cj4n6e7km000e95ufs92hm1ka">Clears floats.</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6e7km000e95ufs92hm1ka">center</td>

<td colspan="1" data-kitid="tabledata-[5, 1]-cj4n6e7km000e95ufs92hm1ka">bool</td>

<td data-kitid="tabledata-[5, 2]-cj4n6e7km000e95ufs92hm1ka">Center a container. For any other block element, you additionally need to apply a width.</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6e7km000e95ufs92hm1ka">col</td>

<td colspan="1" data-kitid="tabledata-[6, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td data-kitid="tabledata-[6, 2]-cj4n6e7km000e95ufs92hm1ka">Wraps the component inside of a div element and adds a width class based on a fraction.</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6e7km000e95ufs92hm1ka">colsSmall</td>

<td colspan="1" data-kitid="tabledata-[7, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td data-kitid="tabledata-[7, 2]-cj4n6e7km000e95ufs92hm1ka">Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 480px or higher.</td>

</tr>

<tr data-kitid="tablerow-8-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6e7km000e95ufs92hm1ka">colsMedium</td>

<td colspan="1" data-kitid="tabledata-[8, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td data-kitid="tabledata-[8, 2]-cj4n6e7km000e95ufs92hm1ka">Wraps the component inside of a div element and adds a width class based on a fraction, if the device width is 768px or higher.</td>

</tr>

<tr data-kitid="tablerow-9-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[9, 0]-cj4n6e7km000e95ufs92hm1ka">colsLarge</td>

<td colspan="1" data-kitid="tabledata-[9, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: '1-1', '1-2', '1-3', '2-3', '1-4', '2-4', '3-4' '1-5', '2-5', ' 3-5', '4-5', '1-6', '2-6', ' 3-6', '4-6', '5-6' '1-10', '2-10', '3-10', '4-10', '5-10', '6-10', '7-10', '8-10', '9-10'</td>

<td data-kitid="tabledata-[9, 2]-cj4n6e7km000e95ufs92hm1ka">Wraps the component inside of a div element and adds a widthclass based on a fraction, if the device width is 960px or higher.</td>

</tr>

<tr data-kitid="tablerow-10-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[10, 0]-cj4n6e7km000e95ufs92hm1ka">contrast</td>

<td colspan="1" data-kitid="tabledata-[10, 1]-cj4n6e7km000e95ufs92hm1ka">bool</td>

<td data-kitid="tabledata-[10, 2]-cj4n6e7km000e95ufs92hm1ka">Changes the color of the element.</td>

</tr>

<tr data-kitid="tablerow-11-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[11, 0]-cj4n6e7km000e95ufs92hm1ka">display</td>

<td colspan="1" data-kitid="tabledata-[11, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'block' | 'inline' | 'inlineBlock'</td>

<td data-kitid="tabledata-[11, 2]-cj4n6e7km000e95ufs92hm1ka">Changes the display style element.</td>

</tr>

<tr data-kitid="tablerow-12-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[12, 0]-cj4n6e7km000e95ufs92hm1ka">float</td>

<td colspan="1" data-kitid="tabledata-[12, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'left' | 'right'</td>

<td data-kitid="tabledata-[12, 2]-cj4n6e7km000e95ufs92hm1ka">Floats an element left or right.</td>

</tr>

<tr data-kitid="tablerow-13-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[13, 0]-cj4n6e7km000e95ufs92hm1ka">hidden</td>

<td colspan="1" data-kitid="tabledata-[13, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'all' | 'invisible' | 'large' | 'small' | 'medium' | 'touch' | 'notouch'</td>

<td data-kitid="tabledata-[13, 2]-cj4n6e7km000e95ufs92hm1ka">Hides element on different devices.</td>

</tr>

<tr data-kitid="tablerow-14-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[14, 0]-cj4n6e7km000e95ufs92hm1ka">kitid</td>

<td colspan="1" data-kitid="tabledata-[14, 1]-cj4n6e7km000e95ufs92hm1ka">string</td>

<td data-kitid="tabledata-[14, 2]-cj4n6e7km000e95ufs92hm1ka">Adds a data attribute to be used as an identifier.</td>

</tr>

<tr data-kitid="tablerow-15-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[15, 0]-cj4n6e7km000e95ufs92hm1ka">list</td>

<td colspan="1" data-kitid="tabledata-[15, 1]-cj4n6e7km000e95ufs92hm1ka">bool</td>

<td data-kitid="tabledata-[15, 2]-cj4n6e7km000e95ufs92hm1ka">Wraps the component inside of a li element.</td>

</tr>

<tr data-kitid="tablerow-16-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[16, 0]-cj4n6e7km000e95ufs92hm1ka">margin</td>

<td colspan="1" data-kitid="tabledata-[16, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'top' | 'left' | 'bottom' | 'right' | 'smallTop' | 'smallLeft' | 'smallBottom' | 'smallRight' | 'largeTop' | 'largeLeft' | 'largeBottom' | 'largeRight' | 'remove' | 'removeTop' | 'removeBottom'</td>

<td data-kitid="tabledata-[16, 2]-cj4n6e7km000e95ufs92hm1ka">Adds spacing to block elements.</td>

</tr>

<tr data-kitid="tablerow-17-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[17, 0]-cj4n6e7km000e95ufs92hm1ka">order</td>

<td colspan="1" data-kitid="tabledata-[17, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'first' | 'firstSmall' | 'firstMedium' | 'firstLarge' | 'firstXlarge' | 'last' | 'lastSmall' | 'lastMedium' | 'lastLarge' | 'lastXlarge'</td>

<td data-kitid="tabledata-[17, 2]-cj4n6e7km000e95ufs92hm1ka">Changes the order of an item if it is a child of a flexbox.</td>

</tr>

<tr data-kitid="tablerow-18-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[18, 0]-cj4n6e7km000e95ufs92hm1ka">padding</td>

<td colspan="1" data-kitid="tabledata-[18, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'top' | 'left' | 'bottom' | 'right' | 'smallTop' | 'smallLeft' | 'smallBottom' | 'smallRight' | 'largeTop' | 'largeLeft' | 'largeBottom' | 'largeRight' | 'remove' | 'removeTop' | 'removeBottom' | 'removeVertical'</td>

<td data-kitid="tabledata-[18, 2]-cj4n6e7km000e95ufs92hm1ka">Adds or removes the padding from an element.</td>

</tr>

<tr data-kitid="tablerow-19-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[19, 0]-cj4n6e7km000e95ufs92hm1ka">position</td>

<td colspan="1" data-kitid="tabledata-[19, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'cover' | 'relative' | 'zIndex'</td>

<td data-kitid="tabledata-[19, 2]-cj4n6e7km000e95ufs92hm1ka">Positions element.</td>

</tr>

<tr data-kitid="tablerow-20-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[20, 0]-cj4n6e7km000e95ufs92hm1ka">responsive</td>

<td colspan="1" data-kitid="tabledata-[20, 1]-cj4n6e7km000e95ufs92hm1ka">string: 'width' and 'height'</td>

<td data-kitid="tabledata-[20, 2]-cj4n6e7km000e95ufs92hm1ka">Makes max width and/or height 100%.</td>

</tr>

<tr data-kitid="tablerow-21-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[21, 0]-cj4n6e7km000e95ufs92hm1ka">scroll</td>

<td colspan="1" data-kitid="tabledata-[21, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'auto' | 'box' | 'text'</td>

<td data-kitid="tabledata-[21, 2]-cj4n6e7km000e95ufs92hm1ka">Adds scrollbars to element.</td>

</tr>

<tr data-kitid="tablerow-22-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[22, 0]-cj4n6e7km000e95ufs92hm1ka">textAlign</td>

<td colspan="1" data-kitid="tabledata-[22, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'center' | 'centerSmall' | 'centerMedium' | 'left' | 'leftSmall' | 'leftMedium' | 'justify' | 'right'</td>

<td data-kitid="tabledata-[22, 2]-cj4n6e7km000e95ufs92hm1ka">Aligns text horizontally.</td>

</tr>

<tr data-kitid="tablerow-23-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[23, 0]-cj4n6e7km000e95ufs92hm1ka">textVertical</td>

<td colspan="1" data-kitid="tabledata-[23, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'top' | 'middle' | 'bottom'</td>

<td data-kitid="tabledata-[23, 2]-cj4n6e7km000e95ufs92hm1ka">Aligns text vertically.</td>

</tr>

<tr data-kitid="tablerow-24-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[24, 0]-cj4n6e7km000e95ufs92hm1ka">textWrap</td>

<td colspan="1" data-kitid="tabledata-[24, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'truncate' | 'break' | 'nowrap'</td>

<td data-kitid="tabledata-[24, 2]-cj4n6e7km000e95ufs92hm1ka">Wraps or prevents wrapping of text.</td>

</tr>

<tr data-kitid="tablerow-25-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[25, 0]-cj4n6e7km000e95ufs92hm1ka">vertical</td>

<td colspan="1" data-kitid="tabledata-[25, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'parent' | 'middle' | 'bottom'</td>

<td data-kitid="tabledata-[25, 2]-cj4n6e7km000e95ufs92hm1ka">Vertically aligns element.</td>

</tr>

<tr data-kitid="tablerow-26-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[26, 0]-cj4n6e7km000e95ufs92hm1ka">viewport</td>

<td colspan="1" data-kitid="tabledata-[26, 1]-cj4n6e7km000e95ufs92hm1ka">bool</td>

<td data-kitid="tabledata-[26, 2]-cj4n6e7km000e95ufs92hm1ka">Fills the height of the entire viewport.</td>

</tr>

<tr data-kitid="tablerow-27-cj4n6e7km000e95ufs92hm1ka">

<td colspan="1" data-kitid="tabledata-[27, 0]-cj4n6e7km000e95ufs92hm1ka">visible</td>

<td colspan="1" data-kitid="tabledata-[27, 1]-cj4n6e7km000e95ufs92hm1ka">oneOf: 'hover' | 'hoverInline' | 'large' | 'small' | 'medium'</td>

<td data-kitid="tabledata-[27, 2]-cj4n6e7km000e95ufs92hm1ka">Shows element on differnt devices.</td>

</tr>

</tbody>

</table>

## Base Props

See Base for additional utility props.

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