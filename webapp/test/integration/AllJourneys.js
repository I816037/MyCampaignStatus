jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Campaigns in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"crm/mkt/cpg/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"crm/mkt/cpg/test/integration/pages/App",
	"crm/mkt/cpg/test/integration/pages/Browser",
	"crm/mkt/cpg/test/integration/pages/Master",
	"crm/mkt/cpg/test/integration/pages/Detail",
	"crm/mkt/cpg/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "crm.mkt.cpg.view."
	});

	sap.ui.require([
		"crm/mkt/cpg/test/integration/MasterJourney",
		"crm/mkt/cpg/test/integration/NavigationJourney",
		"crm/mkt/cpg/test/integration/NotFoundJourney",
		"crm/mkt/cpg/test/integration/BusyJourney",
		"crm/mkt/cpg/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});