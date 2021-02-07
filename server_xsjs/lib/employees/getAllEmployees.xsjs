$.import("employees", "employeeslib");

let employeesLib = $.employees.employeeslib;

let listEmployees = employeesLib.getAllEmployees();

$.response.contentType = "application/json";
$.response.setBody(JSON.stringify(listEmployees));
