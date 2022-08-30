import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'
import PorductComponent from './ProductComponent'
const ProductListing = () => {
    // const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProducts = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            dispatch(setProducts(response.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchProducts()
    })

    return (
        <div className='ui grid container'>
            <PorductComponent />
        </div>
    )
}

export default ProductListing