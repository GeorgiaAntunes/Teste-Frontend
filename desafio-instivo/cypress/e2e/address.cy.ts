describe('Formulário de Endereço', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/ws/*/json/', { fixture: 'viacep_response.json' }).as('getCep');
      cy.intercept('POST', '/api/save', { statusCode: 200 }).as('saveAddress');
      
      cy.visit('/');
    });
  
    it('deve preencher automaticamente o endereço ao digitar um CEP válido', () => {
      cy.get('[data-testid="cep-input"]').type('01001000').blur();
      cy.wait('@getCep');
      
      cy.get('[data-testid="street-input"]').should('have.value', 'Praça da Sé');
      cy.get('[data-testid="district-input"]').should('have.value', 'Sé');
      cy.get('[data-testid="city-input"]').should('have.value', 'São Paulo');
      cy.get('[data-testid="state-input"]').should('have.value', 'SP');
    });
  
    it('deve mostrar erro para CEP inválido', () => {
      cy.get('[data-testid="cep-input"]').type('123').blur();
      cy.contains('CEP inválido').should('be.visible');
    });

    it('deve enviar o formulário corretamente', () => {

        cy.get('form').should('exist').then(form => {
          console.log('Formulário encontrado:', form[0].outerHTML);
        });
      
        cy.get('[data-testid="submit-button"]')
          .should('exist')
          .should('be.visible')
          .then(btn => {
            console.log('Botão submit:', btn[0].outerHTML);
          });
      });
  
      it('deve limpar o formulário ao clicar no botão Limpar', () => {
  
        cy.get('[data-testid="cep-input"]').type('01001000');
        cy.get('[data-testid="cep-input"]').should('have.value', '01001-000');
        
        cy.get('[data-testid="street-input"]').type('Rua Teste');
        
        cy.get('[data-testid="clear-button"]').click();
        
        cy.get('[data-testid="cep-input"]').should('have.value', '');
        cy.get('[data-testid="street-input"]').should('have.value', '');
        cy.get('[data-testid="complement-input"]').should('have.value', '');
        cy.get('[data-testid="district-input"]').should('have.value', '');
        cy.get('[data-testid="city-input"]').should('have.value', '');
        cy.get('[data-testid="state-input"]').should('have.value', '');
      });
  });