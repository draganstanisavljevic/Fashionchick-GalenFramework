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
	//Steps: Open any category page and click button 'Sort by highest price'
	//Expected: all products are sorted by highest price
	
	//var productOverview = new ProductsOverview(driver);
	var sortButtonsPanel = new SortButtonsPanel(driver);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);
	categoriesHeaderMenu.clickClothingButton();
	sortButtonsPanel.clickHighestPriceButton();
	
	GalenPages.sleep(6000);	
	
	var productsOverviewList = new ProductsOverviwPage(driver);
	var price;
	var pricesConvertedToFloat = [];
	for (var i = 0; i < productsOverviewList.productList.size(); i++) {

		price = productsOverviewList.productList.get(i).price.getText().replace(",",""); 
		//replace function produces exception "(function,java.lang.String) is ambiguous;"
		//I avoided it by constructing a JavaScript string
		price = price + "";
		//remove all except digits and '.'
		price = price.replace(/[^0-9\\.]+/g, "");
		console.log("price=" + price);
		pricesConvertedToFloat.push(parseFloat(price));
	}

	var previousPrice = pricesConvertedToFloat[0];
	for (var i = 0; i < productsOverviewList.productList.size(); i++) {
		console.log("pricesConvertedToFloat["+i+"]=" + pricesConvertedToFloat[i]);
		if(pricesConvertedToFloat[i] > previousPrice){
			//attach screenshot to the report
			this.report.error("Prices are not sorted").withAttachment("Screenshot", takeScreenshot(driver));
			throw "\nArray is not sorted. Price " + pricesConvertedToFloat + " is found before " + previousPrice + "\n" ;
		}
		previousPrice = pricesConvertedToFloat[i];
	}
	
	if (pricesConvertedToFloat == previousPrice ){
		//attach screenshot to the report
		this.report.error("It is not possible to validate sorting").withAttachment("Screenshot", takeScreenshot(driver));
		throw "\nAll products on this page have same price. It is not possible to validate that sorting works properly. You should verify manualy this test case." ;
	}
	
});

test("Test sort by lowest price", function () {
	//Environments: All environments
	//Steps: Open any category page and click button 'Sort by lowest price'
	//Expected: all products are sorted by lowest price
	
	var sortButtonsPanel = new SortButtonsPanel(driver);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);
	categoriesHeaderMenu.clickClothingButton();
	sortButtonsPanel.clickLowestPriceButton();
	
	GalenPages.sleep(6000);	
	
	var productsOverviewList = new ProductsOverviwPage(driver);
	var price;
	var pricesConvertedToFloat = [];
	for (var i = 0; i < productsOverviewList.productList.size(); i++) {

		price = productsOverviewList.productList.get(i).price.getText().replace(",",""); 
		//replace function produces exception "(function,java.lang.String) is ambiguous;"
		//I avoided it by constructing a JavaScript string
		price = price + "";
		//remove all except digits and '.'
		price = price.replace(/[^0-9\\.]+/g, "");
		console.log("price=" + price);
		pricesConvertedToFloat.push(parseFloat(price));
	}

	var previousPrice = pricesConvertedToFloat[0];
	for (var i = 0; i < productsOverviewList.productList.size(); i++) {
		console.log("pricesConvertedToFloat["+i+"]=" + pricesConvertedToFloat[i]);
		if(pricesConvertedToFloat[i] < previousPrice){
			//attach screenshot to the report
			this.report.error("Prices are not sorted").withAttachment("Screenshot", takeScreenshot(driver));
			throw "\nArray is not sorted. Price " + pricesConvertedToFloat[i] + " is found before " + previousPrice + "\n" ;
		}
		previousPrice = pricesConvertedToFloat[i];
	}
	
	if (pricesConvertedToFloat == previousPrice ){
		//attach screenshot to the report
		this.report.error("It is not possible to validate sorting").withAttachment("Screenshot", takeScreenshot(driver));
		throw "\nAll products on this page have same price. It is not possible to validate that sorting works properly. You should verify manualy this test case." ;
	}
	
});

