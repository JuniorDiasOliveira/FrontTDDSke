(function () {

    this.TodoListFactory = TodoListFactory;

    function TodoListFactory() {
        
        var _listaInternaTarefas = [];

        return {
            Criar: function () {
                
                return {
                    retornarListaTarefas: retornarListaTarefas,
                    adicionarTarefa: adicionarTarefa
                }

                function retornarListaTarefas() {
                    return _listaInternaTarefas;
                };

                function adicionarTarefa(tarefa) {
                    _listaInternaTarefas.push(tarefa);
                };
            }
        }
    }



})()