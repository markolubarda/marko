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
	'               <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>' +
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

	template: '<div v-show="isActive"><slot></slot></div>',

	props: {

		name: { required: true },

		selected: { default: false }
	},

	data() {

		return {

			isActive: false

		};

	},

	computed: {

		href() {

			// make lowerCase and replace space with dash

			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},

	mounted() {

		this.isActive = this.selected;
	}

});


var pro = new Vue({

	el: '#episode11'

});