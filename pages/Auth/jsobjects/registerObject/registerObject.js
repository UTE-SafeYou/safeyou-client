export default {

	async signUp () { 
		let user_profile = null;
		try {
			user_profile = await register_user.run();
		} catch (e) {
			showAlert("Đã có lỗi xảy ra khi đăng ký", "error");
			return;
		}

		if(user_profile == null) {
			showAlert("Lỗi đăng ký, vui lòng thử lại sau. ", "error")
			return;
		}

		resetWidget("registerForm", true);
		showAlert("Đăng ký thành công", "success");
		storeValue("tab", "Đăng nhập")

	}

}