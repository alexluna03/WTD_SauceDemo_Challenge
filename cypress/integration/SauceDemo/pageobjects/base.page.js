export default class BasePage {

    gotowebpage(url) {
        return cy.visit(url)
    }

}