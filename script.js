let input = document.querySelector('.input'),
      list = document.querySelector('.list'),
      alert = document.querySelector('.alert'),
      item = document.querySelector('.text');
      

function showAlert() {
    alert.classList.remove("hide");
    alert.classList.add("show");
}

function closeAlert() {
    alert.classList.remove("show");
    alert.classList.add("hide")
}

function addTask() {
    if (input.value === '') {
        showAlert();
        
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add("text");
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("remove")
        li.appendChild(span)
        let edit = document.createElement("span");
        edit.innerHTML = "&#9998";
        edit.classList.add("pan");
        li.appendChild(edit);
    }

    alert.addEventListener('click', (e)=>{
        if (e.target = alert) {
            closeAlert();
        }
    })
    input.value = "";
    saveData();
    
}

list.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.classList == "remove") {
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.classList == "pan") {
        item.contentEditable = true;
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
};

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();