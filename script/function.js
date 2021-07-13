
// add array to local storge 
// must removed
const addArrlocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(arr));
}

window.onload = addArrlocalStorage()

// search bar function => filtering the local storage to find the searched items
const SearchByName = (input) => {
    let resultSearch
    let items = JSON.parse(localStorage.getItem('cards'));
    if (items === null) {
        window.alert('Item does not found')
    } else {
        resultSearch = items.filter(item => item.name.includes(input));
    }

    return resultSearch
}

const FilterByCategory = (input) => {
    let resultSearch
    let items = JSON.parse(localStorage.getItem('cards'));
    if (items === null) {
        window.alert('Item does not found')
    } else {
        resultSearch = items.filter(item => item.category.includes(input));
    }

    return resultSearch
}
