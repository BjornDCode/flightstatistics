<template>
    <circle 
        :cx="airport.coordinates.x" 
        :cy="airport.coordinates.y" 
        :r="airport.radius" 
        :id="airport.code" 
    />
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            airport: {
                type: Object,
                required: true
            }
        }
    })
</script>
