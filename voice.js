const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('You can speak now!!!');
}

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}


function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if (text.includes('time'))
        speech.text = 'It is ' + new Date().getHours() + " " + new Date().getMinutes() + " right now";
    else if (text.includes('birthday'))
        speech.text = 'i Dont know, why should i know your birthda';
    else if (text.includes('love'))
        speech.text = 'Of course, not';
    else if (text.includes('your name'))
        speech.text = 'prakash says';
    else if (text.includes('shut up'))
        speech.text = 'You, shut up';
    else if (text.includes('Marwadi'))
        speech.text = 'yes,i can';
    window.speechSynthesis.speak(speech);
}