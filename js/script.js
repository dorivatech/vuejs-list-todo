new Vue({
	el: 'main#app',

	data: {
		form: {
			task: ''
		},

		tasks: []
	},

	methods: {
		submitTask() {
			this.tasks.push({ task: this.form.task });
		}
	}
});