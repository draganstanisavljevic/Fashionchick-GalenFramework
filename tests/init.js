var env =System.getProperty("env");
//load(env + "-init.js");
var path = "config/" + env + "-init.js";
load(path);