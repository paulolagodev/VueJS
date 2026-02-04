const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      inputGoal: ''
    };
  }, 
  methods:{
    addGoal(){
      if(this.inputGoal.trim()){
        this.goals.push(this.inputGoal.trim());
        this.inputGoal = '';
      }
      goals.push(this.inputGoal);
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
