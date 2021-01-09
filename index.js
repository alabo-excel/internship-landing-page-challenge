var app = new Vue({
    el: "#app",
    data: {
        product: {},
        social: {}
    },
    mounted() {
        fetch('https://hirng-x2021.glitch.me/api')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.product = data;
                this.social = this.product.social_media
                console.log(this.social)

            })
    },
});