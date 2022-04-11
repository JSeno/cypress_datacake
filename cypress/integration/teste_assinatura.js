/* 
--- Alguns Comandos para o cypress ----

cy.get busca elemento
cy.visit busca url
cy.fixture busca arquivo
cy.request busca requisição
cy.wait busca espera
cy.screenshot busca captura de tela
cy.get().should() busca verificação
cy.get().click() busca clique
cy.get().type() busca digitação
cy.get().clear() busca limpa
cy.get().should('contain') busca verificação
cy.get().should('have.class') busca verificação
cy.get().should('be.visible') busca verificação
cy.get().should('not.be.visible') busca verificação
cy.get().should('not.exist') busca verificação
cy.pause() busca pausa
cy.press('Enter') busca pressionar tecla
.type informa o conteudo do elemento
.click informa que o elemento foi clicado
.should() informa que o teste vai ser realizado
.contains informa que o elemento deve conter o texto
.and informa que o teste vai ser realizado
cy.visit informa que o teste vai ser realizado
.label seleciona o label

*/

/* 
---------Pagina 1---------
CPF = bfc_taxvat
Nome Completo = bfc_name
Email = bfc_email
Telefone celular = mobile_celular
Cep Instalação = bfc_postalCode
Número da residência = numberOfAddress
Tipo de acesso Label = bfc_typeOfAccess
Já é cliente Label = bfc_typeOfCustomer
Aceite de Termos = bfc_lgpd_disclaimer_label
Continuar Assinatura = bfc_continuar

------------------------------

*/

/* Adicionando comando Intelessense */
/// <reference types="cypress" />

//describe para criar um grupo de testes que deve ser seguido de uma descrição, nome do grupo de testes, entre chaves o it para criar um teste
describe('Devisp Assine', () => {
    it('Fazer assinatura, no devisp', () => {
        //cy.visit para ir para a url
        cy.visit('https://devisp.datacake.com.br')

        // Página 1 do assine
        //cy.get para buscar o elemento que no caso são os IDs dos campos, type para digitar o conteudo, click para clicar e clear para limpar o campo.
        // cy.get('[id=bfc_taxvat]').type('935.078.950-72') //CPF
        cy.get('[id=bfc_name]').type('Teste de Assinatura') //Nome Completo
        cy.get('[id=bfc_email]').type('testes@datacake.com.br') //Email
        cy.get('[id=mobile_celular]').type('11 99999-9999') //Telefone celular
        cy.get('[id=bfc_postalCode]').type('18680410') //Cep Instalação
        cy.get('#bfc_numberOfAddress').type('410') //Número da residência
        cy.get('#bfc_typeOfAccess').select('Residencial') //Tipo de acesso selecionado
        cy.get('#bfc_typeOfCustomer').select('Não sou cliente') //Já é cliente selecionado
        cy.get('#bfc_lgpd_disclaimer_label').click() //Aceite de Termos selecionado
        cy.get('#bfc_continuar').click() //Continuar Assinatura

        // Página 2 do assine

    });
    
});
    

