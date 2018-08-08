app.controller('dataCtrl',function($rootScope,$scope){

$rootScope.slogan="";

//courses entries
$rootScope.courseData={
  "courses":[
    {
      "name":"MPSC",
      "text":"What is MPSC?",
	  "id":"mpscKnowMore"
    },
    {
      "name":"UPSC",
      "text":"What is UPSC?",
	  "id":"upscKnowMore"
    },
    {
      "name":"MLEP",
      "text":"Multi-Linkage Examination Program",
	  "id":"mlepKnowMore"
    }
    ]
}
	
//mentors entry
$rootScope.mentorData={
  "mentors":[
    { 
      "name":"Samir Inpure",
      "about":"M.Com(Management), M.A(Economics), LLB Pursuing AND has appeared for (Territorial Army) Interview round.",
      "degree":"",
	  "image":"samir.jpg",
      "url":"#"
    },
    {
      "name":"Akshay Goud",
      "about":"B.E (Computers), M.A (Public Administration), M.E(CNIS) Pursuing.",
      "degree":"",
	  "image":"AkshayGoud.jpg",
      "url":"#"
    },
    {
      "name":"Hitesh Potdar",
      "about":"B.Tech (Mechanical), M.Tech (Mechanical) has appeared for UPSC-CSE Interview.",
      "degree":"",
	  "image":"HiteshPotdar.jpg",
      "url":"#"
    },
    {
      "name":"Akshay Palande",
      "about":"B.E (Mechanical), M.A(Public Administration) has appeared for UPSC-CSE Mains twice.",
      "degree":"",
	  "image":"AkshayPalande.jpg",
      "url":"#"
    },
	{
      "name":"Amit Sarwade",
      "about":"BMS, he has cleared most of the Tier-1 examinations of IBPS/PO and Clerical. He specializes in Quantitative Aptitude.",
      "degree":"",
	  "image":"AmitSarwade.jpg",
      "url":"#"
    },
	{
      "name":"Dr. Vaibhav Napte",
      "about":"Has appeared for UPSC-CAPF Interview, has achieved a feat of appearing for Mains examinations of MPSC,STI,PSI,UPSC etc in the same year.",
      "degree":"",
	  "image":"VaibhavNapte.jpg",
      "url":"#"
    },
	{
      "name":"Monika Sethia",
      "about":"English Teacher M.COM , She is a NET/SET qualified faculty and currently teaches English.",
      "degree":"",
	  "image":"MonikaSethia.jpg",
      "url":"#"
    }
    
    ]
}

//wellWishers entries
$rootScope.wellWisherData={
  "wellWishers":[
    { 
      "name":"Nitin Kusalkar",
      "about":"Currently serving in Odisha cadre.",
      "post":"IPS",
      "slide":"1"
    },
    {
      "name":"Swapnil Meshram ",
      "about":"Currently serving in Odisha cadre.",
      "post":"Assistant BDO",
      "slide":"2"
    },
    {
      "name":"Rahul Nikam",
      "about":"B.E (PRODUCTION), has appeared UPSC-CSE Interview round.",
      "post":"Nayab Tahasildar",
      "slide":"3"
    },
    {
      "name":"Digvijay Patil",
      "about":"B.E, Author of a book specially designed for students focusing on Assistant Commadant position.",
      "post":"Assistant Commandant Officer",
      "slide":"4"
    }
    
    ]
}

//gallery  photo entries
$rootScope.galleryData={
  "gallery":[
    { 
		"index":"1",
      "name":"img1.jpg",
      "url":"#"
    },
    {
		"index":"2",
      "name":"img2.jpg",
      "url":"#"
    },
    {
		"index":"3",
      "name":"img3.jpg",
      "url":"#"
    },
    {
		"index":"4",
      "name":"img4.jpg",
      "url":"#"
    },
    {
		"index":"5",
      "name":"img5.jpg",
      "url":"#"
    },
    {
		"index":"6",
      "name":"img6.jpg",
      "url":"#"
    },
    {
		"index":"7",
      "name":"img7.jpg",
      "url":"#"
    },
    {
		"index":"8",
      "name":"img8.jpg",
      "url":"#"
    },
    {
		"index":"9",
      "name":"img9.jpg",
      "url":"#"
    }
    
    ]
}

$rootScope.youtubePlayerData={
	"players":[
	{ 
		"name":"player1" ,
		"player":"player1" 
	},
	{ 
		"name":"player2" ,
		"player":"player2"
	},
	{ 
		"name":"player3" ,
		"player":"player3"
	},
	{ 
		"name":"player4" ,
		"player":"player4"
	}
	]
}

$rootScope.youtubePlayerData.players=$rootScope.youtubePlayerData.players.reverse();
	
//download material entry
$rootScope.downloadsData={
	"downloads":[
		{
			"fileName":"State Service Main Examination Syllabus [In Marathi].pdf",
			"examination":"MPSC",
			"category":"syllabus"
		},
		{
			
			"fileName":"UPSC Syllabus New.pdf",
			"examination":"UPSC",
			"category":"syllabus"
		},
		{
			"fileName":"Bank Examination Syllabus.pdf",
			"examination":"Bank",
			"category":"syllabus"
		},
		{
			"fileName":"State Service Main Examination-[In English].pdf",
			"examination":"MPSC",
			"category":"syllabus"
		},
		{
			"fileName":"State Services Preliminary Examination.pdf",
			"examination":"MPSC",
			"category":"syllabus"
		},
		{
			"fileName":"UPSC Book List.pdf",
			"examination":"UPSC",
			"category":"book"
		}
	]
}

//Add slides for main slideshow here
$rootScope.carouselData={
	"slides":[
		{
			slide:1,
			name:"default.jpg"
		}
	]
};

//scrolling News and alerts 
//COPY the content from { to  } then give , after } then paste just copied then edit 
$rootScope.newsList=[
	{
		"news":"Online test series is available,Contact Us Now!! " ,
		"newsLink":""
	},
	{
		"news":"Latest Government Jobs 2018-19 Notification, 4-10 Aug 2018 Hurry Up!! " ,
		"newsLink":"https://drive.google.com/drive/folders/1eQcj7tDzknj6-AbFusKu3YDfrcR0f5M6?ogsrc=32"
	}
]
	


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
	for(var i=0;i<$scope.downloadsData.downloads.length;i++){
		var key1="";
		var key2="";
		var key3="";
		$scope.downloadsData.downloads[i].index=i+1;
		key1=$scope.downloadsData.downloads[i].fileName.split('.')[0];
		key2=$scope.downloadsData.downloads[i].examination;
		key3=$scope.downloadsData.downloads[i].category;
		$scope.keywordList.push(key1);
		if($scope.keywordList.indexOf(key2) === -1 ){
			$scope.keywordList.push(key2);
		}
		if($scope.keywordList.indexOf(key3) === -1){
			$scope.keywordList.push(key3);
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

