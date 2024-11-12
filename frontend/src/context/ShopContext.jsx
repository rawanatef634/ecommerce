import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$'
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please select a size")
            return
        }
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size]++;
            } else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        if (token) {
            try {
            await axios.post(backendUrl + '/api/user/addToCart', { cartData }, { headers: { Authorization: token } })
            } catch (e) {
                console.log(e)
            }
        } else {
            localStorage.setItem('cartItems', JSON.stringify(cartData))
        }
    }
    const getCartCount = () => {
        let totalCount = 0
        for(const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
        if (token) {
            try {
            await axios.post(backendUrl + '/api/user/updateCart', { itemId, size, quantity }, { headers: { Authorization: token } })
            } catch (e) {
                console.log(e)
            }
        } else {
            localStorage.setItem('cartItems', JSON.stringify(cartData))
        }
    }
    const getCartAmount = () => {
        let totalAmount = 0
        for(const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0) {
                        totalAmount += products.find((product) => product._id === items).price * cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.status === 200) {
                setProducts(response.data.products)
            }
        } catch (e) {
            console.log(e)
            toast.error(e.message)
        }
    }
    const getUserCart = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/user/getCart', { headers: { Authorization: token } })
            if (response.status === 200) {
                setCartItems(response.data.cart)
            }
        } catch (e) {
            console.log(e)
            toast.error(e.message)
        }
    }
    useEffect(() => {
        getProductsData()
    }, [])
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
        }, [])
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token
        // Add more values as needed, like cart, user, etc.
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;