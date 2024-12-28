import { useState,useEffect } from "react";

function currencyInfo(currency){
    let [Data,setData]=useState({})
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            if (res[currency]) {
                setData(res[currency]);
            } else {
                console.error("shit dont work");
            }
        })
    },[currency])
    console.log(Data)
    return Data
}

export default currencyInfo