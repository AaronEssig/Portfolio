

let eingabeFeld = document.getElementById("todoInput");
let addButton = document.getElementById("addBtn");

addButton.addEventListener("click", function() {
    newTodo();
});

eingabeFeld.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        newTodo();
    }
});

function newTodo() {
    let neuerText = eingabeFeld.value;
    if (neuerText !== "") {
        let neuesLi = document.createElement("li");
        let neueCheckbox = document.createElement("input");
        neueCheckbox.type = "checkbox";
        neueCheckbox.classList.add("toggle");
        neuesLi.textContent = neuerText;
        neuesLi.insertBefore(neueCheckbox, neuesLi.firstChild);
        document.getElementById("todo").appendChild(neuesLi);
        eingabeFeld.value = "";
    } else {
        alert("Bitte gib ein Todo ein!");
    }
}

document.addEventListener("change", function(event) {
    if (event.target.classList.contains("toggle")) {
        let aktuellesLi = event.target.closest("li");
        if (event.target.checked) {
            document.getElementById("done").appendChild(aktuellesLi);
        } else {
            document.getElementById("todo").appendChild(aktuellesLi);
        }
    }
});
