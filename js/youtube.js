var youtube={
		"videos":[
			{
				"player":"player1",
				"id":"mWOTaedvSQM"
			},
			{
				"player":"player2",
				"id":"L2abRCNZ0f4"
			},
			{
				"player":"player3",
				"id":"FskcFc1zpJE"
			},
			{
				"player":"player4",
				"id":"9j4QJ8YK8n8"
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
