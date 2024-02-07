/// <reference types="cypress" />

const dados= {
    nome: 'Renan Sousa Teste',
    email: 'renan@gmail.com',
    telefone: '9999999'
};
const {nome, email, telefone} = dados;

describe('Testando funcionalidades da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
        
    })

    it('Deve adicionar um novo contato', () => {

        cy.get('[type="text"]').type(nome);
        cy.get('[type="email"]').type(email);
        cy.get('[type="tel"]').type(telefone);
        cy.get('.adicionar').click();
        
        cy.contains(nome).should('exist');

    })

    it('Deve editar um contato', () => {

        cy.contains('div', nome).next().find('button.edit').click();
        cy.get('[type="text"]').clear();
        cy.get('[type="text"]').type(nome + ' *Editado');
        cy.get('.alterar').click();

        cy.contains(nome + ' *Editado').should('exist');

    })

    it('Deve deletar o contato', () => {

        cy.contains('div', nome  + ' *Editado').next().find('button.delete').click();

        cy.contains(nome + ' *Editado').should('not.exist');
    })

})