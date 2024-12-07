export default {
	startAutoRefresh() {
		if (refresh.isSwitchedOn) {
			setInterval(() => getYourTask.run(), 5000, "autorefresh");
		} else {
			clearInterval("autorefresh");
		}
	}
}