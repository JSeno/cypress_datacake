// Importando cypress-file-upload para fazer upload de arquivos
import 'cypress-file-upload';

/* Adicionando comando Intelessense */
/// <reference types="cypress" />

//describe para criar um grupo de testes que deve ser seguido de uma descrição, nome do grupo de testes, entre chaves o it para criar um teste
describe('Devisp Assine', () => {
    it('Fazer assinatura, no devisp', () => {
        
        const filepath1 = '#01doc_selfie001.png'; // Crio uma constante para a o arquivo que fica dentro da pasta fixtures
        const filepath2 = '#02doc_selfie002.png'; // Crio uma constante para a o arquivo que fica dentro da pasta fixtures
        const filepath3 = '#03doc_selfie003.png'; // Crio uma constante para a o arquivo que fica dentro da pasta fixtures

        //cy.visit para ir para a url
        cy.visit('https://devisp.datacake.com.br')

        cy.clearCookies() // limpa cookies
        cy.clearLocalStorage() // limpa local storage

        // Página 1 do assine
        //cy.get para buscar o elemento que no caso são os IDs dos campos, type para digitar o conteudo, click para clicar e clear para limpar o campo.
        cy.get('#bfc_taxvat').type('935.078.950-72') //CPF //TODO:Preciso de um método para pegar um CPF aleatorio
        cy.get('#bfc_name').type('Teste de Assinatura Cypress') //Nome Completo
        cy.get('#bfc_email').type('testes@datacake.com.br') //Email
        cy.get('#mobile_celular').type('11 99999-9999') //TODO:Preciso de um método para pegar um celular aleatorio
        cy.get('#bfc_postalCode').type('18680410') //Cep Instalação
        cy.get('#bfc_numberOfAddress').type('410') //Número da residência
        cy.get('#bfc_typeOfAccess').select('Residencial') //Tipo de acesso selecionado
        cy.get('#bfc_typeOfCustomer').select('Não sou cliente') //Já é cliente selecionado
        cy.get('#bfc_lgpd_disclaimer_label').click() //Aceite de Termos selecionado
        cy.wait(1000) //Espera 1 segundo
        cy.get('#bfc_continuar').click() //Continuar Assinatura

        // Página 2 do assine
        cy.get('#net_add_plan_52').click() //TODO: Preciso arrumar um jeito de buscar um o primeniro plano disponivel
        cy.wait(2000) //Espera 2 segundos
        cy.get('#summary-continuar-assinatura').click() //Continuar Assinatura

        // Página 3 do assine
        cy.get('#s01_mobile_extra').type('11 99999-9999') //Telefone whatsapp
        cy.get('#s01_telephone').type('11 99999-9999') //Telefone fixo
        cy.get('#s01_rg').type('24.892.072-8') //RG
        cy.get('#s01_dob').type('10/10/1980') //Data de nascimento
        cy.get('#s01_select_origins').select('Google') //Origem da comercial
        cy.get('#s01_extra_cart_message').type('Observações, observando, observador, observa') //Observações
        cy.get('#s01_street_address_2').type('Complemento, complementa, o complementado') //Complemento
        cy.wait(1000) //Espera 1 segundo
        cy.get('#s01-continue-wizard').click() //Continuar Assinatura

        // Página 4 do assine
        cy.get('#s02_select_contractTime').select('1 ano') //Fidelidade de 1 ano selecionado
        cy.get('#label_dueDay_10').click() //Dia de vencimento selecionado
        cy.get('#payment-multi-3').click() //Forma de pagamento selecionado
        
        cy.get('#s02-open-docs-modal').click() //Abrir documentos
        cy.get('#send_selfie').click() //Enviar selfie
        cy.get('input[type="file"]').attachFile(filepath1) //Enviar selfie
        cy.wait(8000) //Espera 8 segundos
        cy.get('#s02-modal-document-page-0').click() //Abrir documentos
        
        cy.get('#send_selfie').click() //Enviar selfie
        cy.get('input[type="file"]').attachFile(filepath2) // Foto do documento
        cy.wait(8000) //Espera 8 segundos
        cy.get('#s02-modal-document-page-1').click() //Abrir documentos
        
        cy.get('#send_selfie').click() //Enviar selfie
        cy.get('input[type="file"]').attachFile(filepath3) //Enviar comprovante de residência
        cy.wait(8000) //Espera 8 segundos
        cy.get('#s02-finalizar-btn-2').click() //Finalizar assinatura


        cy.get('#label_term-7').click() //Termos de uso selecionado
        cy.get('#s02-confirmar-assinatura').click() //Confirmar Assinatura
        
        cy.get('#restar_subscription').click() // Nova Assinatura
                
        // Verificando se a assinatura foi corretamente no Tarefas:
        cy.visit('https://devisp.datacake.com.br/admin/#/task-result') //TODO: Preciso aprender como faz login automatico no wda.
        
        cy.wait(10000) //Espera 10 segundos
        
        //Testando boletos
        cy.visit('https://devisp.datacake.com.br/boleto')
        cy.get('#boleto-taxvat').type('935.078.950-72') //CPF //TODO:Preciso de um método para pegar um CPF aleatorio
        cy.get('#boleto-submit').click() //Enviar boleto
        
        // Limpando os cookies e local storage
        cy.clearCookies() // limpa cookies
        cy.clearLocalStorage() // limpa local storage
    });
    
});
    

