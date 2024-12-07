import{z as C}from"./DvObBcec.js";var y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function B(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var k=B,D=typeof y=="object"&&y&&y.Object===Object&&y,H=D,U=H,z=typeof self=="object"&&self&&self.Object===Object&&self,X=U||z||Function("return this")(),P=X,q=P,J=function(){return q.Date.now()},K=J,Q=/\s/;function V(e){for(var t=e.length;t--&&Q.test(e.charAt(t)););return t}var Y=V,Z=Y,ee=/^\s+/;function te(e){return e&&e.slice(0,Z(e)+1).replace(ee,"")}var re=te,ne=P,ie=ne.Symbol,G=ie,_=G,N=Object.prototype,oe=N.hasOwnProperty,ae=N.toString,g=_?_.toStringTag:void 0;function se(e){var t=oe.call(e,g),n=e[g];try{e[g]=void 0;var o=!0}catch{}var s=ae.call(e);return o&&(t?e[g]=n:delete e[g]),s}var ce=se,fe=Object.prototype,ue=fe.toString;function de(e){return ue.call(e)}var le=de,w=G,be=ce,ge=le,me="[object Null]",ye="[object Undefined]",E=w?w.toStringTag:void 0;function ve(e){return e==null?e===void 0?ye:me:E&&E in Object(e)?be(e):ge(e)}var Te=ve;function pe(e){return e!=null&&typeof e=="object"}var he=pe,je=Te,Se=he,Oe="[object Symbol]";function $e(e){return typeof e=="symbol"||Se(e)&&je(e)==Oe}var _e=$e,we=re,I=k,Ee=_e,L=NaN,Ie=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,ke=parseInt;function Pe(e){if(typeof e=="number")return e;if(Ee(e))return L;if(I(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=I(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=we(e);var n=Le.test(e);return n||xe.test(e)?ke(e.slice(2),n?2:8):Ie.test(e)?L:+e}var Ge=Pe,Ne=k,h=K,x=Ge,Fe="Expected a function",Re=Math.max,We=Math.min;function Ae(e,t,n){var o,s,u,f,i,c,d=0,j=!1,l=!1,v=!0;if(typeof e!="function")throw new TypeError(Fe);t=x(t)||0,Ne(n)&&(j=!!n.leading,l="maxWait"in n,u=l?Re(x(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v);function T(r){var a=o,b=s;return o=s=void 0,d=r,f=e.apply(b,a),f}function F(r){return d=r,i=setTimeout(m,t),j?T(r):f}function R(r){var a=r-c,b=r-d,$=t-a;return l?We($,u-b):$}function S(r){var a=r-c,b=r-d;return c===void 0||a>=t||a<0||l&&b>=u}function m(){var r=h();if(S(r))return O(r);i=setTimeout(m,R(r))}function O(r){return i=void 0,v&&o?T(r):(o=s=void 0,f)}function W(){i!==void 0&&clearTimeout(i),d=0,o=c=s=i=void 0}function A(){return i===void 0?f:O(h())}function p(){var r=h(),a=S(r);if(o=arguments,s=this,c=r,a){if(i===void 0)return F(c);if(l)return clearTimeout(i),i=setTimeout(m,t),T(c)}return i===void 0&&(i=setTimeout(m,t)),f}return p.cancel=W,p.flush=A,p}var Ce=Ae;const Me=M(Ce),De=C("products",{state:()=>({products:[],isLoading:!1,isLoaded:!1,error:null}),actions:{fetchProducts:Me(async function(e=!1){if(!(this.isLoaded&&!e)){this.isLoading=!0,this.error=null;try{const t=await fetch("https://fakestoreapi.com/products");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const n=await t.json();this.products=n,this.isLoaded=!0}catch(t){this.error="Failed to load products. Please try again.",console.error("Error fetching products:",t)}finally{this.isLoading=!1}}},300)},getters:{getAllProducts:e=>e.products,isFetching:e=>e.isLoading,hasError:e=>e.error}});export{De as u};