const form = document.getElementById('formulario')
const novatarefa = documetn.getElementById('novatarefa')
const tarefaspFazer = document.getElementById('afazeres')

const lista = JSON.parse(localStorage.getItem('afazeres')) //Criei uma constante JSON para guardar as tarefas inseridas no input

if (lista) {
    lista.forEach(todo => addItem(todo))//todo é o parâmetro da função addItem
} //Nessa condicional, sempre que lida se o valor de lista for diferente de null, undefined, false ou 0 ou uma string vazia "" ela será verdadeira e executará o bloco dentro

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    addItem()
})//Nesse trecho, foi adicionado um evento submit onde chama um método prevent default que é responsável por executar alguma tarefa ao chamar o evento submit antes da tarefa padrão, nesse caso vai executar o addItem e depois as tarefas do evento submit.

function addItem(todo){ //Recebe um parâmetro chamado todo, que representa um objeto contendo informações sobre a tarefa. Por padrão, esse parâmetro é opcional.

    let todoText = novatarefa.value //Obtém o texto da tarefa a partir do valor do campo de input com o id "input" na página.

    if(todo){ //Estudar esse trecho
        todoText = todo.text
    } //Se um objeto todo for passado como parâmetro, o texto da tarefa é substituído pelo valor do atributo text desse objeto. Isso significa que, se uma tarefa específica for passada para a função addTodo, o texto dessa tarefa será exibido em vez do texto digitado no campo de input. Essa lógica permite preencher o campo de input com o texto da tarefa ao editar uma tarefa existente.

    if(todoText) { //Verifica se o texto da tarefa (todoText) não é vazio ou nulo.
        const todasTasks = document.createElement('li') //Cria um novo elemento li para representar a tarefa na lista de tarefas.
        if(todo && todo.completed) {
            todasTasks.classList.add('completed') //Com método classlist podemos fazer varias manipulações em uma lista, como por exemplo add para adicionar uma nova class.
        } //Se o objeto todo existir e possuir a propriedade completed definida como verdadeira, adiciona a classe CSS "completed" ao elemento li. Essa classe geralmente é usada para estilizar visualmente as tarefas concluídas.
        
        todasTasks.innerText = todoText //Aqui está adiciconando o input digitado ao texto html (a lista de tarefas do li)
        
        todasTasks.addEventListener('click', () => {
            todasTasks.classList.toggle('completed') //Adiciona um evento de clique ao elemento li. Quando o elemento li é clicado, ele alterna a classe CSS "completed", adicionando-a se estiver ausente ou removendo-a se já estiver presente. Esse evento de clique permite marcar ou desmarcar uma tarefa como concluída.
            updateLS()

            
        })



Adiciona um evento de clique com o botão direito (contextmenu) ao elemento li. Quando o elemento li é clicado com o botão direito, ele é removido da lista. Esse evento de clique com o botão direito permite excluir uma tarefa.

Anexa o elemento li à lista de tarefas representada pelo elemento ul com o id "todos" na página.

Limpa o valor do campo de input, definindo-o como uma string vazia.

Chama a função updateLS, que provavelmente é responsável por atualizar os dados no armazenamento local (local storage) para refletir as alterações na lista de tarefas.



}