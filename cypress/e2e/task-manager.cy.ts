describe('Gerenciador de Tarefas - Testes E2E', () => {
  beforeEach(() => {
    // Visita a página antes de cada teste
    cy.visit('/')
  })

  it('Deve carregar a aplicação corretamente', () => {
    cy.contains('Gerenciador de Tarefas').should('be.visible')
    cy.get('[data-cy="task-input"]').should('be.visible')
    cy.get('[data-cy="add-task-button"]').should('be.visible')
  })

  it('Deve adicionar uma nova tarefa', () => {
    // Digita o texto da tarefa
    cy.get('[data-cy="task-input"]').type('Estudar Cypress')
    
    // Clica no botão de adicionar
    cy.get('[data-cy="add-task-button"]').click()
    
    // Verifica se a tarefa apareceu na lista
    cy.get('[data-cy="task-item"]').should('have.length', 1)
    cy.get('[data-cy="task-text"]').should('contain', 'Estudar Cypress')
    
    // Verifica se o input foi limpo
    cy.get('[data-cy="task-input"]').should('have.value', '')
  })

  it('Deve adicionar múltiplas tarefas', () => {
    const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3']
    
    tasks.forEach(task => {
      cy.get('[data-cy="task-input"]').type(task)
      cy.get('[data-cy="add-task-button"]').click()
    })
    
    cy.get('[data-cy="task-item"]').should('have.length', 3)
    cy.get('[data-cy="task-count"]').should('contain', '3 tarefas')
  })

  it('Deve marcar uma tarefa como concluída', () => {
    // Adiciona uma tarefa
    cy.get('[data-cy="task-input"]').type('Fazer exercícios')
    cy.get('[data-cy="add-task-button"]').click()
    
    // Marca como concluída
    cy.get('[data-cy="task-checkbox"]').click()
    
    // Verifica se o texto ficou riscado
    cy.get('[data-cy="task-text"]').should('have.class', 'line-through')
    
    // Verifica o contador de concluídas
    cy.get('[data-cy="completed-count"]').should('contain', 'Concluídas: 1')
  })

  it('Deve desmarcar uma tarefa concluída', () => {
    // Adiciona e marca como concluída
    cy.get('[data-cy="task-input"]').type('Ler documentação')
    cy.get('[data-cy="add-task-button"]').click()
    cy.get('[data-cy="task-checkbox"]').click()
    
    // Desmarca
    cy.get('[data-cy="task-checkbox"]').click()
    
    // Verifica que não está mais riscado
    cy.get('[data-cy="task-text"]').should('not.have.class', 'line-through')
    cy.get('[data-cy="completed-count"]').should('contain', 'Concluídas: 0')
  })

  it('Deve excluir uma tarefa', () => {
    // Adiciona uma tarefa
    cy.get('[data-cy="task-input"]').type('Tarefa para deletar')
    cy.get('[data-cy="add-task-button"]').click()
    
    // Verifica que existe
    cy.get('[data-cy="task-item"]').should('have.length', 1)
    
    // Deleta a tarefa
    cy.get('[data-cy="delete-task-button"]').click()
    
    // Verifica que foi removida
    cy.get('[data-cy="task-item"]').should('have.length', 0)
    cy.contains('Nenhuma tarefa adicionada ainda').should('be.visible')
  })

  it('Deve adicionar tarefa ao pressionar Enter', () => {
    cy.get('[data-cy="task-input"]').type('Tarefa via Enter{enter}')
    
    cy.get('[data-cy="task-item"]').should('have.length', 1)
    cy.get('[data-cy="task-text"]').should('contain', 'Tarefa via Enter')
  })

  it('Não deve adicionar tarefa vazia', () => {
    // Tenta adicionar sem digitar nada
    cy.get('[data-cy="add-task-button"]').click()
    
    // Verifica que nenhuma tarefa foi adicionada
    cy.get('[data-cy="task-item"]').should('have.length', 0)
    
    // Tenta adicionar apenas espaços
    cy.get('[data-cy="task-input"]').type('   ')
    cy.get('[data-cy="add-task-button"]').click()
    
    cy.get('[data-cy="task-item"]').should('have.length', 0)
  })

  it('Fluxo completo: Adicionar, Concluir e Excluir', () => {
    // Adiciona 3 tarefas
    cy.get('[data-cy="task-input"]').type('Tarefa 1')
    cy.get('[data-cy="add-task-button"]').click()
    
    cy.get('[data-cy="task-input"]').type('Tarefa 2')
    cy.get('[data-cy="add-task-button"]').click()
    
    cy.get('[data-cy="task-input"]').type('Tarefa 3')
    cy.get('[data-cy="add-task-button"]').click()
    
    // Verifica total
    cy.get('[data-cy="task-item"]').should('have.length', 3)
    
    // Marca a primeira como concluída
    cy.get('[data-cy="task-checkbox"]').first().click()
    cy.get('[data-cy="completed-count"]').should('contain', 'Concluídas: 1')
    
    // Exclui a segunda tarefa
    cy.get('[data-cy="delete-task-button"]').eq(1).click()
    cy.get('[data-cy="task-item"]').should('have.length', 2)
    
    // Verifica estado final
    cy.get('[data-cy="task-count"]').should('contain', '2 tarefas')
  })
})
