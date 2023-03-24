var form = document.querySelector(".form");
var inputMain = document.querySelector(".input__main");
var list = document.querySelector(".list");
var does = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var newDoes = {
    id: 1,
    task: inputMain.value,
  };

  does.push(newDoes);
  inputMain.value = null;
  list.innerHTML = null;

  for (var i = 0; i < does.length; i++) {
    var li = document.createElement("li");
    li.className =
      "pt-2 pb-1 px-2 flex justify-between border-b-2 rounded-lg items-baseline";
    list.appendChild(li);

    var label = document.createElement("label");
    label.className = "b-contain";
    li.appendChild(label);

    var chekInput = document.createElement("input");
    chekInput.type = "checkbox";
    label.appendChild(chekInput);

    var span = document.createElement("span");
    span.textContent = does[i].task;
    label.appendChild(span);

    var bgChekbox = document.createElement("div");
    bgChekbox.className = "b-input";
    label.appendChild(bgChekbox);

    var btn = document.createElement("button");
    btn.className = "font-medium";
    btn.textContent = "X";
    li.appendChild(btn);
  }
});
