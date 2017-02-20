var http = new XMLHttpRequest();

//http.open('POST', '/api/message', true);
//http.setRequestHeader('Content-type', 'application/json');

var iniciar = {
    input: 'comecar_conversar'
}

jsonStringify = JSON.stringify(iniciar);

send(jsonStringify);

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        $(".ms-body").append('<div class="message-feed media"><div class="pull-left"><img src="image/watson.png" alt="" class="img-avatar"></div><div class="media-body"><div class="mf-content">' + http.responseText + '</div><small class="mf-date"><i class="fa fa-clock-o"></i> ' + Date() + '</small></div></div>');
        //para o watson falar pode ser encontrado no textToSpeech
        sendTextToSpeech(http.responseText);
        //alert(http.responseText);
    }
}

function enviarMensagem() {

    var texto = document.getElementById("input");

    var json = {
        input: texto.value
    }

    jsonStringify = JSON.stringify(json);

    console.log(jsonStringify);

    send(jsonStringify);



    $(".ms-body").append('<div class="message-feed right"><div class="pull-right"><img src="image/mafrinha.png" alt="" class="img-avatar"></div><div class="media-body"><div class="mf-content">' + texto.value + '</div><small class="mf-date"><i class="fa fa-clock-o"></i> ' + Date() + '</small></div></div>');

    texto.value = '';

}

function handle(e) {
    if (e.keyCode === 13) {
        enviarMensagem();
        if(event.preventDefault) event.preventDefault();
        return false; // evita a da espaco no input
    }
}

function send(json) {

    http.open('POST', '/api/message', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(json);

}
