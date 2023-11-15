let app = Vue.createApp({
    data() {
        return{
            showContents:true,
            contents: [
                {
                    topic: ' Gabrielle Essence Eau De Parfum',
                    image: 'images/image-product-desktop.jpg',
                    message: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, perfume-creator for the House of CHANEL,',
                    price: '$169.99',
                    discountedPrice: '$149.99',
                    button: 'Add to Cart',
                }   
            ]
        } 
    },

})

app.mount('#app')