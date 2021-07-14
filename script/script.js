const buyer = document.querySelector(".buyer");
const seller = document.querySelector(".seller");
const btnSeller = document.querySelector(".switch-seller");
const btnBuyer = document.querySelector(".switch-buyer");
const headerSection = document.querySelector(".header");
const inputSearch = document.querySelector(".input-search");
const btnAdd = document.querySelector(".btn-add-product");
<<<<<<< HEAD
const productForm = document.getElementById("product-form");
const arrOfInputs = document.querySelectorAll(".input");

let id = 0;
=======
const catagoriesFiltter = document.querySelector(".catagoriesFiltter");

const priceSearch = document.querySelector(".priceSearch");
>>>>>>> 63bae9746152f189795d408be21e7b23054c7546

btnSeller.addEventListener("click", moveToSeller);
btnBuyer.addEventListener("click", moveToBuyer);

// displays the filtered(searched) items and removes the non-searched ones
<<<<<<< HEAD
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


const arr = [
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

        img.src = arr[i].src;
        name.textContent = arr[i].name;
        pricePara.textContent = arr[i].price;

        let btnAddToCard = document.createElement("button");
        btnAddToCard.classList.add("btn-to-addCard");
        btnAddToCard.textContent = "add to card";
        ele.appendChild(btnAddToCard);
    }
}

function buildSeller(arr) {
    let itemsInThePage = document.querySelectorAll(".item");
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
=======
const updateResultName = () => {
  let result = SearchByName(inputSearch.value);
  buyer.innerHTML = "";
  if (result.length == 0) {
    buildBuyer(result);
    let error = document.createElement("h2");
    error.classList.add("error-message");
    buyer.appendChild(error);
    error.textContent = "Item does not found";
  } else {
    buildBuyer(result);
  }
};

// search by category
const updateResultCategory = () => {
  if (catagoriesFiltter.value === "all") {
    let items = JSON.parse(localStorage.getItem("cards"));
    buildBuyer(items);
  } else {
    let result = FilterByCategory(catagoriesFiltter.value);
    buyer.innerHTML = "";
    buildBuyer(result);
  }
};

const updateResultPrice = () => {
    let minPrice = document.querySelector(".minPrice").value;
    let maxPrice = document.querySelector(".maxPrice").value;
    let result = FilterByPrice(minPrice,maxPrice);
    buyer.innerHTML = "";
    buildBuyer(result);
};




catagoriesFiltter.addEventListener("change", updateResultCategory);

inputSearch.addEventListener("input", updateResultName);
priceSearch.addEventListener("click", updateResultPrice);

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

const arr = [
  {
    name: "book7",
    imgSrc: "https://via.placeholder.com/150",
    price: "25$",
    category: "vegetables",
  },
  {
    name: "book1",
    imgSrc: "https://via.placeholder.com/150",
    price: "40$",
    category: "vegetables",
  },
  {
    name: "book2",
    imgSrc: "https://via.placeholder.com/150",
    price: "40$",
    category: "vegetables",
  },
  {
    name: "book3",
    imgSrc: "https://via.placeholder.com/150",
    price: "40$",
    category: "vegetables",
  },
  {
    name: "book4",
    imgSrc: "https://via.placeholder.com/150",
    price: "40$",
    category: "fruits",
  },
];

function buildBuyer(arr) {
  let itemsInThePage = document.querySelectorAll(".item");
  for (i of itemsInThePage) {
    i.remove();
  }
  if(arr == undefined){
    console.log(undefined)
  }else{

  for (let i = 0; i < arr.length; i++) {
    let ele = document.createElement("div");
    ele.classList.add("item");
    buyer.appendChild(ele);
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let pricePara = document.createElement("p");
    img.classList.add("img-product");
    name.classList.add("name-product");
    pricePara.classList.add("cost");
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
}

buildBuyer(arr);

function buildSeller() {
  for (let i = 0; i < arr.length; i++) {
    let ele = document.createElement("div");
    ele.classList.add("item");
    seller.appendChild(ele);

    let img = document.createElement("img");
    let pricePara = document.createElement("p");

    img.classList.add("img-product");
    pricePara.classList.add("cost");

    ele.appendChild(img);
    ele.appendChild(pricePara);
>>>>>>> 63bae9746152f189795d408be21e7b23054c7546

    img.src = arr[i].imgSrc;
    pricePara.textContent = arr[i].price;

    let btnRemoveItem = document.createElement("button");
    btnRemoveItem.classList.add("btn-to-removeItem");
    btnRemoveItem.textContent = "Remove the Product";
    ele.appendChild(btnRemoveItem);
  }
}

<<<<<<< HEAD

function showBtnAddProduct() {
    btnAdd.classList.remove("hide");
}

function hideBtnAddProduct() {
    btnAdd.classList.add("hide");
=======
function switchBtnAddProduct() {
  btnAdd.classList.toggle("hide");
>>>>>>> 63bae9746152f189795d408be21e7b23054c7546
}

btnAdd.addEventListener("click", displayForm);

function displayForm() {
<<<<<<< HEAD
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
    objectOfNewProduct["id"] = arr.length +1 ;
    
    let oldItems = JSON.parse(localStorage.getItem("cards"));
    if (oldItems == null || oldItems == 'null'){
        let new_arr = []
        new_arr.push(objectOfNewProduct)
        
        localStorage.setItem("cards", JSON.stringify(new_arr));
        
    }else{
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

function Updateonload(){
    moveToBuyer()
}
window.onload = Updateonload();
=======
  const productForm = document.getElementById("product-form");
  productForm.classList.remove("hide");
}
buildSeller();
>>>>>>> 63bae9746152f189795d408be21e7b23054c7546
