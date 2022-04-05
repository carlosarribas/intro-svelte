const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","logo.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-2d9829ae.js","js":["start-2d9829ae.js","chunks/vendor-970e57e8.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "acercade",
				pattern: /^\/acercade\/?$/,
				names: [],
				types: [],
				path: "/acercade",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "cancion",
				pattern: /^\/cancion\/?$/,
				names: [],
				types: [],
				path: "/cancion",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "letra/[artista]-[cancion]",
				pattern: /^\/letra\/([^/]+?)-([^/]+?)\/?$/,
				names: ["artista","cancion"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "user/[id]",
				pattern: /^\/user\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
