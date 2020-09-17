$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/1Login.feature");
formatter.feature({
  "name": "Login functionality of LeafTaps application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "Enter the username as \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.step({
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demosalesmanager",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "demoCSR",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username as demosalesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.enter_the_username_as_demosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_the_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username as demoCSR",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.enter_the_username_as_demosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_the_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Test using invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username as demosalesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.enter_the_username_as_demosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password as crmsfa123",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_the_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should be displayed",
  "keyword": "But "
});
formatter.match({
  "location": "Login.errorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/2CreateLead.feature");
formatter.feature({
  "name": "Create Lead functionality in LeafTaps application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create lead by filling only mandatory fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@functional"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username as demosalesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.enter_the_username_as_demosalesmanager(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "Login.enter_the_password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click crmsfa link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLead.clickCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Leads page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLead.verifyLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});