import{D as P,F as A,G as D,H as Y,I as q,x as V,J as E,l as B,K as C,L as W,M as T,N as y,w as I,y as $,q as h,O as j,P as F,Q as G,R as J,S as K,U as Q,v as U,A as X,p as z,o as S,i as Z,c as x,B as N,b as ee,V as re,W as te,g as se,X as ne}from"./runtime.DgWpoOoC.js";import{b as ae}from"./disclose-version.B1VoJbYJ.js";const ie=new Set,L=new Set;function g(e){var O;var r=this,n=r.ownerDocument,s=e.type,u=((O=e.composedPath)==null?void 0:O.call(e))||[],t=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(t=u[c]||e.target,t!==r){P(e,"currentTarget",{configurable:!0,get(){return t||n}});var m=q,o=V;A(null),D(null);try{for(var a,i=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+s];if(_!==void 0&&!t.disabled)if(Y(_)){var[M,...k]=_;M.apply(t,[e,...k])}else _.call(t,e)}catch(p){a?i.push(p):a=p}if(e.cancelBubble||f===r||f===null)break;t=f}if(a){for(let p of i)queueMicrotask(()=>{throw p});throw a}}finally{e.__root=r,delete e.currentTarget,A(m),D(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function fe(e,r){return H(e,r)}function be(e,r){E(),r.intro=r.intro??!1;const n=r.target,s=S,u=h;try{for(var t=B(n);t&&(t.nodeType!==8||t.data!==C);)t=W(t);if(!t)throw T;y(!0),I(t),$();const c=H(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==j)throw F(),T;return y(!1),c}catch(c){if(c===T)return r.recover===!1&&G(),E(),J(n),y(!1),fe(e,r);throw c}finally{y(s),I(u)}}const v=new Map;function H(e,{target:r,anchor:n,props:s={},events:u,context:t,intro:c=!0}){E();var b=new Set,d=o=>{for(var a=0;a<o.length;a++){var i=o[a];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,g,{passive:f});var _=v.get(i);_===void 0?(document.addEventListener(i,g,{passive:f}),v.set(i,1)):v.set(i,_+1)}}};d(K(ie)),L.add(d);var l=void 0,m=Q(()=>{var o=n??r.appendChild(U());return X(()=>{if(t){z({});var a=x;a.c=t}u&&(s.$$events=u),S&&ae(o,null),l=e(o,s)||{},S&&(V.nodes_end=h),t&&Z()}),()=>{var f;for(var a of b){r.removeEventListener(a,g);var i=v.get(a);--i===0?(document.removeEventListener(a,g),v.delete(a)):v.set(a,i)}L.delete(d),R.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return R.set(l,m),l}let R=new WeakMap;function ve(e){const r=R.get(e);r&&r()}function ce(e,r,n){if(e==null)return r(void 0),N;const s=ee(()=>e.subscribe(r,n));return s.unsubscribe?()=>s.unsubscribe():s}let w=!1;function he(e,r,n){const s=n[r]??(n[r]={store:null,source:te(void 0),unsubscribe:N});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=N;else{var u=!0;s.unsubscribe=ce(e,t=>{u?s.source.v=t:ne(s.source,t)}),u=!1}return se(s.source)}function pe(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ye(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,he as b,ye as c,be as h,fe as m,pe as s,ve as u};