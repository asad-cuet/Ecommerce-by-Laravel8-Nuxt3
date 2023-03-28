<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#">E-Shop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
                                </li>

                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/categories">Category</NuxtLink>
                                </li>
                                <div v-if="!auth.isLoggedIn()">
                                    <li class="nav-item">
                                        <NuxtLink class="nav-link btn bg-primary" to="/auth/login">Login</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink class="nav-link btn bg-success" to="/auth/register">Register</NuxtLink>
                                    </li>
                                </div>
                                <div v-else>
                                    <li v-if="!auth.isLoading" class="nav-item">
                                        <button class="nav-link btn bg-danger" @click="auth.logout()">Logout</button>
                                    </li>
                                    <li v-else class="nav-item">
                                        <button class="nav-link btn bg-danger" disabled>Loading</button>
                                    </li>
                                </div>
                                
                                

                                <!-- <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> -->
                                
                                <!-- <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li> -->
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
import {useAuth} from '@/stores/auth.js'
const auth=useAuth()

</script>