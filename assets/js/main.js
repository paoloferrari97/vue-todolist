const app = new Vue({
    el: "#app",

    data: {
        logo: "https://www.boolean.careers/images/misc/logo.png",
        tasks: [
            "Learn HTML",
            "Learn CSS",
            "Learn JS"
        ],
        newTask: "",
        completeds: [],
        trasheds: []
    },

    methods: {
        addTask() {
            if (this.newTask !== "" && !this.tasks.includes(this.newTask) && this.newTask.length > 2) {
                this.tasks.push(this.newTask);
                this.newTask = "";
            } else {
                this.newTask = "";
            }
        },
        removeTask(index) {
            //.pop funziona sull'ultimo elemento dell'array, quindi non mi va bene qua
            this.tasks.splice(index, 1); //a partire da posizione index mi toglie 1 elemento
        }
    }
});