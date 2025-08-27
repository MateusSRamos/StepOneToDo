const buttonNewTask = document.querySelector(".new-task button"); //adicionar uma nova tarefa.
const taskBox = document.querySelector(".task-box"); //recebe todos os itens de tarefa que forem criados.
const newTaskInput = document.querySelector(".new-task input"); //digitar o nome da tarefa

buttonNewTask.addEventListener("click", addTask); //clica para criar uma nova tarefa.

function addTask(event) {
  event.preventDefault(); //Mantem o dado no input em caso de falha

  const list = JSON.parse(localStorage.getItem("list")) || [];
  const itemIndex = list.length;

  const item = {
    itemIndex, //pega o número do item da lista
    description: newTaskInput.value, //pega o texto do parágrafo que foi digitado pelo usuário
    status: false, //inicialmente a tarefa não está completa
  };

  list.push(item);
  localStorage.setItem("list", JSON.stringify(list));

  newTaskInput.value = "";
  showItens();
}

function showItens() {
  const list = JSON.parse(localStorage.getItem("list")) || []; //pega os dados salvos com a chave/transforma o texto salvo em um array/objeto JavaScript./se não existir nada salvo ainda, ele cria uma lista vazia [] para não dar erro.
  taskBox.innerHTML = "";

  list.forEach((item, itemIndex) => {
    const taskItem = document.createElement("label");
    taskItem.classList.add("task-item");
    taskItem.id = `task-item-${itemIndex}`;

    const checkboxInput = document.createElement("input"); //Crie um novo elemento de entrada chamado <input>
    checkboxInput.type = "checkbox"; //configurando esse <input> para ser um checkbox.
    checkboxInput.checked = item.status; // marca o checkbox se já estava concluído

    const fakeCheckboxInput = document.createElement("span");
    fakeCheckboxInput.classList.add("fake-checkbox"); //cria um novo elemento <span>cria uma classe chamada fake-checkbox nesse <span>.

    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa", "fa-check"); //Cria um elemento HTML-diz que ele usa a biblioteca Font Awesome-especifica qual ícone vai aparecer
    checkboxInput.addEventListener("change", () => updateTask(item.itemIndex));

    const taskItemText = document.createElement("p"); //Crie um novo elemento <p>.
    taskItemText.innerText = item.description; //Pega o que a pessoa digitou no campo de texto (newTaskInput.value) e escreva dentro desse parágrafo.

    const buttonTrash = document.createElement("button"); //Cria um novo botão

    const trashItem = document.createElement("i"); //cria um elemento <i>
    trashItem.classList.add("fa", "fa-trash"); //Diz que ele usa a biblioteca Font Awesome//especifica qual ícone vai aparecer
    trashItem.addEventListener("click", () => deleteTask(item.itemIndex)); //clicar no ícone da lixeira, executa a função deleteTask

    taskItem.appendChild(checkboxInput); // coloca o checkboc dentro do taskItem
    taskItem.appendChild(fakeCheckboxInput); //Adiciona o fakeCheckboxInput, <span> checkbox estilizado.
    fakeCheckboxInput.appendChild(checkIcon); //Coloca o ícone de check dentro do checkbox falso
    taskItem.append(taskItemText); //adiciona o parágrafo com o texto do usuário dentro do item da tarefa.
    taskItem.appendChild(buttonTrash); //Adiciona o botão de apagar
    buttonTrash.appendChild(trashItem); //coloca o ícone da lixeira dentro do botão
    taskBox.appendChild(taskItem); //adiciona todo o item da tarefa na caixa principal (taskBox)
  });
}

function deleteTask(index) {
  let list = JSON.parse(localStorage.getItem("list")) || [];
  list = list.filter((item) => item.itemIndex !== index);
  localStorage.setItem("list", JSON.stringify(list));
  showItens();
}

function updateTask(index) {
  let list = JSON.parse(localStorage.getItem("list")) || [];

  // Encontra o item com o índice que vai alterar o status
  const item = list.find((item) => item.itemIndex === index);
  if (item) {
    item.status = !item.status; // inverte o status
  }

  localStorage.setItem("list", JSON.stringify(list)); // Atualiza o localStorage com as alterações
  showItens();
}

// recarrega a pagina
window.onload = showItens;
