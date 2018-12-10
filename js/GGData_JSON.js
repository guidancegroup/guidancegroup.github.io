app.controller('dataCtrl',function($rootScope,$scope,$http){



$http.get("GGData.json").then(function(response) {
    //First function handles success
    $scope.menuList = response.data.adminMenu;
    console.log("$scope.menuList ");
    console.log($scope.menuList);
    for(var i=0;i<$scope.menuList.length;i++){
    	if($scope.menuList[i].menuId=='1'){
    		$rootScope.courseData=$scope.menuList[i].menuContain;
    		 console.log($rootScope.courseData);
    	}else if($scope.menuList[i].menuId=='2'){
    		$rootScope.liveClassData=$scope.menuList[i].menuContain;
    		console.log($rootScope.liveClassData);
    	}else if($scope.menuList[i].menuId=='3'){
    		$rootScope.mentorData=$scope.menuList[i].menuContain;
    		$rootScope.getListFromDataForSlides($rootScope.mentorData,'mentor2');
    		console.log($rootScope.mentorData);
    	}else if($scope.menuList[i].menuId=='4'){
    		$rootScope.wellWisherData=$scope.menuList[i].menuContain;
    		console.log($rootScope.wellWisherData);
    	}else if($scope.menuList[i].menuId=='5'){
    		$rootScope.testimonialData=$scope.menuList[i].menuContain;
    		console.log($rootScope.testimonialData);
    	}else if($scope.menuList[i].menuId=='6'){
    		$rootScope.galleryData=$scope.menuList[i].menuContain;
    		console.log($rootScope.galleryData);
    	}else if($scope.menuList[i].menuId=='7'){
    		$rootScope.youtubePlayerData=$scope.menuList[i].menuContain;
    		$rootScope.youtubePlayerData=$rootScope.youtubePlayerData.reverse();
    		$rootScope.getListFromDataForSlides($rootScope.youtubePlayerData,'youtube');
    		console.log($rootScope.youtubePlayerData);

    		
    	}else if($scope.menuList[i].menuId=='8'){
    		$rootScope.downloadsData=$scope.menuList[i].menuContain;
    		$rootScope.initDownload();
    		console.log($rootScope.downloadsData);
    	}else if($scope.menuList[i].menuId=='9'){
    		$rootScope.carouselData=$scope.menuList[i].menuContain;
    		console.log($rootScope.carouselData);
    	}else if($scope.menuList[i].menuId=='10'){
    		$rootScope.newsList=$scope.menuList[i].menuContain;
    		console.log($rootScope.newsList);
    	}else{
    		console.log( "More Menus than expected");
    	}
    	
    	
    }
    
}, function(response) {
    //Second function handles error
	console.log( "Something went wrong");
   
});


//------------------------------------------------------------------------------------------

//add social media links 
$rootScope.facebookLink="";
$rootScope.instagram="";
$rootScope.linkedin="";
$rootScope.youtube="";
$rootScope.contactMe="";

//------------------------------------------------------------------------------------------
//Enter slide interval for main slideshow (1000=1 second)
$rootScope.carouselOneInterval="5000";
//Enter slide interval for Well-wishers slideshow
$rootScope.carouselTwoInterval="2000";

//--------------------Downloads-------------------------------------------------------------------
//Creates required Lists
	$scope.keywordList=[];
	$rootScope.initDownload=function(){
		for(var i=0;i<$rootScope.downloadsData.length;i++){
			var key1="";
			var key2="";
			var key3="";
			$rootScope.downloadsData[i].index=i+1;
			key1=$rootScope.downloadsData[i].fileName.split('.')[0];
			key2=$rootScope.downloadsData[i].examination;
			key3=$rootScope.downloadsData[i].category;
			$scope.keywordList.push(key1);
			if($scope.keywordList.indexOf(key2) === -1 ){
				$scope.keywordList.push(key2);
			}
			if($scope.keywordList.indexOf(key3) === -1){
				$scope.keywordList.push(key3);
			}
		}
	}
//autoComplete code developed by GuidanceGroup using angularJS
	$scope.searchKeyword="";
	$scope.filterKeyword="";
	$scope.downloadKeyword="";
	$scope.noResults="";
	$scope.errFlag=false;
	$scope.autoCompleteFlag=true;
	
	$scope.autoComplete=function(keyword){
		$scope.autoCompleteFlag=false;
		$scope.filterKeyword=keyword;
	}
	$scope.selectSuggestion=function(keyword){
		$scope.noResults="";
		$scope.searchKeyword=keyword;
		$scope.autoCompleteFlag=true;
		$scope.errFlag=true;
		$scope.applySearch();
	}
	
	$scope.applySearch=function(){
		$scope.autoCompleteFlag=true;
		if(!$scope.errFlag){
			for(var i=0;i<$scope.keywordList.length;i++){
				if($scope.keywordList[i].includes($scope.searchKeyword)){
					$scope.noResults="";
					$scope.downloadKeyword=$scope.searchKeyword;
					$scope.errFlag=true;
				}
				if($scope.errFlag){
					break;
				}
				if(!$scope.errFlag){
					$scope.downloadKeyword="";
					$scope.noResults="No results for your search, Use Suggestions";
				}
			}
		}else{
			$scope.noResults="";
			$scope.downloadKeyword=$scope.searchKeyword;
		}
		
	}
	$scope.resetSearch=function(){
		$scope.noResults="";
		$scope.searchKeyword="";
		$scope.filterKeyword="";
		$scope.downloadKeyword="";
		$scope.autoCompleteFlag=true;
		$scope.errFlag=false;
	}
});

