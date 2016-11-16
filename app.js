window.onload = function() {
	loadJSON('data.json',
         function(data) { console.log(data); },
         function(xhr) { console.error(xhr); }
	);
	createButtons();
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