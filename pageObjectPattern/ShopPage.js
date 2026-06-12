class ShopPage {

    constructor(page) {
        this.page = page;
        this.products = page.locator('div.card');
        this.productNames = page.locator('h4.card-title');
    }

    async getAllProductNames() {
        await this.products.first().waitFor();
        const productCount = await this.products.count();
        const productList = [];
        
        for (let i = 0; i < productCount; i++) {
            const productName = await this.productNames.nth(i).textContent();
            productList.push(productName.trim());
        }
        
        return productList;
    }

    async isProductPresent(productName) {
        const products = await this.getAllProductNames();
        return products.some(product => product.includes(productName));
    }

    async getProductCard(productName) {
        await this.products.first().waitFor();
        
        for (let i = 0; i < await this.products.count(); i++) {
            const name = await this.productNames.nth(i).textContent();
            if (name.trim().includes(productName)) {
                return this.products.nth(i);
            }
        }
        
        return null;
    }
}

module.exports = { ShopPage };
