import React from 'react';
import { Table } from 'react-bootstrap';
import firebase from '../firebase';

const ManageCode = () => {
	const [guia, guardarGuia] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection('guia').get();
			guardarGuia(data.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<div className="container">
			<h3>Data base registers</h3>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Product</th>
						<th>Client code</th>
						<th>Rabee code</th>
						<th>Edit register</th>
						<th>Delete register</th>
					</tr>
				</thead>
				<tbody>
					{guia.map((g, i) => (
						<tr key={i}>
							<td>{i + 1}</td>
							<td>{g.product}</td>
							<td>{g.clientCode}</td>
							<td>{g.raaBeeCode}</td>
							<td>Edit</td>
							<td>Delete</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ManageCode;
