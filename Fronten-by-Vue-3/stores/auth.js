import { defineStore } from 'pinia'
import axios from "axios";

export const useAuth = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    const response=ref({})
    const user=ref({
        name:'',
        token:'',
        user_id:''
    })
    const isLoading=ref(false)
    const baseUrl='http://127.0.0.1:8000/api'


    // const doubleCount = computed(() => count.value * 2)



    function isLoggedIn()
    {
        return isAuthenticated.value
    }


    function getUser()
    {
        return {
            name: user.value.name,
            token: user.value.token
        }
    }


    function register(form_data) {
        isLoading.value=true
        axios.post(baseUrl+'/register',form_data.value)      
              .then((res)=>{
                response.value=res.data
                if(response.value.success)
                {
                    doLogin(response)
                    isLoading.value=false
                    navigateTo('/auth/profile')
                }
               }) 
              .catch((error)=>{
                  console.log(error)
                  isLoading.value=false
               })
    }


    
    function login(form_data) {
        isLoading.value=true
        axios.post(baseUrl+'/login',form_data.value)      
        .then((res)=>{
          response.value=res.data
          if(response.value.success)
          {
                doLogin(response)
                isLoading.value=false
                navigateTo('/auth/profile')
          }
         }) 
        .catch((error)=>{
            console.log(error)
            isLoading.value=false
         })
    }

    function logout()
    {
        isLoading.value=true
        axios.post(baseUrl+'/logout',user.value)      
              .then((res)=>{
                response.value=res.data
                if(response.value.success)
                {
                    isAuthenticated.value=false
                    user.value={}
                    isLoading.value=false
                    navigateTo('/auth/login')
                }
               }) 
              .catch((error)=>{
                  console.log(error)
                  isLoading.value=false
               })
    }

    function authGuard()
    {
        if(!isAuthenticated.value)
        {
            navigateTo('/auth/login')
        }
    }

    function guest()
    {
        if(isAuthenticated.value)
        {
            navigateTo('/auth/profile')
        }
    }

    function doLogin(response)
    {
        isAuthenticated.value=true
        user.value.name=response.value.user.name
        user.value.token=response.value.user.token
        user.value.user_id=response.value.user.user_id
    }



  
    return { isAuthenticated,user,response,isLoading,register, login, logout, isLoggedIn, authGuard, guest }
  },{
    persist: {
        storage: persistedState.cookiesWithOptions({
          sameSite: 'strict',
        }),
      },
  })