'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _candourFluid=require('candour-fluid'),_candourFluid2=_interopRequireDefault(_candourFluid);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}exports.default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:1,b=arguments[1],c=b.min,d=c===void 0?14:c,e=b.max,f=e===void 0?18:e,g=_objectWithoutProperties(b,['min','max']);return(0,_candourFluid2.default)(a*d,a*f,g)};