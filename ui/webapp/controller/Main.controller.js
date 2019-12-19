sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sapcp.azure.cf.ui.controller.Main", {
		onInit: function () {

		},
		
		openGitHub: function(oEvent){
			window.open("https://github.com/MartinPankraz/AzureWithUi5onCF");
		}
	});
});