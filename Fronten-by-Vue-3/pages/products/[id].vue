<template>
    <div>

        <div class="py-3 mb-4 shadow-sm bg-warning border-top">
            <div class="container">
                    <h6 class="mb-0">Product View</h6>      
            </div>       
        </div>      


        <div class="container">
            <div class="card shadow product_data">
                    <div class="card-body">
                        <div class="row">
                            <form @submit.prevent="myCart.addToCart(route.params.id,quantity)">
                                <div class="col-md-4 border-roght">
                                    <img src="/products/oppo.jpg" alt="image" class="w-50">
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
        </div>



    </div>
</template>




<script setup>
import { useProduct } from '@/stores/product.js'
import { useCart } from '@/stores/cart.js'
const productStore=useProduct()
const myCart=useCart()
const route= useRoute()

const product= productStore.getProduct(route.params.id)



const quantity=ref(1)


function increment()
{
    quantity.value++
}
function decrement()
{
    if(quantity.value>0) quantity.value--
}


</script>
  


