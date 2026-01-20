const app = Vue.createApp({
  data() {
    return{
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    outputFullName(){
      if(this.name ===''){
        return '';
      }
      return this.name + ' ' + 'Lago';
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted');
    },
    setName(event){
      this.name = event.target.value;
    },
    add(num) {
      this.counter= this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetName(){
      this.name='';
    }
  }
}).mount('#events');

