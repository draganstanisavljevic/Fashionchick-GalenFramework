this.Product = $page("Product", {
	price:				"span.current-price",
	buyAtLinkText:		"a",
	//quickViewButton:    "a.quickview",
	quickViewButton:    "//*[@id='product-overview']/article[1]/div[1]/a[2]", // xpath locator
	
    hoverProduct: function () {
         this.price.click();
    },	

	clickByAtButton: function () {
        this.buyAtLinkText.click();
    },
	
	hoverByAtButton: function () {
        this.buyAtLinkText.hover();
    },
	
    clickQuickViewButton: function () {
       this.quickViewButton.click();
    },	

    clickQuickViewButton: function () {
       this.quickViewButton.click();
    }	
	
});

this.ProductsOverviwPage = $page("My notes page", {
  productList: $list(Product, "article.product-box.gi")
});