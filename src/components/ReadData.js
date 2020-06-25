import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';
import ReactToPrint from 'react-to-print';
import firebase from '../firebase';

const ReadData = () => {

	const [cargando, isCargando] = React.useState(true);

	const [guia, guardarGuia] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection('guia').get();
			guardarGuia(data.docs.map((doc) => doc.data()));
		};
		fetchData();
        isCargando(false)
		console.log('guia', guia);
	}, []);

	class ComponentToPrint extends React.Component {
		render() {
			return (
				<div className="info">
					<Barcode value={varCodigo} />
				</div>
			);
		}
	}

	let [codigo, generaCodigo] = useState({});
	let [varCodigo, setVarCodigo] = useState(null);
	let [resultado, setResultado] = useState(false);

	function readJson(valor) {
        console.log('readJson')

		// let intValor = parseInt(valor);
        console.log(valor, typeof valor)

		guia.map((d) => {
			if (d.clientCode === valor) {
				setResultado(true);
				setVarCodigo(d.product);
				generaCodigo(d.product);
				return console.log('se ha encontrado coincidencia');
			}
		});
	}

	function resetPrint() {
		setResultado(null);
	}

	const componentRef = useRef();

	return (
		<div className="search">
			<ul>
                { cargando ? 'please refresh the page because the db is not loaded ' : null}
				{  guia.map((g) => (
					<li key={g.product}>
						Product: {g.product} <span style={{ fontWeight: 'bold' }}>ClientCode:</span> <span style={{ color: 'red'}}>{g.clientCode}</span> RaaBeeCode: {g.raabeeCode}
					</li>
				)) }
			</ul>

			<form>
				<input name="firstName" onChange={(e) => generaCodigo(e.target.value)} />
				<span className="print-btn" onClick={() => readJson(codigo)}>
					buscar código
				</span>
			</form>

			<div className="contenedor">
				{resultado !== false ? <ComponentToPrint ref={componentRef} /> : null}
				{resultado !== false ? (
					<ReactToPrint
						trigger={() => (
							<button className="print-btn" onClick={resetPrint}>
								Print this out!
							</button>
						)}
						content={() => componentRef.current}
					/>
				) : null}
			</div>
		</div>
	);
};

export default ReadData;
