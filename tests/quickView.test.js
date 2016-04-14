load("init.js");
load("pages/ProductOverview.js");
load("pages/QuickViewWindow.js");
load("pages/categoriesHeaderMenu.js");

var url =System.getProperty("url");
var urlSuffixAfterCancalingPopupWindow = "c/clothing/1/#_";
var driver;

beforeTest(function (testInfo) {
	driver = createDriver(url, "1400x1100", "firefox");
});

afterTest(function (testInfo) {
    driver.close();
});

test("Close quick-view pop up", function () {
	//Environments: All environments
	//Steps: Open and Close Quick View Window
	//Expected: After closing, previous page is loaded
	
	var productOverview = new ProductOverview(driver);
	var quickViewWindow = new QuickViewWindow(driver);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);
	categoriesHeaderMenu.clickClothingButton();

	productOverview.hoverProduct();	
	//store By At text of first product, to compare with value after closing Quick View
	var buyAtBeforeOpeningQuickView = productOverview.buyAtLinkText.getText();
	
	productOverview.clickQuickViewButton();	
	quickViewWindow.waitForIt();
	quickViewWindow.clickCloseButton();

	GalenPages.sleep(3000);
		
	var popUpExist = "true";
	try{
		quickViewWindow.popupWindow.isDisplayed();
	}
	catch(err){
		popUpExist = "false";
	}
	finally{
		if(popUpExist != "false"){
			this.report.error("Quick View Window is not closed").withAttachment("Screenshot", takeScreenshot(driver));
			throw("Quick View Window is not closed");
		}
	}
	
	var expectedUrl = url + urlSuffixAfterCancalingPopupWindow;
	if(!driver.getCurrentUrl().equals(expectedUrl)){
			this.report.error("Wrong Page is loaded after closing Quick View Window").withAttachment("Screenshot", takeScreenshot(driver));
			throw("\nWrong Page is loaded after closing Quick View Window. \nExpected URL = " + expectedUrl + "\nCurrent URL = " + driver.getCurrentUrl()+"\n");
	}
	
	productOverview.hoverProduct();
	GalenPages.sleep(1000);

	var buyAtAfterClosingQuickView = productOverview.buyAtLinkText.getText();
	if(!buyAtAfterClosingQuickView.equals(buyAtBeforeOpeningQuickView)){
		throw("\nWrong Bay At Text found after closing Quick View Window. \nExpected  = " + buyAtBeforeOpeningQuickView + "\nFound = " + buyAtAfterClosingQuickView +"\n");
	}
			
});

