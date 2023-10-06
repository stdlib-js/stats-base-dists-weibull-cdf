// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,n,t,a,o,c,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return N.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Z=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[Y],a=Y,e=null!=(i=r)&&M.call(i,a);try{r[Y]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return Z.call(r)},z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null;var D,J="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,n;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(z&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var er,nr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,n;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),n=e,r=(Q&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr=er,ir="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null;var or,ur="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),n=e,r=(ir&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=or,cr="function"==typeof Uint16Array;var sr="function"==typeof Uint16Array?Uint16Array:null;var lr,pr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(cr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr={uint16:lr,uint8:fr};(yr=new gr.uint16(1))[0]=4660;var vr=52===new gr.uint8(yr.buffer)[0],dr=!0===vr?1:0,hr=new tr(1),wr=new K(hr.buffer);function br(r){return hr[0]=r,wr[dr]}var mr,Ar,_r=!0===vr?1:0,Er=new tr(1),Ur=new K(Er.buffer);function Ir(r,e){return Er[0]=r,Ur[_r]=e>>>0,Er[0]}!0===vr?(mr=1,Ar=0):(mr=0,Ar=1);var Sr={HIGH:mr,LOW:Ar},Nr=new tr(1),kr=new K(Nr.buffer),xr=Sr.HIGH,Fr=Sr.LOW;function jr(r,e){return kr[xr]=r,kr[Fr]=e,Nr[0]}var Tr=Number.POSITIVE_INFINITY,Or=Number.NEGATIVE_INFINITY;var Vr=.6931471803691238,$r=1.9082149292705877e-10;function Gr(r){var e,n,t,i,a,o,u,f,c,s,l,p,y;if(r===Tr||P(r))return r;if(r===Or)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return Tr}if(o=0|br(f),f>.34657359027997264)f<1.0397207708399179?t?(i=r+Vr,a=-$r,y=-1):(i=r-Vr,a=$r,y=1):(y=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,i=r-(l=y|=0)*Vr,a=l*$r),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return u=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*e))/(6-r*l)),0===y?r-(r*p-c):(n=jr(1023+y<<20,0),p=r*(p-s)-s,p-=c,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(f=1-(p-r),1024===y?f=Ir(f,i=br(f)+(y<<20)|0):f*=n,f-1):(l=1,y<20?f=(l=Ir(l,i=1072693248-(2097152>>y)|0))-(p-r):(f=r-(p+(l=Ir(l,i=1023-y<<20|0))),f+=1),f*=n))}var Hr=Math.floor;function Wr(r){return Hr(r)===r}function Cr(r){return Wr(r/2)}function Lr(r){return Cr(r>0?r-1:r+1)}function Pr(r){return r===Tr||r===Or}var Rr,Zr,Mr=Math.sqrt;function Xr(r){return Math.abs(r)}!0===vr?(Rr=1,Zr=0):(Rr=0,Zr=1);var Yr={HIGH:Rr,LOW:Zr},qr=new tr(1),zr=new K(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e,n,t){return qr[0]=r,e[t]=zr[Br],e[t+n]=zr[Dr],e}function Kr(r){return Jr(r,[0,0],1,0)}L(Kr,"assign",Jr);var Qr=!0===vr?0:1,re=new tr(1),ee=new K(re.buffer);function ne(r,e){return re[0]=r,ee[Qr]=e>>>0,re[0]}function te(r){return 0|r}var ie=[0,0];function ae(r,e){var n,t;return Kr.assign(r,ie,1,0),n=ie[0],n&=2147483647,t=br(e),jr(n|=t&=2147483648,ie[1])}var oe=[1,1.5],ue=[0,.5849624872207642],fe=[0,1.350039202129749e-8];function ce(r,e,n,t){return P(r)||Pr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Xr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=[0,0],le=[0,0];function pe(r,e){var n,t;return 0===e||0===r||P(r)||Pr(r)?r:(ce(r,se,1,0),e+=se[1],e+=function(r){var e=br(r);return(e=(2146435072&e)>>>20)-1023|0}(r=se[0]),e<-1074?ae(0,r):e>1023?r<0?Or:Tr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Kr.assign(r,le,1,0),n=le[0],n&=2148532223,t*jr(n|=e+1023<<20,le[1])))}var ye=1e300,ge=1e-300,ve=[0,0],de=[0,0];function he(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,v;if(P(r)||P(e))return NaN;if(Kr.assign(e,ve,1,0),o=ve[0],0===ve[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Mr(r);if(-.5===e)return 1/Mr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Pr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(e===Tr)?0:Tr}(r,e)}if(Kr.assign(r,ve,1,0),a=ve[0],0===ve[1]){if(0===a)return function(r,e){return e===Or?Tr:e===Tr?0:e>0?Lr(e)?r:0:Lr(e)?ae(Tr,r):Tr}(r,e);if(1===r)return 1;if(-1===r&&Lr(e))return-1;if(Pr(r))return r===Or?he(-0,-e):e<0?0:Tr}if(r<0&&!1===Wr(e))return(r-r)/(r-r);if(i=Xr(r),n=2147483647&a|0,t=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&Lr(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&br(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*ye*ye:u*ge*ge;if(n>1072693248)return 0===f?u*ye*ye:u*ge*ge;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ne(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(de,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=br(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=ne(i=(w=(e=Ir(e,n))-(c=oe[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ir(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=ne(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=ne(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+fe[_])-((g=ne(g=(p=.9617967009544373*l)+y+(s=ue[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(de,i,n);if(y=(l=(e-(c=ne(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Kr.assign(y,ve,1,0),g=te(ve[0]),v=te(ve[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*ye*ye;if(l+8008566259537294e-32>y-s)return u*ye*ye}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*ge*ge;if(l<=y-s)return u*ge*ge}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=Ir(0,t)),r=te(r=br(c=1-((c=(o=.6931471824645996*(a=ne(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?pe(c,s):Ir(c,r)}(g,s,l),u*y}function we(r,e,n){return P(r)||P(e)||P(n)||e<=0||n<=0?NaN:r<0?0:-Gr(-he(r/n,e))}function be(r,e){return P(r)||P(e)||r<=0||e<=0?(n=NaN,function(){return n}):function(n){if(P(n))return NaN;if(n<0)return 0;return-Gr(-he(n/e,r))};var n}L(we,"factory",be);export{we as default,be as factory};
//# sourceMappingURL=mod.js.map
