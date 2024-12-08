export default {
	async getCategory() {
		await get_categories.run();
		let data = get_categories.data;
		// let options = data.map(item => ({
		// name: item.name,
		// key: item.slug
		// }));
		storeValue("postCategories", data);
	},
	async getPostService() {
		get_articles.run();
	}
}