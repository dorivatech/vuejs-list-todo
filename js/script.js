new Vue({
	el: 'main#app',

	data: {
		form: {
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

		destroy(index) {
			this.tasks.splice(index, 1);
			alert('Tarefa apagada')
		}
	}
});