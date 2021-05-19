const app = new Vue({
    el: "#app",

    data: {
        logo: "", //percorso logo
        tasks: [
            "Learn HTML",
            "Learn CSS",
            "Learn JS"
        ],
        newTask: ""
    },

    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = "";
        },
        removeTask(index) {
            //.pop funziona sull'ultimo elemento dell'array, quindi non mi va bene qua
            this.tasks.splice(index, 1); //a partire da posizione index mi toglie 1 elemento
        }
    }
});