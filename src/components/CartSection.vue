<template>
	<div class="cart-box">
		<div class="wrapper">
			<div class="item-box">
				<cart-item 
				  v-for="item in USER_CART" 
				  :key="item.id" 
				  :item="item" 
				  class="cart-item" 
				/>
				<h3 
				  v-show="!USER_CART.length" 
				  class="text_message">Cart is empty
				</h3>
				<div class="btn-box">
					<my-button class="btn clear-btn2" @click="clearCart">Clear Cart</my-button>
					<my-button class="btn" @click="goToHomePage">Continue Shopping</my-button>
				</div>
			</div>
			<div class="form-box">
				<my-form></my-form>
				<notification-comp></notification-comp>
				<div class="summary">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import NotificationComp from '@/components/notifications/NotificationComp.vue';
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			showBnt: false,
			pagePath: this.PAGE_PATH
		}
	},

	components: {
		CartItem, NotificationComp
	},

	computed: {
		...mapGetters([
			'USER_CART', 'SHOW_BTN', 'PAGE_PATH'
		]),
	},

	methods: {
		...mapActions([
			'CLEAR_CART', 'GET_USER_CART', 'GET_BTN_DISABLED', 'A_SET_BTN_ABLED',
			'GET_PAGE_PATH'
		]),
		
		clearCart() {
			this.CLEAR_CART();
			this.GET_BTN_DISABLED()
		},

		makeCartBntDisable() {
			document.querySelector('.icon-cart-wr').setAttribute("disabled", "disabled")
		},

		goToHomePage(){
			this.$router.push(`/`);
			this.GET_PAGE_PATH('/');
		},
	},

	mounted() {
		if (this.USER_CART.length === 0) {
			this.GET_BTN_DISABLED();
		} 

	},

}
</script>

<style lang="scss" scoped>
.cart-header .wh {
	background-image: none;
}

.wrapper {
	margin-top: 30px;
	margin-bottom: 30px;
	flex-wrap: wrap;
}

.cart-box {
	display: flex;
	justify-content: space-between;
	align-items: center;


	.item-box,
	.form-box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 310px;
		flex-grow: 1;
		padding: 20px;
		position: relative;
	}

	.cart-item {
		margin-bottom: 0px;
	}
}

.btn-box {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	.btn {
		max-width: 160px;
		margin: 0 10px;
	}
}
.text_message {
		color: $pink-color;
		font-size: 2rem;
	}

.disabled {
	cursor: not-allowed !important;
	background-color: gray !important;
	border: none !important;
	color: aliceblue !important;
}

.summary {
	width: 360px;
	min-height: 200px;
	background-color: #F5F3F3;
}
</style>