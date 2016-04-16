this.SortButtonsPanel = function (driver) {
    GalenPages.extendPage(this, driver, "Sort Buttons Panel", {

        panelTitle:					"//*[@id='filter-sort-buttons']/span", // xpath locator
        popularityButton:			"//*[@id='filter-sort-buttons']/label[1]", // xpath locator
        newButton:					"//*[@id='filter-sort-buttons']/label[1]", // xpath locator
		lowestPriceButton:			"//*[@id='filter-sort-buttons']/label[3]", // xpath locator
		highestPriceButton:			"//*[@id='filter-sort-buttons']/label[4]", // xpath locator
		
        hoverPopularityButton: function () {
          this.popularityButton.hover();
        },
		
        hoverNewButton: function () {
          this.newButton.hover();
        },
		
        hoverLowestPriceButton: function () {
          this.lowestPriceButton.hover();
        },

        hoverHighestPriceButton: function () {
          this.highestPriceButton.hover();
        },

        clickPopularityButton: function () {
          this.popularityButton.click();
        },

        clickNewButton: function () {
          this.newButton.click();
        },	

        clickLowestPriceButton: function () {
          this.lowestPriceButton.click();
        },			
	
        clickHighestPriceButton: function () {
          this.highestPriceButton.click();
        }		

    });
};