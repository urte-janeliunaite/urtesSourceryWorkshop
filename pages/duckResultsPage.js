const generatedPasswordSelector = ".c-base__title";
exports.DuckResultsPage = class DuckResultsPage {
    constructor(page) {
        this.page = page;
    }
    async getGeneratedPassword() {
    await this.page.textContent(generatedPasswordSelector);
    }
}