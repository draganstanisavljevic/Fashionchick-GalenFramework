

this.QuickViewWindow = function (driver) {
    GalenPages.extendPage(this, driver, "Quick View Window", {

		popupWindow: "xpath: html/body/div[7]/div",
        //closeButton:    "xpath: html/body/div[7]/div/div/div[1]/button", // xpath locator
		closeButton: "button.close", // css locator
	
        clickCloseButton: function () {
          this.closeButton.click();
        },
		
    });
};
