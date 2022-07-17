let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let buttonDOM = document.querySelector("#liveToastBtn");

taskDOM.addEventListener("onclick",newElement)
document.addEventListener("DOMContentLoaded",getLocalStorage)

function newElement() {
    if(taskDOM.value.trim() == ""){
        $(".error").toast("show");
        taskDOM.value = "";
    }else{
        saveToLocalStorage(taskDOM.value);
        let liDOM = document.createElement("li");
        liDOM.innerHTML = taskDOM.value + '<span onclick="deleteTask(this)"; class="close">\u00D7</span>';
        listDOM.appendChild(liDOM)
        liDOM.addEventListener("click",checkTask)
        taskDOM.value = "";
        $(".success").toast("show");
    }
}

function checkTask(){
    this.classList.toggle("checked");
}

function deleteTask(item){
    item.parentElement.remove();
    let saveItem = item.parentElement.innerText.slice(0,item.parentElement.innerText.length-1); //liste içerindeki sondaki "x" silmek için
    deleteFromLocalStorage(saveItem);
}

function getLocalStorage(){
    let localItems = [];
    localItems = JSON.parse(localStorage.getItem('listItem'));
    localItems.forEach((element) => {
        const liStorageDOM = document.createElement("li");
        liStorageDOM.innerHTML = element + '<span onclick="deleteTask(this)"; class="close">\u00D7</span>';
        liStorageDOM.addEventListener("click",checkTask)
        listDOM.appendChild(liStorageDOM);
    });
}

function saveToLocalStorage(taskValue){
    let saveItems;
    if(localStorage.getItem("listItem") == null){
        saveItems = []
    }else{
        saveItems = JSON.parse(localStorage.getItem("listItem"))
    }
    saveItems.push(taskValue);
    localStorage.setItem("listItem",JSON.stringify(saveItems));
}

function deleteFromLocalStorage(itemDelete){
    let items;
    if(localStorage.getItem('listItem') == null){
        items = []
    }else{
        items = JSON.parse(localStorage.getItem('listItem'))
    }
    items.splice(items.indexOf(itemDelete),1);
    localStorage.setItem('listItem', JSON.stringify(items));
}