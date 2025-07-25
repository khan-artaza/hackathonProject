import axios from "axios";
import { loadProduct } from "../slice/ProductSlice";

export const asyncGetProduct = () => async (dispatch, getState) => {
    const prodRes = await axios.get("https://www.layers.shop/collections/anarc-skin/products.json")

    // console.log(prodRes.data.products);
    dispatch(loadProduct(prodRes.data.products))
}