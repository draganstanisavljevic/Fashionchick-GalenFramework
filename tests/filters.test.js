load("pages/filterButtonPanel.js");

test("Filer button panel test", function () {
	var driver = createDriver("http://www.fashionchick.co.uk/c/clothing/1/",
                            "1400x1100",
                            "firefox");
		
	logged("Checking filter button panel when buttons are not hovered", function () {
        checkLayout(driver, "specs/components/filters.gspec", ["all", "desktop","usual"]);
    })
	
	var filterButtonsPanel = new FilterButtonsPanel(driver);
	filterButtonsPanel.hoverNewButton();
	
	logged("Checking filter button panel when New button is hovered", function () {
        checkLayout(driver, "specs/components/filters.gspec", ["all", "desktop","hovered"]);
    })
	
	driver.close();
});