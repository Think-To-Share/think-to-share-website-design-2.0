!function(t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = t,
    r.c = e,
    r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                r.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "",
    r(r.s = 9)
}([function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(2);
    const i = Object(n.isFirefox)() ? ".3" : "1"
      , o = Object(n.isFirefox)() ? "2.85" : ".5"
      , a = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        touch: Modernizr.touchevents,
        isMobile: Object(n.isMobile)(),
        retina: Object(n.isRetina)(),
        mouseX: 0,
        mouseY: 0,
        scrollBuffer: 0,
        forwards: !0,
        cX: window.innerWidth / 2,
        cY: window.innerHeight / 2,
        progress: {},
        timelines: {},
        activeTimeline: "",
        activeSection: "intro",
        globalSpeed: i,
        sectionsDuration: {
            offset: o,
            intro: 3,
            wall: 4,
            demos: 4,
            awards: 5,
            shop: 6,
            letters: 3,
            portfolio: 6,
            elements: 17.2,
            qode: 5
        },
        customScrollbar: document.getElementById("custom-scroll-page-wrapper")
    }
      , s = ()=>{
        a.customScrollbar.addEventListener("ps-scroll-down", (function() {
            a.forwards = true
        }
        )),
        a.customScrollbar.addEventListener("ps-scroll-up", (function() {
            a.forwards = false
        }
        ))
    }
    ;
    setTimeout(()=>{
        a.customScrollbar.addEventListener("ps-scroll-y", s, {
            passive: !0
        })
    }
    , 100),
    window.addEventListener("resize", ()=>{
        a.isMobile = Object(n.isMobile)(),
        a.windowWidth = window.innerWidth,
        a.windowHeight = window.innerHeight
    }
    ),
    e.default = a
}
, function(t, e, r) {
    "use strict";
    function n(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function i(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    /*!
* GSAP 3.6.0
* https://greensock.com
*
* @license Copyright 2008-2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
    r.d(e, "a", (function() {
        return On
    }
    ));
    var o, a, s, l, c, d, u, h, f, p, m, g, y, v, w, b, _, x, S, T, q, L, A, O, k, C, M, I, E = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, P = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, W = 1e8, R = 2 * Math.PI, Y = R / 4, j = 0, H = Math.sqrt, B = Math.cos, X = Math.sin, D = function(t) {
        return "string" == typeof t
    }, z = function(t) {
        return "function" == typeof t
    }, N = function(t) {
        return "number" == typeof t
    }, F = function(t) {
        return void 0 === t
    }, U = function(t) {
        return "object" == typeof t
    }, V = function(t) {
        return !1 !== t
    }, G = function() {
        return "undefined" != typeof window
    }, K = function(t) {
        return z(t) || D(t)
    }, Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , $ = Array.isArray, Q = /(?:-?\.?\d|\.)+/gi, J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, rt = /[+-]=-?[.\d]+/, nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi, it = /[\d.+\-=]+(?:e[-+]\d*)*/i, ot = {}, at = {}, st = function(t) {
        return (at = Et(t, ot)) && mr
    }, lt = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, ct = function(t, e) {
        return !e && console.warn(t)
    }, dt = function(t, e) {
        return t && (ot[t] = e) && at && (at[t] = e) || ot
    }, ut = function() {
        return 0
    }, ht = {}, ft = [], pt = {}, mt = {}, gt = {}, yt = 30, vt = [], wt = "", bt = function(t) {
        var e, r, n = t[0];
        if (U(n) || z(n) || (t = [t]),
        !(e = (n._gsap || {}).harness)) {
            for (r = vt.length; r-- && !vt[r].targetTest(n); )
                ;
            e = vt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Be(t[r],e))) || t.splice(r, 1);
        return t
    }, _t = function(t) {
        return t._gsap || bt(ae(t))[0]._gsap
    }, xt = function(t, e, r) {
        return (r = t[e]) && z(r) ? t[e]() : F(r) && t.getAttribute && t.getAttribute(e) || r
    }, St = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, Tt = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, qt = function(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; )
            ;
        return n < r
    }, Lt = function(t, e, r) {
        var n, i = N(t[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), a = t[o];
        if (i && (a.duration = t[1]),
        a.parent = r,
        e) {
            for (n = a; r && !("immediateRender"in n); )
                n = r.vars.defaults || {},
                r = V(r.vars.inherit) && r.parent;
            a.immediateRender = V(n.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
        }
        return a
    }, At = function() {
        var t, e, r = ft.length, n = ft.slice(0);
        for (pt = {},
        ft.length = 0,
        t = 0; t < r; t++)
            (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, Ot = function(t, e, r, n) {
        ft.length && At(),
        t.render(e, r, n),
        ft.length && At()
    }, kt = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : D(t) ? t.trim() : t
    }, Ct = function(t) {
        return t
    }, Mt = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, It = function(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }, Et = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, Pt = function t(e, r) {
        for (var n in r)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = U(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
        return e
    }, Wt = function(t, e) {
        var r, n = {};
        for (r in t)
            r in e || (n[r] = t[r]);
        return n
    }, Rt = function(t) {
        var e = t.parent || a
          , r = t.keyframes ? It : Mt;
        if (V(t.inherit))
            for (; e; )
                r(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }, Yt = function(t, e, r, n) {
        void 0 === r && (r = "_first"),
        void 0 === n && (n = "_last");
        var i = e._prev
          , o = e._next;
        i ? i._next = o : t[r] === e && (t[r] = o),
        o ? o._prev = i : t[n] === e && (t[n] = i),
        e._next = e._prev = e.parent = null
    }, jt = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, Ht = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }, Bt = function(t) {
        for (var e = t.parent; e && e.parent; )
            e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
        return t
    }, Xt = function(t) {
        return t._repeat ? Dt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, Dt = function(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, zt = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, Nt = function(t) {
        return t._end = Tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
    }, Ft = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = Tt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        Nt(t),
        r._dirty || Ht(r, t)),
        t
    }, Ut = function(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = zt(t.rawTime(), e),
        (!e._dur || ee(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)),
        Ht(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    r.rawTime() >= 0 && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -1e-8
        }
    }, Vt = function(t, e, r, n) {
        return e.parent && jt(e),
        e._start = Tt(r + e._delay),
        e._end = Tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, r, n, i) {
            void 0 === r && (r = "_first"),
            void 0 === n && (n = "_last");
            var o, a = t[n];
            if (i)
                for (o = e[i]; a && a[i] > o; )
                    a = a._prev;
            a ? (e._next = a._next,
            a._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[n] = e,
            e._prev = a,
            e.parent = e._dp = t
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t._recent = e,
        n || Ut(t, e),
        t
    }, Gt = function(t, e) {
        return (ot.ScrollTrigger || lt("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }, Kt = function(t, e, r, n) {
        return Ve(t, e),
        t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && u !== Ae.frame ? (ft.push(t),
        t._lazy = [e, n],
        1) : void 0 : 1
    }, Zt = function(t, e, r, n) {
        var i = t._repeat
          , o = Tt(e) || 0
          , a = t._tTime / t._tDur;
        return a && !n && (t._time *= o / t._dur),
        t._dur = o,
        t._tDur = i ? i < 0 ? 1e10 : Tt(o * (i + 1) + t._rDelay * i) : o,
        a && !n ? Ft(t, t._tTime = t._tDur * a) : t.parent && Nt(t),
        r || Ht(t.parent, t),
        t
    }, $t = function(t) {
        return t instanceof De ? Ht(t) : Zt(t, t._dur)
    }, Qt = {
        _start: 0,
        endTime: ut
    }, Jt = function t(e, r) {
        var n, i, o = e.labels, a = e._recent || Qt, s = e.duration() >= W ? a.endTime(!1) : e._dur;
        return D(r) && (isNaN(r) || r in o) ? "<" === (n = r.charAt(0)) || ">" === n ? ("<" === n ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) : (n = r.indexOf("=")) < 0 ? (r in o || (o[r] = s),
        o[r]) : (i = +(r.charAt(n - 1) + r.substr(n + 1)),
        n > 1 ? t(e, r.substr(0, n - 1)) + i : s + i) : null == r ? s : +r
    }, te = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, ee = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    }, re = function(t) {
        if ("string" != typeof t)
            return "";
        var e = it.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }, ne = [].slice, ie = function(t, e) {
        return t && U(t) && "length"in t && (!e && !t.length || t.length - 1 in t && U(t[0])) && !t.nodeType && t !== s
    }, oe = function(t, e, r) {
        return void 0 === r && (r = []),
        t.forEach((function(t) {
            var n;
            return D(t) && !e || ie(t, 1) ? (n = r).push.apply(n, ae(t)) : r.push(t)
        }
        )) || r
    }, ae = function(t, e) {
        return !D(t) || e || !l && Oe() ? $(t) ? oe(t, e) : ie(t) ? ne.call(t, 0) : t ? [t] : [] : ne.call(c.querySelectorAll(t), 0)
    }, se = function(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }
        ))
    }, le = function(t) {
        if (z(t))
            return t;
        var e = U(t) ? t : {
            each: t
        }
          , r = We(e.ease)
          , n = e.from || 0
          , i = parseFloat(e.base) || 0
          , o = {}
          , a = n > 0 && n < 1
          , s = isNaN(n) || a
          , l = e.axis
          , c = n
          , d = n;
        return D(n) ? c = d = {
            center: .5,
            edges: .5,
            end: 1
        }[n] || 0 : !a && s && (c = n[0],
        d = n[1]),
        function(t, a, u) {
            var h, f, p, m, g, y, v, w, b, _ = (u || e).length, x = o[_];
            if (!x) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, W])[1])) {
                    for (v = -W; v < (v = u[b++].getBoundingClientRect().left) && b < _; )
                        ;
                    b--
                }
                for (x = o[_] = [],
                h = s ? Math.min(b, _) * c - .5 : n % b,
                f = s ? _ * d / b - .5 : n / b | 0,
                v = 0,
                w = W,
                y = 0; y < _; y++)
                    p = y % b - h,
                    m = f - (y / b | 0),
                    x[y] = g = l ? Math.abs("y" === l ? m : p) : H(p * p + m * m),
                    g > v && (v = g),
                    g < w && (w = g);
                "random" === n && se(x),
                x.max = v - w,
                x.min = w,
                x.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : l ? "y" === l ? _ / b : b : Math.max(b, _ / b)) || 0) * ("edges" === n ? -1 : 1),
                x.b = _ < 0 ? i - _ : i,
                x.u = re(e.amount || e.each) || 0,
                r = r && _ < 0 ? Ee(r) : r
            }
            return _ = (x[t] - x.min) / x.max || 0,
            Tt(x.b + (r ? r(_) : _) * x.v) + x.u
        }
    }, ce = function(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function(r) {
            var n = Math.round(parseFloat(r) / t) * t * e;
            return (n - n % 1) / e + (N(r) ? 0 : re(r))
        }
    }, de = function(t, e) {
        var r, n, i = $(t);
        return !i && U(t) && (r = i = t.radius || W,
        t.values ? (t = ae(t.values),
        (n = !N(t[0])) && (r *= r)) : t = ce(t.increment)),
        te(e, i ? z(t) ? function(e) {
            return n = t(e),
            Math.abs(n - e) <= r ? n : e
        }
        : function(e) {
            for (var i, o, a = parseFloat(n ? e.x : e), s = parseFloat(n ? e.y : 0), l = W, c = 0, d = t.length; d--; )
                (i = n ? (i = t[d].x - a) * i + (o = t[d].y - s) * o : Math.abs(t[d] - a)) < l && (l = i,
                c = d);
            return c = !r || l <= r ? t[c] : e,
            n || c === e || N(e) ? c : c + re(e)
        }
        : ce(t))
    }, ue = function(t, e, r, n) {
        return te($(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
        }
        ))
    }, he = function(t, e, r) {
        return te(r, (function(r) {
            return t[~~e(r)]
        }
        ))
    }, fe = function(t) {
        for (var e, r, n, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
            n = t.indexOf(")", e),
            i = "[" === t.charAt(e + 7),
            r = t.substr(e + 7, n - e - 7).match(i ? nt : Q),
            a += t.substr(o, e - o) + ue(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5),
            o = n + 1;
        return a + t.substr(o, t.length - o)
    }, pe = function(t, e, r, n, i) {
        var o = e - t
          , a = n - r;
        return te(i, (function(e) {
            return r + ((e - t) / o * a || 0)
        }
        ))
    }, me = function(t, e, r) {
        var n, i, o, a = t.labels, s = W;
        for (n in a)
            (i = a[n] - e) < 0 == !!r && i && s > (i = Math.abs(i)) && (o = n,
            s = i);
        return o
    }, ge = function(t, e, r) {
        var n, i, o = t.vars, a = o[e];
        if (a)
            return n = o[e + "Params"],
            i = o.callbackScope || t,
            r && ft.length && At(),
            n ? a.apply(i, n) : a.call(i)
    }, ye = function(t) {
        return jt(t),
        t.progress() < 1 && ge(t, "onInterrupt"),
        t
    }, ve = function(t) {
        var e = (t = !t.name && t.default || t).name
          , r = z(t)
          , n = e && !r && t.init ? function() {
            this._props = []
        }
        : t
          , i = {
            init: ut,
            render: ar,
            add: Fe,
            kill: lr,
            modifier: sr,
            rawVars: 0
        }
          , o = {
            targetTest: 0,
            get: 0,
            getSetter: rr,
            aliases: {},
            register: 0
        };
        if (Oe(),
        t !== n) {
            if (mt[e])
                return;
            Mt(n, Mt(Wt(t, i), o)),
            Et(n.prototype, Et(i, Wt(t, o))),
            mt[n.prop = e] = n,
            t.targetTest && (vt.push(n),
            ht[e] = 1),
            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        dt(e, n),
        t.register && t.register(mr, n, ur)
    }, we = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, be = function(t, e, r) {
        return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) + .5 | 0
    }, _e = function(t, e, r) {
        var n, i, o, a, s, l, c, d, u, h, f = t ? N(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : we.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            we[t])
                f = we[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (n = t.charAt(1),
                i = t.charAt(2),
                o = t.charAt(3),
                t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
            } else if ("hsl" === t.substr(0, 3))
                if (f = h = t.match(Q),
                e) {
                    if (~t.indexOf("="))
                        return f = t.match(J),
                        r && f.length < 4 && (f[3] = 1),
                        f
                } else
                    a = +f[0] % 360 / 360,
                    s = +f[1] / 100,
                    n = 2 * (l = +f[2] / 100) - (i = l <= .5 ? l * (s + 1) : l + s - l * s),
                    f.length > 3 && (f[3] *= 1),
                    f[0] = be(a + 1 / 3, n, i),
                    f[1] = be(a, n, i),
                    f[2] = be(a - 1 / 3, n, i);
            else
                f = t.match(Q) || we.transparent;
            f = f.map(Number)
        }
        return e && !h && (n = f[0] / 255,
        i = f[1] / 255,
        o = f[2] / 255,
        l = ((c = Math.max(n, i, o)) + (d = Math.min(n, i, o))) / 2,
        c === d ? a = s = 0 : (u = c - d,
        s = l > .5 ? u / (2 - c - d) : u / (c + d),
        a = c === n ? (i - o) / u + (i < o ? 6 : 0) : c === i ? (o - n) / u + 2 : (n - i) / u + 4,
        a *= 60),
        f[0] = ~~(a + .5),
        f[1] = ~~(100 * s + .5),
        f[2] = ~~(100 * l + .5)),
        r && f.length < 4 && (f[3] = 1),
        f
    }, xe = function(t) {
        var e = []
          , r = []
          , n = -1;
        return t.split(Te).forEach((function(t) {
            var i = t.match(tt) || [];
            e.push.apply(e, i),
            r.push(n += i.length + 1)
        }
        )),
        e.c = r,
        e
    }, Se = function(t, e, r) {
        var n, i, o, a, s = "", l = (t + s).match(Te), c = e ? "hsla(" : "rgba(", d = 0;
        if (!l)
            return t;
        if (l = l.map((function(t) {
            return (t = _e(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }
        )),
        r && (o = xe(t),
        (n = r.c).join(s) !== o.c.join(s)))
            for (a = (i = t.replace(Te, "1").split(tt)).length - 1; d < a; d++)
                s += i[d] + (~n.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (o.length ? o : l.length ? l : r).shift());
        if (!i)
            for (a = (i = t.split(Te)).length - 1; d < a; d++)
                s += i[d] + l[d];
        return s + i[a]
    }, Te = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in we)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), qe = /hsl[a]?\(/, Le = function(t) {
        var e, r = t.join(" ");
        if (Te.lastIndex = 0,
        Te.test(r))
            return e = qe.test(r),
            t[1] = Se(t[1], e),
            t[0] = Se(t[0], e, xe(t[1])),
            !0
    }, Ae = (b = Date.now,
    _ = 500,
    x = 33,
    S = b(),
    T = S,
    L = q = 1e3 / 240,
    O = function t(e) {
        var r, n, i, o, a = b() - T, s = !0 === e;
        if (a > _ && (S += a - x),
        ((r = (i = (T += a) - S) - L) > 0 || s) && (o = ++y.frame,
        v = i - 1e3 * y.time,
        y.time = i /= 1e3,
        L += r + (r >= q ? 4 : q - r),
        n = 1),
        s || (p = m(t)),
        n)
            for (w = 0; w < A.length; w++)
                A[w](i, v, o, e)
    }
    ,
    y = {
        time: 0,
        frame: 0,
        tick: function() {
            O(!0)
        },
        deltaRatio: function(t) {
            return v / (1e3 / (t || 60))
        },
        wake: function() {
            d && (!l && G() && (s = l = window,
            c = s.document || {},
            ot.gsap = mr,
            (s.gsapVersions || (s.gsapVersions = [])).push(mr.version),
            st(at || s.GreenSockGlobals || !s.gsap && s || {}),
            g = s.requestAnimationFrame),
            p && y.sleep(),
            m = g || function(t) {
                return setTimeout(t, L - 1e3 * y.time + 1 | 0)
            }
            ,
            f = 1,
            O(2))
        },
        sleep: function() {
            (g ? s.cancelAnimationFrame : clearTimeout)(p),
            f = 0,
            m = ut
        },
        lagSmoothing: function(t, e) {
            _ = t || 1 / 1e-8,
            x = Math.min(e, _, 0)
        },
        fps: function(t) {
            q = 1e3 / (t || 240),
            L = 1e3 * y.time + q
        },
        add: function(t) {
            A.indexOf(t) < 0 && A.push(t),
            Oe()
        },
        remove: function(t) {
            var e;
            ~(e = A.indexOf(t)) && A.splice(e, 1) && w >= e && w--
        },
        _listeners: A = []
    }), Oe = function() {
        return !f && Ae.wake()
    }, ke = {}, Ce = /^[\d.\-M][\d.\-,\s]/, Me = /["']/g, Ie = function(t) {
        for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++)
            r = o[s],
            e = s !== l - 1 ? r.lastIndexOf(",") : r.length,
            n = r.substr(0, e),
            i[a] = isNaN(n) ? n.replace(Me, "").trim() : +n,
            a = r.substr(e + 1).trim();
        return i
    }, Ee = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, Pe = function t(e, r) {
        for (var n, i = e._first; i; )
            i instanceof De ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease,
            i._ease = i._yEase,
            i._yEase = n,
            i._yoyo = r)),
            i = i._next
    }, We = function(t, e) {
        return t && (z(t) ? t : ke[t] || function(t) {
            var e, r, n, i, o = (t + "").split("("), a = ke[o[0]];
            return a && o.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ie(o[1])] : (e = t,
            r = e.indexOf("(") + 1,
            n = e.indexOf(")"),
            i = e.indexOf("(", r),
            e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(kt)) : ke._CE && Ce.test(t) ? ke._CE("", t) : a
        }(t)) || e
    }, Re = function(t, e, r, n) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        }
        );
        var i, o = {
            easeIn: e,
            easeOut: r,
            easeInOut: n
        };
        return St(t, (function(t) {
            for (var e in ke[t] = ot[t] = o,
            ke[i = t.toLowerCase()] = r,
            o)
                ke[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = o[e]
        }
        )),
        o
    }, Ye = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }, je = function t(e, r, n) {
        var i = r >= 1 ? r : 1
          , o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1)
          , a = o / R * (Math.asin(1 / i) || 0)
          , s = function(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * X((t - a) * o) + 1
        }
          , l = "out" === e ? s : "in" === e ? function(t) {
            return 1 - s(1 - t)
        }
        : Ye(s);
        return o = R / o,
        l.config = function(r, n) {
            return t(e, r, n)
        }
        ,
        l
    }, He = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var n = function(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
          , i = "out" === e ? n : "in" === e ? function(t) {
            return 1 - n(1 - t)
        }
        : Ye(n);
        return i.config = function(r) {
            return t(e, r)
        }
        ,
        i
    };
    St("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Re(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , (function(t) {
            return 1 - Math.pow(1 - t, r)
        }
        ), (function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }
        ))
    }
    )),
    ke.Linear.easeNone = ke.none = ke.Linear.easeIn,
    Re("Elastic", je("in"), je("out"), je()),
    k = 7.5625,
    M = 1 / (C = 2.75),
    Re("Bounce", (function(t) {
        return 1 - I(1 - t)
    }
    ), I = function(t) {
        return t < M ? k * t * t : t < .7272727272727273 ? k * Math.pow(t - 1.5 / C, 2) + .75 : t < .9090909090909092 ? k * (t -= 2.25 / C) * t + .9375 : k * Math.pow(t - 2.625 / C, 2) + .984375
    }
    ),
    Re("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }
    )),
    Re("Circ", (function(t) {
        return -(H(1 - t * t) - 1)
    }
    )),
    Re("Sine", (function(t) {
        return 1 === t ? 1 : 1 - B(t * Y)
    }
    )),
    Re("Back", He("in"), He("out"), He()),
    ke.SteppedEase = ke.steps = ot.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , n = t + (e ? 0 : 1)
              , i = e ? 1 : 0;
            return function(t) {
                return ((n * ee(0, 1 - 1e-8, t) | 0) + i) * r
            }
        }
    },
    P.ease = ke["quad.out"],
    St("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return wt += t + "," + t + "Params,"
    }
    ));
    var Be = function(t, e) {
        this.id = j++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : xt,
        this.set = e ? e.getSetter : rr
    }
      , Xe = function() {
        function t(t, e) {
            var r = t.parent || a;
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Zt(this, +t.duration, 1, 1),
            this.data = t.data,
            f || Ae.wake(),
            r && Vt(r, this, e || 0 === e ? e : r._time, 1),
            t.reversed && this.reverse(),
            t.paused && this.paused(!0)
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            Zt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (Oe(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ft(this, t),
                !r._dp || r.parent || Ut(r, this); r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Vt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            Ot(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Xt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Xt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Dt(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(t) {
            if (!arguments.length)
                return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? zt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
            Bt(this.totalTime(ee(-this._delay, this._tDur, e), !0))
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (Oe(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && Vt(e, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (V(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zt(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                r = e._start + r / (e._ts || 1),
                e = e._dp;
            return r
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            $t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            return arguments.length ? (this._rDelay = t,
            $t(this)) : this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(Jt(this, t), V(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, V(e))
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -1e-8,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8))
        }
        ,
        e.eventCallback = function(t, e, r) {
            var n = this.vars;
            return arguments.length > 1 ? (e ? (n[t] = e,
            r && (n[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete n[t],
            this) : n[t]
        }
        ,
        e.then = function(t) {
            var e = this;
            return new Promise((function(r) {
                var n = z(t) ? t : Ct
                  , i = function() {
                    var t = e.then;
                    e.then = null,
                    z(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    r(n),
                    e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
            }
            ))
        }
        ,
        e.kill = function() {
            ye(this)
        }
        ,
        t
    }();
    Mt(Xe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var De = function(t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}),
            (i = t.call(this, e, r) || this).labels = {},
            i.smoothChildTiming = !!e.smoothChildTiming,
            i.autoRemoveChildren = !!e.autoRemoveChildren,
            i._sort = V(e.sortChildren),
            i.parent && Ut(i.parent, n(i)),
            e.scrollTrigger && Gt(n(i), e.scrollTrigger),
            i
        }
        i(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
            return new $e(t,Lt(arguments, 0, this),Jt(this, N(e) ? arguments[3] : r)),
            this
        }
        ,
        r.from = function(t, e, r) {
            return new $e(t,Lt(arguments, 1, this),Jt(this, N(e) ? arguments[3] : r)),
            this
        }
        ,
        r.fromTo = function(t, e, r, n) {
            return new $e(t,Lt(arguments, 2, this),Jt(this, N(e) ? arguments[4] : n)),
            this
        }
        ,
        r.set = function(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            Rt(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new $e(t,e,Jt(this, r),1),
            this
        }
        ,
        r.call = function(t, e, r) {
            return Vt(this, $e.delayedCall(0, t, e), Jt(this, r))
        }
        ,
        r.staggerTo = function(t, e, r, n, i, o, a) {
            return r.duration = e,
            r.stagger = r.stagger || n,
            r.onComplete = o,
            r.onCompleteParams = a,
            r.parent = this,
            new $e(t,r,Jt(this, i)),
            this
        }
        ,
        r.staggerFrom = function(t, e, r, n, i, o, a) {
            return r.runBackwards = 1,
            Rt(r).immediateRender = V(r.immediateRender),
            this.staggerTo(t, e, r, n, i, o, a)
        }
        ,
        r.staggerFromTo = function(t, e, r, n, i, o, a, s) {
            return n.startAt = r,
            Rt(n).immediateRender = V(n.immediateRender),
            this.staggerTo(t, e, n, i, o, a, s)
        }
        ,
        r.render = function(t, e, r) {
            var n, i, o, s, l, c, d, u, h, f, p, m, g = this._time, y = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, w = this !== a && t > y - 1e-8 && t >= 0 ? y : t < 1e-8 ? 0 : t, b = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (w !== this._tTime || r || b) {
                if (g !== this._time && v && (w += this._time - g,
                t += this._time - g),
                n = w,
                h = this._start,
                c = !(u = this._ts),
                b && (v || (g = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat) {
                    if (p = this._yoyo,
                    l = v + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * l + t, e, r);
                    if (n = Tt(w % l),
                    w === y ? (s = this._repeat,
                    n = v) : ((s = ~~(w / l)) && s === w / l && (n = v,
                    s--),
                    n > v && (n = v)),
                    f = Dt(this._tTime, l),
                    !g && this._tTime && f !== s && (f = s),
                    p && 1 & s && (n = v - n,
                    m = 1),
                    s !== f && !this._lock) {
                        var _ = p && 1 & f
                          , x = _ === (p && 1 & s);
                        if (s < f && (_ = !_),
                        g = _ ? 0 : v,
                        this._lock = 1,
                        this.render(g || (m ? 0 : Tt(s * l)), e, !v)._lock = 0,
                        !e && this.parent && ge(this, "onRepeat"),
                        this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                        g !== this._time || c !== !this._ts)
                            return this;
                        if (v = this._dur,
                        y = this._tDur,
                        x && (this._lock = 2,
                        g = _ ? v : -1e-4,
                        this.render(g, !0),
                        this.vars.repeatRefresh && !m && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !c)
                            return this;
                        Pe(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (d = function(t, e, r) {
                    var n;
                    if (r > e)
                        for (n = t._first; n && n._start <= r; ) {
                            if (!n._dur && "isPause" === n.data && n._start > e)
                                return n;
                            n = n._next
                        }
                    else
                        for (n = t._last; n && n._start >= r; ) {
                            if (!n._dur && "isPause" === n.data && n._start < e)
                                return n;
                            n = n._prev
                        }
                }(this, Tt(g), Tt(n))) && (w -= n - (n = d._start)),
                this._tTime = w,
                this._time = n,
                this._act = !u,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                g = 0),
                !g && (n || !v && t >= 0) && !e && ge(this, "onStart"),
                n >= g && t >= 0)
                    for (i = this._first; i; ) {
                        if (o = i._next,
                        (i._act || n >= i._start) && i._ts && d !== i) {
                            if (i.parent !== this)
                                return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r),
                            n !== this._time || !this._ts && !c) {
                                d = 0,
                                o && (w += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = o
                    }
                else {
                    i = this._last;
                    for (var S = t < 0 ? t : n; i; ) {
                        if (o = i._prev,
                        (i._act || S <= i._end) && i._ts && d !== i) {
                            if (i.parent !== this)
                                return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (S - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (S - i._start) * i._ts, e, r),
                            n !== this._time || !this._ts && !c) {
                                d = 0,
                                o && (w += this._zTime = S ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        i = o
                    }
                }
                if (d && !e && (this.pause(),
                d.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1,
                this._ts))
                    return this._start = h,
                    Nt(this),
                    this.render(t, e, r);
                this._onUpdate && !e && ge(this, "onUpdate", !0),
                (w === y && y >= this.totalDuration() || !w && g) && (h !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !v) && (w === y && this._ts > 0 || !w && this._ts < 0) && jt(this, 1),
                e || t < 0 && !g || !w && !g || (ge(this, w === y ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(w < y && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        r.add = function(t, e) {
            var r = this;
            if (N(e) || (e = Jt(this, e)),
            !(t instanceof Xe)) {
                if ($(t))
                    return t.forEach((function(t) {
                        return r.add(t, e)
                    }
                    )),
                    this;
                if (D(t))
                    return this.addLabel(t, e);
                if (!z(t))
                    return this;
                t = $e.delayedCall(0, t)
            }
            return this !== t ? Vt(this, t, e) : this
        }
        ,
        r.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === n && (n = -W);
            for (var i = [], o = this._first; o; )
                o._start >= n && (o instanceof $e ? e && i.push(o) : (r && i.push(o),
                t && i.push.apply(i, o.getChildren(!0, e, r)))),
                o = o._next;
            return i
        }
        ,
        r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        r.remove = function(t) {
            return D(t) ? this.removeLabel(t) : z(t) ? this.killTweensOf(t) : (Yt(this, t),
            t === this._recent && (this._recent = this._last),
            Ht(this))
        }
        ,
        r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = Tt(Ae.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
            t.prototype.totalTime.call(this, e, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        r.addLabel = function(t, e) {
            return this.labels[t] = Jt(this, e),
            this
        }
        ,
        r.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        r.addPause = function(t, e, r) {
            var n = $e.delayedCall(0, e || ut, r);
            return n.data = "isPause",
            this._hasPause = 1,
            Vt(this, n, Jt(this, t))
        }
        ,
        r.removePause = function(t) {
            var e = this._first;
            for (t = Jt(this, t); e; )
                e._start === t && "isPause" === e.data && jt(e),
                e = e._next
        }
        ,
        r.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
                ze !== n[i] && n[i].kill(t, e);
            return this
        }
        ,
        r.getTweensOf = function(t, e) {
            for (var r, n = [], i = ae(t), o = this._first, a = N(e); o; )
                o instanceof $e ? qt(o._targets, i) && (a ? (!ze || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
                o = o._next;
            return n
        }
        ,
        r.tweenTo = function(t, e) {
            e = e || {};
            var r = this
              , n = Jt(r, t)
              , i = e
              , o = i.startAt
              , a = i.onStart
              , s = i.onStartParams
              , l = i.immediateRender
              , c = $e.to(r, Mt({
                ease: "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (o && "time"in o ? o.time : r._time)) / r.timeScale()) || 1e-8,
                onStart: function() {
                    r.pause();
                    var t = e.duration || Math.abs((n - r._time) / r.timeScale());
                    c._dur !== t && Zt(c, t, 0, 1).render(c._time, !0, !0),
                    a && a.apply(c, s || [])
                }
            }, e));
            return l ? c.render(0) : c
        }
        ,
        r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Mt({
                startAt: {
                    time: Jt(this, t)
                }
            }, r))
        }
        ,
        r.recent = function() {
            return this._recent
        }
        ,
        r.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            me(this, Jt(this, t))
        }
        ,
        r.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            me(this, Jt(this, t), 1)
        }
        ,
        r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }
        ,
        r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, o = this.labels; i; )
                i._start >= r && (i._start += t,
                i._end += t),
                i = i._next;
            if (e)
                for (n in o)
                    o[n] >= r && (o[n] += t);
            return Ht(this)
        }
        ,
        r.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Ht(this)
        }
        ,
        r.totalDuration = function(t) {
            var e, r, n, i = 0, o = this, s = o._last, l = W;
            if (arguments.length)
                return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (n = o.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    (r = s._start) > l && o._sort && s._ts && !o._lock ? (o._lock = 1,
                    Vt(o, s, r - s._delay, 1)._lock = 0) : l = r,
                    r < 0 && s._ts && (i -= r,
                    (!n && !o._dp || n && n.smoothChildTiming) && (o._start += r / o._ts,
                    o._time -= r,
                    o._tTime -= r),
                    o.shiftChildren(-r, !1, -Infinity),
                    l = 0),
                    s._end > i && s._ts && (i = s._end),
                    s = e;
                Zt(o, o === a && o._time > i ? o._time : i, 1, 1),
                o._dirty = 0
            }
            return o._tDur
        }
        ,
        e.updateRoot = function(t) {
            if (a._ts && (Ot(a, zt(t, a)),
            u = Ae.frame),
            Ae.frame >= yt) {
                yt += E.autoSleep || 120;
                var e = a._first;
                if ((!e || !e._ts) && E.autoSleep && Ae._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Ae.sleep()
                }
            }
        }
        ,
        e
    }(Xe);
    Mt(De.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var ze, Ne = function(t, e, r, n, i, o, a) {
        var s, l, c, d, u, h, f, p, m = new ur(this._pt,t,e,0,1,or,null,i), g = 0, y = 0;
        for (m.b = r,
        m.e = n,
        r += "",
        (f = ~(n += "").indexOf("random(")) && (n = fe(n)),
        o && (o(p = [r, n], t, e),
        r = p[0],
        n = p[1]),
        l = r.match(et) || []; s = et.exec(n); )
            d = s[0],
            u = n.substring(g, s.index),
            c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1),
            d !== l[y++] && (h = parseFloat(l[y - 1]) || 0,
            m._pt = {
                _next: m._pt,
                p: u || 1 === y ? u : ",",
                s: h,
                c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - h,
                m: c && c < 4 ? Math.round : 0
            },
            g = et.lastIndex);
        return m.c = g < n.length ? n.substring(g, n.length) : "",
        m.fp = a,
        (rt.test(n) || f) && (m.e = 0),
        this._pt = m,
        m
    }, Fe = function(t, e, r, n, i, o, a, s, l) {
        z(n) && (n = n(i || 0, t, o));
        var c, d = t[e], u = "get" !== r ? r : z(d) ? l ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, h = z(d) ? l ? tr : Je : Qe;
        if (D(n) && (~n.indexOf("random(") && (n = fe(n)),
        "=" === n.charAt(1) && (n = parseFloat(u) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (re(u) || 0))),
        u !== n)
            return isNaN(u * n) ? (!d && !(e in t) && lt(e, n),
            Ne.call(this, t, e, u, n, h, s || E.stringFilter, l)) : (c = new ur(this._pt,t,e,+u || 0,n - (u || 0),"boolean" == typeof d ? ir : nr,0,h),
            l && (c.fp = l),
            a && c.modifier(a, this, t),
            this._pt = c)
    }, Ue = function(t, e, r, n, i, o) {
        var a, s, l, c;
        if (mt[t] && !1 !== (a = new mt[t]).init(i, a.rawVars ? e[t] : function(t, e, r, n, i) {
            if (z(t) && (t = Ge(t, i, e, r, n)),
            !U(t) || t.style && t.nodeType || $(t) || Z(t))
                return D(t) ? Ge(t, i, e, r, n) : t;
            var o, a = {};
            for (o in t)
                a[o] = Ge(t[o], i, e, r, n);
            return a
        }(e[t], n, i, o, r), r, n, o) && (r._pt = s = new ur(r._pt,i,t,0,1,a.render,a,0,a.priority),
        r !== h))
            for (l = r._ptLookup[r._targets.indexOf(i)],
            c = a._props.length; c--; )
                l[a._props[c]] = s;
        return a
    }, Ve = function t(e, r) {
        var n, i, s, l, c, d, u, h, f, p, m, g, y, v = e.vars, w = v.ease, b = v.startAt, _ = v.immediateRender, x = v.lazy, S = v.onUpdate, T = v.onUpdateParams, q = v.callbackScope, L = v.runBackwards, A = v.yoyoEase, O = v.keyframes, k = v.autoRevert, C = e._dur, M = e._startAt, I = e._targets, E = e.parent, W = E && "nested" === E.data ? E.parent._targets : I, R = "auto" === e._overwrite && !o, Y = e.timeline;
        if (Y && (!O || !w) && (w = "none"),
        e._ease = We(w, P.ease),
        e._yEase = A ? Ee(We(!0 === A ? w : A, P.ease)) : 0,
        A && e._yoyo && !e._repeat && (A = e._yEase,
        e._yEase = e._ease,
        e._ease = A),
        !Y) {
            if (g = (h = I[0] ? _t(I[0]).harness : 0) && v[h.prop],
            n = Wt(v, ht),
            M && M.render(-1, !0).kill(),
            b) {
                if (jt(e._startAt = $e.set(I, Mt({
                    data: "isStart",
                    overwrite: !1,
                    parent: E,
                    immediateRender: !0,
                    lazy: V(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: S,
                    onUpdateParams: T,
                    callbackScope: q,
                    stagger: 0
                }, b))),
                _)
                    if (r > 0)
                        k || (e._startAt = 0);
                    else if (C && !(r < 0 && M))
                        return void (r && (e._zTime = r))
            } else if (L && C)
                if (M)
                    !k && (e._startAt = 0);
                else if (r && (_ = !1),
                s = Mt({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: _ && V(x),
                    immediateRender: _,
                    stagger: 0,
                    parent: E
                }, n),
                g && (s[h.prop] = g),
                jt(e._startAt = $e.set(I, s)),
                _) {
                    if (!r)
                        return
                } else
                    t(e._startAt, 1e-8);
            for (e._pt = 0,
            x = C && V(x) || x && !C,
            i = 0; i < I.length; i++) {
                if (u = (c = I[i])._gsap || bt(I)[i]._gsap,
                e._ptLookup[i] = p = {},
                pt[u.id] && ft.length && At(),
                m = W === I ? i : W.indexOf(c),
                h && !1 !== (f = new h).init(c, g || n, e, m, W) && (e._pt = l = new ur(e._pt,c,f.name,0,1,f.render,f,0,f.priority),
                f._props.forEach((function(t) {
                    p[t] = l
                }
                )),
                f.priority && (d = 1)),
                !h || g)
                    for (s in n)
                        mt[s] && (f = Ue(s, n, e, m, c, W)) ? f.priority && (d = 1) : p[s] = l = Fe.call(e, c, s, "get", n[s], m, W, 0, v.stringFilter);
                e._op && e._op[i] && e.kill(c, e._op[i]),
                R && e._pt && (ze = e,
                a.killTweensOf(c, p, e.globalTime(0)),
                y = !e.parent,
                ze = 0),
                e._pt && x && (pt[u.id] = 1)
            }
            d && dr(e),
            e._onInit && e._onInit(e)
        }
        e._from = !Y && !!v.runBackwards,
        e._onUpdate = S,
        e._initted = (!e._op || e._pt) && !y
    }, Ge = function(t, e, r, n, i) {
        return z(t) ? t.call(e, r, n, i) : D(t) && ~t.indexOf("random(") ? fe(t) : t
    }, Ke = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ze = (Ke + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), $e = function(t) {
        function e(e, r, i, s) {
            var l;
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var c, d, u, h, f, p, m, g, y = (l = t.call(this, s ? r : Rt(r), i) || this).vars, v = y.duration, w = y.delay, b = y.immediateRender, _ = y.stagger, x = y.overwrite, S = y.keyframes, T = y.defaults, q = y.scrollTrigger, L = y.yoyoEase, A = l.parent, O = ($(e) || Z(e) ? N(e[0]) : "length"in r) ? [e] : ae(e);
            if (l._targets = O.length ? bt(O) : ct("GSAP target " + e + " not found. https://greensock.com", !E.nullTargetWarn) || [],
            l._ptLookup = [],
            l._overwrite = x,
            S || _ || K(v) || K(w)) {
                if (r = l.vars,
                (c = l.timeline = new De({
                    data: "nested",
                    defaults: T || {}
                })).kill(),
                c.parent = c._dp = n(l),
                c._start = 0,
                S)
                    Mt(c.vars.defaults, {
                        ease: "none"
                    }),
                    S.forEach((function(t) {
                        return c.to(O, t, ">")
                    }
                    ));
                else {
                    if (h = O.length,
                    m = _ ? le(_) : ut,
                    U(_))
                        for (f in _)
                            ~Ke.indexOf(f) && (g || (g = {}),
                            g[f] = _[f]);
                    for (d = 0; d < h; d++) {
                        for (f in u = {},
                        r)
                            Ze.indexOf(f) < 0 && (u[f] = r[f]);
                        u.stagger = 0,
                        L && (u.yoyoEase = L),
                        g && Et(u, g),
                        p = O[d],
                        u.duration = +Ge(v, n(l), d, p, O),
                        u.delay = (+Ge(w, n(l), d, p, O) || 0) - l._delay,
                        !_ && 1 === h && u.delay && (l._delay = w = u.delay,
                        l._start += w,
                        u.delay = 0),
                        c.to(p, u, m(d, p, O))
                    }
                    c.duration() ? v = w = 0 : l.timeline = 0
                }
                v || l.duration(v = c.duration())
            } else
                l.timeline = 0;
            return !0 !== x || o || (ze = n(l),
            a.killTweensOf(O),
            ze = 0),
            A && Ut(A, n(l)),
            (b || !v && !S && l._start === Tt(A._time) && V(b) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(n(l)) && "nested" !== A.data) && (l._tTime = -1e-8,
            l.render(Math.max(0, -w))),
            q && Gt(n(l), q),
            l
        }
        i(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var n, i, o, a, s, l, c, d, u, h = this._time, f = this._tDur, p = this._dur, m = t > f - 1e-8 && t >= 0 ? f : t < 1e-8 ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (n = m,
                    d = this.timeline,
                    this._repeat) {
                        if (a = p + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * a + t, e, r);
                        if (n = Tt(m % a),
                        m === f ? (o = this._repeat,
                        n = p) : ((o = ~~(m / a)) && o === m / a && (n = p,
                        o--),
                        n > p && (n = p)),
                        (l = this._yoyo && 1 & o) && (u = this._yEase,
                        n = p - n),
                        s = Dt(this._tTime, a),
                        n === h && !r && this._initted)
                            return this;
                        o !== s && (d && this._yEase && Pe(d, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = r = 1,
                        this.render(Tt(a * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Kt(this, t < 0 ? t : n, r, e))
                            return this._tTime = 0,
                            this;
                        if (p !== this._dur)
                            return this.render(t, e, r)
                    }
                    for (this._tTime = m,
                    this._time = n,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = c = (u || this._ease)(n / p),
                    this._from && (this.ratio = c = 1 - c),
                    n && !h && !e && ge(this, "onStart"),
                    i = this._pt; i; )
                        i.r(c, i.d),
                        i = i._next;
                    d && d.render(t < 0 ? t : !n && l ? -1e-8 : d._dur * c, e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                    ge(this, "onUpdate")),
                    this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && ge(this, "onRepeat"),
                    m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !p) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && jt(this, 1),
                    e || t < 0 && !h || !m && !h || (ge(this, m === f ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(m < f && this.timeScale() > 0) && this._prom()))
                }
            } else
                !function(t, e, r, n) {
                    var i, o, a, s = t.ratio, l = e < 0 || !e && (!t._start && function t(e) {
                        var r = e.parent;
                        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
                    }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1, c = t._rDelay, d = 0;
                    if (c && t._repeat && (d = ee(0, t._tDur, e),
                    o = Dt(d, c),
                    a = Dt(t._tTime, c),
                    t._yoyo && 1 & o && (l = 1 - l),
                    o !== a && (s = 1 - l,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    l !== s || n || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && Kt(t, e, n, r))
                            return;
                        for (a = t._zTime,
                        t._zTime = e || (r ? 1e-8 : 0),
                        r || (r = e && !a),
                        t.ratio = l,
                        t._from && (l = 1 - l),
                        t._time = 0,
                        t._tTime = d,
                        r || ge(t, "onStart"),
                        i = t._pt; i; )
                            i.r(l, i.d),
                            i = i._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !r && ge(t, "onUpdate"),
                        d && t._repeat && !r && t.parent && ge(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === l && (l && jt(t, 1),
                        r || (ge(t, l ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
        ,
        r.targets = function() {
            return this._targets
        }
        ,
        r.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
        }
        ,
        r.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e))
                return this._lazy = this._pt = 0,
                this.parent ? ye(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, ze && !0 !== ze.vars.overwrite)._first || ye(this),
                this.parent && r !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var n, i, o, a, s, l, c, d = this._targets, u = t ? ae(t) : d, h = this._ptLookup, f = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r]; )
                    ;
                return r < 0
            }(d, u))
                return "all" === e && (this._pt = 0),
                ye(this);
            for (n = this._op = this._op || [],
            "all" !== e && (D(e) && (s = {},
            St(e, (function(t) {
                return s[t] = 1
            }
            )),
            e = s),
            e = function(t, e) {
                var r, n, i, o, a = t[0] ? _t(t[0]).harness : 0, s = a && a.aliases;
                if (!s)
                    return e;
                for (n in r = Et({}, e),
                s)
                    if (n in r)
                        for (i = (o = s[n].split(",")).length; i--; )
                            r[o[i]] = r[n];
                return r
            }(d, e)),
            c = d.length; c--; )
                if (~u.indexOf(d[c]))
                    for (s in i = h[c],
                    "all" === e ? (n[c] = e,
                    a = i,
                    o = {}) : (o = n[c] = n[c] || {},
                    a = e),
                    a)
                        (l = i && i[s]) && ("kill"in l.d && !0 !== l.d.kill(s) || Yt(this, l, "_pt"),
                        delete i[s]),
                        "all" !== o && (o[s] = 1);
            return this._initted && !this._pt && f && ye(this),
            this
        }
        ,
        e.to = function(t, r) {
            return new e(t,r,arguments[2])
        }
        ,
        e.from = function(t, r) {
            return new e(t,Lt(arguments, 1))
        }
        ,
        e.delayedCall = function(t, r, n, i) {
            return new e(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }
        ,
        e.fromTo = function(t, r, n) {
            return new e(t,Lt(arguments, 2))
        }
        ,
        e.set = function(t, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
            new e(t,r)
        }
        ,
        e.killTweensOf = function(t, e, r) {
            return a.killTweensOf(t, e, r)
        }
        ,
        e
    }(Xe);
    Mt($e.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    St("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        $e[t] = function() {
            var e = new De
              , r = ne.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, r)
        }
    }
    ));
    var Qe = function(t, e, r) {
        return t[e] = r
    }
      , Je = function(t, e, r) {
        return t[e](r)
    }
      , tr = function(t, e, r, n) {
        return t[e](n.fp, r)
    }
      , er = function(t, e, r) {
        return t.setAttribute(e, r)
    }
      , rr = function(t, e) {
        return z(t[e]) ? Je : F(t[e]) && t.setAttribute ? er : Qe
    }
      , nr = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    }
      , ir = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , or = function(t, e) {
        var r = e._pt
          , n = "";
        if (!t && e.b)
            n = e.b;
        else if (1 === t && e.e)
            n = e.e;
        else {
            for (; r; )
                n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n,
                r = r._next;
            n += e.c
        }
        e.set(e.t, e.p, n, e)
    }
      , ar = function(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , sr = function(t, e, r, n) {
        for (var i, o = this._pt; o; )
            i = o._next,
            o.p === n && o.modifier(t, e, r),
            o = i
    }
      , lr = function(t) {
        for (var e, r, n = this._pt; n; )
            r = n._next,
            n.p === t && !n.op || n.op === t ? Yt(this, n, "_pt") : n.dep || (e = 1),
            n = r;
        return !e
    }
      , cr = function(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    }
      , dr = function(t) {
        for (var e, r, n, i, o = t._pt; o; ) {
            for (e = o._next,
            r = n; r && r.pr > o.pr; )
                r = r._next;
            (o._prev = r ? r._prev : i) ? o._prev._next = o : n = o,
            (o._next = r) ? r._prev = o : i = o,
            o = e
        }
        t._pt = n
    }
      , ur = function() {
        function t(t, e, r, n, i, o, a, s, l) {
            this.t = e,
            this.s = n,
            this.c = i,
            this.p = r,
            this.r = o || nr,
            this.d = a || this,
            this.set = s || Qe,
            this.pr = l || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set,
            this.set = cr,
            this.m = t,
            this.mt = r,
            this.tween = e
        }
        ,
        t
    }();
    St(wt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return ht[t] = 1
    }
    )),
    ot.TweenMax = ot.TweenLite = $e,
    ot.TimelineLite = ot.TimelineMax = De,
    a = new De({
        sortChildren: !1,
        defaults: P,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    E.stringFilter = Le;
    var hr = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach((function(t) {
                return ve(t)
            }
            ))
        },
        timeline: function(t) {
            return new De(t)
        },
        getTweensOf: function(t, e) {
            return a.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, n) {
            D(t) && (t = ae(t)[0]);
            var i = _t(t || {}).get
              , o = r ? Ct : kt;
            return "native" === r && (r = ""),
            t ? e ? o((mt[e] && mt[e].get || i)(t, e, r, n)) : function(e, r, n) {
                return o((mt[e] && mt[e].get || i)(t, e, r, n))
            }
            : t
        },
        quickSetter: function(t, e, r) {
            if ((t = ae(t)).length > 1) {
                var n = t.map((function(t) {
                    return mr.quickSetter(t, e, r)
                }
                ))
                  , i = n.length;
                return function(t) {
                    for (var e = i; e--; )
                        n[e](t)
                }
            }
            t = t[0] || {};
            var o = mt[e]
              , a = _t(t)
              , s = a.harness && (a.harness.aliases || {})[e] || e
              , l = o ? function(e) {
                var n = new o;
                h._pt = 0,
                n.init(t, r ? e + r : e, h, 0, [t]),
                n.render(1, n),
                h._pt && ar(1, h)
            }
            : a.set(t, s);
            return o ? l : function(e) {
                return l(t, s, r ? e + r : e, a, 1)
            }
        },
        isTweening: function(t) {
            return a.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = We(t.ease, P.ease)),
            Pt(P, t || {})
        },
        config: function(t) {
            return Pt(E, t || {})
        },
        registerEffect: function(t) {
            var e = t.name
              , r = t.effect
              , n = t.plugins
              , i = t.defaults
              , o = t.extendTimeline;
            (n || "").split(",").forEach((function(t) {
                return t && !mt[t] && !ot[t] && ct(e + " effect requires " + t + " plugin.")
            }
            )),
            gt[e] = function(t, e, n) {
                return r(ae(t), Mt(e || {}, i), n)
            }
            ,
            o && (De.prototype[e] = function(t, r, n) {
                return this.add(gt[e](t, U(r) ? r : (n = r) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            ke[t] = We(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? We(t, e) : ke
        },
        getById: function(t) {
            return a.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, n, i = new De(t);
            for (i.smoothChildTiming = V(t.smoothChildTiming),
            a.remove(i),
            i._dp = 0,
            i._time = i._tTime = a._time,
            r = a._first; r; )
                n = r._next,
                !e && !r._dur && r instanceof $e && r.vars.onComplete === r._targets[0] || Vt(i, r, r._start - r._delay),
                r = n;
            return Vt(a, i, 0),
            i
        },
        utils: {
            wrap: function t(e, r, n) {
                var i = r - e;
                return $(e) ? he(e, t(0, e.length), r) : te(n, (function(t) {
                    return (i + (t - e) % i) % i + e
                }
                ))
            },
            wrapYoyo: function t(e, r, n) {
                var i = r - e
                  , o = 2 * i;
                return $(e) ? he(e, t(0, e.length - 1), r) : te(n, (function(t) {
                    return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                }
                ))
            },
            distribute: le,
            random: ue,
            snap: de,
            normalize: function(t, e, r) {
                return pe(t, e, 0, 1, r)
            },
            getUnit: re,
            clamp: function(t, e, r) {
                return te(r, (function(r) {
                    return ee(t, e, r)
                }
                ))
            },
            splitColor: _e,
            toArray: ae,
            mapRange: pe,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }
                    ), t)
                }
            },
            unitize: function(t, e) {
                return function(r) {
                    return t(parseFloat(r)) + (e || re(r))
                }
            },
            interpolate: function t(e, r, n, i) {
                var o = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!o) {
                    var a, s, l, c, d, u = D(e), h = {};
                    if (!0 === n && (i = 1) && (n = null),
                    u)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if ($(e) && !$(r)) {
                        for (l = [],
                        c = e.length,
                        d = c - 2,
                        s = 1; s < c; s++)
                            l.push(t(e[s - 1], e[s]));
                        c--,
                        o = function(t) {
                            t *= c;
                            var e = Math.min(d, ~~t);
                            return l[e](t - e)
                        }
                        ,
                        n = r
                    } else
                        i || (e = Et($(e) ? [] : {}, e));
                    if (!l) {
                        for (a in r)
                            Fe.call(h, e, a, "get", r[a]);
                        o = function(t) {
                            return ar(t, h) || (u ? e.p : e)
                        }
                    }
                }
                return te(n, o)
            },
            shuffle: se
        },
        install: st,
        effects: gt,
        ticker: Ae,
        updateRoot: De.updateRoot,
        plugins: mt,
        globalTimeline: a,
        core: {
            PropTween: ur,
            globals: dt,
            Tween: $e,
            Timeline: De,
            Animation: Xe,
            getCache: _t,
            _removeLinkedListItem: Yt,
            suppressOverwrites: function(t) {
                return o = t
            }
        }
    };
    St("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return hr[t] = $e[t]
    }
    )),
    Ae.add(De.updateRoot),
    h = hr.to({}, {
        duration: 0
    });
    var fr = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
      , pr = function(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, r, n) {
                n._onInit = function(t) {
                    var n, i;
                    if (D(r) && (n = {},
                    St(r, (function(t) {
                        return n[t] = 1
                    }
                    )),
                    r = n),
                    e) {
                        for (i in n = {},
                        r)
                            n[i] = e(r[i]);
                        r = n
                    }
                    !function(t, e) {
                        var r, n, i, o = t._targets;
                        for (r in e)
                            for (n = o.length; n--; )
                                (i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = fr(i, r)),
                                i && i.modifier && i.modifier(e[r], t, o[n], r))
                    }(t, r)
                }
            }
        }
    }
      , mr = hr.registerPlugin({
        name: "attr",
        init: function(t, e, r, n, i) {
            var o, a;
            for (o in e)
                (a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], n, i, 0, 0, o)) && (a.op = o),
                this._props.push(o)
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, pr("roundProps", ce), pr("modifiers"), pr("snap", de)) || hr;
    $e.version = De.version = mr.version = "3.6.0",
    d = 1,
    G() && Oe();
    ke.Power0,
    ke.Power1,
    ke.Power2,
    ke.Power3,
    ke.Power4,
    ke.Linear,
    ke.Quad,
    ke.Cubic,
    ke.Quart,
    ke.Quint,
    ke.Strong,
    ke.Elastic,
    ke.Back,
    ke.SteppedEase,
    ke.Bounce,
    ke.Sine,
    ke.Expo,
    ke.Circ;
    /*!
* CSSPlugin 3.6.0
* https://greensock.com
*
* Copyright 2008-2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
    var gr, yr, vr, wr, br, _r, xr, Sr, Tr = {}, qr = 180 / Math.PI, Lr = Math.PI / 180, Ar = Math.atan2, Or = /([A-Z])/g, kr = /(?:left|right|width|margin|padding|x)/i, Cr = /[\s,\(]\S/, Mr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ir = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Er = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Pr = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, Wr = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, Rr = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, Yr = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, jr = function(t, e, r) {
        return t.style[e] = r
    }, Hr = function(t, e, r) {
        return t.style.setProperty(e, r)
    }, Br = function(t, e, r) {
        return t._gsap[e] = r
    }, Xr = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, Dr = function(t, e, r, n, i) {
        var o = t._gsap;
        o.scaleX = o.scaleY = r,
        o.renderTransform(i, o)
    }, zr = function(t, e, r, n, i) {
        var o = t._gsap;
        o[e] = r,
        o.renderTransform(i, o)
    }, Nr = "transform", Fr = Nr + "Origin", Ur = function(t, e) {
        var r = yr.createElementNS ? yr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : yr.createElement(t);
        return r.style ? r : yr.createElement(t)
    }, Vr = function t(e, r, n) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(Or, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, Kr(r) || r, 1) || ""
    }, Gr = "O,Moz,ms,Ms,Webkit".split(","), Kr = function(t, e, r) {
        var n = (e || br).style
          , i = 5;
        if (t in n && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Gr[i] + t in n); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Gr[i] : "") + t
    }, Zr = function() {
        "undefined" != typeof window && window.document && (gr = window,
        yr = gr.document,
        vr = yr.documentElement,
        br = Ur("div") || {
            style: {}
        },
        _r = Ur("div"),
        Nr = Kr(Nr),
        Fr = Nr + "Origin",
        br.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Sr = !!Kr("perspective"),
        wr = 1)
    }, $r = function t(e) {
        var r, n = Ur("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, o = this.nextSibling, a = this.style.cssText;
        if (vr.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        e)
            try {
                r = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = t
            } catch (t) {}
        else
            this._gsapBBox && (r = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
        vr.removeChild(n),
        this.style.cssText = a,
        r
    }, Qr = function(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, Jr = function(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (r) {
            e = $r.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === $r || (e = $r.call(t, !0)),
        !e || e.width || e.x || e.y ? e : {
            x: +Qr(t, ["x", "cx", "x1"]) || 0,
            y: +Qr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, tn = function(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Jr(t))
    }, en = function(t, e) {
        if (e) {
            var r = t.style;
            e in Tr && e !== Fr && (e = Nr),
            r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            r.removeProperty(e.replace(Or, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }, rn = function(t, e, r, n, i, o) {
        var a = new ur(t._pt,e,r,0,1,o ? Yr : Rr);
        return t._pt = a,
        a.b = n,
        a.e = i,
        t._props.push(r),
        a
    }, nn = {
        deg: 1,
        rad: 1,
        turn: 1
    }, on = function t(e, r, n, i) {
        var o, a, s, l, c = parseFloat(n) || 0, d = (n + "").trim().substr((c + "").length) || "px", u = br.style, h = kr.test(r), f = "svg" === e.tagName.toLowerCase(), p = (f ? "client" : "offset") + (h ? "Width" : "Height"), m = "px" === i, g = "%" === i;
        return i === d || !c || nn[i] || nn[d] ? c : ("px" !== d && !m && (c = t(e, r, n, "px")),
        l = e.getCTM && tn(e),
        !g && "%" !== d || !Tr[r] && !~r.indexOf("adius") ? (u[h ? "width" : "height"] = 100 + (m ? d : i),
        a = ~r.indexOf("adius") || "em" === i && e.appendChild && !f ? e : e.parentNode,
        l && (a = (e.ownerSVGElement || {}).parentNode),
        a && a !== yr && a.appendChild || (a = yr.body),
        (s = a._gsap) && g && s.width && h && s.time === Ae.time ? Tt(c / s.width * 100) : ((g || "%" === d) && (u.position = Vr(e, "position")),
        a === e && (u.position = "static"),
        a.appendChild(br),
        o = br[p],
        a.removeChild(br),
        u.position = "absolute",
        h && g && ((s = _t(a)).time = Ae.time,
        s.width = a[p]),
        Tt(m ? o * c / 100 : o && c ? 100 / o * c : 0))) : (o = l ? e.getBBox()[h ? "width" : "height"] : e[p],
        Tt(g ? c / o * 100 : c / 100 * o)))
    }, an = function(t, e, r, n) {
        var i;
        return wr || Zr(),
        e in Mr && "transform" !== e && ~(e = Mr[e]).indexOf(",") && (e = e.split(",")[0]),
        Tr[e] && "transform" !== e ? (i = yn(t, n),
        i = "transformOrigin" !== e ? i[e] : vn(Vr(t, Fr)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = dn[e] && dn[e](t, e, r) || Vr(t, e) || xt(t, e) || ("opacity" === e ? 1 : 0)),
        r && !~(i + "").trim().indexOf(" ") ? on(t, e, i, r) + r : i
    }, sn = function(t, e, r, n) {
        if (!r || "none" === r) {
            var i = Kr(e, t, 1)
              , o = i && Vr(t, i, 1);
            o && o !== r ? (e = i,
            r = o) : "borderColor" === e && (r = Vr(t, "borderTopColor"))
        }
        var a, s, l, c, d, u, h, f, p, m, g, y, v = new ur(this._pt,t.style,e,0,1,or), w = 0, b = 0;
        if (v.b = r,
        v.e = n,
        r += "",
        "auto" === (n += "") && (t.style[e] = n,
        n = Vr(t, e) || n,
        t.style[e] = r),
        Le(a = [r, n]),
        n = a[1],
        l = (r = a[0]).match(tt) || [],
        (n.match(tt) || []).length) {
            for (; s = tt.exec(n); )
                h = s[0],
                p = n.substring(w, s.index),
                d ? d = (d + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (d = 1),
                h !== (u = l[b++] || "") && (c = parseFloat(u) || 0,
                g = u.substr((c + "").length),
                (y = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)),
                f = parseFloat(h),
                m = h.substr((f + "").length),
                w = tt.lastIndex - m.length,
                m || (m = m || E.units[e] || g,
                w === n.length && (n += m,
                v.e += m)),
                g !== m && (c = on(t, e, u, m) || 0),
                v._pt = {
                    _next: v._pt,
                    p: p || 1 === b ? p : ",",
                    s: c,
                    c: y ? y * f : f - c,
                    m: d && d < 4 || "zIndex" === e ? Math.round : 0
                });
            v.c = w < n.length ? n.substring(w, n.length) : ""
        } else
            v.r = "display" === e && "none" === n ? Yr : Rr;
        return rt.test(n) && (v.e = 0),
        this._pt = v,
        v
    }, ln = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, cn = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, n, i, o = e.t, a = o.style, s = e.u, l = o._gsap;
            if ("all" === s || !0 === s)
                a.cssText = "",
                n = 1;
            else
                for (i = (s = s.split(",")).length; --i > -1; )
                    r = s[i],
                    Tr[r] && (n = 1,
                    r = "transformOrigin" === r ? Fr : Nr),
                    en(o, r);
            n && (en(o, Nr),
            l && (l.svg && o.removeAttribute("transform"),
            yn(o, 1),
            l.uncache = 1))
        }
    }, dn = {
        clearProps: function(t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
                var o = t._pt = new ur(t._pt,e,r,0,0,cn);
                return o.u = n,
                o.pr = -10,
                o.tween = i,
                t._props.push(r),
                1
            }
        }
    }, un = [1, 0, 0, 1, 0, 0], hn = {}, fn = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, pn = function(t) {
        var e = Vr(t, Nr);
        return fn(e) ? un : e.substr(7).match(J).map(Tt)
    }, mn = function(t, e) {
        var r, n, i, o, a = t._gsap || _t(t), s = t.style, l = pn(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? un : l : (l !== un || t.offsetParent || t === vr || a.svg || (i = s.display,
        s.display = "block",
        (r = t.parentNode) && t.offsetParent || (o = 1,
        n = t.nextSibling,
        vr.appendChild(t)),
        l = pn(t),
        i ? s.display = i : en(t, "display"),
        o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : vr.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, gn = function(t, e, r, n, i, o) {
        var a, s, l, c = t._gsap, d = i || mn(t, !0), u = c.xOrigin || 0, h = c.yOrigin || 0, f = c.xOffset || 0, p = c.yOffset || 0, m = d[0], g = d[1], y = d[2], v = d[3], w = d[4], b = d[5], _ = e.split(" "), x = parseFloat(_[0]) || 0, S = parseFloat(_[1]) || 0;
        r ? d !== un && (s = m * v - g * y) && (l = x * (-g / s) + S * (m / s) - (m * b - g * w) / s,
        x = x * (v / s) + S * (-y / s) + (y * b - v * w) / s,
        S = l) : (x = (a = Jr(t)).x + (~_[0].indexOf("%") ? x / 100 * a.width : x),
        S = a.y + (~(_[1] || _[0]).indexOf("%") ? S / 100 * a.height : S)),
        n || !1 !== n && c.smooth ? (w = x - u,
        b = S - h,
        c.xOffset = f + (w * m + b * y) - w,
        c.yOffset = p + (w * g + b * v) - b) : c.xOffset = c.yOffset = 0,
        c.xOrigin = x,
        c.yOrigin = S,
        c.smooth = !!n,
        c.origin = e,
        c.originIsAbsolute = !!r,
        t.style[Fr] = "0px 0px",
        o && (rn(o, c, "xOrigin", u, x),
        rn(o, c, "yOrigin", h, S),
        rn(o, c, "xOffset", f, c.xOffset),
        rn(o, c, "yOffset", p, c.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + S)
    }, yn = function(t, e) {
        var r = t._gsap || new Be(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var n, i, o, a, s, l, c, d, u, h, f, p, m, g, y, v, w, b, _, x, S, T, q, L, A, O, k, C, M, I, P, W, R = t.style, Y = r.scaleX < 0, j = Vr(t, Fr) || "0";
        return n = i = o = l = c = d = u = h = f = 0,
        a = s = 1,
        r.svg = !(!t.getCTM || !tn(t)),
        g = mn(t, r.svg),
        r.svg && (L = !r.uncache && t.getAttribute("data-svg-origin"),
        gn(t, L || j, !!L || r.originIsAbsolute, !1 !== r.smooth, g)),
        p = r.xOrigin || 0,
        m = r.yOrigin || 0,
        g !== un && (b = g[0],
        _ = g[1],
        x = g[2],
        S = g[3],
        n = T = g[4],
        i = q = g[5],
        6 === g.length ? (a = Math.sqrt(b * b + _ * _),
        s = Math.sqrt(S * S + x * x),
        l = b || _ ? Ar(_, b) * qr : 0,
        (u = x || S ? Ar(x, S) * qr + l : 0) && (s *= Math.cos(u * Lr)),
        r.svg && (n -= p - (p * b + m * x),
        i -= m - (p * _ + m * S))) : (W = g[6],
        I = g[7],
        k = g[8],
        C = g[9],
        M = g[10],
        P = g[11],
        n = g[12],
        i = g[13],
        o = g[14],
        c = (y = Ar(W, M)) * qr,
        y && (L = T * (v = Math.cos(-y)) + k * (w = Math.sin(-y)),
        A = q * v + C * w,
        O = W * v + M * w,
        k = T * -w + k * v,
        C = q * -w + C * v,
        M = W * -w + M * v,
        P = I * -w + P * v,
        T = L,
        q = A,
        W = O),
        d = (y = Ar(-x, M)) * qr,
        y && (v = Math.cos(-y),
        P = S * (w = Math.sin(-y)) + P * v,
        b = L = b * v - k * w,
        _ = A = _ * v - C * w,
        x = O = x * v - M * w),
        l = (y = Ar(_, b)) * qr,
        y && (L = b * (v = Math.cos(y)) + _ * (w = Math.sin(y)),
        A = T * v + q * w,
        _ = _ * v - b * w,
        q = q * v - T * w,
        b = L,
        T = A),
        c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
        d = 180 - d),
        a = Tt(Math.sqrt(b * b + _ * _ + x * x)),
        s = Tt(Math.sqrt(q * q + W * W)),
        y = Ar(T, q),
        u = Math.abs(y) > 2e-4 ? y * qr : 0,
        f = P ? 1 / (P < 0 ? -P : P) : 0),
        r.svg && (L = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !fn(Vr(t, Nr)),
        L && t.setAttribute("transform", L))),
        Math.abs(u) > 90 && Math.abs(u) < 270 && (Y ? (a *= -1,
        u += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (s *= -1,
        u += u <= 0 ? 180 : -180)),
        r.x = n - ((r.xPercent = n && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = i - ((r.yPercent = i && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = o + "px",
        r.scaleX = Tt(a),
        r.scaleY = Tt(s),
        r.rotation = Tt(l) + "deg",
        r.rotationX = Tt(c) + "deg",
        r.rotationY = Tt(d) + "deg",
        r.skewX = u + "deg",
        r.skewY = h + "deg",
        r.transformPerspective = f + "px",
        (r.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (R[Fr] = vn(j)),
        r.xOffset = r.yOffset = 0,
        r.force3D = E.force3D,
        r.renderTransform = r.svg ? xn : Sr ? _n : bn,
        r.uncache = 0,
        r
    }, vn = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, wn = function(t, e, r) {
        var n = re(e);
        return Tt(parseFloat(e) + parseFloat(on(t, "x", r + "px", n))) + n
    }, bn = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        _n(t, e)
    }, _n = function(t, e) {
        var r = e || this
          , n = r.xPercent
          , i = r.yPercent
          , o = r.x
          , a = r.y
          , s = r.z
          , l = r.rotation
          , c = r.rotationY
          , d = r.rotationX
          , u = r.skewX
          , h = r.skewY
          , f = r.scaleX
          , p = r.scaleY
          , m = r.transformPerspective
          , g = r.force3D
          , y = r.target
          , v = r.zOrigin
          , w = ""
          , b = "auto" === g && t && 1 !== t || !0 === g;
        if (v && ("0deg" !== d || "0deg" !== c)) {
            var _, x = parseFloat(c) * Lr, S = Math.sin(x), T = Math.cos(x);
            x = parseFloat(d) * Lr,
            _ = Math.cos(x),
            o = wn(y, o, S * _ * -v),
            a = wn(y, a, -Math.sin(x) * -v),
            s = wn(y, s, T * _ * -v + v)
        }
        "0px" !== m && (w += "perspective(" + m + ") "),
        (n || i) && (w += "translate(" + n + "%, " + i + "%) "),
        (b || "0px" !== o || "0px" !== a || "0px" !== s) && (w += "0px" !== s || b ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + ") "),
        "0deg" !== l && (w += "rotate(" + l + ") "),
        "0deg" !== c && (w += "rotateY(" + c + ") "),
        "0deg" !== d && (w += "rotateX(" + d + ") "),
        "0deg" === u && "0deg" === h || (w += "skew(" + u + ", " + h + ") "),
        1 === f && 1 === p || (w += "scale(" + f + ", " + p + ") "),
        y.style[Nr] = w || "translate(0, 0)"
    }, xn = function(t, e) {
        var r, n, i, o, a, s = e || this, l = s.xPercent, c = s.yPercent, d = s.x, u = s.y, h = s.rotation, f = s.skewX, p = s.skewY, m = s.scaleX, g = s.scaleY, y = s.target, v = s.xOrigin, w = s.yOrigin, b = s.xOffset, _ = s.yOffset, x = s.forceCSS, S = parseFloat(d), T = parseFloat(u);
        h = parseFloat(h),
        f = parseFloat(f),
        (p = parseFloat(p)) && (f += p = parseFloat(p),
        h += p),
        h || f ? (h *= Lr,
        f *= Lr,
        r = Math.cos(h) * m,
        n = Math.sin(h) * m,
        i = Math.sin(h - f) * -g,
        o = Math.cos(h - f) * g,
        f && (p *= Lr,
        a = Math.tan(f - p),
        i *= a = Math.sqrt(1 + a * a),
        o *= a,
        p && (a = Math.tan(p),
        r *= a = Math.sqrt(1 + a * a),
        n *= a)),
        r = Tt(r),
        n = Tt(n),
        i = Tt(i),
        o = Tt(o)) : (r = m,
        o = g,
        n = i = 0),
        (S && !~(d + "").indexOf("px") || T && !~(u + "").indexOf("px")) && (S = on(y, "x", d, "px"),
        T = on(y, "y", u, "px")),
        (v || w || b || _) && (S = Tt(S + v - (v * r + w * i) + b),
        T = Tt(T + w - (v * n + w * o) + _)),
        (l || c) && (a = y.getBBox(),
        S = Tt(S + l / 100 * a.width),
        T = Tt(T + c / 100 * a.height)),
        a = "matrix(" + r + "," + n + "," + i + "," + o + "," + S + "," + T + ")",
        y.setAttribute("transform", a),
        x && (y.style[Nr] = a)
    }, Sn = function(t, e, r, n, i, o) {
        var a, s, l = D(i), c = parseFloat(i) * (l && ~i.indexOf("rad") ? qr : 1), d = o ? c * o : c - n, u = n + d + "deg";
        return l && ("short" === (a = i.split("_")[1]) && (d %= 360) !== d % 180 && (d += d < 0 ? 360 : -360),
        "cw" === a && d < 0 ? d = (d + 36e9) % 360 - 360 * ~~(d / 360) : "ccw" === a && d > 0 && (d = (d - 36e9) % 360 - 360 * ~~(d / 360))),
        t._pt = s = new ur(t._pt,e,r,n,d,Er),
        s.e = u,
        s.u = "deg",
        t._props.push(r),
        s
    }, Tn = function(t, e, r) {
        var n, i, o, a, s, l, c, d = _r.style, u = r._gsap;
        for (i in d.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;",
        d[Nr] = e,
        yr.body.appendChild(_r),
        n = yn(_r, 1),
        Tr)
            (o = u[i]) !== (a = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (s = re(o) !== (c = re(a)) ? on(r, i, o, c) : parseFloat(o),
            l = parseFloat(a),
            t._pt = new ur(t._pt,u,i,s,l - s,Ir),
            t._pt.u = c || 0,
            t._props.push(i));
        yr.body.removeChild(_r)
    };
    St("padding,margin,Width,Radius", (function(t, e) {
        var r = "Top"
          , n = "Right"
          , i = "Bottom"
          , o = "Left"
          , a = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map((function(r) {
            return e < 2 ? t + r : "border" + r + t
        }
        ));
        dn[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var o, s;
            if (arguments.length < 4)
                return o = a.map((function(e) {
                    return an(t, e, r)
                }
                )),
                5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (n + "").split(" "),
            s = {},
            a.forEach((function(t, e) {
                return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }
            )),
            t.init(e, s, i)
        }
    }
    ));
    var qn, Ln, An = {
        name: "css",
        register: Zr,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var o, a, s, l, c, d, u, h, f, p, m, g, y, v, w, b, _, x, S, T = this._props, q = t.style, L = r.vars.startAt;
            for (u in wr || Zr(),
            e)
                if ("autoRound" !== u && (a = e[u],
                !mt[u] || !Ue(u, e, r, n, t, i)))
                    if (c = typeof a,
                    d = dn[u],
                    "function" === c && (c = typeof (a = a.call(r, n, t, i))),
                    "string" === c && ~a.indexOf("random(") && (a = fe(a)),
                    d)
                        d(this, t, u, a, r) && (w = 1);
                    else if ("--" === u.substr(0, 2))
                        o = (getComputedStyle(t).getPropertyValue(u) + "").trim(),
                        a += "",
                        h = re(o),
                        (f = re(a)) ? h !== f && (o = on(t, u, o, f) + f) : h && (a += h),
                        this.add(q, "setProperty", o, a, n, i, 0, 0, u);
                    else if ("undefined" !== c) {
                        if (L && u in L ? (o = "function" == typeof L[u] ? L[u].call(r, n, t, i) : L[u],
                        u in E.units && !re(o) && (o += E.units[u]),
                        "=" === (o + "").charAt(1) && (o = an(t, u))) : o = an(t, u),
                        l = parseFloat(o),
                        (p = "string" === c && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                        s = parseFloat(a),
                        u in Mr && ("autoAlpha" === u && (1 === l && "hidden" === an(t, "visibility") && s && (l = 0),
                        rn(this, q, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                        "scale" !== u && "transform" !== u && ~(u = Mr[u]).indexOf(",") && (u = u.split(",")[0])),
                        m = u in Tr)
                            if (g || ((y = t._gsap).renderTransform && !e.parseTransform || yn(t, e.parseTransform),
                            v = !1 !== e.smoothOrigin && y.smooth,
                            (g = this._pt = new ur(this._pt,q,Nr,0,1,y.renderTransform,y,0,-1)).dep = 1),
                            "scale" === u)
                                this._pt = new ur(this._pt,y,"scaleY",y.scaleY,p ? p * s : s - y.scaleY),
                                T.push("scaleY", u),
                                u += "X";
                            else {
                                if ("transformOrigin" === u) {
                                    _ = void 0,
                                    x = void 0,
                                    S = void 0,
                                    _ = (b = a).split(" "),
                                    x = _[0],
                                    S = _[1] || "50%",
                                    "top" !== x && "bottom" !== x && "left" !== S && "right" !== S || (b = x,
                                    x = S,
                                    S = b),
                                    _[0] = ln[x] || x,
                                    _[1] = ln[S] || S,
                                    a = _.join(" "),
                                    y.svg ? gn(t, a, 0, v, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== y.zOrigin && rn(this, y, "zOrigin", y.zOrigin, f),
                                    rn(this, q, u, vn(o), vn(a)));
                                    continue
                                }
                                if ("svgOrigin" === u) {
                                    gn(t, a, 1, v, 0, this);
                                    continue
                                }
                                if (u in hn) {
                                    Sn(this, y, u, l, a, p);
                                    continue
                                }
                                if ("smoothOrigin" === u) {
                                    rn(this, y, "smooth", y.smooth, a);
                                    continue
                                }
                                if ("force3D" === u) {
                                    y[u] = a;
                                    continue
                                }
                                if ("transform" === u) {
                                    Tn(this, a, t);
                                    continue
                                }
                            }
                        else
                            u in q || (u = Kr(u) || u);
                        if (m || (s || 0 === s) && (l || 0 === l) && !Cr.test(a) && u in q)
                            s || (s = 0),
                            (h = (o + "").substr((l + "").length)) !== (f = re(a) || (u in E.units ? E.units[u] : h)) && (l = on(t, u, o, f)),
                            this._pt = new ur(this._pt,m ? y : q,u,l,p ? p * s : s - l,m || "px" !== f && "zIndex" !== u || !1 === e.autoRound ? Ir : Wr),
                            this._pt.u = f || 0,
                            h !== f && (this._pt.b = o,
                            this._pt.r = Pr);
                        else if (u in q)
                            sn.call(this, t, u, o, a);
                        else {
                            if (!(u in t)) {
                                lt(u, a);
                                continue
                            }
                            this.add(t, u, t[u], a, n, i)
                        }
                        T.push(u)
                    }
            w && dr(this)
        },
        get: an,
        aliases: Mr,
        getSetter: function(t, e, r) {
            var n = Mr[e];
            return n && n.indexOf(",") < 0 && (e = n),
            e in Tr && e !== Fr && (t._gsap.x || an(t, "x")) ? r && xr === r ? "scale" === e ? Xr : Br : (xr = r || {}) && ("scale" === e ? Dr : zr) : t.style && !F(t.style[e]) ? jr : ~e.indexOf("-") ? Hr : rr(t, e)
        },
        core: {
            _removeProperty: en,
            _getMatrix: mn
        }
    };
    mr.utils.checkPrefix = Kr,
    Ln = St("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (qn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        Tr[t] = 1
    }
    )),
    St(qn, (function(t) {
        E.units[t] = "deg",
        hn[t] = 1
    }
    )),
    Mr[Ln[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + qn,
    St("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        Mr[e[1]] = Ln[e[0]]
    }
    )),
    St("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        E.units[t] = "px"
    }
    )),
    mr.registerPlugin(An);
    var On = mr.registerPlugin(An) || mr;
    On.core.Tween
}
, function(t, e, r) {
    "use strict";
    r.r(e),
    r.d(e, "shuffle", (function() {
        return o
    }
    )),
    r.d(e, "randomize", (function() {
        return a
    }
    )),
    r.d(e, "ease", (function() {
        return s
    }
    )),
    r.d(e, "getMousePos", (function() {
        return l
    }
    )),
    r.d(e, "togglePointer", (function() {
        return c
    }
    )),
    r.d(e, "indexInParent", (function() {
        return d
    }
    )),
    r.d(e, "pxToRem", (function() {
        return u
    }
    )),
    r.d(e, "remToPx", (function() {
        return h
    }
    )),
    r.d(e, "isInView", (function() {
        return f
    }
    )),
    r.d(e, "setViewClasses", (function() {
        return p
    }
    )),
    r.d(e, "setRouteClasses", (function() {
        return m
    }
    )),
    r.d(e, "updateClasses", (function() {
        return g
    }
    )),
    r.d(e, "isMobile", (function() {
        return y
    }
    )),
    r.d(e, "isRetina", (function() {
        return v
    }
    )),
    r.d(e, "isFirefox", (function() {
        return w
    }
    )),
    r.d(e, "lerp", (function() {
        return b
    }
    )),
    r.d(e, "norm", (function() {
        return _
    }
    )),
    r.d(e, "mapFromRange", (function() {
        return x
    }
    )),
    r.d(e, "setCurrentProjectIndex", (function() {
        return S
    }
    )),
    r.d(e, "requestInterval", (function() {
        return T
    }
    )),
    r.d(e, "clearRequestInterval", (function() {
        return q
    }
    )),
    r.d(e, "wrapWords", (function() {
        return L
    }
    )),
    r.d(e, "sortNumsFromMiddle", (function() {
        return A
    }
    )),
    r.d(e, "debounce", (function() {
        return O
    }
    )),
    r.d(e, "headerIconTextAnimateOut", (function() {
        return k
    }
    )),
    r.d(e, "headerIconTextAnimateIn", (function() {
        return C
    }
    )),
    r.d(e, "headerInfoAnimateOut", (function() {
        return M
    }
    )),
    r.d(e, "headerInfoAnimateIn", (function() {
        return I
    }
    )),
    r.d(e, "changeScrollSkin", (function() {
        return E
    }
    )),
    r.d(e, "changeHeaderSkin", (function() {
        return P
    }
    ));
    var n = r(0)
      , i = r(1);
    const o = t=>{
        for (let e = t.length - 1; e > 0; e--) {
            const r = Math.floor(Math.random() * (e + 1));
            [t[e],t[r]] = [t[r], t[e]]
        }
        return t
    }
      , a = function(t, e) {
        let r = [];
        for (let e = 0; e < t; e++)
            r[e] = e;
        for (let t = r.length - 1; t > 0; t--) {
            const e = Math.floor(Math.random() * (t + 1));
            [r[t],r[e]] = [r[e], r[t]]
        }
        return r.slice(0, e)
    }
      , s = function(t, e, r) {
        let n = Math.round(100 * (t * (1 - r) + e * r)) / 100;
        return n >= -.05 && n <= .05 && (n = 0),
        n
    }
      , l = t=>{
        let e = 0
          , r = 0;
        return t || (t = window.event),
        t.pageX || t.pageY ? (e = t.pageX,
        r = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        r = t.clientY + document.body.scrollTop + document.documentElement.scrollTop),
        {
            x: e,
            y: r
        }
    }
      , c = (t,e)=>{
        t && (e && t.classList.contains("q-no-point") && t.classList.remove("q-no-point"),
        e || t.classList.contains("q-no-point") || t.classList.add("q-no-point"))
    }
      , d = t=>{
        const e = t.parentNode.childNodes;
        let r = 0;
        for (let n = 0; n < e.length; n++) {
            if (e[n] == t)
                return r;
            1 == e[n].nodeType && r++
        }
        return -1
    }
      , u = t=>t / parseFloat(getComputedStyle(document.documentElement).fontSize)
      , h = t=>parseFloat(t) * parseFloat(getComputedStyle(document.documentElement).fontSize)
      , f = t=>{
        const e = window.scrollY || window.pageYOffset
          , r = t.getBoundingClientRect().top + e
          , n = e
          , i = e + window.innerHeight
          , o = r
          , a = r + t.clientHeight;
        return a >= n && a <= i || o <= i && o >= n
    }
      , p = t=>{
        const e = t + "-view";
        ["home-view", "single-view", "page-view"].forEach(t=>{
            t !== e && document.documentElement.classList.remove(t)
        }
        ),
        document.documentElement.classList.contains(e) || (document.documentElement.classList.add(e),
        document.dispatchEvent(new CustomEvent("viewChanged",{
            detail: {
                from: n.default.namespace,
                to: t
            }
        })))
    }
      , m = ()=>{
        const t = n.default.route;
        ["page-to-single", "single-to-single", "single-to-page"].forEach(e=>{
            e !== t && document.documentElement.classList.remove(e)
        }
        ),
        document.documentElement.classList.contains(t) || document.documentElement.classList.add(t)
    }
      , g = t=>{
        const e = t.next.html.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", t.next.html)
          , r = document.createElement("div");
        r.innerHTML = e;
        return {
            body: ()=>{
                document.body.classList = r.querySelector("notbody").classList
            }
            ,
            menu: ()=>{
                const t = document.querySelectorAll(".menu-item")
                  , e = [...r.querySelectorAll(".menu-item")];
                t.length && t.forEach(t=>{
                    const r = e.find(e=>e.querySelector("a").textContent == t.querySelector("a").textContent);
                    t.classList = r.classList
                }
                )
            }
        }
    }
      , y = ()=>window.innerWidth <= 1024
      , v = ()=>window.devicePixelRatio > 1 && (document.documentElement.classList.add("retina"),
    !0)
      , w = ()=>(navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && document.body.classList.add("qode-firefox"),
    navigator.userAgent.toLowerCase().indexOf("firefox") > -1)
      , b = (t,e,r)=>(1 - r) * t + r * e
      , _ = (t,e,r)=>(t - e) / (r - e)
      , x = (t,e,r,n,i)=>(t - e) * (i - n) / (r - e) + n
      , S = ()=>{
        const t = document.querySelector("main").dataset.title;
        n.default.projects.forEach((e,r)=>{
            e == t && (n.default.activeIndex = r)
        }
        )
    }
      , T = function(t, e) {
        const r = window.requestAnimationFrame || function(t, e) {
            window.setTimeout(t, 1e3 / 60)
        }
        ;
        let n = (new Date).getTime()
          , i = {};
        return i.value = r((function o() {
            (new Date).getTime() - n >= e && (t.call(),
            n = (new Date).getTime()),
            i.value = r(o)
        }
        )),
        i
    }
      , q = function(t) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(t.value) : clearInterval(t)
    }
      , L = function(t) {
        document.querySelectorAll(t).forEach(t=>{
            t.closest("a").setAttribute("aria-label", t.textContent),
            t.closest("a").classList.add("btn__aux"),
            t.innerHTML = t.innerHTML.replace(/./g, "<span class='char'><span class='first'>$&</span><span class='second'>$&</span></span>").replace(/\s/g, " ")
        }
        )
    }
      , A = t=>{
        const e = Math.round(t / 2);
        let r = []
          , n = [];
        n.push(e),
        r.push(n),
        n = [];
        for (var i = 1; i < e; i++)
            n.push(e - i),
            n.push(e + i),
            r.push(n),
            n = [];
        return r
    }
      , O = (t,e,r)=>{
        var n;
        return function() {
            var i = this
              , o = arguments
              , a = function() {
                n = null,
                r || t.apply(i, o)
            }
              , s = r && !n;
            clearTimeout(n),
            n = setTimeout(a, e),
            s && t.apply(i, o)
        }
    }
      , k = t=>{
        if (!n.default.isMobile) {
            let e = document.querySelector(t);
            if (e) {
                let t = e.querySelectorAll(".char");
                i.a.to(t, {
                    y: -20,
                    z: 0,
                    duration: .6,
                    delay: 0,
                    stagger: .09,
                    ease: "power3.out"
                }),
                e.classList.remove("-active")
            }
        }
    }
      , C = t=>{
        if (t && !n.default.isMobile) {
            let e = t.querySelectorAll(".char");
            t.classList.add("-active"),
            i.a.to(e, {
                y: 0,
                z: 0,
                duration: .6,
                rotate: 0,
                ease: "power3.out",
                stagger: .09,
                startAt: {
                    y: "18"
                }
            })
        }
    }
      , M = t=>{
        if (!n.default.isMobile) {
            let e = document.querySelector(t);
            e && (i.a.to(e, {
                y: -19,
                duration: .5,
                ease: "power3.out"
            }),
            e.classList.remove("-active"))
        }
    }
      , I = t=>{
        t && !n.default.isMobile && (t.classList.add("-active"),
        i.a.fromTo(t, {
            y: 19,
            z: 0
        }, {
            y: 0,
            duration: .5,
            ease: "power3.out",
            delay: .22,
            onComplete: ()=>{
                t.classList.contains("-active") || i.a.to(t, {
                    translateY: -19,
                    duration: .01,
                    delay: 0,
                    ease: "power3.out"
                })
            }
        }))
    }
      , E = t=>{
        const e = document.querySelector(".ps__thumb-y");
        t ? e.classList.contains("scroll-dark-skin") || e.classList.add("scroll-dark-skin") : e.classList.contains("scroll-dark-skin") && e.classList.remove("scroll-dark-skin")
    }
      , P = (t,e)=>{
        if (window.innerWidth > 1024) {
            const r = document.querySelector(".q-header")
              , n = document.querySelector(".q-overlay");
            let i = (e = document.querySelector(e)) ? window.getComputedStyle(e).getPropertyValue("background-color") : window.getComputedStyle(document.body).getPropertyValue("background-color")
              , o = "q-header-skin-light"
              , a = "q-header-skin-default";
            "light" === t && r.classList.contains(a) ? r.classList.remove(a) : "default" === t && r.classList.contains(o) && r.classList.remove(o),
            t = "light" === t ? o : a,
            r.classList.add(t),
            r.style.backgroundColor = i,
            n.style.backgroundColor = i
        }
    }
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0);
    let i;
    i = n.default.windowWidth <= 1680 && n.default.windowWidth > 1366 && n.default.windowHeight <= 800 ? .35 : n.default.windowWidth <= 1366 && n.default.windowWidth > 1024 ? .3 : n.default.windowWidth <= 1024 ? .5 : .4;
    class o {
        constructor(t) {
            this.node = t,
            this.entities = [],
            this.world = new p2.World,
            this.circles = {},
            this.values = {},
            this.initBoundaries()
        }
        initBoundaries() {
            this.values = l(this.node);
            const t = new p2.Body;
            t.addShape(new p2.Plane),
            this.world.addBody(t);
            const e = new p2.Body({
                angle: 3 * Math.PI / 2
            });
            e.addShape(new p2.Plane),
            this.world.addBody(e),
            this.world.leftPlane = new p2.Body({
                angle: 3 * Math.PI / 2
            }),
            this.world.leftPlane.addShape(new p2.Plane),
            this.world.addBody(this.world.leftPlane);
            const r = new p2.Body({
                angle: Math.PI / 2,
                position: [this.values.width, 0]
            });
            r.addShape(new p2.Plane),
            this.world.addBody(r);
            const n = new p2.Body({
                angle: Math.PI,
                position: [0, 1 * this.values.height]
            });
            n.addShape(new p2.Plane),
            this.world.addBody(n),
            this.circles.circle1 = new p2.Body({
                position: [this.values.width, .6 * this.values.height]
            }),
            this.circles.circle1.addShape(new p2.Circle({
                radius: this.values.width * i
            })),
            this.world.addBody(this.circles.circle1),
            this.circles.circle2 = new p2.Body({
                position: [0, .6 * this.values.height]
            }),
            this.circles.circle2.addShape(new p2.Circle({
                radius: this.values.width * i
            })),
            this.world.addBody(this.circles.circle2),
            window.addEventListener("resize", ()=>{
                this.values = l(this.node),
                r.position = [this.values.width, 0],
                n.position = [0, this.values.height]
            }
            )
        }
        initChildren() {
            for (let t of this.entities)
                t.precreateBody();
            const t = d;
            this.entities = [];
            for (let e = 0; e < t.length; e++) {
                const r = t[e]
                  , n = new a(this.world,r);
                this.entities.push(n),
                n.precreateBody()
            }
            for (let t of this.entities)
                t.createBody()
        }
        addChild(t) {
            const e = new a(this.world,t);
            this.entities.push(e),
            e.precreateBody(),
            e.createBody()
        }
        addChildren(t) {
            const e = [];
            for (let r of t) {
                const t = new a(this.world,r);
                this.entities.push(t),
                e.push(t),
                t.precreateBody()
            }
            for (let t of e)
                t.createBody()
        }
        updateChildren() {
            for (let t of this.entities)
                t.updateNode();
            this.world.step(1 / 60)
        }
    }
    class a {
        constructor(t, e) {
            this.world = t,
            this.node = e,
            this.nextBodyValues = {},
            this.body = void 0
        }
        updateNode() {
            if (!this.body)
                return;
            const t = s(this.body);
            this.applyStyles(this.node, t)
        }
        applyStyles(t, e) {
            const {position: r, bottom: n, left: i, width: o, height: a, posX: s, posY: l, angle: c} = e;
            this.node.style.position = r || "",
            this.node.style.bottom = n || "",
            this.node.style.left = i || "",
            this.node.style.width = o ? o + "px" : "",
            this.node.style.height = a ? a + "px" : "";
            const d = s && l ? `translate3d(calc(${s}px - 50%),\n      calc(-1 * ${l}px + 50%),\n      0)` : ""
              , u = void 0 !== c ? `rotate(${c}deg)` : "";
            this.node.style.transform = d + " " + u
        }
        precreateBody() {
            this.body && (this.world.removeBody(this.body),
            this.body = void 0),
            this.applyStyles(this.node, {}),
            this.nextBodyValues = l(this.node)
        }
        createBody() {
            this.body && (this.world.removeBody(this.body),
            this.body = void 0);
            const {width: t, height: e, position: r} = this.nextBodyValues;
            this.body = new p2.Body({
                mass: 800,
                gravityScale: 3,
                angularVelocity: .1 * Math.random() * 12 * 20,
                position: r
            }),
            this.body.addShape(new p2.Box({
                width: t,
                height: e
            })),
            this.world.addBody(this.body)
        }
    }
    const s = t=>{
        const e = t.shapes[0];
        return {
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: 130 * e.width,
            height: 130 * e.height,
            posX: 130 * t.position[0],
            posY: 130 * t.position[1],
            angle: -60 * t.angle
        }
    }
      , l = t=>{
        const e = t.offsetWidth / 130
          , r = t.offsetHeight / 130
          , n = t.offsetTop / 130;
        return {
            width: e,
            height: r,
            position: [t.offsetLeft / 130 + e / 2, t.parentNode.offsetHeight / 130 - n - r / 2]
        }
    }
      , c = document.getElementById("letters-playground")
      , d = c ? c.querySelectorAll(".letters-letter") : null;
    let u = c ? new o(c) : null;
    const h = {
        rafID: null,
        stop: ()=>{
            cancelAnimationFrame(h.rafID)
        }
        ,
        reset: ()=>{
            u = null,
            u = new o(c),
            d.forEach(t=>{
                t.style.position = "",
                t.style.bottom = "",
                t.style.left = "",
                t.style.width = "",
                t.style.height = "",
                t.style.transform = ""
            }
            )
        }
        ,
        animate: ()=>{
            u.updateChildren(),
            h.rafID = requestAnimationFrame(h.animate)
        }
        ,
        animateLettersDown: ()=>{
            u.world.solver.iterations = 18,
            u.initChildren(),
            h.animate()
        }
        ,
        animateLettersLeft: ()=>{
            u.world.gravity = [-1, 0],
            u.entities.forEach(t=>{
                t.body.gravityScale = 23
            }
            ),
            h.moveCirclesLeft()
        }
        ,
        moveCirclesDown: ()=>{
            u.circles.circle1.position = [u.values.width, .7 * u.values.height],
            u.circles.circle2.position = [0, .7 * u.values.height],
            console.log(u.values.width)
        }
        ,
        moveCirclesLeft: ()=>{
            u.circles.circle1.position = [.2 * u.values.width, -.6 * u.values.height],
            u.circles.circle2.position = [.2 * u.values.width, 1.66 * u.values.height]
        }
        ,
        setCircleSize: ()=>{
            u.circles.circle1.radius = 0 * u.values.width,
            u.circles.circle2.radius = 0 * u.values.width
        }
        ,
        bounceLetters: t=>{
            u.world.leftPlane.position = t ? [1, 0] : [0, 0]
        }
    };
    e.default = h
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0)
      , i = r(1);
    e.default = class {
        constructor() {
            this.DOM = {},
            this.init(),
            this.updateTimelines = this.updateTimelines.bind(this),
            window.updateTimeline = this.updateTimelines
        }
        updateTimelines() {
            Object.keys(n.default.progress).forEach(t=>{
                n.default.timelines[t].progress(n.default.progress[t])
            }
            )
        }
        init() {
            setTimeout(()=>{
                document.querySelector("#home").style.visibility = "visible"
            }
            , 100),
            window.scrollTo(window.scrollY, window.scrollY + 1),
            i.a.ticker.add(this.updateTimelines)
        }
    }
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    e.default = class {
        constructor(t) {
            this.targets = [...t],
            this.init()
        }
        load(t, e=!1) {
            const r = t
              , n = t.getAttribute("data-src");
            if ("VIDEO" !== t.tagName) {
                e ? r.style.backgroundImage = `url(${n})` : r.setAttribute("src", n);
                const t = new Image;
                t.onload = ()=>{
                    t.classList.add("-loaded")
                }
                ,
                t.src = n,
                r.removeAttribute("data-src")
            } else
                r.setAttribute("src", n),
                r.removeAttribute("data-src")
        }
        init() {
            this.targets.forEach(t=>{
                t.getAttribute(["data-src"]) && this.load(t, t.dataset.bg)
            }
            )
        }
    }
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0)
      , i = r(1)
      , o = r(2);
    e.default = class {
        constructor() {
            this.burger = document.querySelector(".q-header-mobile-menu-opener"),
            this.cover = document.querySelector("#q-mobile-menu"),
            this.openIcon = document.querySelector("#q-burger #q-open"),
            this.closeIcon = document.querySelector("#q-burger #q-close"),
            this.lines = document.querySelectorAll("#q-burger .q-menu-open line"),
            this.initEvents()
        }
        showOpenIcon() {
            i.a.to(this.closeIcon, {
                autoAlpha: 0,
                duration: .2
            }),
            i.a.to(this.openIcon, {
                autoAlpha: 1,
                duration: .35
            })
        }
        showCloseIcon() {
            const t = i.a.timeline({
                paused: !0,
                onStart: ()=>{
                    Object(o.togglePointer)(this.burger, !1)
                }
                ,
                onComplete: ()=>{
                    Object(o.togglePointer)(this.burger, !0)
                }
                ,
                onReverseComplete: ()=>{
                    Object(o.togglePointer)(this.burger, !0)
                }
                ,
                onUpdate: ()=>{
                    Object(o.togglePointer)(this.burger, !1)
                }
            });
            return t.fromTo(this.lines[0], {
                y: 0
            }, {
                y: 4,
                duration: .32,
                ease: "power2.out"
            }).fromTo(this.lines[2], {
                y: 0
            }, {
                y: -4,
                duration: .32,
                ease: "power2.out"
            }, "<").fromTo(this.lines[1], {
                opacity: 1
            }, {
                opacity: 0,
                duration: .01
            }, "-=.01").fromTo([this.lines[0]], {
                rotate: 0,
                transformOrigin: "center"
            }, {
                rotate: 45,
                duration: .2,
                ease: "power3.out"
            }).fromTo([this.lines[2]], {
                rotate: 0,
                transformOrigin: "center"
            }, {
                rotate: 135,
                duration: .45,
                ease: "power3.out"
            }, "<"),
            t
        }
        showNav() {
            n.default.navVisible = !0,
            document.body.classList.add("q-mobile-menu-opened"),
            document.body.classList.contains("q-mobile-menu-opened") && this.showCloseIcon().play()
        }
        hideNav() {
            n.default.navVisible = !1,
            document.body.classList.remove("q-mobile-menu-opened"),
            document.body.classList.contains("q-mobile-menu-opened") || this.showCloseIcon().reverse("", !1)
        }
        handleOpenerClick() {
            n.default.navVisible ? this.hideNav() : this.showNav()
        }
        initEvents() {
            this.burger.addEventListener("click", ()=>{
                this.handleOpenerClick()
            }
            )
        }
    }
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0);
    e.default = class {
        constructor() {
            this.holder = document.querySelector("#q-preloader"),
            this.holderInner = document.querySelector("#q-preloader>div"),
            this.preloaderLine = document.querySelector(".q-preloader-line"),
            this.preloaderArrow = document.querySelector(".q-preloader-arrow"),
            this.blackLine = document.querySelector(".q-preloader-black-line"),
            this.preraringText = document.querySelector(".q-preparing"),
            this.discoverText = document.querySelector(".q-discover"),
            this.replayButton = document.querySelector(".q-header-showcase-icon"),
            this.headerLogoLink = document.querySelector(".q-header-bridge-logo"),
            this.orientationMessage = document.querySelector(".q-switch-to-portrait"),
            this.state = {
                hidden: !1,
                animated: !1
            },
            this.timelineBlackLine,
            this.customScrollbar = document.getElementById("custom-scroll-page-wrapper"),
            this.hidePreloader = this.hidePreloader.bind(this),
            this.customScrollbar.hidePreloader = this.hidePreloader,
            this.holder && (this.init(),
            this.initEvents())
        }
        init() {
            document.body.classList.add("q-scroll-prevented", "q-page-loading"),
            n.a.set(this.blackLine, {
                scaleX: 0,
                transformOrigin: "left"
            }),
            n.a.set(this.holder, {
                y: 0
            }),
            n.a.to(this.holderInner, {
                duration: .2,
                autoAlpha: 1
            }),
            this.animateBlackLine()
        }
        animateBlackLine() {
            this.timelineBlackLine = n.a.timeline({
                paused: !0,
                repeat: -1
            }),
            this.timelineBlackLine.to(this.blackLine, {
                scaleX: 1,
                duration: 1.4,
                onComplete: ()=>{
                    document.documentElement.classList.contains("-loaded") && (this.timelineBlackLine.pause(),
                    this.animatePreloaderOut())
                }
            }).to(this.blackLine, {
                transformOrigin: "right",
                scaleX: 0,
                duration: 1
            }),
            this.timelineBlackLine.play()
        }
        showPreloader() {
            n.a.set(this.holder, {
                y: "0"
            })
        }
        hidePreloader() {
            n.a.to(this.holder, {
                duration: 1,
                y: "-120%",
                ease: "power3.inOut",
                onComplete: ()=>{
                    this.preloaderArrow.classList.remove("q-animating"),
                    n.a.set(this.holderInner, {
                        autoAlpha: 0
                    }),
                    n.a.set(this.preraringText, {
                        y: 0
                    }),
                    n.a.set(this.discoverText, {
                        y: 30
                    }),
                    n.a.set(this.preloaderLine, {
                        autoAlpha: 1,
                        y: 0
                    }),
                    this.timelineBlackLine.seek(0),
                    this.customScrollbar.addEventListener("ps-scroll-y", (function t(e) {
                        e.currentTarget.removeEventListener(e.type, t),
                        document.body.classList.remove("q-scroll-prevented", "q-page-loading")
                    }
                    ))
                }
            })
        }
        animatePreloaderOut() {
            n.a.to(this.preloaderLine, {
                y: -20,
                duration: .3,
                onStart: ()=>{
                    n.a.to(this.preloaderLine, {
                        opacity: 0,
                        duration: .1,
                        delay: .11
                    }),
                    this.preloaderArrow.classList.add("q-animating")
                }
            }),
            n.a.to(this.preraringText, {
                duration: .35,
                y: -30
            }),
            n.a.to(this.discoverText, {
                duration: .35,
                delay: .15,
                y: 0,
                onComplete: ()=>{
                    this.customScrollbar.addEventListener("ps-scroll-y", (function t(e) {
                        e.currentTarget.removeEventListener(e.type, t),
                        this.hidePreloader()
                    }
                    ))
                }
            })
        }
        animatePageToTop() {
            this.init(),
            document.body.classList.remove("q-scroll-prevented"),
            i.default.customScrollbar.scrollTo(0, 0)
        }
        initEvents() {
            this.replayButton.addEventListener("click", ()=>{
                this.animatePageToTop()
            }
            ),
            this.headerLogoLink.addEventListener("click", ()=>{
                this.animatePageToTop()
            }
            )
        }
    }
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(0)
      , i = r(5);
    /*!
* perfect-scrollbar v1.5.0
* Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
* Licensed under MIT
*/
    function o(t) {
        return getComputedStyle(t)
    }
    function a(t, e) {
        for (var r in e) {
            var n = e[r];
            "number" == typeof n && (n += "px"),
            t.style[r] = n
        }
        return t
    }
    function s(t) {
        var e = document.createElement("div");
        return e.className = t,
        e
    }
    var l = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
    function c(t, e) {
        if (!l)
            throw new Error("No element matching method supported");
        return l.call(t, e)
    }
    function d(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }
    function u(t, e) {
        return Array.prototype.filter.call(t.children, (function(t) {
            return c(t, e)
        }
        ))
    }
    var h = "ps"
      , f = "ps__rtl"
      , p = {
        thumb: function(t) {
            return "ps__thumb-" + t
        },
        rail: function(t) {
            return "ps__rail-" + t
        },
        consuming: "ps__child--consume"
    }
      , m = {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function(t) {
            return "ps--active-" + t
        },
        scrolling: function(t) {
            return "ps--scrolling-" + t
        }
    }
      , g = {
        x: null,
        y: null
    };
    function y(t, e) {
        var r = t.element.classList
          , n = m.scrolling(e);
        r.contains(n) ? clearTimeout(g[e]) : r.add(n)
    }
    function v(t, e) {
        g[e] = setTimeout((function() {
            return t.isAlive && t.element.classList.remove(m.scrolling(e))
        }
        ), t.settings.scrollingThreshold)
    }
    var w = function(t) {
        this.element = t,
        this.handlers = {}
    }
      , b = {
        isEmpty: {
            configurable: !0
        }
    };
    w.prototype.bind = function(t, e) {
        void 0 === this.handlers[t] && (this.handlers[t] = []),
        this.handlers[t].push(e),
        this.element.addEventListener(t, e, !1)
    }
    ,
    w.prototype.unbind = function(t, e) {
        var r = this;
        this.handlers[t] = this.handlers[t].filter((function(n) {
            return !(!e || n === e) || (r.element.removeEventListener(t, n, !1),
            !1)
        }
        ))
    }
    ,
    w.prototype.unbindAll = function() {
        for (var t in this.handlers)
            this.unbind(t)
    }
    ,
    b.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every((function(e) {
            return 0 === t.handlers[e].length
        }
        ))
    }
    ,
    Object.defineProperties(w.prototype, b);
    var _ = function() {
        this.eventElements = []
    };
    function x(t) {
        if ("function" == typeof window.CustomEvent)
            return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0),
        e
    }
    function S(t, e, r, n, i) {
        var o;
        if (void 0 === n && (n = !0),
        void 0 === i && (i = !1),
        "top" === e)
            o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== e)
                throw new Error("A proper axis should be provided");
            o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }
        !function(t, e, r, n, i) {
            var o = r[0]
              , a = r[1]
              , s = r[2]
              , l = r[3]
              , c = r[4]
              , d = r[5];
            void 0 === n && (n = !0);
            void 0 === i && (i = !1);
            var u = t.element;
            t.reach[l] = null,
            u[s] < 1 && (t.reach[l] = "start");
            u[s] > t[o] - t[a] - 1 && (t.reach[l] = "end");
            e && (u.dispatchEvent(x("ps-scroll-" + l)),
            e < 0 ? u.dispatchEvent(x("ps-scroll-" + c)) : e > 0 && u.dispatchEvent(x("ps-scroll-" + d)),
            n && function(t, e) {
                y(t, e),
                v(t, e)
            }(t, l));
            t.reach[l] && (e || i) && u.dispatchEvent(x("ps-" + l + "-reach-" + t.reach[l]))
        }(t, r, o, n, i)
    }
    function T(t) {
        return parseInt(t, 10) || 0
    }
    _.prototype.eventElement = function(t) {
        var e = this.eventElements.filter((function(e) {
            return e.element === t
        }
        ))[0];
        return e || (e = new w(t),
        this.eventElements.push(e)),
        e
    }
    ,
    _.prototype.bind = function(t, e, r) {
        this.eventElement(t).bind(e, r)
    }
    ,
    _.prototype.unbind = function(t, e, r) {
        var n = this.eventElement(t);
        n.unbind(e, r),
        n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1)
    }
    ,
    _.prototype.unbindAll = function() {
        this.eventElements.forEach((function(t) {
            return t.unbindAll()
        }
        )),
        this.eventElements = []
    }
    ,
    _.prototype.once = function(t, e, r) {
        var n = this.eventElement(t)
          , i = function(t) {
            n.unbind(e, i),
            r(t)
        };
        n.bind(e, i)
    }
    ;
    var q = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance"in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart"in window || "maxTouchPoints"in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    };
    function L(t) {
        var e = t.element
          , r = Math.floor(e.scrollTop)
          , n = e.getBoundingClientRect();
        t.containerWidth = Math.ceil(n.width),
        t.containerHeight = Math.ceil(n.height),
        t.contentWidth = e.scrollWidth,
        t.contentHeight = e.scrollHeight,
        e.contains(t.scrollbarXRail) || (u(e, p.rail("x")).forEach((function(t) {
            return d(t)
        }
        )),
        e.appendChild(t.scrollbarXRail)),
        e.contains(t.scrollbarYRail) || (u(e, p.rail("y")).forEach((function(t) {
            return d(t)
        }
        )),
        e.appendChild(t.scrollbarYRail)),
        !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0,
        t.railXWidth = t.containerWidth - t.railXMarginWidth,
        t.railXRatio = t.containerWidth / t.railXWidth,
        t.scrollbarXWidth = A(t, T(t.railXWidth * t.containerWidth / t.contentWidth)),
        t.scrollbarXLeft = T((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1,
        !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0,
        t.railYHeight = t.containerHeight - t.railYMarginHeight,
        t.railYRatio = t.containerHeight / t.railYHeight,
        t.scrollbarYHeight = A(t, T(t.railYHeight * t.containerHeight / t.contentHeight)),
        t.scrollbarYTop = T(r * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1,
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        function(t, e) {
            var r = {
                width: e.railXWidth
            }
              , n = Math.floor(t.scrollTop);
            e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : r.left = t.scrollLeft;
            e.isScrollbarXUsingBottom ? r.bottom = e.scrollbarXBottom - n : r.top = e.scrollbarXTop + n;
            a(e.scrollbarXRail, r);
            var i = {
                top: n,
                height: e.railYHeight
            };
            e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9 : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft;
            a(e.scrollbarYRail, i),
            a(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }),
            a(e.scrollbarY, {
                top: e.scrollbarYTop,
                height: e.scrollbarYHeight - e.railBorderYWidth
            })
        }(e, t),
        t.scrollbarXActive ? e.classList.add(m.active("x")) : (e.classList.remove(m.active("x")),
        t.scrollbarXWidth = 0,
        t.scrollbarXLeft = 0,
        e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0),
        t.scrollbarYActive ? e.classList.add(m.active("y")) : (e.classList.remove(m.active("y")),
        t.scrollbarYHeight = 0,
        t.scrollbarYTop = 0,
        e.scrollTop = 0)
    }
    function A(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
        t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
        e
    }
    function O(t, e) {
        var r = e[0]
          , n = e[1]
          , i = e[2]
          , o = e[3]
          , a = e[4]
          , s = e[5]
          , l = e[6]
          , c = e[7]
          , d = e[8]
          , u = t.element
          , h = null
          , f = null
          , p = null;
        function g(e) {
            e.touches && e.touches[0] && (e[i] = e.touches[0].pageY),
            u[l] = h + p * (e[i] - f),
            y(t, c),
            L(t),
            e.stopPropagation(),
            e.preventDefault()
        }
        function w() {
            v(t, c),
            t[d].classList.remove(m.clicking),
            t.event.unbind(t.ownerDocument, "mousemove", g)
        }
        function b(e, a) {
            h = u[l],
            a && e.touches && (e[i] = e.touches[0].pageY),
            f = e[i],
            p = (t[n] - t[r]) / (t[o] - t[s]),
            a ? t.event.bind(t.ownerDocument, "touchmove", g) : (t.event.bind(t.ownerDocument, "mousemove", g),
            t.event.once(t.ownerDocument, "mouseup", w),
            e.preventDefault()),
            t[d].classList.add(m.clicking),
            e.stopPropagation()
        }
        t.event.bind(t[a], "mousedown", (function(t) {
            b(t)
        }
        )),
        t.event.bind(t[a], "touchstart", (function(t) {
            b(t, !0)
        }
        ))
    }
    var k = {
        "click-rail": function(t) {
            t.element,
            t.event.bind(t.scrollbarY, "mousedown", (function(t) {
                return t.stopPropagation()
            }
            )),
            t.event.bind(t.scrollbarYRail, "mousedown", (function(e) {
                var r = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                t.element.scrollTop += r * t.containerHeight,
                L(t),
                e.stopPropagation()
            }
            )),
            t.event.bind(t.scrollbarX, "mousedown", (function(t) {
                return t.stopPropagation()
            }
            )),
            t.event.bind(t.scrollbarXRail, "mousedown", (function(e) {
                var r = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                t.element.scrollLeft += r * t.containerWidth,
                L(t),
                e.stopPropagation()
            }
            ))
        },
        "drag-thumb": function(t) {
            O(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]),
            O(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
        },
        keyboard: function(t) {
            var e = t.element;
            t.event.bind(t.ownerDocument, "keydown", (function(r) {
                if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (c(e, ":hover") || c(t.scrollbarX, ":focus") || c(t.scrollbarY, ":focus"))) {
                    var n, i = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                    if (i) {
                        if ("IFRAME" === i.tagName)
                            i = i.contentDocument.activeElement;
                        else
                            for (; i.shadowRoot; )
                                i = i.shadowRoot.activeElement;
                        if (c(n = i, "input,[contenteditable]") || c(n, "select,[contenteditable]") || c(n, "textarea,[contenteditable]") || c(n, "button,[contenteditable]"))
                            return
                    }
                    var o = 0
                      , a = 0;
                    switch (r.which) {
                    case 37:
                        o = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
                        break;
                    case 38:
                        a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
                        break;
                    case 39:
                        o = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
                        break;
                    case 40:
                        a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
                        break;
                    case 32:
                        a = r.shiftKey ? t.containerHeight : -t.containerHeight;
                        break;
                    case 33:
                        a = t.containerHeight;
                        break;
                    case 34:
                        a = -t.containerHeight;
                        break;
                    case 36:
                        a = t.contentHeight;
                        break;
                    case 35:
                        a = -t.contentHeight;
                        break;
                    default:
                        return
                    }
                    t.settings.suppressScrollX && 0 !== o || t.settings.suppressScrollY && 0 !== a || (e.scrollTop -= a,
                    e.scrollLeft += o,
                    L(t),
                    function(r, n) {
                        var i = Math.floor(e.scrollTop);
                        if (0 === r) {
                            if (!t.scrollbarYActive)
                                return !1;
                            if (0 === i && n > 0 || i >= t.contentHeight - t.containerHeight && n < 0)
                                return !t.settings.wheelPropagation
                        }
                        var o = e.scrollLeft;
                        if (0 === n) {
                            if (!t.scrollbarXActive)
                                return !1;
                            if (0 === o && r < 0 || o >= t.contentWidth - t.containerWidth && r > 0)
                                return !t.settings.wheelPropagation
                        }
                        return !0
                    }(o, a) && r.preventDefault())
                }
            }
            ))
        },
        wheel: function(t) {
            var e = t.element;
            function r(r) {
                var n = function(t) {
                    var e = t.deltaX
                      , r = -1 * t.deltaY;
                    return void 0 !== e && void 0 !== r || (e = -1 * t.wheelDeltaX / 6,
                    r = t.wheelDeltaY / 6),
                    t.deltaMode && 1 === t.deltaMode && (e *= 10,
                    r *= 10),
                    e != e && r != r && (e = 0,
                    r = t.wheelDelta),
                    t.shiftKey ? [-r, -e] : [e, r]
                }(r)
                  , i = n[0]
                  , a = n[1];
                if (!function(t, r, n) {
                    if (!q.isWebKit && e.querySelector("select:focus"))
                        return !0;
                    if (!e.contains(t))
                        return !1;
                    for (var i = t; i && i !== e; ) {
                        if (i.classList.contains(p.consuming))
                            return !0;
                        var a = o(i);
                        if (n && a.overflowY.match(/(scroll|auto)/)) {
                            var s = i.scrollHeight - i.clientHeight;
                            if (s > 0 && (i.scrollTop > 0 && n < 0 || i.scrollTop < s && n > 0))
                                return !0
                        }
                        if (r && a.overflowX.match(/(scroll|auto)/)) {
                            var l = i.scrollWidth - i.clientWidth;
                            if (l > 0 && (i.scrollLeft > 0 && r < 0 || i.scrollLeft < l && r > 0))
                                return !0
                        }
                        i = i.parentNode
                    }
                    return !1
                }(r.target, i, a)) {
                    var s = !1;
                    t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a ? e.scrollTop -= a * t.settings.wheelSpeed : e.scrollTop += i * t.settings.wheelSpeed,
                    s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (i ? e.scrollLeft += i * t.settings.wheelSpeed : e.scrollLeft -= a * t.settings.wheelSpeed,
                    s = !0) : (e.scrollTop -= a * t.settings.wheelSpeed,
                    e.scrollLeft += i * t.settings.wheelSpeed),
                    L(t),
                    (s = s || function(r, n) {
                        var i = Math.floor(e.scrollTop)
                          , o = 0 === e.scrollTop
                          , a = i + e.offsetHeight === e.scrollHeight
                          , s = 0 === e.scrollLeft
                          , l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                        return !(Math.abs(n) > Math.abs(r) ? o || a : s || l) || !t.settings.wheelPropagation
                    }(i, a)) && !r.ctrlKey && (r.stopPropagation(),
                    r.preventDefault())
                }
            }
            void 0 !== window.onwheel ? t.event.bind(e, "wheel", r) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", r)
        },
        touch: function(t) {
            if (q.supportsTouch || q.supportsIePointer) {
                var e = t.element
                  , r = {}
                  , n = 0
                  , i = {}
                  , a = null;
                q.supportsTouch ? (t.event.bind(e, "touchstart", d),
                t.event.bind(e, "touchmove", u),
                t.event.bind(e, "touchend", h)) : q.supportsIePointer && (window.PointerEvent ? (t.event.bind(e, "pointerdown", d),
                t.event.bind(e, "pointermove", u),
                t.event.bind(e, "pointerup", h)) : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", d),
                t.event.bind(e, "MSPointerMove", u),
                t.event.bind(e, "MSPointerUp", h)))
            }
            function s(r, n) {
                e.scrollTop -= n,
                e.scrollLeft -= r,
                L(t)
            }
            function l(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }
            function c(t) {
                return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
            }
            function d(t) {
                if (c(t)) {
                    var e = l(t);
                    r.pageX = e.pageX,
                    r.pageY = e.pageY,
                    n = (new Date).getTime(),
                    null !== a && clearInterval(a)
                }
            }
            function u(a) {
                if (c(a)) {
                    var d = l(a)
                      , u = {
                        pageX: d.pageX,
                        pageY: d.pageY
                    }
                      , h = u.pageX - r.pageX
                      , f = u.pageY - r.pageY;
                    if (function(t, r, n) {
                        if (!e.contains(t))
                            return !1;
                        for (var i = t; i && i !== e; ) {
                            if (i.classList.contains(p.consuming))
                                return !0;
                            var a = o(i);
                            if (n && a.overflowY.match(/(scroll|auto)/)) {
                                var s = i.scrollHeight - i.clientHeight;
                                if (s > 0 && (i.scrollTop > 0 && n < 0 || i.scrollTop < s && n > 0))
                                    return !0
                            }
                            if (r && a.overflowX.match(/(scroll|auto)/)) {
                                var l = i.scrollWidth - i.clientWidth;
                                if (l > 0 && (i.scrollLeft > 0 && r < 0 || i.scrollLeft < l && r > 0))
                                    return !0
                            }
                            i = i.parentNode
                        }
                        return !1
                    }(a.target, h, f))
                        return;
                    s(h, f),
                    r = u;
                    var m = (new Date).getTime()
                      , g = m - n;
                    g > 0 && (i.x = h / g,
                    i.y = f / g,
                    n = m),
                    function(r, n) {
                        var i = Math.floor(e.scrollTop)
                          , o = e.scrollLeft
                          , a = Math.abs(r)
                          , s = Math.abs(n);
                        if (s > a) {
                            if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && 0 === i)
                                return 0 === window.scrollY && n > 0 && q.isChrome
                        } else if (a > s && (r < 0 && o === t.contentWidth - t.containerWidth || r > 0 && 0 === o))
                            return !0;
                        return !0
                    }(h, f) && a.preventDefault()
                }
            }
            function h() {
                t.settings.swipeEasing && (clearInterval(a),
                a = setInterval((function() {
                    t.isInitialized ? clearInterval(a) : i.x || i.y ? Math.abs(i.x) < .01 && Math.abs(i.y) < .01 ? clearInterval(a) : (s(30 * i.x, 30 * i.y),
                    i.x *= .8,
                    i.y *= .8) : clearInterval(a)
                }
                ), 10))
            }
        }
    }
      , C = function(t, e) {
        var r = this;
        if (void 0 === e && (e = {}),
        "string" == typeof t && (t = document.querySelector(t)),
        !t || !t.nodeName)
            throw new Error("no element is specified to initialize PerfectScrollbar");
        for (var n in this.element = t,
        t.classList.add(h),
        this.settings = {
            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollingThreshold: 1e3,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !0,
            wheelSpeed: 1
        },
        e)
            this.settings[n] = e[n];
        this.containerWidth = null,
        this.containerHeight = null,
        this.contentWidth = null,
        this.contentHeight = null;
        var i, l, c = function() {
            return t.classList.add(m.focus)
        }, d = function() {
            return t.classList.remove(m.focus)
        };
        this.isRtl = "rtl" === o(t).direction,
        !0 === this.isRtl && t.classList.add(f),
        this.isNegativeScroll = (l = t.scrollLeft,
        t.scrollLeft = -1,
        i = t.scrollLeft < 0,
        t.scrollLeft = l,
        i),
        this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0,
        this.event = new _,
        this.ownerDocument = t.ownerDocument || document,
        this.scrollbarXRail = s(p.rail("x")),
        t.appendChild(this.scrollbarXRail),
        this.scrollbarX = s(p.thumb("x")),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", c),
        this.event.bind(this.scrollbarX, "blur", d),
        this.scrollbarXActive = null,
        this.scrollbarXWidth = null,
        this.scrollbarXLeft = null;
        var u = o(this.scrollbarXRail);
        this.scrollbarXBottom = parseInt(u.bottom, 10),
        isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1,
        this.scrollbarXTop = T(u.top)) : this.isScrollbarXUsingBottom = !0,
        this.railBorderXWidth = T(u.borderLeftWidth) + T(u.borderRightWidth),
        a(this.scrollbarXRail, {
            display: "block"
        }),
        this.railXMarginWidth = T(u.marginLeft) + T(u.marginRight),
        a(this.scrollbarXRail, {
            display: ""
        }),
        this.railXWidth = null,
        this.railXRatio = null,
        this.scrollbarYRail = s(p.rail("y")),
        t.appendChild(this.scrollbarYRail),
        this.scrollbarY = s(p.thumb("y")),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", c),
        this.event.bind(this.scrollbarY, "blur", d),
        this.scrollbarYActive = null,
        this.scrollbarYHeight = null,
        this.scrollbarYTop = null;
        var g = o(this.scrollbarYRail);
        this.scrollbarYRight = parseInt(g.right, 10),
        isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1,
        this.scrollbarYLeft = T(g.left)) : this.isScrollbarYUsingRight = !0,
        this.scrollbarYOuterWidth = this.isRtl ? function(t) {
            var e = o(t);
            return T(e.width) + T(e.paddingLeft) + T(e.paddingRight) + T(e.borderLeftWidth) + T(e.borderRightWidth)
        }(this.scrollbarY) : null,
        this.railBorderYWidth = T(g.borderTopWidth) + T(g.borderBottomWidth),
        a(this.scrollbarYRail, {
            display: "block"
        }),
        this.railYMarginHeight = T(g.marginTop) + T(g.marginBottom),
        a(this.scrollbarYRail, {
            display: ""
        }),
        this.railYHeight = null,
        this.railYRatio = null,
        this.reach = {
            x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
            y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
        },
        this.isAlive = !0,
        this.settings.handlers.forEach((function(t) {
            return k[t](r)
        }
        )),
        this.lastScrollTop = Math.floor(t.scrollTop),
        this.lastScrollLeft = t.scrollLeft,
        this.event.bind(this.element, "scroll", (function(t) {
            return r.onScroll(t)
        }
        )),
        L(this)
    };
    C.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0,
        a(this.scrollbarXRail, {
            display: "block"
        }),
        a(this.scrollbarYRail, {
            display: "block"
        }),
        this.railXMarginWidth = T(o(this.scrollbarXRail).marginLeft) + T(o(this.scrollbarXRail).marginRight),
        this.railYMarginHeight = T(o(this.scrollbarYRail).marginTop) + T(o(this.scrollbarYRail).marginBottom),
        a(this.scrollbarXRail, {
            display: "none"
        }),
        a(this.scrollbarYRail, {
            display: "none"
        }),
        L(this),
        S(this, "top", 0, !1, !0),
        S(this, "left", 0, !1, !0),
        a(this.scrollbarXRail, {
            display: ""
        }),
        a(this.scrollbarYRail, {
            display: ""
        }))
    }
    ,
    C.prototype.onScroll = function(t) {
        this.isAlive && (L(this),
        S(this, "top", this.element.scrollTop - this.lastScrollTop),
        S(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        this.lastScrollTop = Math.floor(this.element.scrollTop),
        this.lastScrollLeft = this.element.scrollLeft)
    }
    ,
    C.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(),
        d(this.scrollbarX),
        d(this.scrollbarY),
        d(this.scrollbarXRail),
        d(this.scrollbarYRail),
        this.removePsClasses(),
        this.element = null,
        this.scrollbarX = null,
        this.scrollbarY = null,
        this.scrollbarXRail = null,
        this.scrollbarYRail = null,
        this.isAlive = !1)
    }
    ,
    C.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter((function(t) {
            return !t.match(/^ps([-_].+|)$/)
        }
        )).join(" ")
    }
    ;
    var M = C;
    e.default = class {
        constructor() {
            this.bindAll(),
            this.ui = {
                el: document.querySelector(".tl-tracks"),
                sections: document.querySelectorAll("[data-timeline]"),
                heightEl: null,
                customScrollbar: document.getElementById("#custom-scroll-page-wrapper")
            },
            this.state = {
                total: this.ui.sections.length,
                scroll: {
                    target: 0,
                    current: 0,
                    ease: .08
                },
                bounds: {
                    height: n.default.windowHeight,
                    scrollHeight: 0,
                    threshold: 100
                },
                isResizing: !1
            },
            this.sections = null,
            this.resetFlag = !1,
            this.customScrollbar = document.getElementById("custom-scroll-page-wrapper"),
            this.animations = null,
            this.init()
        }
        bindAll() {
            ["onScroll", "render"].forEach(t=>this[t] = this[t].bind(this))
        }
        render() {
            const {scroll: t} = this.state;
            document.body.classList.contains("q-scroll-prevented") ? t.current += 0 : t.current += (t.target - t.current) * t.ease,
            t.current < .1 && (t.current = 0),
            0 != t.target && 0 != t.current || (this.resetProgress(),
            !this.resetFlag && this.resetProgress()),
            t.current > .1 && (this.resetFlag = !1),
            Math.abs(t.target - t.current) > 3e3 && !document.body.classList.contains("disable-header-info") ? document.body.classList.add("disable-header-info") : Math.abs(t.target - t.current) <= 3e3 && document.body.classList.contains("disable-header-info") && document.body.classList.remove("disable-header-info"),
            this.transformSections(),
            this.updateOtherSections(),
            requestAnimationFrame(this.render)
        }
        updateClasses(t) {
            const e = document.querySelector("#" + t.dataset.timeline)
              , r = document.querySelector("#" + n.default.activeSection);
            if (r.classList.contains("-active") || (document.querySelectorAll(".timeline").forEach(t=>{
                t.classList.remove("-active")
            }
            ),
            r.classList.add("-active")),
            e.dataset.activeTimeline) {
                const t = e[(n.default.forwards ? "previous" : "next") + "ElementSibling"];
                t && e.dataset.activeTimeline && (t.dataset.activeTimeline = !1)
            } else {
                e.dataset.activeTimeline = !0;
                const t = e[(n.default.forwards ? "next" : "previous") + "ElementSibling"];
                t && t.querySelectorAll("[data-src]") && new i.default(t.querySelectorAll("[data-src]"))
            }
        }
        resetProgress() {
            this.resetFlag = !0
        }
        updateProgress(t) {
            this.updateClasses(t);
            const e = Math.min(Math.max((this.state.scroll.current - t.offsetTop + n.default.windowHeight) / t.offsetHeight, 0), 1);
            n.default.progress[t.dataset.timeline] = e
        }
        updateOtherSections() {
            if (n.default.activeTimeline && n.default.progress[n.default.activeTimeline] > .5) {
                const t = Object.keys(n.default.progress).indexOf(n.default.activeTimeline);
                Object.keys(n.default.progress).forEach((e,r)=>{
                    r < t && (n.default.progress[e] = 1),
                    r > t && (n.default.progress[e] = 0)
                }
                )
            }
        }
        transformSections() {
            const {total: t, isResizing: e, scroll: r} = this.state
              , i = `translate3d(0, ${-r.current}px, 0)`;
            for (let r = 0; r < t; r++) {
                const t = this.sections[r]
                  , {el: o, bounds: a} = t;
                this.isVisible(a) || e ? (Object.assign(t, {
                    out: !1
                }),
                o.style.transform = i,
                n.default.activeTimeline = o.dataset.timeline,
                this.updateProgress(o)) : t.out || (Object.assign(t, {
                    out: !0
                }),
                o.style.transform = i)
            }
        }
        isVisible(t) {
            const {height: e, threshold: r} = this.state.bounds
              , {current: n} = this.state.scroll
              , {top: i, bottom: o} = t;
            return i - n < r + e && o - n > -r
        }
        getSections() {
            this.ui.sections && (this.sections = [],
            this.ui.sections.forEach(t=>{
                t.style.transform = "translate3d(0, 0, 0)";
                const {top: e, bottom: r} = t.getBoundingClientRect()
                  , n = {
                    el: t,
                    bounds: {
                        top: e,
                        bottom: r
                    },
                    out: !0
                };
                this.sections.push(n)
            }
            ))
        }
        setInitial() {
            const {el: t} = this.ui;
            Object.assign(t.style, {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }),
            document.body.classList.add("-smooth-scroll")
        }
        setScrollHeight() {
            const {total: t, bounds: e} = this.state;
            this.ui.heightEl || (this.ui.heightEl = document.createElement("div"),
            this.ui.heightEl.setAttribute("id", "scroll-height"),
            this.customScrollbar.appendChild(this.ui.heightEl));
            const {bottom: r} = this.ui.sections[t - 1].getBoundingClientRect();
            e.scrollHeight = r,
            this.ui.heightEl.style.height = r + "px"
        }
        onScroll() {
            const {scroll: t} = this.state;
            t.target = this.customScrollbar.scrollTop
        }
        addListeners() {
            this.customScrollbar.addEventListener("ps-scroll-y", this.onScroll)
        }
        setSectionsHeight() {
            Object.keys(n.default.sectionsDuration).forEach(t=>{
                document.querySelector(".tl-track-" + t).style.height = n.default.globalSpeed * n.default.sectionsDuration[t] * n.default.windowHeight + "px"
            }
            )
        }
        customScrollBar() {
            const t = new M("#custom-scroll-page-wrapper",{
                minScrollbarLength: 43,
                maxScrollbarLength: 43,
                suppressScrollX: !0,
                wheelSpeed: 1
            });
            window.addEventListener("resize", (function() {
                t.update()
            }
            ))
        }
        init() {
            this.setSectionsHeight(),
            this.setInitial(),
            this.setScrollHeight(),
            this.getSections(),
            this.addListeners(),
            this.customScrollBar(),
            requestAnimationFrame(this.render),
            window.addEventListener("orientationchange", (function(t) {
                document.body.style.visibility = "hidden",
                location.reload()
            }
            ))
        }
    }
}
, function(t, e, r) {
    r(0),
    r(10),
    r(3),
    r(2),
    r(4),
    r(5),
    r(6),
    r(7),
    r(8),
    r(11),
    r(12),
    r(13),
    r(14),
    r(15),
    r(16),
    r(19),
    r(17),
    t.exports = r(18)
}
, function(t, e, r) {
    "use strict";
    r.r(e),
    r.d(e, "callstack", (function() {
        return c
    }
    ));
    var n = r(0)
      , i = r(4)
      , o = r(8)
      , a = r(6)
      , s = r(7);
    const l = {
        mobile() {},
        desktop() {},
        default() {
            n.default.isMobile ? this.mobile() : this.desktop()
        },
        intro() {
            new s.default,
            new a.default,
            new o.default,
            new i.default
        }
    }
      , c = ()=>{
        n.default.initial && l.intro(),
        l.default(),
        n.default.initial = !1
    }
    ;
    window.addEventListener("DOMContentLoaded", ()=>{
        n.default.initial = !0,
        document.documentElement.classList.add("-loaded")
    }
    ),
    window.addEventListener("load", ()=>{
        c()
    }
    )
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(3)
      , a = r(2);
    i.default.timelines.awards = (()=>{
        const t = document.getElementById("custom-scroll-page-wrapper")
          , e = document.querySelector("#awards")
          , r = document.querySelectorAll(".awards-showcase > div")
          , s = document.querySelectorAll(".awards-info > div")
          , l = document.querySelectorAll(".awards-bg-inner > .q-button-arrow")
          , c = document.querySelectorAll("#awards video");
        let d = !1
          , u = !1;
        const h = document.querySelector(".q-header-layouts")
          , f = document.querySelector(".q-header-awards");
        let p = !1;
        const m = document.querySelector(".q-header-showcase-icon .q-text-scroll")
          , g = document.querySelector(".q-header-showcase-icon .q-text-wiggle")
          , y = document.querySelector(".q-header-showcase-icon .q-text-watch");
        let v = ".q-header-showcase-icon .q-text .-active"
          , w = !1;
        const b = document.querySelector(".q-header-showcase-icon .q-scroll")
          , _ = document.querySelector(".q-header-showcase-icon .q-play");
        let x, S, T = !1;
        const q = {
            val: 0,
            buffer: 0,
            openVal: 0,
            isOpened: !1
        }
          , L = r.length - 1;
        let A = !1
          , O = !1;
        c.forEach(t=>{
            t.defaultPlaybackRate = 1.5
        }
        ),
        n.a.set(l[1], {
            y: 20,
            autoAlpha: 0
        });
        const k = (t,e)=>{
            e ? n.a.to(t, {
                autoAlpha: 1,
                y: 0,
                duration: .3,
                ease: "power1.in"
            }) : n.a.to(t, {
                autoAlpha: 0,
                y: 20,
                duration: .3,
                ease: "power1.out"
            })
        }
          , C = t=>{
            r.forEach((e,r)=>{
                t == e.dataset.index - 1 ? (n.a.set(e, {
                    autoAlpha: 1
                }),
                c[r] && c[r].play()) : (n.a.set(e, {
                    autoAlpha: 0
                }),
                c[r] && c[r].pause())
            }
            ),
            s.forEach((e,r)=>{
                t == e.dataset.index - 1 ? (k(e, !0),
                1 === r ? x = n.a.to(document.querySelector(".awards-bg-inner:nth-child(2)"), {
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    onUpdate: ()=>{
                        x.time() > .1 && !T && (Object(a.changeHeaderSkin)("light", ".awards-bg .awards-bg-inner:nth-child(2)"),
                        T = !0),
                        i.default.progress.awards >= .669 && T && (Object(a.changeHeaderSkin)("default"),
                        T = !1),
                        d || (d = !0,
                        k(l[0], !1)),
                        x.progress() > .5 && i.default.forwards && !u && (u = !0,
                        k(l[1], !0))
                    }
                }) : S = n.a.to(document.querySelector(".awards-bg-inner:nth-child(2)"), {
                    x: "-100%",
                    duration: 1,
                    ease: "power3.out",
                    onUpdate: ()=>{
                        S.time() > .3 && T && !i.default.forwards && (Object(a.changeHeaderSkin)("light", ".awards-bg .awards-bg-inner:nth-child(1)"),
                        T = !1),
                        d && (d = !1,
                        u = !1,
                        k(l[1], !1),
                        k(l[0], !0))
                    }
                })) : k(e, !1)
            }
            )
        }
          , M = Object(a.debounce)((function() {
            O || (O = !0,
            o.default.bounceLetters(!0),
            setTimeout(()=>{
                o.default.bounceLetters(),
                O = !1
            }
            , 300))
        }
        ), 100, !0);
        t.addEventListener("ps-scroll-y", ()=>{
            A && M()
        }
        );
        const I = n.a.timeline({
            paused: !0,
            onStart: ()=>{
                C(0)
            }
            ,
            onUpdate: ()=>{
                i.default.activeSection = "awards",
                i.default.progress.awards > .669 && !p ? (Object(a.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(a.headerInfoAnimateIn)(h),
                p = !0) : i.default.progress.awards <= .669 && p && (Object(a.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(a.headerInfoAnimateIn)(f),
                p = !1),
                i.default.progress.awards < .39 && !w ? (b.classList.contains("-wiggle") || (Object(a.headerIconTextAnimateOut)(v),
                Object(a.headerIconTextAnimateIn)(g),
                b.classList.add("-wiggle", "-active")),
                _.classList.remove("-active"),
                w = !0) : i.default.progress.awards >= .39 && i.default.progress.awards <= .669 && w ? (Object(a.headerIconTextAnimateOut)(v),
                Object(a.headerIconTextAnimateIn)(y),
                b.classList.remove("-wiggle", "-active"),
                _.classList.add("-active"),
                w = !1) : i.default.progress.awards > .669 && !w && (Object(a.headerIconTextAnimateOut)(v),
                Object(a.headerIconTextAnimateIn)(m),
                _.classList.remove("-active"),
                b.classList.add("-active"),
                b.classList.contains("-wiggle") && b.classList.remove("-wiggle"),
                w = !0),
                i.default.progress.awards < .39 && !T ? (Object(a.changeHeaderSkin)("default"),
                T = !0) : i.default.progress.awards >= .39 && i.default.progress.awards < .511 && T && i.default.forwards ? (Object(a.changeHeaderSkin)("light", ".awards-bg .awards-bg-inner:nth-child(1)"),
                T = !1) : i.default.progress.awards >= .511 && i.default.progress.awards < .669 && !T && !i.default.forwards ? (Object(a.changeHeaderSkin)("light", ".awards-bg .awards-bg-inner:nth-child(2)"),
                T = !0) : i.default.progress.awards >= .669 && T && (Object(a.changeHeaderSkin)("default"),
                T = !1)
            }
        });
        return i.default.windowWidth > 1024 && n.a.set(document.querySelector(".portfolio-text-content"), {
            y: -20,
            opacity: 0
        }),
        I.addLabel("moveSections").from(e, {
            autoAlpha: 0,
            delay: 3
        }, "moveSections").from(e, {
            x: "-100%",
            duration: 15,
            delay: 3,
            ease: "power1.inOut",
            onUpdate: ()=>{
                i.default.progress.awards > .385 ? Object(a.changeScrollSkin)(!0) : Object(a.changeScrollSkin)(!1)
            }
        }, "moveSections").to("#letters", {
            x: "100%",
            duration: 15,
            ease: "power1.inOut",
            delay: 3,
            onUpdate: ()=>{
                A = !0
            }
            ,
            onComplete: ()=>{
                A = !1,
                i.default.windowWidth > 1024 && n.a.to(".portfolio-text-content", {
                    y: 20,
                    opacity: 0,
                    duration: .4
                })
            }
        }, "moveSections").to([".letters-tagline", ".letters-description"], {
            x: -500,
            duration: 15,
            delay: 3,
            ease: "power1.inOut"
        }, "moveSections").from(".awards-projects", {
            x: -500,
            duration: 12,
            delay: 3
        }, "moveSections").from(".awards-info", {
            x: -500,
            duration: 15
        }, "moveSections").add("showcase").to(q, {
            val: L,
            roundProps: "val",
            delay: 2,
            duration: 10,
            onUpdate: ()=>{
                q.buffer !== q.val && C(q.val),
                q.buffer = q.val
            }
        }, "showcase").from("#elements", {
            autoAlpha: 0,
            duration: .1
        }).addLabel("moveSectionsOut").to(".awards-projects", {
            x: -300,
            duration: 15
        }, "moveSectionsOut").to(".awards-info", {
            x: -300,
            duration: 15
        }, "moveSectionsOut").to(e, {
            x: "-100%",
            duration: 15,
            onUpdate: ()=>{
                i.default.progress.awards > .67 ? Object(a.changeScrollSkin)(!1) : Object(a.changeScrollSkin)(!0)
            }
        }, "moveSectionsOut").from(".elements-vertical-text-holder", {
            x: 500,
            duration: 15
        }, "moveSectionsOut"),
        I
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(2);
    i.default.timelines.demos = (()=>{
        const t = document.querySelector(".demos-front")
          , e = document.querySelector(".demos-back")
          , r = document.querySelector("#shop")
          , a = document.querySelector(".shop-hero")
          , s = document.querySelector(".q-header");
        let l, c, d;
        i.default.windowWidth > 768 ? (l = 1,
        d = 1) : i.default.windowWidth <= 680 && i.default.windowWidth > i.default.windowHeight ? (l = .9,
        d = 1) : i.default.windowWidth <= 680 && i.default.windowWidth <= i.default.windowHeight ? (l = 2,
        d = 1) : (l = 1.8,
        d = 1),
        c = i.default.windowWidth <= 680 && i.default.windowWidth <= i.default.windowHeight ? .68 : i.default.windowWidth <= 680 && i.default.windowWidth > i.default.windowHeight ? 1.5 : 1;
        const u = document.querySelector(".q-header-demos")
          , h = document.querySelector(".q-header-shop");
        let f = !1;
        const p = document.querySelector(".q-header-showcase-icon .q-text-scroll")
          , m = document.querySelector(".q-header-showcase-icon .q-text-focus");
        const g = document.querySelector(".q-header-showcase-icon .q-scroll")
          , y = document.querySelector(".q-header-showcase-icon .q-focus")
          , v = n.a.timeline({
            paused: !0,
            onStart: ()=>{
                s.classList.add("q-header-show")
            }
            ,
            onReverseComplete: ()=>{
                s.classList.remove("q-header-show")
            }
            ,
            onUpdate: ()=>{
                i.default.activeSection = "demos",
                n.a.to("#wall", {
                    y: -i.default.windowHeight * i.default.progress.demos * 2.8 * c
                }),
                n.a.to(t, {
                    y: (-t.offsetHeight + i.default.windowHeight) * (1.3 * i.default.progress.demos * l * d),
                    force3D: !0
                }),
                n.a.to(e, {
                    y: (-e.offsetHeight + i.default.windowHeight) * (1.2 * i.default.progress.demos * l),
                    force3D: !0
                }),
                i.default.progress.demos > .8 && !f ? (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(h),
                Object(o.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(o.headerIconTextAnimateIn)(m),
                g.classList.remove("-active"),
                y.classList.add("-active"),
                f = !0) : i.default.progress.demos <= .8 && f && (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(u),
                Object(o.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(o.headerIconTextAnimateIn)(p),
                g.classList.add("-active"),
                y.classList.remove("-active"),
                f = !1)
            }
        });
        return v.addLabel("demo-intro").to(r, {
            duration: 5
        }).addLabel("crossfade").from(r, {
            autoAlpha: 0,
            duration: 1e-4,
            delay: 4,
            onStart: ()=>{
                Object(o.changeScrollSkin)(!0)
            }
            ,
            onReverseComplete: ()=>{
                Object(o.changeScrollSkin)(!1)
            }
        }, "crossfade").from(r, {
            x: "100%",
            duration: 9,
            delay: 4,
            ease: "linear",
            onStart: ()=>{
                i.default.windowWidth > 1024 && n.a.set(r, {
                    height: "100%",
                    zIndex: 2e3,
                    pointerEvents: "none"
                })
            }
        }, "crossfade").fromTo(a, {
            scale: 1.4
        }, {
            scale: 1,
            duration: 9,
            delay: 4,
            ease: "linear"
        }, "crossfade"),
        v
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(2);
    i.default.timelines.elements = (()=>{
        const t = document.querySelectorAll(".elements-vertical-col")
          , e = document.querySelector(".elements-vertical-text-holder")
          , r = document.querySelector(".elements-horizontal-text-holder")
          , a = document.querySelectorAll(".elements-horizontal-row")
          , s = [.5, .5, .2, .3, .4, .5]
          , l = [.6, .6, .1, .2, .4]
          , c = document.querySelectorAll(".module-screen__text-content")
          , d = document.querySelectorAll(".module-screen:not(.-ms-1)")
          , u = document.querySelectorAll(".-c")
          , h = document.querySelectorAll(".-l")
          , f = document.querySelectorAll(".-r")
          , p = document.querySelector(".modules-section .q-button-arrow");
        let m;
        window.innerWidth;
        const g = document.querySelector(".characters-horizontal-screen")
          , y = g ? g.getAttribute("data-row-num") : null
          , v = g ? g.getAttribute("data-characters-num") : null
          , w = Object(o.sortNumsFromMiddle)(y)
          , b = Object(o.sortNumsFromMiddle)(v)
          , _ = document.querySelectorAll(".characters-horizontal-row");
        let x;
        const S = document.querySelector(".q-header-layouts")
          , T = document.querySelector(".q-header-modules")
          , q = document.querySelector(".q-header-goodbye");
        let L = ".q-header-middle-info-right .-active"
          , A = !1;
        const O = document.querySelector(".q-header-showcase-icon .q-text-scroll")
          , k = document.querySelector(".q-header-showcase-icon .q-text-focus");
        let C = ".q-header-showcase-icon .q-text .-active";
        const M = document.querySelector(".q-header-showcase-icon .q-scroll")
          , I = document.querySelector(".q-header-showcase-icon .q-focus");
        let E = !1
          , P = 0
          , W = 0;
        let R, Y;
        const j = {
            verTextAnimatedOut: !1,
            horTextAnimatedIn: !1,
            horTextAnimatedOut: !1,
            modulesTextAnimatedIn: !1,
            modulesButtonAnimatedIn: !1
        };
        i.default.windowWidth <= 768 ? (R = [.1, .6, 1.2, 1.8, 2.5],
        Y = .2) : (R = [0, .7, 1.5, 2.3, 3.1],
        Y = .1);
        let H = ()=>(m = i.default.windowWidth > 768 ? "100%" : i.default.windowWidth > 668 ? "180%" : "210%",
        m)
          , B = ()=>(x = i.default.windowWidth > 768 ? 220 : i.default.windowWidth > 680 ? 320 : 400,
        x);
        B(),
        H(),
        window.addEventListener("resize", ()=>{
            B(),
            H()
        }
        ),
        n.a.set(p, {
            autoAlpha: 0,
            y: 20
        }),
        n.a.to([r, c], {
            autoAlpha: 0,
            y: 20
        });
        const X = n.a.timeline({
            paused: !0,
            onUpdate: ()=>{
                i.default.activeSection = "elements",
                i.default.progress.elements >= .377 && i.default.progress.elements <= .794 && !A ? (Object(o.headerInfoAnimateOut)(L),
                Object(o.headerInfoAnimateIn)(T),
                Object(o.headerIconTextAnimateOut)(C),
                Object(o.headerIconTextAnimateIn)(k),
                M.classList.remove("-active"),
                I.classList.add("-active"),
                A = !0) : i.default.progress.elements > .794 && A ? (Object(o.headerInfoAnimateOut)(L),
                Object(o.headerInfoAnimateIn)(q),
                Object(o.headerIconTextAnimateOut)(C),
                Object(o.headerIconTextAnimateIn)(O),
                M.classList.add("-active"),
                I.classList.remove("-active"),
                A = !1) : i.default.progress.elements < .377 && A && (Object(o.headerInfoAnimateOut)(L),
                Object(o.headerInfoAnimateIn)(S),
                Object(o.headerIconTextAnimateOut)(C),
                Object(o.headerIconTextAnimateIn)(O),
                M.classList.add("-active"),
                I.classList.remove("-active"),
                A = !1),
                i.default.progress.elements < .377 && !E ? (Object(o.changeHeaderSkin)("default"),
                E = !0) : i.default.progress.elements >= .377 && i.default.progress.elements < .446 && E ? (Object(o.changeHeaderSkin)("light", ".-ms-1 .elements-screen__bg"),
                E = !1) : i.default.progress.elements >= .446 && i.default.progress.elements < .524 && !E ? (Object(o.changeHeaderSkin)("light", ".module-screen:nth-of-type(2)"),
                E = !0) : i.default.progress.elements >= .524 && i.default.progress.elements < .615 && E ? (Object(o.changeHeaderSkin)("light", ".module-screen:nth-of-type(3)"),
                E = !1) : i.default.progress.elements >= .615 && i.default.progress.elements < .703 && !E ? (Object(o.changeHeaderSkin)("light", ".module-screen:nth-of-type(4)"),
                E = !0) : i.default.progress.elements >= .703 && i.default.progress.elements < .794 && E ? (Object(o.changeHeaderSkin)("light", ".module-screen:nth-of-type(5)"),
                E = !1) : i.default.progress.elements >= .794 && !E && (Object(o.changeHeaderSkin)("default"),
                E = !0),
                i.default.progress.elements > .2 && n.a.to(r, {
                    y: -20,
                    autoAlpha: 0,
                    duration: .2
                })
            }
        });
        return X.addLabel("crossfade-elements").to(e, {
            duration: .05,
            delay: .2,
            onUpdate: ()=>{
                !j.verTextAnimatedOut && i.default.forwards && (j.verTextAnimatedOut = !0,
                n.a.to(e, {
                    y: -20,
                    autoAlpha: 0,
                    duration: .1
                })),
                j.verTextAnimatedOut && !i.default.forwards && (j.verTextAnimatedOut = !1,
                n.a.to(e, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .2
                }))
            }
            ,
            onComplete: ()=>{
                n.a.to(e, {
                    y: -20,
                    autoAlpha: 0,
                    duration: .1
                })
            }
        }, "crossfade-elements"),
        t.forEach((t,e)=>{
            X.fromTo(t, {
                y: e % 2 == 0 ? "-100%" : "100%"
            }, {
                y: e % 2 == 0 ? "100%" : "-100%",
                duration: 1.8 + s[e]
            }, "crossfade-elements")
        }
        ),
        X.from(r, {
            duration: .1,
            delay: 1.2,
            onUpdate: ()=>{
                !j.horTextAnimatedIn && i.default.forwards && (j.horTextAnimatedIn = !0,
                n.a.to(r, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .3
                })),
                j.horTextAnimatedIn && !i.default.forwards && (j.horTextAnimatedIn = !1,
                n.a.to(r, {
                    y: 20,
                    autoAlpha: 0,
                    duration: .2
                }))
            }
        }, "crossfade-elements").to(r, {
            duration: .01,
            delay: 1.68,
            onUpdate: ()=>{
                !j.horTextAnimatedOut && i.default.forwards && (j.horTextAnimatedOut = !0,
                n.a.to(r, {
                    y: -20,
                    autoAlpha: 0,
                    duration: .1
                })),
                j.horTextAnimatedOut && !i.default.forwards && (j.horTextAnimatedOut = !1,
                n.a.to(r, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .2
                }))
            }
            ,
            onComplete: ()=>{
                j.horTextAnimatedOut = !0,
                n.a.to(r, {
                    y: -20,
                    autoAlpha: 0,
                    duration: .1
                })
            }
        }, "crossfade-elements").to(awards, {
            autoAlpha: 0,
            duration: .01
        }),
        a.forEach((t,e)=>{
            X.fromTo(t, {
                x: e % 2 == 0 ? "-100%" : "100%"
            }, {
                x: e % 2 == 0 ? "100%" : "-100%",
                duration: 2 + l[e],
                delay: 1.5
            }, "crossfade-elements")
        }
        ),
        X.from(".elements-screen__bg", {
            scaleX: 0,
            duration: .5,
            delay: 2.9,
            onUpdate: ()=>{
                i.default.windowWidth > 768 ? i.default.progress.elements > .375 ? Object(o.changeScrollSkin)(!0) : Object(o.changeScrollSkin)(!1) : i.default.progress.elements > .345 ? Object(o.changeScrollSkin)(!0) : Object(o.changeScrollSkin)(!1),
                !j.modulesButtonAnimatedIn && i.default.forwards && (i.default.progress.elements > .375 && i.default.windowWidth > 768 || i.default.progress.elements > .345 && i.default.windowWidth <= 768) ? (j.modulesButtonAnimatedIn = !0,
                n.a.to(p, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .3
                })) : j.modulesButtonAnimatedIn && !i.default.forwards && (i.default.progress.elements <= .375 && i.default.windowWidth > 768 || i.default.progress.elements <= .345 && i.default.windowWidth <= 768) && (j.modulesButtonAnimatedIn = !1,
                n.a.to(p, {
                    y: 20,
                    autoAlpha: 0,
                    duration: .3
                }))
            }
        }, "crossfade-elements").to(c, {
            duration: .2,
            delay: .3 + 2.8,
            onUpdate: ()=>{
                !j.modulesTextAnimatedIn && i.default.forwards && (j.modulesTextAnimatedIn = !0,
                n.a.to(c, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .3
                })),
                j.modulesTextAnimatedIn && !i.default.forwards && (j.modulesTextAnimatedIn = !1,
                n.a.to(c, {
                    y: 20,
                    autoAlpha: 0,
                    duration: .3
                }))
            }
        }, "crossfade-elements").from(u, {
            y: "-100%",
            duration: .5,
            delay: 3,
            ease: "power3.in"
        }, "crossfade-elements").to(u, {
            y: "600vh",
            duration: 5.3,
            delay: R[0] + 3.5,
            ease: "sine.out"
        }, "crossfade-elements").from(h, {
            y: H,
            duration: .5,
            delay: 3,
            ease: "power3.in"
        }, "crossfade-elements").to(h, {
            y: "-650vh",
            duration: 5.1,
            delay: R[0] + 3.5,
            ease: "sine.out"
        }, "crossfade-elements").from(f, {
            y: "100%",
            duration: .5,
            delay: 3,
            ease: "power3.in"
        }, "crossfade-elements").to(f, {
            y: "-650vh",
            duration: 5.3,
            delay: R[0] + 3.5,
            ease: "sine.out"
        }, "crossfade-elements").from(d, {
            opacity: 0,
            duration: 1e-5,
            delay: 3.4
        }, "crossfade-elements").to(".-ms-1", {
            y: "-100%",
            delay: R[0] + 3.5
        }, "crossfade-elements").to(".-ms-1 .module-screen__wrapper", {
            y: "100%",
            delay: R[0] + 3.5
        }, "crossfade-elements").to(".-ms-2", {
            y: "-100%",
            delay: R[1] + 3.5
        }, "crossfade-elements").to(".-ms-2 .module-screen__wrapper", {
            y: "100%",
            delay: R[1] + 3.5
        }, "crossfade-elements").to(".-ms-3", {
            y: "-100%",
            delay: R[2] + 3.5
        }, "crossfade-elements").to(".-ms-3 .module-screen__wrapper", {
            y: "100%",
            delay: R[2] + 3.5
        }, "crossfade-elements").to(".elements-screen__bg", {
            autoAlpha: 0,
            delay: R[2] + 3.5
        }, "crossfade-elements").to(".-ms-4", {
            y: "-100%",
            delay: R[3] + 3.5
        }, "crossfade-elements").to(".-ms-4 .module-screen__wrapper", {
            y: "100%",
            delay: R[3] + 3.5
        }, "crossfade-elements").to(".-ms-5", {
            y: "-100%",
            delay: R[4] + 3.5,
            onStart: ()=>{
                n.a.to(p, {
                    y: 20,
                    autoAlpha: 0,
                    duration: .3
                })
            }
            ,
            onReverseComplete: ()=>{
                n.a.to(p, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .3
                })
            }
        }, "crossfade-elements").to(".-ms-5 .module-screen__wrapper", {
            y: "100%",
            delay: R[4] + 3.5,
            onUpdate: ()=>{
                i.default.windowWidth > 768 ? i.default.progress.elements > .745 ? Object(o.changeScrollSkin)(!1) : Object(o.changeScrollSkin)(!0) : i.default.progress.elements > .63 ? Object(o.changeScrollSkin)(!1) : Object(o.changeScrollSkin)(!0)
            }
        }, "crossfade-elements"),
        w.forEach(t=>{
            t.length && (t.forEach(t=>{
                W = 0,
                b.forEach(e=>{
                    e.length ? (e.forEach(e=>{
                        X.from(document.querySelector(".-characters-row--" + t).querySelector(".-characters-item-" + e + " svg path"), {
                            force3D: !1,
                            duration: .15 + Y,
                            rotationZ: 50,
                            y: x,
                            x: 50,
                            delay: R[4] + P + W + .1 + 3.5
                        }, "crossfade-elements")
                    }
                    ),
                    W += Y) : X.from(document.querySelector(".-characters-row--" + t).querySelector(".-characters-item-" + e + " svg path"), {
                        force3D: !1,
                        duration: .25,
                        rotationZ: 50,
                        y: x,
                        x: 50,
                        delay: R[4] + P + W + .1 + 3.5
                    }, "crossfade-elements")
                }
                )
            }
            ),
            P += .1)
        }
        ),
        _.forEach(t=>{
            X.to(t.querySelectorAll(".characters-horizontal-item svg path"), {
                force3D: !1,
                transformOrigin: "center",
                scale: 0,
                stagger: Y,
                duration: .34,
                delay: 7.9 - 3 * Y
            }, "crossfade-elements")
        }
        ),
        X
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0);
    i.default.timelines.intro = (()=>{
        const t = [...document.querySelectorAll("#bridge-svg path")];
        let e = document.querySelectorAll(".q-header-showcase-icon .char")
          , r = ()=>{
            let e;
            i.default.windowWidth >= 1681 ? (e = 1,
            n.a.set(t[0], {
                attr: {
                    "data-x": -1.8,
                    "data-y": 1.5
                }
            })) : i.default.windowWidth > 1024 && i.default.windowWidth < 1681 ? (e = 1.1,
            n.a.set("#b", {
                attr: {
                    "data-x": -5.4,
                    "data-y": 2.4
                }
            }),
            i.default.windowHeight > 777 ? n.a.set("#i", {
                attr: {
                    "data-y": 90
                }
            }) : n.a.set("#i", {
                attr: {
                    "data-y": 45
                }
            }),
            n.a.set("#r", {
                attr: {
                    "data-y": -39
                }
            }),
            n.a.set("#g", {
                attr: {
                    "data-y": -39
                }
            }),
            n.a.set("#e", {
                attr: {
                    "data-y": 39
                }
            })) : i.default.windowWidth > 680 && i.default.windowWidth <= 1024 ? (e = 1.05,
            i.default.windowHeight > i.default.windowWidth ? n.a.set("#b", {
                attr: {
                    "data-x": -6,
                    "data-y": 1.6,
                    "data-scale": 1.205
                }
            }) : n.a.set("#b", {
                attr: {
                    "data-x": .6,
                    "data-y": 1.8
                }
            }),
            n.a.set("#r", {
                attr: {
                    "data-y": -51
                }
            }),
            n.a.set("#i", {
                attr: {
                    "data-y": 60
                }
            }),
            n.a.set("#g", {
                attr: {
                    "data-y": 54
                }
            }),
            n.a.set("#e", {
                attr: {
                    "data-y": -42
                }
            })) : i.default.windowWidth <= 680 && (e = .8,
            i.default.windowHeight >= i.default.windowWidth ? n.a.set("#b", {
                attr: {
                    "data-x": -9,
                    "data-y": 4,
                    "data-scale": 1.4
                }
            }) : n.a.set("#b", {
                attr: {
                    "data-x": -4,
                    "data-y": 5
                }
            }),
            n.a.set("#r", {
                attr: {
                    "data-y": -60
                }
            }),
            n.a.set("#i", {
                attr: {
                    "data-y": 60
                }
            }),
            n.a.set("#d", {
                attr: {
                    "data-y": -54
                }
            }),
            n.a.set("#g", {
                attr: {
                    "data-y": 84
                }
            }),
            n.a.set("#e", {
                attr: {
                    "data-y": -72
                }
            })),
            (e=>{
                t.forEach((t,r)=>{
                    let i = parseFloat(t.dataset.x) * window.innerWidth
                      , o = parseFloat(t.dataset.y) * window.innerHeight
                      , a = t.dataset.scale ? parseFloat(t.dataset.scale) : 1;
                    n.a.set(t, {
                        transformOrigin: "50% 50%",
                        scale: a * e * 25,
                        x: i,
                        y: o
                    })
                }
                )
            }
            )(e)
        }
        ;
        n.a.set(e, {
            y: 100,
            z: 0
        });
        const o = n.a.timeline({
            paused: !0,
            onStart: ()=>{
                r()
            }
            ,
            onUpdate: ()=>{
                i.default.activeSection = "intro",
                !i.default.forwards && i.default.progress.intro <= .167 && document.body.classList.contains("q-page-loading") && !document.body.classList.contains("q-scroll-prevented") && document.body.classList.add("q-scroll-prevented")
            }
        });
        return o.to(t, {
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            stagger: .1
        }).from(".site-info", {
            autoAlpha: 0,
            duration: .1,
            onStart: ()=>{
                n.a.set(".site-tagline, .site-description", {
                    y: 10,
                    opacity: 0
                })
            }
            ,
            onComplete: ()=>{
                n.a.to(".site-tagline, .site-description", {
                    y: 0,
                    opacity: 1,
                    duration: .4
                })
            }
        }),
        window.addEventListener("resize", ()=>{
            r()
        }
        ),
        o
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(3)
      , a = r(2);
    i.default.timelines.letters = (()=>{
        const t = document.querySelectorAll(".letters-letter")
          , e = document.querySelector(".letters-tagline")
          , r = document.querySelector(".letters-description");
        let s = document.querySelector(".q-header").offsetHeight
          , l = {
            animatingLettersDown: !1,
            animatingLettersLeft: !1,
            animatingBack: !1
        }
          , c = [];
        const d = document.querySelector(".q-header-showcase-icon .q-text-scroll")
          , u = document.querySelector(".q-header-showcase-icon .q-text-wiggle");
        let h = !1;
        const f = document.querySelector(".q-header-showcase-icon .q-scroll");
        window.addEventListener("resize", ()=>{
            o.default.setCircleSize(),
            l.animatingLettersDown && !l.animatingLettersLeft ? o.default.moveCirclesDown() : l.animatingLettersLeft && !l.animatingLettersDown && o.default.moveCirclesLeft()
        }
        );
        setTimeout(()=>{
            t.forEach(t=>c.push({
                top: i.default.windowHeight - t.offsetTop - t.offsetHeight - s,
                left: t.offsetLeft
            }))
        }
        , 100);
        n.a.set([e, r], {
            y: 10,
            opacity: 0
        });
        const p = n.a.timeline({
            paused: !0,
            onStart: ()=>{
                n.a.set([e, r], {
                    y: 10,
                    opacity: 0
                })
            }
            ,
            onComplete: ()=>{
                f.classList.remove("-wiggle")
            }
            ,
            onReverseComplete: ()=>{
                l = {
                    animatingLettersDown: !1,
                    animatingLettersLeft: !1,
                    animatingLettersZeroG: !1
                }
            }
            ,
            onUpdate: ()=>{
                i.default.activeSection = "letters",
                i.default.progress.letters < .55 && !h ? (f.classList.contains("-wiggle") && (Object(a.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(a.headerIconTextAnimateIn)(d),
                f.classList.remove("-wiggle")),
                h = !0) : i.default.progress.letters >= .55 && h && (f.classList.contains("-wiggle") || (Object(a.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(a.headerIconTextAnimateIn)(u),
                f.classList.add("-wiggle")),
                h = !1),
                i.default.progress.letters > .1 && (l.animatingLettersDown || !i.default.forwards || l.animatingBack || (l.animatingLettersDown = !0,
                o.default.animateLettersDown(),
                n.a.fromTo([e, r], {
                    y: 10,
                    opacity: 0,
                    duration: .4
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .4,
                    delay: .5
                }))),
                i.default.progress.letters > .6 && (l.animatingLettersLeft || !i.default.forwards || l.animatingBack || (l.animatingLettersLeft = !0,
                o.default.animateLettersLeft())),
                i.default.progress.letters < .6 && !i.default.forwards && !l.animatingBack && l.animatingLettersDown && (l.animatingBack = !0,
                o.default.stop(),
                t.forEach((t,e)=>{
                    t.classList.add("animate-letter-back"),
                    t.style.bottom = c[e].top + "px",
                    t.style.left = c[e].left + "px"
                }
                ),
                setTimeout(()=>{
                    o.default.reset(),
                    t.forEach(t=>t.classList.remove("animate-letter-back")),
                    l.animatingBack = !1,
                    l = {
                        animatingLettersDown: !1,
                        animatingLettersLeft: !1,
                        animatingLettersZeroG: !1
                    }
                }
                , 700),
                n.a.to([e, r], {
                    y: -10,
                    opacity: 0,
                    duration: .4
                }))
            }
        });
        return p.from(e, {
            duration: 1
        }),
        p
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(2);
    i.default.timelines.portfolio = (()=>{
        const t = document.querySelector("#portfolio")
          , e = t.querySelector(".portfolio-bg")
          , r = document.querySelector(".portfolio-hero")
          , a = document.querySelector(".portfolio-items")
          , s = document.querySelectorAll(".portfolio-item")
          , l = document.querySelector(".portfolio-text-content")
          , c = document.querySelector("#portfolio .q-button-corner")
          , d = r.querySelectorAll(".portfolio-cover .portfolio-cover-top, .portfolio-cover .portfolio-cover-middle, .portfolio-cover .portfolio-cover-bottom")
          , u = t.querySelector(".portfolio-cover-top")
          , h = t.querySelector(".portfolio-cover-middle >svg:nth-child(1)")
          , f = t.querySelector(".portfolio-cover-middle >svg:nth-child(2)")
          , p = t.querySelector(".portfolio-cover-bottom")
          , m = t.querySelector(".portfolio-item:last-child")
          , g = document.querySelector(".portfolio-item:nth-last-child(2)")
          , y = document.querySelector("#letters-playground").getAttribute("data-letters-num");
        let v = s[0].clientWidth / 1.9
          , w = parseFloat(getComputedStyle(s[0]).getPropertyValue("--size"));
        const b = document.querySelector(".q-header-portfolio")
          , _ = document.querySelector(".q-header-awards");
        let x = !1;
        const S = document.querySelector(".q-header-showcase-icon .q-text-scroll")
          , T = document.querySelector(".q-header-showcase-icon .q-text-focus");
        const q = document.querySelector(".q-header-showcase-icon .q-scroll")
          , L = document.querySelector(".q-header-showcase-icon .q-focus");
        let A = !1;
        const O = document.querySelector(".q-header");
        let k, C, M, I, E, P, W, R, Y, j, H, B, X, D, z, N = !1, F = 1.3;
        const U = ()=>{
            v = w / 1.9,
            s.forEach(t=>{
                t.style.height = v + "vW"
            }
            )
        }
        ;
        U(),
        window.addEventListener("resize", ()=>{
            U()
        }
        );
        const V = {
            endAnimated: !1,
            startAnimated: !1
        }
          , G = {
            val: -1,
            buffer: 0
        }
          , K = y;
        n.a.set(u, {
            y: -20,
            opacity: 0
        }),
        n.a.set(p, {
            y: 20,
            opacity: 0
        }),
        n.a.set(h, {
            x: -20,
            opacity: 0
        }),
        n.a.set(f, {
            x: 20,
            opacity: 0
        }),
        n.a.set(document.querySelectorAll(".letters-letter"), {
            y: 20,
            opacity: 0
        }),
        n.a.set(c, {
            zIndex: -1
        }),
        i.default.windowWidth > 1024 ? (E = 500,
        P = 0,
        W = -89,
        R = 0,
        I = "100vH",
        M = "-50%",
        k = "-115",
        C = "50%",
        Y = 0,
        X = 4.1,
        D = .78,
        z = .84) : (E = 0,
        P = "16.5vW",
        W = 0,
        R = -220,
        k = "unset",
        C = "2.5vW",
        M = 0,
        I = "100%",
        H = "-100vh",
        B = 1.7,
        X = 2.8,
        D = .76,
        Y = 0,
        z = .8,
        i.default.windowWidth <= 768 && i.default.windowWidth > 680 ? (P = "33vMax",
        R = -140,
        C = "6.8vMax",
        H = "-70vh") : i.default.windowWidth <= 680 && i.default.windowWidth >= i.default.windowHeight ? (P = "500",
        R = -400,
        C = "-11%",
        H = "-40vH",
        D = .75,
        X = 3.7,
        Y = .15,
        B = 1,
        z = .82) : i.default.windowWidth <= 680 && i.default.windowWidth <= i.default.windowHeight && (P = "500",
        R = -215,
        C = "82",
        H = "-65vh",
        D = 1,
        X = 2.2,
        z = .8,
        F = 1),
        j = n.a.fromTo(l, {
            autoAlpha: 1,
            y: 0
        }, {
            y: H,
            duration: B,
            ease: "sine.in",
            autoAlpha: 1,
            overwrite: !0,
            onStart: ()=>{
                l.classList.remove("q-animation-finished")
            }
            ,
            onComplete: ()=>{
                l.classList.add("q-animation-finished")
            }
            ,
            onReverseComplete: ()=>{
                l.classList.remove("q-animation-finished")
            }
        }));
        const Z = n.a.timeline({
            paused: !0,
            onUpdate: ()=>{
                if (i.default.progress.portfolio > .94 && !x ? (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(_),
                Object(o.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(o.headerIconTextAnimateIn)(S),
                q.classList.add("-active"),
                L.classList.remove("-active"),
                x = !0) : i.default.progress.portfolio <= .94 && x && (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(b),
                Object(o.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(o.headerIconTextAnimateIn)(T),
                q.classList.remove("-active"),
                L.classList.add("-active"),
                x = !1),
                i.default.progress.portfolio < .05 && !A ? (Object(o.changeHeaderSkin)("default", ".portfolio-cover"),
                O.classList.add("q-header-gray-hover"),
                A = !0) : i.default.progress.portfolio >= .05 && i.default.progress.portfolio < .94 && A ? (O.classList.remove("q-header-gray-hover"),
                Object(o.changeHeaderSkin)("light", "#portfolio .portfolio-item"),
                A = !1) : i.default.progress.portfolio >= .94 && !A && (Object(o.changeHeaderSkin)("default"),
                A = !0),
                G.buffer !== G.val && (t=>{
                    for (let e = 0; e < K; e++) {
                        const r = document.querySelectorAll(".letters-row-" + e);
                        t == e || e < t ? n.a.to(r, {
                            y: 0,
                            opacity: 1,
                            duration: .2
                        }) : e > t && n.a.to(r, {
                            y: 30,
                            opacity: 0,
                            duration: .2
                        })
                    }
                }
                )(G.val),
                G.buffer = G.val,
                i.default.progress.portfolio > D) {
                    const t = Math.abs(1 * (1 - D - (1 - i.default.progress.portfolio)) / (1 - D));
                    n.a.to(g, {
                        y: -250 * t + "%",
                        ease: "linear",
                        duration: 0
                    }),
                    n.a.to(m, {
                        y: -250 * t + "%",
                        ease: "linear",
                        duration: .1
                    })
                } else
                    n.a.to(g, {
                        y: "0%",
                        ease: "linear",
                        duration: 0
                    }),
                    n.a.to(m, {
                        y: "0%",
                        ease: "linear",
                        duration: .1
                    });
                i.default.progress.portfolio > D - .015 && i.default.windowWidth > 1024 ? V.endAnimated || (V.endAnimated = !0,
                n.a.to(l, {
                    y: -20,
                    opacity: 0,
                    duration: .2
                })) : i.default.windowWidth > 1024 && V.endAnimated && (V.endAnimated = !1,
                n.a.to(l, {
                    y: 0,
                    opacity: 1,
                    duration: .2
                })),
                i.default.progress.portfolio > .001 ? V.startAnimated || (V.startAnimated = !0,
                n.a.fromTo(u, {
                    y: -20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .3
                }),
                n.a.fromTo(p, {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .3
                }),
                n.a.fromTo(h, {
                    x: -20,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: .3
                }),
                n.a.fromTo(f, {
                    x: 20,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: .3
                })) : V.startAnimated && (V.startAnimated = !1,
                n.a.fromTo(u, {
                    y: 0,
                    opacity: 1
                }, {
                    y: -50,
                    opacity: 0,
                    duration: .2
                }),
                n.a.fromTo(p, {
                    y: 0,
                    opacity: 1
                }, {
                    y: 50,
                    opacity: 0,
                    duration: .2
                }),
                n.a.fromTo(h, {
                    x: 0,
                    opacity: 1
                }, {
                    x: -20,
                    opacity: 0,
                    duration: .2
                }),
                n.a.fromTo(f, {
                    x: 0,
                    opacity: 1
                }, {
                    x: 20,
                    opacity: 0,
                    duration: .2
                }))
            }
        });
        return Z.addLabel("portfolioIntro").from(d, {
            duration: .1,
            delay: .4
        }).addLabel("showScreen").fromTo(r, {
            width: "100vW",
            height: I,
            top: k
        }, {
            scale: .46,
            width: 1 / .46 * w + "vW",
            height: 1 / .46 * w / 1.9 + "vW",
            left: (100 - 1 / .46 * w) / 2 + "vW",
            y: M,
            duration: 1,
            top: C,
            onStart: ()=>{
                Object(o.changeScrollSkin)(!0),
                n.a.set(c, {
                    zIndex: 1
                })
            }
            ,
            onReverseComplete: ()=>{
                Object(o.changeScrollSkin)(!1),
                n.a.set(c, {
                    zIndex: -1
                })
            }
            ,
            onComplete: ()=>{
                if (i.default.windowWidth <= 1024 && !N) {
                    N = !0;
                    let t = parseFloat(window.getComputedStyle(s[1]).marginTop);
                    n.a.set(s[0], {
                        marginTop: r.getBoundingClientRect().top - document.querySelector(".q-header").clientHeight + s[0].clientHeight + 2 * t
                    })
                }
            }
        }, "showScreen").from(s, {
            x: E,
            y: P,
            duration: .5,
            delay: .5
        }, "showScreen").from(l, {
            autoAlpha: 0,
            duration: .001,
            delay: .5,
            onStart: ()=>{
                n.a.set(l, {
                    y: 20,
                    autoAlpha: 0
                })
            }
            ,
            onComplete: ()=>{
                n.a.to(l, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .4,
                    onUpdate: ()=>{
                        l.classList.contains("q-animation-finished") && n.a.to(l, {
                            y: H
                        })
                    }
                })
            }
        }, "showScreen").addLabel("hideScreen").to(a, {
            duration: 1e-5,
            onStart: ()=>{
                i.default.windowWidth > 1024 && n.a.set("#portfolio", {
                    zIndex: "2"
                })
            }
            ,
            onReverseComplete: ()=>{
                i.default.windowWidth > 1024 && n.a.set("#portfolio", {
                    zIndex: "2000"
                })
            }
        }).to(a, {
            x: W / 2.8 + "%",
            y: R / 2.5 + "%",
            duration: 1.5,
            ease: "sine.in",
            delay: Y
        }).to(a, {
            x: W / 1.2 + "%",
            y: R + "%",
            duration: 1.5,
            ease: "linear",
            delay: Y
        }).to(a, {
            x: W + "%",
            y: 1.1 * R + "%",
            duration: 1,
            ease: "sine.out",
            delay: Y
        }).add(j, "hideScreen").from("#letters", {
            autoAlpha: 0,
            duration: .01,
            delay: X
        }, "hideScreen").to(e, {
            y: "-100%",
            duration: F,
            delay: X,
            onUpdate: ()=>{
                i.default.progress.portfolio > z ? Object(o.changeScrollSkin)(!1) : Object(o.changeScrollSkin)(!0)
            }
            ,
            onStart: ()=>{
                n.a.to(c, {
                    y: -10,
                    autoAlpha: 0,
                    duration: .3
                })
            }
            ,
            onReverseComplete: ()=>{
                n.a.set(c, {
                    zIndex: 1
                }),
                n.a.to(c, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .3
                })
            }
        }, "hideScreen").to(G, {
            val: K,
            duration: 1.6,
            delay: X + .1,
            ease: "power3.inOut",
            roundProps: "val"
        }, "hideScreen").from("#letters-playground", {
            y: 300,
            duration: .7,
            delay: X + .4,
            ease: "linear"
        }, "hideScreen"),
        Z
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(2);
    i.default.timelines.shop = (()=>{
        const t = document.querySelector(".shop-hero")
          , e = document.querySelector(".shop-intro-image")
          , r = document.querySelector(".shop-cover-bg")
          , a = document.querySelector(".shop-cover-bg-inner img")
          , s = document.querySelector(".shop-cover-bg-inner > div")
          , l = document.querySelector(".shop-cover-bar")
          , c = document.querySelector(".shop-items")
          , d = document.querySelectorAll(".shop-item")
          , u = document.querySelector(".shop-text-content")
          , h = document.querySelector("#shop .q-button-corner")
          , f = document.querySelector("#portfolio")
          , p = document.querySelector(".portfolio-intro-image")
          , m = f.querySelector(".portfolio-cover-center");
        let g, y = d[0].clientWidth / 1.9, v = parseFloat(getComputedStyle(d[0]).getPropertyValue("--size"));
        const w = document.querySelector(".q-header-shop")
          , b = document.querySelector(".q-header-portfolio");
        let _ = !1
          , x = !1;
        const S = document.querySelector(".q-header");
        let T, q, L, A, O, k, C, M, I, E, P, W, R, Y, j, H, B, X = !1;
        i.default.windowWidth < 1681 && i.default.windowWidth > 1441 || i.default.windowWidth < 1367 && i.default.windowWidth > 1280 ? g = .18 : i.default.windowWidth <= 1024 && i.default.windowWidth > 768 ? g = .28 : i.default.windowWidth <= 768 && i.default.windowWidth > 680 ? g = .38 : i.default.windowWidth <= 681 ? i.default.windowWidth > i.default.windowHeight ? g = .38 : i.default.windowWidth <= i.default.windowHeight && (g = .27) : g = .2,
        i.default.windowWidth > 1024 ? (O = "16.5vW",
        k = 0,
        I = -120,
        E = 0,
        A = "100vH",
        L = "-50%",
        T = "-115",
        q = "50%",
        W = "-50%",
        R = 0,
        j = 7.3,
        M = 3,
        C = 7,
        Y = 2,
        P = 0,
        H = "default") : (O = 0,
        k = "16.5vW",
        I = 0,
        E = -220,
        T = "unset",
        q = "2.5vW",
        L = 0,
        A = "100%",
        W = 0,
        R = "-50vh",
        j = 2.101,
        M = 3,
        C = 8,
        Y = 1.7,
        P = .3,
        H = "sine.in",
        i.default.windowWidth <= 768 && i.default.windowWidth > 680 ? (k = "33vMax",
        E = -140,
        q = "6.8vMax",
        R = "-80vh",
        M = 2.1,
        C = 5) : i.default.windowWidth <= 680 && i.default.windowWidth >= i.default.windowHeight ? (k = "500",
        E = -400,
        q = "-11%",
        j = 1.9,
        R = "-80vH") : i.default.windowWidth <= 680 && i.default.windowWidth <= i.default.windowHeight && (k = "500",
        E = -130,
        q = "82",
        j = 2.15,
        M = 2.5,
        C = 5)),
        i.default.windowWidth <= 768 && (n.a.to(s, {
            autoAlpha: 0,
            duration: .2
        }),
        B = n.a.to(s, {
            duration: .001,
            onStart: ()=>{
                n.a.fromTo(s, {
                    autoAlpha: 0
                }, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .15,
                    delay: 0
                })
            }
            ,
            onReverseComplete: ()=>{
                n.a.to(s, {
                    y: 0,
                    autoAlpha: 0,
                    duration: .15,
                    delay: 0
                })
            }
        }));
        const D = ()=>{
            y = v / 1.9,
            d.forEach(t=>{
                t.style.height = y + "vW"
            }
            )
        }
        ;
        D(),
        a.addEventListener("load", t=>{
            i.default.windowWidth > 768 && n.a.set(s, {
                "margin-left": a.offsetWidth / 2
            })
        }
        );
        let z = n.a.fromTo(t, {
            width: "100vW",
            height: A,
            top: T
        }, {
            scale: .46,
            width: 1 / .46 * v + "vW",
            height: 1 / .46 * v / 1.9 + "vW",
            left: (100 - 1 / .46 * v) / 2 + "vW",
            y: L,
            duration: 1.2,
            delay: .5,
            top: q,
            onComplete: ()=>{
                if (i.default.windowWidth <= 1024 && !X) {
                    X = !0;
                    let e = parseFloat(window.getComputedStyle(d[1]).marginTop);
                    n.a.set(d[0], {
                        marginTop: t.getBoundingClientRect().top - document.querySelector(".q-header").clientHeight + d[0].clientHeight + 2 * e
                    })
                }
            }
        });
        window.addEventListener("resize", ()=>{
            D(),
            t.classList.add("q-resized")
        }
        ),
        n.a.set(a, {
            x: "-50%",
            y: "-50%"
        });
        const N = n.a.timeline({
            paused: !0,
            onUpdate: ()=>{
                i.default.activeSection = "shop",
                i.default.progress.shop > .75 && !_ ? (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(b),
                _ = !0) : i.default.progress.shop <= .75 && _ && (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(w),
                _ = !1),
                i.default.progress.shop < .13 && !x ? (Object(o.changeHeaderSkin)("default"),
                x = !0) : i.default.progress.shop >= .13 && i.default.progress.shop < .865 && x ? (Object(o.changeHeaderSkin)("light", "#shop .shop-bg-color"),
                S.classList.remove("q-header-gray-hover"),
                x = !1) : i.default.progress.shop >= .865 && !x && (Object(o.changeHeaderSkin)("default", ".portfolio-cover"),
                S.classList.add("q-header-gray-hover"),
                x = !0)
            }
        });
        return N.addLabel("parallax").fromTo(e, {
            scale: 1.1
        }, {
            scale: 1,
            duration: 1.3
        }, "parallax").to(e, {
            x: "-20%",
            duration: 1.5
        }, "parallax").from(r, {
            x: "100%",
            duration: 1.5
        }, "parallax").from(l, {
            x: "-100%",
            duration: 1.5
        }, "parallax").from(a, {
            x: "50%",
            duration: 1
        }, "parallax").from(s, {
            x: "100%",
            duration: 1,
            delay: .1
        }, "parallax").addLabel("showScreen").add(z, "showScreen").add(B, "-=.7").from(d, {
            x: O,
            y: k,
            duration: .5,
            delay: 1.2,
            onStart: ()=>{
                i.default.windowWidth <= 1024 && n.a.set(h, {
                    zIndex: 1
                })
            }
            ,
            onReverseComplete: ()=>{
                i.default.windowWidth <= 1024 && n.a.set(h, {
                    zIndex: "auto"
                })
            }
        }, "showScreen").from(u, {
            autoAlpha: 0,
            duration: .001,
            delay: 1.3,
            onStart: ()=>{
                n.a.set(u, {
                    y: 20,
                    opacity: 0
                })
            }
            ,
            onComplete: ()=>{
                n.a.to(u, {
                    y: 0,
                    opacity: 1,
                    duration: .4
                })
            }
        }, "showScreen").to(c, {
            duration: 1e-5,
            onStart: ()=>{
                i.default.windowWidth > 1024 && n.a.set("#shop", {
                    zIndex: "auto"
                })
            }
            ,
            onReverseComplete: ()=>{
                i.default.windowWidth > 1024 && n.a.set("#shop", {
                    zIndex: "2000"
                })
            }
        }).to(c, {
            x: I / 4 + "%",
            y: E / 2.5 + "%",
            duration: M - .5,
            delay: P,
            ease: "sine.in"
        }).to(c, {
            x: I / 1.2 + "%",
            y: E + "%",
            duration: M,
            ease: "linear"
        }).to(c, {
            x: I + "%",
            y: 1.1 * E + "%",
            duration: M - 1,
            ease: "sine.out"
        }).from(f, {
            autoAlpha: 0,
            duration: 0,
            delay: C
        }, "showScreen").from(f, {
            x: "100%",
            duration: 2.4,
            delay: C,
            onStart: ()=>{
                i.default.windowWidth > 1024 && n.a.set(f, {
                    height: "100%",
                    zIndex: 2e3,
                    pointerEvents: "none"
                })
            }
        }, "showScreen").from(".portfolio-hero", {
            scale: 1.4,
            duration: 2,
            delay: C
        }, "showScreen").from(f, {
            duration: 2,
            delay: C
        }, "showScreen").to(u, {
            x: W,
            marginTop: R,
            duration: Y,
            delay: j,
            ease: H
        }, "showScreen").to(p, {
            scale: g,
            duration: 1.7,
            delay: C + 2.3,
            onStart: ()=>{
                Object(o.changeScrollSkin)(!1)
            }
            ,
            onReverseComplete: ()=>{
                Object(o.changeScrollSkin)(!0)
            }
        }, "showScreen").from(m, {
            scale: .4,
            duration: 1.7,
            delay: C + 2.3
        }, "showScreen"),
        N
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = r(2);
    i.default.timelines.wall = (()=>{
        const t = document.querySelector("#wall")
          , e = document.querySelector(".wall-wrapper")
          , r = document.querySelector(".wall-counter")
          , a = Object(o.shuffle)([...document.querySelectorAll(".wall-front .wall-label:not(.-original) .char")])
          , s = Object(o.shuffle)([...document.querySelectorAll(".wall-side .wall-label:not(.-original) .char")])
          , l = document.querySelector(".wall-front")
          , c = document.querySelector(".wall-side")
          , d = (document.querySelector(".q-header"),
        document.querySelector(".q-header-demos"))
          , u = document.querySelector(".q-header-intro");
        let h = !1;
        const f = document.querySelector(".q-header-showcase-icon .q-text-scroll");
        let p = !1;
        document.querySelector(".q-header-showcase-icon .q-scroll");
        let m = l.clientWidth;
        const g = ()=>{
            m = l.clientWidth,
            n.a.set(c, {
                rotationY: 90,
                x: m / 2
            }),
            n.a.set(l, {
                z: m / 2.04
            }),
            n.a.set(e, {
                z: -m / 2,
                transformPerspective: 4e3,
                transformOrigin: "center center"
            })
        }
        ;
        setTimeout(()=>{
            g()
        }
        , 500),
        window.addEventListener("resize", ()=>{
            m = l.clientWidth,
            g()
        }
        );
        const y = {
            isCubeAnimating: !1,
            counter: {
                start: 147e3,
                end: 15e4,
                step: 75,
                counterInterval: null
            }
        }
          , v = ()=>{
            let t = y.counter.start;
            y.counter.counterInterval = setInterval(()=>{
                t < y.counter.end ? (t += y.counter.step,
                r.innerHTML = t) : (clearInterval(y.counter.counterInterval),
                r.innerHTML = y.counter.end)
            }
            , 30)
        }
          , w = ()=>{
            clearInterval(y.counter.counterInterval),
            r.innerHTML = y.counter.end
        }
          , b = ()=>{
            n.a.to(e, {
                rotationX: 0,
                rotationZ: 0
            })
        }
        ;
        t.addEventListener("mousemove", t=>{
            if (y.isCubeAnimating) {
                const r = {
                    left: t.clientX,
                    top: t.clientY
                }
                  , i = {
                    x: r.left / e.clientWidth * 100 - 50,
                    y: r.top / e.clientHeight * 100 - 50
                };
                n.a.to(e, {
                    rotationX: .1 * -i.y,
                    rotationZ: .1 * i.x,
                    transformOrigin: "center center"
                })
            }
        }
        ),
        t.addEventListener("mouseleave", b);
        const _ = n.a.timeline({
            paused: !0,
            onUpdate: ()=>{
                i.default.activeSection = "wall",
                i.default.progress.wall < .79 && !h ? (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(u),
                h = !0) : i.default.progress.wall >= .79 && h && (Object(o.headerInfoAnimateOut)(".q-header-middle-info-right .-active"),
                Object(o.headerInfoAnimateIn)(d),
                h = !1),
                (i.default.progress.wall <= .53 || i.default.progress.wall >= .9) && !p && (Object(o.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(o.headerIconTextAnimateIn)(f),
                p = !0)
            }
        });
        return _.addLabel("intro-out").to("#intro", {
            y: 2.2 * -i.default.windowHeight,
            duration: 2,
            delay: .2,
            ease: "linear"
        }, "intro-out").from("#wall", {
            autoAlpha: 0,
            duration: .01,
            delay: .2
        }, "intro-out").from("#wall", {
            y: i.default.windowHeight / 2 + 100,
            duration: .6,
            ease: "linear",
            delay: .2,
            onStart: ()=>{
                v()
            }
            ,
            onComplete: ()=>{
                w()
            }
        }, "intro-out").to(a, {
            className: "+=char -show",
            stagger: .004,
            duration: .001,
            delay: 1
        }, "intro-out").to(e, {
            rotateY: -90,
            delay: 1.3,
            duration: 1,
            onUpdate: ()=>{
                y.isCubeAnimating = !0
            }
            ,
            onComplete: ()=>{
                y.isCubeAnimating = !1,
                b()
            }
            ,
            onReverseComplete: ()=>{
                y.isCubeAnimating = !1,
                b()
            }
        }, "intro-out").to(s, {
            className: "+=char -hide",
            stagger: .004,
            duration: 0,
            delay: 2.3
        }, "intro-out"),
        _
    }
    )()
}
, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1)
      , i = r(0)
      , o = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , a = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
      , s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
      , l = /(^[#\.][a-z]|[a-y][a-z])/i
      , c = Math.PI / 180
      , d = 180 / Math.PI
      , u = Math.sin
      , h = Math.cos
      , f = Math.abs
      , p = Math.sqrt
      , m = Math.atan2
      , g = function(t) {
        return "string" == typeof t
    }
      , y = function(t) {
        return "number" == typeof t
    }
      , v = {}
      , w = {}
      , b = function(t) {
        return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1)
    }
      , _ = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
      , x = function(t) {
        return Math.round(1e10 * t) / 1e10 || 0
    }
      , S = function(t, e, r, n) {
        var i = t[e]
          , o = 1 === n ? 6 : P(i, r, n);
        if (o && o + r + 2 < i.length)
            return t.splice(e, 0, i.slice(0, r + o + 2)),
            i.splice(0, r + o),
            1
    }
      , T = function(t, e) {
        return e.totalLength = t.totalLength,
        t.samples ? (e.samples = t.samples.slice(0),
        e.lookup = t.lookup.slice(0),
        e.minLength = t.minLength,
        e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints),
        e
    }
      , q = function(t, e) {
        var r = t.length
          , n = t[r - 1] || []
          , i = n.length;
        r && e[0] === n[i - 2] && e[1] === n[i - 1] && (e = n.concat(e.slice(2)),
        r--),
        t[r] = e
    };
    function L(t) {
        var e, r = (t = g(t) && l.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}),
        (e = r._gsPath[t]) && !e._dirty ? e : r._gsPath[t] = H(t)) : t ? g(t) ? H(t) : y(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }
    function A(t) {
        var e, r = 0;
        for (t.reverse(); r < t.length; r += 2)
            e = t[r],
            t[r] = t[r + 1],
            t[r + 1] = e;
        t.reversed = !t.reversed
    }
    var O = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };
    function k(t, e) {
        var r, n, i, o, s, l, c, d, u, h, f, p, m, g, y, v, w, b, _, x, S, T, q = t.tagName.toLowerCase(), L = .552284749831;
        return "path" !== q && t.getBBox ? (l = function(t, e) {
            var r, n = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(t.attributes), o = i.length;
            for (e = "," + e + ","; --o > -1; )
                r = i[o].nodeName.toLowerCase(),
                e.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, i[o].nodeValue);
            return n
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
        T = function(t, e) {
            for (var r = e ? e.split(",") : [], n = {}, i = r.length; --i > -1; )
                n[r[i]] = +t.getAttribute(r[i]) || 0;
            return n
        }(t, O[q]),
        "rect" === q ? (o = T.rx,
        s = T.ry || o,
        n = T.x,
        i = T.y,
        h = T.width - 2 * o,
        f = T.height - 2 * s,
        r = o || s ? "M" + (v = (g = (m = n + o) + h) + o) + "," + (b = i + s) + " V" + (_ = b + f) + " C" + [v, x = _ + s * L, y = g + o * L, S = _ + s, g, S, g - (g - m) / 3, S, m + (g - m) / 3, S, m, S, p = n + o * (1 - L), S, n, x, n, _, n, _ - (_ - b) / 3, n, b + (_ - b) / 3, n, b, n, w = i + s * (1 - L), p, i, m, i, m + (g - m) / 3, i, g - (g - m) / 3, i, g, i, y, i, v, w, v, b].join(",") + "z" : "M" + (n + h) + "," + i + " v" + f + " h" + -h + " v" + -f + " h" + h + "z") : "circle" === q || "ellipse" === q ? ("circle" === q ? d = (o = s = T.r) * L : (o = T.rx,
        d = (s = T.ry) * L),
        r = "M" + ((n = T.cx) + o) + "," + (i = T.cy) + " C" + [n + o, i + d, n + (c = o * L), i + s, n, i + s, n - c, i + s, n - o, i + d, n - o, i, n - o, i - d, n - c, i - s, n, i - s, n + c, i - s, n + o, i - d, n + o, i].join(",") + "z") : "line" === q ? r = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2 : "polyline" !== q && "polygon" !== q || (r = "M" + (n = (u = (t.getAttribute("points") + "").match(a) || []).shift()) + "," + (i = u.shift()) + " L" + u.join(","),
        "polygon" === q && (r += "," + n + "," + i + "z")),
        l.setAttribute("d", D(l._gsRawPath = H(r))),
        e && t.parentNode && (t.parentNode.insertBefore(l, t),
        t.parentNode.removeChild(t)),
        l) : t
    }
    function C(t, e, r) {
        var n, i = t[e], o = t[e + 2], a = t[e + 4];
        return i += (o - i) * r,
        i += ((o += (a - o) * r) - i) * r,
        n = o + (a + (t[e + 6] - a) * r - o) * r - i,
        i = t[e + 1],
        i += ((o = t[e + 3]) - i) * r,
        i += ((o += ((a = t[e + 5]) - o) * r) - i) * r,
        _(m(o + (a + (t[e + 7] - a) * r - o) * r - i, n) * d)
    }
    function M(t, e, r) {
        r = void 0 === r ? 1 : x(r) || 0,
        e = x(e) || 0;
        var n = Math.max(0, ~~(f(r - e) - 1e-8))
          , i = function(t) {
            for (var e = [], r = 0; r < t.length; r++)
                e[r] = T(t[r], t[r].slice(0));
            return T(t, e)
        }(t);
        if (e > r && (e = 1 - e,
        r = 1 - r,
        function(t, e) {
            var r = t.length;
            for (e || t.reverse(); r--; )
                t[r].reversed || A(t[r])
        }(i),
        i.totalLength = 0),
        e < 0 || r < 0) {
            var o = Math.abs(~~Math.min(e, r)) + 1;
            e += o,
            r += o
        }
        i.totalLength || E(i);
        var a, s, l, c, d, u, h, p, m = r > 1, g = W(i, e, v, !0), y = W(i, r, w), b = y.segment, _ = g.segment, L = y.segIndex, O = g.segIndex, k = y.i, M = g.i, I = O === L, R = k === M && I;
        if (m || n) {
            for (a = L < O || I && k < M || R && y.t < g.t,
            S(i, O, M, g.t) && (O++,
            a || (L++,
            R ? (y.t = (y.t - g.t) / (1 - g.t),
            k = 0) : I && (k -= M))),
            1 - (r - e) < 1e-5 ? L = O - 1 : !y.t && L ? L-- : S(i, L, k, y.t) && a && O++,
            1 === g.t && (O = (O + 1) % i.length),
            d = [],
            h = 1 + (u = i.length) * n,
            p = O,
            h += (u - O + L) % u,
            c = 0; c < h; c++)
                q(d, i[p++ % u]);
            i = d
        } else if (l = 1 === y.t ? 6 : P(b, k, y.t),
        e !== r)
            for (s = P(_, M, R ? g.t / y.t : g.t),
            I && (l += s),
            b.splice(k + l + 2),
            (s || M) && _.splice(0, M + s),
            c = i.length; c--; )
                (c < O || c > L) && i.splice(c, 1);
        else
            b.angle = C(b, k + l, 0),
            g = b[k += l],
            y = b[k + 1],
            b.length = b.totalLength = 0,
            b.totalPoints = i.totalPoints = 8,
            b.push(g, y, g, y, g, y, g, y);
        return i.totalLength = 0,
        i
    }
    function I(t, e, r) {
        e = e || 0,
        t.samples || (t.samples = [],
        t.lookup = []);
        var n, i, o, a, s, l, c, d, u, h, m, g, y, v, w, b, _, x = ~~t.resolution || 12, S = 1 / x, T = r ? e + 6 * r + 1 : t.length, q = t[e], L = t[e + 1], A = e ? e / 6 * x : 0, O = t.samples, k = t.lookup, C = (e ? t.minLength : 1e8) || 1e8, M = O[A + r * x - 1], I = e ? O[A - 1] : 0;
        for (O.length = k.length = 0,
        i = e + 2; i < T; i += 6) {
            if (o = t[i + 4] - q,
            a = t[i + 2] - q,
            s = t[i] - q,
            d = t[i + 5] - L,
            u = t[i + 3] - L,
            h = t[i + 1] - L,
            l = c = m = g = 0,
            f(o) < 1e-5 && f(d) < 1e-5 && f(s) + f(h) < 1e-5)
                t.length > 8 && (t.splice(i, 6),
                i -= 6,
                T -= 6);
            else
                for (n = 1; n <= x; n++)
                    l = c - (c = ((v = S * n) * v * o + 3 * (y = 1 - v) * (v * a + y * s)) * v),
                    m = g - (g = (v * v * d + 3 * y * (v * u + y * h)) * v),
                    (b = p(m * m + l * l)) < C && (C = b),
                    I += b,
                    O[A++] = I;
            q += o,
            L += d
        }
        if (M)
            for (M -= I; A < O.length; A++)
                O[A] += M;
        if (O.length && C)
            for (t.totalLength = _ = O[O.length - 1] || 0,
            t.minLength = C,
            b = w = 0,
            n = 0; n < _; n += C)
                k[b++] = O[w] < n ? ++w : w;
        else
            t.totalLength = O[0] = 0;
        return e ? I - O[e / 2 - 1] : I
    }
    function E(t, e) {
        var r, n, i;
        for (i = r = n = 0; i < t.length; i++)
            t[i].resolution = ~~e || 12,
            n += t[i].length,
            r += I(t[i]);
        return t.totalPoints = n,
        t.totalLength = r,
        t
    }
    function P(t, e, r) {
        if (r <= 0 || r >= 1)
            return 0;
        var n = t[e]
          , i = t[e + 1]
          , o = t[e + 2]
          , a = t[e + 3]
          , s = t[e + 4]
          , l = t[e + 5]
          , c = n + (o - n) * r
          , d = o + (s - o) * r
          , u = i + (a - i) * r
          , h = a + (l - a) * r
          , f = c + (d - c) * r
          , p = u + (h - u) * r
          , m = s + (t[e + 6] - s) * r
          , g = l + (t[e + 7] - l) * r;
        return d += (m - d) * r,
        h += (g - h) * r,
        t.splice(e + 2, 4, _(c), _(u), _(f), _(p), _(f + (d - f) * r), _(p + (h - p) * r), _(d), _(h), _(m), _(g)),
        t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0),
        6
    }
    function W(t, e, r, n) {
        r = r || {},
        t.totalLength || E(t),
        (e < 0 || e > 1) && (e = b(e));
        var i, o, a, s, l, c, d, u = 0, h = t[0];
        if (e)
            if (1 === e)
                d = 1,
                c = (h = t[u = t.length - 1]).length - 8;
            else {
                if (t.length > 1) {
                    for (a = t.totalLength * e,
                    l = c = 0; (l += t[c++].totalLength) < a; )
                        u = c;
                    e = (a - (s = l - (h = t[u]).totalLength)) / (l - s) || 0
                }
                i = h.samples,
                o = h.resolution,
                a = h.totalLength * e,
                s = (c = h.lookup[~~(a / h.minLength)] || 0) ? i[c - 1] : 0,
                (l = i[c]) < a && (s = l,
                l = i[++c]),
                d = 1 / o * ((a - s) / (l - s) + c % o),
                c = 6 * ~~(c / o),
                n && 1 === d && (c + 6 < h.length ? (c += 6,
                d = 0) : u + 1 < t.length && (c = d = 0,
                h = t[++u]))
            }
        else
            d = c = u = 0,
            h = t[0];
        return r.t = d,
        r.i = c,
        r.path = t,
        r.segment = h,
        r.segIndex = u,
        r
    }
    function R(t, e, r, n) {
        var i, o, a, s, l, c, d, u, h, f = t[0], p = n || {};
        if ((e < 0 || e > 1) && (e = b(e)),
        t.length > 1) {
            for (a = t.totalLength * e,
            l = c = 0; (l += t[c++].totalLength) < a; )
                f = t[c];
            e = (a - (s = l - f.totalLength)) / (l - s) || 0
        }
        return i = f.samples,
        o = f.resolution,
        a = f.totalLength * e,
        s = (c = f.lookup[e < 1 ? ~~(a / f.minLength) : f.lookup.length - 1] || 0) ? i[c - 1] : 0,
        (l = i[c]) < a && (s = l,
        l = i[++c]),
        h = 1 - (d = 1 / o * ((a - s) / (l - s) + c % o) || 0),
        u = f[c = 6 * ~~(c / o)],
        p.x = _((d * d * (f[c + 6] - u) + 3 * h * (d * (f[c + 4] - u) + h * (f[c + 2] - u))) * d + u),
        p.y = _((d * d * (f[c + 7] - (u = f[c + 1])) + 3 * h * (d * (f[c + 5] - u) + h * (f[c + 3] - u))) * d + u),
        r && (p.angle = f.totalLength ? C(f, c, d >= 1 ? 1 - 1e-9 : d || 1e-9) : f.angle || 0),
        p
    }
    function Y(t, e, r, n, i, o, a) {
        for (var s, l, c, d, u, h = t.length; --h > -1; )
            for (l = (s = t[h]).length,
            c = 0; c < l; c += 2)
                d = s[c],
                u = s[c + 1],
                s[c] = d * e + u * n + o,
                s[c + 1] = d * r + u * i + a;
        return t._dirty = 1,
        t
    }
    function j(t, e, r, n, i, o, a, s, l) {
        if (t !== s || e !== l) {
            r = f(r),
            n = f(n);
            var d = i % 360 * c
              , m = h(d)
              , g = u(d)
              , y = Math.PI
              , v = 2 * y
              , w = (t - s) / 2
              , b = (e - l) / 2
              , _ = m * w + g * b
              , x = -g * w + m * b
              , S = _ * _
              , T = x * x
              , q = S / (r * r) + T / (n * n);
            q > 1 && (r = p(q) * r,
            n = p(q) * n);
            var L = r * r
              , A = n * n
              , O = (L * A - L * T - A * S) / (L * T + A * S);
            O < 0 && (O = 0);
            var k = (o === a ? -1 : 1) * p(O)
              , C = k * (r * x / n)
              , M = k * (-n * _ / r)
              , I = (t + s) / 2 + (m * C - g * M)
              , E = (e + l) / 2 + (g * C + m * M)
              , P = (_ - C) / r
              , W = (x - M) / n
              , R = (-_ - C) / r
              , Y = (-x - M) / n
              , j = P * P + W * W
              , H = (W < 0 ? -1 : 1) * Math.acos(P / p(j))
              , B = (P * Y - W * R < 0 ? -1 : 1) * Math.acos((P * R + W * Y) / p(j * (R * R + Y * Y)));
            isNaN(B) && (B = y),
            !a && B > 0 ? B -= v : a && B < 0 && (B += v),
            H %= v,
            B %= v;
            var X, D = Math.ceil(f(B) / (v / 4)), z = [], N = B / D, F = 4 / 3 * u(N / 2) / (1 + h(N / 2)), U = m * r, V = g * r, G = g * -n, K = m * n;
            for (X = 0; X < D; X++)
                _ = h(i = H + X * N),
                x = u(i),
                P = h(i += N),
                W = u(i),
                z.push(_ - F * x, x + F * _, P + F * W, W - F * P, P, W);
            for (X = 0; X < z.length; X += 2)
                _ = z[X],
                x = z[X + 1],
                z[X] = _ * U + x * G + I,
                z[X + 1] = _ * V + x * K + E;
            return z[X - 2] = s,
            z[X - 1] = l,
            z
        }
    }
    function H(t) {
        var e, r, n, i, a, l, c, d, u, h, p, m, g, y, v, w = (t + "").replace(s, (function(t) {
            var e = +t;
            return e < 1e-4 && e > -1e-4 ? 0 : e
        }
        )).match(o) || [], b = [], _ = 0, x = 0, S = w.length, T = 0, q = "ERROR: malformed path: " + t, L = function(t, e, r, n) {
            h = (r - t) / 3,
            p = (n - e) / 3,
            c.push(t + h, e + p, r - h, n - p, r, n)
        };
        if (!t || !isNaN(w[0]) || isNaN(w[1]))
            return console.log(q),
            b;
        for (e = 0; e < S; e++)
            if (g = a,
            isNaN(w[e]) ? l = (a = w[e].toUpperCase()) !== w[e] : e--,
            n = +w[e + 1],
            i = +w[e + 2],
            l && (n += _,
            i += x),
            e || (d = n,
            u = i),
            "M" === a)
                c && (c.length < 8 ? b.length -= 1 : T += c.length),
                _ = d = n,
                x = u = i,
                c = [n, i],
                b.push(c),
                e += 2,
                a = "L";
            else if ("C" === a)
                c || (c = [0, 0]),
                l || (_ = x = 0),
                c.push(n, i, _ + 1 * w[e + 3], x + 1 * w[e + 4], _ += 1 * w[e + 5], x += 1 * w[e + 6]),
                e += 6;
            else if ("S" === a)
                h = _,
                p = x,
                "C" !== g && "S" !== g || (h += _ - c[c.length - 4],
                p += x - c[c.length - 3]),
                l || (_ = x = 0),
                c.push(h, p, n, i, _ += 1 * w[e + 3], x += 1 * w[e + 4]),
                e += 4;
            else if ("Q" === a)
                h = _ + 2 / 3 * (n - _),
                p = x + 2 / 3 * (i - x),
                l || (_ = x = 0),
                _ += 1 * w[e + 3],
                x += 1 * w[e + 4],
                c.push(h, p, _ + 2 / 3 * (n - _), x + 2 / 3 * (i - x), _, x),
                e += 4;
            else if ("T" === a)
                h = _ - c[c.length - 4],
                p = x - c[c.length - 3],
                c.push(_ + h, x + p, n + 2 / 3 * (_ + 1.5 * h - n), i + 2 / 3 * (x + 1.5 * p - i), _ = n, x = i),
                e += 2;
            else if ("H" === a)
                L(_, x, _ = n, x),
                e += 1;
            else if ("V" === a)
                L(_, x, _, x = n + (l ? x - _ : 0)),
                e += 1;
            else if ("L" === a || "Z" === a)
                "Z" === a && (n = d,
                i = u,
                c.closed = !0),
                ("L" === a || f(_ - n) > .5 || f(x - i) > .5) && (L(_, x, n, i),
                "L" === a && (e += 2)),
                _ = n,
                x = i;
            else if ("A" === a) {
                if (y = w[e + 4],
                v = w[e + 5],
                h = w[e + 6],
                p = w[e + 7],
                r = 7,
                y.length > 1 && (y.length < 3 ? (p = h,
                h = v,
                r--) : (p = v,
                h = y.substr(2),
                r -= 2),
                v = y.charAt(1),
                y = y.charAt(0)),
                m = j(_, x, +w[e + 1], +w[e + 2], +w[e + 3], +y, +v, (l ? _ : 0) + 1 * h, (l ? x : 0) + 1 * p),
                e += r,
                m)
                    for (r = 0; r < m.length; r++)
                        c.push(m[r]);
                _ = c[c.length - 2],
                x = c[c.length - 1]
            } else
                console.log(q);
        return (e = c.length) < 6 ? (b.pop(),
        e = 0) : c[0] === c[e - 2] && c[1] === c[e - 1] && (c.closed = !0),
        b.totalPoints = T + e,
        b
    }
    function B(t, e) {
        void 0 === e && (e = 1);
        for (var r = t[0], n = 0, i = [r, n], o = 2; o < t.length; o += 2)
            i.push(r, n, t[o], n = (t[o] - r) * e / 2, r = t[o], -n);
        return i
    }
    function X(t, e, r) {
        f(t[0] - t[2]) < 1e-4 && f(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
        var n, i, o, a, s, l, c, d, g, y, v, w, b, x, S = t.length - 2, T = +t[0], q = +t[1], L = +t[2], A = +t[3], O = [T, q, T, q], k = L - T, C = A - q, M = Math.abs(t[S] - T) < .001 && Math.abs(t[S + 1] - q) < .001;
        for (isNaN(r) && (r = Math.PI / 10),
        M && (t.push(L, A),
        L = T,
        A = q,
        T = t[S - 2],
        q = t[S - 1],
        t.unshift(T, q),
        S += 4),
        e = e || 0 === e ? +e : 1,
        s = 2; s < S; s += 2)
            n = T,
            i = q,
            T = L,
            q = A,
            L = +t[s + 2],
            A = +t[s + 3],
            T === L && q === A || (w = (l = k) * l + (d = C) * d,
            b = (k = L - T) * k + (C = A - q) * C,
            x = (c = L - n) * c + (g = A - i) * g,
            v = (o = Math.acos((w + b - x) / p(4 * w * b))) / Math.PI * e,
            y = p(w) * v,
            v *= p(b),
            T === n && q === i || (o > r ? (a = m(g, c),
            O.push(_(T - h(a) * y), _(q - u(a) * y), _(T), _(q), _(T + h(a) * v), _(q + u(a) * v))) : (a = m(d, l),
            O.push(_(T - h(a) * y), _(q - u(a) * y)),
            a = m(C, k),
            O.push(_(T), _(q), _(T + h(a) * v), _(q + u(a) * v)))));
        return T !== L || q !== A || O.length < 4 ? O.push(_(L), _(A), _(L), _(A)) : O.length -= 2,
        M && (O.splice(0, 6),
        O.length = O.length - 6),
        O
    }
    function D(t) {
        y(t[0]) && (t = [t]);
        var e, r, n, i, o = "", a = t.length;
        for (r = 0; r < a; r++) {
            for (i = t[r],
            o += "M" + _(i[0]) + "," + _(i[1]) + " C",
            e = i.length,
            n = 2; n < e; n++)
                o += _(i[n++]) + "," + _(i[n++]) + " " + _(i[n++]) + "," + _(i[n++]) + " " + _(i[n++]) + "," + _(i[n]) + " ";
            i.closed && (o += "z")
        }
        return o
    }
    /*!
* matrix 3.6.0
* https://greensock.com
*
* Copyright 2008-2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
    var z, N, F, U, V, G, K, Z, $ = "transform", Q = $ + "Origin", J = function(t) {
        var e = t.ownerDocument || t;
        !($in t.style) && "msTransform"in t.style && (Q = ($ = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode); )
            ;
        if (N = window,
        K = new at,
        e) {
            z = e,
            F = e.documentElement,
            U = e.body;
            var r = e.createElement("div")
              , n = e.createElement("div");
            U.appendChild(r),
            r.appendChild(n),
            r.style.position = "static",
            r.style[$] = "translate3d(0,0,1px)",
            Z = n.offsetParent !== r,
            U.removeChild(r)
        }
        return e
    }, tt = [], et = [], rt = function(t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
    }, nt = function t(e, r) {
        if (e.parentNode && (z || J(e))) {
            var n = rt(e)
              , i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
              , o = n ? r ? "rect" : "g" : "div"
              , a = 2 !== r ? 0 : 100
              , s = 3 === r ? 100 : 0
              , l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
              , c = z.createElementNS ? z.createElementNS(i.replace(/^https/, "http"), o) : z.createElement(o);
            return r && (n ? (G || (G = t(e)),
            c.setAttribute("width", .01),
            c.setAttribute("height", .01),
            c.setAttribute("transform", "translate(" + a + "," + s + ")"),
            G.appendChild(c)) : (V || ((V = t(e)).style.cssText = l),
            c.style.cssText = l + "width:0.1px;height:0.1px;top:" + s + "px;left:" + a + "px",
            V.appendChild(c))),
            c
        }
        throw "Need document and parent."
    }, it = function(t, e) {
        var r, n, i, o, a, s, l = rt(t), c = t === l, d = l ? tt : et, u = t.parentNode;
        if (t === N)
            return t;
        if (d.length || d.push(nt(t, 1), nt(t, 2), nt(t, 3)),
        r = l ? G : V,
        l)
            i = c ? {
                x: 0,
                y: 0
            } : t.getBBox(),
            (n = t.transform ? t.transform.baseVal : {}).numberOfItems ? (o = (n = n.numberOfItems > 1 ? function(t) {
                for (var e = new at, r = 0; r < t.numberOfItems; r++)
                    e.multiply(t.getItem(r).matrix);
                return e
            }(n) : n.getItem(0).matrix).a * i.x + n.c * i.y,
            a = n.b * i.x + n.d * i.y) : (n = K,
            o = i.x,
            a = i.y),
            e && "g" === t.tagName.toLowerCase() && (o = a = 0),
            r.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + o) + "," + (n.f + a) + ")"),
            (c ? l : u).appendChild(r);
        else {
            if (o = a = 0,
            Z)
                for (n = t.offsetParent,
                i = t; i && (i = i.parentNode) && i !== n && i.parentNode; )
                    (N.getComputedStyle(i)[$] + "").length > 4 && (o = i.offsetLeft,
                    a = i.offsetTop,
                    i = 0);
            if ("absolute" !== (s = N.getComputedStyle(t)).position)
                for (n = t.offsetParent; u !== n; )
                    o += u.scrollLeft || 0,
                    a += u.scrollTop || 0,
                    u = u.parentNode;
            (i = r.style).top = t.offsetTop - a + "px",
            i.left = t.offsetLeft - o + "px",
            i[$] = s[$],
            i[Q] = s[Q],
            i.position = "fixed" === s.position ? "fixed" : "absolute",
            t.parentNode.appendChild(r)
        }
        return r
    }, ot = function(t, e, r, n, i, o, a) {
        return t.a = e,
        t.b = r,
        t.c = n,
        t.d = i,
        t.e = o,
        t.f = a,
        t
    }, at = function() {
        function t(t, e, r, n, i, o) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 1),
            void 0 === i && (i = 0),
            void 0 === o && (o = 0),
            ot(this, t, e, r, n, i, o)
        }
        var e = t.prototype;
        return e.inverse = function() {
            var t = this.a
              , e = this.b
              , r = this.c
              , n = this.d
              , i = this.e
              , o = this.f
              , a = t * n - e * r || 1e-10;
            return ot(this, n / a, -e / a, -r / a, t / a, (r * o - n * i) / a, -(t * o - e * i) / a)
        }
        ,
        e.multiply = function(t) {
            var e = this.a
              , r = this.b
              , n = this.c
              , i = this.d
              , o = this.e
              , a = this.f
              , s = t.a
              , l = t.c
              , c = t.b
              , d = t.d
              , u = t.e
              , h = t.f;
            return ot(this, s * e + c * n, s * r + c * i, l * e + d * n, l * r + d * i, o + u * e + h * n, a + u * r + h * i)
        }
        ,
        e.clone = function() {
            return new t(this.a,this.b,this.c,this.d,this.e,this.f)
        }
        ,
        e.equals = function(t) {
            var e = this.a
              , r = this.b
              , n = this.c
              , i = this.d
              , o = this.e
              , a = this.f;
            return e === t.a && r === t.b && n === t.c && i === t.d && o === t.e && a === t.f
        }
        ,
        e.apply = function(t, e) {
            void 0 === e && (e = {});
            var r = t.x
              , n = t.y
              , i = this.a
              , o = this.b
              , a = this.c
              , s = this.d
              , l = this.e
              , c = this.f;
            return e.x = r * i + n * a + l || 0,
            e.y = r * o + n * s + c || 0,
            e
        }
        ,
        t
    }();
    function st(t, e, r, n) {
        if (!t || !t.parentNode || (z || J(t)).documentElement === t)
            return new at;
        var i = function(t) {
            for (var e, r; t && t !== U; )
                (r = t._gsap) && r.uncache && r.get(t, "x"),
                r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4,
                r.renderTransform(1, r),
                e ? e.push(r) : e = [r]),
                t = t.parentNode;
            return e
        }(t)
          , o = rt(t) ? tt : et
          , a = it(t, r)
          , s = o[0].getBoundingClientRect()
          , l = o[1].getBoundingClientRect()
          , c = o[2].getBoundingClientRect()
          , d = a.parentNode
          , u = !n && function t(e) {
            return "fixed" === N.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        }(t)
          , h = new at((l.left - s.left) / 100,(l.top - s.top) / 100,(c.left - s.left) / 100,(c.top - s.top) / 100,s.left + (u ? 0 : N.pageXOffset || z.scrollLeft || F.scrollLeft || U.scrollLeft || 0),s.top + (u ? 0 : N.pageYOffset || z.scrollTop || F.scrollTop || U.scrollTop || 0));
        if (d.removeChild(a),
        i)
            for (s = i.length; s--; )
                (l = i[s]).scaleX = l.scaleY = 0,
                l.renderTransform(1, l);
        return e ? h.inverse() : h
    }
    /*!
* MotionPathPlugin 3.6.0
* https://greensock.com
*
* @license Copyright 2008-2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for
* Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
    var lt, ct, dt, ut, ht = "x,translateX,left,marginLeft,xPercent".split(","), ft = "y,translateY,top,marginTop,yPercent".split(","), pt = Math.PI / 180, mt = function(t, e, r, n) {
        for (var i = e.length, o = 2 === n ? 0 : n, a = 0; a < i; a++)
            t[o] = parseFloat(e[a][r]),
            2 === n && (t[o + 1] = 0),
            o += 2;
        return t
    }, gt = function(t, e, r) {
        return parseFloat(t._gsap.get(t, e, r || "px")) || 0
    }, yt = function(t) {
        var e, r = t[0], n = t[1];
        for (e = 2; e < t.length; e += 2)
            r = t[e] += r,
            n = t[e + 1] += n
    }, vt = function(t, e, r, n, i, o, a, s, l) {
        "cubic" === a.type ? e = [e] : (e.unshift(gt(r, n, s), i ? gt(r, i, l) : 0),
        a.relative && yt(e),
        e = [(i ? X : B)(e, a.curviness)]);
        return e = o(St(e, r, a)),
        Tt(t, r, n, e, "x", s),
        i && Tt(t, r, i, e, "y", l),
        E(e, a.resolution || (0 === a.curviness ? 20 : 12))
    }, wt = function(t) {
        return t
    }, bt = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g, _t = function(t, e, r) {
        var n, i, o, a = st(t);
        return "svg" === (t.tagName + "").toLowerCase() ? (i = (n = t.viewBox.baseVal).x,
        o = n.y,
        n.width || (n = {
            width: +t.getAttribute("width"),
            height: +t.getAttribute("height")
        })) : (n = e && t.getBBox && t.getBBox(),
        i = o = 0),
        e && "auto" !== e && (i += e.push ? e[0] * (n ? n.width : t.offsetWidth || 0) : e.x,
        o += e.push ? e[1] * (n ? n.height : t.offsetHeight || 0) : e.y),
        r.apply(i || o ? a.apply({
            x: i,
            y: o
        }) : {
            x: a.e,
            y: a.f
        })
    }, xt = function(t, e, r, n) {
        var i, o = st(t.parentNode, !0, !0), a = o.clone().multiply(st(e)), s = _t(t, r, o), l = _t(e, n, o), c = l.x, d = l.y;
        return a.e = a.f = 0,
        "auto" === n && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(bt) || [],
        c += (i = a.apply({
            x: +i[0],
            y: +i[1]
        })).x,
        d += i.y),
        (i || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (c -= (i = a.apply(e.getBBox())).x,
        d -= i.y),
        a.e = c - s.x,
        a.f = d - s.y,
        a
    }, St = function(t, e, r) {
        var n, i, o, a = r.align, s = r.matrix, l = r.offsetX, c = r.offsetY, d = r.alignOrigin, u = t[0][0], h = t[0][1], f = gt(e, "x"), p = gt(e, "y");
        return t && t.length ? (a && ("self" === a || (n = ut(a)[0] || e) === e ? Y(t, 1, 0, 0, 1, f - u, p - h) : (d && !1 !== d[2] ? lt.set(e, {
            transformOrigin: 100 * d[0] + "% " + 100 * d[1] + "%"
        }) : d = [gt(e, "xPercent") / -100, gt(e, "yPercent") / -100],
        o = (i = xt(e, n, d, "auto")).apply({
            x: u,
            y: h
        }),
        Y(t, i.a, i.b, i.c, i.d, f + i.e - (o.x - i.e), p + i.f - (o.y - i.f)))),
        s ? Y(t, s.a, s.b, s.c, s.d, s.e, s.f) : (l || c) && Y(t, 1, 0, 0, 1, l || 0, c || 0),
        t) : L("M0,0L0,0")
    }, Tt = function(t, e, r, n, i, o) {
        var a = e._gsap
          , s = a.harness
          , l = s && s.aliases && s.aliases[r]
          , c = l && l.indexOf(",") < 0 ? l : r
          , d = t._pt = new ct(t._pt,e,c,0,0,wt,0,a.set(e, c, t));
        d.u = dt(a.get(e, c, o)) || 0,
        d.path = n,
        d.pp = i,
        t._props.push(c)
    }, qt = {
        version: "3.6.0",
        name: "motionPath",
        register: function(t, e, r) {
            dt = (lt = t).utils.getUnit,
            ut = lt.utils.toArray,
            ct = r
        },
        init: function(t, e) {
            if (!lt)
                return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),
                !1;
            "object" == typeof e && !e.style && e.path || (e = {
                path: e
            });
            var r, n, i, o, a = [], s = e, l = s.path, c = s.autoRotate, d = s.unitX, u = s.unitY, h = s.x, f = s.y, p = l[0], m = (i = e.start,
            o = "end"in e ? e.end : 1,
            function(t) {
                return i || 1 !== o ? M(t, i, o) : t
            }
            );
            if (this.rawPaths = a,
            this.target = t,
            (this.rotate = c || 0 === c) && (this.rOffset = parseFloat(c) || 0,
            this.radians = !!e.useRadians,
            this.rProp = e.rotation || "rotation",
            this.rSet = t._gsap.set(t, this.rProp, this),
            this.ru = dt(t._gsap.get(t, this.rProp)) || 0),
            Array.isArray(l) && !("closed"in l) && "number" != typeof p) {
                for (n in p)
                    !h && ~ht.indexOf(n) ? h = n : !f && ~ft.indexOf(n) && (f = n);
                for (n in h && f ? a.push(vt(this, mt(mt([], l, h, 0), l, f, 1), t, h, f, m, e, d || dt(l[0][h]), u || dt(l[0][f]))) : h = f = 0,
                p)
                    n !== h && n !== f && a.push(vt(this, mt([], l, n, 2), t, n, 0, m, e, dt(l[0][n])))
            } else
                E(r = m(St(L(e.path), t, e)), e.resolution),
                a.push(r),
                Tt(this, t, e.x || "x", r, "x", e.unitX || "px"),
                Tt(this, t, e.y || "y", r, "y", e.unitY || "px")
        },
        render: function(t, e) {
            var r = e.rawPaths
              , n = r.length
              , i = e._pt;
            for (t > 1 ? t = 1 : t < 0 && (t = 0); n--; )
                R(r[n], t, !n && e.rotate, r[n]);
            for (; i; )
                i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t),
                i = i._next;
            e.rotate && e.rSet(e.target, e.rProp, r[0].angle * (e.radians ? pt : 1) + e.rOffset + e.ru, e, t)
        },
        getLength: function(t) {
            return E(L(t)).totalLength
        },
        sliceRawPath: M,
        getRawPath: L,
        pointsToSegment: X,
        stringToRawPath: H,
        rawPathToString: D,
        transformRawPath: Y,
        getGlobalMatrix: st,
        getPositionOnPath: R,
        cacheRawPathMeasurements: E,
        convertToPath: function(t, e) {
            return ut(t).map((function(t) {
                return k(t, !1 !== e)
            }
            ))
        },
        convertCoordinates: function(t, e, r) {
            var n = st(e, !0, !0).multiply(st(t));
            return r ? n.apply(r) : n
        },
        getAlignMatrix: xt,
        getRelativePosition: function(t, e, r, n) {
            var i = xt(t, e, r, n);
            return {
                x: i.e,
                y: i.f
            }
        },
        arrayToRawPath: function(t, e) {
            var r = mt(mt([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
            return e.relative && yt(r),
            ["cubic" === e.type ? r : X(r, e.curviness)]
        }
    };
    (lt || "undefined" != typeof window && (lt = window.gsap) && lt.registerPlugin && lt) && lt.registerPlugin(qt);
    var Lt = r(2);
    n.a.registerPlugin(qt);
    i.default.timelines.qode = (()=>{
        const t = document.querySelector(".qode-screen--qode")
          , e = document.querySelector(".qode-screen--end")
          , r = document.querySelector(".qode-screen--end .qode-text-holder")
          , o = document.querySelector(".qode-tagline")
          , a = document.querySelectorAll(".qode-tagline>svg")
          , s = document.querySelectorAll(".qode-tagline>svg path")
          , l = document.querySelector(".qode-tagline-path-holder")
          , c = document.querySelector("#qode-bridge-logo-motion-path")
          , d = document.querySelector(".qode-screen--end .qode-logo")
          , u = document.querySelectorAll(".qode-screen--end .qode-logo .qode-logo-color circle")
          , h = document.querySelectorAll(".qode-screen--end .qode-logo .qode-logo-color:nth-of-type(2)")
          , f = document.querySelector(".qode-screen--end .qode-logo .qode-logo-black")
          , p = document.querySelector(".qode-end-tagline")
          , m = document.querySelector(".qode-end-description")
          , g = document.querySelector(".qode-newsletter-footer");
        let y, v;
        const w = document.querySelector(".q-header-showcase-icon")
          , b = document.querySelector(".q-header-showcase-icon .q-text-scroll")
          , _ = document.querySelector(".q-header-showcase-icon .q-text-restart");
        let x = !1;
        const S = document.querySelector(".q-header-showcase-icon .q-scroll")
          , T = document.querySelector(".q-header-showcase-icon .q-restart");
        let q = {
            logoAnimatedUp: !1,
            logoAnimatingDown: !1
        };
        y = i.default.windowWidth > 1680 ? 10 : i.default.windowWidth > 677 ? 8 : 6,
        v = i.default.windowWidth >= 678 && i.default.windowWidth <= 1024 ? 100 : 135;
        const L = (t,e,r,i,o)=>{
            e ? n.a.to(t, {
                transformOrigin: "center center",
                duration: .6,
                x: r,
                y: i,
                rotate: o,
                ease: "power3.out"
            }) : n.a.to(t, {
                duration: .4,
                x: 0,
                y: 0,
                rotate: 0,
                ease: "power3.in"
            })
        }
        ;
        n.a.set(u, {
            strokeDashoffset: 780
        }),
        n.a.set([t, r, e, g], {
            opacity: 0
        }),
        n.a.set([p, m, g], {
            y: 20
        }),
        n.a.set(l, {
            rotate: 478
        }),
        n.a.set(d, {
            transformOrigin: "center center",
            scale: y,
            rotate: -270,
            y: "127vh"
        });
        const A = n.a.timeline()
          , O = ()=>{
            const t = n.a.timeline({
                onStart: ()=>{
                    n.a.set(u, {
                        strokeDashoffset: 780
                    })
                }
            });
            return t.to(f, {
                duration: .001,
                onUpdate: ()=>{
                    n.a.set(h, {
                        transformOrigin: "center",
                        rotate: 0
                    }),
                    n.a.to(u, {
                        duration: 1.4,
                        ease: "power2.inOut",
                        strokeDashoffset: 0
                    }),
                    n.a.to(h, {
                        duration: .2,
                        delay: .9,
                        ease: "power2.out",
                        transformOrigin: "center",
                        rotate: 16
                    })
                }
            }).to(d, {
                y: 0,
                z: 0,
                scale: 1,
                duration: .5
            }).to(r, {
                autoAlpha: 1,
                duration: .1
            }, "-=.4").to([p, m], {
                y: 0,
                duration: .35
            }, "<").to(g, {
                autoAlpha: 1,
                duration: .1
            }, "-=.2").to(g, {
                y: 0,
                duration: .35
            }, "<"),
            t
        }
          , k = n.a.timeline({
            paused: !0,
            onUpdate: ()=>{
                i.default.activeSection = "qode",
                i.default.progress.qode > .95 && !x ? (Object(Lt.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(Lt.headerIconTextAnimateIn)(_),
                S.classList.remove("-active"),
                T.classList.add("-active"),
                w.classList.add("q-restart-active"),
                x = !0) : i.default.progress.qode <= .95 && x && (Object(Lt.headerIconTextAnimateOut)(".q-header-showcase-icon .q-text .-active"),
                Object(Lt.headerIconTextAnimateIn)(b),
                S.classList.add("-active"),
                T.classList.remove("-active"),
                w.classList.remove("q-restart-active"),
                x = !1)
            }
        });
        return k.addLabel("titles-in").to(t, {
            duration: .001,
            onStart: ()=>{
                n.a.set(t, {
                    opacity: 0
                }),
                n.a.set(o, {
                    y: 20
                })
            }
            ,
            onComplete: ()=>{
                n.a.to(t, {
                    opacity: 1,
                    duration: .1
                }),
                n.a.to(o, {
                    y: 0,
                    duration: .35
                })
            }
            ,
            onReverseComplete: ()=>{
                n.a.to(t, {
                    opacity: 0,
                    duration: .1,
                    delay: .1
                }),
                n.a.to(o, {
                    y: 20,
                    duration: .35
                })
            }
        }, "titles-in").addLabel("change-titles"),
        s.forEach((t,e)=>{
            k.to(s[e], {
                duration: .001,
                delay: .37,
                onComplete: ()=>{
                    switch (e) {
                    case 0:
                        L(t, !0, -1, 17, -12);
                        break;
                    case 1:
                        L(t, !0, 1, 6, -6);
                        break;
                    case 2:
                        L(t, !0, -1, 3, -4);
                        break;
                    case 4:
                        L(t, !0, -2, 4, 7);
                        break;
                    case 5:
                        L(t, !0, -4, 15, 13)
                    }
                }
                ,
                onReverseComplete: ()=>{
                    L(s, !1)
                }
            }, "change-titles")
        }
        ),
        k.addLabel("motion-path").from(a, {
            duration: 6,
            delay: .6,
            motionPath: {
                path: c,
                align: c,
                autoRotate: !0,
                alignOrigin: [.5, .8],
                end: .82,
                repeat: !1
            }
        }, "motion-path").to(l, {
            rotate: v,
            duration: 9.4,
            delay: 1.2
        }, "motion-path").to(e, {
            opacity: 1,
            duration: .1,
            onReverseComplete: ()=>{
                n.a.to(e, {
                    opacity: 0,
                    duration: .01
                })
            }
        }, "motion-path").add((A.to(d, {
            force3D: !1,
            x: 0,
            y: "85",
            scale: 1,
            duration: 10.5,
            delay: .5
        }).to(d, {
            duration: 8,
            delay: 2.5,
            rotate: 0
        }, "<"),
        A), "motion-path").to(d, {
            duration: 11.3,
            onUpdate: ()=>{
                A.paused() && !document.body.classList.contains("q-scroll-prevented") && A.resume()
            }
        }, "motion-path").to(d, {
            duration: .5,
            onUpdate: ()=>{
                i.default.progress.qode >= .93 && i.default.forwards && !q.logoAnimatedUp && !document.body.classList.contains("q-scroll-prevented") ? (q.logoAnimatedUp = !0,
                O(),
                A.progress(1).pause()) : !i.default.forwards && q.logoAnimatedUp && (q.logoAnimatedUp = !1,
                n.a.timeline({
                    onStart: ()=>{
                        n.a.to(u, {
                            strokeDashoffset: 780,
                            ease: "sine.in",
                            duration: .8,
                            overwrite: !0,
                            onStart: ()=>{
                                document.body.classList.contains("q-page-loading") || document.body.classList.add("q-scroll-prevented")
                            }
                        }),
                        n.a.to(h, {
                            duration: .15,
                            delay: .45,
                            ease: "sine.out",
                            transformOrigin: "center",
                            rotate: 0,
                            onComplete: ()=>{
                                n.a.to([p, m], {
                                    y: 20,
                                    duration: .2
                                }),
                                n.a.to(g, {
                                    y: 20,
                                    duration: .2
                                }),
                                n.a.to(r, {
                                    autoAlpha: 0,
                                    duration: .1,
                                    delay: .1
                                }),
                                n.a.to(g, {
                                    autoAlpha: 0,
                                    duration: .1,
                                    delay: .1
                                }),
                                n.a.to(d, {
                                    y: 85,
                                    duration: .38,
                                    delay: .07,
                                    onComplete: ()=>{
                                        document.body.classList.contains("q-page-loading") || document.body.classList.remove("q-scroll-prevented")
                                    }
                                })
                            }
                        })
                    }
                }).to(d, {
                    duration: 1
                }))
            }
        }),
        k
    }
    )()
}
]);
