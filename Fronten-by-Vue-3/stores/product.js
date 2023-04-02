import { defineStore } from 'pinia'
import axios from "axios";


export const useProduct = defineStore('product', () => {

    const baseUrl='http://127.0.0.1:8000/api'
    const response=ref({})
    const products=ref(null)
    const productsLoading=ref(true)


    axios.get(baseUrl+'/products')      
    .then((res)=>{
        response.value=res.data
        if(response.value.success)
        {
            productsLoading.value=false
            products.value=response.value.data
        }
        }) 
    .catch((error)=>{
        productsLoading.value=false
        console.log(error)
        })



    
        
    

    // const doubleCount = computed(() => count.value * 2)
    // function appendProduct(formData) {

    // }
    function getProduct(_id) {
        return products.value.find(product=> {
            if(product.id.toString() === _id)
            {
                return product
            }
        })

    }
    // function updateProduct(fromData,id) {

    // }
    // function deleteProduct(id) {

    // }
  
    return { products,productsLoading, getProduct }
  },{
    persist: true,
  })