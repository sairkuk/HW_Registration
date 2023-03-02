/// <reference types = "cypress"/>
import * as user from '../fixtures/user.json'
import LoginPage from '../support/pages/LoginPage';
import AccountPage from '../support/pages/AccountPage';

    it('Login', () => {

      LoginPage.vsit();
      LoginPage.submitLoginForm(user);
      AccountPage.verifyUserName(user)

     

     
    })
