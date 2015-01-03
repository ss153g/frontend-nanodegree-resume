var bio = {
	"name" : "SHAHRUKH SYED",
	"role" : "Sr. Technical Director",

	"contacts" : {
		"mobile" : "469-247-3465",
		"email" : "ss153g@att.com",
		"github" : "ss153g",
		"twitter" : "",
		"location" : "Irving, TX"
	},
	"welcomeMessage" : "My Interactive Resume for Project 2",
	"skills" : [
		"HTML",
		"CSS",
		"JavaScript",
		"Git",
		"GitHub"
	],
	"biopic" : "https://avatars2.githubusercontent.com/u/10307756?v=3&amp;s=460",
	"display" : function(){
		// keys(bio.contacts) === undefined || keys(bio.contacts).length === 0;
		for(var i in bio.contacts) {
			var v = bio.contacts[i];
			if(v.length > 0) {
				$("#topContacts, #footerContacts").append(HTMLcontactGeneric.replace("%contact%",i).replace("%data%",bio.format(i,v)));
			}
		}
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
		$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for(var i in bio.skills) {
				$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
			}
		}
	},
	"format" : function (type,data) {
		switch(type) {
			case "mobile":
				output = '<a class="contact-text" href="tel:+1'+data.replace(/\D/g,'')+'">'+data+'</a>';
				break;
			case "email":
				output = '<a class="contact-text" href="mailto:'+data+'">'+data+'</a>';
				break;
			case "github":
				output = '<a class="contact-text" href="https://github.com/'+data+'">'+data+'</a>';
				break;
			case "linkedin":
				output = '<a class="contact-text" href="http://linkedin.com/in/'+data+'">'+data+'</a>';
				break;
			case "location":
				output = '<a class="contact-text" href="http://maps.google.com/?q='+data.replace(' ',"+")+'">'+data+'</a>';
				break;
			case "twitter":
				output = '<a class="contact-text" href="http://twitter.com/'+data+'">'+data+'</a>';
				break;
			default:
				output = data;
		}
		return output;
	}
};
bio.contacts.linkedin = "syedshahrukh";

var education = {
	"schools" : [
		{
			"name" : "University of Illinois at Urbana-Champaign",
			"location" : "Urbana-Champaign, IL",
			"degree" : "Bachelors of Science",
			"majors" : [
				'Computer Science'
			],
			"dates" : 2004,
			"url" : "http://uiuc.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to JavaScript",
			"school" : "Udacity",
			"dates" : "12/2014",
			"url" : "http://udacity.com"
		}
	],
	"display" : function(){
		for(var i in education.schools){
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLschoolName.replace("#",education.schools[i].url).replace("%data%",education.schools[i].name) + HTMLschoolDegree.replace("%data%",education.schools[i].degree));
			$('.education-entry:last').append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
			$('.education-entry:last').append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
			if(education.schools[i].majors.length > 0) {
				for(var j in education.schools[i].majors) {
					$('.education-entry:last').append(HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]));
				}
			}
		}
		for(var i in education.onlineCourses) {
			$('#education').append(HTMLonlineClasses);
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineTitle.replace("#",education.onlineCourses[i].url).replace("%data%",education.onlineCourses[i].title)+HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school));
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates));
			$('.education-entry:last').append(HTMLonlineURL.replace("%data%",education.onlineCourses[i].url));
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Sr. Technical Director",
			"location" : "Richardson, TX",
			"dates" : "2011 - Present",
			"description" : "Manage Business Analysts for the online team"
		},
		{
			"employer" : "Sears",
			"title" : "Business Analyst",
			"location" : "Hoffman Estates, IL",
			"dates" : "2006 - 2011",
			"description" : "Conduct business analysis for the online team"
		}
	],
	"display" : function() {
		for(var i in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%",work.jobs[i].employer) + HTMLworkTitle.replace("%data%",work.jobs[i].title));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Nanodegree Project 1",
			"dates" : "12/1 - 12/31",
			"description" : "Create a web page with less than 8% descrepency!",
			"images" : [
				"http://placehold.it/350x150",
				"http://placehold.it/250x150"
			]
		},
		{
			"title" : "Nanodegree Project 2",
			"dates" : "12/23 - 1/2",
			"description" : "Build an interactive resume using JavasScript",
			"images" : [
				"http://placehold.it/250x150",
				"http://placehold.it/150x150"
			]
		}
	],
	"display" : function(){
		for(var i in projects.projects){
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
			$('.project-entry:last').append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
			if(projects.projects[i].images.length > 0) {
				for(var j in projects.projects[i].images){
					$('.project-entry:last').append(HTMLprojectImage.replace("%data%",projects.projects[i].images[j]));
				}
			}
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);

$('#main').append(internationalizeButton);
function inName(name) {
	var n = name.trim().split(" ");
	n[0] = n[0].slice(0,1).toUpperCase() + n[0].slice(1).toLowerCase();
	n[1] = n[1].toUpperCase();

	var inName = n.join(" ");
	return inName;
}
