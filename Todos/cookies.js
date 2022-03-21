// const now = new Date();
// document.cookie = `expires=${now.setMonth(now.getMonth()+1).toUTCString()};`
// showing task
function showTodos() {
    const tasks = document.getElementById('list');
    const getCookie = document.cookie;
    let todoList;
    let items= "";

    if (getCookie) {
        todoList = getCookie.split(';');
        
        for (const element of todoList) {
            if (!element.split('=')[1])
                continue;
            items += '<li id='+todoList.indexOf(element)+'>'+'<div><input name="todo_item" type="checkbox" class="items">'+element.split('=')[1]+ '</div><div class="actions_item"><button class="edit_item" onclick="return edit_item(this)"><i class="fa-solid fa-pen"></i></button><button class="remove_item" onclick="return delete_one(this)"><i class="fa-solid fa-xmark"></i></button></div></li>'; 
        }
        tasks.innerHTML = items;
    }
    else {
        todoList = [];
        tasks.innerHTML = '<span style="color: red">Nothing todos</span>';        
    }

}

function add_new() {
    const input_task = document.getElementById('input_task');
    // const setCookie = document.cookie;
    document.cookie = `${input_task.value}=${input_task.value}`;
    input_task.value = '';
    showTodos();
}

function delete_one(obj) {
    const todo = obj.closest('li');
    const value = todo.innerText;
    document.cookie = `${value}=`;
    showTodos();
}

function edit_item(obj) {
    const todo = obj.closest('li');
    const value = todo.innerText;
    const fixed = prompt('Edit your task...');
    if (!fixed.trim())
        alert('Nothing changed...');
    else {
        document.cookie = `${value}=${fixed.trim()}`;
        showTodos();
    }
}

showTodos();