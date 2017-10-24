/**
 * Created by markolubarda on 23.10.17.
 */

	// Episode 11
Vue.component('tabs', {

	template: '' +
	'<div>' +
		'<div class="tabs">' +
		'   <ul>' +
		'       <li v-for="tab in tabs" :class="{ \'is-active\' : tab.isActive }">' +
	'               <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>' +
	'           </li>' +
		'   </ul>' +
		'</div>' +
		'' +
		'' +
		'<div class="tabs-details">' +
		'   <slot></slot>' +
		'</div>' +
	'</div>',

	data() {

		return { tabs: [] };

	},

	created() {

		this.tabs = this.$children;
	},

	methods: {

		selectTab(selectedTab) {

			this.tabs.forEach(tab => {

				tab.isActive = (tab.name === selectedTab.name);
			});
		}
	}

});

Vue.component('tab', {

	template: '<div><slot></slot></div>',

	props: {

		name: { required: true },

		selected: { default: false }
	},

	data() {

		return {

			isActive: false

		};

	},

	mounted() {

		this.isActive = this.selected;
	}

});


var pro = new Vue({

	el: '#episode11',

	data: {

		showModal : false
	}

});