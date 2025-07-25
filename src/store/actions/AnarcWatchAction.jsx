import axios from "axios"
import { LoadAnarcWatch } from "../slice/AnarcWatchSlice"

export const asynGetAnarcWatch = () => async (dispatch, getState) =>{
    const anarcRes = await axios.get("https://www.layers.shop/products/anarc.json?view=anarc-new-pdp&variant=46994499436781")

    console.log(anarcRes.data);
    

    dispatch(LoadAnarcWatch(anarcRes.data))
}