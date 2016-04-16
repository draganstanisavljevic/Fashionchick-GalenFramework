load("init.js");
load("pages/ProductsOverview.js");
//load("pages/QuickViewWindow.js");
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

/*

this.NoteComponent = $page("Note", {
	price:				"span.current-price",
});

this.MyNotesPage = $page("My notes page", {
  myNotes: $list(NoteComponent, "article.product-box.gi")
});

*/


test("Test quick out", function () {
	//Environments: All environments
	//Steps: Open any category page and click on 'By at ...' link
	//Expected: Correct web shop page is opened
	
	//var productOverview = new ProductsOverview(driver);
	//var quickViewWindow = new QuickViewWindow(driver);
	var categoriesHeaderMenu = new CategoriesHeaderMenu(driver);
	categoriesHeaderMenu.clickClothingButton();
	
	
	var productsOverviewList = new ProductsOverviwPage(driver);
	//productOverviewList.productList.get(0).hoverByAtButton();
	productsOverviewList.productList.get(0).clickByAtButton();
		
	
});

