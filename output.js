//Tue Aug 13 2024 09:24:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("爱海盐");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(aa) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ac) {
      return typeof ac;
    } : function (ac) {
      return ac && "function" == typeof Symbol && ac.constructor === Symbol && ac !== Symbol.prototype ? "symbol" : typeof ac;
    };
    return b(aa);
  }
  function c(aa, ab) {
    var ad = "undefined" != typeof Symbol && aa[Symbol.iterator] || aa["@@iterator"];
    if (!ad) {
      if (Array.isArray(aa) || (ad = d(aa)) || ab && aa && "number" == typeof aa.length) {
        ad && (aa = ad);
        var ae = 0,
          af = function () {};
        return {
          s: af,
          n: function () {
            var am = {};
            am.done = !0;
            return ae >= aa.length ? am : {
              done: !1,
              value: aa[ae++]
            };
          },
          e: function (am) {
            throw am;
          },
          f: af
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ag,
      ah = !0,
      ai = !1;
    return {
      s: function () {
        ad = ad.call(aa);
      },
      n: function () {
        var ao = ad.next();
        ah = ao.done;
        return ao;
      },
      e: function (am) {
        ai = !0;
        ag = am;
      },
      f: function () {
        try {
          ah || null == ad.return || ad.return();
        } finally {
          if (ai) {
            throw ag;
          }
        }
      }
    };
  }
  function d(aa, ab) {
    if (aa) {
      if ("string" == typeof aa) {
        return f(aa, ab);
      }
      var ad = {}.toString.call(aa).slice(8, -1);
      "Object" === ad && aa.constructor && (ad = aa.constructor.name);
      return "Map" === ad || "Set" === ad ? Array.from(aa) : "Arguments" === ad || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ad) ? f(aa, ab) : void 0;
    }
  }
  function f(aa, ab) {
    (null == ab || ab > aa.length) && (ab = aa.length);
    for (var ad = 0, ae = Array(ab); ad < ab; ad++) {
      ae[ad] = aa[ad];
    }
    return ae;
  }
  function g() {
    'use strict';

    g = function () {
      return ac;
    };
    var ab,
      ac = {},
      ad = Object.prototype,
      ae = ad.hasOwnProperty,
      af = Object.defineProperty || function (aH, aI, aJ) {
        aH[aI] = aJ.value;
      },
      ag = "function" == typeof Symbol ? Symbol : {},
      ah = ag.iterator || "@@iterator",
      ai = ag.asyncIterator || "@@asyncIterator",
      aj = ag.toStringTag || "@@toStringTag";
    function ak(aH, aI, aJ) {
      var aK = {
        value: aJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aH, aI, aK);
      return aH[aI];
    }
    try {
      ak({}, "");
    } catch (aI) {
      ak = function (aJ, aK, aL) {
        return aJ[aK] = aL;
      };
    }
    function al(aK, aL, aM, aN) {
      var aP = aL && aL.prototype instanceof as ? aL : as,
        aQ = Object.create(aP.prototype),
        aR = new aF(aN || []);
      af(aQ, "_invoke", {
        value: aB(aK, aM, aR)
      });
      return aQ;
    }
    function am(aK, aL, aM) {
      try {
        return {
          type: "normal",
          arg: aK.call(aL, aM)
        };
      } catch (aQ) {
        var aO = {};
        aO.type = "throw";
        aO.arg = aQ;
        return aO;
      }
    }
    ac.wrap = al;
    var an = "suspendedStart",
      ao = "suspendedYield",
      ap = "executing",
      aq = "completed",
      ar = {};
    function as() {}
    function at() {}
    function au() {}
    var av = {};
    ak(av, ah, function () {
      return this;
    });
    var aw = Object.getPrototypeOf,
      ax = aw && aw(aw(aG([])));
    ax && ax !== ad && ae.call(ax, ah) && (av = ax);
    au.prototype = as.prototype = Object.create(av);
    var ay = au.prototype;
    function az(aK) {
      ["next", "throw", "return"].forEach(function (aN) {
        ak(aK, aN, function (aP) {
          return this._invoke(aN, aP);
        });
      });
    }
    function aA(aK, aL) {
      function aP(aQ, aR, aS, aT) {
        var aV = am(aK[aQ], aK, aR);
        if ("throw" !== aV.type) {
          var aW = aV.arg,
            aX = aW.value;
          return aX && "object" == b(aX) && ae.call(aX, "__await") ? aL.resolve(aX.__await).then(function (aY) {
            aP("next", aY, aS, aT);
          }, function (aY) {
            aP("throw", aY, aS, aT);
          }) : aL.resolve(aX).then(function (aY) {
            aW.value = aY;
            aS(aW);
          }, function (aY) {
            return aP("throw", aY, aS, aT);
          });
        }
        aT(aV.arg);
      }
      var aN;
      af(this, "_invoke", {
        value: function (aQ, aR) {
          function aT() {
            return new aL(function (aW, aX) {
              aP(aQ, aR, aW, aX);
            });
          }
          return aN = aN ? aN.then(aT, aT) : aT();
        }
      });
    }
    function aB(aK, aL, aM) {
      var aO = an;
      return function (aP, aQ) {
        if (aO === ap) {
          throw Error("Generator is already running");
        }
        if (aO === aq) {
          if ("throw" === aP) {
            throw aQ;
          }
          var aS = {
            value: ab,
            done: !0
          };
          return aS;
        }
        for (aM.method = aP, aM.arg = aQ;;) {
          var aT = aM.delegate;
          if (aT) {
            var aU = aC(aT, aM);
            if (aU) {
              if (aU === ar) {
                continue;
              }
              return aU;
            }
          }
          if ("next" === aM.method) {
            aM.sent = aM._sent = aM.arg;
          } else {
            if ("throw" === aM.method) {
              if (aO === an) {
                throw aO = aq, aM.arg;
              }
              aM.dispatchException(aM.arg);
            } else {
              "return" === aM.method && aM.abrupt("return", aM.arg);
            }
          }
          aO = ap;
          var aV = am(aK, aL, aM);
          if ("normal" === aV.type) {
            if (aO = aM.done ? aq : ao, aV.arg === ar) {
              continue;
            }
            var aW = {};
            aW.value = aV.arg;
            aW.done = aM.done;
            return aW;
          }
          "throw" === aV.type && (aO = aq, aM.method = "throw", aM.arg = aV.arg);
        }
      };
    }
    function aC(aK, aL) {
      var aQ = aL.method,
        aR = aK.iterator[aQ];
      if (aR === ab) {
        aL.delegate = null;
        "throw" === aQ && aK.iterator.return && (aL.method = "return", aL.arg = ab, aC(aK, aL), "throw" === aL.method) || "return" !== aQ && (aL.method = "throw", aL.arg = new TypeError("The iterator does not provide a '" + aQ + "' method"));
        return ar;
      }
      var aO = am(aR, aK.iterator, aL.arg);
      if ("throw" === aO.type) {
        aL.method = "throw";
        aL.arg = aO.arg;
        aL.delegate = null;
        return ar;
      }
      var aP = aO.arg;
      return aP ? aP.done ? (aL[aK.resultName] = aP.value, aL.next = aK.nextLoc, "return" !== aL.method && (aL.method = "next", aL.arg = ab), aL.delegate = null, ar) : aP : (aL.method = "throw", aL.arg = new TypeError("iterator result is not an object"), aL.delegate = null, ar);
    }
    function aD(aK) {
      var aL = {
        tryLoc: aK[0]
      };
      var aM = aL;
      1 in aK && (aM.catchLoc = aK[1]);
      2 in aK && (aM.finallyLoc = aK[2], aM.afterLoc = aK[3]);
      this.tryEntries.push(aM);
    }
    function aE(aK) {
      var aL = aK.completion || {};
      aL.type = "normal";
      delete aL.arg;
      aK.completion = aL;
    }
    function aF(aK) {
      var aL = {
        tryLoc: "root"
      };
      this.tryEntries = [aL];
      aK.forEach(aD, this);
      this.reset(!0);
    }
    function aG(aK) {
      if (aK || "" === aK) {
        var aM = aK[ah];
        if (aM) {
          return aM.call(aK);
        }
        if ("function" == typeof aK.next) {
          return aK;
        }
        if (!isNaN(aK.length)) {
          var aN = -1,
            aO = function aR() {
              for (; ++aN < aK.length;) {
                if (ae.call(aK, aN)) {
                  aR.value = aK[aN];
                  aR.done = !1;
                  return aR;
                }
              }
              aR.value = ab;
              aR.done = !0;
              return aR;
            };
          return aO.next = aO;
        }
      }
      throw new TypeError(b(aK) + " is not iterable");
    }
    at.prototype = au;
    af(ay, "constructor", {
      value: au,
      configurable: !0
    });
    af(au, "constructor", {
      value: at,
      configurable: !0
    });
    at.displayName = ak(au, aj, "GeneratorFunction");
    ac.isGeneratorFunction = function (aK) {
      var aL = "function" == typeof aK && aK.constructor;
      return !!aL && (aL === at || "GeneratorFunction" === (aL.displayName || aL.name));
    };
    ac.mark = function (aK) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aK, au) : (aK.__proto__ = au, ak(aK, aj, "GeneratorFunction"));
      aK.prototype = Object.create(ay);
      return aK;
    };
    ac.awrap = function (aK) {
      var aL = {};
      aL.__await = aK;
      return aL;
    };
    az(aA.prototype);
    ak(aA.prototype, ai, function () {
      return this;
    });
    ac.AsyncIterator = aA;
    ac.async = function (aK, aL, aM, aN, aO) {
      void 0 === aO && (aO = Promise);
      var aP = new aA(al(aK, aL, aM, aN), aO);
      return ac.isGeneratorFunction(aL) ? aP : aP.next().then(function (aQ) {
        return aQ.done ? aQ.value : aP.next();
      });
    };
    az(ay);
    ak(ay, aj, "Generator");
    ak(ay, ah, function () {
      return this;
    });
    ak(ay, "toString", function () {
      return "[object Generator]";
    });
    ac.keys = function (aK) {
      var aM = Object(aK),
        aN = [];
      for (var aO in aM) aN.push(aO);
      aN.reverse();
      return function aP() {
        for (; aN.length;) {
          var aQ = aN.pop();
          if (aQ in aM) {
            aP.value = aQ;
            aP.done = !1;
            return aP;
          }
        }
        aP.done = !0;
        return aP;
      };
    };
    ac.values = aG;
    aF.prototype = {
      constructor: aF,
      reset: function (aK) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ab, this.done = !1, this.delegate = null, this.method = "next", this.arg = ab, this.tryEntries.forEach(aE), !aK) {
          for (var aL in this) "t" === aL.charAt(0) && ae.call(this, aL) && !isNaN(+aL.slice(1)) && (this[aL] = ab);
        }
      },
      stop: function () {
        this.done = !0;
        var aK = this.tryEntries[0].completion;
        if ("throw" === aK.type) {
          throw aK.arg;
        }
        return this.rval;
      },
      dispatchException: function (aK) {
        if (this.done) {
          throw aK;
        }
        var aM = this;
        function aS(aT, aU) {
          aP.type = "throw";
          aP.arg = aK;
          aM.next = aT;
          aU && (aM.method = "next", aM.arg = ab);
          return !!aU;
        }
        for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
          var aO = this.tryEntries[aN],
            aP = aO.completion;
          if ("root" === aO.tryLoc) {
            return aS("end");
          }
          if (aO.tryLoc <= this.prev) {
            var aQ = ae.call(aO, "catchLoc"),
              aR = ae.call(aO, "finallyLoc");
            if (aQ && aR) {
              if (this.prev < aO.catchLoc) {
                return aS(aO.catchLoc, !0);
              }
              if (this.prev < aO.finallyLoc) {
                return aS(aO.finallyLoc);
              }
            } else {
              if (aQ) {
                if (this.prev < aO.catchLoc) {
                  return aS(aO.catchLoc, !0);
                }
              } else {
                if (!aR) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aO.finallyLoc) {
                  return aS(aO.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aK, aL) {
        for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
          var aP = this.tryEntries[aO];
          if (aP.tryLoc <= this.prev && ae.call(aP, "finallyLoc") && this.prev < aP.finallyLoc) {
            var aQ = aP;
            break;
          }
        }
        aQ && ("break" === aK || "continue" === aK) && aQ.tryLoc <= aL && aL <= aQ.finallyLoc && (aQ = null);
        var aR = aQ ? aQ.completion : {};
        aR.type = aK;
        aR.arg = aL;
        return aQ ? (this.method = "next", this.next = aQ.finallyLoc, ar) : this.complete(aR);
      },
      complete: function (aK, aL) {
        if ("throw" === aK.type) {
          throw aK.arg;
        }
        "break" === aK.type || "continue" === aK.type ? this.next = aK.arg : "return" === aK.type ? (this.rval = this.arg = aK.arg, this.method = "return", this.next = "end") : "normal" === aK.type && aL && (this.next = aL);
        return ar;
      },
      finish: function (aK) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.finallyLoc === aK) {
            this.complete(aN.completion, aN.afterLoc);
            aE(aN);
            return ar;
          }
        }
      },
      catch: function (aK) {
        for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
          var aN = this.tryEntries[aM];
          if (aN.tryLoc === aK) {
            var aO = aN.completion;
            if ("throw" === aO.type) {
              var aP = aO.arg;
              aE(aN);
            }
            return aP;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aK, aL, aM) {
        this.delegate = {
          iterator: aG(aK),
          resultName: aL,
          nextLoc: aM
        };
        "next" === this.method && (this.arg = ab);
        return ar;
      }
    };
    return ac;
  }
  function h(aa, ab, ac, ad, ae, af, ag) {
    try {
      var ah = aa[af](ag),
        ai = ah.value;
    } catch (ak) {
      return void ac(ak);
    }
    ah.done ? ab(ai) : Promise.resolve(ai).then(ad, ae);
  }
  function i(aa) {
    return function () {
      var ad = this,
        ae = arguments;
      return new Promise(function (af, ag) {
        var ai = aa.apply(ad, ae);
        function aj(al) {
          h(ai, af, ag, aj, ak, "next", al);
        }
        function ak(al) {
          h(ai, af, ag, aj, ak, "throw", al);
        }
        aj(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.AiHaiYan : $.getdata("AiHaiYan")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "60",
    v = "10018",
    w = "FR*r!isE5W",
    x = "0be39bb836a0d86aa76761af779aa93e",
    y = "",
    z = "",
    A = "",
    B = "";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function ac() {
      var af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk;
      return g().wrap(function (bl) {
        for (;;) {
          switch (bl.prev = bl.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bl.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bl.next = 5;
              return a8("先去boxjs填写账号密码");
            case 5:
              return bl.abrupt("return");
            case 6:
              bl.next = 8;
              return a6();
            case 8:
              l = bl.sent;
              af = j.split(" ");
              ag = c(af);
              bl.prev = 11;
              ag.s();
            case 13:
              if ((ah = ag.n()).done) {
                bl.next = 259;
                break;
              }
              ai = ah.value;
              console.log("随机生成UA");
              aj = a2();
              s = aj.ua;
              t = aj.commonUa;
              console.log(s);
              console.log(t);
              q = ai.split("&")[0];
              r = ai.split("&")[1];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bl.next = 27;
              return L("/api/account/init");
            case 27:
              ak = bl.sent;
              o = ak.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bl.next = 33;
              return F("/web/init?client_id=".concat(v));
            case 33:
              al = bl.sent;
              m = al.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bl.next = 39;
              return H("/web/oauth/credential_auth");
            case 39:
              if (am = bl.sent, am.data) {
                bl.next = 43;
                break;
              }
              console.log(am.message);
              return bl.abrupt("continue", 257);
            case 43:
              an = am.data.authorization_code.code;
              console.log(an);
              console.log("登录");
              bl.next = 48;
              return L("/api/zbtxz/login", "check_token=&code=".concat(an, "&token=&type=-1&union_id="));
            case 48:
              if (ao = bl.sent, console.log("登录成功"), p = ao.data.session.account_id, o = ao.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), y) {
                bl.next = 65;
                break;
              }
              bl.next = 58;
              return J("/api/buoy/list");
            case 58:
              for (ap = bl.sent, aq = decodeURIComponent(ap.data.new_up.icon_list[0].turn_to.url), ar = aq.split("?")[1], as = {}, at = ar.split("&"), au = 0, av = at.length; au < av; au++) {
                aw = at[au].split("=");
                as[aw[0]] = aw[1];
              }
              y = as.id;
            case 65:
              if (y) {
                bl.next = 68;
                break;
              }
              console.log("获取id失败");
              return bl.abrupt("continue", 257);
            case 68:
              console.log(y);
              console.log("获取apiDt");
              bl.next = 72;
              return N("/aosbase/_auth_dt");
            case 72:
              ax = bl.sent;
              z = ax.data.substring(32, 68);
              console.log(z);
              A = "0";
              ay = {
                app_user_token: o,
                appid: "haiyan",
                noncestr: a5(6, !1),
                phone: q,
                portrait_url: ao.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ao.data.account.id,
                user_name: ao.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              ay.signature = l.md5(a3(ay) + "&appkey=".concat(x));
              bl.next = 80;
              return R("/aosbase/_auth_appuserinit", ay);
            case 80:
              az = bl.sent;
              B = az.data.access_token;
              A = az.data.data.user_id;
              console.log("阅读token：".concat(B));
              aA = "";
              aB = Date.now() + "" + Math.floor(10000000 * Math.random());
              bl.next = 88;
              return P("/aoslearnfoot/_optionp_list?activity_id=".concat(y));
            case 88:
              aC = bl.sent;
              aD = c(aC.data);
              bl.prev = 90;
              aD.s();
            case 92:
              if ((aE = aD.n()).done) {
                bl.next = 179;
                break;
              }
              aF = aE.value;
              aG = aF.id;
              console.log(aF.title);
              bl.next = 98;
              return P("/aoslearnfoot/optionp_detail?id=".concat(aF.id));
            case 98:
              if (aH = bl.sent, aH.data.task_num != aH.data.user_done_num) {
                bl.next = 102;
                break;
              }
              console.log("已完成");
              return bl.abrupt("continue", 177);
            case 102:
              if (aA) {
                bl.next = 143;
                break;
              }
              console.log("获取滑块token");
              aI = 0;
            case 105:
              if (!(aI < 3)) {
                bl.next = 143;
                break;
              }
              aJ = a5(10, !1);
              aK = Math.round(new Date().getTime() / 1000).toString();
              aL = "https://haiyan.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aG);
              aM = a0({
                once: aJ,
                referer: aL,
                timestamp: aK,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bl.next = 112;
              return P("/basemodule/_captcha_get?once=".concat(aJ, "&referer=").concat(aL, "&timestamp=").concat(aK, "&type=1&signature=").concat(encodeURIComponent(aM)));
            case 112:
              aN = bl.sent;
              console.log("滑块：".concat(aN.data.block));
              console.log("背景：".concat(aN.data.background));
              bl.next = 117;
              return U({
                slidingImage: aN.data.block,
                backImage: aN.data.background
              });
            case 117:
              if (aO = bl.sent, aO) {
                bl.next = 123;
                break;
              }
              console.log("ddddocr服务异常");
              bl.next = 122;
              return a8("ddddocr服务异常");
            case 122:
              return bl.abrupt("continue", 140);
            case 123:
              console.log(aO);
              aP = aO.result;
              aQ = a0({
                x: aP,
                width: 384,
                track: [{
                  x: Math.floor(aP / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aP / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aP / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aP / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aP / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aP,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bl.next = 129;
              return R("/basemodule/_captcha_check", {
                token: aN.data.token,
                data: aQ,
                referer: aL,
                type: aN.data.type
              });
            case 129:
              if (aR = bl.sent, !aR.data.result) {
                bl.next = 139;
                break;
              }
              var bn = {};
              bn.validate = aR.data.token;
              bn.verif_type = 3;
              bn.afs_uuid = "";
              bn.source = "yundian";
              bl.next = 133;
              return R("/aosbasemodule/intelverifcode_check", bn);
            case 133:
              aS = bl.sent;
              aA = aS.data.tokenid;
              console.log("滑块token：".concat(aA));
              return bl.abrupt("break", 143);
            case 139:
              console.log("验证失败");
            case 140:
              aI++;
              bl.next = 105;
              break;
            case 143:
              if (aA) {
                bl.next = 145;
                break;
              }
              return bl.abrupt("break", 179);
            case 145:
              bl.next = 147;
              return P("/aosbasemodule/_task_list?offset=0&count=".concat(aF.task_num, "&module_id=").concat(aF.m_id, "&activity_id=").concat(aF.id));
            case 147:
              aT = bl.sent;
              aU = c(aT.data);
              bl.prev = 149;
              aU.s();
            case 151:
              if ((aV = aU.n()).done) {
                bl.next = 169;
                break;
              }
              if (aW = aV.value, console.log("文章：".concat(aW.title)), 1 != aW.user_done) {
                bl.next = 157;
                break;
              }
              console.log("已完成");
              return bl.abrupt("continue", 167);
            case 157:
              var bo = {};
              bo.task_id = aW.id;
              bl.next = 159;
              return R("/aosbasemodule/task_create", bo);
            case 159:
              aX = bl.sent;
              bl.next = 162;
              return J("/api/article/detail?id=".concat(JSON.parse(aW.rule).news_id));
            case 162:
              var bp = {};
              bp.task_record_id = aX.data.task_record_id;
              bp.collect_info = "";
              bp.afs_tokenid = aA;
              bp.device_token = aB;
              bl.sent;
              bl.next = 165;
              return R("/aosbasemodule/task_done", bp);
            case 165:
              aY = bl.sent;
              console.log("阅读：".concat(aY.msg));
            case 167:
              bl.next = 151;
              break;
            case 169:
              bl.next = 174;
              break;
            case 171:
              bl.prev = 171;
              bl.t0 = bl.catch(149);
              aU.e(bl.t0);
            case 174:
              bl.prev = 174;
              aU.f();
              return bl.finish(174);
            case 177:
              bl.next = 92;
              break;
            case 179:
              bl.next = 184;
              break;
            case 181:
              bl.prev = 181;
              bl.t1 = bl.catch(90);
              aD.e(bl.t1);
            case 184:
              bl.prev = 184;
              aD.f();
              return bl.finish(184);
            case 187:
              bl.next = 189;
              return P("/aoslearnfoot/_ac_detail?id=".concat(y));
            case 189:
              aZ = bl.sent;
              b0 = JSON.parse(aZ.data.other_set).lottery.id;
              bl.next = 193;
              return P("/aoslottery/ac_lottery_times?id=".concat(b0));
            case 193:
              if (b1 = bl.sent, console.log("拥有".concat(b1.data.all_remain, "次抽奖")), !(b1.data.all_remain > 0)) {
                bl.next = 257;
                break;
              }
              console.log("获取抽奖滑块token");
              b2 = "";
              b3 = 0;
            case 199:
              if (!(b3 < 3)) {
                bl.next = 237;
                break;
              }
              b4 = a5(10, !1);
              b5 = Math.round(new Date().getTime() / 1000).toString();
              b6 = "https://haiyan.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              b7 = a0({
                once: b4,
                referer: b6,
                timestamp: b5,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bl.next = 206;
              return P("/basemodule/_captcha_get?once=".concat(b4, "&referer=").concat(b6, "&timestamp=").concat(b5, "&type=1&signature=").concat(encodeURIComponent(b7)));
            case 206:
              b8 = bl.sent;
              console.log("滑块：".concat(b8.data.block));
              console.log("背景：".concat(b8.data.background));
              bl.next = 211;
              return U({
                slidingImage: b8.data.block,
                backImage: b8.data.background
              });
            case 211:
              if (b9 = bl.sent, b9) {
                bl.next = 217;
                break;
              }
              console.log("ddddocr服务异常");
              bl.next = 216;
              return a8("ddddocr服务异常");
            case 216:
              return bl.abrupt("continue", 234);
            case 217:
              console.log(b9);
              ba = b9.result;
              bb = a0({
                x: ba,
                width: 384,
                track: [{
                  x: Math.floor(ba / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(ba / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(ba / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(ba / 4),
                  y: 0,
                  time: 100
                }, {
                  x: ba / 2,
                  y: 0,
                  time: 100
                }, {
                  x: ba,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bl.next = 223;
              return R("/basemodule/_captcha_check", {
                token: b8.data.token,
                data: bb,
                referer: b6,
                type: b8.data.type
              });
            case 223:
              if (bc = bl.sent, !bc.data.result) {
                bl.next = 233;
                break;
              }
              var bq = {};
              bq.validate = bc.data.token;
              bq.verif_type = 3;
              bq.afs_uuid = "";
              bq.source = "yundian";
              bl.next = 227;
              return R("/aosbasemodule/intelverifcode_check", bq);
            case 227:
              bd = bl.sent;
              b2 = bd.data.tokenid;
              console.log("抽奖滑块token：".concat(b2));
              return bl.abrupt("break", 237);
            case 233:
              console.log("验证失败");
            case 234:
              b3++;
              bl.next = 199;
              break;
            case 237:
              if (b2) {
                bl.next = 239;
                break;
              }
              return bl.abrupt("continue", 257);
            case 239:
              bl.next = 241;
              return P("/aoslottery/_ac_detail?id=".concat(b0));
            case 241:
              be = bl.sent;
              bf = 0;
            case 243:
              if (!(bf < b1.data.all_remain)) {
                bl.next = 257;
                break;
              }
              bl.next = 246;
              return R("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: be.data.m_id,
                content_id: be.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: be.data.title,
                device_token: aB,
                user_id: az.data.data.user_id,
                user_name: az.data.data.user_name,
                phone_num: q,
                page_path: "module-study/home/home",
                version: "1.0.0",
                network: "wifi",
                client_model: "android",
                system_version: "Android 11",
                resolution: "",
                baidu_longitude: "",
                baidu_latitude: "",
                longitude: 0,
                latitude: 0,
                province: "",
                city: "",
                area: "",
                street: "",
                address: ""
              });
            case 246:
              if (bg = bl.sent, console.log("抽奖提交：".concat(bg.msg)), 0 == bg.code) {
                bl.next = 250;
                break;
              }
              return bl.abrupt("continue", 254);
            case 250:
              var br = {};
              br.id = b0;
              br.verif_uuid = "";
              br.verif_code = "";
              br.afs_tokenid = b2;
              br.collect_info = "";
              br.longitude = 0;
              br.latitude = 0;
              br.device_token = aB;
              bl.next = 252;
              return R("/aoslottery/ac_sub", br);
            case 252:
              bh = bl.sent;
              0 == bh.code ? (console.log("抽奖获得：".concat(null == bh || null === (bi = bh.data) || void 0 === bi ? void 0 : bi.title)), 3 == (null == bh || null === (bj = bh.data) || void 0 === bj ? void 0 : bj.type) && (n += "用户：".concat(q, " 抽奖获得：").concat(null == bh || null === (bk = bh.data) || void 0 === bk ? void 0 : bk.title, "\n"))) : "o d w" == bh.msg ? console.log("谢谢参与") : console.log(bh.msg);
            case 254:
              bf++;
              bl.next = 243;
              break;
            case 257:
              bl.next = 13;
              break;
            case 259:
              bl.next = 264;
              break;
            case 261:
              bl.prev = 261;
              bl.t2 = bl.catch(11);
              ag.e(bl.t2);
            case 264:
              bl.prev = 264;
              ag.f();
              return bl.finish(264);
            case 267:
              if (!n) {
                bl.next = 270;
                break;
              }
              bl.next = 270;
              return a8(n);
            case 270:
            case "end":
              return bl.stop();
          }
        }
      }, ac, null, [[11, 261, 264, 267], [90, 181, 184, 187], [149, 171, 174, 177]]);
    }));
    return E.apply(this, arguments);
  }
  function F(aa) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              am ? (console.log("".concat(JSON.stringify(am))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : af(JSON.parse(ao));
                            } catch (av) {
                              $.logErr(av, an);
                            } finally {
                              af();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, al);
                  }));
                  return function (am, an, ao) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return G.apply(this, arguments);
  }
  function H(aa) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ab(ac) {
      var ad;
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              ad = W();
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ad.uuid,
                    "X-SIGNATURE": ad.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": s
                  },
                  body: ad.body
                };
                $.post(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            try {
                              al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(an));
                            } catch (aq) {
                              $.logErr(aq, am);
                            } finally {
                              ag();
                            }
                          case 1:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return I.apply(this, arguments);
  }
  function J(aa) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ab(ac) {
      var ad;
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              ad = X(ac);
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ad.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": ad.uuid,
                  "X-SIGNATURE": ad.signature,
                  "X-TENANT-ID": u,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": t
                };
                var ai = {
                  url: "https://vapp.tmuyun.com".concat(ac),
                  headers: ah
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ag();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return K.apply(this, arguments);
  }
  function L(aa, ab) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function aa(ab, ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = X(ab);
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://vapp.tmuyun.com".concat(ab),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ae.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ae.uuid,
                    "X-SIGNATURE": ae.signature,
                    "X-TENANT-ID": u,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ac
                };
                $.post(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, aa);
    }));
    return M.apply(this, arguments);
  }
  function N(aa) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function aa(ab) {
      return g().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              return ad.abrupt("return", new Promise(function (af) {
                var ag = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ab),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "69",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ag, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            af();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ad.stop();
          }
        }
      }, aa);
    }));
    return O.apply(this, arguments);
  }
  function P(aa) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Y(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ah, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !ak) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(am));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, al);
                          case 14:
                            ao.prev = 14;
                            af();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return Q.apply(this, arguments);
  }
  function R(aa, ab) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": A,
                    "Access-Api-Signature": Y(),
                    "Access-T-Id-In": "69",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_aihaiyan;xsb_aihaiyan;3.0.61.0;native_app;6.12.0",
                    "Access-Token": B,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": z,
                    "Access-T-Id": "69",
                    Accept: "*/*",
                    Origin: "https://haiyan.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.haiyan",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://haiyan.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ad)
                };
                $.post(ai, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !al) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(an));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, am);
                          case 14:
                            ap.prev = 14;
                            ag();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return T.apply(this, arguments);
  }
  function U(aa) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "".concat(k, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(ac)
                };
                $.post(ai, function (aj, ak, al) {
                  try {
                    aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(al));
                  } catch (am) {
                    $.logErr(am, ak);
                  } finally {
                    ag();
                  }
                });
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return V.apply(this, arguments);
  }
  function W() {
    var aa = new (l.loadJSEncrypt())();
    aa.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = aa.encrypt(r);
    var ab = Z(),
      ac = "client_id=".concat(v, "&password=").concat(r, "&phone_number=").concat(q),
      ad = "post%%/web/oauth/credential_auth?".concat(ac, "%%").concat(ab, "%%");
    ac = "client_id=".concat(v, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ae = CryptoJS.HmacSHA256(ad, m),
      af = CryptoJS.enc.Hex.stringify(ae),
      ag = {
        uuid: ab,
        signature: af,
        body: ac
      };
    return ag;
  }
  function X(aa) {
    var ab = Z(),
      ac = Date.now();
    aa.indexOf("?") > 0 && (aa = aa.substring(0, aa.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ad = CryptoJS.SHA256("".concat(aa, "&&").concat(o, "&&").concat(ab, "&&").concat(ac, "&&").concat(w, "&&").concat(u)).toString(),
      ae = {
        uuid: ab,
        time: ac,
        signature: ad
      };
    return ae;
  }
  function Y() {
    var aa = Date.now(),
      ab = a5(32, !1),
      ac = "haiyan".concat(ab).concat(aa, "2803cb8d50798c80b66ecd70da7e5fb1"),
      ad = l.md5(ac);
    return "haiyan;".concat(ab, ";").concat(aa, ";").concat(ad);
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (aa) {
      var ab = 16 * Math.random() | 0,
        ac = "x" === aa ? ab : 3 & ab | 8;
      return ac.toString(16);
    });
  }
  function a0(aa, ab, ac) {
    var ad = l.createCryptoJS(),
      ae = ad.enc.Utf8.parse(ab),
      af = ad.enc.Utf8.parse(ac),
      ag = ad.enc.Utf8.parse(JSON.stringify(aa)),
      ah = ad.AES.encrypt(ag, ae, {
        iv: af,
        mode: ad.mode.CBC,
        padding: ad.pad.Pkcs7
      });
    return ad.enc.Base64.stringify(ah.ciphertext);
  }
  function a1(aa) {
    return aa[Math.floor(Math.random() * aa.length)];
  }
  function a2() {
    var aa = "3.0.61.0",
      ab = Z(),
      ac = a1(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ad = "Xiaomi " + ac,
      ae = "Android",
      af = "".concat(ae.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(aa, ";1.0;null;").concat(ac),
      ag = "".concat(aa, ";").concat(ab, ";").concat(ad, ";").concat(ae, ";").concat("11", ";Release;").concat("6.12.0"),
      ah = {
        ua: af,
        commonUa: ag
      };
    return ah;
  }
  function a3() {
    var aa = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ab = [];
    for (var ac in aa) {
      var ad = aa[ac];
      ab.push(ac + "=" + a4(ad));
    }
    return ab.length ? "" + ab.join("&") : "";
  }
  function a4(aa) {
    aa = (aa + "").toString();
    return encodeURIComponent(aa).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a5() {
    var aa = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ac = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ad = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      ae = [];
    if (ac = ac || ad.length, aa) {
      for (var af = 0; af < aa; af++) {
        ae[af] = ad[0 | Math.random() * ac];
      }
    } else {
      var ag;
      ae[8] = ae[13] = ae[18] = ae[23] = "-";
      ae[14] = "4";
      for (var ah = 0; ah < 36; ah++) {
        ae[ah] || (ag = 0 | 16 * Math.random(), ae[ah] = ad[19 == ah ? 3 & ag | 8 : ag]);
      }
    }
    return ab ? (ae.shift(), "u" + ae.join("")) : ae.join("");
  }
  function a6() {
    return a7.apply(this, arguments);
  }
  function a7() {
    a7 = i(g().mark(function ab() {
      var ad;
      return g().wrap(function ae(af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (ad = $.getdata("Utils_Code") || "", !ad || !Object.keys(ad).length) {
                af.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ad);
              return af.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return af.abrupt("return", new Promise(function () {
                var ah = i(g().mark(function ai(aj) {
                  return g().wrap(function al(am) {
                    for (;;) {
                      switch (am.prev = am.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ao) {
                            $.setdata(ao, "Utils_Code");
                            eval(ao);
                            console.log("✅ Utils加载成功, 请继续");
                            aj(creatUtils());
                          });
                        case 1:
                        case "end":
                          return am.stop();
                      }
                    }
                  }, ai);
                }));
                return function (aj) {
                  return ah.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return a7.apply(this, arguments);
  }
  function a8(aa) {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function aa(ab) {
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              if (!$.isNode()) {
                ac.next = 5;
                break;
              }
              ac.next = 3;
              return notify.sendNotify($.name, ab);
            case 3:
              ac.next = 6;
              break;
            case 5:
              $.msg($.name, "", ab);
            case 6:
            case "end":
              return ac.stop();
          }
        }
      }, aa);
    }));
    return a9.apply(this, arguments);
  }
  i(g().mark(function aa() {
    return g().wrap(function (ab) {
      for (;;) {
        switch (ab.prev = ab.next) {
          case 0:
            ab.next = 2;
            return D();
          case 2:
          case "end":
            return ab.stop();
        }
      }
    }, aa);
  }))().catch(function (ab) {
    $.log(ab);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}