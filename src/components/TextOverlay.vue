<template>
    <ul class="list-reset absolute pin-b pin-l mb-8 ml-8">
        <transition-step-in>
            <li v-for="(value, key, index) in source" :style="`transition-delay: ${150 * index}ms`" :key="key" class="mt-4">
                <span class="text-blue-lighter text-xs uppercase">{{ key }}</span>
                <p class="text-blue-lightest text-lg">{{ value }}</p>
            </li>
        </transition-step-in>
    </ul>
</template>

<script>
    import { isEmpty } from 'lodash'

    export default {
        props: {
            source: {
                type: Object,
                required: false,
            }
        }
    }
</script>

<style>
    .step-in-enter-active {
        transition: all 150ms;
    }
    .step-in-enter, .step-in-leave-to {
        @apply opacity-0;
        transform: translateX(-2rem);
    }
</style>
