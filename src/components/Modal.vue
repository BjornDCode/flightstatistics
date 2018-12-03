<template>
    <div>
        <button type="button" @click="openModal">
            {{ title }}
        </button> 
        <ir-focus-trap :active="open">
            <div v-show="open" class="absolute pin bg-black-transparent flex justify-center items-center">
                <transition name="zoom-fade">
                    <div v-show="open" class="bg-blue text-blue-lightest w-2/5 p-4 rounded">
                        <header class="flex justify-between items-center mb-4">
                            <h2>{{ title }}</h2>
                            <button type="button" @click="closeModal" class="w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
                                    <path class="text-blue-darkest" fill="currentColor" d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z" />
                                </svg>
                            </button>
                        </header>

                        <slot name="content"></slot>  

                    </div>
                </transition>
            </div>
        </ir-focus-trap> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open: false
            }
        },

        props: {
            title: {
                type: String,
                required: true
            }
        },

        methods: {
            openModal() {
                this.open = true
            },

            closeModal() {
                this.open = false
            }
        }
    }
</script>

<style>
    .zoom-fade-enter-active, .zoom-fade-leave-active {
        transition: all 200ms;
    }
    .zoom-fade-enter, .zoom-fade-leave-to {
        opacity: 0;
        transform: scale(1.1);
    }
</style>
