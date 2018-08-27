var app= angular.module("myApp",[]);

app.controller('appCtrl',function($rootScope,$scope,$http){
	$rootScope.getListFromDataForSlides=function(dataToSlice,id){
	var quotient=Math.floor(dataToSlice.length/4);
	var remainder=dataToSlice.length%4;
	var noOfList=quotient;
	var start=0;
	var end=0;
	var dataList=[];
	for(var i=0;i<quotient;i++){
		var arr=[];
		end=end+4;
		for(start;start<end;start++){
			arr.push(dataToSlice[start]);
		};
		dataList.push(arr);
	};
	if(remainder!=0){
		var len=dataToSlice.length-1;
		var arr2=[];
		for(var j=remainder;j>0;j--){
			arr2.push(dataToSlice[len]);
			len=len-1;
		}
		dataList.push(arr2);
	};
	if(id=='mentor2'){
	$rootScope.mentorsList=dataList;
	};
	if(id=='youtube'){
	$rootScope.youtubeList=dataList;
	};
	};
	
	$rootScope.viewImageObj={};
	$rootScope.viewImage=function(imgObj){
		$rootScope.viewImageObj=imgObj;
		$('#exampleModalCenter').modal();
		
	};
	
	$rootScope.preNextImage=function(index,id){
		var imgObj={};
		var idx=parseInt(index);
		if(id==='NEXT'){
			$rootScope.viewImageObj=$rootScope.galleryData.gallery[idx];
		}else{
			$rootScope.viewImageObj=$rootScope.galleryData.gallery[idx-2];
		}
	};
	
	$rootScope.courseFlag=false;
	$rootScope.dataID=null;
	$rootScope.dataTarget=null;
	$rootScope.setCourse=function(id,target){
		$rootScope.courseFlag=!$rootScope.courseFlag;
		$rootScope.dataID=id;
		$rootScope.dataTarget=target;
	};
	
	$rootScope.viewDownloads=function(){
		$('#downloadModal').modal();
	};
	
	//loads popup
	setTimeout(function(){
	  $('#RegisterForm').modal();
	}, 10000);
	
	$rootScope.closeAdAndNavigate=function(){
		$('#RegisterForm').modal('hide');
	}
});
