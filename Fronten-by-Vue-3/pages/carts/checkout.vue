<template>
    <div>



        <div class="container mt-5">
            <form @submit.prevent="handleSubmit()">
                <div class="row">
                        <div class="col-md-5">
                            <div class="card">
                                    <div class="card-body">
                                        <h6>Basic Details</h6>
                                        <hr>
                                        <div class="row checkout-form">
                                                <div class="col-md-6">
                                                    <label for="">First Name</label>
                                                    <input required type="text" name="fname" v-model="f_name" class="form-control fname" placeholder="Enter First Name">
                                                    <span id="fname_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="">Last Name</label>
                                                    <input required type="text" name="lname" v-model="l_name" class="form-control lname" placeholder="Enter Last Name">
                                                    <span id="lname_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">Email</label>
                                                    <input required type="email" name="email" v-model="email" class="form-control email" placeholder="Enter Email">
                                                    <span id="email_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">Phone number</label>
                                                    <input required type="text" name="phone" v-model="phone" class="form-control phone" placeholder="Enter Phone Number">
                                                    <span id="phone_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">Address 1</label>
                                                    <input required type="text" name="address1" v-model="address1" class="form-control address1" placeholder="Enter Address 1">
                                                    <span id="address1_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">Address 2</label>
                                                    <input type="text" name="address2" v-model="address2" class="form-control address2" placeholder="Enter Address 2">
                                                    
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">City</label>
                                                    <input required type="text" name="city" v-model="city" class="form-control city" placeholder="Enter City">
                                                    <span id="city_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">State</label>
                                                    <input required type="text" name="state" v-model="state" class="form-control state" placeholder="Enter State">
                                                    <span id="state_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">Country</label>
                                                    <input required type="text" name="country" v-model="country" class="form-control country" placeholder="Enter Country">
                                                    <span id="country_error" class="text-danger"></span>
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <label for="">Post Code</label>
                                                    <input required type="number" name="pincode" v-model="pincode" class="form-control pincode" placeholder="Enter Pin Code">
                                                    <span id="pincode_error" class="text-danger"></span>
                                                </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="card">
                                    <div class="card-body">
                                        <!-- @if($cartitems->count()>0) -->
                                        <div v-if="myCart.cartProducts().length">
                                                Order Details
                                                <hr>
                                                <table class="table table-striped table-bordered">
                                                        <thead>
                                                            <tr>
                                                                    <th>Image</th>
                                                                    <th>Name</th>
                                                                    <th>Qty</th>
                                                                    <th>Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>


                                                                <tr v-for="content in myCart.cartProducts()">
                                                                        <td>
                                                                                <img :src="content.image" style="width:50px;" alt="Product Image">
                                                                        </td>
                                                                        <td>{{ content.name }}</td>
                                                                        <td>{{ content.quantity }}</td>
                                                                        <td>${{ content.selling_price }}</td>
                                                                </tr>
        
                                                            <!-- @endforeach -->
                                                        </tbody>
                                                </table>
                                                <h4>Total : <span class="float-end">$ {{ myCart.totalCost }}</span></h4>
                                                <hr>
                                                <div v-if="!myCart.isLoading">
                                                    <button type="submit" class="btn btn-success w-100">Cash On Delivery</button>
                                                </div>
                                                <div v-else>
                                                    <button type="submit" class="btn btn-success w-100" disabled>Loading</button>
                                                </div>

                                        </div>

                                        <div v-else>
                                            <h4 class="text-center">No products in Cart</h4>
                                        </div>

                                    </div>
                            </div>
                        </div>
                </div> 
            </form>   
            </div>






    </div>
</template>

<script setup>
import {useAuth} from '@/stores/auth.js'
import { useCart } from '@/stores/cart.js'
const auth=useAuth()
auth.authGuard()
const myCart=useCart()


const f_name=ref('')
const l_name=ref('')
const email=ref('')
const phone=ref('')
const address1=ref('')
const address2=ref('')
const city=ref('')
const state=ref('')
const country=ref('')
const pincode=ref('')

function handleSubmit()
    {
        const formData={
            user_id:auth.user.user_id,
            f_name:f_name.value,
            l_name:l_name.value,
            email:email.value,
            phone:phone.value,
            address1:address1.value,
            address2:address2.value,
            city:city.value,
            state:state.value,
            country:country.value,
            pincode:pincode.value
        }
        myCart.proceedOrder(formData)
        
    }

</script>