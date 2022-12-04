<template>
    <nav class="menu">
        <h2 class="menu__title">Menu</h2>
        <div class="ul">
            <li class="li" v-for="li in MENU"  @click="$router.push(`/catalog`)">{{ li.category }}
                <div class="ul">
                    <li class="li_sub" v-for="item in li.items">{{ item }}</li>
                </div>
            </li>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "my-menu",

    computed:{
      ...mapGetters([
        "MENU"
      ])
    },

    methods:{
        ...mapActions([
            "GET_MENU"
        ])
    },

    mounted(){
        this.GET_MENU();
        console.log()
    }
}
</script>

<style lang="scss" scoped>
.menu{
    height: auto;
    width: 300px;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;

    @media(max-width: $media-phone){
        width: 370px;
    }
    @media(max-width: $media-phoneS){
        width:320px;
    }
}

.menu__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    text-transform: uppercase;
    margin-bottom: 24px;
}
.ul{
    list-style: none;
}
.li {
    padding-left: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #F16D7F;
    text-transform: uppercase;
    margin-bottom: 15px;
}
.li_sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #6F6E6E;
    text-transform: capitalize;
    padding-left: 20px;
    margin-bottom: 15px;
    margin-top: 15px;
    cursor: pointer;
    transition: 0.5s;
}

.li_sub:hover{
    color:#F16D7F;
    transform: scale(1.2);
}
</style>
