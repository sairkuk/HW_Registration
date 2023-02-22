import * as user from '../fixtures/user.json';
import { headlessLogin } from '../support/helper';
import * as helper from '../support/helper';


it('open account page', () => {

    headlessLogin(user);

    cy.visit('/index.php?rt=account/account');

    cy.log('**Verify user first name on account page**');
    cy.get('h1 span.subtext', {timeout: 20000}).should('contain', user.firstName);


    helper.findItems('Casual 3/4 Sleeve Baseball T-Shirt')

    cy.log('Order');
    cy.get('.productpagecart li a').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('span.maintext').should('contain', 'Your Order Has Been Processed!')
})




