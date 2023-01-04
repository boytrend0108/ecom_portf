export default {
  state:{
    paginationPage : 1,
    idStart: 1,
    idEnd: 6
  },
  getters: {
    PAGINATION_PAGE(state){
      return state.paginationPage
    },
    ID_START(state){
       return state.idStart
    },
    ID_END(state){
      return state.idEnd
   }
  },
  actions: {
   
  },
  mutations: {
    SET_PAGINATION_PAGE(state, paginationPage ){
       state.paginationPage = paginationPage;
       switch(paginationPage){       
        case 1 : 
          state.idStart = 1;
          state.idEnd = 6
          break  
        case 2 : 
          state.idStart = (this.getters.CATALOGITEMS.length / state.paginationPage) + 1;
          state.idEnd =  state.idStart + 5 
          console.log(state.idStart, state.idEnd)
          break  
        default:
          state.idStart = 1;
          state.idEnd =  6   
       }    
    }
  }
}