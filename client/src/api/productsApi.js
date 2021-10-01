import axios from "axios";


export function getProductsInfo(){
    return axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "/products/",
        responseType: "json"
    })
}

export function getDiscountsInfo(){
    return axios({
        method: "GET",
        url: process.env.REACT_APP_API_URL + "/products/discounts/",
        responseType: "json"
    })
}

