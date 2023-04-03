<template>
    <div>
        <div class="py-5">
            <div class="container">
                    <div class="row">
                        <h2>All Categories</h2>
                        
                                <!-- @foreach ($category as $item) -->
                                    
                                    <div v-for="category in categoryStore.categories" class="col-md-3 mb-3">
                                            <NuxtLink :to="`/categories/${category.id}`">
                                            <div class="card">
                                                <img :src="category.image" alt="Product Image">
                                                <div class="card-body">
                                                        <h5>{{ category.name }}</h5>
                                                </div>
                                            </div>
                                            </NuxtLink>
                                    </div>
                                <!-- @endforeach -->
                        
                    </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCategory } from '@/stores/category.js'
const categoryStore=useCategory()

</script>
  