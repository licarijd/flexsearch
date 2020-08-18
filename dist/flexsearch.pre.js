/*
 FlexSearch v0.6.30
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';
(function(w, N, Q) {
  let K;
  (K = Q.define) && K.amd ? K([], function() {
    return N;
  }) : (K = Q.modules) ? K[w.toLowerCase()] = N : "object" === typeof exports ? module.exports = N : Q[w] = N;
})("FlexSearch", function() {
  function w(a, b) {
    const c = b ? b.id : a && a.id;
    this.id = c || 0 === c ? c : ka++;
    this.init(a, b);
    da(this, "index", function() {
      return this.a ? Object.keys(this.a.index[this.a.keys[0]].f) : Object.keys(this.f);
    });
    da(this, "length", function() {
      return this.index.length;
    });
  }
  function N(a) {
    const b = B();
    for (const c in a) {
      if (a.hasOwnProperty(c)) {
        const d = a[c];
        F(d) ? b[c] = d.slice(0) : G(d) ? b[c] = N(d) : b[c] = d;
      }
    }
    return b;
  }
  function Q(a, b) {
    const c = a.length, d = O(b), e = [];
    for (let g = 0, f = 0; g < c; g++) {
      const h = a[g];
      if (d && b(h) || !d && !b[h]) {
        e[f++] = h;
      }
    }
    return e;
  }
  function K(a, b, c, d, e, g, f, h, l, k) {
    c = ea(c, f ? 0 : e, h, g, b, l, k);
    let p;
    h && (h = c.page, p = c.next, c = c.result);
    if (f) {
      b = this.where(f, null, e, c);
    } else {
      b = c;
      c = this.i;
      e = b.length;
      g = Array(e);
      for (f = 0; f < e; f++) {
        g[f] = c[b[f]];
      }
      b = g;
    }
    c = b;
    d && (O(d) || (L = d.split(":"), 1 < L.length ? d = la : (L = L[0], d = ma)), c.sort(d));
    c = R(h, p, c);
    this.cache && this.j.set(a, c);
    return c;
  }
  function da(a, b, c) {
    Object.defineProperty(a, b, {get:c});
  }
  function r(a) {
    return new RegExp(a, "g");
  }
  function P(a, b) {
    for (let c = 0; c < b.length; c += 2) {
      a = a.replace(b[c], b[c + 1]);
    }
    return a;
  }
  function T(a, b, c, d, e, g, f, h) {
    if (b[c]) {
      return b[c];
    }
    e = e ? (h - (f || h / 1.5)) * g + (f || h / 1.5) * e : g;
    b[c] = e;
    e >= f && (a = a[h - (e + 0.5 >> 0)], a = a[c] || (a[c] = []), a[a.length] = d);
    return e;
  }
  function Y(a, b) {
    if (a) {
      const c = Object.keys(a);
      for (let d = 0, e = c.length; d < e; d++) {
        const g = c[d], f = a[g];
        if (f) {
          for (let h = 0, l = f.length; h < l; h++) {
            if (f[h] === b) {
              1 === l ? delete a[g] : f.splice(h, 1);
              break;
            } else {
              G(f[h]) && Y(f[h], b);
            }
          }
        }
      }
    }
  }
  function Z(a) {
    let b = "", c = "";
    var d = "";
    for (let e = 0; e < a.length; e++) {
      const g = a[e];
      if (g !== c) {
        if (e && "h" === g) {
          if (d = "a" === d || "e" === d || "i" === d || "o" === d || "u" === d || "y" === d, ("a" === c || "e" === c || "i" === c || "o" === c || "u" === c || "y" === c) && d || " " === c) {
            b += g;
          }
        } else {
          b += g;
        }
      }
      d = e === a.length - 1 ? "" : a[e + 1];
      c = g;
    }
    return b;
  }
  function na(a, b) {
    a = a.length - b.length;
    return 0 > a ? 1 : a ? -1 : 0;
  }
  function ma(a, b) {
    a = a[L];
    b = b[L];
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function la(a, b) {
    const c = L.length;
    for (let d = 0; d < c; d++) {
      a = a[L[d]], b = b[L[d]];
    }
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function R(a, b, c) {
    return a ? {page:a, next:b ? "" + b : null, result:c} : c;
  }
  function ea(a, b, c, d, e, g, f) {
    let h, l = [];
    if (!0 === c) {
      c = "0";
      var k = "";
    } else {
      k = c && c.split(":");
    }
    const p = a.length;
    if (1 < p) {
      const y = B(), t = [];
      let v, x;
      var n = 0, m;
      let H;
      var u = !0;
      let D, E = 0, M, aa, U, ba;
      k && (2 === k.length ? (U = k, k = !1) : k = ba = parseInt(k[0], 10));
      if (f) {
        for (v = B(); n < p; n++) {
          if ("not" === e[n]) {
            for (x = a[n], H = x.length, m = 0; m < H; m++) {
              v["@" + x[m]] = 1;
            }
          } else {
            aa = n + 1;
          }
        }
        if (C(aa)) {
          return R(c, h, l);
        }
        n = 0;
      } else {
        M = I(e) && e;
      }
      let V, ca;
      for (; n < p; n++) {
        const oa = n === (aa || p) - 1;
        if (!M || !n) {
          if ((m = M || e && e[n]) && "and" !== m) {
            if ("or" === m) {
              ca = !0, V = !1;
            } else {
              continue;
            }
          } else {
            V = g = !0, ca = !1;
          }
        }
        x = a[n];
        if (H = x.length) {
          if (u) {
            if (D) {
              var q = D.length;
              for (m = 0; m < q; m++) {
                u = D[m];
                var A = "@" + u;
                f && v[A] || (y[A] = 1, g || (l[E++] = u));
              }
              D = null;
              u = !1;
            } else {
              D = x;
              continue;
            }
          }
          A = !1;
          for (m = 0; m < H; m++) {
            q = x[m];
            var z = "@" + q;
            const W = g ? y[z] || 0 : n;
            if (!(!W && !d || f && v[z] || !g && y[z])) {
              if (W === n) {
                if (oa || ca) {
                  if (!ba || --ba < E) {
                    if (l[E++] = q, b && E === b) {
                      return R(c, E + (k || 0), l);
                    }
                  }
                } else {
                  y[z] = n + 1;
                }
                A = !0;
              } else {
                d && (z = t[W] || (t[W] = []), z[z.length] = q);
              }
            }
          }
          if (V && !A && !d) {
            break;
          }
        } else {
          if (V && !d) {
            return R(c, h, x);
          }
        }
      }
      if (D) {
        if (n = D.length, f) {
          for (m = k ? parseInt(k, 10) : 0; m < n; m++) {
            a = D[m], v["@" + a] || (l[E++] = a);
          }
        } else {
          l = D;
        }
      }
      if (d) {
        for (E = l.length, U ? (n = parseInt(U[0], 10) + 1, m = parseInt(U[1], 10) + 1) : (n = t.length, m = 0); n--;) {
          if (q = t[n]) {
            for (H = q.length; m < H; m++) {
              if (d = q[m], !f || !v["@" + d]) {
                if (l[E++] = d, b && E === b) {
                  return R(c, n + ":" + m, l);
                }
              }
            }
            m = 0;
          }
        }
      }
    } else {
      !p || e && "not" === e[0] || (l = a[0], k && (k = parseInt(k[0], 10)));
    }
    b && (f = l.length, k && k > f && (k = 0), k = k || 0, h = k + b, h < f ? l = l.slice(k, h) : (h = 0, k && (l = l.slice(k))));
    return R(c, h, l);
  }
  function I(a) {
    return "string" === typeof a;
  }
  function F(a) {
    return a.constructor === Array;
  }
  function O(a) {
    return "function" === typeof a;
  }
  function G(a) {
    return "object" === typeof a;
  }
  function C(a) {
    return "undefined" === typeof a;
  }
  function fa(a) {
    const b = Array(a);
    for (let c = 0; c < a; c++) {
      b[c] = B();
    }
    return b;
  }
  function B() {
    return Object.create(null);
  }
  const J = {encode:"icase", c:"forward", split:/\W+/, cache:!1, async:!1, C:!1, v:!1, a:!1, b:9, threshold:0, depth:0}, ha = {memory:{encode:"extra", c:"strict", threshold:0, b:1}, speed:{encode:"icase", c:"strict", threshold:1, b:3, depth:2}, match:{encode:"extra", c:"full", threshold:1, b:3}, score:{encode:"extra", c:"strict", threshold:1, b:9, depth:4}, balance:{encode:"balance", c:"strict", threshold:0, b:3, depth:3}, fast:{encode:"icase", c:"strict", threshold:8, b:9, depth:1}}, X = [];
  let ka = 0;
  const ia = {}, ja = {};
  w.create = function(a, b) {
    return new w(a, b);
  };
  w.registerMatcher = function(a) {
    for (const b in a) {
      a.hasOwnProperty(b) && X.push(r(b), a[b]);
    }
    return this;
  };
  w.registerEncoder = function(a, b) {
    S[a] = b.bind(S);
    return this;
  };
  w.registerLanguage = function(a, b) {
    ia[a] = b.filter;
    ja[a] = b.stemmer;
    return this;
  };
  w.encode = function(a, b) {
    return S[a](b);
  };
  w.prototype.init = function(a, b) {
    this.m = [];
    if (b) {
      var c = b.preset;
      a = b;
    } else {
      a || (a = J), c = a.preset;
    }
    b = {};
    I(a) ? (b = ha[a], a = {}) : c && (b = ha[c]);
    this.c = a.tokenize || b.c || this.c || J.c;
    this.split = C(c = a.split) ? this.split || J.split : I(c) ? r(c) : c;
    this.v = a.rtl || this.v || J.v;
    this.async = "undefined" === typeof Promise || C(c = a.async) ? this.async || J.async : c;
    this.threshold = C(c = a.threshold) ? b.threshold || this.threshold || J.threshold : c;
    this.b = C(c = a.resolution) ? c = b.b || this.b || J.b : c;
    c <= this.threshold && (this.b = this.threshold + 1);
    this.depth = "strict" !== this.c || C(c = a.depth) ? b.depth || this.depth || J.depth : c;
    this.o = (c = C(c = a.encode) ? b.encode || J.encode : c) && S[c] && S[c].bind(S) || (O(c) ? c : this.o || !1);
    (c = a.matcher) && this.addMatcher(c);
    if (c = (b = a.lang) || a.filter) {
      I(c) && (c = ia[c]);
      if (F(c)) {
        var d = this.o, e = B();
        for (var g = 0; g < c.length; g++) {
          var f = d ? d(c[g]) : c[g];
          e[f] = 1;
        }
        c = e;
      }
      this.filter = c;
    }
    if (c = b || a.stemmer) {
      var h;
      b = I(c) ? ja[c] : c;
      d = this.o;
      e = [];
      for (h in b) {
        b.hasOwnProperty(h) && (g = d ? d(h) : h, e.push(r(g + "($|\\W)"), d ? d(b[h]) : b[h]));
      }
      this.stemmer = h = e;
    }
    this.a = e = (c = a.doc) ? N(c) : this.a || J.a;
    this.h = fa(this.b - (this.threshold || 0));
    this.g = B();
    this.f = B();
    if (e) {
      this.i = B();
      a.doc = null;
      h = e.index = {};
      b = e.keys = [];
      d = e.field;
      g = e.tag;
      f = e.store;
      F(e.id) || (e.id = e.id.split(":"));
      if (f) {
        var l = B();
        if (I(f)) {
          l[f] = 1;
        } else {
          if (F(f)) {
            for (let k = 0; k < f.length; k++) {
              l[f[k]] = 1;
            }
          } else {
            G(f) && (l = f);
          }
        }
        e.store = l;
      }
      if (g) {
        this.w = B();
        f = B();
        if (d) {
          if (I(d)) {
            f[d] = a;
          } else {
            if (F(d)) {
              for (l = 0; l < d.length; l++) {
                f[d[l]] = a;
              }
            } else {
              G(d) && (f = d);
            }
          }
        }
        F(g) || (e.tag = g = [g]);
        for (d = 0; d < g.length; d++) {
          this.w[g[d]] = B();
        }
        this.B = g;
        d = f;
      }
      if (d) {
        let k;
        F(d) || (G(d) ? (k = d, e.field = d = Object.keys(d)) : e.field = d = [d]);
        for (e = 0; e < d.length; e++) {
          g = d[e], F(g) || (k && (a = k[g]), b[e] = g, d[e] = g.split(":")), h[g] = new w(a);
        }
      }
      a.doc = c;
    }
    this.u = !0;
    this.j = (this.cache = c = C(c = a.cache) ? this.cache || J.cache : c) ? new pa(c) : !1;
    return this;
  };
  w.prototype.encode = function(a) {
    a && (X.length && (a = P(a, X)), this.m.length && (a = P(a, this.m)), this.o && (a = this.o(a)), this.stemmer && (a = P(a, this.stemmer)));
    return a;
  };
  w.prototype.addMatcher = function(a) {
    const b = this.m;
    for (const c in a) {
      a.hasOwnProperty(c) && b.push(r(c), a[c]);
    }
    return this;
  };
  w.prototype.add = function(a, b, c, d, e) {
    if (this.a && G(a)) {
      return this.s("add", a, b);
    }
    if (b && I(b) && (a || 0 === a)) {
      var g = "@" + a;
      if (this.f[g] && !d) {
        return this.update(a, b);
      }
      if (!e) {
        if (this.async) {
          let t = this;
          g = new Promise(function(v) {
            setTimeout(function() {
              t.add(a, b, null, d, !0);
              t = null;
              v();
            });
          });
          if (c) {
            g.then(c);
          } else {
            return g;
          }
          return this;
        }
        if (c) {
          return this.add(a, b, null, d, !0), c(), this;
        }
      }
      b = this.encode(b);
      if (!b.length) {
        return this;
      }
      c = this.c;
      e = O(c) ? c(b) : b.split(this.split);
      this.filter && (e = Q(e, this.filter));
      const n = B();
      n._ctx = B();
      const m = e.length, u = this.threshold, q = this.depth, A = this.b, z = this.h, y = this.v;
      for (let t = 0; t < m; t++) {
        var f = e[t];
        if (f) {
          var h = f.length, l = (y ? t + 1 : m - t) / m, k = "";
          switch(c) {
            case "reverse":
            case "both":
              for (var p = h; --p;) {
                k = f[p] + k, T(z, n, k, a, y ? 1 : (h - p) / h, l, u, A - 1);
              }
              k = "";
            case "forward":
              for (p = 0; p < h; p++) {
                k += f[p], T(z, n, k, a, y ? (p + 1) / h : 1, l, u, A - 1);
              }
              break;
            case "full":
              for (p = 0; p < h; p++) {
                const v = (y ? p + 1 : h - p) / h;
                for (let x = h; x > p; x--) {
                  k = f.substring(p, x), T(z, n, k, a, v, l, u, A - 1);
                }
              }
              break;
            default:
              if (h = T(z, n, f, a, 1, l, u, A - 1), q && 1 < m && h >= u) {
                for (h = n._ctx[f] || (n._ctx[f] = B()), f = this.g[f] || (this.g[f] = fa(A - (u || 0))), l = t - q, k = t + q + 1, 0 > l && (l = 0), k > m && (k = m); l < k; l++) {
                  l !== t && T(f, h, e[l], a, 0, A - (l < t ? t - l : l - t), u, A - 1);
                }
              }
          }
        }
      }
      this.f[g] = 1;
      this.u = !1;
    }
    return this;
  };
  w.prototype.s = function(a, b, c) {
    if (F(b)) {
      var d = b.length;
      if (d--) {
        for (var e = 0; e < d; e++) {
          this.s(a, b[e]);
        }
        return this.s(a, b[d], c);
      }
    } else {
      var g = this.a.index, f = this.a.keys, h = this.a.tag;
      e = this.a.store;
      var l;
      var k = this.a.id;
      d = b;
      for (var p = 0; p < k.length; p++) {
        d = d[k[p]];
      }
      if ("remove" === a && (delete this.i[d], k = f.length, k--)) {
        for (b = 0; b < k; b++) {
          g[f[b]].remove(d);
        }
        return g[f[k]].remove(d, c);
      }
      if (h) {
        for (l = 0; l < h.length; l++) {
          var n = h[l];
          var m = b;
          k = n.split(":");
          for (p = 0; p < k.length; p++) {
            m = m[k[p]];
          }
          m = "@" + m;
        }
        l = this.w[n];
        l = l[m] || (l[m] = []);
      }
      k = this.a.field;
      for (let u = 0, q = k.length; u < q; u++) {
        n = k[u];
        h = b;
        for (m = 0; m < n.length; m++) {
          h = h[n[m]];
        }
        n = g[f[u]];
        m = "add" === a ? n.add : n.update;
        u === q - 1 ? m.call(n, d, h, c) : m.call(n, d, h);
      }
      if (e) {
        c = Object.keys(e);
        a = B();
        for (g = 0; g < c.length; g++) {
          if (f = c[g], e[f]) {
            f = f.split(":");
            let u, q;
            for (k = 0; k < f.length; k++) {
              h = f[k], u = (u || b)[h], q = (q || a)[h] = u;
            }
          }
        }
        b = a;
      }
      l && (l[l.length] = b);
      this.i[d] = b;
    }
    return this;
  };
  w.prototype.update = function(a, b, c) {
    if (this.a && G(a)) {
      return this.s("update", a, b);
    }
    this.f["@" + a] && I(b) && (this.remove(a), this.add(a, b, c, !0));
    return this;
  };
  w.prototype.remove = function(a, b, c) {
    if (this.a && G(a)) {
      return this.s("remove", a, b);
    }
    var d = "@" + a;
    if (this.f[d]) {
      if (!c) {
        if (this.async && "function" !== typeof importScripts) {
          let e = this;
          d = new Promise(function(g) {
            setTimeout(function() {
              e.remove(a, null, !0);
              e = null;
              g();
            });
          });
          if (b) {
            d.then(b);
          } else {
            return d;
          }
          return this;
        }
        if (b) {
          return this.remove(a, null, !0), b(), this;
        }
      }
      for (b = 0; b < this.b - (this.threshold || 0); b++) {
        Y(this.h[b], a);
      }
      this.depth && Y(this.g, a);
      delete this.f[d];
      this.u = !1;
    }
    return this;
  };
  let L;
  w.prototype.search = function(a, b, c, d) {
    if (G(b)) {
      if (F(b)) {
        for (var e = 0; e < b.length; e++) {
          b[e].query = a;
        }
      } else {
        b.query = a;
      }
      a = b;
      b = 1000;
    } else {
      b && O(b) ? (c = b, b = 1000) : b || 0 === b || (b = 1000);
    }
    let g = [], f = a;
    let h, l, k;
    if (G(a) && !F(a)) {
      c || (c = a.callback) && (f.callback = null);
      l = a.sort;
      h = a.page;
      b = a.limit;
      var p = a.threshold;
      k = a.suggest;
      a = a.query;
    }
    if (this.a) {
      p = this.a.index;
      const y = f.where;
      var n = f.bool || "or", m = f.field;
      let t = n;
      let v, x;
      if (m) {
        F(m) || (m = [m]);
      } else {
        if (F(f)) {
          var u = f;
          m = [];
          t = [];
          for (var q = 0; q < f.length; q++) {
            d = f[q], e = d.bool || n, m[q] = d.field, t[q] = e, "not" === e ? v = !0 : "and" === e && (x = !0);
          }
        } else {
          m = this.a.keys;
        }
      }
      n = m.length;
      for (q = 0; q < n; q++) {
        for (u && (f = u[q]), h && !I(f) && (f.page = null, f.limit = 0), d = 0; d < m[q].length; d++) {
          e = p[m[q][d]].search(f, 0), g[q] = g[q] ? g[q].concat(e) : e;
        }
      }
      if (c) {
        return c(K.call(this, a, t, g, l, b, k, y, h, x, v));
      }
      if (this.async) {
        const H = this;
        return new Promise(function(D) {
          Promise.all(g).then(function(E) {
            D(K.call(H, a, t, E, l, b, k, y, h, x, v));
          });
        });
      }
      return K.call(this, a, t, g, l, b, k, y, h, x, v);
    }
    p || (p = this.threshold || 0);
    if (!d) {
      if (this.async && "function" !== typeof importScripts) {
        let y = this;
        p = new Promise(function(t) {
          setTimeout(function() {
            t(y.search(f, b, null, !0));
            y = null;
          });
        });
        if (c) {
          p.then(c);
        } else {
          return p;
        }
        return this;
      }
      if (c) {
        return c(this.search(f, b, null, !0)), this;
      }
    }
    if (!a || !I(a)) {
      return g;
    }
    f = a;
    if (this.cache) {
      if (this.u) {
        if (c = this.j.get(a)) {
          return c;
        }
      } else {
        this.j.clear(), this.u = !0;
      }
    }
    f = this.encode(f);
    if (!f.length) {
      return g;
    }
    c = this.c;
    c = O(c) ? c(f) : f.split(this.split);
    this.filter && (c = Q(c, this.filter));
    u = c.length;
    d = !0;
    e = [];
    const A = B();
    let z = 0;
    1 < u && (this.depth && "strict" === this.c ? n = !0 : c.sort(na));
    if (!n || (q = this.g)) {
      const y = this.b;
      for (; z < u; z++) {
        let t = c[z];
        if (t) {
          if (n) {
            if (!m) {
              if (q[t]) {
                m = t, A[t] = 1;
              } else {
                if (!k) {
                  return g;
                }
              }
            }
            if (k && z === u - 1 && !e.length) {
              n = !1, t = m || t, A[t] = 0;
            } else {
              if (!m) {
                continue;
              }
            }
          }
          if (!A[t]) {
            const v = [];
            let x = !1, H = 0;
            const D = n ? q[m] : this.h;
            if (D) {
              let E;
              for (let M = 0; M < y - p; M++) {
                if (E = D[M] && D[M][t]) {
                  v[H++] = E, x = !0;
                }
              }
            }
            if (x) {
              m = t, e[e.length] = 1 < H ? v.concat.apply([], v) : v[0];
            } else {
              if (!k) {
                d = !1;
                break;
              }
            }
            A[t] = 1;
          }
        }
      }
    } else {
      d = !1;
    }
    d && (g = ea(e, b, h, k));
    this.cache && this.j.set(a, g);
    return g;
  };
  w.prototype.find = function(a, b) {
    return this.where(a, b, 1)[0] || null;
  };
  w.prototype.where = function(a, b, c, d) {
    const e = this.i, g = [];
    let f = 0;
    var h;
    let l;
    if (G(a)) {
      c || (c = b);
      var k = Object.keys(a);
      var p = k.length;
      var n = !1;
      if (1 === p && "id" === k[0]) {
        return [e[a.id]];
      }
      if ((h = this.B) && !d) {
        for (var m = 0; m < h.length; m++) {
          var u = h[m], q = a[u];
          if (!C(q)) {
            l = this.w[u]["@" + q];
            if (0 === --p) {
              return l;
            }
            k.splice(k.indexOf(u), 1);
            delete a[u];
            break;
          }
        }
      }
      h = Array(p);
      for (m = 0; m < p; m++) {
        h[m] = k[m].split(":");
      }
    } else {
      if (O(a)) {
        b = d || Object.keys(e);
        k = b.length;
        for (p = 0; p < k && (n = e[b[p]], !a(n) || (g[f++] = n, !c || f !== c)); p++) {
        }
        return g;
      }
      if (C(b)) {
        return [e[a]];
      }
      if ("id" === a) {
        return [e[b]];
      }
      k = [a];
      p = 1;
      h = [a.split(":")];
      n = !0;
    }
    d = l || d || Object.keys(e);
    m = d.length;
    for (u = 0; u < m; u++) {
      q = l ? d[u] : e[d[u]];
      let A = !0;
      for (let z = 0; z < p; z++) {
        n || (b = a[k[z]]);
        const y = h[z], t = y.length;
        let v = q;
        if (1 < t) {
          for (let x = 0; x < t; x++) {
            v = v[y[x]];
          }
        } else {
          v = v[y[0]];
        }
        if (v !== b) {
          A = !1;
          break;
        }
      }
      if (A && (g[f++] = q, c && f === c)) {
        break;
      }
    }
    return g;
  };
  w.prototype.info = function() {
    return {id:this.id, items:this.length, cache:this.cache && this.cache.l ? this.cache.l.length : !1, matcher:X.length + (this.m ? this.m.length : 0), worker:this.C, threshold:this.threshold, depth:this.depth, resolution:this.b, contextual:this.depth && "strict" === this.c};
  };
  w.prototype.clear = function() {
    return this.destroy().init();
  };
  w.prototype.destroy = function() {
    this.cache && (this.j.clear(), this.j = null);
    this.h = this.g = this.f = null;
    if (this.a) {
      const a = this.a.keys;
      for (let b = 0; b < a.length; b++) {
        this.a.index[a[b]].destroy();
      }
      this.a = this.i = null;
    }
    return this;
  };
  w.prototype.export = function(a) {
    const b = !a || C(a.serialize) || a.serialize;
    if (this.a) {
      const d = !a || C(a.doc) || a.doc;
      var c = !a || C(a.index) || a.index;
      a = [];
      let e = 0;
      if (c) {
        for (c = this.a.keys; e < c.length; e++) {
          const g = this.a.index[c[e]];
          a[e] = [g.h, g.g, Object.keys(g.f)];
        }
      }
      d && (a[e] = this.i);
    } else {
      a = [this.h, this.g, Object.keys(this.f)];
    }
    b && (a = JSON.stringify(a));
    return a;
  };
  w.prototype.import = function(a, b) {
    if (!b || C(b.serialize) || b.serialize) {
      a = JSON.parse(a);
    }
    const c = B();
    if (this.a) {
      var d = !b || C(b.doc) || b.doc, e = 0;
      if (!b || C(b.index) || b.index) {
        b = this.a.keys;
        const f = b.length;
        for (var g = a[0][2]; e < g.length; e++) {
          c[g[e]] = 1;
        }
        for (e = 0; e < f; e++) {
          g = this.a.index[b[e]];
          const h = a[e];
          h && (g.h = h[0], g.g = h[1], g.f = c);
        }
      }
      d && (this.i = G(d) ? d : a[e]);
    } else {
      d = a[2];
      for (e = 0; e < d.length; e++) {
        c[d[e]] = 1;
      }
      this.h = a[0];
      this.g = a[1];
      this.f = c;
    }
  };
  const qa = function() {
    const a = r("\\s+"), b = r("[^a-z0-9 ]"), c = [r("[-/]"), " ", b, "", a, " "];
    return function(d) {
      return Z(P(d.toLowerCase(), c));
    };
  }(), S = {icase:function(a) {
    return a.toLowerCase();
  }, simple:function() {
    const a = r("\\s+"), b = r("[^a-z0-9 ]"), c = r("[-/]"), d = r("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"), e = r("[\u00e8\u00e9\u00ea\u00eb]"), g = r("[\u00ec\u00ed\u00ee\u00ef]"), f = r("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"), h = r("[\u00f9\u00fa\u00fb\u00fc\u0171]"), l = r("[\u00fd\u0177\u00ff]"), k = r("\u00f1"), p = r("[\u00e7c]"), n = r("\u00df"), m = r(" & "), u = [d, "a", e, "e", g, "i", f, "o", h, "u", l, "y", k, "n", p, "k", n, "s", m, " and ", c, " ", b, "", a, " "];
    return function(q) {
      q = P(q.toLowerCase(), u);
      return " " === q ? "" : q;
    };
  }(), advanced:function() {
    const a = r("ae"), b = r("ai"), c = r("ay"), d = r("ey"), e = r("oe"), g = r("ue"), f = r("ie"), h = r("sz"), l = r("zs"), k = r("ck"), p = r("cc"), n = r("sh"), m = r("th"), u = r("dt"), q = r("ph"), A = r("pf"), z = r("ou"), y = r("uo"), t = [a, "a", b, "ei", c, "ei", d, "ei", e, "o", g, "u", f, "i", h, "s", l, "s", n, "s", k, "k", p, "k", m, "t", u, "t", q, "f", A, "f", z, "o", y, "u"];
    return function(v, x) {
      if (!v) {
        return v;
      }
      v = this.simple(v);
      2 < v.length && (v = P(v, t));
      x || 1 < v.length && (v = Z(v));
      return v;
    };
  }(), extra:function() {
    const a = r("p"), b = r("z"), c = r("[cgq]"), d = r("n"), e = r("d"), g = r("[vw]"), f = r("[aeiouy]"), h = [a, "b", b, "s", c, "k", d, "m", e, "t", g, "f", f, ""];
    return function(l) {
      if (!l) {
        return l;
      }
      l = this.advanced(l, !0);
      if (1 < l.length) {
        l = l.split(" ");
        for (let k = 0; k < l.length; k++) {
          const p = l[k];
          1 < p.length && (l[k] = p[0] + P(p.substring(1), h));
        }
        l = l.join(" ");
        l = Z(l);
      }
      return l;
    };
  }(), balance:qa}, pa = function() {
    function a(b) {
      this.clear();
      this.A = !0 !== b && b;
    }
    a.prototype.clear = function() {
      this.cache = B();
      this.count = B();
      this.index = B();
      this.l = [];
    };
    a.prototype.set = function(b, c) {
      if (this.A && C(this.cache[b])) {
        let d = this.l.length;
        if (d === this.A) {
          d--;
          const e = this.l[d];
          delete this.cache[e];
          delete this.count[e];
          delete this.index[e];
        }
        this.index[b] = d;
        this.l[d] = b;
        this.count[b] = -1;
        this.cache[b] = c;
        this.get(b);
      } else {
        this.cache[b] = c;
      }
    };
    a.prototype.get = function(b) {
      const c = this.cache[b];
      if (this.A && c) {
        var d = ++this.count[b];
        const g = this.index;
        let f = g[b];
        if (0 < f) {
          const h = this.l;
          for (var e = f; this.count[h[--f]] <= d && -1 !== f;) {
          }
          f++;
          if (f !== e) {
            for (d = e; d > f; d--) {
              e = h[d - 1], h[d] = e, g[e] = d;
            }
            h[f] = b;
            g[b] = f;
          }
        }
      }
      return c;
    };
    return a;
  }();
  return w;
}(!1), this);

