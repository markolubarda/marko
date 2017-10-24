/**
 * Created by markolubarda on 24.10.17.
 */

// Episode 12
Vue.component('coupon', {

	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',

	methods: {

		onCouponApplied() {

			this.$emit('applied')
		}
	}

});


var pro = new Vue ({

	el: '#episode12',

	data: {

		couponApplied: false

	},

	methods: {

		onCouponApplied() {

			this.couponApplied = true;

		}
	}

});
