const app = Vue.createApp({
    data() {
        return {
            taskList: [],
            inputTask: '',
            listVisible: true
        };
    },
    methods: {
        addTask() {
            if (this.inputTask.trim()) {
                this.taskList.push(this.inputTask.trim());
                this.inputTask = '';
            }
            taskList.push(this.inputTask);
        },
        toggleList(){
            this.listVisible = !this.listVisible;
        }
    }
}).mount('#assignment');