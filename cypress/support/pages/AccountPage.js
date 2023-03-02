class AccountPage{
    vsit(){
        cy.log('Open website login page')
        cy.visit('/index.php?rt=account/login')
    }

    verifyUserName(user){
        cy.get('span.subtext').should('contain', user.firstNme);
    }
    
}

export default new AccountPage();