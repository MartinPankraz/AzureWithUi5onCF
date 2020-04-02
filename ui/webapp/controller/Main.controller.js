const config = require('./config.js');
let appInsights = require('applicationinsights');
appInsights.setup(config.appInsights)
.setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(false)
    .start();
//Names for Azure AppInsights application map
appInsights.defaultClient.addTelemetryProcessor(envelope => {
    envelope.tags["ai.cloud.role"] = "myappinaws";
    envelope.tags["ai.cloud.roleInstance"] = "myawsapp-1"
});

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sapcp.azure.cf.ui.controller.Main", {
		onInit: function () {

		},
		
		openGitHub: function(oEvent){
			window.open("https://dev.azure.com/mapankra/SAPUI5onAzure");
		}
	});
});