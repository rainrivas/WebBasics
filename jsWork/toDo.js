var todos = [];
var input = (prompt("What would you like to do?")).toLowerCase();

while (input != 'quit') {
    // list block
    if (input === 'list') {
        console.log(todos);
    }

    // new block
    else if (input === 'new') {
        // ask for new to do and add to array
        var newTodo = prompt('Enter new to do');
        todos.push(newTodo);
    }
    // more input
    input = (prompt("What would you like to do?")).toLowerCase();
}
console.log("aight, we done");
