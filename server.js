//Libraries used in project
const path = require('path'),
      fs = require('fs'),
      http = require('http');
var {exec} = require('child_process');

var {
  servepublic,
  servecontrol
} = require('./bin/vapi-resources.js');

var port = 4000; //port for local host

var server = http.createServer();

server.on('request',(req,res)=>{
  let data = '';
  let vrpak = {
    success:false,
    msg:'Request Resource'
  }
  servepublic(req.url,res).then(//try to serve a .file
    was=>{
      vrpak.success=was;
      if(was){
        //return resolve({res:res,pak:vpak});
      }
      else{
        servecontrol(req.url,res).then(//try to serve a page
          con=>{
            vrpak.success=con.success;
            //return resolve({res:res,pak:vpak});
          }
        );
      }
    }
  );
});

server.listen(port,()=>{console.log('Resource Server Listening: ',port);});
