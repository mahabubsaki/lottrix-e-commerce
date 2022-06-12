const updateQuantity = (id, quantity) => {
    const store = JSON.parse(localStorage.getItem('pockieDB'))
    store[id] = quantity
    localStorage.setItem('pockieDB', JSON.stringify(store))
}
export default updateQuantity