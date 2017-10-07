angular.module('book-store',['angular.filter'])
.component('books',{

  // bindings: {

  //   books:'<'

  // },

  controller: function($scope){
    //This part to store comment in the database and bring all the comments on the book in the database
    this.books=window.data;
    this.coment;
    this.coments;
    this.sendComent=function(){
      $.ajax({
           async: false, 
           data:{
            id : this.activeBook._id ,
            coment:this.coment
           },
           url: "http://localhost:1128/coment",
           type:'POST',
           dataType: 'json',
           success: function(result){
             $scope.$ctrl.coments=result;
             console.log($scope.$ctrl.coments)
           }
      })
    }
    //this part to handle the filter of catogories 
    $scope.selected=[];
    $scope.geners=['Career & Study advice','Engineering','IT & Programming','Natural Sciences','others'];
    
    $scope.exist=function(index){
      var  gener=$scope.geners[index];
      var search = $('#search').val();
      if(search===gener){
        $scope.search='';
      }else{
       $scope.search=gener;
      }
    }
    $scope.toggleSlection= function(item){
      var idx= $scope.selected.indexOf(item);
      if(idx> -1){
        $scope.selected.splice(idx,1);
      }
      else{
        $scope.selected.push(item);
      }
      $scope.$ctrl.books = $scope.selected;
    },
   // this function determine the book clicked in the modal
    this.activeBook={};
    this.changeBook=function (index){
      this.activeBook=index;
    }
  
},



templateUrl:`../templates/books.html`

})

