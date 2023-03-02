/// <reference types = "cypress"/>
import * as user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';

describe('Add order', () => {
    it('Order', () => {
      // open website
      cy.log('**Open  website home page**')
      cy.visit('/')

      // Add product
      // cy.get('a[data-id="72"]').click().should('have.attr', '[data-id="72"]')
      // cy.get('a.dropdown-toggle[href]').click()
      // cy.get('#cart_checkout1').click()
      
      cy.log('**Choose product**');
      cy.get('.nav-pills.categorymenu').children('li').eq(2).click();
      cy.get('.thumbnails.row').children('li').eq(0).click();
      cy.get('.col-md-3.col-sm-6.col-xs-12').children('.thumbnail').eq(0).click();
      cy.get('.productpagecart').children('li').eq(0).click();
      cy.get('#cart_quantity50').clear().type('2');
      cy.get('a.btn.btn-default.mr10.mb10').click();
      cy.get('.nav-pills.categorymenu').children('li').eq(4).click();
      cy.get('.thumbnails.row').children('li').last().click();
      cy.get('#sort').select('Price Low > High');
      cy.get('.pricetag.jumbotron').children('.productcart').eq(6).click();
  

      // authorize
      cy.get('#loginFrm_loginname').type(user.userName).should('have.value', user.userName)
      cy.get('#loginFrm_password').type(user.password).should('have.value', user.password)
      cy.get('.pull-right[title="Login"]').should('have.attr', 'title').and('include', 'Login')
      cy.get('.pull-right[title="Login"]').click()
      
      //confirm order
      cy.get('#checkout_btn').click()

      // check sucsses order
      cy.get('span.maintext').should('contain', 'Your Order Has Been Processed!')

    })
})