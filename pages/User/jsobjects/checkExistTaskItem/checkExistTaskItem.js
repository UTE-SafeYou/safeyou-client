export default {
	tbTaskprimaryColumnscustomColumn1onClick() {
		const selectedTaskId = tbTask.selectedRow.id; // Lấy ID từ hàng được chọn trong bảng `tbTask`
		const yourTasks = tbYourTask.tableData; // Dữ liệu trong bảng `tbYourTask`

		// Kiểm tra nếu `selectedTaskId` đã tồn tại trong `tbYourTask`
		const taskExists = yourTasks.some(row => row.task_id === selectedTaskId);
		if (taskExists) {
			showAlert("Bạn đã nhận nhiệm vụ này rồi", "warning");
		} else {
			insertTaskForVolunteer.run();
			showAlert("Bạn đã nhận nhiệm vụ thành công", "success");
		}
	}
};
