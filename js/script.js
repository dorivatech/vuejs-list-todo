new Vue({
	el: 'main#app',

	data: {
		form: {
			task: ''
		},

		tasks: [{task: 'Olá'}]
	},

	methods: {
		submitTask() {
			this.tasks.push({ task: this.form.task });
		}
	}
});