/**
 * Created by markolubarda on 19.10.17.
 */

Vue.component('task-list', {

	template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

	data() {

		return {

			tasks: [

				{ task: 'Go to the store', completed: true },

				{ task: 'Finish screen cast', completed: false },

				{ task: 'Make donation', completed: false },

				{ task: 'Clean room', completed: true }
			]
		};
	}

});

Vue.component('task', {

	template: '<li><slot></slot></li>'

});


var pro = new Vue({

	el: '#taskSection',

});