<template>
    <div>
        Name: {{ name }}
    </div>
</template>

<script setup>
import {useAuth} from '@/stores/auth.js'
const auth=useAuth()
auth.authGuard()
// definePageMeta({
//     middleware:['is-auth']
// })

const name=auth.user.name

</script>