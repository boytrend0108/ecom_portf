<template>
	<div class="position">
		<nav class="navbar">
			<div class="wrapper">
				<div class="nav-block">
					<img 
					  class="logo" 
					  @click="goToHomePage" 
					  src="@/assets/img/logo.png" 
					  alt="logo">
					<font-awesome-icon 
					class="font-aw " 
					icon="fa-solid fa-magnifying-glass"
					v-show="isMobile"
					 />
					<input 
					  type="text" 
					  class="search-input" 
					  name="search" 
					  v-model="searchInput" 
					  @input="sendSearchInput"
						v-show="isMobile"
					  >
				</div>

				<div class="nav-block">
					<SplitButton 
				    :label="name" 
				    icon="pi pi-user" 
				    :model="items"
				    class="splitBtn"
						@click="goToLoginPage"
				  />
					<font-awesome-icon 
					icon="fa-solid fa-gears" 
					class="font-aw "
					v-show="IS_ADMIN"
					@click="this.$router.push(`/admin?message=admin`)"
					/>
					<font-awesome-icon 
					  class="font-aw " 
					  icon="fa-solid fa-bars"
						v-show="isMobile"
					  @click="SWITCH_SHOW_MENU" />
					<font-awesome-icon 
					  v-show="isMobile" 
					  class="font-aw " 
					  @click="goToCartPage"
						icon="fa-regular fa-user" />
					<button
					  disabled 	
						@click="SWITCH_SHOW_CART" 				
					  :class="isDisabled"
					  class="icon-cart-wr"
						>
						<font-awesome-icon
						  v-show="isMobile" 
						  class="font-aw fa-cart-shopping"
							icon="fa-solid fa-cart-shopping "
							:class="isDisabled" />
						<span 
						  :class="isDisabled"
							v-show="isMobile"
						  class="item-num" 
							> {{TOTAL_CART_ITEMS }} </span>
					 </button>
				</div>
			</div>
		</nav>
		<my-menu class="menu" :class="SLIDE_MENU"></my-menu>
		<my-cart class="cart-box" :class="SLIDE_CART"></my-cart>
	</div>
</template>

<script>
import MyCart from '@/components/MyCart.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
	components: { MyCart },
	props: {
		isMobile: {
			type: Boolean,
			default: true,
			required: true
		}
	},
	data() {
		return {
			searchInput: '',
			isDisabled: "",
			items: [
				{
					label: 'Cart',
					icon: 'pi pi-external-link',
					command: () => {
						 this.$router.push(`/cart`)
					}
				},
				{
					label: 'Catalog',
					icon: 'pi pi-external-link',
					command: () => {
						this.$router.push(`/catalog`)
					}
				},
				{
					label: 'Exit',
					icon: 'pi pi-external-link',
					command: () => {
					 	this.logout()
					}
				},
				
			]
		}
	},

	computed: {
		...mapGetters([
			"IS_SHOW_MENU",
			"SLIDE_MENU",
			"SHOW_CART",
			"SLIDE_CART",
			"TOTAL_CART_ITEMS",
			"SEARCH_INPUT",
			"INFO",
			"IS_ADMIN",
      "PAGE_PATH"
		]),

		name() {
			const isAuth = Object.keys(this.$store.getters.INFO).length
			if (Object.keys(this.$store.getters.INFO).length === 0) {
				return "Sign in"
			} else {
				return this.$store.getters.INFO.username
			}
		}
		},

	methods: {
		...mapActions([
			"SWITCH_SHOW_MENU", "SWITCH_SHOW_CART", "GET_SEARCH_INPUT",
			"GET_PAGE_PATH","GET_HIDE_CART","GET_NAVCART_BTN_DISABLED","CLEAR_CART"

		]),
		sendSearchInput() {
			this.GET_SEARCH_INPUT(this.searchInput)
		},

		goToHomePage(){
			this.$router.push(`/`);
			this.$store.commit('SET_PAGE_PATH','/')
			this.isDisable = ''
		},

		goToCartPage(){
			this.$router.push(`/cart`);
			this.$store.commit('SET_PAGE_PATH','/cart');
			this.GET_HIDE_CART();
			this.GET_NAVCART_BTN_DISABLED();
		},

		goToLoginPage(){
			this.$router.push(`/login`)
		},

		async logout(){
		  await	this.$store.dispatch('logout')
			this.$router.push(`/login?message=logout`)
			this.$store.commit('SET_CLEAR_CART')
		}

	},

	 mounted() {
		// get rid of parent click-event 
		document.querySelector('.p-splitbutton-menubutton').addEventListener('click', (event) => {
			event.stopPropagation()
		})
		this.$store.commit('SET_IS_ADMIN')
	}
}
</script >

