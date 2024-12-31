import{d as k,a as A,o as I}from"./outfit-f75a67f0.js";import{A as O,C as R}from"./app-stores-b9b5f9ca.js";import{c as y,d as w,g as P,b as q}from"./index-123e2351.js";import{_ as s}from"./preload-helper-176e53da.js";import{y as T,$ as x,F as V}from"./runtime.esm-4bf604c8.js";const S=new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i),C=new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i),z=e=>S.test(e)||C.test(e.substr(0,4)),N="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54",F=()=>{const e=screen.orientation?.angle;return!(e===90||e===270)&&window.matchMedia("screen and (max-width: 760px)").matches},Q=()=>{const e=navigator.userAgent||navigator.vendor||window.opera||N;return navigator?.userAgentData?.mobile||z(e)||F()},X=()=>{const e=window.navigator,t=e.userAgent;if(t.match("CriOS"))return{isSupported:!0,ios:!0};const o=window.chrome,i=e.vendor,c=typeof window.opr<"u",a=t.indexOf("Edg")>-1,n=t.indexOf("Firefox")>-1;return o!==null&&typeof o<"u"||i==="Google Inc."||c||a||n?{isSupported:!0}:{isSupported:!1}},Y=()=>{const e=window.navigator?.userAgent?.toLowerCase(),t=window.chrome,r=e?.indexOf("chrome");return e?.match("safari")&&!r&&!t},B=[{version:1,characters:["qiqi","keqing","diluc","mona","jean"],featured:{bannerName:"wanderlust-invocation-1",character:"jean"}},{version:2,characters:["qiqi","keqing","diluc","mona","jean"],featured:{bannerName:"wanderlust-invocation-2",character:"qiqi"}},{version:3,characters:["qiqi","keqing","diluc","mona","jean","tighnari"],featured:{bannerName:"wanderlust-invocation-2",character:"qiqi"}},{version:4,characters:["qiqi","keqing","diluc","mona","jean","tighnari","dehya"],featured:{bannerName:"wanderlust-invocation-2",character:"qiqi"}}];let E=[];O.subscribe(e=>{E=e});const Z=e=>{let t=new FileReader;t.onload=r=>{let o=r.target.result,i=[];console.log(o),o.split(`
`).forEach((a,n)=>{if(a.trim()!==""){let u=a.split(" "),l=`n-${n}`,m=u.length===2?u[1].trim():a.trim(),h=u.length===2?parseInt(u[0]):3;if(m==="\u90A2\u6668\u6668"||m==="\u9976\u9633")for(let _=0;_<6;_++)i.push({name:l,chineseChar:m,rarity:h});else m!=="\u8BB8\u5B50\u537F"&&i.push({name:l,chineseChar:m,rarity:h})}}),console.log(i),E=i,y.set(i),alert("\u4E0A\u4F20\u6210\u529F")},t.onloadend=()=>{t.readyState,FileReader.DONE},t.readAsText(e,"UTF-8")},ee=({currentPity:e=0,maxPity:t=90,baseRate:r=.6,rateIncreasedAt:o=74}={})=>{if(r<=0&&e<t)return 0;if(e<o)return r;if(e>=t)return 100;const i=(100-r)/(t+1-o);return(e+1-o)*i+r},b=e=>{let t=[];for(let i=0;i<e.length;i++)t[i]=e[i].chance+(t[i-1]||0);const r=Math.random()*t[t.length-1];return e[t.findIndex(i=>i>r)]},v=(e,t)=>{if(e==="beginner")return R["character-event"][t];const r=R[e],o=w.get(e);if(!(o[t]||o[t]>=0))return r[t];const i=parseFloat(o[t]);return isNaN(i)?o[t]:i},te=(e,t,r)=>{const o=w.get(e);if(typeof r=="boolean")o[t]=r;else{const i=parseFloat(r);isNaN(i)?o[t]=r:o[t]=i}w.set(e,o)},d=e=>L(e).filter(({limited:t})=>!t),M=(e,t=null,r=null)=>e.filter(({release:o})=>{if(!o)return!0;const[i,c]=o.split("-");return!(parseFloat(t)<parseFloat(i)||parseFloat(t)===parseFloat(i)&&r<=parseInt(c))}),re=e=>Array.isArray(e)?e.length<2?e[0]:e[Math.floor(Math.random()*e.length)]:e,oe=(e=1,t=9)=>Math.floor(Math.random()*(t-e+1)+e),f=e=>k.filter(({rarity:t})=>t===e).map(t=>(t.type="character",t)),L=e=>A.filter(({rarity:t})=>t===e).map(t=>(t.type="weapon",t)),ie=()=>E.map(e=>(e.type="member",e.weaponType="catalyst",e)),ae=e=>e?k.find(({name:r})=>e===r)||{}:{},se=e=>e?A.find(({name:r})=>r===e)||{}:{},g=e=>e==="standard"?f(4):f(4).filter(({name:t})=>!I.includes(t)),ne=()=>d(3),ce=({banner:e="standard",version:t=null,phase:r=null,type:o=null,useRateup:i=!1,rateupNamelist:c=[]}={})=>{if(i)return(e==="character-event"||e==="beginner"?f(4):L(4)).filter(({name:_})=>c.includes(_));if(e==="beginner")return g(e).filter(({release:m})=>m==="1.0-0");let a;if(o=="all")a=[...g(e),...d(4)];else if(o==="character")a=g(e);else if(o==="weapon")a=d(4);else{const l=v(e,"charRate"),{itemType:m}=b([{itemType:"char",chance:l},{itemType:"wp",chance:100-l}]);a=m==="wp"?d(4):g(e)}return M(a,t,r).filter(({name:l})=>!c.includes(l))},p=(e=1)=>{const{characters:t}=B.find(({version:o})=>o===e);return f(5).filter(({name:o})=>t.includes(o))},le=({banner:e="standard",stdver:t=1,type:r=null,useRateup:o=!1,rateupItem:i=[],customData:c={}}={})=>{if(o&&e==="character-event"){if(Object.keys(c).length>0){const{vision:n,character:u,artPosition:l,itemID:m}=c;return{vision:n,itemID:m,name:u,offset:l||{},type:"character",rarity:5,custom:!0}}return f(5).find(({name:n})=>n===i[0])}if(o&&e==="weapon-event")return L(5).filter(({name:n})=>i.includes(n));if(e==="weapon-event")return d(5).filter(({name:n})=>!i.includes(n));if(e==="beginner")return p(1);if(e==="standard"||!e){let a;if(r==="all")a=[...p(t),...d(5)];else if(r==="character")a=p(t);else if(r==="weapon")a=d(5);else{const n=v(e,"charRate"),{itemType:u}=b([{itemType:"char",chance:n},{itemType:"wp",chance:100-n}]);a=u==="wp"?d(5):p(t)}return a}return p(t).filter(({name:a})=>!i.includes(a))},me=e=>{const t=v(e,"winRate"),{item:r}=b([{item:"rateup",chance:t},{item:"std",chance:100-t}]);return r==="rateup"},ue=(e,t)=>{const r=P.get(`${e}-${t}star`),o=v(e,"guaranteed");return{status:r,never:o==="never",always:o==="always"}},j=(e,t)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})},D=["zh-CN","zh-TW","de-DE","en-US","fr-FR","id-ID","it-IT","ja-JP","pt-BR","ru-RU","th-TH","vi-VN"],U=["zh-CN","zh-TW","en-US","it-IT","ja-JP","pt-BR","ru-RU","vi-VN"],W=()=>{const t=q.get("locale")||V();return D.find(o=>o.includes(t))||"en-US"},de=()=>{D.forEach(t=>{T(t,()=>j(Object.assign({"../../locales/de-DE.json":()=>s(()=>import("./de-DE-68dbe53b.js"),[],import.meta.url),"../../locales/en-US.json":()=>s(()=>import("./en-US-bad16afc.js"),[],import.meta.url),"../../locales/fr-FR.json":()=>s(()=>import("./fr-FR-c9c9648a.js"),[],import.meta.url),"../../locales/id-ID.json":()=>s(()=>import("./id-ID-5d336183.js"),[],import.meta.url),"../../locales/it-IT.json":()=>s(()=>import("./it-IT-393cb78e.js"),[],import.meta.url),"../../locales/ja-JP.json":()=>s(()=>import("./ja-JP-ae2e21bb.js"),[],import.meta.url),"../../locales/pt-BR.json":()=>s(()=>import("./pt-BR-2a30dcf9.js"),[],import.meta.url),"../../locales/ru-RU.json":()=>s(()=>import("./ru-RU-d87b599e.js"),[],import.meta.url),"../../locales/th-TH.json":()=>s(()=>import("./th-TH-57faaced.js"),[],import.meta.url),"../../locales/vi-VN.json":()=>s(()=>import("./vi-VN-1de3f653.js"),[],import.meta.url),"../../locales/zh-CN.json":()=>s(()=>import("./zh-CN-d34ac114.js"),[],import.meta.url),"../../locales/zh-TW.json":()=>s(()=>import("./zh-TW-ab31c118.js"),[],import.meta.url)}),`../../locales/${t}.json`))}),U.forEach(t=>{T(t,()=>j(Object.assign({"../../locales/items/de-DE.json":()=>s(()=>import("./de-DE-9b1e4003.js"),[],import.meta.url),"../../locales/items/en-US.json":()=>s(()=>import("./en-US-475b0688.js"),[],import.meta.url),"../../locales/items/it-IT.json":()=>s(()=>import("./it-IT-ad8a3c62.js"),[],import.meta.url),"../../locales/items/ja-JP.json":()=>s(()=>import("./ja-JP-b0e83faf.js"),[],import.meta.url),"../../locales/items/pt-BR.json":()=>s(()=>import("./pt-BR-ab041fd3.js"),[],import.meta.url),"../../locales/items/ru-RU.json":()=>s(()=>import("./ru-RU-f063f622.js"),[],import.meta.url),"../../locales/items/vi-VN.json":()=>s(()=>import("./vi-VN-1502770d.js"),[],import.meta.url),"../../locales/items/zh-CN.json":()=>s(()=>import("./zh-CN-d5c6a483.js"),[],import.meta.url),"../../locales/items/zh-TW.json":()=>s(()=>import("./zh-TW-bb06cb89.js"),[],import.meta.url)}),`../../locales/items/${t}.json`))});const e=W();x({fallbackLocale:"en-US",initialLocale:e})};export{j as _,Q as a,X as b,W as c,re as d,ue as e,me as f,ne as g,ce as h,Y as i,le as j,ie as k,v as l,de as m,ee as n,E as o,b as p,ae as q,oe as r,B as s,te as t,se as u,Z as v};
