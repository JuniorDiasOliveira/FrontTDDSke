describe("todo list test - ", function () {



    it("Deve possuir uma lista interna para guardar as tarefas", function () {
        var todoList = TodoListFactory().Criar();
        expect(todoList.retornarListaTarefas()).toEqual([]);

    });

    it("Deve adicionar uma tarefa", function () {
        var todoList = TodoListFactory().Criar();
        
        todoList.adicionarTarefa("Nova Tarefa");

        var tarefas = todoList.retornarListaTarefas();

        expect(tarefas[0]).toEqual("Nova Tarefa");

    });

})