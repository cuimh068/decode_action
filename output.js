//Fri Oct 04 2024 13:37:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "葫芦星球";
VALY = ["hlxqck"];
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
class 哇哈哈_0x5711da {
  constructor(_0xd725c8) {
    this.body = _0xd725c8.split("#")[0];
    this.appkey = _0xd725c8.split("#")[1];
    this.uid = this.body.match(/userId=([\w\-]+)/)[1];
    this.utdid = this.body.match(/utdId=([\w\-]+)/)[1];
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x4e38a0 = $.time(13),
      _0x27867d = /(timeStamp=)[^&]+/g,
      _0x81dd99 = this.body.replace(_0x27867d, "$1" + _0x4e38a0),
      _0x39c85f = $.MD5Encrypt(0, "" + this.appkey + _0x4e38a0 + "user/userWatchVideoAndAlipayCash" + this.utdid),
      _0x32f8a6 = /(&|\?)sign=([^&]*)/g;
    _0x81dd99 = _0x81dd99.replace(_0x32f8a6, "$1sign=" + _0x39c85f);
    let _0x525bb5 = await $.task("post", "http://app.huluzhuan.com/user/userWatchVideoAndAlipayCash", {}, _0x81dd99);
    if (_0x525bb5.code == 200) {
      console.log("【" + this.f + "】获得支付宝红包成功。奖励金额" + _0x525bb5.data + "元");
      await $.wait(60000, 65000);
      await this.login();
    } else {
      console.log("【" + this.f + "】领取上限啦，明天再来试试吧");
      await this.lqinfo();
    }
  }
  async ["lqinfo"]() {
    let _0x392879 = $.time(13),
      _0x1f3c4f = /(timeStamp=)[^&]+/g,
      _0x4962dc = this.body.replace(_0x1f3c4f, "$1" + _0x392879),
      _0x5812ab = $.MD5Encrypt(0, "" + this.appkey + _0x392879 + "user/userWatchVideoAndAlipayCash" + this.utdid),
      _0x39e131 = /(&|\?)sign=([^&]*)/g;
    _0x4962dc = _0x4962dc.replace(_0x39e131, "$1sign=" + _0x5812ab);
    let _0x3b3954 = await $.task("post", "http://app.huluzhuan.com/user/alipayHongbaoList", {}, _0x4962dc);
    _0x3b3954.code == 200 && (console.log("【" + this.f + "】支付宝红包共领取：" + _0x3b3954.data.totalLingqian + "元"), this.message += "【" + this.f + "】支付宝红包共领取：" + _0x3b3954.data.totalLingqian + "元");
  }
}
$ = 哇哈哈_0x41bafd();
!(async () => {
  console.log(NAME);
  await $.ExamineCookie();
  $.cookie_list.length < 11 && (await $.Multithreading("login"));
  let _0x380996 = [];
  for (let _0x263cd5 of $.cookie_list) {
    if (_0x263cd5.message) {
      _0x380996.push(_0x263cd5.message);
    }
  }
  if (_0x380996.length > 0) {
    await $.SendMsg(_0x380996.join("\n"));
  }
})().catch(_0x1eda50 => {
  console.log(_0x1eda50);
}).finally(() => {});
function 哇哈哈_0x41bafd() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x428c31, _0x3cba65, _0x514f57) {
      let _0x5375fa = [];
      if (!_0x514f57) {
        _0x514f57 = 1;
      }
      while (_0x514f57--) {
        for (let _0x5f1b0a of $.cookie_list) {
          _0x5375fa.push(_0x5f1b0a[_0x428c31](_0x3cba65));
        }
      }
      await Promise.allSettled(_0x5375fa);
    }
    ["ExamineCookie"]() {
      let _0xe9492d = process.env[VALY] || CK,
        _0x3c1df3 = 0;
      if (_0xe9492d) {
        for (let _0x12207e of _0xe9492d.split("\n").filter(_0x516747 => !!_0x516747)) {
          $.cookie_list.push(new 哇哈哈_0x5711da(_0x12207e));
        }
        _0x3c1df3 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x3c1df3 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x5b1cb7, _0x504d6b, _0x4bb8bc, _0x137058, _0x4dbfc9) {
      if (_0x5b1cb7 == "delete") {
        _0x5b1cb7 = _0x5b1cb7.toUpperCase();
      } else {
        _0x5b1cb7 = _0x5b1cb7;
      }
      if (_0x5b1cb7 == "post") {
        delete _0x4bb8bc["content-type"];
        delete _0x4bb8bc["Content-type"];
        delete _0x4bb8bc["content-Type"];
        $.safeGet(_0x137058) ? _0x4bb8bc["Content-Type"] = "application/json;charset=UTF-8" : _0x4bb8bc["Content-Type"] = "application/x-www-form-urlencoded";
        if (_0x137058) {
          _0x4bb8bc["Content-Length"] = $.lengthInUtf8Bytes(_0x137058);
        }
      }
      _0x5b1cb7 == "get" && (delete _0x4bb8bc["content-type"], delete _0x4bb8bc["Content-type"], delete _0x4bb8bc["content-Type"], delete _0x4bb8bc["Content-Length"]);
      _0x4bb8bc.Host = _0x504d6b.replace("//", "/").split("/")[1];
      return new Promise(async _0x32b9e8 => {
        if (_0x5b1cb7.indexOf("T") < 0) {
          var _0x209871 = {
            url: _0x504d6b,
            headers: _0x4bb8bc,
            body: _0x137058,
            proxy: "http://" + _0x4dbfc9
          };
        } else {
          var _0x209871 = {
            url: _0x504d6b,
            headers: _0x4bb8bc,
            form: JSON.parse(_0x137058),
            proxy: "http://" + _0x4dbfc9
          };
        }
        !_0x4dbfc9 && delete _0x209871.proxy;
        this.request[_0x5b1cb7.toLowerCase()](_0x209871, (_0xbdcac5, _0x2c8b3e, _0x13570a) => {
          try {
            if (_0x13570a) {
              LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x209871), console.log("================ 返回 ================"), $.safeGet(_0x13570a) ? console.log(JSON.parse(_0x13570a)) : console.log(_0x13570a));
            }
          } catch (_0x14961f) {
            console.log(_0x14961f, _0x504d6b + "\n" + _0x4bb8bc);
          } finally {
            let _0x434b28 = "";
            if (!_0xbdcac5) {
              if ($.safeGet(_0x13570a)) {
                _0x434b28 = JSON.parse(_0x13570a);
              } else {
                _0x13570a.indexOf("/") != -1 && _0x13570a.indexOf("+") != -1 ? _0x434b28 = _0x13570a : _0x434b28 = _0x13570a;
              }
            } else {
              _0x434b28 = _0x504d6b + "   API请求失败，请检查网络重试\n" + _0xbdcac5;
            }
            return _0x32b9e8(_0x434b28);
          }
        });
      });
    }
    async ["SendMsg"](_0x2e8a25) {
      if (!_0x2e8a25) {
        return;
      }
      if (Notify == 1) {
        var _0x2fc2e0 = require("./sendNotify");
        await _0x2fc2e0.sendNotify(NAME, _0x2e8a25);
      }
    }
    ["lengthInUtf8Bytes"](_0x4188d1) {
      let _0xd94d6f = encodeURIComponent(_0x4188d1).match(/%[89ABab]/g);
      return _0x4188d1.length + (_0xd94d6f ? _0xd94d6f.length : 0);
    }
    ["randomArr"](_0xdc99cd) {
      return _0xdc99cd[parseInt(Math.random() * _0xdc99cd.length, 10)];
    }
    ["wait"](_0x3d785f) {
      return new Promise(_0x2099d4 => setTimeout(_0x2099d4, _0x3d785f));
    }
    ["time"](_0x588360) {
      if (_0x588360 == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["timenow"]() {
      const _0x63bbd3 = new Date(),
        _0x3882c6 = _0x63bbd3.getFullYear(),
        _0x280fbc = String(_0x63bbd3.getMonth() + 1).padStart(2, "0"),
        _0x17863e = String(_0x63bbd3.getDate()).padStart(2, "0"),
        _0x347897 = _0x3882c6 + "-" + _0x280fbc + "-" + _0x17863e;
      return _0x347897;
    }
    ["safeGet"](_0x2bcbf3) {
      try {
        if (typeof JSON.parse(_0x2bcbf3) == "object") {
          return true;
        }
      } catch (_0x17c2fe) {
        return false;
      }
    }
    RT(_0x250c23, _0x35e875) {
      return Math.round(Math.random() * (_0x35e875 - _0x250c23) + _0x250c23);
    }
    ["MD5Encrypt"](_0x3a68f6, _0x25622b) {
      if (_0x3a68f6 == 0) {
        return this.CryptoJS.MD5(_0x25622b).toString().toLowerCase();
      } else {
        if (_0x3a68f6 == 1) {
          return this.CryptoJS.MD5(_0x25622b).toString().toUpperCase();
        } else {
          if (_0x3a68f6 == 2) {
            return this.CryptoJS.MD5(_0x25622b).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x3a68f6 == 3) {
              return this.CryptoJS.MD5(_0x25622b).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
  }();
}