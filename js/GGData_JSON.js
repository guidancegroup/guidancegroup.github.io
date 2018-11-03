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
      "about":"",
      "degree":["M.Com(Management)", "M.A(Economics)", "LLB Pursuing", "appeared (Territorial Army) Interview round"],
	  "image":"samir.jpg",
      "url":"#"
    },
    {
      "name":"Akshay Goud",
      "about":"",
	"degree":["B.E (Computers)", "M.A (Public Administration)","M.E(CNIS) Pursuing"],
	  "image":"AkshayGoud.jpg",
      "url":"#"
    },
    {
      "name":"Hitesh Potdar",
      "about":"",
      "degree":["B.Tech (Mechanical)", "M.Tech (Mechanical)", "appeared UPSC-CSE Interview"],
	  "image":"HiteshPotdar.jpg",
      "url":"#"
    },
    {
      "name":"Akshay Palande",
      "about":",  has  .",
      "degree":["B.E (Mechanical)","M.A(Public Administration)","appeared twice UPSC-CSE Mains"],
	  "image":"AkshayPalande.jpg",
      "url":"#"
    },
	{
      "name":"Amit Sarwade",
      "about":"",
      "degree":["BMS","cracked Tier-1 examinations of IBPS/PO and Clerical","specializes in Quantitative Aptitude"],
	  "image":"AmitSarwade.jpg",
      "url":"#"
    },
	{
      "name":"Dr. Vaibhav Napte",
      "about":"Has , has achieved a feat of  etc in the .",
      "degree":["appeared UPSC-CAPF Interview","appeared Mains examinations of MPSC,STI,PSI,UPSC in same year"],
	  "image":"VaibhavNapte.jpg",
      "url":"#"
    },
	{
      "name":"Monika Sethia",
      "about":"",
      "degree":["M.COM","NET/SET qualified","Specializes in English"],
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
			name:"MPSC.jpg"
		}
		{
			slide:2,
			name:"OnlineMockTestAd.jpg"
		}
		
	]
};

//scrolling News and alerts 
//COPY the content from { to  } then give , after } then paste just copied then edit 
$rootScope.newsList=[
	{
		"news":"IBPS recruitment 2018-19 notification 7275 Clerk Vacancies, APPLY HERE " ,
		"newsLink":"https://files.sabhijobs.com/wp-content/uploads/2018/09/Sabhijobs_IBPS_Clerk_7275_posts.pdf"
	},
	{
		"news":"Latest Government Jobs 2018-19 Notification, 4th-10th Aug 2018 CLICK HERE!! " ,
		"newsLink":"https://drive.google.com/drive/folders/1eQcj7tDzknj6-AbFusKu3YDfrcR0f5M6?ogsrc=32"
	},
	{
		"news":"Indian Bank recruitment 2018-19 notification 417 Probationary Officer Posts Apply Here!! " ,
		"newsLink":"http://www.indianbank.in/pdfs/rec/31072018porecprocess.pdf"
	},
	{
		"news":"Online test series for IBPS/RBI/RRB Examinations are available. To avail kindly Contact Us on 7738738982 " ,
		"newsLink":""
		
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

