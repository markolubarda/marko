/**
 * Created by markolubarda on 25.10.17.
 */

// Episode 14
Vue.component('modal', {

	template:'' +
	'<div class="modal is-active">' +
	'   <div class="modal-background">' +
	'   </div>' +
	'   <div class="modal-card">' +
	'       <header class="modal-card-head">' +
	'           <p class="modal-card-title">' +
	'               <slot name="header"></slot>' +
	'           </p>' +
	'           <button class="delete" aria-label="close"></button>' +
	'       </header>' +
	'       <section class="modal-card-body">' +
	'           <slot>Here is my main content.</slot>' +
	'       </section>' +
	'       <footer class="modal-card-foot">' +
	'           <slot name="footer"></slot>' +
	'       </footer>' +
	'   </div>' +
	'</div>'
})


var pro = new Vue ({

	el: '#episode14',

});
