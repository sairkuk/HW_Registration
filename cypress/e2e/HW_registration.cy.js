/// <reference types = "cypress"/>

describe('automationteststore spec', () => {
    it('Registration', () => {
    // open website
      cy.visit('https://automationteststore.com')
      cy.get('span.menu_text')
      .eq(0)
      .click()
      .should('have.class', 'menu_text');

      cy.get('.active.menu_home').click().should('have.class', 'menu_home');
      cy.get('[data-id="menu_account"]')
      .eq(0)
      .click();
      
      cy.get('button[title="Continue"]').click();

// nane
      cy.get('#AccountFrm_firstname')
      .type('Alex')
      .should('have.value','Alex');
      
// last name 
      cy.get('#AccountFrm_lastname').type('K').should('have.value', 'K');

// Email
      cy.get('#AccountFrm_email').type('Alex@gmail.com').should('have.value', 'Alex@gmail.com');

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

// Region / State
      cy.get('#AccountFrm_zone_id')
      .select('Angus')
      .should('have.value', '3516'); 
    
// postcode
      cy.get('#AccountFrm_postcode').type('000101').should('have.value', '000101');

// Country
      cy.get('#AccountFrm_country_id').select('Ukraine').should('have.value', '220');

// login 
      cy.get('#AccountFrm_loginname').type('Alex23').should('have.value','Alex23' );

// Password
      cy.get('#AccountFrm_password').type('12341234').should('have.value', 12341234);

      cy.get('#AccountFrm_confirm').type('12341234').should('have.value', 12341234);

// Subscribe

      cy.get('#AccountFrm_newsletter1').check().should('have.id', 'AccountFrm_newsletter1');
// Agree policy

      cy.get('#AccountFrm_agree').check().should('have.id', 'AccountFrm_agree');

// click button

      cy.get('button.lock-on-click.btn') 
      .should('have.css', 'border-color')
      .and('eq', 'rgb(216, 66, 14)'); 


      cy.get('button.lock-on-click.btn') 
      .click();

    });

    it('Login', () => {

         // open website
      cy.visit('https://automationteststore.com')
      cy.get('span.menu_text')
      .eq(1)
      .click()
      .should('have.class', 'menu_text');

     cy.get('#loginFrm_loginname')
     .type('Alex23')
     .should('have.value', 'Alex23')

     cy.get('#loginFrm_password')
     .type('12341234')
     .should('have.value', '12341234')

     cy.get('.pull-right[title="Login"]')
     .should('have.attr', 'title')
     .and('include', 'Login')

     cy.get('.pull-right[title="Login"]')
     .click()

     cy.get('.side_account_list a')
     .eq(9)
     .should('have.attr', 'href')
     .and('include', 'logout')

// Logout

    //  cy.get('.side_account_list li')
    //  .eq(9)
    //  .click();
     
    })
  })