# React Uikit Text

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-text --save;

    // ES6
    import Text from 'react-uikit-text';

    // ES5
    var Text = require('react-uikit-text');

## Text Types

<span>The Text component creates a number of various Text components. The default type is `p` which creates a paragraph.</span>

<table class="uk-table" data-kitid="cj4n6fj6f0002d8ufkgq6e6px">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='p'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a paragraph using the

p type.</span> </td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='a'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Turn text into hypertext using the <a data-kitid="cj4n6fj760004d8ufuihdywcj">a type.</a></span></td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='em'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Emphasize text using the _em element_.</span></td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='strong'`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Imply any extra importance using the **strong type**.</span></td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='code'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define inline code snippets using the `code type.`</span></td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='ins'`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Mark document changes as inserted text using the <ins data-kitid="cj4n6fj840008d8uf96f9uuo5">ins type</ins>.</span></td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='mark'`</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Highlight text with no semantic meaning using the <mark data-kitid="cj4n6fj8l0009d8ufolk6xfos">mark type</mark>.</span></td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='q'`</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define inline quotations using <q data-kitid="cj4n6fj8t000ad8ufo6axu0zs">q type</q>.</span></td>

</tr>

<tr data-kitid="tablerow-8-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[8, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='abbr'`</td>

<td data-kitid="tabledata-[8, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define an abbreviation using the <abbr title="Abbreviation Element" data-kitid="cj4n6fj92000bd8ufuk33nlnc">abbr type</abbr> with a `title=''` Prop.</span></td>

</tr>

<tr data-kitid="tablerow-9-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[9, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='del'`</td>

<td data-kitid="tabledata-[9, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Mark document changes as deleted text using the <del data-kitid="cj4n6fj99000cd8ufbdfm6j0r">del type</del> with a `title=''` Prop.</span></td>

</tr>

<tr data-kitid="tablerow-10-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[10, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='dfn'`</td>

<td data-kitid="tabledata-[10, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a definition term using the <dfn title="Defines a definition term" data-kitid="cj4n6fj9g000dd8ufkcbm573j">dfn type</dfn> with a `title=''` Prop.</span></td>

</tr>

<tr data-kitid="tablerow-11-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[11, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='small'`</td>

<td data-kitid="tabledata-[11, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>De-emphasize text for small print using the <small data-kitid="cj4n6fj9n000ed8uf0zsozziw">small</small> type.</span></td>

</tr>

<tr data-kitid="tablerow-12-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[12, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='h1'`</td>

<td data-kitid="tabledata-[12, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a h1 heading using the

# h1 type

.</span></td>

</tr>

<tr data-kitid="tablerow-13-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[13, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='h2'`</td>

<td data-kitid="tabledata-[13, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a h2 heading using the

## h2 type

.</span></td>

</tr>

<tr data-kitid="tablerow-14-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[14, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='h3'`</td>

<td data-kitid="tabledata-[14, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a h3 heading using the

### h3 type

.</span></td>

</tr>

<tr data-kitid="tablerow-15-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[15, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='h4'`</td>

<td data-kitid="tabledata-[15, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a h4 heading using the

#### h4 type

.</span></td>

</tr>

<tr data-kitid="tablerow-16-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[16, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='h5'`</td>

<td data-kitid="tabledata-[16, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a h5 heading using the

##### h5 type</span> </td>

</tr>

<tr data-kitid="tablerow-17-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[17, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='h6'`</td>

<td data-kitid="tabledata-[17, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define a h6 heading using the

###### h6 type

.</span></td>

</tr>

<tr data-kitid="tablerow-18-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[18, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='span'`</td>

<td data-kitid="tabledata-[18, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Define parts of inline text with the <span class="uk-display-inline" data-kitid="cj4n6fjaw000ld8ufyqns6wqg">span type</span>. Use when no other component or HTML element is suitable.</span></td>

</tr>

<tr data-kitid="tablerow-19-cj4n6fj6f0002d8ufkgq6e6px">

<td colspan="1" data-kitid="tabledata-[19, 0]-cj4n6fj6f0002d8ufkgq6e6px">`type='hr'`</td>

<td data-kitid="tabledata-[19, 1]-cj4n6fj6f0002d8ufkgq6e6px"><span>Create a horizontal rule by using the `hr type`.</span></td>

</tr>

</tbody>

</table>

## Text headings

<span>Use `heading` prop to alter any of the Text component types to a heading.</span>

<table class="uk-table" data-kitid="cj4n6fjb8000md8ufed41261j">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fjb8000md8ufed41261j">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fjb8000md8ufed41261j">`heading='h1'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fjb8000md8ufed41261j">Changes the size of text to h1</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fjb8000md8ufed41261j">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fjb8000md8ufed41261j">`heading='h2'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fjb8000md8ufed41261j">Changes the size of text to h2</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fjb8000md8ufed41261j">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fjb8000md8ufed41261j">`heading='h3'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fjb8000md8ufed41261j">Changes the size of text to h3</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fjb8000md8ufed41261j">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fjb8000md8ufed41261j">`heading='h4'`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fjb8000md8ufed41261j">Changes the size of text to h4</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fjb8000md8ufed41261j">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fjb8000md8ufed41261j">`heading='h5'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fjb8000md8ufed41261j">Changes the size of text to h5</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fjb8000md8ufed41261j">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fjb8000md8ufed41261j">`heading='h6'`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fjb8000md8ufed41261j">Changes the size of text to h6</td>

