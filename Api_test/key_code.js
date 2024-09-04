const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://translate-all-languages.p.rapidapi.com/translate?fromLang=en&toLang=fr&text=If%20you%20don%E2%80%99t%20know%20what%20language%20the%20text%20is%20written%20in%2C%20our%20API%20will%20detect%20the%20language%20of%20the%20original%20request.');
xhr.setRequestHeader('x-rapidapi-key', '4a003cec64msh637ccde1edc67b8p14b3e3jsnc491a9d60cc6');
xhr.setRequestHeader('x-rapidapi-host', 'translate-all-languages.p.rapidapi.com');

xhr.send(data);