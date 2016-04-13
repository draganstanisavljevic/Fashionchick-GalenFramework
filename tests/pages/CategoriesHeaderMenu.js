this.CategoriesHeaderMenu = function (driver) {
    GalenPages.extendPage(this, driver, "Categories Header Menu", {

        saleButton:				"//*[@id='header-navbar-container']/ul[1]/li[1]/a", // xpath locator
        clothingButton:			"//*[@id='header-navbar-container']/ul[1]/li[2]/a", // xpath locator
        shoesButton:			"//*[@id='header-navbar-container']/ul[1]/li[3]/a", // xpath locator
		bagsButton:				"//*[@id='header-navbar-container']/ul[1]/li[4]/a", // xpath locator
		accessoriesButton:		"//*[@id='header-navbar-container']/ul[1]/li[5]/a", // xpath locator
		jewelleryButton:		"//*[@id='header-navbar-container']/ul[1]/li[6]/a", // xpath locator
		swimWearButton:			"//*[@id='header-navbar-container']/ul[1]/li[7]/a", // xpath locator
		intimatesButton:		"//*[@id='header-navbar-container']/ul[1]/li[8]/a", // xpath locator
		designerFasionButton:	"//*[@id='header-navbar-container']/ul[1]/li[9]/a", // xpath locator
	
        hoverSaleButton: function () {
          this.saleButton.hover();
        },
		
        hoverClothingButton: function () {
          this.clothingButton.hover();
        },
		
        hoverShoesButton: function () {
          this.shoesButton.hover();
        },
		
        hoverBugsButton: function () {
          this.bagsButton.hover();
        },

        hoverAccessoriesButton: function () {
          this.accessoriesButton.hover();
        },
		
        hoverJewelleryButton: function () {
          this.jewelleryButton.hover();
        },	

        hoverSwimwearButton: function () {
          this.swimWearButton.hover();
        },
		
        hoverIntimateButton: function () {
          this.intimatesButton.hover();
        },	

        hoverDesignerFashionButton: function () {
          this.designerFasionButton.hover();
        },	

        clickSaleButton: function () {
          this.saleButton.click();
        },	

        clickClothingButton: function () {
          this.clothingButton.click();
        },

        clickShoesButton: function () {
          this.shoesButton.click();
        },	

        clickBugsButton: function () {
          this.bagsButton.click();
        },			
	
        clickAccessoriesButton: function () {
          this.accessoriesButton.click();
        },

        clickJewelleryButton: function () {
          this.jewelleryButton.click();
        },

        clickSwimwearButton: function () {
          this.swimWearButton.click();
        },

        clickIntimateButton: function () {
          this.intimatesButton.click();
        },

        clickDesignerFashionButton: function () {
          this.designerFasionButton.click();
        }			

    });
};