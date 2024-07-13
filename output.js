//Sat Jul 13 2024 02:36:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("阿里云社区"),
  ckName = "aliyunWeb_data",
  controlTime = ($.isNode() ? process.env.aliyunWeb_time : $.getdata("aliyunWeb_time")) || "12",
  controlScene = ($.isNode() ? process.env.aliyunWeb_scene : $.getdata("aliyunWeb_scene")) || "false",
  controlStock = ($.isNode() ? process.env.aliyunWeb_stock : $.getdata("aliyunWeb_stock")) || "false",
  Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"];
var userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [],
  userIdx = 0,
  userCount = 0;
const taskGroup = [{
  code: "",
  name: "我的社区"
}, {
  code: "ecs",
  name: "弹性计算"
}, {
  code: "computenest",
  name: "计算巢"
}, {
  code: "yitian",
  name: "倚天"
}, {
  code: "cloudnative",
  name: "云原生"
}, {
  code: "storage",
  name: "云存储"
}, {
  code: "luoshen",
  name: "飞天洛神云网络"
}, {
  code: "database",
  name: "数据库"
}, {
  code: "polardb",
  name: "PolarDB开源"
}, {
  code: "bigdata",
  name: "大数据与机器学习"
}, {
  code: "modelscope",
  name: "ModelScope模型即服务"
}, {
  code: "viapi",
  name: "视觉智能"
}, {
  code: "iot",
  name: "物联网"
}, {
  code: "devops",
  name: "云效DevOps"
}, {
  code: "aliyun_linux",
  name: "龙蜥操作系统"
}, {
  code: "modelstudio",
  name: "百炼大模型"
}, {
  code: "tongyi",
  name: "通义大模型"
}];
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
let pendingScore = 0,
  userScore = 0,
  sceneId = "",
  resourceFrom = "",
  sectionId = "",
  ip = "";
