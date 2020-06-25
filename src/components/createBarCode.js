var React = require('react');
// var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');
 

class CreateBarCode extends React.Component {
  render() {
    return (
      <div>
        <Barcode value="http://github.com/kciter" />
        mountNode
      </div>
    );
  }
}