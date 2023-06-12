var xhr = new XMLHttpRequest();

xhr.onload = function () {
  console.log(JSON.parse(this.responseText));

  var data = JSON.parse(this.responseText);
  for (let item of data) {
    var countChild = $("#item-list-todo").children().length;
    $("#item-list-todo").append(
      "<li><input onclick='checking(id)' id='test" +
        countChild +
        "' type ='checkbox'>" +
        item.name +
        "<span class='setting-button'><button class='set-btn'><img src='./assets/images/setting-icon.png' alt></button></span>"
        +
        '<div class="submenu"><a href=""><img style="max-height:1rem" src="./assets/images/pen-to-square-regular.svg" alt="">'+
        '</a><a href=""><img style="max-height:1rem" src="./assets/images/trash-solid.svg" alt=""></a></div>'
        +"</li>"
    );
  }
};

xhr.open("GET", "./backend/get-todo-list.php", false);
xhr.send();
