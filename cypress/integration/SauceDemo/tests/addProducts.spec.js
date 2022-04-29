/// <reference types="cypress" />

import loginPage from "../pageobjects/login.page";
import productsPage from "../pageobjects/products.page";
import parameters from '../resources/parameters';

describe("Test suite to run test scenarios for Products page", () => {

    beforeEach(() => {
        loginPage.gotowebpage("")
        loginPage.login(parameters.validUser, parameters.validPassword)
    })

    it("should add Sauce Labs Onesie to shopping cart", () => {
        productsPage.addToCartOnesieButton.click()
        productsPage.cartQuantityProducts
            .should("have.text", 1)
        productsPage.cartButton.click()
        cy.contains(parameters.labelOnesie)
    });

    it("should sort products by price (low to high)", () => {
        productsPage.listPriceProducts
            .then(list => {
                let pricesBeforeSorting = Array.from(list, el => parseFloat(el.innerText.replace("$", "")))
                cy.wrap(pricesBeforeSorting).then(listPricesBeforeSorting => {
                    productsPage.productSortDropDown.select(parameters.optionPriceLowToHigh);
                    productsPage.listPriceProducts
                        .then((list) => {
                            let pricesAfterSorting = Array.from(list, el => parseFloat(el.innerText.replace("$", "")))
                            expect(listPricesBeforeSorting.sort((a,b) => a-b)).to.deep.equal(pricesAfterSorting)
                        })
                })
            })
    })

    it("should sort products by price (high to low)", () => {
        productsPage.listPriceProducts
            .then(list => {
                let pricesBeforeSorting = Array.from(list, el => parseFloat(el.innerText.replace("$", "")))
                cy.wrap(pricesBeforeSorting).then(listPricesBeforeSorting => {
                    productsPage.productSortDropDown.select(parameters.optionPriceHighToLow);
                    productsPage.listPriceProducts
                        .then((list) => {
                            let pricesAfterSorting = Array.from(list, el => parseFloat(el.innerText.replace("$", "")))
                            expect(listPricesBeforeSorting.sort((a,b) => b-a)).to.deep.equal(pricesAfterSorting)
                        })
                })
            })
    })

});