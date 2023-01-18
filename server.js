//Libraries used in project
const path = require('path'),
      fs = require('fs'),
      http = require('http');
var {exec} = require('child_process');

var {
  servepublic,
  servecontrol
} = require('./bin/vapi-resources.js');

const PORT = 4000; //port for local host

var server = http.createServer();

server.on('request',(req,res)=>{
  let data = '';
  let rpak = {
    success:false,
    msg:'Request Resource'
  }
  servepublic(req.url,res).then(//try to serve a .file
    was=>{
      vrpak.success=was;
      if(was){}
      else{//request not solved in public
        servecontrol(req.url,res).then(
          con=>{
            vrpak.success=con.success;
          }
        );
      }
    }
  );
});

server.listen(PORT,()=>{console.log('Server Listening: ',PORT);});
