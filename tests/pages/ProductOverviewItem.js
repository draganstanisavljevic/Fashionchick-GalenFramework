this.Product = $page("Note", {
	price:				"span.current-price",
	buyAtLinkText:		"a",
	quickViewButton:    "a.quickview",
	
    hoverProduct: function () {
         this.quickViewButton.hover();
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

this.ProductsOverviwPage = $page("My notes page", {
  productList: $list(Product, "article.product-box.gi")
});