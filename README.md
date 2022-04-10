# aprendizado_cypress

###### Em contrução...

###### Como para mim o selenium não está funcionando para meus testes tentarei usar o cypress no lugar.

## Instalação do cypress e salvando as depedências dele.
Iniciando um programa no Node
- npm init --yes (--yes é para aceitar todas as perguntas que o node fará)

Instalando Cypress na versão escolhida
- npm install -D cypress@4.1

Ou instalando versão mais atualizada:

Via NPM
- npm install cypress --save-dev

Ou via YARN
- yarn add cypress --dev

### Abrindo o Cypress

Criando um estrutura de pastas no cypress e abrindo o cypress
./node_modules/.bin/cypress open
adicionado pasta cypress, adicionando arquivo de configurações globais cypress.json

Dentro da pasta cypress/integration é onde ficarão seus testes crie um arquivo nome_do_teste.js
e dentro desse arquivo adicione o comando no inicio dele "/// <reference types="cypress" />"  para usar o intelissence do cypress

Após isso inicie com o comando "describe" que é a função de descrição do testes e mapeie sua página de testes pegando os ids, classes,
usando o inspetor de elementos. CYPRESS conta com seu próprio seletor "data-cy=id_do_campo" quando tiver procure usa-lo.

##### Alguns comandos do cypress

cy.get
cy.visit  
cy.fixture  
cy.request  
cy.wait  
cy.screenshot    
cy.get().should()  
cy.get().click()  
cy.get().type()  
cy.get().clear()  
cy.get().should('contain')
cy.get().should('have.class')
cy.get().should('be.visible')  
cy.get().should('not.be.visible')  
cy.get().should('not.exist')  
cy.pause()  
cy.press('Enter')   
.type 
.click 
.should() 
.contains 
.and 
cy.visit 
.label 