<template>
    <h1>Logout</h1>
</template>

<script>
import { useLogOut } from '@/composables/useLogOut';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const { error, logout } = useLogOut()

        async function onLogout() {
            await logout()
            if (!error.value) router.push({ name: 'LogIn', params: {} })
        }

        onLogout()
        
        return { }
    }
}
</script>