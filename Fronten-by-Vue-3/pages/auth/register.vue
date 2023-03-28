<template>
    <div style="wdth:100%;max-width:400px;margin:auto;">
        <form @submit.prevent="handleRegister()" class="row g-3">
                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Name</label>
                    <input v-model="name" type="text" class="form-control" id="inputName">
                </div>
                <div class="col-md-12">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input v-model="email" type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Confirm Password</label>
                    <input v-model="c_password" type="password" class="form-control" id="inputPassword4">
                </div>

                <div class="col-12" v-if="!auth.isLoading">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
                <div class="col-12" v-else>
                    <button type="submit" class="btn btn-primary" disabled>Loading</button>
                </div>
                
        </form>
    </div>
</template>

<script setup>
import {useAuth} from '@/stores/auth.js'
const auth=useAuth()
auth.guest()

// definePageMeta({
//     middleware:['is-guest']
// })



const name=ref(null)
const email=ref(null)
const password=ref(null)
const c_password=ref(null)
const form=ref({})
function handleRegister()
{
    form.value={
        name: name.value,
        email: email.value,
        password: password.value,
        c_password: c_password.value
    }

    auth.register(form)


    

}
</script>