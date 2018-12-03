<template>
    <transition name="slide-fade" appear>
        <h1 class="absolute pin-t mt-8 text-blue-lightest" :key="Date.now()">
            {{ title }}
        </h1>
    </transition>
</template>

<script>
    import { startCase } from 'lodash'

    export default {
        props: {
            dataset: {
                type: String,
                required: true
            }
        },

        computed: {
            title() {
                return startCase(this.dataset)
            }
        }
    }
</script>

<style>
    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: all 250ms;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        opacity: 0;
    }
    .slide-fade-enter {
        transform: translateY(-2rem);
    }
    .slide-fade-leave-to {
        transform: translateY(2rem);
    }
</style>
