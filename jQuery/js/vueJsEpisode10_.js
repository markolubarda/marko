/**
 * Created by markolubarda on 23.10.17.
 */

	// Episode 10
Vue.component('modal', {

	template: '<div class="modal is-active"><div class="modal-background"></div><div class="modal-content"><div class="box"><slot></slot></div></div><button class="modal-close is-large" @click="$emit(\'close\')"></button></div>'

});


var pro = new Vue({

	el: '#episode10',

	data: {

		showModal : false
	}

});