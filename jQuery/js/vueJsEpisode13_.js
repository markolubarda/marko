/**
 * Created by markolubarda on 24.10.17.
 */
// Episode 13 first example
window.Event = new Vue();


Vue.component('coupon', {

	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

	methods: {

		onCouponApplied() {

			Event.$emit('applied');
		}
	}

});


var pro = new Vue ({

	el: '#episode13',

	data: {

		couponApplied: false

	},

	created() {

		Event.$on('applied', () => alert('Handling it!'));
	}

});
