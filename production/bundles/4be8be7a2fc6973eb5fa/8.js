(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1356:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var r=n(1),o=n.n(r),a=n(0);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({selection:{anchorNode:null,anchorOffset:0,focusNode:null,focusOffset:0,isForward:!0}},e)}const l=Object(a.createContext)(i());function s(){return Object(a.useContext)(l)}l.displayName="ComposerContext"},1366:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n(43),o=n(17),a=n(357),c=n(379),i=n(269);function l(e,t,n,r){var o;t===n.timelineRenderingType&&(null===(o=e.current)||void 0===o||o.focus(),r.current&&clearTimeout(r.current),r.current=window.setTimeout((()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.focus()}),200))}function s(e){const t=document.createRange();t.selectNodeContents(e),t.collapse(!1);const n=document.getSelection();n.removeAllRanges(),n.addRange(t),e.focus()}function u(e,t){if(!((null==e?void 0:e.current)&&!e.current.state.hide))return!1;let n=!1;const a=Object(r.a)().getAutocompleteAction(t),c=e.current;if(c&&c.countCompletions()>0)switch(a){case o.h.ForceCompleteAutocomplete:case o.h.CompleteAutocomplete:e.current.onConfirmCompletion(),n=!0;break;case o.h.PrevSelectionInAutocomplete:e.current.moveSelection(-1),n=!0;break;case o.h.NextSelectionInAutocomplete:e.current.moveSelection(1),n=!0;break;case o.h.CancelAutocomplete:e.current.onEscape(t),n=!0}return n&&(t.preventDefault(),t.stopPropagation()),n}function d(e,t,n,r,o){const{room:i,timelineRenderingType:l,replyToEvent:s}=n;function u(e){e instanceof Error?console.log(e.message):"string"==typeof e&&console.log(e)}if("paste"!==e.type||null===t||void 0===i)return!1;if(t.files.length&&!t.types.includes("text/rtf"))return c.a.sharedInstance().sendContentListToRoom(Array.from(t.files),i.roomId,o,r,l).catch(u),!0;if(t.types.includes("text/html")){var d;const e=t.getData("text/html"),n=(new DOMParser).parseFromString(e,"text/html");if(1!==n.getElementsByTagName("img").length||null===(d=n.querySelector("img"))||void 0===d||!d.src.startsWith("blob:")||1!==n.childNodes.length)return u("Failed to handle pasted content as Safari inserted content"),!1;const l=n.querySelector("img").src;return fetch(l).then((e=>{e.blob().then((t=>{const n=t.type,l=Object(a.a)(n),d=n.split("/")[1],m=e.url.split("/"),f=m[m.length-1],p=new File([t],f+"."+d,{type:l});c.a.sharedInstance().sendContentToRoom(p,i.roomId,o,r,s).catch(u)})).catch(u)})).catch(u),!0}return!1}function m(e){const t=e instanceof InputEvent&&"insertFromPaste"===e.inputType&&Object(i.a)(e.dataTransfer);return e instanceof ClipboardEvent||t}},1367:function(e,t,n){"use strict";function r(e){if(e.anchorNode&&e.focusNode){var t,n;const r=new Range;e.isForward?(r.setStart(e.anchorNode,e.anchorOffset),r.setEnd(e.focusNode,e.focusOffset)):(r.setStart(e.focusNode,e.focusOffset),r.setEnd(e.anchorNode,e.anchorOffset)),null===(t=document.getSelection())||void 0===t||t.removeAllRanges(),null===(n=document.getSelection())||void 0===n||n.addRange(r)}return new Promise((e=>setTimeout(e,0)))}function o(){const e=document.getSelection();return Boolean(null==e?void 0:e.isCollapsed)}function a(e){const t=document.getSelection();if(!t)return!1;if(t.anchorNode===e&&t.anchorOffset<=1)return!0;let n=e.firstChild;do{var r;if(n===t.anchorNode)return 0===t.anchorOffset}while(n=(null===(r=n)||void 0===r?void 0:r.firstChild)||null);return!1}function c(e){var t;const n=document.getSelection();if(!n)return!1;if(n.focusNode===e&&n.focusOffset===(null===(t=e.childNodes)||void 0===t?void 0:t.length))return!0;let r=e.childNodes.item(e.childNodes.length-2);do{var o;if(r===n.focusNode)return n.focusOffset===(null===(o=r.textContent)||void 0===o?void 0:o.length)}while(r=r.lastChild);return!1}n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}))},1368:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(4),o=n(9),a=n(13);function c(e){o.a.dispatch({action:a.a.EditEvent,event:null,timelineRenderingType:e.timelineRenderingType}),o.a.dispatch({action:a.a.FocusSendMessageComposer,context:e.timelineRenderingType})}function i(e,t){const n=t.getEvent().replacingEvent();!n||n.status!==r.EventStatus.QUEUED&&n.status!==r.EventStatus.NOT_SENT||e.cancelPendingEvent(n)}},1394:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n.n(r),a=n(17),c=n(21),i=n(2);const l=({name:e,last:t})=>{const n=a.g[e],r=a.a[e];return o.a.createElement(o.a.Fragment,null,o.a.createElement("kbd",null," ",n||r&&Object(i.b)(r)||e," "),!t&&"+")},s=({value:e,className:t="mx_KeyboardShortcut"})=>{if(!e)return null;const n=[];return e.ctrlOrCmdKey?n.push(o.a.createElement(l,{key:"ctrlOrCmdKey",name:c.a?c.b.META:c.b.CONTROL})):e.ctrlKey?n.push(o.a.createElement(l,{key:"ctrlKey",name:c.b.CONTROL})):e.metaKey&&n.push(o.a.createElement(l,{key:"metaKey",name:c.b.META})),e.altKey&&n.push(o.a.createElement(l,{key:"altKey",name:c.b.ALT})),e.shiftKey&&n.push(o.a.createElement(l,{key:"shiftKey",name:c.b.SHIFT})),o.a.createElement("div",{className:t},n,o.a.createElement(l,{name:e.key,last:!0}))}},1430:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(1366);function a(e,t){Object(r.useEffect)((()=>{t.current&&!e&&Object(o.e)(t.current)}),[t,e])}},1431:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(){const[e,t]=Object(r.useState)(!1),n=Object(r.useRef)();Object(r.useEffect)((()=>()=>clearTimeout(n.current)),[n]);return{isFocused:e,onFocus:Object(r.useCallback)((e=>{clearTimeout(n.current),"focus"===e.type?t(!0):n.current=window.setTimeout((()=>t(!1)),100)}),[t,n])}}},1483:function(e,t,n){"use strict";n.d(t,"a",(function(){return De}));var r,o=n(0),a=n.n(o),c=n(1393),i=n(12),l=n.n(i),s=n(1492);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){return o.createElement("svg",u({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),r||(r=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3a1 1 0 011-1h3.192C10.093 2 11.5 3.644 11.5 5.5c0 .753-.232 1.472-.634 2.06A3.471 3.471 0 0112.5 10.5c0 1.96-1.626 3.5-3.571 3.5H5a1 1 0 01-1-1V3zm2 1v3h2.192C8.841 7 9.5 6.405 9.5 5.5S8.84 4 8.192 4H6zm0 5v3h2.929c.894 0 1.571-.698 1.571-1.5S9.823 9 8.929 9H6z",fill:"currentColor"})))}var m,f=o.forwardRef(d);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function b(e,t){return o.createElement("svg",p({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),m||(m=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.086 3.6l-1.805 8.804H4.8a.8.8 0 000 1.6H9.067a.8.8 0 100-1.6H7.914L9.719 3.6H11.2a.8.8 0 000-1.6H9.082a.8.8 0 00-.032 0H6.933a.8.8 0 100 1.6h1.153z",fill:"currentColor"})))}var v,h=o.forwardRef(b);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function O(e,t){return o.createElement("svg",g({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),v||(v=o.createElement("path",{d:"M8.193 11.3c2.02-.26 3.474-2.073 3.474-4.107v-4.36a.834.834 0 00-1.667 0v4.434c0 1.113-.753 2.126-1.847 2.346a2.33 2.33 0 01-2.82-2.28v-4.5a.834.834 0 00-1.666 0v4.5c0 2.38 2.086 4.28 4.526 3.967zM3 13.333c0 .367.3.667.667.667h8c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666h-8c-.367 0-.667.3-.667.666z",fill:"currentColor"})))}var y,E=o.forwardRef(O);function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function _(e,t){return o.createElement("svg",w({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),y||(y=o.createElement("path",{d:"M9.932 4.77C9.49 3.88 8.584 3.474 7.582 3.58c-1.549.167-1.956 1.367-1.767 2.147.206.853.883 1.185 2.078 1.49h5.387c.398 0 .72.35.72.782 0 .432-.322.782-.72.782H2.72C2.322 8.782 2 8.432 2 8c0-.432.322-.783.72-.783h2.183a3.184 3.184 0 01-.48-1.091c-.42-1.738.613-3.843 3.017-4.102 1.416-.153 2.97.416 3.758 2.001.19.38.06.855-.29 1.06-.35.206-.787.065-.976-.315zM10.285 10.087h1.495c.145.784.034 1.62-.413 2.334C10.742 13.417 9.58 14 7.99 14c-2.606 0-3.804-1.61-4.048-2.676-.097-.42.138-.844.524-.949.385-.105.776.15.873.57.074.323.662 1.49 2.65 1.49 1.282 0 1.914-.459 2.187-.895.252-.402.296-.934.109-1.453z",fill:"currentColor"})))}var j,C=o.forwardRef(_);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function x(e,t){return o.createElement("svg",k({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),j||(j=o.createElement("path",{d:"M3.146 2.893a.787.787 0 00-.686-.885.804.804 0 00-.913.664l-.539 3.652a.787.787 0 00.686.886.804.804 0 00.913-.665l.539-3.652zM11.223 9.676a.787.787 0 00-.686-.886.804.804 0 00-.914.665l-.538 3.652a.787.787 0 00.685.885.804.804 0 00.914-.664l.539-3.652zM6.212 2.006a.788.788 0 01.705.87l-.014.117a119.94 119.94 0 01-.177 1.337c-.108.782-.246 1.72-.357 2.258a.807.807 0 01-.95.614.784.784 0 01-.634-.92c.1-.481.23-1.369.34-2.159a127.104 127.104 0 00.174-1.32l.015-.114a.803.803 0 01.898-.683zM14.992 9.676a.787.787 0 00-.686-.886.804.804 0 00-.913.665l-.539 3.652a.787.787 0 00.686.885.804.804 0 00.913-.664l.539-3.652z",fill:"currentColor"})))}var N,S=o.forwardRef(x);function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function M(e,t){return o.createElement("svg",P({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),N||(N=o.createElement("path",{d:"M9.972 3.749a.667.667 0 10-1.277-.383l-2.667 8.889a.667.667 0 101.277.383l2.667-8.889zM3.982 4.823a.667.667 0 00-.939.086L.821 7.575a.667.667 0 000 .854l2.222 2.666a.667.667 0 101.025-.853L2.2 8.002l1.867-2.24a.667.667 0 00-.086-.939zM12.018 4.823a.667.667 0 01.939.086l2.222 2.666a.666.666 0 010 .854l-2.222 2.666a.667.667 0 11-1.025-.853l1.867-2.24-1.867-2.24a.667.667 0 01.086-.939z",fill:"currentColor"})))}var R,z,T=o.forwardRef(M),F=n(807);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function I(e,t){return o.createElement("svg",B({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),R||(R=o.createElement("g",{clipPath:"url(#bulleted_list_svg__clip0_2793_14169)"},o.createElement("path",{d:"M2.667 7c-.554 0-1 .447-1 1 0 .553.446 1 1 1 .553 0 1-.447 1-1 0-.553-.447-1-1-1zm0-4c-.554 0-1 .447-1 1 0 .553.446 1 1 1 .553 0 1-.447 1-1 0-.553-.447-1-1-1zm0 8c-.554 0-1 .453-1 1 0 .547.453 1 1 1 .546 0 1-.453 1-1 0-.547-.447-1-1-1zm2.666 1.667h8c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-8c-.366 0-.666.3-.666.667 0 .367.3.667.666.667zm0-4h8c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-8c-.366 0-.666.3-.666.667 0 .367.3.667.666.667zM4.667 4c0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-8c-.366 0-.666.3-.666.667z",fill:"currentColor"}))),z||(z=o.createElement("defs",null,o.createElement("clipPath",{id:"bulleted_list_svg__clip0_2793_14169"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var A,H,L=o.forwardRef(I);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function K(e,t){return o.createElement("svg",D({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),A||(A=o.createElement("g",{clipPath:"url(#numbered_list_svg__clip0_2793_4634)"},o.createElement("path",{d:"M5.333 4.664h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666h-8c-.366 0-.666.3-.666.666 0 .367.3.667.666.667zm8 6.667h-8c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666zm0-4h-8c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666zM3 10.664H1.667a.33.33 0 00-.334.333.33.33 0 00.334.334h1v.333h-.334a.33.33 0 00-.333.333.33.33 0 00.333.334h.334v.333h-1a.33.33 0 00-.334.333.33.33 0 00.334.334H3a.33.33 0 00.333-.334v-2A.33.33 0 003 10.664zM1.667 3.331H2v1.666a.33.33 0 00.333.334.33.33 0 00.334-.334v-2a.33.33 0 00-.334-.333h-.666a.33.33 0 00-.334.333.33.33 0 00.334.334zM3 6.664H1.667a.33.33 0 00-.334.333.33.33 0 00.334.334h.866l-1.12 1.306a.327.327 0 00-.08.214v.146a.33.33 0 00.334.334H3a.33.33 0 00.333-.334A.33.33 0 003 8.664h-.867l1.12-1.307c.054-.06.08-.14.08-.213v-.147A.33.33 0 003 6.664z",fill:"currentColor"}))),H||(H=o.createElement("defs",null,o.createElement("clipPath",{id:"numbered_list_svg__clip0_2793_4634"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var W,q=o.forwardRef(K);function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}function V(e,t){return o.createElement("svg",$({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),W||(W=o.createElement("path",{d:"M5.143 7.998l1.333-1.334a.57.57 0 00.172-.419.57.57 0 00-.172-.419.57.57 0 00-.419-.171.57.57 0 00-.419.171L3.867 7.598a.58.58 0 00-.134.19.56.56 0 00-.038.21.56.56 0 00.038.21.58.58 0 00.134.19l1.79 1.79a.57.57 0 00.42.172.57.57 0 00.418-.172.57.57 0 00.172-.419.57.57 0 00-.172-.419L5.143 7.998zm5.714 0L9.505 9.35a.57.57 0 00-.172.42.57.57 0 00.172.418.57.57 0 00.419.172.57.57 0 00.419-.172l1.79-1.79a.58.58 0 00.134-.19.56.56 0 00.038-.21.56.56 0 00-.038-.21.58.58 0 00-.134-.19l-1.79-1.79a.402.402 0 00-.19-.134.72.72 0 00-.23-.038.552.552 0 00-.42.171.57.57 0 00-.17.42.57.57 0 00.172.418l1.352 1.353zm-8.571 6.857c-.305 0-.572-.114-.8-.343a1.097 1.097 0 01-.343-.8V2.283c0-.304.114-.57.343-.8.228-.228.495-.342.8-.342h11.428c.305 0 .572.114.8.342.229.229.343.496.343.8v11.43c0 .304-.114.57-.343.8a1.097 1.097 0 01-.8.342H2.286zm0-1.143h11.428V2.283H2.286v11.43z",fill:"currentColor"})))}var U,J,Q=o.forwardRef(V);function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function G(e,t){return o.createElement("svg",Y({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),U||(U=o.createElement("g",{clipPath:"url(#indent_increase_svg__clip0_2793_4893)"},o.createElement("path",{d:"M2.667 14h10.666c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H2.667c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zM2 6.14v3.727c0 .3.36.446.567.233l1.86-1.86a.33.33 0 000-.473L2.567 5.9A.333.333 0 002 6.14zm6 5.193h5.333c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .366.3.666.667.666zM2 2.667c0 .366.3.666.667.666h10.666c.367 0 .667-.3.667-.666C14 2.3 13.7 2 13.333 2H2.667C2.3 2 2 2.3 2 2.667zM8 6h5.333C13.7 6 14 5.7 14 5.333c0-.366-.3-.666-.667-.666H8c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zm0 2.667h5.333c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .367.3.667.667.667z",fill:"currentColor"}))),J||(J=o.createElement("defs",null,o.createElement("clipPath",{id:"indent_increase_svg__clip0_2793_4893"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var X,Z,ee=o.forwardRef(G);function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){return o.createElement("svg",te({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",role:"presentation","aria-hidden":!0,ref:t},e),X||(X=o.createElement("g",{clipPath:"url(#indent_decrease_svg__clip0_2793_14104)"},o.createElement("path",{d:"M8 11.333h5.333c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .366.3.666.667.666zm-5.767-3.1l1.86 1.86a.334.334 0 00.574-.233V6.14a.33.33 0 00-.567-.233l-1.86 1.86a.328.328 0 00-.007.466zM2.667 14h10.666c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666H2.667c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zM2 2.667c0 .366.3.666.667.666h10.666c.367 0 .667-.3.667-.666C14 2.3 13.7 2 13.333 2H2.667C2.3 2 2 2.3 2 2.667zM8 6h5.333C13.7 6 14 5.7 14 5.333c0-.366-.3-.666-.667-.666H8c-.367 0-.667.3-.667.666 0 .367.3.667.667.667zm0 2.667h5.333c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667H8c-.367 0-.667.3-.667.667 0 .367.3.667.667.667z",fill:"currentColor"}))),Z||(Z=o.createElement("defs",null,o.createElement("clipPath",{id:"indent_decrease_svg__clip0_2793_14104"},o.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"})))))}var re=o.forwardRef(ne),oe=n(62),ae=n(102),ce=n(1394),ie=n(2),le=n(1),se=n.n(le),ue=n(11),de=n(48),me=n(1367),fe=n(34),pe=n(59);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){se()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function he(e){return e.length<1}const ge=({composer:e,isTextEnabled:t,onFinished:n,composerContext:r,isEditing:c})=>{const[i,l]=Object(o.useState)(!1),[s,u]=Object(o.useState)({text:"",link:c?e.getLink():""}),d=!c&&t,m=!i||d&&he(s.text)||he(s.link);return a.a.createElement(fe.a,{className:"mx_LinkModal",title:c?Object(ie.b)("composer|link_modal|title_edit"):Object(ie.b)("composer|link_modal|title_create"),hasCancel:!0,onFinished:n},a.a.createElement("form",{className:"mx_LinkModal_content",onSubmit:async o=>{o.preventDefault(),o.stopPropagation(),n(),await new Promise((e=>setTimeout(e,0))),await Object(me.d)(r.selection),e.link(s.link,t?s.text:void 0)}},d&&a.a.createElement(de.a,{required:!0,autoFocus:!0,label:Object(ie.b)("composer|link_modal|text_field_label"),value:s.text,className:"mx_LinkModal_Field",placeholder:"",onChange:e=>u((t=>ve(ve({},t),{},{text:e.target.value})))}),a.a.createElement(de.a,{required:!0,autoFocus:!d,label:Object(ie.b)("composer|link_modal|link_field_label"),value:s.link,className:"mx_LinkModal_Field",placeholder:"",onChange:e=>{u((t=>ve(ve({},t),{},{link:e.target.value}))),l(!0)}}),a.a.createElement("div",{className:"mx_LinkModal_buttons"},c&&a.a.createElement("button",{type:"button",className:"danger",onClick:()=>{e.removeLinks(),n()}},Object(ie.b)("action|remove")),a.a.createElement(pe.a,{primaryButton:Object(ie.b)("action|save"),primaryDisabled:m,primaryIsSubmit:!0,onCancel:n}))))};var Oe=n(1356);function ye({label:e,keyCombo:t}){return a.a.createElement("div",{className:"mx_FormattingButtons_Tooltip"},e,t&&a.a.createElement(ce.a,{value:t,className:"mx_FormattingButtons_Tooltip_KeyboardShortcut"}))}function Ee({label:e,keyCombo:t,onClick:n,actionState:r,icon:o}){return a.a.createElement(oe.a,{element:"button",onClick:n,title:e,className:l()("mx_FormattingButtons_Button",{mx_FormattingButtons_active:"reversed"===r,mx_FormattingButtons_Button_hover:"enabled"===r,mx_FormattingButtons_disabled:"disabled"===r}),tooltip:t&&a.a.createElement(ye,{label:e,keyCombo:t}),forceHide:"disabled"===r,alignment:ae.a.Top},o)}function we({composer:e,actionStates:t}){const n=Object(Oe.c)(),r="reversed"===t.unorderedList||"reversed"===t.orderedList;return a.a.createElement("div",{className:"mx_FormattingButtons"},a.a.createElement(Ee,{actionState:t.bold,label:Object(ie.b)("composer|format_bold"),keyCombo:{ctrlOrCmdKey:!0,key:"b"},onClick:()=>e.bold(),icon:a.a.createElement(f,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.italic,label:Object(ie.b)("composer|format_italic"),keyCombo:{ctrlOrCmdKey:!0,key:"i"},onClick:()=>e.italic(),icon:a.a.createElement(h,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.underline,label:Object(ie.b)("composer|format_underline"),keyCombo:{ctrlOrCmdKey:!0,key:"u"},onClick:()=>e.underline(),icon:a.a.createElement(E,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.strikeThrough,label:Object(ie.b)("composer|format_strikethrough"),onClick:()=>e.strikeThrough(),icon:a.a.createElement(C,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.unorderedList,label:Object(ie.b)("composer|format_unordered_list"),onClick:()=>e.unorderedList(),icon:a.a.createElement(L,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.orderedList,label:Object(ie.b)("composer|format_ordered_list"),onClick:()=>e.orderedList(),icon:a.a.createElement(q,{className:"mx_FormattingButtons_Icon"})}),r&&a.a.createElement(Ee,{actionState:t.indent,label:Object(ie.b)("composer|format_increase_indent"),onClick:()=>e.indent(),icon:a.a.createElement(ee,{className:"mx_FormattingButtons_Icon"})}),r&&a.a.createElement(Ee,{actionState:t.unindent,label:Object(ie.b)("composer|format_decrease_indent"),onClick:()=>e.unindent(),icon:a.a.createElement(re,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.quote,label:Object(ie.b)("action|quote"),onClick:()=>e.quote(),icon:a.a.createElement(S,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.inlineCode,label:Object(ie.b)("composer|format_inline_code"),keyCombo:{ctrlOrCmdKey:!0,key:"e"},onClick:()=>e.inlineCode(),icon:a.a.createElement(T,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.codeBlock,label:Object(ie.b)("composer|format_code_block"),onClick:()=>e.codeBlock(),icon:a.a.createElement(Q,{className:"mx_FormattingButtons_Icon"})}),a.a.createElement(Ee,{actionState:t.link,label:Object(ie.b)("composer|format_link"),onClick:()=>function(e,t,n){ue.b.createDialog(ge,{composerContext:t,composer:e,isTextEnabled:Object(me.c)(),isEditing:n},"mx_CompoundDialog",!1,!0)}(e,n,"reversed"===t.link),icon:a.a.createElement(F.a,{className:"mx_FormattingButtons_Icon"})}))}var _e=n(1487),je=n(178),Ce=n(43),ke=n(17),xe=n(97),Ne=n(9),Se=n(13),Pe=n(27),Me=n(22),Re=n(4);var ze=n(1368),Te=n(1366);function Fe(e,t,n,r){const a=Object(Pe.c)(),c=Object(Oe.c)(),i=Object(Me.b)(),l=Object(je.b)("MessageComposerInput.ctrlEnterToSend");return Object(o.useCallback)(((o,s,u)=>{const d=()=>{var n,r;null===(n=o.stopPropagation)||void 0===n||n.call(o),null===(r=o.preventDefault)||void 0===r||r.call(o),null!=t&&t.current&&!t.current.state.hide||e()};if(Object(Te.d)(o)){const e=o instanceof ClipboardEvent?o.clipboardData:o.dataTransfer;return Object(Te.b)(o,e,a,i,r)?null:o}return o instanceof KeyboardEvent?function(e,t,n,r,o,a,c,i,l){const{editorStateTransfer:s}=c,u=Boolean(s)?n!==r.content():0!==r.content().length,d=Object(Ce.a)().getMessageComposerAction(e),m=Object(Te.c)(l,e);if(m)return e;if(void 0===i)return null;switch(d){case ke.h.SendMessage:return t(),null;case ke.h.EditPrevMessage:if(!Object(me.b)(o)||u)break;if(Be(e,!1,s,c,a,i))return null;break;case ke.h.EditNextMessage:if(!s||!Object(me.a)(o)||u)break;return Be(e,!0,s,c,a,i)||(Object(ze.b)(a),e.preventDefault(),e.stopPropagation()),null}return e}(o,d,n,s,u,a,c,i,t):function(e,t,n){switch(e.inputType){case"insertParagraph":if(!n)return t(),null;break;case"sendMessage":if(n)return t(),null}return e}(o,d,l)}),[l,e,n,a,c,i,t,r])}function Be(e,t,n,r,o,a){const c=n?function(e,t,n){var r;const o=null===(r=t.liveTimeline)||void 0===r?void 0:r.getEvents();if(!o)return;const a=e.getEvent().getRoomId();if(!a)return;const c=n.getRoom(a);if(!c)return;const i=c.getPendingEvents(),l=Boolean(e.getEvent().getThread());return o.concat(l?[]:i)}(n,o,a):function(e,t){var n,r,o;const a=(null===(n=e.eventRelation)||void 0===n?void 0:n.key)===Re.THREAD_RELATION_TYPE.name;return null===(r=t.liveTimeline)||void 0===r?void 0:r.getEvents().concat(a?[]:(null===(o=t.room)||void 0===o?void 0:o.getPendingEvents())||[])}(r,o);if(!c)return!1;const i=Object(xe.g)({events:c,isForward:t,fromEventId:null==n?void 0:n.getEvent().getId(),matrixClient:a});return!!i&&(Ne.a.dispatch({action:Se.a.EditEvent,event:i,timelineRenderingType:o.timelineRenderingType}),e.stopPropagation(),e.preventDefault(),!0)}var Ie=n(1430),Ae=n(1431),He=n(46),Le=n(269);const De=Object(o.memo)((function({disabled:e=!1,onChange:t,onSend:n,placeholder:r,initialContent:i,className:u,leftComponent:d,rightComponent:m,children:f,eventRelation:p}){const{room:b}=Object(Pe.c)(),v=Object(o.useRef)(null),h=Fe(n,v,i,p),{ref:g,isWysiwygReady:O,content:y,actionStates:E,wysiwyg:w,suggestion:_,messageContent:j}=Object(c.useWysiwyg)({initialContent:i,inputEventProcessor:h}),{isFocused:C,onFocus:k}=Object(Ae.a)(),x=O&&!e,N=!y&&r||void 0;return Object(Ie.a)(!x,g),Object(o.useEffect)((()=>{!e&&Object(Le.a)(j)&&t(j)}),[t,j,e]),Object(o.useEffect)((()=>{var e;function t(e){if(e.preventDefault(),e.target&&e.target instanceof HTMLAnchorElement&&"user"===e.target.getAttribute("data-mention-type")){const t=Object(He.h)(e.target.href);b&&null!=t&&t.userId&&Ne.a.dispatch({action:Se.a.ViewUser,member:b.getMember(t.userId)})}}const n=null===(e=g.current)||void 0===e?void 0:e.querySelectorAll("a[data-mention-type]");return n&&n.forEach((e=>e.addEventListener("click",t))),()=>{n&&n.forEach((e=>e.removeEventListener("click",t)))}}),[g,b,y]),a.a.createElement("div",{"data-testid":"WysiwygComposer",className:l()(u,{[`${u}-focused`]:C}),onFocus:k,onBlur:k},a.a.createElement(s.a,{ref:v,suggestion:_,handleMention:w.mention,handleAtRoomMention:w.mentionAtRoom,handleCommand:w.command}),a.a.createElement(we,{composer:w,actionStates:E}),a.a.createElement(_e.a,{ref:g,disabled:!x,leftComponent:d,rightComponent:m,placeholder:N}),null==f?void 0:f(g,w))}))},1487:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(12),o=n.n(r),a=n(0),c=n.n(a);var i=n(1),l=n.n(i),s=n(481),u=n(1356);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){const t=document.getSelection();if(t){const n=t.getRangeAt(0),r=n.startContainer===t.anchorNode&&n.startOffset===t.anchorOffset;e.selection={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset,isForward:r}}}const p=Object(a.memo)(Object(a.forwardRef)((function({disabled:e,placeholder:t,leftComponent:n,rightComponent:r},i){const l=function(e,t){const[n,r]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{if(e.current){const n=e.current,o=new ResizeObserver((e=>{requestAnimationFrame((()=>{var n,o;const a=null===(n=e[0])||void 0===n||null===(o=n.contentBoxSize)||void 0===o?void 0:o[0].blockSize;r(a>=t)}))}));return o.observe(n),()=>o.unobserve(n)}}),[e,t]),n}(i,24),{onFocus:d,onBlur:p,onInput:b}=function(){const e=Object(u.c)(),[t,n]=Object(s.a)();Object(a.useEffect)((()=>{function n(){f(e)}return t&&document.addEventListener("selectionchange",n),()=>document.removeEventListener("selectionchange",n)}),[t,e]);const r=Object(a.useCallback)((()=>{f(e)}),[e]);return m(m({},n),{},{onInput:r})}();return c.a.createElement("div",{"data-testid":"WysiwygComposerEditor",className:"mx_WysiwygComposer_Editor","data-is-expanded":l},n,c.a.createElement("div",{className:"mx_WysiwygComposer_Editor_container"},c.a.createElement("div",{className:o()("mx_WysiwygComposer_Editor_content",{mx_WysiwygComposer_Editor_content_placeholder:Boolean(t)}),style:{"--placeholder":`"${t}"`},ref:i,contentEditable:!e,role:"textbox","aria-multiline":"true","aria-autocomplete":"list","aria-haspopup":"listbox",dir:"auto","aria-disabled":e,onFocus:d,onBlur:p,onInput:b})),r)})))},1492:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r),a=n(3),c=n(27),i=n(637),l=n(22),s=n(198);function u(e,t){var n;const r=e.completionId,o=e.completion;let a;return a=r?t.getRoom(r):o.startsWith("#")?t.getRooms().find((e=>e.getCanonicalAlias()===o||e.getAltAliases().includes(o))):t.getRoom(o),null!==(n=a)&&void 0!==n?n:null}function d({url:e,initialLetter:t,id:n=""}){const r=[`--avatar-background: url(${e})`,`--avatar-letter: '${t}'`],o=s.e(n);return o&&r.push(o),r.join("; ")}function m(e,t,n){const r="​",o=new Map;if("user"===e.type){const t=n.getMember(e.completionId||"");if(!t)return o;const c=t.name||t.userId,i=s.d(t.userId),l=s.a(t,16,16,"crop");let u=r;var a;if(l===i)u=null!==(a=s.f(c))&&void 0!==a?a:r;o.set("data-mention-type",e.type),o.set("style",d({url:l,initialLetter:u,id:t.userId}))}else if("room"===e.type){var c;const n=u(e,t),a=e.completion;let m=r,f=s.b(null!=n?n:null,16,16,"crop");var i,l;if(!f)m=null!==(i=s.f((null==n?void 0:n.name)||a))&&void 0!==i?i:r,f=s.d(null!==(l=null==n?void 0:n.roomId)&&void 0!==l?l:a);o.set("data-mention-type",e.type),o.set("style",d({url:f,initialLetter:m,id:null!==(c=null==n?void 0:n.roomId)&&void 0!==c?c:a}))}else if("at-room"===e.type){let t=r,a=s.b(n,16,16,"crop");var m;if(!a)t=null!==(m=s.f(n.name))&&void 0!==m?m:r,a=s.d(n.roomId);o.set("data-mention-type",e.type),o.set("style",d({url:a,initialLetter:t,id:n.roomId}))}return o}const f=Object(r.forwardRef)((({suggestion:e,handleMention:t,handleCommand:n,handleAtRoomMention:r},s)=>{const{room:d}=Object(c.c)(),f=Object(l.b)();if(!d)return null;const p=function(e){return e&&e.keyChar?`${e.keyChar}${e.text}`:""}(e);return a.a.log(`## 26037 ## Rendering Autocomplete for WysiwygAutocomplete with query: "${p}"`),o.a.createElement("div",{className:"mx_WysiwygComposer_AutoCompleteWrapper","data-testid":"autocomplete-wrapper"},o.a.createElement(i.a,{ref:s,query:p,onConfirm:function(e){if(void 0!==f&&void 0!==d)switch(e.type){case"command":return void n(e.completion.trim());case"at-room":return void r(m(e,f,d));case"room":case"user":return void("string"==typeof e.href&&t(e.href,function(e,t){return"user"===e.type||"at-room"===e.type?e.completion:"room"===e.type?(null===(n=u(e,t))||void 0===n?void 0:n.name)||e.completion:"";var n}(e,f),m(e,f,d)));default:return}},selection:{start:0,end:0},room:d}))}));f.displayName="WysiwygAutocomplete"}}]);
//# sourceMappingURL=8.js.map