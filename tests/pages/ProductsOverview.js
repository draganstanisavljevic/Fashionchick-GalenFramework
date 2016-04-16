this.Product = $page("Product", {
	price:				"span.current-price",
	buyAtLinkText:		"a",
	quickViewButton:    "a.quickview",
	
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
    }
	
});

this.ProductsOverviwPage = $page("Products page", {
  productList: $list(Product, "article.product-box.gi")
});