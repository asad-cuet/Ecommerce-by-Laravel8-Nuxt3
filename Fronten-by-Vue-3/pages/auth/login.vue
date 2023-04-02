<template>
    <div style="wdth:100%;max-width:400px;margin:auto;">
        <form @submit.prevent="handleLogin()">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="col-12" v-if="!auth.isLoading">
                    <button type="submit" class="btn btn-primary">Login</button>
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
auth.isLoading=false

// definePageMeta({
//     middleware:['is-guest']
// })

const email=ref(null)
const password=ref(null)

const form=ref({})
function handleLogin()
{
    form.value={
        email: email.value,
        password: password.value
    }
    auth.login(form)
}
</script>