const app = Vue.createApp({
    data(){
        return{
            name: '',
            enterName:''
        }
    },
    methods:{
        showMessage(){
            alert('thats a alert!');
        },
        setName(event){
            this.name = event.target.value;
        },
        onEnter(event){
            this.enterName = event.target.value;
            event.target.value = '';
        }
    }
}).mount('#assignment');