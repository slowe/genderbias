// Code derived from Thomas Forth's original at http://tomforth.co.uk/genderbias/
var maleWords = ["excellen\\w*", "superb", "outstanding", "unique", "exceptional", "unparalleled", "\\w{2,}est(\W|$)", "best", "most", "wonderful", "terrific\\w*", "fabulous", "magnificent", "remarkable", "extraordinar\\w*", "amazing", "supreme\\w*", "unmatched", "talent\\w*", "intell\\w*", "smart\\w*", "skill\\w*", "ability", "genius", "brilliant\\w*", "bright\\w*", "brain\\w*", "aptitude", "gift\\w*", "capacity", "propensity", "innate", "flair", "knack", "clever\\w*", "expert\\w*", "proficient\\w*", "capable", "adept\\w*", "able", "competent", "natural\\w*", "inherent\\w*", "instinct\\w*", "adroit\\w*", "creative\\w*", "insight\\w*", "analytical", "research\\w*", "data", "study", "studies", "experiment\\w*", "scholarship", "result\\w*", "^test\\w*", "finding\\w*", "publication\\w*", "publish\\w*", "vita\\w*", "method\\w*", "scien\\w*", "grant\\w*", "fund\\w*", "manuscript\\w*", "project\\w*", "journal\\w*", "theor\\w*", "discover\\w*", "contribution\\w*"];
var femaleWords = ["hardworking", "conscientious", "depend\\w*", "meticulous", "thorough", "diligen\\w*", "dedicate", "careful", "reliab\\w*", "effort\\w*", "assiduous", "trust\\w*", "responsib\\w*", "methodical", "industrious", "busy", "work\\w*", "persist\\w*", "organiz\\w*", "disciplined", "teach", "instruct", "educat\\w*", "train\\w*", "mentor", "supervis\\w*", "adviser", "counselor", "syllabus", "syllabus", "course\\w*", "class", "service", "colleague", "citizen", "communicate\\w*", "lectur\\w*", "student\\w*", "present\\w*", "rapport"];

function textChanged() {
	document.getElementById("foundFemaleWords").innerHTML = "";
	document.getElementById("foundMaleWords").innerHTML = "";
	
	var letterText = document.getElementById("recommendationLetter").value;
	var splitLetterText = letterText.split(" ");
	for (var i = 0; i < splitLetterText.length; i++) {
		letterWord = splitLetterText[i];
		for (var maleCounter = 0; maleCounter < maleWords.length; maleCounter++) {
			if (letterWord.toLowerCase().search(maleWords[maleCounter]) == 0) {
				document.getElementById("foundMaleWords").innerHTML += '<p>' + letterWord + '</p>';
			}
		}
		for (var femaleCounter = 0; femaleCounter < femaleWords.length; femaleCounter++) {
			if (letterWord.toLowerCase().search(femaleWords[femaleCounter]) == 0) {
				document.getElementById("foundFemaleWords").innerHTML += '<p>' + letterWord + '</p>';
			}
		}
	}
}

function example() {
	document.getElementById("recommendationLetter").value = "Melinda was one of the first users of my now widely-used and successful software, MetNetMaker. Her early bug reports and insightful suggestions were invaluable to making the product what it is today. I have not since worked with anyone so at ease communicating with those in other scientific fields."
	textChanged();
}
