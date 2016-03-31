load("pages/filterButtonPanel.js");

test("Filter button panel test", function () {
	var driver = createDriver("http://www.fashionchick.co.uk/c/clothing/1/",
                            "1400x1100",
                            "firefox");
		
	logged("Checking filter button panel when popularity button is selected", function () {
        checkLayout(driver, "specs/components/filters.gspec", ["all", "desktop","popularitySelected"]);
    })
	
	var filterButtonsPanel = new FilterButtonsPanel(driver);
	filterButtonsPanel.hoverNewButton();
	
	logged("Checking filter button panel when popularity buttons is selected and new button is hovered", function () {
        checkLayout(driver, "specs/components/filters.gspec", ["all", "desktop","hoveredNewButton"]);
    })
	
	
	driver.close();
});