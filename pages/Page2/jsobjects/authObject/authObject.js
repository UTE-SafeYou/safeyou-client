export default {
	loginButtononClick () {
		let response = login_user?.data;

		if(response) {
			let {data:{session}, user_profile} = response;

			// Store access_token to appsmith, storage
			let access_token = session.access_token;
			let user = session.user;

			storeValue("access_token", access_token, true);
			storeValue("user_profile", user, true);

		}
	}
}