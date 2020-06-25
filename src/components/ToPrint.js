import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import barcodeImage from '../images/rabee.jpg';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="info">
        <h1>100 piezas: Bicicletas y patines</h1>
        <img src={barcodeImage} />
      </div>
    );
  }
}

const Example = () => {
  const componentRef = useRef();

  return (
    <div className="contenedor">
      <ComponentToPrint ref={componentRef} />
      <ReactToPrint
        trigger={() => <button className="print-btn">Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default Example