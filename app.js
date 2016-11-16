window.onload = function() {
	dataURL = location.search.split('data=')[1];
	if (dataURL === undefined) {
		dataURL = "data.json";
	}

	loadJSON(dataURL,
    	function(data) {
    		console.log(data); 
    		parseData(data);
    	},
    	function(xhr) { 
    		console.error("Error: " + xhr); 
    	}
	);
	
	//createButtons();
};

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

function verifySound(sound) {
	if (sound.text !== undefined && sound.soundURL !== undefined) {
		return true;
	}
	return false;
}

function parseData(data) {
	var title = data.title;
	if (title !== undefined) {
		document.getElementById("head").innerHTML = title;
	}

	var sounds = data.sounds;
	if (sounds !== undefined) {
		var parentNode = document.getElementById("content");
		for (var i = 0; i < data.sounds.length; ++i) {
			if (verifySound(data.sounds[i])) {
				var innerDiv = document.createElement('div');
				var button = createButton(data.sounds[i].text, data.sounds[i].soundURL);
				innerDiv.appendChild(button);
				parentNode.appendChild(innerDiv);
			}			
		}
	}
}

function createButton(text, urlSound) {
	debugger
	var link = document.createElement('a');
	link.textContent = text;
	link.id = "button";
	link.onclick = function() {
		console.log("aaaaaa");
		var audio = new Audio(urlSound)
		audio.load();
		audio.play();
	}
	return link;
}

function createButtons(){ 

	for (var i = 0; i < 100; ++i) {
		var parentNode = document.getElementById("content");
		var innerDiv = document.createElement('div');

		var link = document.createElement('a');
		link.textContent = i;
		link.id = "button"
		innerDiv.appendChild(link);

		parentNode.appendChild(innerDiv);
	}

}