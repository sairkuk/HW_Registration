/// <reference types = "cypress"/>

import OrderPage from '../support/pages/OrderPage'

it('Order', ()=> {
    OrderPage.visitLoginPage()
    OrderPage.chooseProduct()
    OrderPage.authorizeLoginPage()
    OrderPage.confirmOrder()
    OrderPage.checkSucssesOrder();

})