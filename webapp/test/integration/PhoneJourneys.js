jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"crm/mkt/cpg/test/integration/NavigationJourneyPhone",
		"crm/mkt/cpg/test/integration/NotFoundJourneyPhone",
		"crm/mkt/cpg/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});