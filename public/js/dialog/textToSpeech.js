//teste
//sendTextToSpeech('testando');

function sendTextToSpeech(conversation) {
    console.log(conversation);
    var audio = document.getElementById('audio');
    var url = '/api/synthesize?voice=pt-BR_IsabelaVoice&text=' + conversation;
    audio.src = url;
    audio.play();
}
