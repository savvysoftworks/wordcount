function onloadalert(){
	alert("Welcome");
	alertParagraph();//This calls the function below
	$("#testParagraph").click(function(){
		countLetters(getParagraphText("testParagraph"));
	});
}

function alertParagraph(){
	alert(getParagraphText("testParagraph")); //this gets the paragraph tags contents from below
}

function getParagraphText(id){
	return $("#"+id).html();
}

function countLetters(text){
	var letters = text.split("");//turn the string into an array of letters
	$.each(letters, function(letter){//iterated loop for all the letters
		letter = letters[letter];
		console.log(letter); //drops the letters to the console so we can see what is happening
		//Create a Dynamic objec to store the letters as they come in
		var obj = {}
		if(obj.hasOwnProperty(letter)){
			//treat obj as a hash.
			//if the letter is already in the hash what do we do?
		}else{
			//if the letter hasn't been encountered yet what do we do?
		}
	});
}

