export default {
	startAutoRefresh() {
		if (refreshCartTT.isSwitchedOn) {
			setInterval(() => getYourTask.run(), 5000, "autorefresh");
		} else {
			clearInterval("autorefresh");
		}
	}
}