<template>
    <ul class="absolute pin-b pin-r mb-8 mr-8 list-reset text-blue-lightest">
        <li>
            <input 
                type="radio" 
                name="dataset" 
                :checked="currentlySelected === 'mostProfitableRoutes'"
                value="mostProfitableRoutes"
                @change="select"
            > Most Profitable Routes
        </li>
        <li>
            <input 
                type="radio" 
                name="dataset" 
                :checked="currentlySelected === 'busiestRoutes'"
                value="busiestRoutes"
                @change="select"
            > Busiest Routes
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            currentlySelected: {
                type: String,
                required: true
            }
        },

        methods: {
            select(e) {
                this.$emit('select', e.target.value)
            }
        }
    }
</script>
