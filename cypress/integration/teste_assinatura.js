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

/* Decrição dos tipo de testes */
describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('https://devisp.datacake.com.br')

        cy.get('[id=bfc_taxvat]').type('12345678901')
        cy.get('[id=bfc_name]').type('Teste de Assinatura')
    });
    
    it('devem poder realizar um login no sistema', () => {
        });
});
    

