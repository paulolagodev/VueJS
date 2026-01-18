const { createApp } = Vue;

    createApp({
      data() {
        return {
          newTask: '',
          tasks: [
            {text: 'Entrevista coletiva (estágio)', done:false}
            
          ]
        }
      },

      computed: {
        remaining() {
          return this.tasks.filter(t => !t.done).length;
        }
      },

      methods: {
        addTask() {
          if (!this.newTask.trim()) return;
          
          this.tasks.push({
            text: this.newTask.trim(),
            done: false
          });
          
          this.newTask = '';
        },

        removeTask(index) {
          this.tasks.splice(index, 1);
        }
      }
    }).mount('#app');