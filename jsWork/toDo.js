var todos = ["To Do Sample 1", "To Do Sample 2"];
var input = (prompt("What would you like to do?")).toLowerCase();


while (input != 'quit') {
    // list block
    if (input === 'list') {
        listToDo();
    }
    // new block
    else if (input === 'new') {
        // ask for new to do and add to array
        newToDo();
        listToDo();
    }
    // delete block
    else if (input === 'delete') {
        deleteItem();
        listToDo();
    }
    // more input
    input = (prompt("What would you like to do?")).toLowerCase();
}
console.log("All Done");

function listToDo() {
    console.log("***********");
    todos.forEach(function(currentElement, indexOfElem) {
        console.log(indexOfElem + ": " + currentElement);
    });
    console.log("***********");
}

function newToDo() {
    var newTodo = prompt('Enter new to do');
    todos.push(newTodo);
    console.log("Item Added!\nNew List:");
}

function deleteItem() {
    var indexDel = prompt("Enter index of to do");
    todos.splice(indexDel, 1);
    console.log("item Deleted!\nNew List:");
}
