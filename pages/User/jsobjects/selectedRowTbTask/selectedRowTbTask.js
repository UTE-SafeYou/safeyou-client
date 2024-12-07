export default {
	tbTaskonRowSelected () {
		let data = appsmith.store(tbTask.selectedRow.id);
		console.log(data);
	}
}