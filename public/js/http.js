
var http = new XMLHttpRequest();

http.open('POST', '/api/message', true);
http.setRequestHeader('Content-type', 'application/json');

var iniciar = {
  input: 'comecar_conversar'
}

jsonStringify = JSON.stringify(iniciar);

send(jsonStringify);

http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE) {
        $( ".ms-body").append('<div class="message-feed media"><div class="pull-left"><img src="image/watson.png" alt="" class="img-avatar"></div><div class="media-body"><div class="mf-content">' + http.responseText + '</div><small class="mf-date"><i class="fa fa-clock-o"></i> '+ Date() + '</small></div></div>');
        //alert(http.responseText);
    }
}

function enviarMensagem() {

  var teste = document.getElementById("input");

  var json = {
    input: teste.value
  }

  jsonStringify = JSON.stringify(json);

  console.log(jsonStringify);

  send(jsonStringify);

  $( ".ms-body").append('<div class="message-feed right"><div class="pull-right"><img src="image/mafrinha.png" alt="" class="img-avatar"></div><div class="media-body"><div class="mf-content">' + teste.value + '</div><small class="mf-date"><i class="fa fa-clock-o"></i> ' + Date() + '</small></div></div>');

  teste.value = '';

}

function handle(e){
        if(e.keyCode === 13){
          enviarMensagem();
        }
}

function send (json){

  http.open('POST', '/api/message', true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send(json);

}
