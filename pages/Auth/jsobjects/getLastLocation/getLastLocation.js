export default {
	loginButtononClick: async () => {
		try {
			const result = await getUserProfile.run();
			//console.log(result);
			const profileId = result[0].profile_id;
			const lastLocation = result[0].last_location;
			//console.log(profileId);
			console.log(lastLocation);
			if (lastLocation === null) {
			} else {
				console.log(`Vị trí hiện tại là: ${lastLocation}`);
			}

			patchLastLocation.run();
		} catch (error) {
			console.error('Error fetching user profile:', error);
		}
	}
}
