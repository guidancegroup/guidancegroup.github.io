var course=angular.module("CourseApp",[]);
course.controller('courseControl',function($scope,$rootScope){

  //download material entry
$rootScope.downloadsData={
	"downloads":[
		{
			"index":"1",
			"examination":"MPSC",
			"syllabus":"#",
			"booksList":"#",
			"previousQuestions":"#",
			"notes":"#"
		},
		{
			"index":"2",
			"examination":"UPSC",
			"syllabus":"#",
			"booksList":"#",
			"previousQuestions":"#",
			"notes":"#"
		},
		{
			"index":"3",
			"examination":"MLEP",
			"syllabus":"#",
			"booksList":"#",
			"previousQuestions":"#",
			"notes":"#"
		}
	]
}


});
