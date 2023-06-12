
var xhr = new XMLHttpRequest();

xhr.onload = function(){
    console.log(JSON.parse(this.responseText));

    var data = JSON.parse(this.responseText);
    for(let item of data){
        const parentTodo = document.getElementById('item-list-todo');

        const newTodo = document.createElement('li');
        const textTodo = document.createTextNode(item.name);

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute("onclick","checking(id)")
        checkBox.id = 'test' + (parentTodo.childElementCount + 1);

        const settingButton = document.createElement('span');
        settingButton.className = 'setting-button';

        const setButtonToggle = document.createElement('button');
        setButtonToggle.className = 'set-btn';

        const imgSetting = document.createElement('img');
        imgSetting.src = './assets/images/setting-icon.png';
        setButtonToggle.appendChild(imgSetting);
        settingButton.appendChild(setButtonToggle);

        newTodo.appendChild(checkBox);
        newTodo.appendChild(textTodo);
        newTodo.appendChild(settingButton);
        parentTodo.appendChild(newTodo);
    }

}

xhr.open('GET','./backend/get-todo-list.php',false);
xhr.send();

