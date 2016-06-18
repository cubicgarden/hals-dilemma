function talk(speech){
	var msg = new SpeechSynthesisUtterance(speech);
msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google UK English Male'; })[0];
speechSynthesis.speak(msg);
	}