</tr>

</tbody>

</table>

### Code

    <Text heading='h1'>...</Text>
    <Text heading='h2'>...</Text>
    <Text heading='h3'>...</Text>
    <Text heading='h4'>...</Text>
    <Text heading='h5'>...</Text>
    <Text heading='h6'>...</Text>

## Text bold

<span>Add the `bold` prop to create bold text.</span>


### Code

    <Text bold type='span'>bold text</Text>

## Text size

<span>Text size can be changed by using one of the `size=''` props.</span>

<table class="uk-table" data-kitid="cj4n6fjbv000qd8uf29n5ybw2">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fjbv000qd8uf29n5ybw2">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fjbv000qd8uf29n5ybw2">`size='small'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fjbv000qd8uf29n5ybw2"><span>Add the `size='small'` prop to <span class="uk-text-small" data-kitid="cj4n6fjbz000rd8ufnxk18mme">decrease the font size.</span></span></td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fjbv000qd8uf29n5ybw2">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fjbv000qd8uf29n5ybw2">`size='large'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fjbv000qd8uf29n5ybw2"><span>Add the `size='large'` prop to <span class="uk-text-large" data-kitid="cj4n6fjc5000sd8uffghbtup0">increase the font size.</span></span></td>

</tr>

</tbody>

</table>

## Text context

<span>The text context prop can be used to give text context.</span>

<table class="uk-table" data-kitid="cj4n6fjcb000td8ufamrg3il6">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fjcb000td8ufamrg3il6">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fjcb000td8ufamrg3il6">`context='muted'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fjcb000td8ufamrg3il6">

Add the muted prop to mute text.

</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fjcb000td8ufamrg3il6">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fjcb000td8ufamrg3il6">`context='primary'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fjcb000td8ufamrg3il6">

Add the primary prop to highlight additional information.

</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fjcb000td8ufamrg3il6">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fjcb000td8ufamrg3il6">`context='success'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fjcb000td8ufamrg3il6">

Add the success prop to indicate success.

</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fjcb000td8ufamrg3il6">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fjcb000td8ufamrg3il6">`context='warning'`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fjcb000td8ufamrg3il6">

Add the warning prop to indicate warning.

</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fjcb000td8ufamrg3il6">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fjcb000td8ufamrg3il6">`context='danger'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fjcb000td8ufamrg3il6">

Add the danger prop to indicate danger.

</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fjcb000td8ufamrg3il6">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fjcb000td8ufamrg3il6">`context='contrast'`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fjcb000td8ufamrg3il6">

Add the contrast prop to make the text context readable on flat context areas or pictures. It's usualy white.

</td>

</tr>

</tbody>

</table>

### Code

      <Text context='muted'>Add the muted props for text.</Text>
      <Text context='primary'>Add the primary props to text context.</Text>
      <Text context='success'>Add the success props to  your to text context.</Text>
      <Text context='warning'>Addthe  warning props to  your to text context.</Text>
      <Text context='danger'>Add the danger props to  your to text context.</Text>
      <Text context='contrast'>Add the contrast props to make the text context readable on flat context areas or pictures. It's often white.</Text>

## Text align

<span>The textAlign prop horizontally aligns text.</span>

<table class="uk-table" data-kitid="cj4n6fjdt0011d8ufwfxyl34j">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='left'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fjdt0011d8ufwfxyl34j">Aligns text to the left.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='leftSmall'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fjdt0011d8ufwfxyl34j">Aligns text to the left only on small devices.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='leftMedium'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fjdt0011d8ufwfxyl34j">Aligns text to the left on medium and small devices.</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='right'`</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fjdt0011d8ufwfxyl34j">Aligns text to the right.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='center'`</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fjdt0011d8ufwfxyl34j">Centers text horizontally.</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='centerSmall'`</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fjdt0011d8ufwfxyl34j">Centers text horizontally only on small devices.</td>

</tr>

<tr data-kitid="tablerow-6-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[6, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='centerMedium'`</td>

<td data-kitid="tabledata-[6, 1]-cj4n6fjdt0011d8ufwfxyl34j">Centers text horizontally on medium and small devices.</td>

</tr>

<tr data-kitid="tablerow-7-cj4n6fjdt0011d8ufwfxyl34j">

<td colspan="1" data-kitid="tabledata-[7, 0]-cj4n6fjdt0011d8ufwfxyl34j">`textAlign='justify'`</td>

<td data-kitid="tabledata-[7, 1]-cj4n6fjdt0011d8ufwfxyl34j">Justifies text.</td>

</tr>

</tbody>

</table>



