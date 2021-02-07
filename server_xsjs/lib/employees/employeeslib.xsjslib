function getAllEmployees() {
	let list = [];
	let oConnection = $.db.getConnection();
	let oStatement = oConnection.prepareStatement(`SELECT IDEMPLOYEE from "employees"`);

	oStatement.execute();

	let oResultSet = oStatement.getResultSet();

	while (oResultSet.next()) {
		let masterObj = {
			idemployee: oResultSet.getString(1),
		};

		list.push(masterObj);
	}

	oResultSet.close();
	oStatement.close();
	oConnection.close();

	return list;
}
