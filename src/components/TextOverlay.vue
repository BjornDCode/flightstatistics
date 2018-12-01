<template>
    <transition name="slide-up">
        <ul v-show="show" class="list-reset absolute pin-b pin-l mb-8 ml-8">
            <li v-for="(value, key) in source" :key="key" class="mt-4">
                <span class="text-blue-lighter text-xs uppercase">{{ key }}</span>
                <p class="text-blue-lightest text-lg">{{ value }}</p>
            </li>
        </ul>
    </transition>
</template>

<script>
    import { isEmpty } from 'lodash'

    export default {
        props: {
            source: {
                type: Object,
                required: false,
            }
        },

        computed: {
            show() {
                return !isEmpty(this.source)
            }
        }
    }
</script>

<style>
    .slide-up-enter-active, .slide-up-leave-active {
        transition: all 200ms;
    }
    .slide-up-enter, .slide-up-leave-to {
        @apply opacity-0;
        transform: translateY(-2rem);
    }
</style>
