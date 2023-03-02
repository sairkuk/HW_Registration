import * as user from '../../fixtures/user.json'
import { faker } from '@faker-js/faker';

user.firstNme = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.postcode = faker.address.zipCode('####');
user.address = faker.address.streetAddress();
user.userName = faker.internet.userName();
user.password = faker.internet.password(10);
user.city = faker.address.city();

class RegistrationPage{
    openRegForm(){
          // open website
      cy.log('**Open  website home page**')
      cy.visit('https://automationteststore.com')

      cy.log('Open  website login page');
      cy.get('span.menu_text').eq(0).click().should('have.class', 'menu_text');
      cy.get('.active.menu_home').click().should('have.class', 'menu_home');
      cy.get('[data-id="menu_account"]').eq(0).click();

      cy.log('Open  website sinh up page')
      cy.get('button[title="Continue"]').click();

      cy.log('Fill registration form')
    }

    fillFields(){
        cy.log('Fill registration form')
      // first nane
      cy.get('#AccountFrm_firstname').type(user.firstNme).should('have.value', user.firstNme);
      
      // last name 
      cy.get('#AccountFrm_lastname').type(user.lastName).should('have.value', user.lastName);

      // Email
      cy.get('#AccountFrm_email').type(user.email).should('have.value', user.email);

      // phone number
      cy.get('#AccountFrm_telephone').type('0978765432').should('have.value', '0978765432');

      // Fax
      cy.get('#AccountFrm_fax').type('Fax').should('have.value', 'Fax');

      // Company name
      cy.get('#AccountFrm_company').type('Company').should('have.value', 'Company');

      // Address
      cy.get('#AccountFrm_address_1').type('Ukraine').should('have.value', 'Ukraine');

      cy.get('#AccountFrm_address_2').type('Ukraine1').should('have.value', 'Ukraine1');

      // City
      cy.get('#AccountFrm_city').type('Kiev').should('have.value', 'Kiev');
    
      // postcode
      cy.get('#AccountFrm_postcode').type(user.postcode).should('have.value', user.postcode);

      // Country
      cy.get('#AccountFrm_country_id').select('Ukraine').should('have.value', '220');

      // login 
      cy.get('#AccountFrm_loginname').type(user.userName).should('have.value', user.userName );

      // Password
      cy.get('#AccountFrm_password').type(user.password).should('have.value', user.password);

      cy.get('#AccountFrm_confirm').type(user.password).should('have.value', user.password);

      // Region / State
      cy.get('#AccountFrm_zone_id').select(2, {force:true}).invoke('val').should('not.eq', 'FALSE')

      cy.log('Check checkboxes')
      // Subscribe
      cy.get('#AccountFrm_newsletter1').check().should('have.id', 'AccountFrm_newsletter1');

      // Agree policy
      cy.get('#AccountFrm_agree').check().should('have.id', 'AccountFrm_agree');
    }
submitButton (){
    cy.log('Submit sign up form')
      // click button
      cy.get('button.lock-on-click.btn') .should('have.css', 'border-color').and('eq', 'rgb(216, 66, 14)'); 
      cy.get('button.lock-on-click.btn') .click();
}
verifyUserName(){
    cy.log('**Verify user first name on account page**')
      cy.get('span.subtext').should('contain', user.firstNme);

      console.log(user)
}

}
export default new RegistrationPage()