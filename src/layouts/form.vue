<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav-header></nav-header>
    <slot></slot>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue'
export default {
    components: {
        NavHeader,
    }
}
</script>