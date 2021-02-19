/* veggies only function */
function veggiesOnly() {
    const showVeggies = () => {
    const notVeggies = document.querySelectorAll("li:not(.veggies)");
        for (item of notVeggies){
            item.style.display = "none";
        }
    }
const showOnlyVeggiesButton = document.getElementById("show-only-veggies");
showOnlyVeggiesButton.addEventListener("click", showVeggies);
}

veggiesOnly();

/* display all function */
function displayAll() {
    const showAll = () => {
    const notVeggies = document.querySelectorAll("li:not(.veggies)");
        for (item of notVeggies){
            item.style.display = "block";
        }
    }
const displayButton = document.getElementById("display-all");
displayButton.addEventListener("click", showAll);
}

displayAll();

/* add item function */
function addItem () {
    const addNewItem = () => {
        const itemName = document.getElementById("item-name").value;
        const groceryList = document.getElementById("grocery-list");
        const isVeggie = document.getElementById("veggie").checked;
        const newItem = document.createElement("li");

        newItem.className = isVeggie? "veggies":"";
        newItem.textContent = itemName;
        groceryList.appendChild(newItem);
    }

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addNewItem);
}

addItem();

/* remove last item function */
function removeItem() {
    const removeLastItem = () => {
        const groceryList = document.getElementById("grocery-list");
        groceryList.removeChild(groceryList.lastChild); 
    }

const removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", removeLastItem);
}

removeItem();