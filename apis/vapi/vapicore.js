export var VHPhost = 'http://vogel.vhpportal.com/';//'http://localhost:5000/'; //

/* Pack
  collect: '' (group of data)
  store: '' (sub the group)
  db: '' (actual data)
  methd: '' (QUERY | REMOVE | INSERT | UPDATE)
  options: {
    QUERY:{
      query:{id:'itemid'}
    }
    REMOVE:{
      query:{id:'itemid'}
      multi: TRUE | FALSE
    }
    UPDATE:{
      query:{id:'itemid'}
      update:{$set:item}
      options:{}
    }
    INSERT:{
      docs: [items] || {item}
    }
  }

*/
var vapiPack = (method='',opts={})=>{
  return{
    collect:'apps',
    store:'SUMTRACKER',
    db:'mtracker',
    method:method,
    options:opts
  }
}

export var vpacks={
  mart:(mp={})=>{
    if(mp){mp={};}
    return{
      collect:mp.collect||'',
      store:mp.store||'',
      db:mp.db||'',
      method:mp.db||'',
      options:mp.options||{}
    }
  }
}

//pack mart
//pack japi
//pack service

export var SENDrequestvhp = (pack,route='LOGIN',{
  user='VOGCH',
  pswrd='vogel123',
  request='',
  coid='01'
},url=VHPhost+'api/')=>{
  return new Promise((res,rej)=>{
    let options={
      method:'POST',
      headers:{
        'Accept':'application/json'
      },
      body:JSON.stringify({
        access:{
          user:'VOGCH',
          pswrd:'vogel123',
          coid:'01',
          request:request
        },
        pack:pack
      })
    }
    fetch(url+route,options)
    .then(response=>{console.log('RAW RES>',response);return response.json()})
    .then(data=>{concols.log('RESPONSE>',data);return res(data);})
    .catch(err=>{return res(false);})
  });
}

export var VAPIhost = 'https://18.191.134.244:5000/'; //'http://localhost:5000/';//

export var SENDrequest = (pack,request='mart',url=VAPIhost)=>{
  return new Promise((res,rej)=>{
    let options={
      method:'POST',
      headers:{
        'Accept':'application/json'
      },
      body:JSON.stringify({
        access:{
          user:'VOGCH',
          pswrd:'vogel123',
          coid:'01',
          request:request
        },
        pack:pack
      })
    }
    fetch(url,options)
    .then(response=>{return response.json()})
    .then(data=>{return res(data);})
    .catch(err=>{return res(false);})
  });
}

export var SENDrequestapi = (pack,request='mart',url=VAPIhost+'api/')=>{
  return new Promise((res,rej)=>{
    console.log(url)
    let options={
      method:'POST',
      headers:{
        'Accept':'application/json'
      },
      body:JSON.stringify({
        access:{
          user:'VOGCH',
          pswrd:'vogel123',
          coid:'01',
          request:request
        },
        pack:pack
      })
    }
    fetch(url,options)
    .then(response=>{return response.json()})
    .then(data=>{return res(data);})
    .catch(err=>{return res(false);})
  });
}

export var SENDrequestadmin = (pack,request='store',url=VAPIhost+'admin/')=>{
  return new Promise((res,rej)=>{
    let options={
      method:'POST',
      headers:{
        'Accept':'application/json'
      },
      body:JSON.stringify({
        access:{
          user:'VOGCH',
          pswrd:'vogel123',
          coid:'01',
          request:request
        },
        pack:pack
      })
    }
    fetch(url,options)
    .then(response=>{return response.json()})
    .then(data=>{return res(data);})
    .catch(err=>{return res(false);})
  });
}
