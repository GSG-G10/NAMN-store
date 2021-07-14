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
btnSeller.addEventListener("click", moveToSeller);
btnBuyer.addEventListener("click", moveToBuyer);
const ordersBtn = document.querySelector(".cart");
const ordersSection = document.querySelector(".orders")
const gridBar = document.querySelector(".grid-list")

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



inputSearch.addEventListener('input', updateResultName);
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
    ordersSection.style.display="none"
    hideBtnAddProduct();
    btnSeller.disabled = false;
    btnBuyer.disabled = true;
    let items = JSON.parse(localStorage.getItem("cards"));
    buildBuyer(items);


}

function moveToSeller() {
    buyer.style.display = "none";
    seller.style.display = "flex";
    ordersSection.style.display="none"
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

        img.src = arr[i].url;
        name.textContent = arr[i].name;
        pricePara.textContent = arr[i].price;

        let btnAddToCard = document.createElement("button");
        btnAddToCard.classList.add("btn-to-addCard");
        btnAddToCard.setAttribute("id", arr[i].name);
        btnAddToCard.setAttribute("onclick", "add(event);");/*---*/
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
        btnRemoveItem.setAttribute("id", arr[i].name);
        btnRemoveItem.setAttribute("onclick", "remove(event);");
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
    const arrOfInputs = document.querySelectorAll(".input");

    let objectOfNewProduct = {}

    objectOfNewProduct["name"] = arrOfInputs[0].value
    objectOfNewProduct["url"] = arrOfInputs[1].value;
    objectOfNewProduct["price"] = arrOfInputs[2].value;
    objectOfNewProduct["category"] = arrOfInputs[3].value;

    // let indexOfItem =
    arr.push(objectOfNewProduct);
    // console.log(indexOfItem)
    //editSection();

    objectOfNewProduct["id"] = arr.length + 1;

    let oldItems = JSON.parse(localStorage.getItem("cards"));
    if (oldItems == null || oldItems == 'null') {
        let new_arr = []
        new_arr.push(objectOfNewProduct)

        localStorage.setItem("cards", JSON.stringify(new_arr));

    } else {
        oldItems.push(objectOfNewProduct)
        localStorage.removeItem("cards")
        localStorage.setItem("cards", JSON.stringify(oldItems));

    }

    let items = JSON.parse(localStorage.getItem("cards"));
    updateSections(items);

}



// function editSection() {

//     buyer.textContent = null;

//     buildBuyer(arr);
//     buildSeller();
// }
//  remove product
function remove(event) {
    let s = event.target;
    let items = JSON.parse(localStorage.getItem("cards"));
    for (let i = 0; i < items.length; i++) {
        if (s.id == items[i].name) {
            items.splice(i, 1);
        }
    }
    let element = document.getElementById(s.id);
    element.parentNode.remove();
    localStorage.removeItem("cards")
    localStorage.setItem("cards", JSON.stringify(items));
}


function add(event) {
    let s = event.target;
    let items = JSON.parse(localStorage.getItem("cards"));
    let ordersProduct = JSON.parse(localStorage.getItem("orders"));
    console.log(ordersProduct)
    
    let resultSearch = items.filter((item) => item.name.includes(s.id));
    if (ordersProduct == null) {
        localStorage.setItem("orders", JSON.stringify(resultSearch))
    } else {
        ordersProduct.push(resultSearch[0])
        localStorage.removeItem("orders")
        localStorage.setItem("orders", JSON.stringify(ordersProduct))
        console.log(s.id)
        console.log(resultSearch)
    }

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


ordersBtn.addEventListener("click", showOrderSection)

function showOrderSection () {
    buyer.style.display = "none"
    seller.style.display = "none"
    gridBar.style.display = "none"
    ordersSection.style.display = "flex";

    let arrayOfOrders = JSON.parse(localStorage.getItem("orders"))

    for (i of arrayOfOrders){
        let quant = arrayOfOrders.reduce ((acc, curr) => {
            let quantit = curr.name;
            if(arrayOfOrders.lastIndexOf(quantit)===arrayOfOrders.indexOf(quantit)){
                return acc = acc+ curr;
           }
           return acc
          
        },0)

        createRow(i, quant);
        
    }


    
}


function createRow (row, Quantity){
    const table = document.querySelector(".ord")
    const createR = document.createElement("tr");
    table.appendChild(createR)

    let createCell;

        createCell = document.createElement("td")
        createCell.textContent = row["name"]
        createR.appendChild(createCell)
        createCell = document.createElement("td")
        createCell.textContent = row["price"]
        createR.appendChild(createCell)
        createCell = document.createElement("td")
        createCell.textContent = row["catagory"]
        createR.appendChild(createCell)
        createCell = document.createElement("td")
        createCell.textContent = Quantity
        createR.appendChild(createCell)


}