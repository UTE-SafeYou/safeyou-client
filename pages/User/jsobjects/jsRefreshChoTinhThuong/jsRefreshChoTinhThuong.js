export default {
	refreshChoTinhThuongonChange() {
		if (refreshChoTinhThuong.isSwitchedOn) {
			// Refresh getGiverDonation
			this.startAutoRefresh("giverRefresh", getGiverDonation.run);
			// Refresh getReceiverDonation
			this.startAutoRefresh("receiverRefresh", getReceiverDonation.run);
		} else {
			// Clear both intervals
			this.stopAutoRefresh("giverRefresh");
			this.stopAutoRefresh("receiverRefresh");
		}
	},

	// Hàm khởi tạo auto refresh
	startAutoRefresh(intervalName, refreshFunction) {
		if (!this[intervalName]) {
			this[intervalName] = setInterval(refreshFunction, 10 * 60 * 1000);
		}
	},

	// Hàm dừng auto refresh
	stopAutoRefresh(intervalName) {
		if (this[intervalName]) {
			clearInterval(this[intervalName]);
			this[intervalName] = null;
		}
	}
};
