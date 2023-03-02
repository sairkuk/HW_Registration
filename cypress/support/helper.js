export function loginViaUI(user){
    cy.log('**Open website login page**');
    cy.visit('/');

    cy.log('**Authorize user**');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.get('h1 span.subtext').should('contain', user.firstName);
}

export function headlessLogin(user){
    let csrfToken;
    let csrfInstance;

    cy.request('GET', '/index.php?rt=account/login').then( response => {
        let htmlResp = document.createElement('html')
        htmlResp.innerHTML = response.body;
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value');
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value');
    }).then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            body: {
                loginname: user.username,
                password: user.password,
                csrfinstance: csrfInstance,
                csrftoken: csrfToken
            },
            form: true
        })
    })
}

export function findItems (search){
cy.get('input#filter_keyword').clear().type('E').parents('form').submit();
//cy.get('.fa.fa-search').click();


const fn = () =>{
    cy.get('.contentpanel').then(() => {
        let  itemFounds = Cypress.$(`a.prdocutname[title="${search}"]`)
        if(itemFounds.length == 0){
           cy.get('.pagination').find('a').eq(-2).should('contain','>').click();
        fn()
        }else{
            cy.get(`a.prdocutname[title="${search}"]`).click()
        }
    
    })
}
fn()  
}

//cy.get('.disabled').eq(3).click();


// cy.contains('>').as('nextButton')
// const goToNextButton = () => {
//     cy.get('')
// }