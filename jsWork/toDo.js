var todos = ["To Do Sample 1", "To Do Sample 2"];
var input = (prompt("What would you like to do?")).toLowerCase();


while (input != 'quit') {
    // list block
    if (input === 'list') {
        console.log("***********");
        todos.forEach(function(currentElement, indexOfElem) {
            console.log(indexOfElem + ": " + currentElement);
        });
        console.log("***********");
    }
    // new block
    else if (input === 'new') {
        // ask for new to do and add to array
        var newTodo = prompt('Enter new to do');
        todos.push(newTodo);
        console.log("item Added!");
    }
    // delete block
    else if (input === 'delete') {
        var indexDel = prompt("Enter index of to do");
        todos.splice(indexDel, 1);
        console.log("item Deleted!");
    }
    // more input
    input = (prompt("What would you like to do?")).toLowerCase();
}
console.log("All Done");
