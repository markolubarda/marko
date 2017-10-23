/**
 * Created by markolubarda on 19.10.17.
 */

 // Episode 7
Vue.component('task', {

	template: '<li><slot></slot></li>'

});

 // Episode 8
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

// Episode 9
Vue.component('message', {

	props: ['title', 'body'],

	template: '<article class="message"><div class="message-header">{{ title }}<button class="delete" aria-label="delete"></button></div><div class="message-body">{{ body }}</div></article>'

});


var pro = new Vue({

	el: '#taskSection',

});