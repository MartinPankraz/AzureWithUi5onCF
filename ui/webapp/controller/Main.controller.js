sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sapcp.azure.cf.ui.controller.Main", {
		onInit: function () {
			var that = this;
			
			var iKey = jQuery.sap.getUriParameters().get("iKey");
			var xApiKey = jQuery.sap.getUriParameters().get("XApiKey");
			var azureFuncKey = jQuery.sap.getUriParameters().get("AzureFuncKey");
			if(iKey && xApiKey && azureFuncKey){
				this.iKey = iKey;
				this.xApiKey = xApiKey
				this.azureFuncKey = azureFuncKey;
			}else {
				//must be Azure then
				console.log("not all keys provided!");
			}
			
			this.optimizelyClientInstance = optimizelySdk.createInstance({
				datafile: window.optimizelyDatafile,
			});
			var enabled = this.optimizelyClientInstance.isFeatureEnabled('phone', 'mapankra-msft-20210325');
			if(enabled){
				var phone_button = this.getView().byId("myPhone");
				phone_button.setEnabled(enabled);
			}else{
				phone_button.setEnabled(false);
			}
			
			/*var sdkInstance="appInsightsSDK";window[sdkInstance]="appInsights";var aiName=window[sdkInstance],aisdk=window[aiName]||function(e){function n(e){t[e]=function(){var n=arguments;t.queue.push(function(){t[e].apply(t,n)})}}var t={config:e};t.initialize=!0;var i=document,a=window;setTimeout(function(){var n=i.createElement("script");n.src=e.url||"https://az416426.vo.msecnd.net/scripts/b/ai.2.min.js",i.getElementsByTagName("script")[0].parentNode.appendChild(n)});try{t.cookie=i.cookie}catch(e){}t.queue=[],t.version=2;for(var r=["Event","PageView","Exception","Trace","DependencyData","Metric","PageViewPerformance"];r.length;)n("track"+r.pop());n("startTrackPage"),n("stopTrackPage");var s="Track"+r[0];if(n("start"+s),n("stop"+s),n("addTelemetryInitializer"),n("setAuthenticatedUserContext"),n("clearAuthenticatedUserContext"),n("flush"),t.SeverityLevel={Verbose:0,Information:1,Warning:2,Error:3,Critical:4},!(!0===e.disableExceptionTracking||e.extensionConfig&&e.extensionConfig.ApplicationInsightsAnalytics&&!0===e.extensionConfig.ApplicationInsightsAnalytics.disableExceptionTracking)){n("_"+(r="onerror"));var o=a[r];a[r]=function(e,n,i,a,s){var c=o&&o(e,n,i,a,s);return!0!==c&&t["_"+r]({message:e,url:n,lineNumber:i,columnNumber:a,error:s}),c},e.autoExceptionInstrumented=!0}return t}(
				{
				  instrumentationKey:this.iKey,
				  enableCorsCorrelation:true,
				  enableRequestHeaderTracking:true,
				  distributedTracingMode:1 //DistributedTracingModes.W3C
				  //distributedTracingMode: DistributedTracingModes.W3C
				}
			);window[aiName]=aisdk,aisdk.queue&&0===aisdk.queue.length&&aisdk.trackPageView({});*/
			
			/*$.ajaxSetup({
			    headers: {
			    	"x-api-key": that.xApiKey
			    	}
			});*/

		},
		
		openGitHub: function(oEvent){
			var payload = {
			  "code": this.azureFuncKey,
			  "name": "AWS"
			};
			//window.open("https://dev.azure.com/mapankra/SAPUI5onAzure");

			$.ajax({
				type : 'POST',
				url: "/aws",
				//headers: { "header1": "API Gateway and AWS Lambda", "Cookie": "null" },
				contentType: "application/json",
    			dataType: "json",
				data: JSON.stringify(payload),
		        success: function(data){
		        	console.log("success "+JSON.stringify(data));
		        },
		        error:function(data){
		        	console.log("error "+JSON.stringify(data));
		        }
			});
			/*$.ajax({
				type : 'GET',
				url: "/nginx",
		        success: function(data){
		        	console.log("success "+JSON.stringify(data));
		        },
		        error:function(data){
		        	console.log("error "+JSON.stringify(data));
		        }
			});*/
		},
		test: function(oEvent){
			window.open("https://dev.azure.com/mapankra/SAPUI5onAzure");
		}
	});
});