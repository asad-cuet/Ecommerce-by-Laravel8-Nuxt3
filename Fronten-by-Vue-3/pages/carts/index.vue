<template>
    <div>
        <div class="py-3 mb-4 shadow-sm bg-warning border-top">
            <div class="container">
                    <h6 class="mb-0">Your Shopping Cart</h6>      
            </div>       
        </div>  



        <div class="container my-5">
            <div class="card shadow cartitems">  <!-- cartitem for div reload -->
                <div v-if="myCart.cartLength">
                    <div class="card-body">
                        <!-- @foreach ($product as $item) -->
                        <div v-for="content in myCart.cartProducts()" class="row product_data">
            
                                <div class="col-md-2 my-auto">
                                    <img src="/products/oppo.jpg" height="70px" width="70px" alt="Image">
                                </div>
                                <div class="col-md-3 my-auto">
                                    <h6>{{ content.name }}</h6>
                                </div>
                                <div class="col-md-2 my-auto">
                                    <h6>$ {{ content.selling_price }}</h6>
                                </div>
                                <div class="col-md-3 my-auto">
                                    <input type="hidden" value="" class="cart_id">

                                    <label for="quantity">Quantity</label>
                                    <div class="input-group text-center mb-3" style="width:130px;">
                                            <button @click="myCart.decrementQuantity(content.id)" class="input-group-text">-</button>
                                            <input type="text" name="quantity" :value="content.quantity" class="form-control qty-input text-center" />
                                            <button @click="myCart.incrementQuantity(content.id)" class="input-group-text">+</button>      
                                    </div>  
                                        <!-- <h6>Out of Stock</h6>                                   -->
                                </div>
                                <div class="col-md-2 my-auto">
                                    <button @click="myCart.removeCartItem(content.id)" class="btn btn-danger delete-cart-item"><i class="fa fa-trash"></i>Remove</button>
                                </div>
                                
                        </div>
                        
                        
                        <!-- @endforeach -->
                    </div>
                    <div class="card-footer text-center">
                        <h6>Total Price : $ <span class="total">{{ myCart.totalCost }}</span></h6>
                        <br>
                        <a href="" class="btn btn-outline-success">Proceed to Checkout</a>
                    </div>
                </div>
                <div v-else>

                    <div class="card-body text-center">
                        <h2>Your <i class="fa fa-shopping-cart"> Cart is empty</i></h2>
                        <br>
                        <NuxtLink to="/products" class="btn btn-outline-primary">Continue Shoppinh</NuxtLink>
                    </div>

                </div>



            </div>
        </div>


    </div>
</template>

<script setup>
import {useAuth} from '@/stores/auth.js'
import { useCart } from '@/stores/cart.js'
const auth=useAuth()
const myCart=useCart()

console.log(myCart.cartProducts())


</script>