const app = document.getElementById("app");

const container = document.createElement("div");
container.id = "main";
container.classList.add("container");
app.append(container);

const header = document.createElement("h1");
header.textContent = "Basketball Game"
container.append(header);

const label = document.createElement("h2");
label.textContent = "Name:"
container.append(label);
document.getElementById("label").after(header);

const list = document.createElement("ul");
list.id = "list"
list.classList.add("list-group", "pt-3", "pb-2")
container.append(list);
document.getElementById("list").after(label);

const listControl = document.createElement("div");
listControl.id = "listControl"
listControl.classList.add("input-group");
// container.append(listControl);
document.getElementById("list").after(listControl);

const listBtn = document.createElement("button");
listBtn.id = "listBtn"
listBtn.classList