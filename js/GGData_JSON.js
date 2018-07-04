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
			"index":"1",
			"examination":"MPSC",
			"syllabus":"State Service Main Examination Syllabus [In Marathi].pdf",
			"booksList":"#",
			"previousQuestions":"#",
			"notes":"#"
		},
		{
			"index":"2",
			"examination":"UPSC",
			"syllabus":"UPSC Syllabus New.pdf",
			"booksList":"UPSC Book List.pdf",
			"previousQuestions":"#",
			"notes":"#"
		},
		{
			"index":"3",
			"examination":"MLEP",
			"syllabus":"Bank Examination Syllabus.pdf",
			"booksList":"#",
			"previousQuestions":"#",
			"notes":"#"
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
$rootScope.newsList=[
	{
		"news":"Online test series is available,Contact Us Now!!",
		"newsLink":"#contact"
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


});

