var youtube={
		"videos":[
			{
				"player":"player1",
				"id":"Ix4Qw4saADk"
			},
			{
				"player":"player2",
				"id":"dD_87EKuRx8"
			},
			{
				"player":"player3",
				"id":"Ix4Qw4saADk"
			},
			{
				"player":"player4",
				"id":"dD_87EKuRx8"
			},
			{
				"player":"player5",
				"id":"Ix4Qw4saADk"
			}
			
			
		]
	}

//=================================================================================//
var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	
    function onYouTubeIframeAPIReady() {
		for(var i=0; i<youtube.videos.length;i++){
			youtube.videos[i].player=new YT.Player(youtube.videos[i].player,{height: '200',width: '300',videoId: youtube.videos[i].id});
		}
        
    }