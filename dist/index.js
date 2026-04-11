"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(p,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/stats-strided-smaxsorted/dist').ndarray;function m(e){var r=e[0];return d(v(r,0),o(r),n(r,0),q(r))}a.exports=m
});var x=require("path").join,f=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=t(),i,s=f(x(__dirname,"./native.js"));c(s)?i=g:i=s;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
