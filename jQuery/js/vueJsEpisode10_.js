/**
 * Created by markolubarda on 23.10.17.
 */

	// Episode 10
Vue.component('modal', {

	template: '<div class="modal is-active"><div class="modal-background"></div><div class="modal-content"><div class="box"><p>lorem ipsuem dolor sit amet and and and...</p></div></div><button class="modal-close is-large" aria-label="close"></button></div>'

});


var pro = new Vue({

	el: '#episoed10',

	data: {

		showModal : false
	}

});