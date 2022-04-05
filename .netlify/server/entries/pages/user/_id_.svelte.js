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
  default: () => U5Bidu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d88a766f = require("../../../chunks/index-d88a766f.js");
async function load({ params }) {
  const id = params.id;
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const user = await res.json();
  return { props: { user } };
}
const U5Bidu5D = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<center class="${"mt-9 pt-9"}"><div class="${"my-10 py-5"}"><img${(0, import_index_d88a766f.b)("src", user.data.avatar, 0)} alt="${"Foto Usuario"}" class="${"rounded-full border-gray-100 shadow-sm"}">
        <h1 class="${"text-4xl my-3 uppercase bold"}">${(0, import_index_d88a766f.e)(user.data.first_name)} ${(0, import_index_d88a766f.e)(user.data.last_name)}</h1>
        <h1 class="${"text-1xl my-3 uppercase "}">${(0, import_index_d88a766f.e)(user.data.email)}</h1>
        <p>${(0, import_index_d88a766f.e)(user.support.text)}</p></div></center> 

`;
});
