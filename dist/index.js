"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=a(function(h,c){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-expm1/dist'),p=require('@stdlib/math-base-special-pow/dist');function N(e,r,t){return u(e)||u(r)||u(t)||r<=0||t<=0?NaN:e<0?0:-v(-p(e/t,r))}c.exports=N
});var s=a(function(j,o){
var y=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-expm1/dist'),x=require('@stdlib/math-base-special-pow/dist');function F(e,r){if(n(e)||n(r)||e<=0||r<=0)return y(NaN);return t;function t(i){return n(i)?NaN:i<0?0:-w(-x(i/r,e))}}o.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=f(),R=s();O(q,"factory",R);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
