/**
 * Created by markolubarda on 25.10.17.
 */
// Episode 13 second example
window.Event = new class {

	constructor() {

		this.vue = new Vue();
	}

	fire(event, data = null) {

		this.vue.$emit(event, data);
	}

	listen(event, callback) {

		this.vue.$on(event, callback);
	}
}


Vue.component('coupon', {

	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

	methods: {

		onCouponApplied() {

			Event.fire('applied');
		}
	}

});


var pro = new Vue ({

	el: '#episode13',

	data: {

		couponApplied: false

	},

	created() {

		Event.listen('applied', () => alert('Handling it!'));
	}

});
