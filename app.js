let hashAudios = {};
let hashAudiosIds = {}
let lastCodeKey = '';
let indexCurrentCodeKey = -1;

document.addEventListener('keyup', handleKey);
function handleKey(e) {
	const codeKey = e.key.toLowerCase();
	if (codeKey !== lastCodeKey) {
		indexCurrentCodeKey = -1;
	}
	lastCodeKey = codeKey;
	playIdFromKeyboard(codeKey);
}

function initApp(dataInfo) {
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
	const title = data.title;
	if (title !== undefined) {
		document.getElementById("head").innerHTML = title;
	}

	let sounds = data.sounds;
	if (sounds !== undefined) {
		let parentNode = document.getElementById("content");
		for (var i = 0; i < data.sounds.length; ++i) {
			if (verifySound(data.sounds[i])) {
				let innerDiv = document.createElement('div');
				
				if (data.sounds[i].tag) {
					let span = document.createElement("span");
					span.classList.add("tag")
					if (data.sounds[i].tag === "New") {
						span.classList.add("tagNew");
					}
					span.innerHTML = data.sounds[i].tag;
					innerDiv.appendChild(span);
				}

				let button = createButton(data.sounds[i].text, data.sounds[i].soundURL, i);
				innerDiv.appendChild(button);

				parentNode.appendChild(innerDiv);
			}
		}
	}
}

const getIdFromUrl = (urlSound) => {
	return urlSound.substring(urlSound.lastIndexOf("/") + 1).replace(".mp3", "");
}

function loadAudio(urlSound) {
	const id = getIdFromUrl(urlSound);
	var audio = new Audio(urlSound)
	audio.load();
	audio.id = id;
	hashAudios[id] = audio;

	const firstCharacter = id[0];
	if (!hashAudiosIds.hasOwnProperty(firstCharacter)) {
		hashAudiosIds[firstCharacter] = [];
	}
	hashAudiosIds[firstCharacter].push(id);
}

const playIdFromKeyboard = (keyCode) => {
	if (keyCode === "escape") {
		playAllSounds();
	} else {
		const listCategoryAudios = hashAudiosIds[keyCode];
		if (listCategoryAudios && listCategoryAudios.length > 0) {
			indexCurrentCodeKey += 1;
			if (indexCurrentCodeKey >= listCategoryAudios.length) {
				indexCurrentCodeKey = 0;
			}
			const audioId = listCategoryAudios[indexCurrentCodeKey];
			hashAudios[audioId].play();
		}
	}
}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function playAllSounds() {
	for (const [key, value] of Object.entries(hashAudios)) {
		hashAudios[key].play()
		await waitforme(1000);
	}
}

function createButton(text, urlSound, id) {
	var link = document.createElement('a');
	link.textContent = text;
	link.href = urlSound;
	link.className = "button";
	link.id = getIdFromUrl(urlSound);
	loadAudio(urlSound);
	link.onclick = function(evt) {
		evt.preventDefault();
		var target = evt.target || evt.srcElement; // Fix for Firefox
		hashAudios[target.id].play();
	}
	return link;
}

if ("serviceWorker" in navigator) {
	// Include service worker for el Xokas to test PWA
	if (window.location.href.includes("Xokas")) {
		window.addEventListener("load", function() {
			navigator.serviceWorker
			  .register("./serviceWorker.js")
			  .then()
			  .catch(err => console.log("service worker not registered", err))
		})
	}
}