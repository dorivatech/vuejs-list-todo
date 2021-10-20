new Vue({
	el: 'main#app',

	data: {
		form: {
			index: null,
			task: ''
		},

		tasks: [{task: 'Olá'}]
	},

	methods: {
		store() {
			if (!this.form.task)
				alert('Preencha a tarefa')
			else {
				this.tasks.push({ task: this.form.task });
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
		},

		destroy(index) {
			this.tasks.splice(index, 1);
			alert('Tarefa apagada')
		}
	}
});