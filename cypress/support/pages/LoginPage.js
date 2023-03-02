class LoginPage{
    vsit(){
        cy.log('Open website login page')
        cy.visit('/index.php?rt=account/login')
    }
    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password')
    }

    getSubmitButton(){
       return cy.get('.pull-right[title="Login"]')
      
    }
    
    assertUserUnathorized(){
        cy.log('Verivy user is Unathorized');
        cy.getCookie('customer').should('be.null')
        cy.log('User is Unathorized')
    }

    submitLoginForm(user){
        cy.log('Try to login')
        this.getLoginField().type(user.userName);
        this.getPasswordField().type(user.password);
        this.getSubmitButton().click();
    }
}
export default new LoginPage();