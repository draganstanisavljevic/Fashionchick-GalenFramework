load("init.js");
load("pages/categoriesHeaderMenu.js");

var env =System.getProperty("env");
load(env + "-init.js");

var url = "http://www.fashionchick.co.uk/";
var browser = "firefox";

GalenPages.settings.cacheWebElements = false;
$galen.registerDevice("desktop", inLocalBrowser("desktop emulation", "1400x1100", ["desktop"]));


test("Checking layout of categories header menu", function () {

	
    var driver = createDriver(url, "1400x1100", browser);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);

	categoriesHeaderMenu.clickSaleButton();
		
    logged("Checking layout of categories header menu", function () {
        checkLayout(driver, "specs/components/headerCategoriesMenu.gspec", ["default"]);
		//checkImageDiff({driver: driver, storage: "image-diff/categories-header-menu-sale-button-selected-" + $galen.devices.desktop, spec: "specs/components/headerCategoriesMenu.gspec"});	
    })
		
    driver.close();
});

test("Checking categories menu when sale button is selected and clothing is hovered", function () {
	
	
    var driver = createDriver(url, "1400x1100", browser);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver).waitForIt();

	categoriesHeaderMenu.clickSaleButton();	
	categoriesHeaderMenu.waitForIt();
    categoriesHeaderMenu.hoverClothingButton();
	
	GalenPages.sleep(2000);
	
    logged("Checking categories menu when sale button is selected and clothing is hovered", function () {
        checkLayout(driver, "specs/components/headerCategoriesMenu.gspec", ["hoveredClothingButton"]);
		checkImageDiff({driver: driver, storage: "image-diff/categories-header-menu-clothing-button-hovered-" + $galen.devices.desktop +"-" + browser, spec: "specs/components/headerCategoriesMenu.gspec"});	
    })
		
    driver.close();
});