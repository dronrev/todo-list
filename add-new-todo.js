function add(){
    var data = document.getElementById('new-todo');
    console.log(data.value)

    /*const parentTodo = document.getElementById('item-list-todo');

    const newTodo = document.createElement('li');
    const textTodo = document.createTextNode(data.value);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute("onclick","checking(id)")
    checkBox.id = 'test' + (parentTodo.childElementCount + 1);

    newTodo.appendChild(checkBox);
    newTodo.appendChild(textTodo);
    parentTodo.appendChild(newTodo);*/

    var xhr = new XMLHttpRequest();

    xhr.open("POST","./backend/new-todo.php",true);
    xhr.send(data.value);
}