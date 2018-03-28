app.controller('dataCtrl',function($rootScope,$scope){

$rootScope.slogan="Only Guidance Prevails . . .";

//courses entries
$rootScope.courseData={
  "courses":[
    {
      "name":"MPSC",
      "text":"What is MPSC?",
      "url":"partials/courses.html"
    },
    {
      "name":"UPSC",
      "text":"What is UPSC?",
      "url":"courses/UPSC/"
    },
    {
      "name":"MLEP",
      "text":"Multi-Linkage Examination Program",
      "url":"partials/courses.html"
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
      "name":"img1.jpg",
      "url":"#"
    },
    {
      "name":"img2.jpg",
      "url":"#"
    },
    {
      "name":"img3.jpg",
      "url":"#"
    },
    {
      "name":"img4.jpg",
      "url":"#"
    },
    {
      "name":"img5.jpg",
      "url":"#"
    },
    {
      "name":"img6.jpg",
      "url":"#"
    },
    {
      "name":"img7.jpg",
      "url":"#"
    },
    {
      "name":"img8.jpg",
      "url":"#"
    },
    {
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
	},
	{ 
		"name":"player5" ,
		"player":"player5"
	}
	]
}

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

//Add slides for main slideshow here
$rootScope.carouselData={
	"slides":[
	
	]
};






});

