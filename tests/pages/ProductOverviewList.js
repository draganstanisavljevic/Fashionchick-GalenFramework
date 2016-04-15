this.ProductOverview = function (driver) {
    GalenPages.extendPage(this, driver, "Product Overview", {
		
		buyAtLinkText:		"span.text",
		price:				"span.current-price",
        quickViewButton:    "a.quickview", 

        hoverProduct: function () {
          this.quickViewButton.hover();
        },
	
        clickQuickViewButton: function () {
          this.quickViewButton.click();
        }	

    });
};

this.ProductsOverwiePage = $page("Product Overview", {
  products: $list(ProductOverview, "article.product-box.gi")
});