### Code

      <Grid gutter='small' indent>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='left'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='leftSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-small'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='leftMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='left-medium'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='right'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='right'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='center'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='centerSmall'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-small'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='centerMedium'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='center-medium'</code></Text>
        </Panel>
        <Panel box margin='bottom' col='1-2'>
          <Text textAlign='justify'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <code>textAlign='justify'</code></Text>
        </Panel>
      </Grid>

## Text vertical

<span>The textVertical prop vertically aligns text to an object.</span>

<table class="uk-table" data-kitid="cj4n6fjga001kd8ufc6pjfndl">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fjga001kd8ufc6pjfndl">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fjga001kd8ufc6pjfndl">`textVertical='top'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fjga001kd8ufc6pjfndl">Aligns text to the top.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fjga001kd8ufc6pjfndl">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fjga001kd8ufc6pjfndl">`textVertical='middle'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fjga001kd8ufc6pjfndl">Centers text vertically.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fjga001kd8ufc6pjfndl">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fjga001kd8ufc6pjfndl">`textVertical='bottom'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fjga001kd8ufc6pjfndl">Aligns text to the bottom.</td>

</tr>

</tbody>

</table>



### Code

      // style.css
      .uk-text-top > * {
     vertical-align: top;
    }
      ...

      // script.js
      <Grid gutter='small'>
        <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
          <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='top' type='span'>Lorem ipsum <code>textVerticle='top'</code></Text>
        </Panel>
        <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
          <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='middle' type='span'>Lorem ipsum <code>textVerticle='middle'</code></Text>
        </Panel>
        <Panel colMedium='1-2' colLarge='1-3' margin='bottom'>
          <img src='docs/images/placeholder_avatar.svg' width='50' height='50' /><Text textVertical='bottom' type='span'>Lorem ipsum <code>textVerticle='bottom'</code></Text>
        </Panel>
      </Grid>

## Text wrap

<span>The textWrap prop wraps text.</span>

<table class="uk-table" data-kitid="cj4n6fjha001td8uf4qwskq16">

<thead>

<tr>

<th>Prop</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fjha001td8uf4qwskq16">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fjha001td8uf4qwskq16">`textWrap='truncate'`</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fjha001td8uf4qwskq16">Prevents text from wrapping into multiple lines, truncating it instead.</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fjha001td8uf4qwskq16">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fjha001td8uf4qwskq16">`textWrap='break'`</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fjha001td8uf4qwskq16">Breaks strings if their length exceeds the width of their container.</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fjha001td8uf4qwskq16">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fjha001td8uf4qwskq16">`textWrap='nowrap'`</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fjha001td8uf4qwskq16">Breaks strings if their length exceeds the width of their container.</td>

</tr>

</tbody>

</table>



### Code

      <Grid gutter='small' indent>
        <Panel col='1-3' box>
          <Text textWrap='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<code>textWrap='truncate'</code></Text>
        </Panel>
        <Panel col='1-3' box>
          <Text textWrap='break'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<code>textWrap='break'</code></Text>
        </Panel>
        <Panel col='1-3' box>
          <Text textWrap='nowrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<code>textWrap='nowrap'</code></Text>
        </Panel>
      </Grid>

## Text Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6fji30022d8uf7tfk9jnn">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6fji30022d8uf7tfk9jnn">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6fji30022d8uf7tfk9jnn">bold</td>

<td data-kitid="tabledata-[0, 1]-cj4n6fji30022d8uf7tfk9jnn">bool</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6fji30022d8uf7tfk9jnn">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6fji30022d8uf7tfk9jnn">context</td>

<td data-kitid="tabledata-[1, 1]-cj4n6fji30022d8uf7tfk9jnn">oneOf: 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'contrast'</td>

</tr>

<tr data-kitid="tablerow-2-cj4n6fji30022d8uf7tfk9jnn">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6fji30022d8uf7tfk9jnn">heading</td>

<td data-kitid="tabledata-[2, 1]-cj4n6fji30022d8uf7tfk9jnn">oneOf: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'</td>

</tr>

<tr data-kitid="tablerow-3-cj4n6fji30022d8uf7tfk9jnn">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6fji30022d8uf7tfk9jnn">href</td>

<td data-kitid="tabledata-[3, 1]-cj4n6fji30022d8uf7tfk9jnn">string for a type only.</td>

</tr>

<tr data-kitid="tablerow-4-cj4n6fji30022d8uf7tfk9jnn">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6fji30022d8uf7tfk9jnn">size</td>

<td data-kitid="tabledata-[4, 1]-cj4n6fji30022d8uf7tfk9jnn">oneOf: 'small' | 'large'</td>

</tr>

<tr data-kitid="tablerow-5-cj4n6fji30022d8uf7tfk9jnn">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6fji30022d8uf7tfk9jnn">type</td>

<td data-kitid="tabledata-[5, 1]-cj4n6fji30022d8uf7tfk9jnn">oneOf: 'a' | 'abbr' | 'code' | 'del' | 'dfn' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hr' | 'ins' | 'mark' | 'q' | 'p' (default) | 'small' | 'span' | 'strong'</td>

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