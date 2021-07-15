
// search bar function => filtering the local storage to find the searched items

const SearchByName = (input,items) => {
  let resultSearch;
  if (items === null) {
    return undefined;
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
module.exports = {SearchByName,FilterByCategory,FilterByPrice,rearrange}