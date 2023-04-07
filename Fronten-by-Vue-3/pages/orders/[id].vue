<template>
    <div>

        <div class="container py-5">
      
      <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                                <div class="card-header">
                                <h4>Order View
                                        <NuxtLink to="/orders" class="btn btn-warning text-white float-end">Back</NuxtLink>
                                </h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                            <div class="col-md-6">
                                                <h4>Shopping Details</h4>
                                                <hr>
                                                    <label for="">First Name</label>
                                                    <div class="border p-2">{{ orderInfo.fname }}</div>
                                                    <label for="">Last Name</label>
                                                    <div class="border p-2">{{ orderInfo.lname }}</div>
                                                    <label for="">Email</label>
                                                    <div class="border p-2">{{ orderInfo.email }}</div>
                                                    <label for="">Contact No.</label>
                                                    <div class="border p-2">{{ orderInfo.phone }}</div>
                                                    <label for="">Shipping Address</label>
                                                    <div class="border p-2">{{ orderInfo.address1 }}, {{ orderInfo.city }}, {{ orderInfo.state }}, {{ orderInfo.country }}</div>
                                                    <label for="">Post Code.</label>
                                                    <div class="border">{{ orderInfo.pincode }}</div>
                                            </div>

                                            <div class="col-md-6">
                                                <h4>Order Details</h4>
                                                <hr>
                                                <div style="overflow-x:auto;">
                                                <table class="table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                    <th>Name</th>
                                                                    <th>Quantity</th>
                                                                    <th>Price</th>
                                                                    <th>Image</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <!-- @foreach ($order->orderItem as $item) -->
                                                                <tr v-for="item in orderDetails">
                                                                        <td>{{ item.product_name }}</td>
                                                                        <td>{{ item.product_quantity }}</td>
                                                                        <td>{{ item.product_price }}</td>
                                                                        <td>
                                                                            <img :src="item.product_image" style="width:50px;" alt="Product Image">
                                                                        </td>
                                                                </tr>          
                                                            <!-- @endforeach -->
                                                        </tbody>
                                                </table>
                                                </div>
                                                <h4 class="px-2">Grand Total:<span class="float-end">$ 50</span></h4>
                                            </div>
                                    </div>

                                </div>
                        </div>

                    </div>
            </div>
        </div>
    
    </div>
</template>


<script setup>
import { useOrder } from '@/stores/order.js'
import {useAuth} from '@/stores/auth.js'
const auth=useAuth()
auth.authGuard()
const myOrder=useOrder()
const route=useRoute()


const orderInfo=ref([])
orderInfo.value=await myOrder.getOrderInfo(route.params.id)



const orderDetails=ref([])
orderDetails.value=await myOrder.getOrderDetails(route.params.id)





</script>