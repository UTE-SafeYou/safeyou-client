export default {
	refreshVolunteerChange () {
		if (refreshVolunteer.isSwitchedOn) {
			setInterval(() => getTasks.run(), 5000, "autorefresh");
			clearInterval("autorefresh");
		}
	}
}