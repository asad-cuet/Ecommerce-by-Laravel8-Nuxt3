<template>
    <div>
        <div style="width:100%;max-width:400px;margin:auto">
            <div class="container mt-3">
                <h2>Enter Product Details</h2>
                <form @submit.prevent="handleSubmit()">

                    <div class="mb-3 mt-3">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" placeholder="Enter Name" v-model="name">
                    </div>

                    <div class="mb-3 mt-3">
                    <label for="Original-Price">Original Price:</label>
                    <input type="number" class="form-control" placeholder="Enter Original Price" v-model="original_price">
                    </div>

                    <div class="mb-3 mt-3">
                    <label for="Sale-Price">Sale Price:</label>
                    <input type="number" class="form-control" placeholder="Enter Sale Price" v-model="sale_price">
                    </div>

                    <div class="mb-3">
                        <label for="formFileSm" class="form-label">Select Image</label>
                        <input class="form-control form-control-sm" id="formFileSm" type="file" @change="handleChange">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProduct } from '@/stores/product.js'
const productStore=useProduct()


const name=ref('')
const original_price=ref()
const sale_price=ref()


const file=ref(null)

const types=['image/png','image/jpeg','image/jpg']

function handleChange(e) 
        {
            console.log(e.target.files[0])
            const selected = e.target.files[0]   //it's a object. Contain: type, size (KB), name(name.ext) etc
            
            if(selected && types.includes(selected.type))
            {
                file.value=selected
                console.log(selected)
            }
            else
            {
                file.value=null
                console.log('Please select an image file')
            }
        }



function handleSubmit()
{
    const imputData={
    name:name.value,
    original_price:original_price.value,
    sale_price:sale_price.value,
    image:''
    }
    console.log(imputData)
}

</script>