<style lang="scss" scoped>

.wrapper{
	justify-content: space-between;
}
.position {
	position: relative;
}

.navbar {
	background: #222222;
	height: 70px;
	width: 100%;
	position: fixed;
	z-index: 2;
}

.nav-block {
	display: flex;
	justify-content: space-between;
	align-items: center;

}

.font-aw {
	color: white;
	height: 25px;
	width: 25px;
	margin-left: 35px;
	cursor: pointer;
	transition: 0.5s;
	background: transparent;
}

@media(max-width: 620px) {
	.fa-magnifying-glass {
		margin-left: 10px;
	}
}

@media(max-width: 590px) {
	.fa-magnifying-glass {
		display: none;
	}

	.search-input {
		display: none;
	}
}

.font-aw:hover {
	color: #F16D7F;
	transform: scale(1.3);
}

.icon-cart-wr {
	position: relative;
	background-color: transparent;
	border: none;
}

.item-num:hover {
	color: #F16D7F;
	background-color: white;
	transform: scale(1.3);
}

.fa-cart-shopping:hover {
	color: #F16D7F;
	transform: scale(1.3);
	color: aliceblue;
}

.disabled {
	@include disabled("transparent");

	.disabled:hover {
		transform: none;
	}
}

.item-num {
	background-color: #f16d7f;
	border-radius: 50%;
	width: 17px;
	height: 17px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 10px;
	position: absolute;
	left: 56px;
	bottom: 24px;
	transition: 0.5s;
}

.logo {
	cursor: pointer;
	transition: 0.5s;

	.logo:hover {
		transform: scale(1.3);
	}
}

.search-input {
	background-color: transparent;
	border: none;
	border-bottom: 1px solid white;
	padding: 0 10px;
	outline: none;
	color: white;
	font-weight: 400;
	font-size: 19.96px;
	line-height: 24px;
	margin-left: 10px;

	@media(max-width: $media-tablet) {
		width: 20rem;
	}

	@media(max-width: 670px) {
		width: 15rem;
	}
}

.menu {
	position: fixed;
	top: 70px;
	right: 0px;
	display: none;

	@media(max-width: $media-phone) {
		right: 24px;
	}

	@media(max-width: 375px) {
		right: 3px;
	}
}

.slide-left {
	-webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

	@keyframes slide-left {
		0% {
			-webkit-transform: translateX(1000px);
			transform: translateX(1000px);
		}

		100% {
			-webkit-transform: translateX(0px);
			transform: translateX(0px);
		}
	}
}

.slide-out-top {
	-webkit-animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

	@-webkit-keyframes slide-out-top {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);

		}

		100% {
			-webkit-transform: translateY(-1000px);
			transform: translateY(-1000px);

		}
	}

	@keyframes slide-out-top {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			;
		}

		100% {
			-webkit-transform: translateY(-1000px);
			transform: translateY(-1000px);

		}
	}
}

.cart-box {
	display: none;
}

::v-deep(.splitBtn) {
	.p-splitbutton-defaultbutton {
		background-color: $pink-color;
		border: $pink-color;
	}

	.p-splitbutton-menubutton {
		background-color: $pink-color;
		border: $pink-color;
		width: 3rem;
		padding: 1rem 0;
	}

	.p-button-label {
		font-size: 1.5rem;
	}

	.p-button:enabled:hover {
		background: gray;
		color: #ffffff;
		border-color: gray;
	}

	.p-button-icon{
		font-size: 1.7rem;
	}

}
</style>
