var bio = {
	"name": "Aleksandar Blazanovic",
	"age" : 35,
	"role" : "Front End Developer",
	"contacts" : {
	"mobile" : "818.600.4991",
	"email" : "a@blazanovic.com",
	"twitter" : "@aurevmu",
	"github" : "aurevmu",
	"location" : "Los Angeles"
	},
	"welcomeMessage" : "Technology. Leadership. Integrity.",
	"skills" : [
	"Python", "HTML", "CSS", "JS", "InDesign",
	],
	"bioPic" : "images/aleks.jpg"
}

var work = {
	"jobs": [
	{
		"employer": "Mediscan Staffing Services",
		"title": "Technology Manager",
		"location" : "Woodland Hills, CA",
		"dates": "2005 - Present",
		"description": "Implementation of hardware and software to ensure company's technological requirements and stimulate growth."
	},
	{
		"employer": "Self Employed",
		"title": "Graphic Design Freelancer",
		"location" : "Tarzana, CA",
		"dates": "2001 - Present",
		"description": "Graphic design freelancing for various clients."
	}
	]
}

var education = {
	"schools": [
	{
		"name": "Eckerd College",
		"location": "St. Petersburg, FL",
		//"degree": "None",
		"dates": "1999 - 2001",
		"major": "Linguistics"
	}, 
	{
		"name": "Santa Monica College",
		"location": "Santa Monica, CA",
		//"degree": "None",
		"dates": "2002 - 2004",
		"major": "Philosophy"
	}
	],
	"onlineCourses": [
	{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"dates": "2015 - 2016", 
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	}
	],
	"certifications": [
	{
		"title": "CCNA",
		"authority": "CISCO",
		"dates": "10/2014 - 10/2017",
		"url": "http://www.ciscocertificates.com/verify.cfm",
		"verificationCode": "419454173134BSXI"
	}
	]

}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName, formattedRole);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	$("#mapDiv").append(googleMap);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
	}
}

work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;	
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

education.display = function () {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

	}
	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			var formattedOnlineURLTitleSchool = formattedOnlineURL + formattedOnlineTitle + formattedOnlineSchool;	
			$(".education-entry:last").append(formattedOnlineURLTitleSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);
	
		}
	}
	if (education.certifications.length > 0) {
		$(".education-entry:last").append(HTMLcertifications);

		for (certification in education.certifications) {

			var formattedCertName = HTMLcertificationName.replace("%data%", education.certifications[certification].title);
			var formattedCertAuthority = HTMLcertificationAuthority.replace("%data%", education.certifications[certification].authority);
			var formattedCertURL = HTMLcertificationURL.replace("%data%", education.certifications[certification].url);

			var formattedCertURLNameAuthority = formattedCertURL + formattedCertName + formattedCertAuthority;	
			$(".education-entry:last").append(formattedCertURLNameAuthority);

			var formattedCertDates = HTMLcertificationDates.replace("%data%", education.certifications[certification].dates);
			$(".education-entry:last").append(formattedCertDates);

			var formattedVerifCode = HTMLcertificationVerifCode.replace("%data%", education.certifications[certification].verificationCode);
			$(".education-entry:last").append(formattedVerifCode);
	
		}
	} 
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data", projects.projects[project].description);
		$(".project-entry:last").append(formattedTDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
				$("project-entry:last").append(formattedImage);
			}
		}
	}
}

bio.display();
work.display();
education.display();
//projects.display();

$(document).click(function(loc) {
	console.log(loc.pageX, loc.pageY);
});


