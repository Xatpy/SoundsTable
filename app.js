// Variable
var listAudios = [];

function initApp(dataInfo) {
	initApp()
	dataURL = location.search.split('data=')[1];
	if (dataURL === undefined) {
		dataURL = dataInfo;
	}

	loadJSON(dataURL,
    	function(data) {
    		parseData(data);
    	},
    	function(xhr) { 
    		console.error("Error: " + xhr); 
    	}
	);
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
				var button = createButton(data.sounds[i].text, data.sounds[i].soundURL, i);
				innerDiv.appendChild(button);
				parentNode.appendChild(innerDiv);
			}			
		}
	}
}

function loadAudio(urlSound) {
	var audio = new Audio(urlSound)
	audio.load();
	listAudios.push(audio);
}

function createButton(text, urlSound, id) {
	var link = document.createElement('a');
	link.textContent = text;
	link.className = "button";
	link.id = id;
	loadAudio(urlSound);
	link.onclick = function(evt) {
		listAudios[evt.srcElement.id].play();
	}
	return link;
}