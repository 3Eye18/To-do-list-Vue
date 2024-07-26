<template>
    <header class="fixed top-0 left-0 w-full bg-headerBackground shadow-md z-50 flex items-center justify-between px-4 py-2">
        <h1 class="text-white font-bold text-xl">ToDoList</h1>
        <div class="text-white">
            <span class="mr-2">{{ user.email }}</span>
            <font-awesome-icon class="mr-2" icon="fa-regular fa-user" />
            <router-link :to="{ name: 'LogOut', params: {} }">
                <div class="tooltip">
                    <font-awesome-icon class="text-red-500" icon="fa-solid fa-right-from-bracket" />
                    <span class="tooltipbot">Log Out</span>
                </div>
                
            </router-link>
            
        </div>
    </header>
</template>

<style lang="css" scoped>
.tooltipbot {
    transform: translateX(calc(-70%));
}
</style>

<script>
import { useUser } from "@/composables/useUser";

export default {
    setup() {
        const { getuser } = useUser()
        const { user } = getuser()

        return { user }
    }
}
</script>