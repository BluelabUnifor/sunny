var Conversation = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service.
var conversation = new Conversation({
    username: '3cdf0aee-2e6b-4854-956b-a996a910eb36',
    password: 'WktXDbf4WxOp',
    path: {
        workspace_id: 'ac202d2d-8402-407f-9dc6-36c1b6296c41'
    }, // replace with workspace ID
    version_date: '2016-07-11'
});

module.exports = function(app) {

    app.post('/api/message', function(req, res) {

        input_value = req.body.input;

        if (input_value !== 'comecar_conversar') {
            var mensagem = {
                input: {
                    text: input_value
                },
                context: context_value
            };
        } else {
            var mensagem = {}
        }


        // console.log(mensagem);
        // Start conversation with empty message.
        conversation.message(mensagem, function(err, data) {
            if (err) {
                return res.status(err.code || 500).json(err.code);
            }
            return res.json(processResponse(err, data))
        });

        function processResponse(err, response) {
            if (err) {
                console.error("erro -> " + err); // something went wrong
                return;
            }

            // Display the output from dialog, if any.
            if (response.output.text.length != 0) {

                context_value = response.context;

                return response.output.text[0]
            }
        }

    });
};
