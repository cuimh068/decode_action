//Thu Nov 28 2024 13:44:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("捂碳星球");
const axios = require("axios");
let request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const {
  timeStamp,
  time
} = require("console");
request = request.defaults({
  jar: true
});
const {
  log
} = console;
const debug = 0;
let WTXQ = ($.isNode() ? process.env.WTXQ : $.getdata("WTXQ")) || "";
let WTXQArr = [];
let index;
let data = "";
let msg = "";
const concurrency = 10;
const delayBetweenBatches = 5000;
async function runAccount(_0x359331, _0x6da7eb) {
  const _0x275be6 = _0x359331.split(/&|#/);
  const _0x3a9414 = _0x275be6[0];
  const _0x36719a = _0x275be6[1];
  console.log("开始执行账号" + (_0x6da7eb + 1) + "：" + _0x359331);
  await task(_0x3a9414, _0x36719a, _0x6da7eb);
  await new Promise(_0x5d9aaf => setTimeout(_0x5d9aaf, 1000));
  console.log("账号" + (_0x6da7eb + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + WTXQArr.length + " 个账号");
  const _0x3d85f4 = Math.ceil(WTXQArr.length / concurrency);
  for (let _0x391a51 = 0; _0x391a51 < _0x3d85f4; _0x391a51++) {
    const _0x2e57b4 = WTXQArr.slice(_0x391a51 * concurrency, (_0x391a51 + 1) * concurrency);
    await Promise.all(_0x2e57b4.map((_0x3adaca, _0x4a0d0d) => runAccount(_0x3adaca, _0x391a51 * concurrency + _0x4a0d0d)));
    _0x391a51 < _0x3d85f4 - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x58f9dc => setTimeout(_0x58f9dc, delayBetweenBatches)));
  }
  console.log("所有账号执行完成");
}
(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) {
      return;
    } else {
      log("\n\n=============================================脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + "=============================================\n");
      log("\n=================== 共找到 " + WTXQArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + WTXQArr);
      await report();
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x4d270c => log(_0x4d270c)).finally(() => $.done());
async function task(_0x40e14f, _0x56c8bf, _0x11f746) {
  hd = {
    Host: "wt.api.5tan.com",
    Authorization: "Bearer " + _0x40e14f,
    "User-Agent": ua[_0x11f746 + 1],
    Referer: "https://servicewechat.com/wx54c4768a6050a90e/216/page-frame.html"
  };
  body = {
    platform: 1
  };
  await sign(hd, body);
}
async function sign(_0x11e218, _0x548a74) {
  return new Promise(_0x295af9 => {
    var _0x2044e6 = {
      method: "POST",
      url: "https://wt.api.5tan.com/api/signin/addSignIn",
      headers: _0x11e218,
      data: _0x548a74,
      timeout: 50000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x2044e6)));
    axios.request(_0x2044e6).then(async function (_0x376beb) {
      try {
        data = _0x376beb.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x376beb.data)));
        data.code == 200 ? (log(data.data.title + "\n"), addNotifyStr("\n" + data.data.title + "\n", true)) : log(data.msg);
      } catch (_0x53f105) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x2a2802) {
      console.error(_0x2a2802);
    }).then(_0x1d537c => {
      _0x295af9();
    });
  });
}
function randomNum(_0x5cb329, _0x5e674f) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x5cb329 + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0x5e674f - _0x5cb329 + 1) + _0x5cb329, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x39df44 = 3000) {
  return new Promise(_0x3d3468 => {
    let _0xce2046 = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0xce2046, async (_0x50bf2b, _0x5f568c, _0x561e3c) => {
      try {
        _0x561e3c = JSON.parse(_0x561e3c);
        log(_0x561e3c.content + " \xA0\n————《" + _0x561e3c.origin + "》" + _0x561e3c.author);
      } catch (_0x3556ac) {
        log(_0x3556ac, _0x5f568c);
      } finally {
        _0x3d3468();
      }
    }, _0x39df44);
  });
}
async function report() {
  const _0x351373 = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0x5708b3 = await axios(_0x351373);
    const _0x2c3faf = _0x5708b3.data;
    const _0x6e82a4 = cheerio.load(_0x2c3faf);
    const _0x670160 = _0x6e82a4("p").eq(10).text();
    const _0x4ce4ca = _0x6e82a4("p").eq(11).text();
    log(_0x670160, _0x4ce4ca);
    fs.writeFileSync("response.html", _0x2c3faf);
  } catch (_0xafa959) {}
}
async function stop() {
  delay = randomNum(2000, 5000);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
let ua = ["Mozilla/5.0 (Linux; Android 8.0.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5061 MMWEBSDK/20221206 MMWEBID/1655 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64Content-Type: application/json", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309021a) XWEB/6763 Flue", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.36(0x18002429) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.9 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-CN; Redmi 7A Build/PKQ1.181007.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/8727 MicroMessenger/7.0.9.1560(0x2700093B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 9; HTC U11 Build/PPR2.181005.003) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.5 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; SLA-L22 Build/HUAWEISLA-L22) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8.4220 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/4G Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-cn; MI 8 Lite Build/PKQ1.181021.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/7360 MicroMessenger/7.0.8.1540(0x270008E1) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; MRX_Leo_User Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI"];
async function Envs() {
  if (WTXQ) {
    if (WTXQ.indexOf("@") != -1) {
      WTXQ.split("@").forEach(_0x5d8770 => {
        WTXQArr.push(_0x5d8770);
      });
    } else {
      WTXQ.indexOf("\n") != -1 ? WTXQ.split("\n").forEach(_0x3191fa => {
        WTXQArr.push(_0x3191fa);
      }) : WTXQArr.push(WTXQ);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 WTXQ");
    return;
  }
  return true;
}
function addNotifyStr(_0x4dac35, _0x44dc5d = true) {
  _0x44dc5d && log(_0x4dac35 + "\n");
  msg += _0x4dac35 + "\n";
}
async function SendMsg(_0x2cdf09) {
  if (!_0x2cdf09) {
    return;
  }
  if ($.isNode()) {
    var _0x17efe0 = require("./sendNotify");
    await _0x17efe0.sendNotify($.name, _0x2cdf09);
  } else {
    $.msg(_0x2cdf09);
  }
}
var MD5 = function (_0x26453a) {
  function _0x6bc9cf(_0x43d7ba, _0x43de31) {
    return _0x43d7ba << _0x43de31 | _0x43d7ba >>> 32 - _0x43de31;
  }
  function _0x4c0c57(_0x148ce5, _0x185937) {
    var _0x4e5bd;
    var _0x129384;
    var _0x3234ad;
    var _0x2b600c;
    var _0x222a79;
    _0x3234ad = _0x148ce5 & 2147483648;
    _0x2b600c = _0x185937 & 2147483648;
    _0x4e5bd = _0x148ce5 & 1073741824;
    _0x129384 = _0x185937 & 1073741824;
    _0x222a79 = (_0x148ce5 & 1073741823) + (_0x185937 & 1073741823);
    if (_0x4e5bd & _0x129384) {
      return _0x222a79 ^ 2147483648 ^ _0x3234ad ^ _0x2b600c;
    }
    return _0x4e5bd | _0x129384 ? _0x222a79 & 1073741824 ? _0x222a79 ^ 3221225472 ^ _0x3234ad ^ _0x2b600c : _0x222a79 ^ 1073741824 ^ _0x3234ad ^ _0x2b600c : _0x222a79 ^ _0x3234ad ^ _0x2b600c;
  }
  function _0x7a12b7(_0x13430f, _0x3ed7b7, _0x3533d7) {
    return _0x13430f & _0x3ed7b7 | ~_0x13430f & _0x3533d7;
  }
  function _0x459c67(_0x8b11a9, _0x34cd4d, _0x1fdc1b) {
    return _0x8b11a9 & _0x1fdc1b | _0x34cd4d & ~_0x1fdc1b;
  }
  function _0x1e9b0c(_0x553d2e, _0x486bb8, _0x3d0be8) {
    return _0x553d2e ^ _0x486bb8 ^ _0x3d0be8;
  }
  function _0x3c3215(_0x1c6b2c, _0x55195b, _0x4e9409) {
    return _0x55195b ^ (_0x1c6b2c | ~_0x4e9409);
  }
  function _0x58b860(_0x133eec, _0x43a0bf, _0x4299c8, _0x4809ef, _0x258fd0, _0x26c4d2, _0x4a3191) {
    _0x133eec = _0x4c0c57(_0x133eec, _0x4c0c57(_0x4c0c57(_0x7a12b7(_0x43a0bf, _0x4299c8, _0x4809ef), _0x258fd0), _0x4a3191));
    return _0x4c0c57(_0x6bc9cf(_0x133eec, _0x26c4d2), _0x43a0bf);
  }
  function _0x436b47(_0x523439, _0x4414dd, _0x44dfe2, _0x5efcf1, _0x40c168, _0x335941, _0x4005ea) {
    _0x523439 = _0x4c0c57(_0x523439, _0x4c0c57(_0x4c0c57(_0x459c67(_0x4414dd, _0x44dfe2, _0x5efcf1), _0x40c168), _0x4005ea));
    return _0x4c0c57(_0x6bc9cf(_0x523439, _0x335941), _0x4414dd);
  }
  function _0x329255(_0x5b44eb, _0x4f29cf, _0x396486, _0xf436a2, _0x49cf38, _0x54da93, _0x15d33f) {
    _0x5b44eb = _0x4c0c57(_0x5b44eb, _0x4c0c57(_0x4c0c57(_0x1e9b0c(_0x4f29cf, _0x396486, _0xf436a2), _0x49cf38), _0x15d33f));
    return _0x4c0c57(_0x6bc9cf(_0x5b44eb, _0x54da93), _0x4f29cf);
  }
  function _0x33cf2e(_0x37525b, _0x4c95e0, _0x265808, _0x3cb73c, _0x25db78, _0x1b0073, _0x1bb2a2) {
    _0x37525b = _0x4c0c57(_0x37525b, _0x4c0c57(_0x4c0c57(_0x3c3215(_0x4c95e0, _0x265808, _0x3cb73c), _0x25db78), _0x1bb2a2));
    return _0x4c0c57(_0x6bc9cf(_0x37525b, _0x1b0073), _0x4c95e0);
  }
  function _0x3e1a0d(_0x4ad581) {
    var _0x122d5f;
    var _0x48eff8 = _0x4ad581.length;
    var _0x6a5128 = _0x48eff8 + 8;
    var _0x5ed34f = (_0x6a5128 - _0x6a5128 % 64) / 64;
    var _0x325b84 = (_0x5ed34f + 1) * 16;
    var _0x50bd56 = Array(_0x325b84 - 1);
    var _0x279efa = 0;
    var _0x1223c5 = 0;
    while (_0x1223c5 < _0x48eff8) {
      _0x122d5f = (_0x1223c5 - _0x1223c5 % 4) / 4;
      _0x279efa = _0x1223c5 % 4 * 8;
      _0x50bd56[_0x122d5f] = _0x50bd56[_0x122d5f] | _0x4ad581.charCodeAt(_0x1223c5) << _0x279efa;
      _0x1223c5++;
    }
    _0x122d5f = (_0x1223c5 - _0x1223c5 % 4) / 4;
    _0x279efa = _0x1223c5 % 4 * 8;
    _0x50bd56[_0x122d5f] = _0x50bd56[_0x122d5f] | 128 << _0x279efa;
    _0x50bd56[_0x325b84 - 2] = _0x48eff8 << 3;
    _0x50bd56[_0x325b84 - 1] = _0x48eff8 >>> 29;
    return _0x50bd56;
  }
  function _0x16420e(_0x536209) {
    var _0x14b1d7 = "";
    var _0xdda6f4 = "";
    var _0x3385bf;
    var _0x4ad8f2;
    for (_0x4ad8f2 = 0; _0x4ad8f2 <= 3; _0x4ad8f2++) {
      _0x3385bf = _0x536209 >>> _0x4ad8f2 * 8 & 255;
      _0xdda6f4 = "0" + _0x3385bf.toString(16);
      _0x14b1d7 = _0x14b1d7 + _0xdda6f4.substr(_0xdda6f4.length - 2, 2);
    }
    return _0x14b1d7;
  }
  function _0x133a67(_0x106de0) {
    _0x106de0 = _0x106de0.replace(/\r\n/g, "\n");
    var _0xf3b04 = "";
    for (var _0x32fee2 = 0; _0x32fee2 < _0x106de0.length; _0x32fee2++) {
      var _0x3f5c0a = _0x106de0.charCodeAt(_0x32fee2);
      if (_0x3f5c0a < 128) {
        _0xf3b04 += String.fromCharCode(_0x3f5c0a);
      } else {
        _0x3f5c0a > 127 && _0x3f5c0a < 2048 ? (_0xf3b04 += String.fromCharCode(_0x3f5c0a >> 6 | 192), _0xf3b04 += String.fromCharCode(_0x3f5c0a & 63 | 128)) : (_0xf3b04 += String.fromCharCode(_0x3f5c0a >> 12 | 224), _0xf3b04 += String.fromCharCode(_0x3f5c0a >> 6 & 63 | 128), _0xf3b04 += String.fromCharCode(_0x3f5c0a & 63 | 128));
      }
    }
    return _0xf3b04;
  }
  var _0x42194e = Array();
  var _0x7ece48;
  var _0x4dff3a;
  var _0x4b6283;
  var _0x1f1058;
  var _0x52567b;
  var _0x51413b;
  var _0x3d29e2;
  var _0x43ff8a;
  var _0x1ba42d;
  var _0x20e940 = 7;
  var _0x401af0 = 12;
  var _0x1b1356 = 17;
  var _0xb1ad0d = 22;
  var _0x5e135f = 5;
  var _0x9b5448 = 9;
  var _0x472c3f = 14;
  var _0x2569c7 = 20;
  var _0x55c51c = 4;
  var _0x32f3a5 = 11;
  var _0x1027fd = 16;
  var _0x5d09f0 = 23;
  var _0x641982 = 6;
  var _0x1ba7a6 = 10;
  var _0x51d3b6 = 15;
  var _0x192ba9 = 21;
  _0x26453a = _0x133a67(_0x26453a);
  _0x42194e = _0x3e1a0d(_0x26453a);
  _0x51413b = 1732584193;
  _0x3d29e2 = 4023233417;
  _0x43ff8a = 2562383102;
  _0x1ba42d = 271733878;
  for (_0x7ece48 = 0; _0x7ece48 < _0x42194e.length; _0x7ece48 += 16) {
    _0x4dff3a = _0x51413b;
    _0x4b6283 = _0x3d29e2;
    _0x1f1058 = _0x43ff8a;
    _0x52567b = _0x1ba42d;
    _0x51413b = _0x58b860(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 0], _0x20e940, 3614090360);
    _0x1ba42d = _0x58b860(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 1], _0x401af0, 3905402710);
    _0x43ff8a = _0x58b860(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 2], _0x1b1356, 606105819);
    _0x3d29e2 = _0x58b860(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 3], _0xb1ad0d, 3250441966);
    _0x51413b = _0x58b860(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 4], _0x20e940, 4118548399);
    _0x1ba42d = _0x58b860(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 5], _0x401af0, 1200080426);
    _0x43ff8a = _0x58b860(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 6], _0x1b1356, 2821735955);
    _0x3d29e2 = _0x58b860(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 7], _0xb1ad0d, 4249261313);
    _0x51413b = _0x58b860(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 8], _0x20e940, 1770035416);
    _0x1ba42d = _0x58b860(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 9], _0x401af0, 2336552879);
    _0x43ff8a = _0x58b860(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 10], _0x1b1356, 4294925233);
    _0x3d29e2 = _0x58b860(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 11], _0xb1ad0d, 2304563134);
    _0x51413b = _0x58b860(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 12], _0x20e940, 1804603682);
    _0x1ba42d = _0x58b860(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 13], _0x401af0, 4254626195);
    _0x43ff8a = _0x58b860(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 14], _0x1b1356, 2792965006);
    _0x3d29e2 = _0x58b860(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 15], _0xb1ad0d, 1236535329);
    _0x51413b = _0x436b47(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 1], _0x5e135f, 4129170786);
    _0x1ba42d = _0x436b47(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 6], _0x9b5448, 3225465664);
    _0x43ff8a = _0x436b47(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 11], _0x472c3f, 643717713);
    _0x3d29e2 = _0x436b47(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 0], _0x2569c7, 3921069994);
    _0x51413b = _0x436b47(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 5], _0x5e135f, 3593408605);
    _0x1ba42d = _0x436b47(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 10], _0x9b5448, 38016083);
    _0x43ff8a = _0x436b47(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 15], _0x472c3f, 3634488961);
    _0x3d29e2 = _0x436b47(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 4], _0x2569c7, 3889429448);
    _0x51413b = _0x436b47(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 9], _0x5e135f, 568446438);
    _0x1ba42d = _0x436b47(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 14], _0x9b5448, 3275163606);
    _0x43ff8a = _0x436b47(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 3], _0x472c3f, 4107603335);
    _0x3d29e2 = _0x436b47(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 8], _0x2569c7, 1163531501);
    _0x51413b = _0x436b47(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 13], _0x5e135f, 2850285829);
    _0x1ba42d = _0x436b47(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 2], _0x9b5448, 4243563512);
    _0x43ff8a = _0x436b47(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 7], _0x472c3f, 1735328473);
    _0x3d29e2 = _0x436b47(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 12], _0x2569c7, 2368359562);
    _0x51413b = _0x329255(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 5], _0x55c51c, 4294588738);
    _0x1ba42d = _0x329255(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 8], _0x32f3a5, 2272392833);
    _0x43ff8a = _0x329255(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 11], _0x1027fd, 1839030562);
    _0x3d29e2 = _0x329255(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 14], _0x5d09f0, 4259657740);
    _0x51413b = _0x329255(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 1], _0x55c51c, 2763975236);
    _0x1ba42d = _0x329255(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 4], _0x32f3a5, 1272893353);
    _0x43ff8a = _0x329255(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 7], _0x1027fd, 4139469664);
    _0x3d29e2 = _0x329255(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 10], _0x5d09f0, 3200236656);
    _0x51413b = _0x329255(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 13], _0x55c51c, 681279174);
    _0x1ba42d = _0x329255(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 0], _0x32f3a5, 3936430074);
    _0x43ff8a = _0x329255(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 3], _0x1027fd, 3572445317);
    _0x3d29e2 = _0x329255(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 6], _0x5d09f0, 76029189);
    _0x51413b = _0x329255(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 9], _0x55c51c, 3654602809);
    _0x1ba42d = _0x329255(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 12], _0x32f3a5, 3873151461);
    _0x43ff8a = _0x329255(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 15], _0x1027fd, 530742520);
    _0x3d29e2 = _0x329255(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 2], _0x5d09f0, 3299628645);
    _0x51413b = _0x33cf2e(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 0], _0x641982, 4096336452);
    _0x1ba42d = _0x33cf2e(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 7], _0x1ba7a6, 1126891415);
    _0x43ff8a = _0x33cf2e(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 14], _0x51d3b6, 2878612391);
    _0x3d29e2 = _0x33cf2e(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 5], _0x192ba9, 4237533241);
    _0x51413b = _0x33cf2e(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 12], _0x641982, 1700485571);
    _0x1ba42d = _0x33cf2e(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 3], _0x1ba7a6, 2399980690);
    _0x43ff8a = _0x33cf2e(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 10], _0x51d3b6, 4293915773);
    _0x3d29e2 = _0x33cf2e(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 1], _0x192ba9, 2240044497);
    _0x51413b = _0x33cf2e(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 8], _0x641982, 1873313359);
    _0x1ba42d = _0x33cf2e(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 15], _0x1ba7a6, 4264355552);
    _0x43ff8a = _0x33cf2e(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 6], _0x51d3b6, 2734768916);
    _0x3d29e2 = _0x33cf2e(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 13], _0x192ba9, 1309151649);
    _0x51413b = _0x33cf2e(_0x51413b, _0x3d29e2, _0x43ff8a, _0x1ba42d, _0x42194e[_0x7ece48 + 4], _0x641982, 4149444226);
    _0x1ba42d = _0x33cf2e(_0x1ba42d, _0x51413b, _0x3d29e2, _0x43ff8a, _0x42194e[_0x7ece48 + 11], _0x1ba7a6, 3174756917);
    _0x43ff8a = _0x33cf2e(_0x43ff8a, _0x1ba42d, _0x51413b, _0x3d29e2, _0x42194e[_0x7ece48 + 2], _0x51d3b6, 718787259);
    _0x3d29e2 = _0x33cf2e(_0x3d29e2, _0x43ff8a, _0x1ba42d, _0x51413b, _0x42194e[_0x7ece48 + 9], _0x192ba9, 3951481745);
    _0x51413b = _0x4c0c57(_0x51413b, _0x4dff3a);
    _0x3d29e2 = _0x4c0c57(_0x3d29e2, _0x4b6283);
    _0x43ff8a = _0x4c0c57(_0x43ff8a, _0x1f1058);
    _0x1ba42d = _0x4c0c57(_0x1ba42d, _0x52567b);
  }
  var _0x595126 = _0x16420e(_0x51413b) + _0x16420e(_0x3d29e2) + _0x16420e(_0x43ff8a) + _0x16420e(_0x1ba42d);
  return _0x595126.toLowerCase();
};
function randomString(_0x5e722f) {
  for (var _0x386f16 = _0x5e722f > 0 && undefined !== _0x5e722f ? _0x5e722f : 21, _0x3d549a = ""; _0x3d549a.length < _0x386f16;) {
    _0x3d549a += Math.random().toString(36).slice(2);
  }
  return _0x3d549a.slice(0, _0x386f16);
}
function Env(_0xcbc0f3, _0x339554) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x23e20d {
    constructor(_0x50e7be) {
      this.env = _0x50e7be;
    }
    send(_0x38adc5, _0x38706b = "GET") {
      _0x38adc5 = "string" == typeof _0x38adc5 ? {
        url: _0x38adc5
      } : _0x38adc5;
      let _0x53c41f = this.get;
      "POST" === _0x38706b && (_0x53c41f = this.post);
      return new Promise((_0x29cbfb, _0x15c4cb) => {
        _0x53c41f.call(this, _0x38adc5, (_0x3107bb, _0x40830b, _0x4ac682) => {
          _0x3107bb ? _0x15c4cb(_0x3107bb) : _0x29cbfb(_0x40830b);
        });
      });
    }
    get(_0x1a5fe7) {
      return this.send.call(this.env, _0x1a5fe7);
    }
    post(_0x36564a) {
      return this.send.call(this.env, _0x36564a, "POST");
    }
  }
  return new class {
    constructor(_0x493e3f, _0xeecd6d) {
      this.name = _0x493e3f;
      this.http = new _0x23e20d(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xeecd6d);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x1cf2b7, _0x59954a = null) {
      try {
        return JSON.parse(_0x1cf2b7);
      } catch {
        return _0x59954a;
      }
    }
    toStr(_0x1b7772, _0x3bd0ed = null) {
      try {
        return JSON.stringify(_0x1b7772);
      } catch {
        return _0x3bd0ed;
      }
    }
    getjson(_0x4dccd0, _0x3a08bf) {
      let _0x2e4546 = _0x3a08bf;
      const _0x5bb8b2 = this.getdata(_0x4dccd0);
      if (_0x5bb8b2) {
        try {
          _0x2e4546 = JSON.parse(this.getdata(_0x4dccd0));
        } catch {}
      }
      return _0x2e4546;
    }
    setjson(_0x1243f8, _0x462fa8) {
      try {
        return this.setdata(JSON.stringify(_0x1243f8), _0x462fa8);
      } catch {
        return false;
      }
    }
    getScript(_0x4fdd42) {
      return new Promise(_0x3a8856 => {
        this.get({
          url: _0x4fdd42
        }, (_0x35595d, _0x4ec2bb, _0x5b2893) => _0x3a8856(_0x5b2893));
      });
    }
    runScript(_0x210b65, _0x4aa3df) {
      return new Promise(_0x2537af => {
        let _0xd15cc7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xd15cc7 = _0xd15cc7 ? _0xd15cc7.replace(/\n/g, "").trim() : _0xd15cc7;
        let _0x51472e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x51472e = _0x51472e ? 1 * _0x51472e : 20;
        _0x51472e = _0x4aa3df && _0x4aa3df.timeout ? _0x4aa3df.timeout : _0x51472e;
        const [_0x278926, _0x2f5c51] = _0xd15cc7.split("@");
        const _0x47766c = {
          url: "http://" + _0x2f5c51 + "/v1/scripting/evaluate",
          body: {
            script_text: _0x210b65,
            mock_type: "cron",
            timeout: _0x51472e
          },
          headers: {
            "X-Key": _0x278926,
            Accept: "*/*"
          }
        };
        this.post(_0x47766c, (_0x31b867, _0x261ce9, _0x32205d) => _0x2537af(_0x32205d));
      }).catch(_0xd8b9de => this.logErr(_0xd8b9de));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x351567 = this.path.resolve(this.dataFile);
        const _0x37d7a7 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x2e1b8c = this.fs.existsSync(_0x351567);
        const _0x212351 = !_0x2e1b8c && this.fs.existsSync(_0x37d7a7);
        if (!_0x2e1b8c && !_0x212351) {
          return {};
        }
        {
          const _0x2c43b8 = _0x2e1b8c ? _0x351567 : _0x37d7a7;
          try {
            return JSON.parse(this.fs.readFileSync(_0x2c43b8));
          } catch (_0x4a8c07) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3b620a = this.path.resolve(this.dataFile);
        const _0x25ec96 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x185993 = this.fs.existsSync(_0x3b620a);
        const _0x4999cc = !_0x185993 && this.fs.existsSync(_0x25ec96);
        const _0x2e9f6d = JSON.stringify(this.data);
        _0x185993 ? this.fs.writeFileSync(_0x3b620a, _0x2e9f6d) : _0x4999cc ? this.fs.writeFileSync(_0x25ec96, _0x2e9f6d) : this.fs.writeFileSync(_0x3b620a, _0x2e9f6d);
      }
    }
    lodash_get(_0x4f79de, _0x3a0c8f, _0x56af70) {
      const _0x4a6db7 = _0x3a0c8f.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xb41a79 = _0x4f79de;
      for (const _0x16e9e of _0x4a6db7) if (_0xb41a79 = Object(_0xb41a79)[_0x16e9e], undefined === _0xb41a79) {
        return _0x56af70;
      }
      return _0xb41a79;
    }
    lodash_set(_0x27acee, _0x5d46d8, _0x32e053) {
      return Object(_0x27acee) !== _0x27acee ? _0x27acee : (Array.isArray(_0x5d46d8) || (_0x5d46d8 = _0x5d46d8.toString().match(/[^.[\]]+/g) || []), _0x5d46d8.slice(0, -1).reduce((_0x1c8fde, _0x2e38c8, _0x570893) => Object(_0x1c8fde[_0x2e38c8]) === _0x1c8fde[_0x2e38c8] ? _0x1c8fde[_0x2e38c8] : _0x1c8fde[_0x2e38c8] = Math.abs(_0x5d46d8[_0x570893 + 1]) >> 0 == +_0x5d46d8[_0x570893 + 1] ? [] : {}, _0x27acee)[_0x5d46d8[_0x5d46d8.length - 1]] = _0x32e053, _0x27acee);
    }
    getdata(_0x42997d) {
      let _0x4fd0a0 = this.getval(_0x42997d);
      if (/^@/.test(_0x42997d)) {
        const [, _0x53f49f, _0x1bdc4c] = /^@(.*?)\.(.*?)$/.exec(_0x42997d);
        const _0x25f6e4 = _0x53f49f ? this.getval(_0x53f49f) : "";
        if (_0x25f6e4) {
          try {
            const _0x1ea251 = JSON.parse(_0x25f6e4);
            _0x4fd0a0 = _0x1ea251 ? this.lodash_get(_0x1ea251, _0x1bdc4c, "") : _0x4fd0a0;
          } catch (_0x3e99d5) {
            _0x4fd0a0 = "";
          }
        }
      }
      return _0x4fd0a0;
    }
    setdata(_0x568596, _0x204200) {
      let _0x1e3672 = false;
      if (/^@/.test(_0x204200)) {
        const [, _0x26cbb6, _0x3d831a] = /^@(.*?)\.(.*?)$/.exec(_0x204200);
        const _0x1461d2 = this.getval(_0x26cbb6);
        const _0x4bdd40 = _0x26cbb6 ? "null" === _0x1461d2 ? null : _0x1461d2 || "{}" : "{}";
        try {
          const _0x105303 = JSON.parse(_0x4bdd40);
          this.lodash_set(_0x105303, _0x3d831a, _0x568596);
          _0x1e3672 = this.setval(JSON.stringify(_0x105303), _0x26cbb6);
        } catch (_0x51ecea) {
          const _0x320700 = {};
          this.lodash_set(_0x320700, _0x3d831a, _0x568596);
          _0x1e3672 = this.setval(JSON.stringify(_0x320700), _0x26cbb6);
        }
      } else {
        _0x1e3672 = this.setval(_0x568596, _0x204200);
      }
      return _0x1e3672;
    }
    getval(_0x19e1e6) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x19e1e6) : this.isQuanX() ? $prefs.valueForKey(_0x19e1e6) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x19e1e6]) : this.data && this.data[_0x19e1e6] || null;
    }
    setval(_0x28d054, _0x488b64) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x28d054, _0x488b64) : this.isQuanX() ? $prefs.setValueForKey(_0x28d054, _0x488b64) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x488b64] = _0x28d054, this.writedata(), true) : this.data && this.data[_0x488b64] || null;
    }
    initGotEnv(_0x4d4baf) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4d4baf && (_0x4d4baf.headers = _0x4d4baf.headers ? _0x4d4baf.headers : {}, undefined === _0x4d4baf.headers.Cookie && undefined === _0x4d4baf.cookieJar && (_0x4d4baf.cookieJar = this.ckjar));
    }
    get(_0x42579f, _0x59f3e1 = () => {}) {
      _0x42579f.headers && (delete _0x42579f.headers["Content-Type"], delete _0x42579f.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x42579f.headers = _0x42579f.headers || {}, Object.assign(_0x42579f.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x42579f, (_0x461d6c, _0x1cc957, _0x3ac606) => {
        !_0x461d6c && _0x1cc957 && (_0x1cc957.body = _0x3ac606, _0x1cc957.statusCode = _0x1cc957.status);
        _0x59f3e1(_0x461d6c, _0x1cc957, _0x3ac606);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x42579f.opts = _0x42579f.opts || {}, Object.assign(_0x42579f.opts, {
        hints: false
      })), $task.fetch(_0x42579f).then(_0x795eea => {
        const {
          statusCode: _0x265423,
          statusCode: _0x4015ae,
          headers: _0x368397,
          body: _0x139f44
        } = _0x795eea;
        _0x59f3e1(null, {
          status: _0x265423,
          statusCode: _0x4015ae,
          headers: _0x368397,
          body: _0x139f44
        }, _0x139f44);
      }, _0x22f25b => _0x59f3e1(_0x22f25b))) : this.isNode() && (this.initGotEnv(_0x42579f), this.got(_0x42579f).on("redirect", (_0x5845fb, _0x5ecb52) => {
        try {
          if (_0x5845fb.headers["set-cookie"]) {
            const _0x24812e = _0x5845fb.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x24812e && this.ckjar.setCookieSync(_0x24812e, null);
            _0x5ecb52.cookieJar = this.ckjar;
          }
        } catch (_0x4ce45a) {
          this.logErr(_0x4ce45a);
        }
      }).then(_0x317cc5 => {
        const {
          statusCode: _0x38cb72,
          statusCode: _0x2774a5,
          headers: _0xc24cf,
          body: _0x529039
        } = _0x317cc5;
        _0x59f3e1(null, {
          status: _0x38cb72,
          statusCode: _0x2774a5,
          headers: _0xc24cf,
          body: _0x529039
        }, _0x529039);
      }, _0x545e4a => {
        const {
          message: _0x498891,
          response: _0x291c8c
        } = _0x545e4a;
        _0x59f3e1(_0x498891, _0x291c8c, _0x291c8c && _0x291c8c.body);
      }));
    }
    post(_0xf0cba0, _0xf0045f = () => {}) {
      if (_0xf0cba0.body && _0xf0cba0.headers && !_0xf0cba0.headers["Content-Type"] && (_0xf0cba0.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xf0cba0.headers && delete _0xf0cba0.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xf0cba0.headers = _0xf0cba0.headers || {}, Object.assign(_0xf0cba0.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(_0xf0cba0, (_0x10e1b4, _0x1434af, _0x3d3919) => {
          !_0x10e1b4 && _0x1434af && (_0x1434af.body = _0x3d3919, _0x1434af.statusCode = _0x1434af.status);
          _0xf0045f(_0x10e1b4, _0x1434af, _0x3d3919);
        });
      } else {
        if (this.isQuanX()) {
          _0xf0cba0.method = "POST";
          this.isNeedRewrite && (_0xf0cba0.opts = _0xf0cba0.opts || {}, Object.assign(_0xf0cba0.opts, {
            hints: false
          }));
          $task.fetch(_0xf0cba0).then(_0x510bae => {
            const {
              statusCode: _0x46d29b,
              statusCode: _0x129705,
              headers: _0x547cc7,
              body: _0x2393c9
            } = _0x510bae;
            _0xf0045f(null, {
              status: _0x46d29b,
              statusCode: _0x129705,
              headers: _0x547cc7,
              body: _0x2393c9
            }, _0x2393c9);
          }, _0x1d1531 => _0xf0045f(_0x1d1531));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xf0cba0);
            const {
              url: _0x200531,
              ..._0x38cf2e
            } = _0xf0cba0;
            this.got.post(_0x200531, _0x38cf2e).then(_0x20308c => {
              const {
                statusCode: _0x59d99a,
                statusCode: _0x43a935,
                headers: _0x2ad547,
                body: _0x58ebb2
              } = _0x20308c;
              _0xf0045f(null, {
                status: _0x59d99a,
                statusCode: _0x43a935,
                headers: _0x2ad547,
                body: _0x58ebb2
              }, _0x58ebb2);
            }, _0x14c069 => {
              const {
                message: _0x1fd687,
                response: _0x384735
              } = _0x14c069;
              _0xf0045f(_0x1fd687, _0x384735, _0x384735 && _0x384735.body);
            });
          }
        }
      }
    }
    time(_0x326e94, _0x5ed5d6 = null) {
      const _0x27c78e = _0x5ed5d6 ? new Date(_0x5ed5d6) : new Date();
      let _0x4e97c4 = {
        "M+": _0x27c78e.getMonth() + 1,
        "d+": _0x27c78e.getDate(),
        "H+": _0x27c78e.getHours(),
        "m+": _0x27c78e.getMinutes(),
        "s+": _0x27c78e.getSeconds(),
        "q+": Math.floor((_0x27c78e.getMonth() + 3) / 3),
        S: _0x27c78e.getMilliseconds()
      };
      /(y+)/.test(_0x326e94) && (_0x326e94 = _0x326e94.replace(RegExp.$1, (_0x27c78e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4c134f in _0x4e97c4) new RegExp("(" + _0x4c134f + ")").test(_0x326e94) && (_0x326e94 = _0x326e94.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4e97c4[_0x4c134f] : ("00" + _0x4e97c4[_0x4c134f]).substr(("" + _0x4e97c4[_0x4c134f]).length)));
      return _0x326e94;
    }
    msg(_0x587a30 = _0xcbc0f3, _0x365bd1 = "", _0x4870a6 = "", _0x406b8e) {
      const _0x4d9e77 = _0x1552a2 => {
        if (!_0x1552a2) {
          return _0x1552a2;
        }
        if ("string" == typeof _0x1552a2) {
          return this.isLoon() ? _0x1552a2 : this.isQuanX() ? {
            "open-url": _0x1552a2
          } : this.isSurge() ? {
            url: _0x1552a2
          } : undefined;
        }
        if ("object" == typeof _0x1552a2) {
          if (this.isLoon()) {
            let _0x30022f = _0x1552a2.openUrl || _0x1552a2.url || _0x1552a2["open-url"];
            let _0x216618 = _0x1552a2.mediaUrl || _0x1552a2["media-url"];
            return {
              openUrl: _0x30022f,
              mediaUrl: _0x216618
            };
          }
          if (this.isQuanX()) {
            let _0x31b7eb = _0x1552a2["open-url"] || _0x1552a2.url || _0x1552a2.openUrl;
            let _0x57f85d = _0x1552a2["media-url"] || _0x1552a2.mediaUrl;
            return {
              "open-url": _0x31b7eb,
              "media-url": _0x57f85d
            };
          }
          if (this.isSurge()) {
            let _0x2ed195 = _0x1552a2.url || _0x1552a2.openUrl || _0x1552a2["open-url"];
            return {
              url: _0x2ed195
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x587a30, _0x365bd1, _0x4870a6, _0x4d9e77(_0x406b8e)) : this.isQuanX() && $notify(_0x587a30, _0x365bd1, _0x4870a6, _0x4d9e77(_0x406b8e))), !this.isMuteLog) {
        let _0x4f965a = ["", "==============📣系统通知📣=============="];
        _0x4f965a.push(_0x587a30);
        _0x365bd1 && _0x4f965a.push(_0x365bd1);
        _0x4870a6 && _0x4f965a.push(_0x4870a6);
        console.log(_0x4f965a.join("\n"));
        this.logs = this.logs.concat(_0x4f965a);
      }
    }
    log(..._0x426ec5) {
      _0x426ec5.length > 0 && (this.logs = [...this.logs, ..._0x426ec5]);
      console.log(_0x426ec5.join(this.logSeparator));
    }
    logErr(_0x202679, _0x12173e) {
      const _0xa8dead = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0xa8dead ? this.log("", "❗️" + this.name + ", 错误!", _0x202679.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x202679);
    }
    wait(_0xbc4686) {
      return new Promise(_0x152719 => setTimeout(_0x152719, _0xbc4686));
    }
    done(_0x3516ea = {}) {
      const _0x1ae4ca = new Date().getTime();
      const _0x3f7ca6 = (_0x1ae4ca - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x3f7ca6 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3516ea);
    }
  }(_0xcbc0f3, _0x339554);
}