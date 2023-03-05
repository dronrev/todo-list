<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="index-responsive.css">
    <script src="check-todo-list.js" defer></script>
    <script src="add-new-todo.js" defer></script>
    <script src="display-todo.js" defer></script>
    <script src="setting.js" defer></script>
    <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
<header style="display: flex; justify-content:center;">
    <h1 style="text-align: center;color:white;font-style:italic">My To Do List</h1>
</header>
    <main>
        <section class="list-todo">
            <div class="list-of-todo">
                <div class="sort-todolist">
                    <div>All</div>
                    <div>Pending</div>
                    <div>Completed</div>
                </div>
                <ul id="item-list-todo">
                    <li>
                        <input type="checkbox" id="testing" onclick="checking(id)">Complete Personal to do app 
                        <span class="setting-button">
                            <button class="set-btn"><img src="./assets/images/setting-icon.png" alt=""></button>
                        </span>
                        <div class="submenu">
                            <a href="">1</a>
                            <a href="">2</a>
                            <a href="">3</a>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="testing2" onclick="checking(id)">List 2
                        <span class="setting-button">
                            <button class="set-btn"><img src="./assets/images/setting-icon.png" alt=""></button>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="add-list">
            <form action="" method="post">
                <input type="text" id="new-todo" placeholder="What are your tasks today ?">
                <button onclick="add()" type="button">Add</button>
            </form>
        </section>
    </main>
</body>
</html>