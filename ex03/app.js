const app = Vue.createApp({
    data() {
        return {
            name: 'Paulo',
            age: 19,
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/292/586/558/dark-fantasy-fantasy-art-digital-art-gothic-surreal-hd-wallpaper-preview.jpg'
        };
    },

    methods: {
        agePlusFive () {
            return this.age + 5;
        },
        randomNum(){
            return Math.random();
        }
    }
});

app.mount('#assignment');