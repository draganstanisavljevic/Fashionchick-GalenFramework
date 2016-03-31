this.FilterButtonsPanel = function (driver) {
  GalenPages.extendPage(this, driver, "Filter Buttons Panel", {

    popularityBut:  "//*[@id='filter-sort-buttons']/label[1]", // xpath locator
	newBut:			"//*[@id='filter-sort-buttons']/label[2]",
	
	hoverNewButton: function () {
      this.newBut.hover();
    },
	
	clickNewButton: function () {
      this.newBut.click();
    }	

  });
};