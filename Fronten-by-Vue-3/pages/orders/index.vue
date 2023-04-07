<template>
    <div>

        <div class="container py-5">
      
            <div class="row mt">
                    <div class="col-md-12">
                        <div class="card">
                                <div class="card-header">
                                <h4>My Orders</h4>
                                </div>
                                <div class="card-body">
                                    <div v-if="orders.length" style="overflow-x: auto">
                                            <table class="table table-bordered">
                                                <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Total Price</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                </thead>
                                                <tbody>

                                                            <tr v-for="order in orders">
                                                                <td>{{ order.created_at }}</td>
                                                                <td>{{ order.total_price }}</td>
                                                                <td>{{ order.status==0? 'Pending':'Completed' }}</td>
                                                                <td>
                                                                        <NuxtLink :to="`/orders/${order.id}`" class="btn btn-primary">View</NuxtLink>
                                                                </td>
                                                            </tr>          

                                                </tbody>
                                            </table>
                                    </div>    
                                    <div v-else>
                                        <h3>No Orders</h3>
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

const orders=ref([])
orders.value=await myOrder.getOrders()



</script>