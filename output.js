//Mon Nov 11 2024 06:20:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("顺义创城任务");
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
let SYCC = ($.isNode() ? process.env.SYCC : $.getdata("SYCC")) || "";
let SYCCArr = [];
let index;
let data = "";
let msg = "";
const concurrency = 10;
const delayBetweenBatches = 5000;
async function runAccount(_0x976fc3, _0x4400b3) {
  const _0x5507ca = _0x976fc3.split(/&|#/);
  const _0x441536 = _0x5507ca[0];
  const _0x38bb00 = _0x5507ca[1];
  console.log("开始执行账号" + (_0x4400b3 + 1) + "：" + _0x976fc3);
  await task(_0x441536, _0x38bb00);
  await new Promise(_0x1d52b1 => setTimeout(_0x1d52b1, 1000));
  console.log("账号" + (_0x4400b3 + 1) + " 执行完成");
}
async function runMultipleAccounts() {
  console.log("共找到 " + SYCCArr.length + " 个账号");
  const _0x5a9339 = Math.ceil(SYCCArr.length / concurrency);
  for (let _0x280c4c = 0; _0x280c4c < _0x5a9339; _0x280c4c++) {
    const _0x3a84db = SYCCArr.slice(_0x280c4c * concurrency, (_0x280c4c + 1) * concurrency);
    await Promise.all(_0x3a84db.map((_0x18ddbd, _0x35a9aa) => runAccount(_0x18ddbd, _0x280c4c * concurrency + _0x35a9aa)));
    _0x280c4c < _0x5a9339 - 1 && (console.log("延迟 " + delayBetweenBatches + " 毫秒后再执行下一批账号"), await new Promise(_0x1c36dc => setTimeout(_0x1c36dc, delayBetweenBatches)));
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
      log("\n=================== 共找到 " + SYCCArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + SYCCArr);
      await report();
      await runMultipleAccounts();
    }
    await SendMsg(msg);
  }
})().catch(_0x18889c => log(_0x18889c)).finally(() => $.done());
async function task(_0x345d1b, _0x39160d) {
  await Login(_0x345d1b);
  await stop();
  addscore(_0x345d1b);
  for (i = 0; i < 3; i++) {
    if (i == 0) {
      id = 3;
      uid = 12;
    }
    if (i == 1) {
      id = 5;
      uid = 16;
    }
    if (i == 2) {
      id = 10;
      uid = 17;
    }
    addscore1(_0x345d1b, id, uid);
    await stop();
  }
  addscore2(_0x345d1b);
  i = randomNum(3000, 6000);
  await stop();
  addscore3(_0x345d1b);
  await stop();
  await userinfo(_0x345d1b);
}
async function sign(_0x1044b6, _0x492713) {
  return new Promise(_0x175492 => {
    var _0x35aa49 = {
      method: "GET",
      url: "https://cip.cc/",
      headers: {
        cookie: "" + _0x1044b6,
        "User-Agent": ua[index + 1]
      },
      timeout: 5000
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x35aa49)));
    axios.request(_0x35aa49).then(async function (_0x11665f) {
      try {
        data = _0x11665f.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x11665f.data)));
        if (data.code == 200) {
          log("\n");
        }
      } catch (_0x3d3369) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x396cec) {
      console.error(_0x396cec);
    }).then(_0x10a1af => {
      _0x175492();
    });
  });
}
async function Login(_0x3fd360) {
  return new Promise(_0x3eab84 => {
    var _0x9fd43 = {
      method: "POST",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/ccScoreRecord/signIn",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        "Content-Length": 2,
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x3fd360,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      },
      data: {}
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x9fd43)));
    axios.request(_0x9fd43).then(async function (_0xa99dde) {
      try {
        data = _0xa99dde.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xa99dde.data)));
        if (data.code == 200) {
          log("应该签到成功了吧");
        } else {
          if (data.message = "今日已签到") {
            return;
          } else {
            log(data.message);
          }
        }
      } catch (_0x1832b9) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x51acdd) {
      console.error(_0x51acdd);
    }).then(_0x1eb0ad => {
      _0x3eab84();
    });
  });
}
async function addscore(_0x34aef6) {
  return new Promise(_0x94b7a7 => {
    var _0x26cd00 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=1&type=15&time=0",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x34aef6,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x26cd00)));
    axios.request(_0x26cd00).then(async function (_0x4ac6be) {
      try {
        data = _0x4ac6be.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4ac6be.data)), log(data));
        if (data.code == 200) {
          log("应该获取点赞积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x5f1b62) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x24c90f) {
      console.error(_0x24c90f);
    }).then(_0x331317 => {
      _0x94b7a7();
    });
  });
}
async function addscore1(_0x16cd70, _0x17ad6c, _0xbdd3a4) {
  return new Promise(_0x213f3c => {
    var _0x1b44cc = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=" + _0x17ad6c + "&type=" + _0xbdd3a4,
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x16cd70,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x1b44cc)));
    axios.request(_0x1b44cc).then(async function (_0x1c07e3) {
      try {
        data = _0x1c07e3.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1c07e3.data)), log(data));
        if (data.code == 200) {
          let _0x1d092e = axios.request(_0x1b44cc);
          log("应该获取消消卡积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x2853ec) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x17a955) {
      console.error(_0x17a955);
    }).then(_0x13b8b4 => {
      _0x213f3c();
    });
  });
}
async function addscore2(_0xa06879) {
  return new Promise(_0x3a1dc0 => {
    var _0x39b062 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=5&type=5&time=216695",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0xa06879,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x39b062)));
    axios.request(_0x39b062).then(async function (_0x10c819) {
      try {
        data = _0x10c819.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x10c819.data)), log(data));
        if (data.code == 200) {
          let _0x570116 = axios.request(_0x39b062);
          log("应该获取浏览积分成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x2d9c1c) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x50aef7) {
      console.error(_0x50aef7);
    }).then(_0x328a81 => {
      _0x3a1dc0();
    });
  });
}
async function addscore3(_0x131391) {
  return new Promise(_0x4a3ebb => {
    var _0x49d910 = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/addScore?score=1&type=14&time=0",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x131391,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x49d910)));
    axios.request(_0x49d910).then(async function (_0x4450a7) {
      try {
        data = _0x4450a7.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4450a7.data)), log(data));
        if (data.code == 200) {
          let _0x2e2a06 = axios.request(_0x49d910);
          log("假装分享朋友圈成功了吧");
        } else {
          log(data.message);
        }
      } catch (_0x2c2877) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x51575b) {
      console.error(_0x51575b);
    }).then(_0x49cc6a => {
      _0x4a3ebb();
    });
  });
}
async function userinfo(_0x2f6111) {
  return new Promise(_0x461c59 => {
    var _0xdcb8bc = {
      method: "GET",
      url: "https://admin.shunyi.wenming.city/jeecg-boot/applet/user/userInfo",
      headers: {
        Host: "admin.shunyi.wenming.city",
        Connection: "keep-alive",
        referer: "https://servicewechat.com/wx0a035430a2e3a465/96/page-frame.html",
        xweb_xhr: 1,
        "X-Applet-Token": _0x2f6111,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6500",
        "Content-Type": "application/json",
        Accept: "*/*",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": " gzip, deflate, br",
        "Accept-Language": "zh-CN,zh"
      }
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xdcb8bc)));
    axios.request(_0xdcb8bc).then(async function (_0x4d5b86) {
      try {
        data = _0x4d5b86.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(data), log("\n\n" + data.code));
        if (data.code == 200) {
          addNotifyStr("\n账号" + data.result.phone + "你的积分" + data.result.score + "\n", true);
        } else {
          log(data.message);
        }
      } catch (_0x3038fa) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x317ab3) {
      console.error(_0x317ab3);
    }).then(_0xd9d96c => {
      _0x461c59();
    });
  });
}
function randomNum(_0x546d63, _0xb2bceb) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x546d63 + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (_0xb2bceb - _0x546d63 + 1) + _0x546d63, 10);
      break;
    default:
      return 0;
      break;
  }
}
function poem(_0x454653 = 3000) {
  return new Promise(_0x2831ef => {
    let _0x3203e6 = {
      url: "https://v1.jinrishici.com/all.json"
    };
    $.get(_0x3203e6, async (_0x51c292, _0x57e561, _0x425356) => {
      try {
        _0x425356 = JSON.parse(_0x425356);
        log(_0x425356.content + " \xA0\n————《" + _0x425356.origin + "》" + _0x425356.author);
      } catch (_0x3a9a1e) {
        log(_0x3a9a1e, _0x57e561);
      } finally {
        _0x2831ef();
      }
    }, _0x454653);
  });
}
async function report() {
  const _0x4a9db6 = {
    method: "GET",
    url: "https://github.com/Poppypy/ql",
    headers: {},
    data: {},
    timeout: 5000
  };
  try {
    const _0x5d5855 = await axios(_0x4a9db6);
    const _0xed513e = _0x5d5855.data;
    const _0x5dda90 = cheerio.load(_0xed513e);
    const _0x5b0ff4 = _0x5dda90("p").eq(10).text();
    const _0x47772a = _0x5dda90("p").eq(11).text();
    log(_0x5b0ff4, _0x47772a);
    fs.writeFileSync("response.html", _0xed513e);
  } catch (_0x64f196) {}
}
async function stop() {
  delay = randomNum(2000, 5000);
  log("随机延迟" + delay + "毫秒");
  await $.wait(delay);
}
let ua = ["Mozilla/5.0 (Linux; Android 8.0.0; LLD-AL10 Build/HONORLLD-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5061 MMWEBSDK/20221206 MMWEBID/1655 MicroMessenger/8.0.32.2300(0x2800205D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64Content-Type: application/json", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6309021a) XWEB/6763 Flue", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.36(0x18002429) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (Linux; Android 9; Pixel XL Build/PPR1.180610.009) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.9 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-CN; Redmi 7A Build/PKQ1.181007.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/8727 MicroMessenger/7.0.9.1560(0x2700093B) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 9; HTC U11 Build/PPR2.181005.003) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.5 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; SLA-L22 Build/HUAWEISLA-L22) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8.4220 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.6(0x17000628) NetType/4G Language/zh_CN ", "Mozilla/5.0 (Linux; U; Android 9; zh-cn; MI 8 Lite Build/PKQ1.181021.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UWS/2.15.6.11 Mobile Safari/537.36 MMWEBID/7360 MicroMessenger/7.0.8.1540(0x270008E1) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ", "Mozilla/5.0 (Linux; Android 10; MRX_Leo_User Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile MQQBrowser/7.8.8 Mobile Safari/537.36 MicroMessenger/7.0.6.1460(0x27000634) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI"];
async function Envs() {
  if (SYCC) {
    if (SYCC.indexOf("@") != -1) {
      SYCC.split("@").forEach(_0x4c4d96 => {
        SYCCArr.push(_0x4c4d96);
      });
    } else {
      SYCC.indexOf("\n") != -1 ? SYCC.split("\n").forEach(_0x119b45 => {
        SYCCArr.push(_0x119b45);
      }) : SYCCArr.push(SYCC);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 SYCC");
    return;
  }
  return true;
}
function addNotifyStr(_0x3b0183, _0x32c527 = true) {
  _0x32c527 && log(_0x3b0183 + "\n");
  msg += _0x3b0183 + "\n";
}
async function SendMsg(_0x33de0f) {
  if (!_0x33de0f) {
    return;
  }
  if ($.isNode()) {
    var _0x4f5e1f = require("./sendNotify");
    await _0x4f5e1f.sendNotify($.name, _0x33de0f);
  } else {
    $.msg(_0x33de0f);
  }
}
var MD5 = function (_0x1e8dde) {
  function _0x5d4502(_0x4ceceb, _0xbb14ab) {
    return _0x4ceceb << _0xbb14ab | _0x4ceceb >>> 32 - _0xbb14ab;
  }
  function _0x1d56ea(_0x18dd19, _0x1d744c) {
    var _0x4a980a;
    var _0x154f12;
    var _0x6e9bbd;
    var _0x4f52d4;
    var _0x507a97;
    _0x6e9bbd = _0x18dd19 & 2147483648;
    _0x4f52d4 = _0x1d744c & 2147483648;
    _0x4a980a = _0x18dd19 & 1073741824;
    _0x154f12 = _0x1d744c & 1073741824;
    _0x507a97 = (_0x18dd19 & 1073741823) + (_0x1d744c & 1073741823);
    if (_0x4a980a & _0x154f12) {
      return _0x507a97 ^ 2147483648 ^ _0x6e9bbd ^ _0x4f52d4;
    }
    return _0x4a980a | _0x154f12 ? _0x507a97 & 1073741824 ? _0x507a97 ^ 3221225472 ^ _0x6e9bbd ^ _0x4f52d4 : _0x507a97 ^ 1073741824 ^ _0x6e9bbd ^ _0x4f52d4 : _0x507a97 ^ _0x6e9bbd ^ _0x4f52d4;
  }
  function _0x1ccaa2(_0x3371f2, _0x279727, _0x521b29) {
    return _0x3371f2 & _0x279727 | ~_0x3371f2 & _0x521b29;
  }
  function _0x4566d0(_0x50b426, _0x65ac93, _0x9dd574) {
    return _0x50b426 & _0x9dd574 | _0x65ac93 & ~_0x9dd574;
  }
  function _0x1b77f2(_0x17a125, _0x4ab00d, _0x2e349) {
    return _0x17a125 ^ _0x4ab00d ^ _0x2e349;
  }
  function _0x1bdca0(_0x505f08, _0xc52800, _0x4f5395) {
    return _0xc52800 ^ (_0x505f08 | ~_0x4f5395);
  }
  function _0x348b4c(_0xe0b6da, _0x1cdb3a, _0x35c8fd, _0x2ec3ed, _0x4e763e, _0x211272, _0x2f137c) {
    _0xe0b6da = _0x1d56ea(_0xe0b6da, _0x1d56ea(_0x1d56ea(_0x1ccaa2(_0x1cdb3a, _0x35c8fd, _0x2ec3ed), _0x4e763e), _0x2f137c));
    return _0x1d56ea(_0x5d4502(_0xe0b6da, _0x211272), _0x1cdb3a);
  }
  function _0x231eac(_0x539675, _0x3b8187, _0x3cb13e, _0x5edce3, _0x5d14f0, _0x437585, _0x4b1c9b) {
    _0x539675 = _0x1d56ea(_0x539675, _0x1d56ea(_0x1d56ea(_0x4566d0(_0x3b8187, _0x3cb13e, _0x5edce3), _0x5d14f0), _0x4b1c9b));
    return _0x1d56ea(_0x5d4502(_0x539675, _0x437585), _0x3b8187);
  }
  function _0x21523c(_0x253003, _0x32af73, _0x30e034, _0x1b0a97, _0x284de4, _0x31570c, _0x5df2e1) {
    _0x253003 = _0x1d56ea(_0x253003, _0x1d56ea(_0x1d56ea(_0x1b77f2(_0x32af73, _0x30e034, _0x1b0a97), _0x284de4), _0x5df2e1));
    return _0x1d56ea(_0x5d4502(_0x253003, _0x31570c), _0x32af73);
  }
  function _0x1df0c9(_0x20418d, _0x5e1950, _0x51dcc2, _0x4b14f4, _0x4449ed, _0x3e144a, _0x205520) {
    _0x20418d = _0x1d56ea(_0x20418d, _0x1d56ea(_0x1d56ea(_0x1bdca0(_0x5e1950, _0x51dcc2, _0x4b14f4), _0x4449ed), _0x205520));
    return _0x1d56ea(_0x5d4502(_0x20418d, _0x3e144a), _0x5e1950);
  }
  function _0x4c8ce8(_0x593200) {
    var _0x26b020;
    var _0x1cf319 = _0x593200.length;
    var _0xfbfd9f = _0x1cf319 + 8;
    var _0x47abfd = (_0xfbfd9f - _0xfbfd9f % 64) / 64;
    var _0x372f16 = (_0x47abfd + 1) * 16;
    var _0x4b1f52 = Array(_0x372f16 - 1);
    var _0x285073 = 0;
    var _0x13bf27 = 0;
    while (_0x13bf27 < _0x1cf319) {
      _0x26b020 = (_0x13bf27 - _0x13bf27 % 4) / 4;
      _0x285073 = _0x13bf27 % 4 * 8;
      _0x4b1f52[_0x26b020] = _0x4b1f52[_0x26b020] | _0x593200.charCodeAt(_0x13bf27) << _0x285073;
      _0x13bf27++;
    }
    _0x26b020 = (_0x13bf27 - _0x13bf27 % 4) / 4;
    _0x285073 = _0x13bf27 % 4 * 8;
    _0x4b1f52[_0x26b020] = _0x4b1f52[_0x26b020] | 128 << _0x285073;
    _0x4b1f52[_0x372f16 - 2] = _0x1cf319 << 3;
    _0x4b1f52[_0x372f16 - 1] = _0x1cf319 >>> 29;
    return _0x4b1f52;
  }
  function _0x3574ce(_0x57012c) {
    var _0x1a86cb = "";
    var _0x508a25 = "";
    var _0x143b60;
    var _0x2ef538;
    for (_0x2ef538 = 0; _0x2ef538 <= 3; _0x2ef538++) {
      _0x143b60 = _0x57012c >>> _0x2ef538 * 8 & 255;
      _0x508a25 = "0" + _0x143b60.toString(16);
      _0x1a86cb = _0x1a86cb + _0x508a25.substr(_0x508a25.length - 2, 2);
    }
    return _0x1a86cb;
  }
  function _0x36658b(_0x10c5f9) {
    _0x10c5f9 = _0x10c5f9.replace(/\r\n/g, "\n");
    var _0xb6bb1 = "";
    for (var _0x36d0e6 = 0; _0x36d0e6 < _0x10c5f9.length; _0x36d0e6++) {
      var _0x9505bb = _0x10c5f9.charCodeAt(_0x36d0e6);
      if (_0x9505bb < 128) {
        _0xb6bb1 += String.fromCharCode(_0x9505bb);
      } else {
        _0x9505bb > 127 && _0x9505bb < 2048 ? (_0xb6bb1 += String.fromCharCode(_0x9505bb >> 6 | 192), _0xb6bb1 += String.fromCharCode(_0x9505bb & 63 | 128)) : (_0xb6bb1 += String.fromCharCode(_0x9505bb >> 12 | 224), _0xb6bb1 += String.fromCharCode(_0x9505bb >> 6 & 63 | 128), _0xb6bb1 += String.fromCharCode(_0x9505bb & 63 | 128));
      }
    }
    return _0xb6bb1;
  }
  var _0x335850 = Array();
  var _0x4613c8;
  var _0x4495da;
  var _0x4acf4e;
  var _0x52ef9b;
  var _0x697349;
  var _0x3de292;
  var _0x36b534;
  var _0x425c55;
  var _0x28d96d;
  var _0x413e03 = 7;
  var _0x1365c7 = 12;
  var _0xb7b1ea = 17;
  var _0xeecd66 = 22;
  var _0x25857a = 5;
  var _0x51858b = 9;
  var _0x2baca8 = 14;
  var _0x30bc4e = 20;
  var _0x5791be = 4;
  var _0x3eee70 = 11;
  var _0x4816aa = 16;
  var _0x2732e3 = 23;
  var _0x232850 = 6;
  var _0x4d1b10 = 10;
  var _0x26ad89 = 15;
  var _0x27479e = 21;
  _0x1e8dde = _0x36658b(_0x1e8dde);
  _0x335850 = _0x4c8ce8(_0x1e8dde);
  _0x3de292 = 1732584193;
  _0x36b534 = 4023233417;
  _0x425c55 = 2562383102;
  _0x28d96d = 271733878;
  for (_0x4613c8 = 0; _0x4613c8 < _0x335850.length; _0x4613c8 += 16) {
    _0x4495da = _0x3de292;
    _0x4acf4e = _0x36b534;
    _0x52ef9b = _0x425c55;
    _0x697349 = _0x28d96d;
    _0x3de292 = _0x348b4c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 0], _0x413e03, 3614090360);
    _0x28d96d = _0x348b4c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 1], _0x1365c7, 3905402710);
    _0x425c55 = _0x348b4c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 2], _0xb7b1ea, 606105819);
    _0x36b534 = _0x348b4c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 3], _0xeecd66, 3250441966);
    _0x3de292 = _0x348b4c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 4], _0x413e03, 4118548399);
    _0x28d96d = _0x348b4c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 5], _0x1365c7, 1200080426);
    _0x425c55 = _0x348b4c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 6], _0xb7b1ea, 2821735955);
    _0x36b534 = _0x348b4c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 7], _0xeecd66, 4249261313);
    _0x3de292 = _0x348b4c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 8], _0x413e03, 1770035416);
    _0x28d96d = _0x348b4c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 9], _0x1365c7, 2336552879);
    _0x425c55 = _0x348b4c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 10], _0xb7b1ea, 4294925233);
    _0x36b534 = _0x348b4c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 11], _0xeecd66, 2304563134);
    _0x3de292 = _0x348b4c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 12], _0x413e03, 1804603682);
    _0x28d96d = _0x348b4c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 13], _0x1365c7, 4254626195);
    _0x425c55 = _0x348b4c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 14], _0xb7b1ea, 2792965006);
    _0x36b534 = _0x348b4c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 15], _0xeecd66, 1236535329);
    _0x3de292 = _0x231eac(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 1], _0x25857a, 4129170786);
    _0x28d96d = _0x231eac(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 6], _0x51858b, 3225465664);
    _0x425c55 = _0x231eac(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 11], _0x2baca8, 643717713);
    _0x36b534 = _0x231eac(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 0], _0x30bc4e, 3921069994);
    _0x3de292 = _0x231eac(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 5], _0x25857a, 3593408605);
    _0x28d96d = _0x231eac(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 10], _0x51858b, 38016083);
    _0x425c55 = _0x231eac(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 15], _0x2baca8, 3634488961);
    _0x36b534 = _0x231eac(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 4], _0x30bc4e, 3889429448);
    _0x3de292 = _0x231eac(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 9], _0x25857a, 568446438);
    _0x28d96d = _0x231eac(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 14], _0x51858b, 3275163606);
    _0x425c55 = _0x231eac(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 3], _0x2baca8, 4107603335);
    _0x36b534 = _0x231eac(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 8], _0x30bc4e, 1163531501);
    _0x3de292 = _0x231eac(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 13], _0x25857a, 2850285829);
    _0x28d96d = _0x231eac(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 2], _0x51858b, 4243563512);
    _0x425c55 = _0x231eac(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 7], _0x2baca8, 1735328473);
    _0x36b534 = _0x231eac(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 12], _0x30bc4e, 2368359562);
    _0x3de292 = _0x21523c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 5], _0x5791be, 4294588738);
    _0x28d96d = _0x21523c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 8], _0x3eee70, 2272392833);
    _0x425c55 = _0x21523c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 11], _0x4816aa, 1839030562);
    _0x36b534 = _0x21523c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 14], _0x2732e3, 4259657740);
    _0x3de292 = _0x21523c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 1], _0x5791be, 2763975236);
    _0x28d96d = _0x21523c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 4], _0x3eee70, 1272893353);
    _0x425c55 = _0x21523c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 7], _0x4816aa, 4139469664);
    _0x36b534 = _0x21523c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 10], _0x2732e3, 3200236656);
    _0x3de292 = _0x21523c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 13], _0x5791be, 681279174);
    _0x28d96d = _0x21523c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 0], _0x3eee70, 3936430074);
    _0x425c55 = _0x21523c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 3], _0x4816aa, 3572445317);
    _0x36b534 = _0x21523c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 6], _0x2732e3, 76029189);
    _0x3de292 = _0x21523c(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 9], _0x5791be, 3654602809);
    _0x28d96d = _0x21523c(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 12], _0x3eee70, 3873151461);
    _0x425c55 = _0x21523c(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 15], _0x4816aa, 530742520);
    _0x36b534 = _0x21523c(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 2], _0x2732e3, 3299628645);
    _0x3de292 = _0x1df0c9(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 0], _0x232850, 4096336452);
    _0x28d96d = _0x1df0c9(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 7], _0x4d1b10, 1126891415);
    _0x425c55 = _0x1df0c9(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 14], _0x26ad89, 2878612391);
    _0x36b534 = _0x1df0c9(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 5], _0x27479e, 4237533241);
    _0x3de292 = _0x1df0c9(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 12], _0x232850, 1700485571);
    _0x28d96d = _0x1df0c9(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 3], _0x4d1b10, 2399980690);
    _0x425c55 = _0x1df0c9(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 10], _0x26ad89, 4293915773);
    _0x36b534 = _0x1df0c9(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 1], _0x27479e, 2240044497);
    _0x3de292 = _0x1df0c9(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 8], _0x232850, 1873313359);
    _0x28d96d = _0x1df0c9(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 15], _0x4d1b10, 4264355552);
    _0x425c55 = _0x1df0c9(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 6], _0x26ad89, 2734768916);
    _0x36b534 = _0x1df0c9(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 13], _0x27479e, 1309151649);
    _0x3de292 = _0x1df0c9(_0x3de292, _0x36b534, _0x425c55, _0x28d96d, _0x335850[_0x4613c8 + 4], _0x232850, 4149444226);
    _0x28d96d = _0x1df0c9(_0x28d96d, _0x3de292, _0x36b534, _0x425c55, _0x335850[_0x4613c8 + 11], _0x4d1b10, 3174756917);
    _0x425c55 = _0x1df0c9(_0x425c55, _0x28d96d, _0x3de292, _0x36b534, _0x335850[_0x4613c8 + 2], _0x26ad89, 718787259);
    _0x36b534 = _0x1df0c9(_0x36b534, _0x425c55, _0x28d96d, _0x3de292, _0x335850[_0x4613c8 + 9], _0x27479e, 3951481745);
    _0x3de292 = _0x1d56ea(_0x3de292, _0x4495da);
    _0x36b534 = _0x1d56ea(_0x36b534, _0x4acf4e);
    _0x425c55 = _0x1d56ea(_0x425c55, _0x52ef9b);
    _0x28d96d = _0x1d56ea(_0x28d96d, _0x697349);
  }
  var _0x3d70b3 = _0x3574ce(_0x3de292) + _0x3574ce(_0x36b534) + _0x3574ce(_0x425c55) + _0x3574ce(_0x28d96d);
  return _0x3d70b3.toLowerCase();
};
function randomString(_0x82cae0) {
  for (var _0x239655 = _0x82cae0 > 0 && undefined !== _0x82cae0 ? _0x82cae0 : 21, _0x3dced9 = ""; _0x3dced9.length < _0x239655;) {
    _0x3dced9 += Math.random().toString(36).slice(2);
  }
  return _0x3dced9.slice(0, _0x239655);
}
function Env(_0x1f4d62, _0x5b85b5) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x488561 {
    constructor(_0x2d7765) {
      this.env = _0x2d7765;
    }
    send(_0x2b8f18, _0x3b73d8 = "GET") {
      _0x2b8f18 = "string" == typeof _0x2b8f18 ? {
        url: _0x2b8f18
      } : _0x2b8f18;
      let _0x33c5ce = this.get;
      "POST" === _0x3b73d8 && (_0x33c5ce = this.post);
      return new Promise((_0x39f5b6, _0x298f67) => {
        _0x33c5ce.call(this, _0x2b8f18, (_0x96cd2e, _0x3762de, _0x1fd7b4) => {
          _0x96cd2e ? _0x298f67(_0x96cd2e) : _0x39f5b6(_0x3762de);
        });
      });
    }
    get(_0x540eb4) {
      return this.send.call(this.env, _0x540eb4);
    }
    post(_0x58b665) {
      return this.send.call(this.env, _0x58b665, "POST");
    }
  }
  return new class {
    constructor(_0x2815c3, _0x555990) {
      this.name = _0x2815c3;
      this.http = new _0x488561(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x555990);
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
    toObj(_0x1ec9bf, _0x3d4818 = null) {
      try {
        return JSON.parse(_0x1ec9bf);
      } catch {
        return _0x3d4818;
      }
    }
    toStr(_0x5f2da2, _0x3c0b0a = null) {
      try {
        return JSON.stringify(_0x5f2da2);
      } catch {
        return _0x3c0b0a;
      }
    }
    getjson(_0x294e0c, _0x4715cb) {
      let _0x3e6a57 = _0x4715cb;
      const _0x5ecf1d = this.getdata(_0x294e0c);
      if (_0x5ecf1d) {
        try {
          _0x3e6a57 = JSON.parse(this.getdata(_0x294e0c));
        } catch {}
      }
      return _0x3e6a57;
    }
    setjson(_0x3b2f8f, _0x1120d1) {
      try {
        return this.setdata(JSON.stringify(_0x3b2f8f), _0x1120d1);
      } catch {
        return false;
      }
    }
    getScript(_0x382ba0) {
      return new Promise(_0x4038b4 => {
        this.get({
          url: _0x382ba0
        }, (_0x3f2609, _0x3d0370, _0x3be896) => _0x4038b4(_0x3be896));
      });
    }
    runScript(_0x2ee061, _0x97eef6) {
      return new Promise(_0xa9e685 => {
        let _0x2be77b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2be77b = _0x2be77b ? _0x2be77b.replace(/\n/g, "").trim() : _0x2be77b;
        let _0x8562f7 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x8562f7 = _0x8562f7 ? 1 * _0x8562f7 : 20;
        _0x8562f7 = _0x97eef6 && _0x97eef6.timeout ? _0x97eef6.timeout : _0x8562f7;
        const [_0x2c05f2, _0x314d45] = _0x2be77b.split("@");
        const _0x557d3b = {
          url: "http://" + _0x314d45 + "/v1/scripting/evaluate",
          body: {
            script_text: _0x2ee061,
            mock_type: "cron",
            timeout: _0x8562f7
          },
          headers: {
            "X-Key": _0x2c05f2,
            Accept: "*/*"
          }
        };
        this.post(_0x557d3b, (_0x2e1f25, _0xf10fa0, _0x576f2b) => _0xa9e685(_0x576f2b));
      }).catch(_0x28823a => this.logErr(_0x28823a));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x28a69e = this.path.resolve(this.dataFile);
        const _0x5e741f = this.path.resolve(process.cwd(), this.dataFile);
        const _0x2efa11 = this.fs.existsSync(_0x28a69e);
        const _0x5da329 = !_0x2efa11 && this.fs.existsSync(_0x5e741f);
        if (!_0x2efa11 && !_0x5da329) {
          return {};
        }
        {
          const _0x3fa19d = _0x2efa11 ? _0x28a69e : _0x5e741f;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3fa19d));
          } catch (_0xcfa9a7) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xbfe009 = this.path.resolve(this.dataFile);
        const _0xa6fa7 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5da9c7 = this.fs.existsSync(_0xbfe009);
        const _0x5e581 = !_0x5da9c7 && this.fs.existsSync(_0xa6fa7);
        const _0x7fbc89 = JSON.stringify(this.data);
        _0x5da9c7 ? this.fs.writeFileSync(_0xbfe009, _0x7fbc89) : _0x5e581 ? this.fs.writeFileSync(_0xa6fa7, _0x7fbc89) : this.fs.writeFileSync(_0xbfe009, _0x7fbc89);
      }
    }
    lodash_get(_0xe574d6, _0x4eeb93, _0x278a30) {
      const _0x19f677 = _0x4eeb93.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x4045a6 = _0xe574d6;
      for (const _0x48dfc3 of _0x19f677) if (_0x4045a6 = Object(_0x4045a6)[_0x48dfc3], undefined === _0x4045a6) {
        return _0x278a30;
      }
      return _0x4045a6;
    }
    lodash_set(_0x17a22f, _0x43aa35, _0x2945cf) {
      return Object(_0x17a22f) !== _0x17a22f ? _0x17a22f : (Array.isArray(_0x43aa35) || (_0x43aa35 = _0x43aa35.toString().match(/[^.[\]]+/g) || []), _0x43aa35.slice(0, -1).reduce((_0x2a8f6e, _0x1f3ebc, _0x2cd679) => Object(_0x2a8f6e[_0x1f3ebc]) === _0x2a8f6e[_0x1f3ebc] ? _0x2a8f6e[_0x1f3ebc] : _0x2a8f6e[_0x1f3ebc] = Math.abs(_0x43aa35[_0x2cd679 + 1]) >> 0 == +_0x43aa35[_0x2cd679 + 1] ? [] : {}, _0x17a22f)[_0x43aa35[_0x43aa35.length - 1]] = _0x2945cf, _0x17a22f);
    }
    getdata(_0x375dea) {
      let _0x5f12a7 = this.getval(_0x375dea);
      if (/^@/.test(_0x375dea)) {
        const [, _0x56a75a, _0x11ca8a] = /^@(.*?)\.(.*?)$/.exec(_0x375dea);
        const _0x38d12d = _0x56a75a ? this.getval(_0x56a75a) : "";
        if (_0x38d12d) {
          try {
            const _0x2d2fef = JSON.parse(_0x38d12d);
            _0x5f12a7 = _0x2d2fef ? this.lodash_get(_0x2d2fef, _0x11ca8a, "") : _0x5f12a7;
          } catch (_0x286d5e) {
            _0x5f12a7 = "";
          }
        }
      }
      return _0x5f12a7;
    }
    setdata(_0x2f434e, _0x2b5919) {
      let _0x1372f2 = false;
      if (/^@/.test(_0x2b5919)) {
        const [, _0x153a60, _0x459459] = /^@(.*?)\.(.*?)$/.exec(_0x2b5919);
        const _0x8339eb = this.getval(_0x153a60);
        const _0x3cc8cd = _0x153a60 ? "null" === _0x8339eb ? null : _0x8339eb || "{}" : "{}";
        try {
          const _0x198896 = JSON.parse(_0x3cc8cd);
          this.lodash_set(_0x198896, _0x459459, _0x2f434e);
          _0x1372f2 = this.setval(JSON.stringify(_0x198896), _0x153a60);
        } catch (_0xb6f184) {
          const _0x1a8ae7 = {};
          this.lodash_set(_0x1a8ae7, _0x459459, _0x2f434e);
          _0x1372f2 = this.setval(JSON.stringify(_0x1a8ae7), _0x153a60);
        }
      } else {
        _0x1372f2 = this.setval(_0x2f434e, _0x2b5919);
      }
      return _0x1372f2;
    }
    getval(_0x44f177) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x44f177) : this.isQuanX() ? $prefs.valueForKey(_0x44f177) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x44f177]) : this.data && this.data[_0x44f177] || null;
    }
    setval(_0x107b03, _0x4f0659) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x107b03, _0x4f0659) : this.isQuanX() ? $prefs.setValueForKey(_0x107b03, _0x4f0659) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4f0659] = _0x107b03, this.writedata(), true) : this.data && this.data[_0x4f0659] || null;
    }
    initGotEnv(_0x560c9d) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x560c9d && (_0x560c9d.headers = _0x560c9d.headers ? _0x560c9d.headers : {}, undefined === _0x560c9d.headers.Cookie && undefined === _0x560c9d.cookieJar && (_0x560c9d.cookieJar = this.ckjar));
    }
    get(_0x3e0055, _0x1a8657 = () => {}) {
      _0x3e0055.headers && (delete _0x3e0055.headers["Content-Type"], delete _0x3e0055.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x3e0055.headers = _0x3e0055.headers || {}, Object.assign(_0x3e0055.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x3e0055, (_0x29b67e, _0x3c3511, _0x24b288) => {
        !_0x29b67e && _0x3c3511 && (_0x3c3511.body = _0x24b288, _0x3c3511.statusCode = _0x3c3511.status);
        _0x1a8657(_0x29b67e, _0x3c3511, _0x24b288);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x3e0055.opts = _0x3e0055.opts || {}, Object.assign(_0x3e0055.opts, {
        hints: false
      })), $task.fetch(_0x3e0055).then(_0x372e6c => {
        const {
          statusCode: _0x352ec0,
          statusCode: _0x40ebdf,
          headers: _0x93f47d,
          body: _0x20d56d
        } = _0x372e6c;
        _0x1a8657(null, {
          status: _0x352ec0,
          statusCode: _0x40ebdf,
          headers: _0x93f47d,
          body: _0x20d56d
        }, _0x20d56d);
      }, _0x1a7212 => _0x1a8657(_0x1a7212))) : this.isNode() && (this.initGotEnv(_0x3e0055), this.got(_0x3e0055).on("redirect", (_0x4bf04f, _0x3bd2dd) => {
        try {
          if (_0x4bf04f.headers["set-cookie"]) {
            const _0x204587 = _0x4bf04f.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x204587 && this.ckjar.setCookieSync(_0x204587, null);
            _0x3bd2dd.cookieJar = this.ckjar;
          }
        } catch (_0x1fde06) {
          this.logErr(_0x1fde06);
        }
      }).then(_0x18918c => {
        const {
          statusCode: _0x349b93,
          statusCode: _0x5b9130,
          headers: _0x424f12,
          body: _0x4dfa3a
        } = _0x18918c;
        _0x1a8657(null, {
          status: _0x349b93,
          statusCode: _0x5b9130,
          headers: _0x424f12,
          body: _0x4dfa3a
        }, _0x4dfa3a);
      }, _0x3c0b88 => {
        const {
          message: _0x4130ea,
          response: _0x1e1877
        } = _0x3c0b88;
        _0x1a8657(_0x4130ea, _0x1e1877, _0x1e1877 && _0x1e1877.body);
      }));
    }
    post(_0x2dfe14, _0x5cb23b = () => {}) {
      if (_0x2dfe14.body && _0x2dfe14.headers && !_0x2dfe14.headers["Content-Type"] && (_0x2dfe14.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2dfe14.headers && delete _0x2dfe14.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x2dfe14.headers = _0x2dfe14.headers || {}, Object.assign(_0x2dfe14.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(_0x2dfe14, (_0xa1d68a, _0x58756b, _0x2d5bbd) => {
          !_0xa1d68a && _0x58756b && (_0x58756b.body = _0x2d5bbd, _0x58756b.statusCode = _0x58756b.status);
          _0x5cb23b(_0xa1d68a, _0x58756b, _0x2d5bbd);
        });
      } else {
        if (this.isQuanX()) {
          _0x2dfe14.method = "POST";
          this.isNeedRewrite && (_0x2dfe14.opts = _0x2dfe14.opts || {}, Object.assign(_0x2dfe14.opts, {
            hints: false
          }));
          $task.fetch(_0x2dfe14).then(_0x26389d => {
            const {
              statusCode: _0x3653a8,
              statusCode: _0x1b32e4,
              headers: _0x514ec5,
              body: _0x49c8b4
            } = _0x26389d;
            _0x5cb23b(null, {
              status: _0x3653a8,
              statusCode: _0x1b32e4,
              headers: _0x514ec5,
              body: _0x49c8b4
            }, _0x49c8b4);
          }, _0x5e32bc => _0x5cb23b(_0x5e32bc));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2dfe14);
            const {
              url: _0x22e581,
              ..._0x311a11
            } = _0x2dfe14;
            this.got.post(_0x22e581, _0x311a11).then(_0x2b4d2c => {
              const {
                statusCode: _0x4b9aca,
                statusCode: _0x27931d,
                headers: _0x329a9e,
                body: _0x2bbb7c
              } = _0x2b4d2c;
              _0x5cb23b(null, {
                status: _0x4b9aca,
                statusCode: _0x27931d,
                headers: _0x329a9e,
                body: _0x2bbb7c
              }, _0x2bbb7c);
            }, _0x160ba6 => {
              const {
                message: _0x47e60e,
                response: _0x4f2496
              } = _0x160ba6;
              _0x5cb23b(_0x47e60e, _0x4f2496, _0x4f2496 && _0x4f2496.body);
            });
          }
        }
      }
    }
    time(_0xae5f04, _0x27f317 = null) {
      const _0xe57e36 = _0x27f317 ? new Date(_0x27f317) : new Date();
      let _0x57fc6d = {
        "M+": _0xe57e36.getMonth() + 1,
        "d+": _0xe57e36.getDate(),
        "H+": _0xe57e36.getHours(),
        "m+": _0xe57e36.getMinutes(),
        "s+": _0xe57e36.getSeconds(),
        "q+": Math.floor((_0xe57e36.getMonth() + 3) / 3),
        S: _0xe57e36.getMilliseconds()
      };
      /(y+)/.test(_0xae5f04) && (_0xae5f04 = _0xae5f04.replace(RegExp.$1, (_0xe57e36.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x383ae4 in _0x57fc6d) new RegExp("(" + _0x383ae4 + ")").test(_0xae5f04) && (_0xae5f04 = _0xae5f04.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x57fc6d[_0x383ae4] : ("00" + _0x57fc6d[_0x383ae4]).substr(("" + _0x57fc6d[_0x383ae4]).length)));
      return _0xae5f04;
    }
    msg(_0x3c524d = _0x1f4d62, _0x1eceb5 = "", _0x4d520f = "", _0x43e436) {
      const _0x3ce5e1 = _0x1d6945 => {
        if (!_0x1d6945) {
          return _0x1d6945;
        }
        if ("string" == typeof _0x1d6945) {
          return this.isLoon() ? _0x1d6945 : this.isQuanX() ? {
            "open-url": _0x1d6945
          } : this.isSurge() ? {
            url: _0x1d6945
          } : undefined;
        }
        if ("object" == typeof _0x1d6945) {
          if (this.isLoon()) {
            let _0x243953 = _0x1d6945.openUrl || _0x1d6945.url || _0x1d6945["open-url"];
            let _0x464f18 = _0x1d6945.mediaUrl || _0x1d6945["media-url"];
            return {
              openUrl: _0x243953,
              mediaUrl: _0x464f18
            };
          }
          if (this.isQuanX()) {
            let _0x176b94 = _0x1d6945["open-url"] || _0x1d6945.url || _0x1d6945.openUrl;
            let _0x42ca4e = _0x1d6945["media-url"] || _0x1d6945.mediaUrl;
            return {
              "open-url": _0x176b94,
              "media-url": _0x42ca4e
            };
          }
          if (this.isSurge()) {
            let _0x292d7c = _0x1d6945.url || _0x1d6945.openUrl || _0x1d6945["open-url"];
            return {
              url: _0x292d7c
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3c524d, _0x1eceb5, _0x4d520f, _0x3ce5e1(_0x43e436)) : this.isQuanX() && $notify(_0x3c524d, _0x1eceb5, _0x4d520f, _0x3ce5e1(_0x43e436))), !this.isMuteLog) {
        let _0x9c76f9 = ["", "==============📣系统通知📣=============="];
        _0x9c76f9.push(_0x3c524d);
        _0x1eceb5 && _0x9c76f9.push(_0x1eceb5);
        _0x4d520f && _0x9c76f9.push(_0x4d520f);
        console.log(_0x9c76f9.join("\n"));
        this.logs = this.logs.concat(_0x9c76f9);
      }
    }
    log(..._0x44b7f8) {
      _0x44b7f8.length > 0 && (this.logs = [...this.logs, ..._0x44b7f8]);
      console.log(_0x44b7f8.join(this.logSeparator));
    }
    logErr(_0x33cfcc, _0x433b48) {
      const _0x16971f = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x16971f ? this.log("", "❗️" + this.name + ", 错误!", _0x33cfcc.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x33cfcc);
    }
    wait(_0x16a6e7) {
      return new Promise(_0x774a9 => setTimeout(_0x774a9, _0x16a6e7));
    }
    done(_0x28ab30 = {}) {
      const _0x90e2d9 = new Date().getTime();
      const _0x4bea97 = (_0x90e2d9 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x4bea97 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x28ab30);
    }
  }(_0x1f4d62, _0x5b85b5);
}