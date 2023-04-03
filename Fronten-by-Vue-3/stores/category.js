import { defineStore } from 'pinia'
import axios from "axios";


export const useCategory = defineStore('category', () => {

    const baseUrl='http://127.0.0.1:8000/api'
    const response=ref({})
    const categories=ref(null)
    const categoryProducts=ref(null)
    const categoriesLoading=ref(true)


    axios.get(baseUrl+'/categories')      
    .then((res)=>{
        response.value=res.data
        if(response.value.success)
        {
            categoriesLoading.value=false
            categories.value=response.value.data
        }
        }) 
    .catch((error)=>{
        categoriesLoading.value=false
        console.log(error)
        })


    function getCategory(_id) {
        // return categories.value.filter(category=> {
        //     if(category.id.toString() === _id)
        //     {
        //         return category
        //     }
        // })
        const categoriesLoading=ref(true)
        return axios.get(baseUrl+'/categories/'+_id)      
        .then((res)=>{
            response.value=res.data
            if(response.value.success)
            {
                categoriesLoading.value=false
                categoryProducts.value=response.value.data
                return categoryProducts.value
            }
            }) 
        .catch((error)=>{
            categoriesLoading.value=false
            alert(error)
        })

        

    }

  
    return { categories,categoriesLoading, getCategory }
  },{
    persist: true,
  })