async function main() {
  try {
    $.log("\n================== 任务 ==================\n");
    for (let _0x552e45 of userList) {
      console.log("🔷账号" + _0x552e45.index + " >> Start work");
      console.log("随机延迟" + _0x552e45.getRandomTime() + "秒");
      const _0x4b2e03 = Date.now();
      userScore = (await _0x552e45.interactData()) ?? {};
      if (_0x552e45.ckStatus) {
        if (_0x4b2e03 < new Date(new Date().setHours(Math.floor(controlTime), 0, 0, 0)).getTime()) {
          for (let _0x2a2382 of taskGroup) {
            const _0x980a13 = await _0x552e45.getUserSpaceSignInDetail(_0x2a2382.code),
              _0x221a60 = await _0x552e45.getTasks(_0x980a13);
            await _0x552e45.signin(_0x221a60, _0x2a2382.name);
            await $.wait(_0x552e45.getRandomTime());
            const _0x2af8e9 = await _0x552e45.assessSignInBonusQualification(_0x980a13, _0x2a2382.name);
            await $.wait(_0x552e45.getRandomTime());
            _0x2af8e9 && (await _0x552e45.receiveSignInBonus(_0x980a13, _0x2a2382.name), await $.wait(_0x552e45.getRandomTime()));
          }
          const _0x4bd243 = await _0x552e45.getEbooks();
          await $.wait(_0x552e45.getRandomTime());
          const _0x455d01 = await _0x552e45.getCsrfToken(_0x4bd243, "ebook");
          await $.wait(_0x552e45.getRandomTime());
          await _0x552e45.addBookComment(_0x4bd243, _0x455d01);
          await $.wait(_0x552e45.getRandomTime());
          for (let _0xd2635b = 0; _0xd2635b < 5; _0xd2635b++) {
            const _0x432e97 = await _0x552e45.getArticles();
            await $.wait(_0x552e45.getRandomTime());
            await _0x552e45.likeOrNotLike(_0x432e97, "aliyun-public-like", 0);
            await $.wait(_0x552e45.getRandomTime());
            await _0x552e45.likeOrNotLike(_0x432e97, "aliyun-public-favorite", 0);
            await $.wait(_0x552e45.getRandomTime());
            _0xd2635b === 0 && (await _0x552e45.addComment(_0x432e97), await $.wait(_0x552e45.getRandomTime()), await _0x552e45.likeOrNotLike(_0x432e97, "aliyun-public-share", 0), await $.wait(_0x552e45.getRandomTime()));
            const _0x1dbc66 = await _0x552e45.getAsks();
            await $.wait(_0x552e45.getRandomTime());
            if (_0x1dbc66 && _0x1dbc66?.["id"]) {
              const _0x404f22 = await _0x552e45.getCsrfToken(_0x1dbc66.id, "ask");
              await $.wait(_0x552e45.getRandomTime());
              const _0x532683 = await _0x552e45.getAskDetail(_0x1dbc66);
              await $.wait(_0x552e45.getRandomTime());
              _0x532683 && (await _0x552e45.voteAnswer(_0x1dbc66.id, _0x532683, _0x404f22, 1), await $.wait(_0x552e45.getRandomTime()));
            }
          }
          JSON.parse(controlScene) && (await _0x552e45.doScene(), await $.wait(_0x552e45.getRandomTime()));
          JSON.parse(controlStock) && (await _0x552e45.getGroupItems());
          pendingScore = await _0x552e45.getUserTotalPendingScore();
          $.title = "获得待领取积分: " + pendingScore;
          DoubleLog("🎉 当前积分: " + userScore + ", 待领取积分: " + pendingScore);
        } else {
          for (let _0x2f538e of taskGroup) {
            const _0x2dfc48 = await _0x552e45.getUserSpaceSignInDetail(_0x2f538e.code),
              _0x1097b8 = await _0x552e45.assessSignInBonusQualification(_0x2dfc48, _0x2f538e.name);
            await $.wait(_0x552e45.getRandomTime());
            _0x1097b8 && (await _0x552e45.receiveSignInBonus(_0x2dfc48, _0x2f538e.name), await $.wait(_0x552e45.getRandomTime()));
          }
          pendingScore = await _0x552e45.getUserTotalPendingScore();
          await $.wait(_0x552e45.getRandomTime());
          await _0x552e45.collect();
          await $.wait(_0x552e45.getRandomTime());
          await $.wait(_0x552e45.getRandomTime());
          const _0x830878 = (await _0x552e45.getFavors()) ?? [];
          await $.wait(_0x552e45.getRandomTime());
          if (_0x830878.length) {
            for (let _0x45a0a6 of _0x830878) {
              await _0x552e45.likeOrNotLike(_0x45a0a6.objectId, "aliyun-public-like", 1);
              await $.wait(_0x552e45.getRandomTime());
              await _0x552e45.likeOrNotLike(_0x45a0a6.objectId, "aliyun-public-favorite", 1);
              await $.wait(_0x552e45.getRandomTime());
            }
          }
          JSON.parse(controlStock) && (await _0x552e45.getGroupItems());
          let _0x3725b8 = (await _0x552e45.interactData()) ?? {};
          $.title = "本次运行共获得" + (pendingScore || 0) + "积分";
          DoubleLog("🎉 领取积分: " + pendingScore + ", 当前积分: " + _0x3725b8);
        }
      } else {
        $.notifyMsg.push("⛔️ 账号" + (_0x552e45.userName || _0x552e45.index) + " >> Check ck error!");
      }
      $.notifyList.push({
        id: _0x552e45.index,
        avatar: _0x552e45.avatar,
        message: $.notifyMsg
      });
      $.notifyMsg = [];
    }
  } catch (_0x423256) {
    $.log("⛔️ main run error => " + _0x423256);
    throw new Error("⛔️ main run error => " + _0x423256);
  }
}
class UserInfo {
  constructor(_0x2ecfe9) {
    this.index = ++userIdx;
    this.token = _0x2ecfe9.token || _0x2ecfe9;
    this.userId = _0x2ecfe9.userId;
    this.userName = _0x2ecfe9.userName;
    this.avatar = _0x2ecfe9.avatar;
    this.ckStatus = true;
    this.baseUrl = "";
    this.host = "https://developer.aliyun.com/developer/api";
    this.headers = {
      Cookie: this.token,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Referer: "https://developer.aliyun.com/"
    };
    this.getRandomTime = () => randomInt(1, 2);
    this.fetch = async _0x20cbf9 => {
      try {
        if (typeof _0x20cbf9 === "string") {
          _0x20cbf9 = {
            url: _0x20cbf9
          };
        }
        if (_0x20cbf9?.["url"]?.["startsWith"]("/")) {
          _0x20cbf9.url = this.host + _0x20cbf9.url;
        }
        const _0x5ebecc = await Request({
          ..._0x20cbf9,
          headers: _0x20cbf9.headers || this.headers,
          url: _0x20cbf9.url || this.baseUrl
        });
        debug(_0x5ebecc, _0x20cbf9?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x20cbf9?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x5ebecc?.["code"] == 40001) {
          throw new Error(_0x5ebecc?.["message"] || "用户需要去登录");
        }
        return _0x5ebecc;
      } catch (_0x1e8260) {
        this.ckStatus = false;
        $.log("⛔️ 请求发起失败！" + _0x1e8260);
      }
    };
  }
  async getUser() {
    try {
      const _0x30d7a3 = {
        url: "/my/user/getUser",
        type: "get"
      };
      await this.fetch(_0x30d7a3);
    } catch (_0x5c5696) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x5c5696);
    }
  }
  async assessSignInBonusQualification(_0x471b71, _0x9247a8) {
    try {
      const _0x23a73f = {
        url: "/sign/assessSignInBonusQualification",
        type: "get",
        params: {
          taskGroupId: _0x471b71
        }
      };
      let _0x24d91a = await this.fetch(_0x23a73f);
      return _0x24d91a?.["data"];
    } catch (_0xf9c37a) {
      this.ckStatus = false;
      $.log("⛔️ 查询领奖条件失败! " + _0xf9c37a);
    }
  }
  async receiveSignInBonus(_0x5b98fc, _0x5d7231) {
    try {
      const _0x462db3 = {
        url: "/sign/receiveSignInBonus",
        type: "post",
        dataType: "form",
        body: {
          taskGroupId: _0x5b98fc
        }
      };
      let _0x1dff40 = await this.fetch(_0x462db3);
      if (_0x1dff40?.["code"] == "200") {
        const _0x1c7d6e = _0x1dff40?.["data"] || 0;
        $.log("✅ 抽奖 - " + (_0x5d7231 || "default") + ": 获得 " + _0x1c7d6e + " 积分");
      } else {
        $.log("⛔️ 抽奖 - " + (_0x5d7231 || "default") + ": " + _0x1dff40?.["message"]);
      }
    } catch (_0xf86f37) {
      this.ckStatus = false;
      $.log("⛔️ 抽奖失败! " + _0xf86f37);
    }
  }
  async getUserSpaceSignInDetail(_0x4f63d4) {
    try {
      const _0x4b9807 = {
        url: "/sign/getUserSpaceSignInDetail",
        type: "get",
        params: {
          excode: _0x4f63d4
        }
      };
      let _0x4cfa4d = await this.fetch(_0x4b9807);
      const _0x388e31 = _0x4cfa4d?.["data"]?.["taskGroupId"];
      return _0x388e31;
    } catch (_0x598b08) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x598b08);
    }
  }
  async getTasks(_0x1c5d86) {
    try {
      const _0x1d8a75 = {
        url: "/task/getTaskGroup?groupId=" + _0x1c5d86,
        type: "get"
      };
      let _0x36da56 = await this.fetch(_0x1d8a75);
      const _0x22e4fa = _0x36da56?.["data"]?.["taskList"];
      let _0x2fc1b6 = {};
      if (_0x22e4fa.length) {
        const _0x120e30 = new Date().getTime();
        for (let _0x3a7ded of _0x22e4fa) {
          if (_0x120e30 >= _0x3a7ded.gmtEnableStart && _0x120e30 <= _0x3a7ded.gmtEnableEnd) {
            const _0x4ee37e = JSON.parse(_0x3a7ded.finishRule.replace(/&quot;/g, "\""));
            _0x2fc1b6.actionCode = _0x4ee37e.actions[0].actionCode;
            _0x2fc1b6.activityCode = _0x4ee37e.actions[0].actionCode;
            _0x2fc1b6.objectId = _0x4ee37e.actions[0].objectId;
          }
        }
      }
      return _0x2fc1b6;
    } catch (_0x1153fd) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x1153fd);
    }
  }
  async signin(_0x2dbe9e, _0x4cd829) {
    try {
      const _0x2524df = {
        url: "/task/actionLog",
        type: "post",
        dataType: "form",
        body: _0x2dbe9e
      };
      let _0x49f830 = await this.fetch(_0x2524df);
      $.log("✅ 签到 - " + (_0x4cd829 || "default") + ": " + _0x49f830?.["message"]);
    } catch (_0x59f087) {
      this.ckStatus = false;
      $.log("⛔️ 签到失败! " + _0x59f087);
    }
  }
  async getArticles() {
    try {
      const _0xc83054 = Math.floor(Math.random() * 31) + 1,
        _0x524d71 = {
          url: "https://developer.aliyun.com/group/aliware/article_hot?pageNum=" + _0xc83054,
          type: "get"
        };
      let _0x174629 = await this.fetch(_0x524d71);
      const _0x576ca2 = $.Cheerio.load(_0x174629),
        _0x2af227 = _0x576ca2(".community-detail-content"),
        _0x4ce30d = _0x2af227.find(".community-list").map((_0xe76091, _0xebbd20) => {
          return {
            id: _0x576ca2(_0xebbd20).find(".feed-item").attr("data-id"),
            name: _0x576ca2(_0xebbd20).find(".feed-item-content-title h3").text()
          };
        }).get(),
        _0x1ec3fa = _0x4ce30d[Math.floor(Math.random() * _0x4ce30d.length)],
        {
          id: _0x5c3ab2,
          name: _0x1a53e1
        } = _0x1ec3fa;
      $.log("✅ 随机获取文章id: " + _0x5c3ab2 + ", 标题: " + _0x1a53e1);
      return _0x5c3ab2;
    } catch (_0x351d19) {
      this.ckStatus = false;
      $.log("⛔️ 获取文章列表失败! " + _0x351d19);
    }
  }
  async getEbooks() {
    try {
      const _0x53aab8 = Math.floor(Math.random() * 501) + 1,
        _0xb0b2e5 = {
          url: "https://developer.aliyun.com/ebook/index/__0_0_0_" + _0x53aab8,
          type: "get"
        };
      let _0x2a175e = await this.fetch(_0xb0b2e5);
      const _0x516916 = $.Cheerio.load(_0x2a175e),
        _0x13e295 = _0x516916(".ebook-home-list"),
        _0xc43f88 = _0x13e295.find(".ebook-home-item").map((_0x46a42f, _0x2361b8) => {
          return {
            id: _0x516916(_0x2361b8).attr("href").replace("/ebook/", ""),
            name: _0x516916(_0x2361b8).find(".ebook-home-title").text()
          };
        }).get(),
        _0x413040 = _0xc43f88[Math.floor(Math.random() * _0xc43f88.length)],
        {
          id: _0x56b8a7,
          name: _0x27a1f2
        } = _0x413040;
      $.log("✅ 随机电子书id: " + _0x56b8a7 + ", 标题: " + _0x27a1f2);
      return _0x56b8a7;
    } catch (_0x4559d7) {
      this.ckStatus = false;
      $.log("⛔️ 获取电子书列表失败! " + _0x4559d7);
    }
  }
  async getAsks() {
    try {
      const _0x1321d5 = Math.floor(Math.random() * 31) + 1,
        _0x1da215 = {
          url: "https://developer.aliyun.com/ask?pageNum=" + _0x1321d5,
          type: "get"
        };
      let _0x18b1e4 = await this.fetch(_0x1da215);
      const _0x199ef5 = $.Cheerio.load(_0x18b1e4),
        _0x475fcb = _0x199ef5(".askProduct-list"),
        _0x472570 = _0x475fcb.find(".askProduct-item").map((_0x2e0b88, _0x18e952) => {
          return {
            id: _0x199ef5(_0x18e952).attr("data-id") || "",
            name: _0x199ef5(_0x18e952).find(".askProduct-item-title-text h3").text() || "",
            answer: parseInt(_0x199ef5(_0x18e952).find(".askProduct-item-info-answer").text()) || ""
          };
        }).filter((_0x329e88, _0x49d5e2) => _0x49d5e2.answer > 0).get(),
        _0x4418ff = _0x472570[Math.floor(Math.random() * _0x472570.length)];
      if (_0x4418ff?.["id"] && _0x4418ff?.["name"]) {
        const {
          id: _0x1d94ae,
          name: _0x18e61e
        } = _0x4418ff;
        $.log("✅ 随机获取问答id: " + _0x1d94ae + ", 标题: " + _0x18e61e);
        return _0x4418ff;
      }
      return null;
    } catch (_0x38a3bb) {
      this.ckStatus = false;
      $.log("⛔️ 获取问答列表失败! " + _0x38a3bb);
    }
  }
  async getAskDetail(_0x586c55) {
    try {
      const _0x529be3 = {
        url: "https://developer.aliyun.com/ask/" + _0x586c55.id,
        type: "get"
      };
      let _0x3ae2df = await this.fetch(_0x529be3);
      const _0x4dfb81 = $.Cheerio.load(_0x3ae2df),
        _0x1d304e = _0x4dfb81(".answer-list"),
        _0x5d5958 = _0x1d304e.find(".answer-item").map((_0x5b8a87, _0x1c1e96) => {
          return {
            id: _0x4dfb81(_0x1c1e96).attr("data-id") || ""
          };
        }).get(),
        _0xc8e134 = _0x5d5958[Math.floor(Math.random() * _0x586c55.answer)];
      if (_0xc8e134) {
        const {
          id: _0x335c38
        } = _0xc8e134;
        $.log("✅ 随机获取问题问答id: " + _0x335c38);
        return _0x335c38;
      }
      return null;
    } catch (_0x48f688) {
      this.ckStatus = false;
      $.log("⛔️ 随机获取问题问答失败! " + _0x48f688);
    }
  }
  async likeOrNotLike(_0xddc0f5, _0x549c9c, _0x57b36e) {
    try {
      const _0x2d16b8 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/likeOrNotLike",
        type: "get",
        params: {
          bizCategory: "yq-article",
          actionCode: _0x549c9c,
          objectId: _0xddc0f5,
          status: _0x57b36e,
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x2d16b8);
      let _0x2c8226 = "文章" + (_0x57b36e === 1 ? "取消" : "");
      if (_0x549c9c === "aliyun-public-like") {
        _0x2c8226 += "点赞";
      } else {
        if (_0x549c9c === "aliyun-public-favorite") {
          _0x2c8226 += "收藏";
        } else {
          _0x549c9c === "aliyun-public-share" && (_0x2c8226 += "分享");
        }
      }
      $.log("✅ " + _0x2c8226 + "成功: " + _0xddc0f5);
    } catch (_0x3cbdf1) {
      this.ckStatus = false;
      $.log("⛔️ " + taskType + "失败! " + _0x3cbdf1);
    }
  }
  async getCsrfToken(_0xcd74d8, _0x2d6b0d) {
    try {
      const _0x43935f = {
          url: "https://developer.aliyun.com/csrfToken",
          type: "get",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/" + _0x2d6b0d + "/" + _0xcd74d8
          }
        },
        _0x21bfce = await this.fetch(_0x43935f);
      return _0x21bfce?.["token"];
    } catch (_0x8b7ef) {
      this.ckStatus = false;
      $.log("⛔️ 获取 csrf 失败! " + _0x8b7ef);
    }
  }
  async voteAnswer(_0x4c2060, _0x187cc5, _0x3a39a8, _0x693880) {
    try {
      const _0x2ab64d = {
        url: "https://developer.aliyun.com/developer/api/my/ask/voteAnswer",
        type: "post",
        dataType: "form",
        headers: {
          Cookie: this.token,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
          Referer: "https://developer.aliyun.com/ask/" + _0x4c2060
        },
        params: {
          p_csrf: _0x3a39a8
        },
        body: {
          id: _0x187cc5,
          votes: _0x693880
        }
      };
      await this.fetch(_0x2ab64d);
      $.log("✅ 回答点赞: " + _0x4c2060 + "-" + _0x187cc5);
    } catch (_0x524b8c) {
      this.ckStatus = false;
      $.log("⛔️ 回答点赞失败! " + _0x524b8c);
    }
  }
  async addBookComment(_0x554ff5, _0x28db74) {
    try {
      const _0x3b2518 = {
          url: "https://developer.aliyun.com/developer/api/ebook/mark/add",
          type: "post",
          dataType: "json",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/ebook/" + _0x554ff5
          },
          params: {
            p_csrf: _0x28db74
          },
          body: {
            eBookId: _0x554ff5,
            score: 10,
            content: "很棒的一本书"
          }
        },
        _0x4bd15a = await this.fetch(_0x3b2518);
      _0x4bd15a?.["code"] == "200" ? $.log("✅ 评价电子书: " + _0x554ff5) : $.log("⛔️ 评价电子书失败! " + _0x4bd15a?.["message"]);
    } catch (_0x3382a7) {
      this.ckStatus = false;
      $.log("⛔️ 评价电子书失败! " + _0x3382a7);
    }
  }
  async getFavors() {
    try {
      const _0x1a37f9 = {
          url: "https://developer.aliyun.com/developer/api/my/subscribe/listUserFavor",
          type: "get",
          params: {
            pageNum: 1,
            pageSize: 10,
            type: 1
          }
        },
        _0x29297d = await this.fetch(_0x1a37f9),
        {
          list: _0x28a4af
        } = _0x29297d?.["data"];
      if (_0x28a4af.length) {
        $.log("✅ 开始取消文章的点赞与收藏记录");
        return _0x28a4af;
      }
      return [];
    } catch (_0x58a894) {
      this.ckStatus = false;
      $.log("⛔️ " + (type === "aliyun-public-like" ? "文章点赞" : "文章收藏") + "失败! " + _0x58a894);
    }
  }
  async addComment(_0x1d833b) {
    try {
      const _0x16193e = {
        url: "https://ucc.aliyun.com/uccPagingComponent/addComment",
        type: "get",
        params: {
          content: encodeURIComponent("感谢博主的分享"),
          objectId: _0x1d833b,
          bizCategory: "yq-comment-type-article",
          commentType: 0,
          sourceAppCode: "developer-ecology",
          sourceBizCategory: "developer-ecology-group",
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x16193e);
      $.log("✅ 文章评论: " + _0x1d833b);
    } catch (_0x1af923) {
      this.ckStatus = false;
      $.log("⛔️ 文章点赞失败! " + _0x1af923);
    }
  }
  async doScene() {
    const _0x3c9007 = this.token.match(new RegExp("c_csrf=([^;]*)"))[1];
    await this.getSceneList();
    await $.wait(this.getRandomTime());
    const _0x38620d = await this.getSceneDetailPageInfoById();
    await $.wait(this.getRandomTime());
    _0x38620d ? (await this.getSceneStartPageInfoById(), await $.wait(this.getRandomTime()), await this.startSceneById(_0x3c9007), await $.wait(this.getRandomTime()), resourceFrom === "1" && sectionId && (await this.createResourceById(_0x3c9007), await $.wait(this.getRandomTime())), resourceFrom === "2" && (await this.closeSceneById(_0x3c9007), await $.wait(this.getRandomTime()))) : await this.doScene();
  }
  async getSceneList() {
    try {
      const _0x45c3f3 = Math.floor(Math.random() * 27) + 1,
        _0x54badf = 21,
        _0x3f6e98 = {
          url: "https://developer.aliyun.com/adc/api/getSceneList",
          type: "get",
          params: {
            tags: encodeURIComponent(","),
            difficulty: "",
            orderBy: "useCountTotal",
            pageNum: _0x45c3f3,
            pageSize: _0x54badf
          },
          headers: {
            Cookie: this.headers.Cookie,
            Referer: "https://developer.aliyun.com/adc/labs/",
            "User-Agent": this.headers["User-Agent"]
          }
        },
        _0x215289 = await this.fetch(_0x3f6e98),
        _0x15f76d = _0x215289?.["data"]?.["list"];
      if (_0x15f76d.length) {
        const _0x5a63c9 = _0x15f76d[Math.floor(Math.random() * _0x15f76d.length)];
        sceneId = _0x5a63c9?.["id"];
        $.log("✅ 获取场景: " + _0x5a63c9.name + "[" + sceneId + "]");
      } else {
        $.log("⛔️ 获取场景失败! " + e);
      }
    } catch (_0x4dbecf) {
      this.ckStatus = false;
      $.log("⛔️ 获取场景失败! " + _0x4dbecf);
    }
  }
  async getSceneDetailPageInfoById() {
    try {
      const _0x4e2e68 = {
          url: "https://developer.aliyun.com/adc/api/getSceneDetailPageInfoById",
          type: "get",
          params: {
            id: sceneId
          },
          headers: {
            cookie: this.headers.Cookie,
            referer: "https://developer.aliyun.com/adc/scenario/" + sceneId,
            "user-agent": this.headers["User-Agent"]
          }
        },
        _0x1b0e19 = await this.fetch(_0x4e2e68),
        _0x3493d1 = _0x1b0e19?.["data"]?.["developerAdcExperienceStatusVO"]?.["buttonCode"];
      return _0x3493d1 ? _0x3493d1 === "1" ? ($.log("✅ 确认场景状态: " + _0x1b0e19?.["data"]?.["id"]), _0x1b0e19?.["data"]?.["id"]) : ($.log("⛔️ 确认场景状态: " + _0x1b0e19?.["data"]?.["id"] + " 已完成，将重新获取场景"), null) : ($.log("⛔️ 确认场景状态: " + _0x1b0e19?.["data"]?.["id"] + " 状态异常，将重新获取场景"), null);
    } catch (_0xd648b6) {
      this.ckStatus = false;
      $.log("⛔️ 确认场景状态失败! " + _0xd648b6);
    }
  }
  async getSceneStartPageInfoById() {
    try {
      const _0x4d4f0e = {
          url: "https://developer.aliyun.com/adc/api/getSceneStartPageInfoById",
          type: "get",
          params: {
            id: sceneId
          },
          headers: {
            cookie: this.headers.Cookie,
            referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId,
            "user-agent": this.headers["User-Agent"]
          }
        },
        _0x1ce44b = await this.fetch(_0x4d4f0e);
      ip = _0x1ce44b?.["data"]?.["ip"];
      _0x1ce44b?.["data"]?.["resourceFrom"]["indexOf"]("1") > -1 ? resourceFrom = "1" : resourceFrom = "2";
      _0x1ce44b?.["data"]?.["resourceCardInfoDTOList"]["length"] && (sectionId = _0x1ce44b?.["data"]?.["resourceCardInfoDTOList"][0]?.["id"]);
      $.log("✅ 获取场景初始化信息: " + sceneId);
    } catch (_0x51a35d) {
      this.ckStatus = false;
      $.log("⛔️ 获取场景初始化信息失败! " + _0x51a35d);
    }
  }
  async startSceneById(_0x3ca4a9) {
    try {
      const _0x1380e5 = {
          url: "https://developer.aliyun.com/adc/api/startSceneById",
          type: "post",
          dataType: "form",
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0x3ca4a9,
            "X-XSRF-TOKEN": _0x3ca4a9,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          },
          params: {
            p_csrf: _0x3ca4a9
          },
          body: {
            id: sceneId,
            resourceFrom: resourceFrom
          }
        },
        _0x5a0ce4 = await this.fetch(_0x1380e5),
        {
          code: _0x5b7622,
          message: _0x1fb61f
        } = _0x5a0ce4;
      console.log((_0x5b7622 === "200" ? "✅" : "⛔️") + " 开始场景: " + sceneId + ", " + _0x1fb61f);
    } catch (_0x56347c) {
      this.ckStatus = false;
      $.log("⛔️ 开始场景失败! " + _0x56347c);
    }
  }
  async closeSceneById(_0xbf3c9c) {
    try {
      const _0x2203da = {
          url: "https://developer.aliyun.com/adc/api/closeSceneById",
          type: "post",
          dataType: "form",
          body: {
            sceneId: sceneId,
            forceClose: "true"
          },
          params: {
            p_csrf: _0xbf3c9c
          },
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0xbf3c9c,
            "X-XSRF-TOKEN": _0xbf3c9c,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x5120d1 = await this.fetch(_0x2203da),
        {
          code: _0x4bde2d,
          message: _0x3c99ed
        } = _0x5120d1;
      console.log((_0x4bde2d === "200" ? "✅" : "⛔️") + " 结束场景: " + sceneId + ", " + _0x3c99ed);
    } catch (_0x256b66) {
      this.ckStatus = false;
      $.log("⛔️ 结束场景失败! " + _0x256b66);
    }
  }
  async createResourceById(_0x3645f5) {
    try {
      const _0x1ce524 = {
          url: "https://developer.aliyun.com/adc/api/createResourceById",
          type: "post",
          dataType: "form",
          body: {
            id: sceneId,
            sectionId: sectionId,
            ip: ip
          },
          params: {
            p_csrf: _0x3645f5
          },
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0x3645f5,
            "X-XSRF-TOKEN": _0x3645f5,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x18180e = await this.fetch(_0x1ce524);
      _0x18180e?.["data"] && console.log("✅ 开始创建场景资源: " + sceneId);
    } catch (_0x22a5cc) {
      this.ckStatus = false;
      $.log("⛔️ 创建场景资源失败! " + _0x22a5cc);
    }
  }
  async getResourceCardInfoById() {
    try {
      const _0x1a22cb = {
          url: "https://developer.aliyun.com/adc/api/getResourceCardInfoById",
          type: "get",
          params: {
            sceneId: sceneId,
            sectionId: sectionId
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x5e25ec = await this.fetch(_0x1a22cb),
        {
          code: _0x12db06,
          data: _0x52418a
        } = _0x5e25ec;
      if (_0x12db06 === "200" && _0x52418a) {
        if (_0x52418a?.["status"] !== "RUNNING") {
          await $.wait(this.getRandomTime());
          await this.getResourceCardInfoById();
        } else {
          console.log("✅ 创建场景资源完毕: " + sceneId);
          return true;
        }
      }
    } catch (_0x430f01) {
      this.ckStatus = false;
      $.log("⛔️ 创建场景资源失败! " + _0x430f01);
    }
  }
  async getGroupItems() {
    try {
      const _0x13994c = {
          url: "/lm/getGroupItems?pageNum=1&pageSize=50",
          type: "get"
        },
        _0x18c93c = await this.fetch(_0x13994c),
        {
          list: _0x62fb7c
        } = _0x18c93c?.["data"];
      if (_0x62fb7c.length) {
        $.log("✅ 开始查询库存:");
        for (let _0x335ccc of _0x62fb7c) {
          $.log("🎁 " + _0x335ccc.itemTitle.replace(/【.*?】/g, "") + ": " + _0x335ccc.points + " 分【" + _0x335ccc.statusStr + "】");
        }
      }
    } catch (_0x1222aa) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x1222aa);
    }
  }
  async interactData() {
    try {
      const _0x104543 = {
        url: "/my/score/getUserScore?appCode=developer",
        type: "get"
      };
      let _0x5cc220 = await this.fetch(_0x104543);
      return _0x5cc220?.["data"];
    } catch (_0xb4209b) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0xb4209b);
    }
  }
  async getUserTotalPendingScore() {
    try {
      const _0x1f7645 = {
        url: "/score/pending/getUserTotalPendingScore?appCode=developer",
        type: "get"
      };
      let _0x58b404 = await this.fetch(_0x1f7645);
      $.log("✅ 待领取积分: " + _0x58b404?.["data"]);
      return _0x58b404?.["data"];
    } catch (_0x5a8332) {
      $.log("⛔️ 查询待领取积分失败! " + _0x5a8332);
    }
  }
  async collect() {
    try {
      const _0x31c1a0 = {
        url: "/score/pending/receiveAllPendingScore?appCode=developer",
        type: "get"
      };
      let _0xc1fce4 = await this.fetch(_0x31c1a0);
      $.log("✅ 收取积分: " + _0xc1fce4?.["data"]);
      return _0xc1fce4?.["data"];
    } catch (_0x26dbef) {
      $.log("⛔️ 收取积分失败! " + _0x26dbef);
    }
  }
  async getUccCsrfToken() {
    try {
      const _0x1b52f1 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/getUser",
        type: "get",
        params: {
          uccCsrfToken: "",
          callback: getCallback()
        }
      };
      let _0x40b6e5 = await this.fetch(_0x1b52f1);
      const _0x267052 = _0x40b6e5.indexOf("{"),
        _0x434a39 = _0x40b6e5.lastIndexOf("}"),
        _0x4df906 = _0x40b6e5.substring(_0x267052, _0x434a39 + 1),
        _0xcec762 = JSON.parse(_0x4df906);
      return _0xcec762.data.uccCsrfToken;
    } catch (_0x2cd47b) {
      $.log("⛔️ 获取UccCsrfToken失败! " + _0x2cd47b);
    }
  }
}
function getCallback() {
  return "jsonp_" + Date.now() + "_" + Math.ceil(100000 * Math.random());
}
async function getCookie() {
  if ($request && $request.method === "OPTIONS") {
    return;
  }
  const _0x47304a = ObjectKeys2LowerCase($request.headers),
    _0x360aec = _0x47304a.cookie,
    _0x4dab0a = $.toObj($response.body);
  if (!_0x4dab0a?.["data"]) {
    $.msg($.name, "⛔️ 获取Cookie失败!", "");
    return;
  }
  const {
      nickname: _0x4c02df,
      avatar: _0x5dcc9a
    } = _0x4dab0a?.["data"],
    _0x1610b6 = {
      userId: _0x4c02df,
      avatar: _0x5dcc9a,
      token: _0x360aec,
      userName: _0x4c02df
    };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0x1dac4b = userCookie.findIndex(_0x453eb2 => _0x453eb2.userId == _0x1610b6.userId);
  userCookie[_0x1dac4b] ? userCookie[_0x1dac4b] = _0x1610b6 : userCookie.push(_0x1610b6);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x1610b6.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    $.Cheerio = await loadCheerio();
    return $.Cheerio ? true : false;
  } catch (_0x5af0cc) {
    throw new Error("⛔️ loadModule run error => " + _0x5af0cc);
  }
}
async function checkEnv() {
  try {
    const _0x4a2fe3 = envSplitor.find(_0x555e85 => userCookie.includes(_0x555e85)) || envSplitor[0];
    userCookie = $.toObj(userCookie) || userCookie.split(_0x4a2fe3);
    userList.push(...userCookie.map(_0x2efef8 => new UserInfo(_0x2efef8)).filter(Boolean));
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } catch (_0x4aedea) {
    throw new Error("⛔️ checkEnv run error => " + _0x4aedea);
  }
}
async function Request(_0x4c91dd) {
  if (typeof _0x4c91dd === "string") {
    _0x4c91dd = {
      url: _0x4c91dd
    };
  }
  try {
    if (!_0x4c91dd?.["url"]) {
      throw new Error("[发送请求] 缺少 url 参数");
    }
    let {
      url: _0x44a324,
      type: _0x1950ce,
      headers = {},
      body: _0x3dfe8b,
      params: _0x422277,
      dataType = "form",
      resultType = "data"
    } = _0x4c91dd;
    const _0x16b30d = _0x1950ce ? _0x1950ce?.["toLowerCase"]() : "body" in _0x4c91dd ? "post" : "get",
      _0x35bea8 = _0x44a324.concat(_0x16b30d === "post" ? "?" + $.queryStr(_0x422277) : ""),
      _0x53a15d = _0x4c91dd.timeout ? $.isSurge() ? _0x4c91dd.timeout / 1000 : _0x4c91dd.timeout : 10000;
    if (dataType === "json") {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    const _0x1a412b = _0x3dfe8b && dataType == "form" ? $.queryStr(_0x3dfe8b) : $.toStr(_0x3dfe8b),
      _0x2a7e34 = {
        ..._0x4c91dd,
        ...(_0x4c91dd?.["opts"] ? _0x4c91dd.opts : {}),
        url: _0x35bea8,
        headers: headers,
        ...(_0x16b30d === "post" && {
          body: _0x1a412b
        }),
        ...(_0x16b30d === "get" && _0x422277 && {
          params: _0x422277
        }),
        timeout: _0x53a15d
      },
      _0x4d0a0d = $.http[_0x16b30d.toLowerCase()](_0x2a7e34).then(_0x33a5f0 => resultType == "data" ? $.toObj(_0x33a5f0.body) || _0x33a5f0.body : $.toObj(_0x33a5f0) || _0x33a5f0).catch(_0x37bd55 => $.log("⛔️ 请求发起失败！原因为: " + _0x37bd55));
    return Promise.race([new Promise((_0x57fce4, _0x405df2) => setTimeout(() => _0x405df2("当前请求已超时"), _0x53a15d)), _0x4d0a0d]);
  } catch (_0x4b8862) {
    console.log("⛔️ 请求发起失败！原因为: " + _0x4b8862);
  }
}
function randomInt(_0x29b5e3, _0xb1c38a) {
  return Math.round(Math.random() * (_0xb1c38a - _0x29b5e3) + _0x29b5e3);
}
function DoubleLog(_0x49bb39) {
  if (_0x49bb39 && $.isNode()) {
    console.log("" + _0x49bb39);
    $.notifyMsg.push("" + _0x49bb39);
  } else {
    _0x49bb39 && (console.log("" + _0x49bb39), $.notifyMsg.push("" + _0x49bb39));
  }
}
function debug(_0x2ee383, _0x283964 = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x283964 + "------------\n"), $.log(typeof _0x2ee383 == "string" ? _0x2ee383 : $.toStr(_0x2ee383) || "debug error => t=" + _0x2ee383), $.log("\n-----------" + _0x283964 + "------------\n"));
}
async function SendMsgList(_0x38b1d3) {
  await Promise.allSettled(_0x38b1d3?.["map"](_0x5f2d3f => SendMsg(_0x5f2d3f.message.join("\n"), _0x5f2d3f.avatar)));
}
async function SendMsg(_0x13fd94, _0x1f02db) {
  _0x13fd94 && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0x13fd94) : $.msg($.name, $.title || "", _0x13fd94, {
    "media-url": _0x1f02db
  }) : console.log(_0x13fd94));
}
function ObjectKeys2LowerCase(_0x332fd3) {
  _0x332fd3 = Object.fromEntries(Object.entries(_0x332fd3).map(([_0x524809, _0x18cf07]) => [_0x524809.toLowerCase(), _0x18cf07]));
  return new Proxy(_0x332fd3, {
    get: function (_0x3f0a5a, _0x1fd51c, _0x552632) {
      return Reflect.get(_0x3f0a5a, _0x1fd51c.toLowerCase(), _0x552632);
    },
    set: function (_0x25719a, _0x26f3d6, _0x3395d5, _0x1f451b) {
      return Reflect.set(_0x25719a, _0x26f3d6.toLowerCase(), _0x3395d5, _0x1f451b);
    }
  });
}
async function loadCheerio() {
  let _0x3406f6 = ($.isNode() ? process.env.Cheerio_code : $.getdata("Cheerio_code")) || "";
  if (_0x3406f6 && Object.keys(_0x3406f6).length) {
    console.log("✅" + $.name + ":缓存中存在Cheerio模块,跳过下载");
    eval(_0x3406f6);
    return createCheerio();
  }
  console.log("🚀" + $.name + ":开始下载Cheerio模块");
  return new Promise(async _0x11faf4 => {
    $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Yuheng0101/X/main/Utils/cheerio.js").then(_0x21d4db => {
      $.setdata(_0x21d4db, "Cheerio_code");
      eval(_0x21d4db);
      const _0x49f692 = createCheerio();
      console.log("✅Cheerio模块加载成功,请继续");
      _0x11faf4(_0x49f692);
    });
  });
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    if (!(await loadModule())) {
      throw new Error("⛔️ 加载模块失败，请检查模块路径是否正常");
    }
    if (!(await checkEnv())) {
      throw new Error("⛔️ 未检测到ck，请添加环境变量");
    }
    if (userList.length > 0) {
      await main();
    }
  }
})().catch(_0x5b9be6 => $.notifyMsg.push(_0x5b9be6.message || _0x5b9be6)).finally(async () => {
  await SendMsgList($.notifyList);
  $.done({
    ok: 1
  });
});
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
      return new Promise((e, r) => {
        s.call(this, t, (t, s, a) => {
          t ? r(t) : e(s);
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
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
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
        }, (t, s, r) => e(r));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        r = r ? r.replace(/\n/g, "").trim() : r;
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        a = a ? 1 * a : 20;
        a = e && e.timeout ? e.timeout : a;
        const [i, o] = r.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: a
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: a
          };
        this.post(n, (t, e, r) => s(r));
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
          r = !s && this.fs.existsSync(e);
        if (!s && !r) {
          return {};
        }
        {
          const r = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(r));
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
          r = !s && this.fs.existsSync(e),
          a = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, a) : r ? this.fs.writeFileSync(e, a) : this.fs.writeFileSync(t, a);
      }
    }
    lodash_get(t, e, s = void 0) {
      const r = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let a = t;
      for (const t of r) if (a = Object(a)[t], void 0 === a) {
        return s;
      }
      return a;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, r) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[r + 1]) >> 0 == +e[r + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, r] = /^@(.*?)\.(.*?)$/.exec(t),
          a = s ? this.getval(s) : "";
        if (a) {
          try {
            const t = JSON.parse(a);
            e = t ? this.lodash_get(t, r, "") : e;
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
        const [, r, a] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(r),
          o = r ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, a, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          const i = {};
          this.lodash_set(i, a, t);
          s = this.setval(JSON.stringify(i), r);
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
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
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
          $httpClient.get(t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, r);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
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
                statusCode: r,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: r,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: r,
              response: a
            } = t;
            e(r, a, a && s.decode(a.rawBody, this.encoding));
          });
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
          $httpClient[s](t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, r);
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
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let r = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: a,
            ...i
          } = t;
          this.got[s](a, i).then(t => {
            const {
                statusCode: s,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = r.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: a
            } = t;
            e(s, a, a && r.decode(a.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let r = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in r) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[e] : ("00" + r[e]).substr(("" + r[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let r = t[s];
        null != r && "" !== r && ("object" == typeof r && (r = JSON.stringify(r)), e += `${s}=${r}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", r = "", a) {
      const i = t => {
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
                return {
                  url: t.url || t.openUrl || t["open-url"]
                };
              case "Loon":
                return {
                  openUrl: t.openUrl || t.url || t["open-url"],
                  mediaUrl: t.mediaUrl || t["media-url"]
                };
              case "Quantumult X":
                return {
                  "open-url": t["open-url"] || t.url || t.openUrl,
                  "media-url": t["media-url"] || t.mediaUrl,
                  "update-pasteboard": t["update-pasteboard"] || t.updatePasteboard
                };
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
            $notification.post(e, s, r, i(a));
            break;
          case "Quantumult X":
            $notify(e, s, r, i(a));
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        r && t.push(r);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
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