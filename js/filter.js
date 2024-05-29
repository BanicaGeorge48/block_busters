
filter.addEventListener('change', funcion() {
    switch (this.value) {
        case 'most-valued':
            return 'most'
        case 'least-valued':
            return 'least'
        default:
            return 'all'
    }
})