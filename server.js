var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, listen);

function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://' + host + ':' + port);
}

app.use(express.static('public'));
var io = require('socket.io')(server);
io.sockets.on('connection',
    function (socket) {
        console.log("We have a new client: " + socket.id);
        socket.on('ship',
            function (ship) {
               // console.log("Received: 'ship x:' " + ship.x + "ship y: " + ship.y);
                socket.broadcast.emit('ship2', ship);

                    socket.broadcast.emit('startGame', 'Wavy zaczynają isc');




            }
        );
        socket.on('shipShoot',function () {
console.log('strzelio na serwerze');
            socket.broadcast.emit('ship2Shoot','Zostal wystrzelony pocisk');
        });



        socket.on('disconnect', function () {
            console.log("Client has disconnected");
        });
    }
);
