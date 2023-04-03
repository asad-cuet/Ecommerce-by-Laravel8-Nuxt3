<template>
    <div>

      


        <!-- <div class="container">
            <div class="card shadow product_data">
                    <div class="card-body">
                        <div class="row">
                            <form @submit.prevent="myCart.addToCart(route.params.id,quantity)">
                                <div class="col-md-4 border-roght">
                                    <img :src="product.image" alt="image" class="w-50">
                                </div>
                                <div class="col-md-12">
                                    <h2 class="mb-0">
                                            {{ product.name }}
                                            <label style="font-size:16px;" class="float-end badge bg-danger trending_tag">Trending</label>
                                    </h2>
                                    <hr>
                                    <label class="me-3">Original Price: <s>${{ product.original_price }}</s></label>
                                    <label class="fw-bold">Selling Price: ${{ product.selling_price }}</label>

                                    <div class="row mt-2">
                                            <div class="col-md-3">
                                                        <input type="hidden" value="{{$product->id}}" class="prod_id">
                                                        <label for="quantity">Quantity</label>
                                                        <div class="input-group text-center mb-3" style="width:130px;">
                                                            <button type="button" class="input-group-text" @click="decrement()">-</button>
                                                            <input type="text" v-model="quantity" name="quantity" class="form-control qty-input text-center" />
                                                            <button type="button" class="input-group-text"  @click="increment()">+</button>      
                                                        </div>       
                                            </div> 
                                        </div> 

                                                

                                        <button type="submit" class="btn btn-primary me-3 float-start">Add to Cart <i class="fa fa-shopping-cart"></i></button>                                          
                                </div>

                            </form>
                        </div>

                        <br>
                        <br>
                        <br>
                        <br>



                    </div>
            </div>
        </div> -->

        <div class="py-3 mb-4 shadow-sm bg-warning border-top">
            <div class="container">
                    <h6 class="mb-0">Category View</h6>      
            </div>       
        </div>   

        <div class="py-5">
            <div class="container">
                    <div class="row">
                        <h2></h2>
                        
                                <!-- @foreach ($product as $item) -->
                                    <div v-for="product in categoryProducts" class="col-md-3 mb-3">
                                            <div class="card">
                                            <NuxtLink :to="`/products/${product.id}`">
                                            
                                                <img :src="product.image" alt="Product Image" class="w-100">
                                                <div class="card-body">
                                                        <h5>{{ product.name }}</h5>
                                                        <span class="float-start">${{ product.selling_price }}</span>
                                                        <span class="float-end"><s>${{ product.original_price }}</s></span>
                                                </div>
                                            
                                            </NuxtLink>   
                                            </div>   

                                    </div>
                                <!-- @endforeach -->
                        
                    </div>
            </div>
        </div>

    </div>
</template>




<script setup>
import { useCategory} from '@/stores/category.js'
const categoryStore=useCategory()

const route= useRoute()

const categoryProducts=await categoryStore.getCategory(route.params.id)

console.log(categoryProducts)





</script>
  


