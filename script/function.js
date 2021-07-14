// add array to local storge
// must removed
const addArrlocalStorage = () => {
  localStorage.setItem("cards", JSON.stringify(arr));
};

// window.onload = addArrlocalStorage()

// search bar function => filtering the local storage to find the searched items
const SearchByName = (input) => {
  let resultSearch;
  let items = JSON.parse(localStorage.getItem("cards"));
  if (items === null) {
    window.alert("Item does not found");
  } else {
    resultSearch = items.filter((item) => item.name.includes(input));
  }

  return resultSearch;
};

const FilterByCategory = (input) => {
  let resultSearch;
  let items = JSON.parse(localStorage.getItem("cards"));
  if (items === null) {
    window.alert("Item does not found");
  } else {
    resultSearch = items.filter((item) => item.category.includes(input));
  }

  return resultSearch;
};

Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};


const FilterByPrice = (minPrice,maxPrice) => {
  
  let resultSearch;
  let items = JSON.parse(localStorage.getItem("cards"));
  if (items === null) {
    window.alert("Item does not found");
  } else {

    resultSearch = items.filter((item) => parseFloat(item.price.replace('$','')).between(parseFloat(minPrice), parseFloat(maxPrice)) );
  }
  return resultSearch;
};
