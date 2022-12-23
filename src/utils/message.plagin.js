export default {
  //create plagin
  install(app, options){
    app.config.globalProperties.$message = function(summary,detail){
      this.$toast.add({
        severity:'warn', 
        summary: summary, 
        detail:detail, 
        life: 5000
    });
    }

    app.config.globalProperties.$error = function(summaryErr,detailErr){
      this.$toast.add({
        severity:'error', 
        summary: summaryErr, 
        detail:detailErr, 
        life: 5000
      }); 
    }
  }
}

// then in main.js we need to import this plagin and .use(....)