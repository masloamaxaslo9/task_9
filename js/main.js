let buttonSubmitForm = document.getElementById('submit');
buttonSubmitForm.addEventListener('click', function () {
   let valueInputMethod = document.getElementById('method').value;
   let valueInputUrl = document.getElementById('url').value;
   api(valueInputUrl, valueInputMethod, callbackApi);
});

function api(url, method, callbackApi) {
    let xhr = new XMLHttpRequest();

    if (method !== 'GET') {
        return console.error('Error only method "GET"');
    } else {
        xhr.open(method, url, true);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return false;

            if (xhr.status === 200) {
                return callbackApi(xhr.responseText);
            } else {
                console.log(xhr.status, xhr.statusText);
            }
        };
    }
}

function callbackApi(respondApi) {
    console.log(respondApi);
}

let buttonClearConsole = document.getElementById('clearConsole');
buttonClearConsole.addEventListener('click', () => {
   console.clear();
});
