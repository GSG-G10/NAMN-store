const buyer = document.querySelector(".buyer");
const seller = document.querySelector(".seller");
const btnSeller = document.querySelector(".switch-seller");
const btnBuyer = document.querySelector(".switch-buyer");
const headerSection = document.querySelector(".header");
const inputSearch = document.querySelector(".input-search");
const btnAdd = document.querySelector(".btn-add-product");



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
    switchBtnAddProduct();
}

function moveToSeller() {
    buyer.style.display = "none";
    seller.style.display = "flex";
    switchBtnAddProduct();
}


const arr = [{
    name: 'book7',
    imgSrc: "https://via.placeholder.com/150",
    price: "25$",
},
{
    name: 'book1',
    imgSrc: "https://via.placeholder.com/150",
    price: "40$"
}, {
    name: 'book2',
    imgSrc: "https://via.placeholder.com/150",
    price: "40$"
},
{
    name: 'book3',
    imgSrc: "https://via.placeholder.com/150",
    price: "40$"
},
{
    name: 'book4',
    imgSrc: "https://via.placeholder.com/150",
    price: "40$"
}
];


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

        img.src = arr[i].imgSrc;
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
        let pricePara = document.createElement("p");

        img.classList.add("img-product");
        pricePara.classList.add("cost");

        ele.appendChild(img);
        ele.appendChild(pricePara);

        img.src = arr[i].imgSrc;
        pricePara.textContent = arr[i].price;

        let btnRemoveItem = document.createElement("button");
        btnRemoveItem.classList.add("btn-to-removeItem");
        btnRemoveItem.textContent = "Remove the Product";
        ele.appendChild(btnRemoveItem);
    }

}

function switchBtnAddProduct() {

    btnAdd.classList.toggle("hide");
}



buildSeller();
