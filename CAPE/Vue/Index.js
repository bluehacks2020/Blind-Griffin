new Vue ({
    el: '#vue-app',
    data: {
        viewmoreproduct: 0
    },
    methods: {
        viewmoreproductTrending: function() {
            this.viewmoreproduct = 1;
        }
    }
})