<template>
   <Paginator 
     class="paginationItem"
     @page="onPage($event)"
    :rows="6" 
    :totalRecords="CATALOGITEMS.length"
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
            'CATALOGITEMS'
        ]),
  },

  methods: {

    onPage(event) {
      console.log(event)
      let paginationPage = event.page + 1
      this.$store.commit('SET_PAGINATION_PAGE', paginationPage)
    }
  }
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

.p-dropdown-trigger-icon{
  font-size: 3rem !important;
}

.p-dropdown-item{
  font-size: 3rem !important;
}

.p-dropdown .p-dropdown-trigger {
    background: transparent;
    color: #6c757d;
    width: 6rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}

.p-inputtext {
    font-size: 3rem !important;
}
.p-paginator .p-dropdown {
    height: 6rem !important;
    width: 7rem !important;
}
</style>  