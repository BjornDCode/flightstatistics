<template>
    <ul class="absolute pin-b pin-r mb-8 mr-8 list-reset text-blue-lightest">
        <li class="mb-2" v-for="dataset in datasets">
            <label class="cursor-pointer flex items-center">
                <input 
                    type="radio" 
                    name="dataset" 
                    :checked="currentlySelected === dataset.key"
                    :value="dataset.key"
                    @change="select"
                    class="hidden" 
                >
                <span 
                    class="block w-4 h-4 rounded-full mr-2"
                    :class="currentlySelected === dataset.key ? [`bg-${dataset.color}`] : [`border-2 border-${dataset.color}`]"
                ></span>
                {{ dataset.name }}
            </label>
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

        data() {
            return {
                datasets: [
                    { 
                        key: 'mostProfitableRoutes', 
                        name: 'Most Profitable Routes',
                        color: 'red'
                    },
                    { 
                        key: 'busiestRoutes', 
                        name: 'Busiest Routes',
                        color: 'yellow'
                    }
                ]
            }
        },

        methods: {
            select(e) {
                this.$emit('select', e.target.value)
            }
        }
    }
</script>
