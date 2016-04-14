load("galen-bootstrap/galen-bootstrap.js");

var ENVIRONMENT = {
    url: "http://www.fashionchick.co.uk/c/clothing/1/";
};

$galen.settings.website = "http://www.fashionchick.co.uk";
$galen.registerDevice("mobile", inLocalBrowser("mobile emulation", "450x800", ["mobile"]));
$galen.registerDevice("tablet", inLocalBrowser("tablet emulation", "600x800", ["tablet"]));
$galen.registerDevice("desktop", inLocalBrowser("desktop emulation", "1400x1100", ["desktop"]));

var url = 
(function (export) {
    export.ENVIRONMENT = ENVIRONMENT;
})(this);

//var properties = loadProperties("config/prod.properties");
