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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d88a766f = require("../../chunks/index-d88a766f.js");
const subscriber_queue = [];
function writable(value, start = import_index_d88a766f.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_d88a766f.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_d88a766f.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_d88a766f.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const users = writable([]);
const fetchUsers = async () => {
  const url = await fetch("https://reqres.in/api/users");
  const data = await url.json();
  const loadUsers = data.data.map((data2, index) => {
    return {
      name: data2.first_name,
      id: data2.id,
      avatar: data2.avatar,
      apellidos: data2.last_name,
      email: data2.email
    };
  });
  users.set(loadUsers);
};
fetchUsers();
const card = "p-6 bg-gray-300 text-blue-900 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center";
const circulo = "rounded-full border-gray-100 shadow-sm";
const UserCard = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<a${(0, import_index_d88a766f.b)("href", `/user/${user.id}`, 0)}${(0, import_index_d88a766f.b)("class", card, 0)}><img${(0, import_index_d88a766f.b)("src", user.avatar, 0)} alt="${"imagen"}"${(0, import_index_d88a766f.b)("class", circulo, 0)}>
    <h2>${(0, import_index_d88a766f.e)(user.name)} ${(0, import_index_d88a766f.e)(user.apellidos)}</h2>    
    <h4 class="${"text-black text-bolder"}">${(0, import_index_d88a766f.e)(user.email)}</h4></a>`;
});
const Routes = (0, import_index_d88a766f.c)(($$result, $$props, $$bindings, slots) => {
  let $users, $$unsubscribe_users;
  $$unsubscribe_users = (0, import_index_d88a766f.d)(users, (value) => $users = value);
  let buscador = "";
  let filtro = [];
  {
    {
      {
        filtro = [...$users];
      }
    }
  }
  $$unsubscribe_users();
  return `${$$result.head += `${$$result.title = `<title>Introducci\xF3n a SvelteKit</title>`, ""}`, ""}


<center class="${"mt-9"}"><img src="${"/logo.png"}" alt="${"Logotipo"}" width="${"250"}">
    <h1 class="${"bold text-5xl"}">USERS API</h1></center>

<div class="${"grid grid-cols-1 w-full justify-items-center bg-gray-300 mt-4 py-2"}"><input type="${"text"}" placeholder="${"Buscar"}" class="${"rounded-md text-lg p-4 border-2 w-1/2 py-2"}"${(0, import_index_d88a766f.b)("value", buscador, 0)}></div>


<div class="${"py-5 grid gap-5 md:grid-cols-3"}">${(0, import_index_d88a766f.f)(filtro, (item) => {
    return `${(0, import_index_d88a766f.v)(UserCard, "UserCard").$$render($$result, { user: item }, {}, {})}`;
  })}</div>`;
});
