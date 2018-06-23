var youtube={
		"videos":[
			{
				"player":"player1",
				"id":"LezW1WYGc9A"
			},
			{
				"player":"player2",
				"id":"fOpoehTmlqQ"
			},
			{
				"player":"player3",
				"id":"iv4uM8qulTo"
			},
			{
				"player":"player4",
				"id":"iyJdER8sEhA"
			},
			{
				"player":"player5",
				"id":"KqL-TdJie28"
			},
			{
				"player":"player6",
				"id":"kcWe4NV6FeI"
			},
			{
				"player":"player7",
				"id":"LA3I_-WyhpU"
			},
			{
				"player":"player8",
				"id":"DWbQEQhduWU"
			},
			{
				"player":"player9",
				"id":"MxtnViH_z3A"
			},
			{
				"player":"player10",
				"id":"rLNnSdBPGVM"
			},
			{
				"player":"player11",
				"id":"MjuwX1B3ego"
			},
			{
				"player":"player12",
				"id":"Ix4Qw4saADk"
			},
			{
				"player":"player13",
				"id":"Eb2S1walZOs"
			},
			{
				"player":"player14",
				"id":"tWqZVGGQ3og"
			},
			{
				"player":"player15",
				"id":"vigbqZ7Bh_Y"
			},
			{
				"player":"player16",
				"id":"dD_87EKuRx8"
			},
			{
				"player":"player17",
				"id":"3-MbsdSYMBk"
			},
			{
				"player":"player18",
				"id":"6TH0x79IyqQ"
			},
			{
				"player":"player19",
				"id":"kULX2Lwo51U"
			},
			{
				"player":"player20",
				"id":"9VVjW4am9yg"
			},
			{
				"player":"player21",
				"id":"Qut7Yr7-WlM"
			},
			{
				"player":"player22",
				"id":"FskcFc1zpJE"
			},
			{
				"player":"player23",
				"id":"9j4QJ8YK8n8"
			},
			{
				"player":"player24",
				"id":"oMG_J0RJ_j8"
			},
			{
				"player":"player25",
				"id":"9j4QJ8YK8n"
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
