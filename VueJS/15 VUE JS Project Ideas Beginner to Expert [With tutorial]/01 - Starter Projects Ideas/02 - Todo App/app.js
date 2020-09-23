const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Coding Todo App',
        newTodo: '', //[3] add newtodo
        todos: [],
    },
    methods: {
        // [4] addTodo function for push new todos
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false,
            });
             this.newTodo = ''; //[6] clear input value
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            })
        }
    },

    
});