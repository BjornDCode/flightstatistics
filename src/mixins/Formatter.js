export default {
    methods: {
        formatMoney(money) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
            }).format(money)
        },

        formatNumber(number) {
            return new Intl.NumberFormat('en-US').format(number)
        },
    }
}
