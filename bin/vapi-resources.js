var fs = require('fs'),
    path = require('path');

var pubroot = path.join(__dirname,'../public/');

var exts = [
  {ext:'\.js$',type:'text/javascript'},
  {ext:'\.css$',type:'text/css'},
  {ext:'\.html$',type:'text/html'},
  {ext:'\.png$',type:'image/png'},
  {ext:'\.json$',type:'application/json'},
]

var CHECKexts=(url)=>{
  for(let x=0;x<exts.length;x++){
    if(url.match(exts[x].ext)){return exts[x].type}
  }
  return null;
}

var servepublic = (url,res)=>{
  return new Promise((resolve,reject)=>{
    var contype = CHECKexts(url);
    if(contype){//check if the path has a valid .(ext)
      res.setHeader('X-Content-Type-Options','nosniff');
      let fpath = path.join(pubroot,url);
      fs.stat(fpath,(err,stat)=>{
        if(!err){
          res.writeHead(200, {"Content-Type": contype});
          fs.createReadStream(fpath).pipe(res);
          return resolve(true);
        }else{
          return resolve(false);
        }
      });
    }else{return resolve(false);}//was not a file
  });
}

var viewroot =path.join(__dirname,'../controllers/');

var servecontrol = (url="",res=null)=>{
  return new Promise((resolve,reject)=>{
    if(res){
      fs.stat(`${path.join(viewroot,url)}.html`,(err,stat)=>{
        if(err){
          fs.readFile(path.join(viewroot,'vapi.html'),(err,doc)=>{
            if(err){//send to landingd?
              res.writeHead(500);
              res.end();
              return resolve({success:true,msg:'Bad Page'});
            }else{//load requested page
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(doc);
              return resolve({success:true,msg:'Good Page'});
            }
          });
        }
        else{
          fs.readFile(`${path.join(viewroot,url)}.html`,(err,doc)=>{
            if(err){//send to landingd?
              res.writeHead(500);
              res.end();
              return resolve({success:true,msg:'Bad Page'});
            }else{//load requested page
              res.writeHead(200,{'Content-Type':'text/html'});
              res.end(doc,'utf-8');
              return resolve({success:true,msg:'Good Page'});
            }
          });
        }
      });
    }else{return resolve({success:false,msg:'No Response Object'});}
  });
}

module.exports={
  servepublic,
  servecontrol
}
