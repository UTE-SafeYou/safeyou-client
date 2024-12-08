export default {
	btn_DKTNonClick: async () => {
		try {
			const result = await getAllVolunteerprofiles.run();
			console.log(result); // Logs the result of the query to the console

			// Kiểm tra nếu `user_id` đã tồn tại trong `result`
			const volunteerExists = result.some(row => row.user_id === appsmith.store.user_profile.id);

			if (volunteerExists) {
				// Nếu đã tồn tại, bạn có thể thực hiện hành động cần thiết
				showAlert("Bạn đã là tình nguyện viên rồi!");
			} else {
				// Nếu chưa tồn tại, tiếp tục hành động khác
				showAlert("Đăng ký thành công.");
				register_tobe_volunteer.run();
			}
		} catch (error) {
			console.error('Error fetching user profile:', error);
		}
	}
}
