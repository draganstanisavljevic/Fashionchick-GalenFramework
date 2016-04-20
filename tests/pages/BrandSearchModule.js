this.Brands = $page("Brands", {
	//checkbox:	"?????",
	label:		"label.filter__option",
	//amount:		"span.filter-checkbox__amount",
	
    hoverBrand: function () {
         this.label.hover();
    },	

	clickOnBrand: function () {
        this.label.click();
    }
	
});

this.NumberOfProducts = $page("Number of Products", {
	
    hoverBrand: function () {
         this.hover();
    },	

	clickOnBrand: function () {
        this.click();
    }
	
});

this.BrandSearchModule = $page("Brand search module", {
	searchField:		"//*[@id='filterForm']/div[8]/div/span/input",
	brandList: 			$list(Brands, "#filter-brand li")
});