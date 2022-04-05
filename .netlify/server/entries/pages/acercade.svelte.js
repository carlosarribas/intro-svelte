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
  default: () => Acercade
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d88a766f = require("../../chunks/index-d88a766f.js");
const Acercade = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Nosotros</title>`, ""}`, ""}

<h1 class="${"my-9 py-9 text-5xl"}">Esta es la p\xE1gina de acerca de</h1>`;
});
