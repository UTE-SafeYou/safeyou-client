export default {
	refreshVolunteerChange () {
		if (refreshVolunteer.isSwitchedOn) {
			setInterval(() => getAllTasks.run(), 1000, "autorefresh");
			clearInterval("autorefresh");
		}
	}
}