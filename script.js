const buttonNewTask = document.querySelector(".new-task button"); //adicionar uma nova tarefa.
const taskBox = document.querySelector(".task-box"); //recebe todos os itens de tarefa que forem criados.
const newTaskInput = document.querySelector(".new-task input"); //digitar o nome da tarefa

buttonNewTask.addEventListener("click", addTask); //clica para criar uma nova tarefa.

function addTask(event) {
  event.preventDefault(); //Mantem o dado no input em caso de falha

  const list = JSON.parse(localStorage.getItem("list")) || [];
  const itemIndex = list.length 
  console.log(list);
  console.log(itemIndex)

  const taskItem = document.createElement("label"); //Cria um novo elemento HTML chamado <label>
  taskItem.classList.add("task-item"); //define a classe como task-item

  const checkboxInput = document.createElement("input"); //Crie um novo elemento de entrada chamado <input>
  checkboxInput.type = "checkbox"; //configurando esse <input> para ser um checkbox.

  const fakeCheckboxInput = document.createElement("span"); //cria um novo elemento <span>
  fakeCheckboxInput.classList.add("fake-checkbox"); //cria uma classe chamada fake-checkbox nesse <span>.

  const checkIcon = document.createElement("i"); //Cria um elemento HTML
  checkIcon.classList.add("fa"); //Diz que ele usa a biblioteca Font Awesome
  checkIcon.classList.add("fa-check"); //especifica qual ícone vai aparecer

  const taskItemText = document.createElement("p"); //Crie um novo elemento <p>.
  taskItemText.innerText = newTaskInput.value; //Pega o que a pessoa digitou no campo de texto (newTaskInput.value) e escreva dentro desse parágrafo.

  const buttonTrash = document.createElement("button"); //Cria um novo botão

  const trashItem = document.createElement("i"); //cria um elemento <i>
  trashItem.classList.add("fa"); //Diz que ele usa a biblioteca Font Awesome
  trashItem.classList.add("fa-trash"); //especifica qual ícone vai aparecer
  trashItem.addEventListener("click", () => deleteTask(itemIndex))

  taskItem.appendChild(checkboxInput); // coloca o checkboc dentro do taskItem
  taskItem.appendChild(fakeCheckboxInput); //Adiciona o fakeCheckboxInput, <span> checkbox estilizado.
  fakeCheckboxInput.appendChild(checkIcon); //Coloca o ícone de check dentro do checkbox falso
  taskItem.append(taskItemText); //adiciona o parágrafo com o texto do usuário dentro do item da tarefa.
  taskItem.appendChild(buttonTrash); //Adiciona o botão de apagar
  buttonTrash.appendChild(trashItem); //coloca o ícone da lixeira dentro do botão
  taskBox.appendChild(taskItem); //adiciona todo o item da tarefa na caixa principal (taskBox)

  // trashItem.addEventListener("click", deleteTask); //clicar no ícone da lixeira, executa a função deleteTask
  checkboxInput.addEventListener("click", completeTask); // clicar no checkbox, execute a função completeTask

  newTaskInput.value = ""; // reseta o campo de texto
}

function deleteTask(itemIndex) {
  console.log(itemIndex)
}

function completeTask(e) {
  e.target.parentElement.classList.toggle("complete");
}



// Salvar e Apresentar dados salvos em localStorage

function saveItem() {
  const tasks = [];

  localStorage.setItem(
    "itemNumber",
    taskItem.value,
    taskItemText.value,
    taskBox.value
  );
}
function showItens() {}
