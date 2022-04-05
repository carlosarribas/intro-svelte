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
  default: () => Cancion
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d88a766f = require("../../chunks/index-d88a766f.js");
const Cancion = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  let artista = "";
  let cancion = "";
  return `<h1 class="${"mt-9 py-5 text-5xl"}">Buscar letra de canci\xF3n</h1>


    <input type="${"text"}" placeholder="${"Artista"}" class="${"rounded-md text-lg p-4 border-2 w-full py-2"}"${(0, import_index_d88a766f.b)("value", artista, 0)}>    
    <div class="${"mt-4"}"></div>
    <input type="${"text"}" placeholder="${"Canci\xF3n"}" class="${"rounded-md text-lg p-4 border-2 w-full py-2"}"${(0, import_index_d88a766f.b)("value", cancion, 0)}>
    <div class="${"mt-4"}"></div>
    <a${(0, import_index_d88a766f.b)("href", `/letra/${artista}-${cancion}`, 0)} class="${"bg-blue-500 text-white bold py-2 px-4 rounded text-l"}">Buscar</a>`;
});
