"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=v(function(l,a){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),o=require('@stdlib/ndarray-base-offset/dist'),d=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/stats-strided-smaxsorted/dist').ndarray;function x(e){var r=e[0];return m(n(r,0),d(r),q(r,0),o(r))}a.exports=x
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=t(),i,s=c(f(__dirname,"./native.js"));g(s)?i=j:i=s;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
