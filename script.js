const clear = document.getElementById("clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

function addToDo(toDo) {
  const text = (
    <li class="item">
      <i class="co fa fa-circle-thin" job="complete"></i>
      <p class="text"> ${toDo} </p>
      <i class="de fa fa-trash-o" job="delete"></i>
    </li>
  );

  const position = "beforeend";
  list.insertAdjacentHTML(position, text);
}
addToDo("drink coffee");
