<template>
    <nav class="menu">
        <h2>Menu</h2>
        <div class="ul">Man
            <li class="li" v-for="li in MENU">{{ li.category }}
                <div class="ul">
                    <li class="li" v-for="item in li.items">{{ item }}</li>
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
    width: auto;
    background-color: palevioletred;
    padding: 20px;
}
.ul{
    list-style: none;
}
.li{
    padding-left: 20px;
}

</style>
