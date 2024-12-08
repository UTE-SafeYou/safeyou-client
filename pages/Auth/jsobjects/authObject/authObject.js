export default {
	async loginButtononClick () {
		let response = await login_user.run();

		console.log(response);

		if(response) {
			let {data:{session}} = response;

			// Store access_token to appsmith, storage
			let access_token = session.access_token;
			let user = session.user;

			storeValue("access_token", access_token, true);
			storeValue("user_profile", user, true);
			let lastUpdateTime = null; // Variable to track the last update time

			appsmith.geolocation.getCurrentPosition((location) => {
				const lat = location.coords.latitude || "";
				const lon = location.coords.longitude || "";
				const currentTime = new Date().getTime(); // Get current timestamp

				// Only update the location after a delay (1 minute) from the last update
				// if (!lastUpdateTime || currentTime - lastUpdateTime >= 60000) {
				// // Store new location if it has changed
				// if (lat !== storeValue("lat") || lon !== storeValue("lon")) {
				storeValue("lat", lat, true);
				storeValue("lon", lon, true);

				// Update last location after the delay
				patchLastLocation.run();

				// Update the last update time
				lastUpdateTime = currentTime;

				// console.log(`Updated Location: ${lat}, ${lon}`);
				showAlert(`New Location: ${lat}, ${lon}`);
				// appsmith.geolocation.clearWatch();
				// }
				// }
			});
			showAlert("Đăng nhập thành công", "success");
		}
	}
}