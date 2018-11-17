var youtube={
		"videos":[
			{
				"player":"player1",
				"id":"htg2efQCwg0"
			},
			{
				"player":"player2",
				"id":"cBWq8I60wsQ"
			},
			{
				"player":"player3",
				"id":"Bb-gRhTxUzs"
			},
			{
				"player":"player4",
				"id":"4fWFGZzGW6s"
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
			youtube.videos[i].player=new YT.Player(youtube.videos[i].player,{height: '140',width: '220',videoId: youtube.videos[i].id});
		}
        
    }
