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
		}
	}
});