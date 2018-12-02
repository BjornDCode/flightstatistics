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

        formatRouteText(route, airports) {
            return Object.assign({
                'Spot': `#${route.spot}`,
                'Route': `${this.formatAirportName(airports, route.airport1)} - ${this.formatAirportName(airports, route.airport2)}`,
            }, this.formatRouteTypeText(route))
        },

        formatRouteTypeText(route) {
            switch (route.type) {
                case 'busiest': 
                    return {
                        "Total Passengers": this.formatNumber(route.totalPassengers),
                        "Total Flights": this.formatNumber(route.totalFlights)
                    }
                case 'mostProfitable': 
                    return {
                        'Airline': route.airline,
                        'Total Revenue': this.formatMoney(route.totalRevenue)
                    }
            }
        },

        formatAirportName(airports, airportCode) {
            return airports.find(airport => airport.code === airportCode ).name
        }
    }
}
