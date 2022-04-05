var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d88a766f = require("../../chunks/index-d88a766f.js");
const Nav = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"fixed w-full text-center bg-red-400 p-5"}"><a class="${"mx-4 text-white"}" href="${"/"}">INICIO</a>
    <a class="${"mx-4 text-white"}" href="${"/acercade"}">NOSOTROS</a>
    <a class="${"mx-4 text-white"}" href="${"/cancion"}">CANCION</a></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@tailwind base;@tailwind components;@tailwind utilities;",
  map: null
};
const _layout = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_d88a766f.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
<div class="${"p-2 max-w-2xl mx-auto"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
