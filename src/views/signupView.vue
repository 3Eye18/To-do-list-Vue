<template>
    <div class="min-h-screen bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="fixed top-0 left-0 w-full h-full">
            <div class="flex items-center justify-center h-full">
                <div class="backdrop-blur bg-white/30 rounded-lg shadow-md px-8 py-10 max-w-md">
                    <!-- Start Form -->
                    <form @submit.prevent="onSubmit">
                        <h1 class="text-2xl text-white font-bold mb-6 text-center">Sign Up</h1>
                        <div class="mb-6">
                            <label for="email" class="block text-white text-sm font-bold mb-2">Email:</label>
                            <input type="text" id="email" v-model="email"
                                class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-white text-sm font-bold mb-2">Password:</label>
                            <input type="password" id="password" v-model="password"
                                class="shadow appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                required>
                        </div>
                        <div class="flex items-center justify-between">
                            <button v-if="!isPending" type="submit"
                                class="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                                Sign Up</button>
                            <button v-else
                                class="py-2 px-4 text-center w-full cursor-not-allowed bg-gray-800 text-white font-bold rounded"
                                disabled>Loading...</button>
                        </div>
                    </form>

                    <!-- Start Error -->
                    <div v-if="error" class="text-left text-red mt-4">
                        <span>{{ error }}</span>
                    </div>

                    <!-- Start Direction -->
                    <div class="w-full text-center mt-6">
                        <span class="text-white font-semibold">I already have an account.</span>
                        <span class="ml-1">
                            <router-link :to="{ name: 'LogIn', params: {} }"
                                class="text-primary text-orange-500 font-bold">Log In!</router-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useSignUp } from "@/composables/useSignUp";
import { BACKGROUND_IMAGE } from "@/constants/constant";

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const backgroundImage = ref(BACKGROUND_IMAGE);
        const { error, isPending, signup } = useSignUp()
        const router = useRouter()

        async function onSubmit() {
            await signup(email.value, password.value)
            if (!error.value) router.push({ name: "Table", params: {} })
        }

        return { email, password, backgroundImage, error, isPending, onSubmit }
    }
}
</script>
