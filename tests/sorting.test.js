load("init.js");
load("pages/ProductsOverview.js");
load("pages/SortButtonsPanel.js");
load("pages/categoriesHeaderMenu.js");

var url = System.getProperty("url");
var browser = System.getProperty("browser");
var resolution = System.getProperty("resolution");

var driver;

beforeTest(function (testInfo) {
	driver = createDriver(url, resolution, browser);
});

afterTest(function (testInfo) {
    driver.close();
});


test("Test sort by highest price", function () {
	//Environments: All environments
	//Steps: Open any category page and click button 'Sort by  'By at ...' link
	//Expected: Correct web shop page is opened
	
	//var productOverview = new ProductsOverview(driver);
	var sortButtonsPanel = new SortButtonsPanel(driver);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);
	categoriesHeaderMenu.clickClothingButton();
	sortButtonsPanel.clickHighestPriceButton();
	
	GalenPages.sleep(6000);
	
	
	var productsOverviewList = new ProductsOverviwPage(driver);
	productsOverviewList.productList.get(0).hoverProduct();
	productsOverviewList.productList.get(0).clickByAtButton();
		
	
});

