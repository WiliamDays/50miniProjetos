const form = document.getElementById('formulario')
const novatarefa = documetn.getElementById('novatarefa')
const tarefaspFazer = document.getElementById('afazeres')

const lista = JSON.parse(localStorage.getItem('afazeres')) //Criei uma constante JSON para guardar as tarefas inseridas no input

if (lista) {
    lista.forEach(todo => addItem(todo))//todo é o parâmetro da função addItem
} 
/*Nessa condicional, sempre que lida se o valor de lista for diferente de null, undefined, false ou 0 ou uma string vazia "" ela será verdadeira e executará o bloco dentro.*/

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    addItem()
})
/*Nesse trecho, foi adicionado um evento submit onde chama um método prevent default que é responsável por executar alguma tarefa ao chamar o evento submit antes da tarefa padrão, nesse caso vai executar o addItem e depois as tarefas do evento submit*/

function addItem(todo){
    let todoText = novatarefa.value //Aqui ta pegando o valor digitado no input e guardando na variável todo texto

    if(todo){
        todoText = todo.text
    } //Essa linha faz uma verificação se há algum parâmetro passado, caso houver, 





}