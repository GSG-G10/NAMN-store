// add array to local storge
// must removed
const addArrlocalStorage = () => {
  localStorage.setItem("cards", JSON.stringify(arr));
};

// window.onload = addArrlocalStorage()

// search bar function => filtering the local storage to find the searched items

const SearchByName = (input,items) => {
  let resultSearch;
  if (items === null) {
    window.alert("Item does not found");
  } else {
    resultSearch = items.filter((item) => item.name.includes(input));
  }
  return resultSearch;
};

const FilterByCategory = (input,items) => {
  let resultSearch;
  if (items === null) {
    window.alert("Item does not found");
  } else {
    resultSearch = items.filter((item) => item.category.includes(input));
  }

  return resultSearch;
};

// Number.prototype.between = function(a, b) {
//   var min = Math.min.apply(Math, [a, b]),
//     max = Math.max.apply(Math, [a, b]);
//   return this > min && this < max;
// };

function rearrange (min,input,max) {
  if (input >= min && input <= max) {
    return true;
  } else {
    return false;
  }
}



const FilterByPrice = (minPrice,maxPrice,items) => {
  let resultSearch;
  if (items === null) {
    window.alert("Item does not found");
  } else {
    resultSearch = items.filter((item) => rearrange(parseFloat(minPrice),parseFloat(item.price),parseFloat(maxPrice)));
  }
  return resultSearch;
};
module.exports = {SearchByName,FilterByCategory,FilterByPrice}