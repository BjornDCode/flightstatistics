<template>
    <ir-transition-fade>
        <div class="absolute pin bg-blue-darkest p-8" v-if="open">
            <div class="w-full h-full max-w-xs flex flex-col justify-center items-start mx-auto">
                <p class="text-blue-lightest leading-normal mb-4">
                    This map is intended to be viewed on larger screen sizes. You can however still use it on mobile, but the experience might be inferior.
                </p>
                <button @click="close" type="button" class="bg-blue-lightest px-8 py-3 text-sm uppercase">
                    Okay
                </button>
            </div>
        </div>
    </ir-transition-fade>
</template>

<script>
    export default {
        data() {
            return {
                open: true
            }
        },

        methods: {
            close() {
                this.open = false
            }
        }
    }
</script>
