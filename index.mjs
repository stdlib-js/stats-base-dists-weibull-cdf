// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,i,r){return s(t)||s(i)||s(r)||i<=0||r<=0?NaN:t<0?0:-e(-n(t/r,i))}function m(t,r){return s(t)||s(r)||t<=0||r<=0?i(NaN):function(i){if(s(i))return NaN;if(i<0)return 0;return-e(-n(i/r,t))}}t(r,"factory",m);export{r as default,m as factory};
//# sourceMappingURL=index.mjs.map
