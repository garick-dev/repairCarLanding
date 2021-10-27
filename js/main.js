const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    breakpoints: {
        800: {
            perView: 1
        },
        480: {
            perView: 1
        }
    }
})

glide.mount()