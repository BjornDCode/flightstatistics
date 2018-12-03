<template>
    <h1 class="absolute pin-t mt-8 text-blue-lightest">
        {{ title }}
    </h1>
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
