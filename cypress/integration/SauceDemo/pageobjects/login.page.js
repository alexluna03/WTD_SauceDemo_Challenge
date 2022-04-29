import BasePage from "./base.page";

class LoginPage extends BasePage {
    get userNameField() { return cy.get("#user-name"); }
    get passwordField() { return cy.get("#password"); }
    get loginButton() { return cy.get("#login-button"); }
    get errorMessage() { return cy.get("h3[data-test='error']"); }

    login(email, password) {
        this.userNameField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}

export default new LoginPage()