const buyer = document.querySelector(".buyer");
const seller = document.querySelector(".seller");
const btnSeller = document.querySelector(".switch-seller");
const btnBuyer = document.querySelector(".switch-buyer");
const headerSection = document.querySelector(".header");
const inputSearch = document.querySelector(".input-search");
const btnAdd = document.querySelector(".btn-add-product");
const productForm = document.getElementById("product-form");
const arrOfInputs = document.querySelectorAll(".input");
const catagoriesFiltter = document.querySelector(".catagoriesFiltter");
const priceSearch = document.querySelector(".priceSearch");
const grid = document.querySelector(".grid");
const list = document.querySelector(".list");

let id = 0;

btnSeller.addEventListener("click", moveToSeller);
btnBuyer.addEventListener("click", moveToBuyer);


const gridToList = () => {
    const items = document.querySelectorAll(".item");
    for (item of items) {
        item.style.width = '100%';
    }
}

list.addEventListener("click", gridToList);

const listToGrid = () => {
    const items = document.querySelectorAll(".item");
    for (item of items) {
        if (window.screen.width <= 375) {
            item.style.width = '100%';
        } else if (window.screen.width <= 425) {
            item.style.width = '50%';
        } else {
            item.style.width = '30%';
        }
    }
}

grid.addEventListener("click", listToGrid);


// displays the filtered(searched) items and removes the non-searched ones
const updateResultName = () => {
    let result = SearchByName(inputSearch.value);
    buyer.textContent = "";
    if (result.length == 0) {
        buildBuyer(result);
        let error = document.createElement("h2");
        error.classList.add("error-message");
        buyer.appendChild(error);
        error.textContent = "Item does not found";
    } else {
        buildSeller(result);
        buildBuyer(result);
    }
};
const updateResultCategory = () => {
    if (catagoriesFiltter.value === "all") {
        let items = JSON.parse(localStorage.getItem("cards"));
        buildBuyer(items);
    } else {
        let result = FilterByCategory(catagoriesFiltter.value);
        buyer.textContent = "";
        buildSeller(result);
        buildBuyer(result);
    }
};

const updateResultPrice = () => {
    let minPrice = document.querySelector(".minPrice").value;
    let maxPrice = document.querySelector(".maxPrice").value;
    let result = FilterByPrice(minPrice, maxPrice);
    buyer.textContent = "";
    buildSeller(result);
    buildBuyer(result);
};

catagoriesFiltter.addEventListener("change", updateResultCategory);
priceSearch.addEventListener("click", updateResultPrice);
inputSearch.addEventListener('input', updateResultName);

function moveToBuyer() {
    seller.style.display = "none";
    buyer.style.display = "flex";
    hideBtnAddProduct();
    btnSeller.disabled = false;
    btnBuyer.disabled = true;
    let items = JSON.parse(localStorage.getItem("cards"));
    buildBuyer(items);


}

function moveToSeller() {
    buyer.style.display = "none";
    seller.style.display = "flex";
    showBtnAddProduct();
    btnSeller.disabled = true;
    btnBuyer.disabled = false;
    let items = JSON.parse(localStorage.getItem("cards"));
    buildSeller(items);
}


const arr = [{
    name: 'Carrot',
    imgSrc: "https://images.unsplash.com/photo-1601493700750-58796129ebb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80",
    price: "25$",
    category: 'vegetables'
},
{
    name: 'book1',
    imgSrc: "https://via.placeholder.com/150",
    price: "40$",
    category: 'vegetables'

}, {
    name: 'book2',
    imgSrc: "https://via.placeholder.com/150",
    price: "40$",
    category: 'vegetables'

}
];

function buildBuyer(arr) {
    let itemsInThePage = document.querySelectorAll(".buyer .item");
    for (i of itemsInThePage) {
        i.remove()
    }

    for (let i = 0; i < arr.length; i++) {
        let ele = document.createElement("div")
        ele.classList.add("item");
        buyer.appendChild(ele);
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let pricePara = document.createElement("p");
        img.classList.add("img-product");
        name.classList.add("name-product");
        pricePara.classList.add("cost")
        ele.appendChild(img);
        ele.appendChild(name);
        ele.appendChild(pricePara);

        img.src = arr[i].src;
        name.textContent = arr[i].name;
        pricePara.textContent = arr[i].price;

        let btnAddToCard = document.createElement("button");
        btnAddToCard.classList.add("btn-to-addCard");
        btnAddToCard.textContent = "Add to card";
        ele.appendChild(btnAddToCard);
    }
}

function buildSeller(arr) {

    let itemsInThePage = document.querySelectorAll(".seller .item");
    for (i of itemsInThePage) {
        i.remove()
    }
    itemsInThePage = document.querySelectorAll(".item");


    for (let i = 0; i < arr.length; i++) {
        let ele = document.createElement("div")
        ele.classList.add("item");
        seller.appendChild(ele);

        let img = document.createElement("img");
        let name = document.createElement("h3");
        let pricePara = document.createElement("p");

        img.classList.add("img-product");
        name.classList.add("name-product");
        pricePara.classList.add("cost");

        ele.appendChild(img);
        ele.appendChild(name);
        ele.appendChild(pricePara);

        img.src = arr[i].url;
        name.textContent = arr[i].name;
        pricePara.textContent = arr[i].price;

        let btnRemoveItem = document.createElement("button");
        btnRemoveItem.classList.add("btn-to-removeItem");
        btnRemoveItem.textContent = "Remove the Product";
        ele.appendChild(btnRemoveItem);
    }

}


function showBtnAddProduct() {
    btnAdd.classList.remove("hide");
}

function hideBtnAddProduct() {
    btnAdd.classList.add("hide");
}

btnAdd.addEventListener("click", displayForm);

function displayForm() {
    for (let i = 0; i < arrOfInputs.length; i++) {
        arrOfInputs[i].value = ""
    }

    productForm.classList.remove("hide");

}

function hideForm() {
    productForm.classList.add("hide");
}

// function for submit button

const submitBtn = document.querySelector(".btn-add");
submitBtn.addEventListener("click", saveInputValue)

function saveInputValue() {

    let objectOfNewProduct = {}

    objectOfNewProduct["name"] = arrOfInputs[0].value
    objectOfNewProduct["url"] = arrOfInputs[1].value;
    objectOfNewProduct["price"] = arrOfInputs[2].value;
    objectOfNewProduct["category"] = arrOfInputs[3].value;
    objectOfNewProduct["id"] = arr.length + 1;

    let oldItems = JSON.parse(localStorage.getItem("cards"));
    if (oldItems == null || oldItems == 'null') {
        let new_arr = []
        new_arr.push(objectOfNewProduct)

        localStorage.setItem("cards", JSON.stringify(new_arr));

    } else {
        oldItems.push(objectOfNewProduct)
        localStorage.clear()
        localStorage.setItem("cards", JSON.stringify(oldItems));

    }

    let items = JSON.parse(localStorage.getItem("cards"));
    updateSections(items);

}

function updateSections(items) {
    buildBuyer(items);
    buildSeller(items);
    hideForm();
}

function Updateonload() {
    moveToBuyer()
}
window.onload = Updateonload();