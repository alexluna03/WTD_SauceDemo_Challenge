import BasePage from "./base.page";

class ProductsPage extends BasePage {
    
    get titlePage() { return cy.get("span.title"); }
    get addToCartOnesieButton() { return cy.get("#add-to-cart-sauce-labs-onesie"); }
    get cartQuantityProducts() { return cy.get("span.shopping_cart_badge"); }
    get cartButton(){ return cy.get("a.shopping_cart_link"); }
    get burgerMenuButton() { return cy.get("#react-burger-menu-btn"); }
    get logOutLink() { return cy.get("#logout_sidebar_link"); }
    get productSortDropDown() { return cy.get("select.product_sort_container"); }
    get listPriceProducts() { return cy.get("div.inventory_item_price"); }
    
}

export default new ProductsPage()