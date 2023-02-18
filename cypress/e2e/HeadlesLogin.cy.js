import * as user from '../fixtures/user.json'

it('Order', () => {

    let csrftoken;
    let csrfinstance;

    cy.request('GET', '/index.php?rt=account/login').then( response => {

       let htmResp = document.createElement('html')
       htmResp.innerHTML = response.body;
       csrftoken = htmResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
       csrfinstance = htmResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
         }).then(() => {
        cy.request({
        method: 'POST',
        url: '/index.php?rt=account/login',
        body: {
            loginname: user.lastName,
            password: user.password,
            csrfinstance: csrfinstance,
            csrftoken: csrftoken
        },
        form: true
    })
    })
    cy.visit('/index.php?rt=account/login')
    //cy.get('span.subtext').should('contain', user.firstNme);
})