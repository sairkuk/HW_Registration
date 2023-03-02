/// <reference types = "cypress"/>

import Registration from '../support/pages/RegistrationPage'


it('Registration', ()=> {
    Registration.openRegForm()
    Registration.fillFields()
    Registration.submitButton()
    Registration.verifyUserName()

})