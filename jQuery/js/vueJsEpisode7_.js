/**
 * Created by markolubarda on 19.10.17.
 */

Vue.component('task-list', {

	template: '<li><slot></slot></li>'

})


var pro = new Vue({

	el: '#taskSection',

});