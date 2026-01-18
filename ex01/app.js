Vue.createApp({
    data() {
        return {
            goals: [],
            inputValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.inputValue);
            this.inputValue = '';
        }
    }
}).mount('#app');




/*const inputEL = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.querySelector('ul');

function addGoal(){
    const inputValue = inputEL.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = inputValue;
    listEl.appendChild(listItemEl);
    inputEL.value = '';
}
buttonEl.addEventListener('click', addGoal);*/
