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
			this.tasks.push({ task: this.form.task });
		}
	}
});