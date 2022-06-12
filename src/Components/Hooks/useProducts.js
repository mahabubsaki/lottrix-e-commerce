import { useContext, useEffect, useState } from "react"
import { Context } from "../../App"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const { setLoading } = useContext(Context)
    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(result => setProducts(result))
        setLoading(false)
    }, [])
    return [products, setProducts]
}

export default useProducts