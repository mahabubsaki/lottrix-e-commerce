const addToDb = (quantity, id) => {
    const store = JSON.parse(localStorage.getItem('pockieDB'))
    let storeObj
    if (!store) {
        storeObj = {}
    }
    else {
        storeObj = store
    }
    if (!storeObj[id]) {
        storeObj[id] = quantity
    }
    else {
        storeObj[id] = storeObj[id] + quantity
    }
    localStorage.setItem('pockieDB', JSON.stringify(storeObj))
}
export default addToDb