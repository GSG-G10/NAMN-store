const buyer = document.querySelector(".buyer");
const seller = document.querySelector(".seller");
const btnSeller = document.querySelector(".switch-seller")
const btnBuyer = document.querySelector(".switch-buyer")
const headerSection = document.querySelector(".header");
const btnAdd = document.querySelector(".btn-add-product");



btnSeller.addEventListener("click", moveToSeller);
btnBuyer.addEventListener("click", moveToBuyer);


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
        imgSrc: "./7188506-1536497674.jpg",
        price: "25$",
    },
    {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    }, {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    },
    {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    },
    {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    },
    {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    },
    {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    }, {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    },
    {
        imgSrc: "./7188506-1536497674.jpg",
        price: "40$"
    },
];


function buildBuyer() {

    for (let i = 0; i < arr.length; i++) {
        let ele = document.createElement("div")
        ele.classList.add("item");
        buyer.appendChild(ele);

        let img = document.createElement("img");
        let pricePara = document.createElement("p");

        img.classList.add("img-product");
        pricePara.classList.add("cost")

        ele.appendChild(img);
        ele.appendChild(pricePara);

        img.src = arr[i].imgSrc;
        pricePara.textContent = arr[i].price;
        let btnAddToCard = document.createElement("button");
        btnAddToCard.classList.add("btn-to-addCard");
        btnAddToCard.textContent = "add to card";
        ele.appendChild(btnAddToCard);
    }

}

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


buildBuyer();
buildSeller();