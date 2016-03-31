load("pages/filterButtonPanel.js");

var url = "http://www.fashionchick.co.uk/c/clothing/1/";

test("Checking filter button panel when popularity button is selected", function () {
	/*	
		Steps:
		1.Open {$url}
			
		Test environment:
		Production		
		
		Expected result:
		Buttons are shown properly
		Height of buttons should be 21px, distance between buttons shopuld be 16 px, all buttons should be inside filter panel, 
		content panel should have height 55 px and with should be 100 % of content width 
		popularity button width should be 101 px, new button width should be 38 px, lowest price button should be 86 px, highest price button width should be 89 px, 
		color schema of popularity button should be 3 to 6 % #272727, 70 to 72 % white
		button order should be popularity, new, lowest, highest
		
		FAIL
		If any of expected values is not found
	*/
	
	var driver = createDriver(url, "1400x1100", "firefox");
		
    logged("Checking filter button panel when popularity button is selected", function () {
        checkLayout(driver, "specs/components/filters.gspec", ["popularitySelected"]);
    })
		
    driver.close();
});

test("Checking filter button panel when popularity buttons is selected and new button is hovered", function () {
	/*	
		Steps:
		1.Open {$url}
		2.Hover button New
					
		Test environment:
		Production				
		
		Expected result:
		Buttons are shown properly
		Height of buttons should be 21px, distance between buttons shopuld be 16 px, all buttons should be inside filter panel, 
		content panel should have height 55 px and with should be 100 % of content width 
		popularity button width should be 101 px, new button width should be 38 px, lowest price button should be 86 px, highest price button width should be 89 px, 
		button order should be popularity, new, lowest, highest
		colour of hovered text should be rgba(75, 181, 169, 1)
		
		FAIL
		If any of expected values is not found
	
		Test environment:
		Production
	*/		
	
	var driver = createDriver(url, "1400x1100", "firefox");
			
	var filterButtonsPanel = new FilterButtonsPanel(driver);
	filterButtonsPanel.hoverNewButton();
	
    logged("Checking filter button panel when popularity buttons is selected and new button is hovered", function () {
        checkLayout(driver, "specs/components/filters.gspec", ["hoveredNewButton"]);
    })
		
    driver.close();
});