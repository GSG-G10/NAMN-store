const buyer = document.querySelector(".buyer");
const seller = document.querySelector(".seller");
const btnSeller = document.querySelector(".switch-seller");
const btnBuyer = document.querySelector(".switch-buyer");
const headerSection = document.querySelector(".header");
const inputSearch = document.querySelector(".input-search");
const btnAdd = document.querySelector(".btn-add-product");
const productForm = document.getElementById("product-form");
const arrOfInputs = document.querySelectorAll(".input");

let id = 0;

btnSeller.addEventListener("click", moveToSeller);
btnBuyer.addEventListener("click", moveToBuyer);

// displays the filtered(searched) items and removes the non-searched ones
const updateResult = () => {
    let result = SearchByName(inputSearch.value);
    buyer.innerHTML = '';
    if (result.length == 0) {
        buildBuyer(result);
        let error = document.createElement("h2");
        error.classList.add("error-message");
        buyer.appendChild(error);
        error.textContent = "Item does not found";
    } else {
        buildBuyer(result);
    }

}

inputSearch.addEventListener('input', updateResult);

function moveToBuyer() {
    seller.style.display = "none";
    buyer.style.display = "flex";
    hideBtnAddProduct();
    btnSeller.disabled = false;
    btnBuyer.disabled = true;

}

function moveToSeller() {
    buyer.style.display = "none";
    seller.style.display = "flex";
    showBtnAddProduct();
    btnSeller.disabled = true;
    btnBuyer.disabled = false;


}


const arr = [{
    name: 'book7',
    url: "https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765",
    price: 25,
    category: "fruits",
    id: 0,
}];




function buildBuyer(arr) {
    let itemsInThePage = document.querySelectorAll(".item");
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
        btnAddToCard.textContent = "add to card";
        ele.appendChild(btnAddToCard);
    }
}

buildBuyer(arr);


function buildSeller() {

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
buildSeller();


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


    arr.push(objectOfNewProduct);
    updateSections();

}

function updateSections() {
    buildBuyer(arr);
    buildSeller();
    hideForm();
}



// function updateSections (current,next){
//     if (next != current) {
//         localStorage.setItem('cards', JSON.stringify(arr));
//         let items = JSON.parse(localStorage.getItem('cards'));
//         buildSeller(items);
//         buildBuyer(items);
//         hideForm();
//     }
// }



// let current = arr.length
// let next = arr.length
// // updateSections(current,next);
