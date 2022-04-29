/// <reference types="cypress" />

import loginPage from "../pageobjects/login.page";
import productsPage from "../pageobjects/products.page";
import parameters from '../resources/parameters';

describe("Test suite to run test scenarios for Login page", () => {

    beforeEach(() => {
        loginPage.gotowebpage("");
    })

    it("should log in to Sauce Demo", () => {
        loginPage.login(parameters.validUser, parameters.validPassword);
        productsPage.titlePage
            .should("be.visible")
            .should("have.text", parameters.titleProducts);
    });

    it("should not log in to Sauce Demo and display error message", () => {
        loginPage.login(parameters.noValidUser, parameters.noValidPassword);
        loginPage.errorMessage.should("be.visible");
    });

    it("should log out from Sauce Demo", () => {
        loginPage.login(parameters.validUser, parameters.validPassword);
        productsPage.titlePage
            .should("be.visible")
            .should("have.text", parameters.titleProducts);
        productsPage.burgerMenuButton.click();
        productsPage.logOutLink.click();
        loginPage.loginButton.should("be.visible");
    });


});