load("init.js");
load("pages/ProductsOverview.js");
load("pages/categoriesHeaderMenu.js");
load("pages/BrandSearchModule.js");

var url = System.getProperty("url");
var browser = System.getProperty("browser");
var resolution = System.getProperty("resolution");

var driver;
var expectedUrlStartsWith = "http://www.boohoo.com";
var brandToSearch = "Boohoo.com";

beforeTest(function (testInfo) {
	driver = createDriver(url, resolution, browser);
});

afterTest(function (testInfo) {
    driver.close();
});


test("Test quick out", function () {
	//Environments: All environments
	//Steps: Open any category page and click on 'By at ...' link
	//Expected: Correct web shop page is opened
	

	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);
	categoriesHeaderMenu.clickClothingButton();
	GalenPages.sleep(2000);	
	var brandSearchModule = new BrandSearchModule(driver);
	
	for(i=1;i<brandSearchModule.brandList.size() - 1;i++){
		if(brandSearchModule.brandList.get(i).label.getText().equals(brandToSearch)){
			
			//element is not clickable because it is not visible
			//scroll down window in order to click on element
			driver.executeScript("window.scroll(0, 900);");			
			GalenPages.sleep(2000);
			brandSearchModule.brandList.get(i).clickOnBrand();
			break;
		}
	}

	GalenPages.sleep(5000);	
	
	var productsOverviewList = new ProductsOverviwPage(driver);
	productsOverviewList.productList.get(0).clickByAtButton();

	// Switch to the new window opened
	var handleNewWindow = driver.getWindowHandles().toArray();
	var popUpWindow = handleNewWindow[1];	
	driver.switchTo().window(popUpWindow);
	
	GalenPages.sleep(5000);
	
	var correctUrl = driver.getCurrentUrl().startsWith(expectedUrlStartsWith);
	
	if(!correctUrl){
		//attach screenshot to the report
		this.report.error("User is not navigated to the expected page").withAttachment("Screenshot", takeScreenshot(driver));
		throw ("User is navigated to the wrong page. \nExpected URL starts with " + expectedUrlStartsWith + "\nFound " + driver.getCurrentUrl() + "\nSee attached screnshot\n");
	}

});

