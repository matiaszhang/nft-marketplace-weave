"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var toStringFunction=Function.prototype.toString,create=Object.create,toStringObject=Object.prototype.toString,LegacyCache=function(){function e(){this._keys=[],this._values=[]}return e.prototype.has=function(e){return!!~this._keys.indexOf(e)},e.prototype.get=function(e){return this._values[this._keys.indexOf(e)]},e.prototype.set=function(e,r){this._keys.push(e),this._values.push(r)},e}();function createCacheLegacy(){return new LegacyCache}function createCacheModern(){return new WeakMap}var createCache="undefined"!==typeof WeakMap?createCacheModern:createCacheLegacy;function getCleanClone(e){if(!e)return create(null);var r=e.constructor;if(r===Object)return e===Object.prototype?{}:create(e);if(~toStringFunction.call(r).indexOf("[native code]"))try{return new r}catch(_a){}return create(e)}function getRegExpFlagsLegacy(e){var r="";return e.global&&(r+="g"),e.ignoreCase&&(r+="i"),e.multiline&&(r+="m"),e.unicode&&(r+="u"),e.sticky&&(r+="y"),r}function getRegExpFlagsModern(e){return e.flags}var getRegExpFlags="g"===/test/g.flags?getRegExpFlagsModern:getRegExpFlagsLegacy;function getTagLegacy(e){var r=toStringObject.call(e);return r.substring(8,r.length-1)}function getTagModern(e){return e[Symbol.toStringTag]||getTagLegacy(e)}var getTag="undefined"!==typeof Symbol?getTagModern:getTagLegacy,defineProperty=Object.defineProperty,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,_a=Object.prototype,hasOwnProperty=_a.hasOwnProperty,propertyIsEnumerable=_a.propertyIsEnumerable,SUPPORTS_SYMBOL="function"===typeof getOwnPropertySymbols;function getStrictPropertiesModern(e){return getOwnPropertyNames(e).concat(getOwnPropertySymbols(e))}var getStrictProperties=SUPPORTS_SYMBOL?getStrictPropertiesModern:getOwnPropertyNames;function copyOwnPropertiesStrict(e,r,t){for(var o=getStrictProperties(e),c=0,n=o.length,a=void 0,i=void 0;c<n;++c)if("callee"!==(a=o[c])&&"caller"!==a)if(i=getOwnPropertyDescriptor(e,a)){i.get||i.set||(i.value=t.copier(i.value,t));try{defineProperty(r,a,i)}catch(p){r[a]=i.value}}else r[a]=t.copier(e[a],t);return r}function copyArrayLoose(e,r){var t=new r.Constructor;r.cache.set(e,t);for(var o=0,c=e.length;o<c;++o)t[o]=r.copier(e[o],r);return t}function copyArrayStrict(e,r){var t=new r.Constructor;return r.cache.set(e,t),copyOwnPropertiesStrict(e,t,r)}function copyArrayBuffer(e,r){return e.slice(0)}function copyBlob(e,r){return e.slice(0,e.size,e.type)}function copyDataView(e,r){return new r.Constructor(copyArrayBuffer(e.buffer))}function copyDate(e,r){return new r.Constructor(e.getTime())}function copyMapLoose(e,r){var t=new r.Constructor;return r.cache.set(e,t),e.forEach((function(e,o){t.set(o,r.copier(e,r))})),t}function copyMapStrict(e,r){return copyOwnPropertiesStrict(e,copyMapLoose(e,r),r)}function copyObjectLooseLegacy(e,r){var t=getCleanClone(r.prototype);for(var o in r.cache.set(e,t),e)hasOwnProperty.call(e,o)&&(t[o]=r.copier(e[o],r));return t}function copyObjectLooseModern(e,r){var t=getCleanClone(r.prototype);for(var o in r.cache.set(e,t),e)hasOwnProperty.call(e,o)&&(t[o]=r.copier(e[o],r));for(var c=getOwnPropertySymbols(e),n=0,a=c.length,i=void 0;n<a;++n)i=c[n],propertyIsEnumerable.call(e,i)&&(t[i]=r.copier(e[i],r));return t}var copyObjectLoose=SUPPORTS_SYMBOL?copyObjectLooseModern:copyObjectLooseLegacy;function copyObjectStrict(e,r){var t=getCleanClone(r.prototype);return r.cache.set(e,t),copyOwnPropertiesStrict(e,t,r)}function copyPrimitiveWrapper(e,r){return new r.Constructor(e.valueOf())}function copyRegExp(e,r){var t=new r.Constructor(e.source,getRegExpFlags(e));return t.lastIndex=e.lastIndex,t}function copySelf(e,r){return e}function copySetLoose(e,r){var t=new r.Constructor;return r.cache.set(e,t),e.forEach((function(e){t.add(r.copier(e,r))})),t}function copySetStrict(e,r){return copyOwnPropertiesStrict(e,copySetLoose(e,r),r)}var isArray=Array.isArray,assign=Object.assign,getPrototypeOf=Object.getPrototypeOf||function(e){return e.__proto__},DEFAULT_LOOSE_OPTIONS={array:copyArrayLoose,arrayBuffer:copyArrayBuffer,blob:copyBlob,dataView:copyDataView,date:copyDate,error:copySelf,map:copyMapLoose,object:copyObjectLoose,regExp:copyRegExp,set:copySetLoose},DEFAULT_STRICT_OPTIONS=assign({},DEFAULT_LOOSE_OPTIONS,{array:copyArrayStrict,map:copyMapStrict,object:copyObjectStrict,set:copySetStrict});function getTagSpecificCopiers(e){return{Arguments:e.object,Array:e.array,ArrayBuffer:e.arrayBuffer,Blob:e.blob,Boolean:copyPrimitiveWrapper,DataView:e.dataView,Date:e.date,Error:e.error,Float32Array:e.arrayBuffer,Float64Array:e.arrayBuffer,Int8Array:e.arrayBuffer,Int16Array:e.arrayBuffer,Int32Array:e.arrayBuffer,Map:e.map,Number:copyPrimitiveWrapper,Object:e.object,Promise:copySelf,RegExp:e.regExp,Set:e.set,String:copyPrimitiveWrapper,WeakMap:copySelf,WeakSet:copySelf,Uint8Array:e.arrayBuffer,Uint8ClampedArray:e.arrayBuffer,Uint16Array:e.arrayBuffer,Uint32Array:e.arrayBuffer,Uint64Array:e.arrayBuffer}}function createCopier(e){var r=getTagSpecificCopiers(assign({},DEFAULT_LOOSE_OPTIONS,e)),t=r.Array,o=r.Object;function c(e,c){if(c.prototype=c.Constructor=void 0,!e||"object"!==typeof e)return e;if(c.cache.has(e))return c.cache.get(e);if(c.prototype=getPrototypeOf(e),c.Constructor=c.prototype&&c.prototype.constructor,!c.Constructor||c.Constructor===Object)return o(e,c);if(isArray(e))return t(e,c);var n=r[getTag(e)];return n?n(e,c):"function"===typeof e.then?e:o(e,c)}return function(e){return c(e,{Constructor:void 0,cache:createCache(),copier:c,prototype:void 0})}}function createStrictCopier(e){return createCopier(assign({},DEFAULT_STRICT_OPTIONS,e))}var copyStrict=createStrictCopier({}),index=createCopier({});exports.copyStrict=copyStrict,exports.createCopier=createCopier,exports.createStrictCopier=createStrictCopier,exports.default=index;