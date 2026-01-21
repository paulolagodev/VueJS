const app = Vue.createApp({
  data() {
    return{
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  watch: {
    counter(value) {
      const that = this;
      if( value > 50){
        setTimeout(function(){
          that.counter = 0;
        }, 2000);
      }

    }
    /*name( value ) {
      if( value === ''){
        this.fullname = '';
      } else {
        this.fullname = value + ' ' + this.lastName;
      }
      
    },
    lastName(value){
      if(value === ''){
        this.fullname = '';
      } else{
        this.fullname = this.name + ' ' + value;
      }

    }*/
  },
  computed: {
    fullname() {
      console.log('running again...')
      if(this.name ===''){
        return '';
      }
      return this.name + ' ' + 'Lago';
    }
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

