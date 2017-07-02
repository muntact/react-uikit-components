# React Uikit Notify

Toggleable notifications that can be animated and postioned on various edges of the screen

See [the website](http://otissv.github.io/react-uikit-components) for docs.

## Usage

    npm install react-uikit-notify --save;

    // ES6
    import Notify from 'react-uikit-notify';

    // ES5
    var Notify = require('react-uikit-notify');




### Code

      <Notify kitid='notify1' pos='top-center' messages={[{ message: 'Message...', kitid:  'message_0', timeout: 3000, context: 'info',
          animate: {
     in : kitid => this.handleNotifyIn(kitid),
     out: kitid => this.handleNotifyOut(kitid)
     },
          onClick: e => this.handleClose(e),
        }]}
      />

## Animation



## Custom message

The `message` property can be a string, jsx or another react component, like an icon element.



### Code

    {
      message: <div><i className='uk-icon-check'></i> Message with an icon...</div>
    }

## Delay and sticky

The `timeout` property sets the amount of time in milliseconds a message is visible. You can also create a sticky message by setting the timeout to zero or omitting the `timeout` property completly.



### Code

    {
      message: 'Stiky message...', timeout: 0
    }

## Message context

A notification can be given a context to indicate an info, success, warning or a danger status. The default context is info;

<table class="uk-table" data-kitid="cj4n6f0mq0009bpuf4bi68ovz"><caption>Notification message context table.</caption>

<thead>

<tr>

<th>Status</th>

<th>Code</th>

<th>Example</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6f0mq0009bpuf4bi68ovz">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6f0mq0009bpuf4bi68ovz">Info</td>

<td colspan="1" data-kitid="tabledata-[0, 1]-cj4n6f0mq0009bpuf4bi68ovz">{ context: 'info' }</td>

<td data-kitid="tabledata-[0, 2]-cj4n6f0mq0009bpuf4bi68ovz"><button data-kitid="cj4n6f0my000abpufx1ijkeqz" class="uk-button  uk-width-1-1" type="button">Info</button></td>

</tr>

<tr data-kitid="tablerow-1-cj4n6f0mq0009bpuf4bi68ovz">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6f0mq0009bpuf4bi68ovz">Success</td>

<td colspan="1" data-kitid="tabledata-[1, 1]-cj4n6f0mq0009bpuf4bi68ovz">{ context: 'success' }</td>

<td data-kitid="tabledata-[1, 2]-cj4n6f0mq0009bpuf4bi68ovz"><button data-kitid="cj4n6f0n2000bbpufwsu3vp84" class="uk-button  uk-width-1-1" type="button">Success</button></td>

</tr>

<tr data-kitid="tablerow-2-cj4n6f0mq0009bpuf4bi68ovz">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6f0mq0009bpuf4bi68ovz">Warning</td>

<td colspan="1" data-kitid="tabledata-[2, 1]-cj4n6f0mq0009bpuf4bi68ovz">{ context: 'warning' }</td>

<td data-kitid="tabledata-[2, 2]-cj4n6f0mq0009bpuf4bi68ovz"><button data-kitid="cj4n6f0n5000cbpufx1pxhs59" class="uk-button  uk-width-1-1" type="button">Warning</button></td>

</tr>

<tr data-kitid="tablerow-3-cj4n6f0mq0009bpuf4bi68ovz">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6f0mq0009bpuf4bi68ovz">Danger</td>

<td colspan="1" data-kitid="tabledata-[3, 1]-cj4n6f0mq0009bpuf4bi68ovz">{ context: 'danger' }</td>

<td data-kitid="tabledata-[3, 2]-cj4n6f0mq0009bpuf4bi68ovz"><button data-kitid="cj4n6f0n9000dbpufr8anwqou" class="uk-button  uk-width-1-1" type="button">Danger</button></td>

</tr>

</tbody>

</table>

## Positions

Notification's position can be adjusted to locations of the screens edges by changing the notifications `pos` property. The default postion is s `top-left`.

<table class="uk-table" data-kitid="cj4n6f0ne000ebpufy0stk2nm"><caption>Notification message context table.</caption>

<thead>

<tr>

<th>Position</th>

<th>Code</th>

<th>Example</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6f0ne000ebpufy0stk2nm">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6f0ne000ebpufy0stk2nm">top-center</td>

<td colspan="1" data-kitid="tabledata-[0, 1]-cj4n6f0ne000ebpufy0stk2nm">{ pos: 'top-center' }</td>

<td data-kitid="tabledata-[0, 2]-cj4n6f0ne000ebpufy0stk2nm"><button data-kitid="cj4n6f0nl000fbpuftmb6oj5g" class="uk-button  uk-width-1-1" type="button">Top Center</button></td>

</tr>

<tr data-kitid="tablerow-1-cj4n6f0ne000ebpufy0stk2nm">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6f0ne000ebpufy0stk2nm">top-left</td>

<td colspan="1" data-kitid="tabledata-[1, 1]-cj4n6f0ne000ebpufy0stk2nm">{ pos: 'top-left' }</td>

<td data-kitid="tabledata-[1, 2]-cj4n6f0ne000ebpufy0stk2nm"><button data-kitid="cj4n6f0no000gbpufmow5oeha" class="uk-button  uk-width-1-1" type="button">Top Left</button></td>

</tr>

<tr data-kitid="tablerow-2-cj4n6f0ne000ebpufy0stk2nm">

<td colspan="1" data-kitid="tabledata-[2, 0]-cj4n6f0ne000ebpufy0stk2nm">top-right</td>

<td colspan="1" data-kitid="tabledata-[2, 1]-cj4n6f0ne000ebpufy0stk2nm">{ pos: 'top-right' }</td>

<td data-kitid="tabledata-[2, 2]-cj4n6f0ne000ebpufy0stk2nm"><button data-kitid="cj4n6f0nq000hbpufdhuc8hab" class="uk-button  uk-width-1-1" type="button">Top Right</button></td>

</tr>

<tr data-kitid="tablerow-3-cj4n6f0ne000ebpufy0stk2nm">

<td colspan="1" data-kitid="tabledata-[3, 0]-cj4n6f0ne000ebpufy0stk2nm">bottom-center</td>

<td colspan="1" data-kitid="tabledata-[3, 1]-cj4n6f0ne000ebpufy0stk2nm">{ pos: 'bottom-center' }</td>

<td data-kitid="tabledata-[3, 2]-cj4n6f0ne000ebpufy0stk2nm"><button data-kitid="cj4n6f0nu000ibpuf2gjrrbnl" class="uk-button  uk-width-1-1" type="button">Bottom Center</button></td>

</tr>

<tr data-kitid="tablerow-4-cj4n6f0ne000ebpufy0stk2nm">

<td colspan="1" data-kitid="tabledata-[4, 0]-cj4n6f0ne000ebpufy0stk2nm">bottom-left</td>

<td colspan="1" data-kitid="tabledata-[4, 1]-cj4n6f0ne000ebpufy0stk2nm">{ pos: 'bottom-left' }</td>

<td data-kitid="tabledata-[4, 2]-cj4n6f0ne000ebpufy0stk2nm"><button data-kitid="cj4n6f0ny000jbpufk8h6nlri" class="uk-button  uk-width-1-1" type="button">Bottom Left</button></td>

</tr>

<tr data-kitid="tablerow-5-cj4n6f0ne000ebpufy0stk2nm">

<td colspan="1" data-kitid="tabledata-[5, 0]-cj4n6f0ne000ebpufy0stk2nm">bottom-right</td>

<td colspan="1" data-kitid="tabledata-[5, 1]-cj4n6f0ne000ebpufy0stk2nm">{ pos: 'bottom-right' }</td>

<td data-kitid="tabledata-[5, 2]-cj4n6f0ne000ebpufy0stk2nm"><button data-kitid="cj4n6f0o3000kbpufvyhrvkq5" class="uk-button  uk-width-1-1" type="button">Bottom Right</button></td>

</tr>

</tbody>

</table>

## Notify Props

See Base for additional utility props.

<table class="uk-table" data-kitid="cj4n6f0o8000lbpuf6nwbo8cg">

<thead>

<tr>

<th>Prop</th>

<th>Type</th>

</tr>

</thead>

<tbody>

<tr data-kitid="tablerow-0-cj4n6f0o8000lbpuf6nwbo8cg">

<td colspan="1" data-kitid="tabledata-[0, 0]-cj4n6f0o8000lbpuf6nwbo8cg">message</td>

<td data-kitid="tabledata-[0, 1]-cj4n6f0o8000lbpuf6nwbo8cg">array</td>

</tr>

<tr data-kitid="tablerow-1-cj4n6f0o8000lbpuf6nwbo8cg">

<td colspan="1" data-kitid="tabledata-[1, 0]-cj4n6f0o8000lbpuf6nwbo8cg">pos</td>

<td data-kitid="tabledata-[1, 1]-cj4n6f0o8000lbpuf6nwbo8cg">oneOf: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' 'bottom-left' | 'bottom-right'</td>

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