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
  default: () => U5Bartistau5D_u5Bcancionu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d88a766f = require("../../../chunks/index-d88a766f.js");
async function load({ params }) {
  const artista = params.artista;
  const cancion = params.cancion;
  const res = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
  const letra = await res.json();
  return { props: { letra, artista, cancion } };
}
const U5Bartistau5D_u5Bcancionu5D = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  let { letra } = $$props;
  let { artista } = $$props;
  let { cancion } = $$props;
  if ($$props.letra === void 0 && $$bindings.letra && letra !== void 0)
    $$bindings.letra(letra);
  if ($$props.artista === void 0 && $$bindings.artista && artista !== void 0)
    $$bindings.artista(artista);
  if ($$props.cancion === void 0 && $$bindings.cancion && cancion !== void 0)
    $$bindings.cancion(cancion);
  return `<center class="${"mt-12"}"><h1 class="${"mt-12 pt-5 text-5xl uppercase"}">${(0, import_index_d88a766f.e)(artista)}</h1>
    <h3 class="${"bold text-3xl uppercase mt-5"}">${(0, import_index_d88a766f.e)(cancion)}</h3>
    <p class="${"text-justify p-4 mt-5 bg-gray-700 text-white"}">${(0, import_index_d88a766f.e)(letra.lyrics)}</p></center>`;
});
