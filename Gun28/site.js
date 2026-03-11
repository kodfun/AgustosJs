

let todos = [
    {
        title: "Do your homework",
        done: false
    },
    {
        title: "Wash the dishes",
        done: false
    },
    {
        title: "Do your laundry",
        done: true
    },
    {
        title: "Call your uncle",
        done: true
    }
];

const divTodos = document.getElementById("todos");
const frmTask = document.getElementById("frmTask");
const txtTitle = document.getElementById("title");

frmTask.onsubmit = function(event) {
    event.preventDefault();

    const newItem = {
        title: txtTitle.value,
        done: false
    };

    todos.push(newItem);
    list();
    txtTitle.value = "";
};

function sort() {
    todos.sort((a, b) => a.done - b.done);
}

function list() {
    sort();
    divTodos.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        let checked = todo.done ? "checked": "";

        divTodos.innerHTML += `            
            <div class="todo">
                <label class="task">
                    <input type="checkbox" ${checked} onchange="updateItem(${i})">
                    <span>${todo.title}</span>
                </label>
                <button class="remove" onclick="deleteItem(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
    }
}

function deleteItem(index) {
    todos.splice(index, 1);
    list();
}

function updateItem(index) {
    todos[index].done = !todos[index].done;
    list();
}

list();