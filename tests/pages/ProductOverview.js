this.ProductOverview = function (driver) {
    GalenPages.extendPage(this, driver, "Product Overview", {

		productContainer:	"//*[@id='product-overview']/article[1]",
		buyAtLinkText:		"//*[@id='product-overview']/article[1]/div[2]/a/span[1]",
		price:				"//*[@id='product-overview']/article[1]/p[1]/span",
        quickViewButton:    "//*[@id='product-overview']/article[1]/div[1]/a[2]", // xpath locator

        hoverProduct: function () {
          this.quickViewButton.hover();
        },
	
        clickQuickViewButton: function () {
          this.quickViewButton.click();
        }	

    });
};