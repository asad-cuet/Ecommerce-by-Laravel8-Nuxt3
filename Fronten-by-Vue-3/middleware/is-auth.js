import {useAuth} from '@/stores/auth.js'


export default defineNuxtRouteMiddleware( (to, from) => {
            
    const auth=useAuth()
    if(!auth.isLoggedIn())
    {
        navigateTo('/auth/login')
    }

} )