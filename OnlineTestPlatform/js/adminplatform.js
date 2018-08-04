
platform.controller('adminCtrl',function($rootScope,$scope,$http,storageService){
	$scope.questionSet={
			"questionSetCode":"",
			"timeLimit":0,
			"scheduledDate":"",
			"isNegative":false,
			"negativeMarks":"",
			"questions":[]
	}
	$scope.question="";
	$scope.questionType="";
	$scope.optionFirstA="";
	$scope.optionSecondB="";
	$scope.optionThirdC="";
	$scope.optionFourD="";
	$scope.userInputAnswer="";
	$scope.timeLimit=null;
	$scope.scheduledDate="";
	$scope.scheduledTime="";
	$scope.today=new Date();
	$scope.sol="";
	$scope.marks="";
	$scope.isNegative=false;
	$scope.negativeMarks="";
	$scope.questionSetCode="";
	$scope.answerList=[];
	$scope.answerObj={
		"id":0,
		"answer":[]
			
	};
	$scope.marksOption=[
		{
			"description":"1",
			"code":"1"
		},
		{
			"description":"2",
			"code":"2"
		},
		{
			"description":"3",
			"code":"3"
		},
		{
			"description":"4",
			"code":"4"
		}
		
	];
	$scope.negativeList=[
		{
			"description":"1/4",
			"code":"1/4"
		},
		{
			"description":"1/3",
			"code":"1/3"
		},
		{
			"description":"1/2",
			"code":"1/2"
		},
		{
			"description":"1",
			"code":"1"
		}
		
	];
	$scope.marks=$scope.marksOption[0].code;
	$scope.noOfAns=0;
	$scope.qTypeErrmsg="";
	$scope.successMsg="";
	$scope.optionList=[];
	$scope.optionObj={
			"option":"",
			"value":""
	};
	$scope.questionNumber=1;
	$scope.questionObj={
			"questionNumber":0,
			"question":"",
			"questionType":"",
			"options":[],
			"marks":1
	};
	$scope.questionList=[];
	$scope.saveFlag=false;
	$scope.addFlag=false;
	
	
	$scope.questionTypeList=[
		{
			"type":"Radio",
			"value":"R"
		},
		{
			"type":"Multiple",
			"value":"M"
		},
		{
			"type":"User Input",
			"value":"U"
		}
	];
	$scope.questionType=$scope.questionTypeList[0].value;
	
	//examID
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	  for (var i = 0; i < 4; i++)
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	 
	$scope.questionSetCode=text;
	  
	$scope.resetAnsType=function(){
		$scope.noOfAns=0;
		$scope.qTypeErrmsg="";
		$scope.answerObj={
				"id":0,
				"answer":[]
					
			};
		document.getElementById("optionAid").disabled = false;
		document.getElementById("optionBid").disabled = false;
		document.getElementById("optionCid").disabled = false;
		document.getElementById("optionDid").disabled = false;
		var btns = document.getElementsByClassName("btn-success");
		var cnt=btns.length;
		for (var i = 0; i < cnt ; i++) {
			btns[0].className = btns[0].className.replace("btn-success", "btn-default");
		}

	}
	
	$scope.setOptions=function(option,id){
		if(id=='A'){
			$scope.optionFirstA=option;
		}else if(id=='B'){
			$scope.optionSecondB=option;
		}else if(id=='C'){
			$scope.optionThirdC=option;
		}else if(id=='D') {
			$scope.optionFourD=option;
		}else{
			$scope.userInputAnswer=option;
		}
	}
	
	$scope.addAnswers=function(id){
		var answer="";
		if(id=='A'){
			answer=$scope.optionFirstA;
		}else if(id=='B'){
			answer=$scope.optionSecondB;
		}else if(id=='C'){
			answer=$scope.optionThirdC;
		}else if(id=='D') {
			answer=$scope.optionFourD;
		}else{
			answer=$scope.userInputAnswer;
		}
	
		if(answer==""){
			$scope.qTypeErrmsg="Enter Option First"
			console.log(answer+" "+$scope.noOfAns+" "+$scope.questionType+" ERR blank");
			return $scope.qTypeErrmsg;
		}
		$scope.noOfAns++;
		if($scope.noOfAns===1 ){
			$scope.qTypeErrmsg="";
			$scope.answerObj.id=$scope.questionNumber;
			$scope.answerObj.answer.push(answer);
			console.log(answer+" "+$scope.noOfAns+" "+$scope.questionType+" added Compulsory");
			$scope.disableOnAnswer(id);
			return;
		}
		if($scope.questionType==='R'){
			if($scope.noOfAns>1 ){
				$scope.qTypeErrmsg="Select only one option as answer or Change Question Type."
				console.log(answer+" "+$scope.noOfAns+" "+$scope.questionType+" ERR");
				return $scope.qTypeErrmsg;
			}else{
				$scope.qTypeErrmsg="";
				$scope.answerObj.id=$scope.questionNumber;
				$scope.answerObj.answer.push(answer);
				console.log(answer+" "+$scope.noOfAns+" "+$scope.questionType+" added once");
			}
		}else if($scope.questionType==='M'){
				$scope.qTypeErrmsg="";
				$scope.answerObj.id=$scope.questionNumber;
				if($scope.answerObj.answer.indexOf(answer)==-1){
					$scope.answerObj.answer.push(answer);
					console.log(answer+" "+$scope.noOfAns+" "+$scope.questionType+" added multiple");
				}else{
					$scope.qTypeErrmsg="Option already added"
					console.log(answer+" "+$scope.noOfAns+" "+$scope.questionType+" ERR");
					return $scope.qTypeErrmsg;
				}
			
		}
	
		$scope.disableOnAnswer(id);
	};
	
	$scope.disableOnAnswer=function(id){
		if(id==='A'){
			document.getElementById("optionAid").disabled=true;
			var element = document.getElementById("btnA");
			element.classList.remove("btn-default");
		    element.classList.add("btn-success");
		    
		}else if(id==='B'){
			 document.getElementById("optionBid").disabled = true;
			 var element = document.getElementById("btnB");
			 element.classList.remove("btn-default");
			 element.classList.add("btn-success");
		}else if(id==='C'){
			 document.getElementById("optionCid").disabled = true;
			 var element = document.getElementById("btnC");
				element.classList.remove("btn-default");
			    element.classList.add("btn-success");
		}else {
			 document.getElementById("optionDid").disabled = true;
			 var element = document.getElementById("btnD");
				element.classList.remove("btn-default");
			    element.classList.add("btn-success");
		}
	}
	
	$scope.saveQuestion=function(){
		$scope.successMsg="";
		$scope.qTypeErrmsg="";
		if($scope.saveFlag){
			$scope.qTypeErrmsg="Question already saved, Add to paper.";
			return $scope.qTypeErrmsg;
		}
		if($scope.timeLimit==undefined ||$scope.timeLimit==null){
			$scope.qTypeErrmsg="Please Enter Time Limit 0 to 240 minutes,0 means No time Limit";
			return $scope.qTypeErrmsg;
		}if($scope.scheduledDate==undefined ||$scope.scheduledDate==""){
			$scope.qTypeErrmsg="Please Enter Date when Test will be Active";
			return $scope.qTypeErrmsg;
		}if($scope.scheduledTime==undefined ||$scope.scheduledTime==""){
			$scope.qTypeErrmsg="Please Enter Time When Test will be Active";
			return $scope.qTypeErrmsg;
		}if($scope.isNegative){
			if($scope.negativeMarks==undefined ||$scope.negativeMarks==""){
				$scope.qTypeErrmsg="Please Select Negative Marks";
				return $scope.qTypeErrmsg;
			}
		}else{
			$scope.negativeMarks="";
		}
		if($scope.question==""||$scope.question==undefined){
			$scope.qTypeErrmsg="Please enter Question";
			return $scope.qTypeErrmsg;
		}if($scope.questionType==""||$scope.questionType==undefined){
			$scope.qTypeErrmsg="Please Select Question Type";
			return $scope.qTypeErrmsg;
		}
		if($scope.questionType==='U'){
			if($scope.userInputAnswer=="" || $scope.userInputAnswer==undefined){
				$scope.qTypeErrmsg="Please add answer to Question";
				return $scope.qTypeErrmsg;
			}else{
				$scope.answerObj.id=$scope.questionNumber;
				$scope.answerObj.answer.push($scope.userInputAnswer);
			
			}
		}else{
			if($scope.optionFirstA=="" || $scope.optionSecondB=="" || $scope.optionThirdC=="" ||$scope.optionFourD==""){
				$scope.qTypeErrmsg="Please add options to Question";
				return $scope.qTypeErrmsg;
			}
			if($scope.answerObj.id==0 || $scope.answerObj.answer.length==0){
				$scope.qTypeErrmsg="Please add answers to Question,Click on labels to add";
				return $scope.qTypeErrmsg;
			}
			
		}
		console.log("fields Validated");
		$scope.qTypeErrmsg="";
		$scope.questionObj.questionNumber=$scope.questionNumber;
		$scope.questionObj.question=$scope.question;
		$scope.questionObj.questionType =$scope.questionType;
		if($scope.questionType==='R' || $scope.questionType==='M'){
			$scope.optionList.push($scope.optionFirstA);
			$scope.optionList.push($scope.optionSecondB);
			$scope.optionList.push($scope.optionThirdC);
			$scope.optionList.push($scope.optionFourD);
			console.log("optionList "+$scope.optionList);
			for(var i=0;i<$scope.optionList.length;i++){
				$scope.optionObj={
						"option":"",
						"value":""
				};
				var op=$scope.optionList[i];
				$scope.optionObj.option=op;
				$scope.optionObj.value=op;
				$scope.questionObj.options.push($scope.optionObj);
			}
		}
		$scope.questionObj.marks=$scope.marks;
		$scope.saveFlag=true;
		$scope.successMsg="Question Saved!! Please Add to Paper.";
	};
	
	$scope.addToPaper=function(){
		$scope.successMsg="";
		$scope.qTypeErrmsg="";
		if(!$scope.saveFlag){
			$scope.qTypeErrmsg="Please Save Question";
			return $scope.qTypeErrmsg;
		}
		$scope.questionList.push($scope.questionObj);
		$scope.answerList.push($scope.answerObj);
		$scope.questionSet.questionSetCode=$scope.questionSetCode;
		$scope.questionSet.isNegative=$scope.isNegative;
		$scope.questionSet.timeLimit=$scope.timeLimit;
		$scope.questionSet.negativeMarks=$scope.negativeMarks;
		var finalDate=new Date($scope.scheduledDate);
		var timeDate=new Date($scope.scheduledTime);
		var hr=timeDate.getHours();
		var min=timeDate.getMinutes();
		finalDate.setHours(hr);
		finalDate.setMinutes(min);
		finalDate.setSeconds(00);
		$scope.questionSet.scheduledDate=finalDate;
		$scope.sol=$scope.questionSet.scheduledDate.getMinutes();
		$scope.questionSet.questions=$scope.questionList;
		$scope.resetQuestion();
		var num=$scope.questionNumber;
		$scope.addFlag=true;
		$scope.successMsg="Question "+num+" Added Successfully.";
		$scope.questionNumber++;
		
	};
	
	
	$scope.resetQuestion=function(){
		$scope.question="";
		$scope.questionType=$scope.questionTypeList[0].value;
		$scope.optionFirstA="";
		$scope.optionSecondB="";
		$scope.optionThirdC="";
		$scope.optionFourD="";
		$scope.userInputAnswer="";
		$scope.answerObj={
			"id":0,
			"answer":[]
				
		};
		$scope.noOfAns=0;
		$scope.qTypeErrmsg="";
		$scope.optionList=[];
		$scope.optionObj={
				"option":"",
				"value":""
		};
		
		$scope.questionObj={
				"questionNumber":0,
				"question":"",
				"questionType":"",
				"options":[],
				"marks":1
		};
		
		$scope.saveFlag=false;
		$scope.successMsg="";
		$scope.resetAnsType();
	};
	
	
	$scope.copyToClipBoard=function(id){
		 var copyText = document.getElementById(id);
		 copyText.select();
		 document.execCommand("copy");
		 console.log("Copied the text: " + copyText.value);
	};
	
	
});
