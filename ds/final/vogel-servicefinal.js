export var aservicefinal = (f)=>{
    if(!f || f==undefined){
        f = {};
    }
    return {
        id: f.id || '', //Service Track Number
        emailed:f.emailed||false,
        downloaded:f.downloaded||false,
        payment:f.payment||{
          total:0,
          savings:0,
          type:''
        },
        conform:f.conform||{}
    }
}
