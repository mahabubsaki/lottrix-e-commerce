const deleteFromDb = (id) => {
    const store = JSON.parse(localStorage.getItem('pockieDB'))
    delete store[id]
    localStorage.setItem('pockieDB', JSON.stringify(store))
}
export default deleteFromDb