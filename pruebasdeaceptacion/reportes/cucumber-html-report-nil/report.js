$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Pruebas de Logins",
  "description": "",
  "id": "pruebas-de-logins",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Logins",
  "description": "",
  "id": "pruebas-de-logins;logins",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y el sitio web del logins",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario ingrese el username \"\u003cusuarios\u003e\", y el password \"\u003cpasswords\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "El usuario presiones clic en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El usuario deberia ver el mensaje \"\u003cmensajes\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "pruebas-de-logins;logins;",
  "rows": [
    {
      "cells": [
        "usuarios",
        "passwords",
        "mensajes"
      ],
      "line": 10,
      "id": "pruebas-de-logins;logins;;1"
    },
    {
      "cells": [
        "f",
        "ff",
        "fff"
      ],
      "line": 11,
      "id": "pruebas-de-logins;logins;;2"
    },
    {
      "cells": [
        "g",
        "gg",
        "ggg"
      ],
      "line": 12,
      "id": "pruebas-de-logins;logins;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Logins",
  "description": "",
  "id": "pruebas-de-logins;logins;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y el sitio web del logins",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario ingrese el username \"f\", y el password \"ff\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "El usuario presiones clic en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El usuario deberia ver el mensaje \"fff\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinitions.abrimos_el_navegador_y_el_sitio_web_del_logins()"
});
formatter.result({
  "duration": 26376109593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "f",
      "offset": 32
    },
    {
      "val": "ff",
      "offset": 51
    }
  ],
  "location": "LoginStepsDefinitions.el_usuario_ingrese_el_username_y_el_password(String,String)"
});
formatter.result({
  "duration": 386396167,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with id \u003d\u003d email (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 369 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027user-PC\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d8, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:8196/, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 9e9683ff-b224-4d67-b29c-11d18768b995\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat com.edu.eam.pruebasdeaceptacion.steps.LoginStepsDefinitions.el_usuario_ingrese_el_username_y_el_password(LoginStepsDefinitions.java:32)\r\n\tat ✽.When El usuario ingrese el username \"f\", y el password \"ff\"(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsDefinitions.el_usuario_presiones_clic_en_el_boton_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "fff",
      "offset": 35
    }
  ],
  "location": "LoginStepsDefinitions.el_usuario_deberia_ver_el_mensaje(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Logins",
  "description": "",
  "id": "pruebas-de-logins;logins;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Abrimos el navegador y el sitio web del logins",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "El usuario ingrese el username \"g\", y el password \"gg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "El usuario presiones clic en el boton entrar",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "El usuario deberia ver el mensaje \"ggg\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinitions.abrimos_el_navegador_y_el_sitio_web_del_logins()"
});
formatter.result({
  "duration": 46159248182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "g",
      "offset": 32
    },
    {
      "val": "gg",
      "offset": 51
    }
  ],
  "location": "LoginStepsDefinitions.el_usuario_ingrese_el_username_y_el_password(String,String)"
});
formatter.result({
  "duration": 350851034,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with id \u003d\u003d email (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 350 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:43:45 -0700\u0027\nSystem info: host: \u0027user-PC\u0027, ip: \u0027192.168.1.41\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, ie.enableFullPageScreenshot\u003dtrue, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.forceShellWindowsApi\u003dfalse, pageLoadStrategy\u003dnormal, ignoreZoomSetting\u003dfalse, ie.fileUploadDialogTimeout\u003d3000, version\u003d8, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:16185/, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dfalse, enableElementCacheCleanup\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 60ede102-9501-4bc3-815d-c9b9da71b503\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat com.edu.eam.pruebasdeaceptacion.steps.LoginStepsDefinitions.el_usuario_ingrese_el_username_y_el_password(LoginStepsDefinitions.java:32)\r\n\tat ✽.When El usuario ingrese el username \"g\", y el password \"gg\"(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsDefinitions.el_usuario_presiones_clic_en_el_boton_entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ggg",
      "offset": 35
    }
  ],
  "location": "LoginStepsDefinitions.el_usuario_deberia_ver_el_mensaje(String)"
});
formatter.result({
  "status": "skipped"
});
});