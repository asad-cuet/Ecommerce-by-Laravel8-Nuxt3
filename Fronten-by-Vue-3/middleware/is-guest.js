import {useAuth} from '@/stores/auth.js'

export default defineNuxtRouteMiddleware( () => {
           
    const auth=useAuth()
    if(auth.isLoggedIn())
    {
        navigateTo('/auth/profile')
    }

} )