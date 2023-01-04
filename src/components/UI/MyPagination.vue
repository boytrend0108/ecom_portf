<template>
   <Paginator 
     class="paginationItem"
    :rows="10" 
    :totalRecords="FILTERED_CART.length"
    :template="{
        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
        '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
        '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown'
    }"
    />
</template>

<script>
import { mapGetters } from "vuex";
export default {
   name:'my-pagination',
   computed:{
    ...mapGetters([
            'FILTERED_CART'
        ]),
  },
}
</script>

<style lang="scss" >
.pi-angle-double-left,
.pi-angle-double-right{
   font-size: 3rem !important;
   color: $pink-color;
}
.pi-angle-right,
.pi-angle-left{
   font-size: 2rem !important;
   color: $pink-color;
}

.p-paginator-current{
  color: $main-color;
  font-size: 3rem;
}

.p-link{
  color: $main-color;
  font-size: 3rem !important;
  margin: 0 1rem !important;
  min-width: 5rem !important;
  height: 5rem !important;
}
.p-highlight{
  color: $pink-color !important;
}

</style>  