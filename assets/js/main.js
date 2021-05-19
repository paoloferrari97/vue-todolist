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
        /* removeTask(index) {
            //.pop funziona sull'ultimo elemento dell'array, quindi non mi va bene qua
            this.tasks.splice(index, 1); //a partire da posizione index mi toglie 1 elemento
        }, */
        completedTask(index) {
            this.completeds.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        trashedsTask(index) {
            this.trasheds.push(this.tasks[index]);
            this.tasks.splice(index, 1);
        },
        todoTaskCompleted(index) {
            this.tasks.push(this.completeds[index]);
            this.completeds.splice(index, 1);
        },
        todoTaskTrashed(index) {
            this.tasks.push(this.trasheds[index]);
            this.trasheds.splice(index, 1);
        },
        clearTrash() {
            var YoN = confirm("Do you want to delete all the elements of the trash?");
            if (YoN == true) {
                this.trasheds = [];
            }
        },
        alert(task) {
            alert(`Task updated! The new task is: ${task}`);
        }
    }
});