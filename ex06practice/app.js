const app = Vue.createApp({
    data() {
        return{
            counter: 0
           
        } 
    },
    methods: {
        addNumber(counter) {
            this.counter = this.counter + counter;
        }
    },
    computed: {
        result() {
            if(this.counter < 37){
                return 'not there yet';
            } else if(this.counter === 37) {
                return this.counter;
                
            } else{
                return 'Too much';
            }
        }
    },
    watch: {
        result(){
            const that = this;
            setTimeout(( ) => {
                that.counter = 0;
            }, 5000);
        }
    }


}).mount('#assignment');