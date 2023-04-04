import { defineStore } from 'pinia'
import {useAuth} from '@/stores/auth.js'
import axios from "axios";



export const useOrder = defineStore('order', () => {
    const auth=useAuth()
    const isLoading=ref(false)
    const response=ref({})
    const baseUrl='http://127.0.0.1:8000/api'



    function getOrders()
    {
        isLoading.value=true
        if(auth.user.name==="")
        {
            isLoading.value=false
            return false
        }
        else
        {
            
            return axios.post(baseUrl+'/my-orders',auth.user)      
                        .then((res)=>{
                        response.value=res.data
                        if(response.value.success)
                        {
                            isLoading.value=false
                            return response.value.data

                        }
                        }) 
                        .catch((error)=>{
                            console.log(error)
                            isLoading.value=false
                        })
        }

    }



    return {  getOrders }
},{
  persist: true,
})