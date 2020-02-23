new Vue ({
    el: '#vue-app-demo',
    data: {
        signup: 1,
        shop: 0,
        strawberry: 0
    },
    methods: {
        gotoShop: function() {
            this.signup = 0;
            this.shop = 1;
        },
        gotoStrawberry: function() {
            this.shop = 0;
            this.strawberry = 1;
        },
        buynow: function() {
            alert('You have successfully bought a CAPE product!');
        }
    }
})