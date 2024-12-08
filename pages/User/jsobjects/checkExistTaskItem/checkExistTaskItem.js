export default {
	tbTaskprimaryColumnscustomColumn1onClick: async () => {
		try {
			// Lấy tất cả dữ liệu volunteer profiles
			const result = await getAllVolunteerprofiles.run();
			console.log(result); // Logs the result of the query to the console

			// Kiểm tra nếu `user_id` đã tồn tại trong `result`
			const volunteerExists = result.some(row => row.user_id === appsmith.store.user_profile.id);

			// Lấy ID từ hàng được chọn trong bảng `tbTask`
			const selectedTaskId = tbTask.selectedRow.id;
			// Dữ liệu trong bảng `tbYourTask`
			const yourTasks = tbYourTask.tableData;

			// Kiểm tra nếu `selectedTaskId` đã tồn tại trong `tbYourTask`
			const taskExists = yourTasks.some(row => row.task_id === selectedTaskId);

			// Kiểm tra điều kiện: nếu chưa nhận nhiệm vụ và người dùng là tình nguyện viên
			if (volunteerExists && !taskExists) {
				insertTaskForVolunteer.run();
				showAlert("Bạn đã nhận nhiệm vụ thành công", "success");
			} else if (taskExists) {
				showAlert("Bạn đã nhận nhiệm vụ này rồi", "warning");
			} else {
				showAlert("Bạn cần là tình nguyện viên để nhận nhiệm vụ.", "error");
			}
		} catch (error) {
			console.error('Error fetching volunteer profiles:', error);
			showAlert("Có lỗi xảy ra khi lấy thông tin tình nguyện viên.", "error");
		}
	}
};
