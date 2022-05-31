
let app = new Vue({
	el: 'main#app',

	data: {
		form: {
			index: null,
			task: '',
			status: null
		},

		tasks: []
	},

	mounted() {
		if(localStorage.getItem('tasks'))
			this.tasks = JSON.parse(localStorage.getItem('tasks'));
		else
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
	},

	methods: {
		store() {
			if (!this.form.task)
				alert('Preencha a tarefa')
			else {
				this.tasks.push({ status: false, task: this.form.task });
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
				this.form.task = '';
			}
		},

		edit(index) {
			this.form.index = index;
			this.form.task = this.tasks[index].task;
		},
		
		update() {
			this.tasks[this.form.index].task = this.form.task;
			this.form.task = '';
			this.form.index = null;
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
		},

		destroy(index) {
			this.tasks.splice(index, 1);
			localStorage.setItem('tasks', JSON.stringify(this.tasks));
		},

		done(index) {
			this.tasks[index].status = true;
			localStorage.setItem('tasks', JSON.stringify(this.tasks));

			if (this.areEveryTasksDone())
				alert('Muitos parabéns por ter terminado todas as tarefas! Continue assim')
		},

		areEveryTasksDone() {
			return this.tasks.filter(item => !item.status).length > 0 ? false : true;
		}
	}
});