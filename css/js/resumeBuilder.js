var bio = {
    "name": "Ling Li",
    "role": "Infosys Associate",
    "contacts": {
        "mobile": "917-361-7727",
        "email": "lingligantz@gmail.com",
        "github": "LingLi-su",
        "twitter": "@GantzLi",
        "location": "New York"
    },
    "welcomeMessage": "Welcome Aboard!",
    "skills": ["HTML5", "Java", "CSS3", "Transact-SQL", "JavaScript"],
    "biopic": "images/lingli.png",
    display: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGit);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedbiopic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedwelcomeMsg);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGit);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);
        $("#header").append(HTMLskillsStart);
        for (var x = 0; x < bio.skills.length; x++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
        }
    }
};
bio.display();
var education = {
    "schools": [{
        "name": "Syracuse University",
        "dates": "Year of 2017",
        "location": "Syracuse, NY",
        "degree": "Bachelors of Science",
        "majors": ["Information Management and Technology"],
        "url": "https://www.syracuse.edu/"
    }, {
        "name": "Kansai Gaidai University",
        "dates": "Year of 2016",
        "location": "Osaka, Japan",
        "degree": "Study Abroad",
        "majors": ["Asian Studies"],
        "url": "https://www.kansaigaidai.ac.jp/asp/"
    }],
    onlineCourses: [{
        "title": "Full Stack Front-End Developer",
        "school": "Udacity",
        "dates": "Year of 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var x = 0; x < education.schools.length; x++) {
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[x].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[x].degree);
            var formattedSchoolDegree = formattedSchool + formattedDegree;
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[x].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[x].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[x].majors);
            $(".education-entry:last").append(formattedMajor);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (x = 0; x < education.onlineCourses.length; x++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
            var formattedTitleSchool = formattedTitle + formattedonlineSchool;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
            $(".education-entry:last").append(formattedonlineDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};
education.display();
var work = {
    "jobs": [{
        "employer": "Infosys Limited",
        "title": "Infosys Associate",
        "dates": "July 2017 - Present",
        "location": "Basking Ridge, NJ",
        "description": ""
    }, {
        "employer": "The Office of the Comptroller of the Currency",
        "title": "IT Intern",
        "dates": "June 2016 - August 2016",
        "location": "Washington, DC",
        "description": "1. Developed knowledge of administrator tasks within Project Server and assisted enterprise portfolio manager develop and maintain system capabilities. 2. Assisted the Management & Controls Communication Team by redesigning the M&C SharePoint Site. 3. Compiled and presented weekly incident reports to the Deputy Chief Information Officer in the weekly operations meeting review."
    }],
    display: function() {
        for (var x = 0; x < work.jobs.length; x++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
            $(".work-entry:last").append(formattedDescription);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
            $(".work-entry:last").prepend(formattedLocation);
        }
    }
};
work.display();
var projects = {
    "projects": [{
        "title": "Portfolio of Year 2016",
        "dates": "Year of 2016",
        "description": "Applied HTML5, CSS3, and JQuery to create an user friendly responsive website.",
        "images": ["images/p1.png", "images/p11.png"]
    }, {
        "title": "Develop Backhaul External Point to Point Wireless Solution for Non-profit organization",
        "dates": "Year of 2016",
        "description": "Researched and analyzed different licensed, lightly licensed, and unlicensed external point to point wireless systems and designed a backhaul external point to point wireless solution that satisfy client’s needs",
        "images": ["images/p2.png", "images/chart.png"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var x = 0; x < projects.projects.length; x++) {
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[x].images.length > 0) {
                for (var i = 0; i < projects.projects[x].images.length; i++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[x].images[i]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();
$("#mapDiv").append(googleMap);
