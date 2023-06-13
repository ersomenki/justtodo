window.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('.input-row'),
          input = document.querySelector('.input'),
          taskList = document.querySelector('.tasks'),
          alert = document.querySelector('.alert');


    function showAlert() {
        alert.classList.remove("hide");
        alert.classList.add("show");
    }
        
    function closeAlert() {
        alert.classList.remove("show");
        alert.classList.add("hide")
    }

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        if(input.value === '') {
            showAlert();
        } else {
            const task = input.value;

            const taskEl = document.createElement('div');
            taskEl.classList.add('task');

            const taskContentEl = document.createElement('div');
            taskContentEl.classList.add('content');

            taskEl.appendChild(taskContentEl);

            const taskInputEl = document.createElement('input');
            taskInputEl.classList.add('text');
            taskInputEl.type = 'text';
            taskInputEl.value = task;
            taskInputEl.setAttribute('readonly', 'readonly');

            taskContentEl.appendChild(taskInputEl);

            const taskActionsEl = document.createElement('div');
            taskActionsEl.classList.add('actions');

            const taskFavoriteEl = document.createElement('button');
            taskFavoriteEl.classList.add('favorite');
            taskFavoriteEl.innerText = '\u2606';

            const taskEditEl = document.createElement('button');
            taskEditEl.classList.add('edit');
            taskEditEl.innerText = '\u270E';

            const taskRemoveEl = document.createElement('button');
            taskRemoveEl.classList.add('remove');
            taskRemoveEl.innerText = '\u00d7';

            taskActionsEl.appendChild(taskEditEl);
            taskActionsEl.appendChild(taskRemoveEl);
            taskActionsEl.appendChild(taskFavoriteEl);

            taskEl.appendChild(taskActionsEl);
            taskList.appendChild(taskEl);

            input.value = '';

            taskEditEl.addEventListener('click', (e)=> {
                if(taskEditEl.innerText.toLocaleLowerCase() == "\u270E") {
                    taskEditEl.innerText = "\u2713";
                    taskInputEl.removeAttribute("readonly");
                    taskInputEl.focus();
                } else {
                    taskEditEl.innerText = "\u270E";
                    taskInputEl.setAttribute("readonly", "readonly");
                }
            });

            taskRemoveEl.addEventListener('click', ()=> {
                taskList.removeChild(taskEl);
    
            })

            taskFavoriteEl.addEventListener('click', ()=>{
                if(taskFavoriteEl.innerText.toLocaleLowerCase() == "\u2606") {
                    taskFavoriteEl.classList.add('active');
                    taskFavoriteEl.innerText = "\u2605";
                } else {
                    taskFavoriteEl.classList.remove('active');
                    taskFavoriteEl.innerText = "\u2606";
                }
                
            })

            let item = document.querySelector('text');

            item.addEventListener('click', ()=> {
                item.classList.add('checked');
            })

            saveData()
        }

        document.addEventListener('click', (e)=>{
            if (e.target != alert) {
                closeAlert();
            }
        })

        function saveData(){
            localStorage.setItem("data", taskList.innerHTML);
        };
        
        function showTask(){
            taskList.innerHTML = localStorage.getItem("data");
        }
        showTask();
        
    });
})
