
platform.controller('candidateCtrl',function($rootScope,$scope,$http,$interval){
	
	$scope.expire=false;
	$scope.sureResetFlag=false;
	$scope.sureSubmitFlag=false;
	
	$scope.initializeData=function(){
		$http({
	        method : "GET",
	        url : "qwertyuiop/question.json"
	    }).then(function mySuccess(response) {
	        $scope.res = response.data;
	        $scope.exam= $scope.res.questions;
	        $scope.timeLimit=$scope.res.timeLimit;
	        
	        if(parseInt($scope.timeLimit)==0){
	        	 document.getElementById("timer").innerHTML ="No Time Restriction";
	        }else{
	     // Set the date we're counting down to
			var countDownDate = new Date();
			countDownDate.setMinutes(countDownDate.getMinutes() + parseInt($scope.timeLimit));
			// Update the count down every 1 second
			var x = $interval(function () {


			    // Get todays date and time
			    var now = new Date().getTime();
			    
			    // Find the distance between now an the count down date
			    var distance = countDownDate - now;
			    
			    // Time calculations for  minutes and seconds
			    
			    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			    
			    
			    // Output the result in an element with id="timer"
			    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
			    
			    if (minutes == 0 ) {
			    	document.getElementById("timer").style.color="#dc3545";
			    }
			    // If the count down is over, write some text 
			    
			    if (distance < 0) {
			        clearInterval(x);
			        document.getElementById("timer").innerHTML ="Time Over"
			        $scope.expire=true;
			        $('#exampleModalCenter').modal();
			    	}
			}, 1000);
	        }
			$scope.scrollHeight= $scope.exam.length*300;
			$scope.totalQ=$scope.exam.length;
			
	    }, function myError(response) {
	        $scope.exam = response.statusText;
	    });
		
		
	};
	
	

	
	$scope.candidateAnswers=[];
	$scope.candidateObj={
			"id":0,
			"marks":1,
			"answer":[]
	};
	$scope.addAnswer=function(ansObj,value){
		var id=ansObj.questionNumber;
		var type=ansObj.questionType;
		var marks=ansObj.marks;
		var idString=ansObj.questionNumber.toString();
		var existFlag=false;
		var tempObj=null;
			for(var i=0;i<$scope.candidateAnswers.length;i++){
				//if Q is answered
				if($scope.candidateAnswers[i].id===id){
					
				//radio remove existing and add value  to answer
					if(type=='R'){
						tempObj=$scope.candidateAnswers[i];
						tempObj.answer.length=0;
						tempObj.answer.push(value);
						$scope.candidateAnswers.splice(i,1);
						$scope.candidateAnswers.push(tempObj);
						existFlag=true;
						break;
					}else if(type=='M'){
						//Multiple checkbox 
						existFlag=true;
						tempObj=$scope.candidateAnswers[i];
						
							var ansIndex=tempObj.answer.indexOf(value);
								if(ansIndex==-1){
									// doesnt exist add to answer
									tempObj.answer.push(value);
									$scope.candidateAnswers.splice(i,1);
									$scope.candidateAnswers.push(tempObj);
									break;
								}else{
									
									//exists in answer still clicked means remove from answer
									tempObj.answer.splice(ansIndex,1);
									$scope.candidateAnswers.splice(i,1);
									if(tempObj.answer.length!=0){
										$scope.candidateAnswers.push(tempObj);
									}else{
										$scope.resetIndicateSuccess(id);
										return;
									}
									
									break;
									
							}
						
					}else if(type=='U'){
						//user input
						var ip="";
						var ele = document.getElementsByName(idString);
						for(var k=0;k<ele.length;k++){
							 ip=ele[k].value;
						}
						if(ip==""||ip==undefined){
							$scope.candidateAnswers.splice(i,1);
							$scope.resetIndicateSuccess(id);
							return;
						}
						tempObj=$scope.candidateAnswers[i];
						tempObj.answer.length=0;
						tempObj.answer.push(ip);
						$scope.candidateAnswers.splice(i,1);
						$scope.candidateAnswers.push(tempObj);
						existFlag=true;
						break;
					}
				}
			}
			//if that Q never answered
			if(!existFlag){
				//reset ANSOBJ
				$scope.candidateObj={
						"id":0,
						"marks":1,
						"answer":[]
				};
				$scope.candidateObj.id=id;
				$scope.candidateObj.marks=marks;
				if(type=='U'){
					//user input
					ip="";
					var ele = document.getElementsByName(idString);
					for(var k=0;k<ele.length;k++){
						 ip=ele[k].value;
					}
					if(ip==""||ip==undefined){
						return;
					}
					$scope.candidateObj.answer.push(ip);
				}else{
					
					$scope.candidateObj.answer.push(value);
					
				}
				$scope.candidateAnswers.push($scope.candidateObj);
				
			}
		//css changes
		$scope.indicateSuccess(id);
	};
	
	$scope.indicateSuccess=function(id){
		var card = document.getElementById(id);
		card.classList.add("border-success");
		
		var btn = document.getElementById('btn-'+id);
		btn.classList.add("btn-success");
		
		$scope.updateProgress();
	};
	
	$scope.resetIndicateSuccess=function(id){
		var ele = document.getElementsByName(id);
		for(var i=0;i<ele.length;i++){
			ele[i].checked = false;
			ele[i].value='';
		}
		
		var card = document.getElementById(id);
		card.classList.remove("border-success");
		
		var btn = document.getElementById('btn-'+id);
		btn.classList.remove("btn-success");
		
		$scope.updateProgress();
	};
	
	$scope.resetAnswer=function(id){
		
		for(var i=0;i<$scope.candidateAnswers.length;i++){
			if($scope.candidateAnswers[i].id===id){
				$scope.candidateAnswers.splice(i,1);
			}
		}
		
		$scope.resetIndicateSuccess(id);
		
	};
	
	$scope.resetAll=function(){
		for(var i=0;i<$scope.candidateAnswers.length;i++){
			var id =$scope.candidateAnswers[i].id;
			$scope.resetIndicateSuccess(id);
		}
		$scope.candidateAnswers.length=0;
		$scope.updateProgress();
	};
	
	$scope.submit=function(){
		$('#confirm').modal('toggle');
	};
	
	$scope.ansQ=0;
	$scope.proNotAns=100;
	$scope.proAns=0;
	$scope.updateProgress=function(){
		$scope.totalQ=$scope.totalQ;
		$scope.ansQ=$scope.candidateAnswers.length;
		
		$scope.proAns=(($scope.ansQ/$scope.totalQ)*100);
		$scope.proNotAns=100-$scope.proAns;
		
	};
	
	$scope.generateResult=function(){
		$http({
	        method : "GET",
	        url : "qwertyuiop/answer.json"
	    }).then(function mySuccess(response) {
	        $scope.answerSet = response.data;
	        
	        $scope.correct = [];	
			$scope.wrong = [];	
			$scope.points = [];	
			var correctTimes=0;
		    for(var i=0;i< $scope.answerSet.length;i++){ 
		    	var ideal= $scope.answerSet[i];
		    	 for(var j=0;j< $scope.candidateAnswers.length;j++){
		         	var given=$scope.candidateAnswers[j];
					console.log("comparing ");
					console.log("ideal");console.log(ideal);
					console.log("given");console.log(given);
		    		if(ideal.id==given.id){
						console.log("ID matched "+given.id);
						correctTimes=0;
		            	if( ideal.answer.length==given.answer.length){
		            	for(var k=0;k< given.answer.length;k++){
		                	if(ideal.answer.indexOf(given.answer[k])!=-1){
							
		                    	console.log("Matched "+given.answer[k]);
								correctTimes++;
		                    }
							if( given.answer.length==(k+1)){
								console.log("End of given list ");
								if(correctTimes==given.answer.length){
									$scope.points.push(parseInt(given.marks));
									 $scope.correct.push($scope.candidateAnswers[j]);
								}else{
									var negative=-((parseInt(given.marks)/4).toFixed(2));
									$scope.points.push(negative);
									$scope.wrong.push($scope.candidateAnswers[j]);
								}
								
								break;
							}
		                }
						}	else{
									var negative=-((parseInt(given.marks)/4).toFixed(2));
									$scope.points.push(negative);
									$scope.wrong.push($scope.candidateAnswers[j]);
								}
						
						console.log("Calculated hence remove "+given.id+"for next");
						$scope.candidateAnswers.splice(j,1);
						break;
								
		            }
					
		    	}
		    }
	    }, function myError(response) {
	        $scope.answerSet = response.statusText;
	    });
		
	    //
	}
});
