// // let todoList=['first', 'second','third'];
// let todoList;
// // take todos from local storage
// if (localStorage.getItem('todoList'))
//     todoList = JSON.parse(localStorage.getItem('todoList')); // localStorage
//     // todoList = JSON.parse(sessionStorage.getItem('todoList')); //sessionStorage
// else
//     todoList = [];
// // console.log(todoList);

// const list = document.getElementById('list');
// function showTodos(todoList){
//     let items =""
//     for (const item of todoList) {
//         items +=  '<li>'+'<div><input name="todo_item" type="checkbox" class="items">'+item+ '</div><div class="actions_item"><button class="edit_item" onclick="return edit_item(this)"><i class="fa-solid fa-pen"></i></button><button class="remove_item" onclick="return delete_one(this)"><i class="fa-solid fa-xmark"></i></button></div></li>';
//     }
//     // push to local storage
//     localStorage.setItem('todoList', JSON.stringify(todoList));

//     // push to sessionStorage
//     // sessionStorage.setItem('todoList', JSON.stringify(todoList));
//     console.log(todoList);
//     list.innerHTML=items;
// }
// showTodos(todoList);

// //take new task
// function add_new(){
//     const input_task = document.getElementById('input_task');
//     if (input_task.value != ""){
//         todoList.push(input_task.value);
//         showTodos(todoList);
//         input_task.value="";
//     }
// }
        
// // Delete a specified task
// function delete_one(obj){
//     // console.log(obj);
//     // take closest li tag
//     const li = obj.closest('li');
//     // console.log(li);
//     // take array from li tags
//     const nodes = Array.from(li.closest('ul').children);
//     // console.log(nodes);
//     // remove an specified element
//     todoList.splice(nodes.indexOf(li),1);

//     showTodos(todoList);
// }

// // Fix an item
// function edit_item(obj){
//     const currentItem = obj.closest('li');
//     const nodes = Array.from(currentItem.closest('ul').children);

//     let fixed = prompt('Edit your task...');
//     if (fixed == null || fixed.trim() == "") {
//         alert('No change...');
//     }
//     else {
//         todoList[nodes.indexOf(currentItem)] = fixed;
//         showTodos(todoList);
//     }
// }