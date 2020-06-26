import React from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "../firebase";

const AddCode = () => {
  const [guia, setGuia] = React.useState({
    product: "",
    clientCode: "",
    raaBeeCode: "",
    description: "",
  });

  const onUpdate = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("guia").doc().set(guia);

    // reset fields
    setGuia({ product: "", clientCode: "", raaBeeCode: "", description: "" });
  };

  return (
    <div className="ingreso">
      <div className="db">
        <h3>Write guide document </h3>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Product</Form.Label>
            <Form.Control
              value={guia.product}
              onChange={(e) => setGuia({ ...guia, product: e.target.value })}
              type="text"
              placeholder="Enter product"
            />

            <Form.Label>Client Number</Form.Label>
            <Form.Control
              value={guia.clientCode}
              onChange={(e) => setGuia({ ...guia, clientCode: e.target.value })}
              type="number"
              placeholder="Enter External Code"
            />

            <Form.Label>RaaBee Number</Form.Label>
            <Form.Control
              value={guia.raaBeeCode}
              onChange={(e) => setGuia({ ...guia, raaBeeCode: e.target.value })}
              type="number"
              placeholder="Enter RaaBee Code"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={guia.description}
              onChange={(e) =>
                setGuia({ ...guia, description: e.target.value })
              }
              type="text"
              placeholder="description"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onUpdate}>
            Save data
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddCode;
