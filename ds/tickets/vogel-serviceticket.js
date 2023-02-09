import { awo } from "https://www.vhpportal.com/repo/ds/wos/vogel-wos.js";
import { aservicecontract } from "https://www.vhpportal.com/repo/ds/contracts/vogel-servicecontracts.js";
import { aservicetrack } from "https://www.vhpportal.com/repo/ds/tracking/vogel-servicetracking.js";
import { aservicefinal } from "https://www.vhpportal.com/repo/ds/final/vogel-servicefinal.js";

var aserviceticket=(st={})=>{
  if(!st){st={};}
  return{
    id:st.id||'',
    mobile:st.mobile||false,
    tech:st.tech||'',

    wo:awo(st.wo),
    contract:aservicecontract(st.contract),
    conform:st.conform||{},
    final:aservicefinal(st.final),
    track:aservicetrack(st.track),
    checks:st.checks||{},
    sitems:st.sitems||[],
    repairs:st.repairs||[]
  }
}

export {
  awo, aservicecontract, aserviceticket
}
