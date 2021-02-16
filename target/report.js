$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/background.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user has to launch chrome and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_has_to_launch_chrome_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login functionality with valid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has to enter the username and password",
  "rows": [
    {
      "cells": [
        "raja",
        "raja@123"
      ]
    },
    {
      "cells": [
        "dheena",
        "dheena@123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_has_to_enter_the_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to enter the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_able_to_enter_the_homepage()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: check the url\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.stepdefinition.LoginPageStep.user_able_to_enter_the_homepage(LoginPageStep.java:48)\r\n\tat ✽.user able to enter the homepage(src/test/resources/Feature/background.feature:11)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user has to launch chrome and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_has_to_launch_chrome_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the forget password function",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has click the forgetten password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_has_click_the_forgetten_password()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.150)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-B7PNGPR\u0027, ip: \u0027192.168.1.172\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_271\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49537}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 45835913bb334db38d63fe4c17ded26a\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Forgotten password?\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.LoginPageStep.user_has_click_the_forgetten_password(LoginPageStep.java:61)\r\n\tat ✽.user has click the forgetten password(src/test/resources/Feature/background.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to enter the mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_has_to_enter_the_mobile_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should move to identify this account another way page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_move_to_identify_this_account_another_way_page()"
});
formatter.result({
  "status": "skipped"
});
});