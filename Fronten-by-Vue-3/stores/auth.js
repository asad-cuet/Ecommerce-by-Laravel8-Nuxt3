import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    const formData = ref({})
    const baseUrl='http://127.0.0.1:8000/api'


    // const doubleCount = computed(() => count.value * 2)



    
    function login() {
        isAuthenticated.value=true
    }


    async function register(form_data) {
        formData.value=form_data.value

        const response=await useFetch(baseUrl+'/register',{
            method:"post",
            body:formData.value          
            })
        console.log(response.data)
    }
  
    return { isAuthenticated, login, register,formData }
  },{
    persist: true,
  })