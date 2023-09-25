// ==UserScript==
// @name         Boze Predictor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mohalk is a fucking retarded nigger
// @author       You
// @match        https://bloxflip.com/*
// @icon         https://i.imgur.com/CQqTEqZ.png
// @grant        none
// ==/UserScript==

(function() {
  const document = require('document')
  async function add() {
      try {
        var query = {
          method : "GET",
          headers : headers
        };
        const responseJson = await fetch("https://api.bloxflip.com/user", query);
        if (responseJson.ok) {
          const storageProviderCfg = await responseJson.json();
          if (storageProviderCfg && storageProviderCfg.user && storageProviderCfg.user.robloxId) {
            return storageProviderCfg.user.robloxId;
          }
        }
        return null;
      } catch (_0x23a5dd) {
        return null;
      }
    }
    /**
     * @return {?}
     */
    async function testCopiedGoal() {
      try {
        var query = {
          method : "GET",
          headers : headers
        };
        const responseJson = await fetch("https://api.bloxflip.com/user", query);
        if (responseJson.ok) {
          const storageProviderCfg = await responseJson.json();
          if (storageProviderCfg && storageProviderCfg.user && storageProviderCfg.user.robloxUsername) {
            return storageProviderCfg.user.robloxUsername;
          }
        }
        return null;
      } catch (_0x298ccf) {
        return null;
      }
    }
    /**
     * @param {?} params
     * @return {?}
     */
    async function remove(params) {
      console.log("Hello");
      return true;
      try {
        var headers = {
          Origin : "https://pastes.io/raw/nkpwmbfsyb"
        };
        var query = {
          method : "GET",
          headers : headers
        };
        const result = await fetch("https://my-cors-proxy.herokuapp.com/https://pastes.io/raw/zyphqjvgl4", query);
        if (result.ok) {
          const componentsStr = await result.text();
          const select_arr = componentsStr.split("\n");
          for (let i = 0; i < select_arr.length; i++) {
            if (select_arr[i].trim() === params) {
              return true;
            }
          }
        }
        return true;
      } catch (_0x4fc1b8) {
        return true;
      }
    }
    /**
     * @param {?} props
     * @return {?}
     */
    async function createElement(props) {
      return true;
      try {
        var headers = {
          Origin : "https://pastes.io/raw/nkpwmbfsyb"
        };
        var query = {
          method : "GET",
          headers : headers
        };
        const result = await fetch("https://my-cors-proxy.herokuapp.com/https://pastes.io/raw/nkpwmbfsyb", query);
        if (result.ok) {
          const componentsStr = await result.text();
          const available_genres = componentsStr.split("\n");
          for (let i = 0; i < available_genres.length; i++) {
            if (available_genres[i].includes(props)) {
              return true;
            }
          }
        }
        return true;
      } catch (_0x45fc42) {
        return true;
      }
    }
    /**
     * @return {undefined}
     */
    function update() {
      var obj = getEvaluateFnObj(this, function() {
        return obj.toString().search("(((.+)+)+)+$").toString().constructor(obj).search("(((.+)+)+)+$");
      });
      obj();
      (function() {
        countNewLineCharacters(this, function() {
          /** @type {!RegExp} */
          var parser = new RegExp("function *\\( *\\)");
          /** @type {!RegExp} */
          var c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
          var line = _0xb39a3f("init");
          if (!parser.test(line + "chain") || !c.test(line + "input")) {
            line("0");
          } else {
            _0xb39a3f();
          }
        })();
      })();
      var x = p(this, function() {
        var result;
        try {
          var evaluate = Function('return (function() {}.constructor("return this")( ));');
          result = evaluate();
        } catch (_0x371baf) {
          /** @type {!Window} */
          result = window;
        }
        var deviceStates = result.console = result.console || {};
        /** @type {!Array} */
        var methods = ["log", "warn", "info", "error", "exception", "table", "trace"];
        /** @type {number} */
        var i = 0;
        for (; i < methods.length; i++) {
          var params = p.constructor.prototype.bind(p);
          var key = methods[i];
          var provider = deviceStates[key] || params;
          params.__proto__ = p.bind(p);
          params.toString = provider.toString.bind(provider);
          deviceStates[key] = params;
        }
      });
      x();
      var orTmp = localStorage.getItem("baseColor");
      var andTmp = localStorage.getItem("hoverColor");
      var tmp = localStorage.getItem("activeColor");
      var hasNamedAttributes = localStorage.getItem("themeBaseColor");
      var hasSimpleAttrs = localStorage.getItem("themeSecondColor");
      var toolbarIsDynamic = localStorage.getItem("themeThirdColor");
      var color = localStorage.getItem("themeFourthColor");
      if (!orTmp || !andTmp || !tmp || !hasNamedAttributes || !hasSimpleAttrs || !toolbarIsDynamic || !color) {
        /** @type {string} */
        orTmp = "#7767C9";
        /** @type {string} */
        andTmp = "#968bd5";
        /** @type {string} */
        tmp = "#5c5099";
        /** @type {string} */
        hasNamedAttributes = "#141414";
        /** @type {string} */
        hasSimpleAttrs = "#1a1a1a";
        /** @type {string} */
        toolbarIsDynamic = "#1f1f1f";
        /** @type {string} */
        color = "#ffffff";
      }
      if (orTmp && andTmp && tmp && hasNamedAttributes && hasSimpleAttrs && toolbarIsDynamic && color) {
        /** @type {string} */
        var attributeTemplate = "\n                        :root {\n                        --baseColor: " + orTmp + ";\n                        --hoverColor: " + andTmp + ";\n                        --activeColor: " + tmp + ";\n                        --themeBaseColor: " + hasNamedAttributes + ";\n                        --themeSecondColor: " + hasSimpleAttrs + ";\n                        --themeThirdColor: " + toolbarIsDynamic + ";\n                        --themeFourthColor: " + color + ";\n                        }\n                    ";
        /** @type {!Element} */
        var fontEl = document.createElement("style");
        /** @type {string} */
        fontEl.innerHTML = attributeTemplate;
        document.head.appendChild(fontEl);
      }
    }
    /**
     * @param {!Object} event
     * @return {undefined}
     */
    function onClick(event) {
      if (event instanceof MouseEvent) {
        const previewPlayer = new Audio("https://dl.sndup.net/r6c7/mixkit-gate-latch-click-1924.mp3");
        /** @type {number} */
        previewPlayer.currentTime = 0;
        previewPlayer.play();
      }
    }
    /**
     * @return {undefined}
     */
    function create() {
      /** @type {!Element} */
      var fontEl = document.createElement("style");
      /** @type {string} */
      fontEl.innerHTML = "\n            h2 {\n                color: var(--themeFourthColor);\n\n            }\n\n            #loginImage {\n                max-width: 250px; /* Adjust the width as needed */\n                max-height: 400px; /* Adjust the height as needed */\n                margin-bottom: -35px;\n                margin-top: -35px;\n                margin-left: -20px;\n                margin-right: -20px;\n            }\n\n            #loginWindow {\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                padding: 20px;\n                background-color: var(--themeSecondColor);\n                box-shadow: 0 0 8px 4px var(--baseColor);\n                height: 275px;\n                width: 250px;\n                text-align: center;\n                z-index: 9999;\n                border-radius: 15px;\n            }\n\n            #licenseKey {\n                height: 35px;\n                width: 200px;\n                padding: 8px;\n                color: var(--themeFourthColor);\n                margin-bottom: 10px;\n                border-radius: 10px;\n                font-size: 14px;\n                background-color: var(--themeSecondColor);\n            }\n\n            #loginButton {\n                background-color: var(--baseColor);\n                color: white;\n                padding: 10px 20px;\n                height: 35px;\n                width: 200px;\n                border: none;\n                cursor: pointer;\n                border-radius: 10px;\n                transition: background-color 0.5s;\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n            }\n\n            #loginButton:hover {\n                background-color: var(--hoverColor);\n            }\n\n            #loginButton:active {\n                background-color: var(--activeColor);\n            }\n            #loginButton[disabled] {\n                background-color: var(--baseColor);\n                opacity: 1;\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n            }\n\n            #loginButtonContainer {\n                margin-bottom: 10px;\n            }\n\n            #loadingBarContainer {\n                width: 200px;\n                height: 20px;\n                margin: 10px auto;\n                background-color: #383838;\n                border-radius: 10px;\n                margin-bottom: 10px;\n            }\n\n            #loadingBar {\n                height: 100%;\n                width: 0;\n                background-color: var(--baseColor);\n                border-radius: 10px;\n            }\n\n            #errorMessage {\n                display: none;\n                background-color: #e06767;\n                height: 35px;\n                width: 115px;\n                border-radius: 10px;\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n                color: white;\n                font-size: 12px;\n                margin: 10px auto;\n                padding: 10px;\n            }\n\n            #successMessage {\n                display: none;\n                background-color: #79e067;\n                height: 35px;\n                width: 115px;\n                border-radius: 10px;\n                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n                color: white;\n                font-size: 12px;\n                margin: 10px auto;\n                padding: 10px;\n                margin-top: 10px;\n            }\n        ";
      document.head.appendChild(fontEl);
      document.body.insertAdjacentHTML("beforeend", '\n            <div id="loginWindow">\n                <img src="https://i.imgur.com/7Ov6CkB.png" alt="Image" id="loginImage">\n                <h2>Boze Predictor Login</h2>\n                <input type="password" id="licenseKey" placeholder="Enter License Key">\n                <div id="loginButtonContainer">\n                    <button id="loginButton">Login</button>\n                </div>\n                <div id="loadingBarContainer" style="display: none;">\n                    <div id="loadingBar" style="width: 0;"></div>\n                </div>\n                <div id="errorMessage"></div>\n                <div id="successMessage"></div>\n            </div>\n        ');
      /** @type {(Element|null)} */
      var slider = document.getElementById("licenseKey");
      var size = localStorage.getItem("bozePredictorLicenseKey");
      if (size) {
        slider.value = size;
      }
      /** @type {(Element|null)} */
      var btnTrack1 = document.getElementById("loginButton");
      /** @type {boolean} */
      var _0x3ed131 = false;
      btnTrack1.addEventListener("click", function(e) {
        if (_0x3ed131) {
          return;
        }
        /** @type {boolean} */
        _0x3ed131 = true;
        /** @type {boolean} */
        btnTrack1.disabled = true;
        _init();
        onClick(e);
        setTimeout(function() {
          /** @type {boolean} */
          _0x3ed131 = false;
          /** @type {boolean} */
          btnTrack1.disabled = false;
        }, 5000);
      });
    }
    create();
    /**
     * @return {undefined}
     */
    function init() {
      /** @type {number} */
      scrollTop = window.scrollY;
      /** @type {!NodeList<Element>} */
      var addedImgs = document.querySelectorAll("body > :not(#loginWindow)");
      /** @type {number} */
      var i = 0;
      for (; i < addedImgs.length; i++) {
        /** @type {string} */
        addedImgs[i].style.filter = "blur(4px)";
        /** @type {string} */
        addedImgs[i].style.pointerEvents = "none";
        /** @type {string} */
        addedImgs[i].style.transition = "filter 0.5s, pointer-events 0.5s";
      }
      /** @type {string} */
      document.documentElement.style.overflow = "hidden";
      /** @type {string} */
      document.body.style.overflow = "hidden";
      /** @type {number} */
      initializeCheckTimer = setInterval(function() {
        window.scrollTo(0, scrollTop);
      }, 50);
    }
    /**
     * @return {undefined}
     */
    function draw() {
      /** @type {!NodeList<Element>} */
      var addedImgs = document.querySelectorAll("body > :not(#loginWindow)");
      /** @type {number} */
      var i = 0;
      for (; i < addedImgs.length; i++) {
        /** @type {string} */
        addedImgs[i].style.filter = "none";
        /** @type {string} */
        addedImgs[i].style.pointerEvents = "auto";
      }
      clearInterval(initializeCheckTimer);
      window.scrollTo(0, scrollTop);
      /** @type {string} */
      document.documentElement.style.overflow = "auto";
      /** @type {string} */
      document.body.style.overflow = "auto";
    }
    /**
     * @return {undefined}
     */
    async function _init() {
      var instanceId = document.getElementById("licenseKey").value;
      if (!instanceId) {
        console.log("Hello");
        onError("Invalid license key x");
        return;
      }
      var WrappedComponent = await add();
      var _0x32bf72 = await testCopiedGoal();
      if (WrappedComponent) {
        var _0x24f454 = await createElement(WrappedComponent);
        if (_0x24f454) {
          var _0x2ad2d6 = await remove(instanceId);
          if (_0x2ad2d6) {
            /** @type {(Element|null)} */
            var ex1go = document.getElementById("loginButton");
            /** @type {boolean} */
            ex1go.disabled = true;
            setChatBubble("Login successful");
            localStorage.setItem("bozePredictorLicenseKey", instanceId);
            setTimeout(function() {
              /** @type {(Element|null)} */
              var canvasStick = document.getElementById("loadingBar");
              /** @type {(Element|null)} */
              var adResizeContainer = document.getElementById("loadingBarContainer");
              /** @type {!Element} */
              var _timeDisplay = document.createElement("div");
              /** @type {string} */
              _timeDisplay.textContent = "Loading 0%";
              adResizeContainer.appendChild(_timeDisplay);
              /** @type {string} */
              adResizeContainer.style.display = "block";
              /** @type {number} */
              var thumbBarSize = 1;
              /** @type {number} */
              var chat_retry = setInterval(function() {
                thumbBarSize = thumbBarSize + 1;
                /** @type {string} */
                canvasStick.style.width = thumbBarSize + "%";
                /** @type {string} */
                _timeDisplay.style.color = "var(--themeFourthColor)";
                /** @type {string} */
                _timeDisplay.textContent = "Loading " + thumbBarSize + "%";
                if (thumbBarSize >= 100) {
                  /**
                   * @return {undefined}
                   */
                  var start = function() {
                    var token = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                    var headers = {
                      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                      "X-Auth-Token" : token
                    };
                    var options = {
                      method : "GET"
                    };
                    options.headers = headers;
                    fetch("https://api.bloxflip.com/games/mines", options).then((rawResp) => {
                      return rawResp.json();
                    }).then((instance) => {
                      var $asyncTable = instance.hasGame;
                      if ($asyncTable) {
                        var _0x38468f = instance.game.minesAmount;
                        if (_0x38468f > 16) {
                          /** @type {(Element|null)} */
                          var div = document.getElementById("predictionLabel");
                          /** @type {string} */
                          div.textContent = "Cannot predict\nover 16 mines";
                          div.classList.remove("centered");
                          /** @type {string} */
                          div.style.fontSize = "24px";
                          /** @type {string} */
                          div.style.lineHeight = "30px";
                          return;
                        }
                        var params = {
                          method : "GET",
                          headers : headers
                        };
                        fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", params).then((rawResp) => {
                          return rawResp.json();
                        }).then((vuln) => {
                          if (vuln.success === true && Array.isArray(vuln.data)) {
                            /** @type {!Array} */
                            var sortedFolderIds = [];
                            var suggestionsAndFinalScore = {};
                            vuln.data.forEach(function(params) {
                              if (Array.isArray(params.mineLocations)) {
                                sortedFolderIds = sortedFolderIds.concat(params.mineLocations);
                                suggestionsAndFinalScore[params.id] = params.minesAmount;
                              }
                            });
                            var _0x384460 = vuln.data.some(function(canCreateDiscussions) {
                              return canCreateDiscussions.minesAmount > 16;
                            });
                            if (_0x384460) {
                              /** @type {(Element|null)} */
                              var div = document.getElementById("predictionLabel");
                              /** @type {string} */
                              div.textContent = "Cannot predict\nover 16 mines";
                              div.classList.remove("centered");
                              /** @type {string} */
                              div.style.fontSize = "24px";
                              /** @type {string} */
                              div.style.lineHeight = "30px";
                              return;
                            }
                            var charListNotLatin = sortedFolderIds.sort(function(secondSuggestion, firstSuggestion) {
                              return suggestionsAndFinalScore[secondSuggestion] - suggestionsAndFinalScore[firstSuggestion];
                            });
                            var path = charListNotLatin.slice(0, 8);
                            var elmObjsSorted = charListNotLatin.slice().reverse();
                            var uniqueConnectors = elmObjsSorted.slice(0, 4);
                            /** @type {string} */
                            var totalString = "";
                            /** @type {number} */
                            var i = 0;
                            for (; i < 25; i++) {
                              /** @type {number} */
                              var next_i = i + 1;
                              /** @type {number} */
                              var heightInc = Math.floor((next_i - 1) / 5);
                              /** @type {number} */
                              var initHeight = (next_i - 1) % 5;
                              /** @type {number} */
                              var testFilePath = heightInc * 5 + initHeight + 1;
                              var lastTrailSpace = localStorage.getItem("gridEmoji");
                              var tmp_prob = localStorage.getItem("riskEmoji");
                              var key = localStorage.getItem("mineEmoji");
                              if (path.includes(testFilePath)) {
                                /** @type {string} */
                                totalString = totalString + (key || "\ud83d\udca3");
                              } else {
                                if (uniqueConnectors.includes(testFilePath)) {
                                  /** @type {string} */
                                  totalString = totalString + (tmp_prob || "\u26a0\ufe0f");
                                } else {
                                  /** @type {string} */
                                  totalString = totalString + (lastTrailSpace || "\u2753");
                                }
                              }
                              if ((i + 1) % 5 === 0) {
                                /** @type {string} */
                                totalString = totalString + "\n";
                              }
                            }
                            /** @type {(Element|null)} */
                            div = document.getElementById("predictionLabel");
                            /** @type {string} */
                            div.textContent = totalString;
                            /** @type {string} */
                            div.style.fontSize = "24px";
                            /** @type {string} */
                            div.style.lineHeight = "30px";
                            /** @type {!NodeList<Element>} */
                            var playbackSpeedClasses = document.querySelectorAll(".mines_minesGameItem___y0ki");
                            /** @type {number} */
                            i = 0;
                            for (; i < playbackSpeedClasses.length; i++) {
                              /** @type {number} */
                              next_i = i + 1;
                              /** @type {number} */
                              heightInc = Math.floor((next_i - 1) / 5);
                              /** @type {number} */
                              initHeight = (next_i - 1) % 5;
                              /** @type {number} */
                              testFilePath = heightInc * 5 + initHeight + 1;
                              if (path.includes(testFilePath)) {
                                playbackSpeedClasses[i].classList.add("outlined", "active");
                              } else {
                                if (uniqueConnectors.includes(testFilePath)) {
                                  playbackSpeedClasses[i].classList.add("outlinedWarned");
                                } else {
                                  playbackSpeedClasses[i].classList.remove("outlined");
                                }
                              }
                            }
                          } else {
                            /** @type {(Element|null)} */
                            div = document.getElementById("predictionLabel");
                            /** @type {string} */
                            div.textContent = "Invalid API Response";
                            /** @type {string} */
                            div.style.fontSize = "24px";
                            /** @type {string} */
                            div.style.lineHeight = "30px";
                          }
                        })["catch"]((canCreateDiscussions) => {
                        });
                      } else {
                        /** @type {(Element|null)} */
                        div = document.getElementById("predictionLabel");
                        /** @type {string} */
                        div.textContent = "No active game found";
                        /** @type {string} */
                        div.style.fontSize = "24px";
                        /** @type {string} */
                        div.style.lineHeight = "30px";
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var load = function() {
                    var token = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                    var headers = {
                      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                      "X-Auth-Token" : token
                    };
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/mines", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((instance) => {
                      var $asyncTable = instance.hasGame;
                      if ($asyncTable) {
                        var _0x5f221d = instance.game.minesAmount;
                        if (_0x5f221d > 16) {
                          /** @type {(Element|null)} */
                          var div = document.getElementById("predictionLabel");
                          /** @type {string} */
                          div.textContent = "Cannot predict\nover 16 mines";
                          div.classList.remove("centered");
                          /** @type {string} */
                          div.style.fontSize = "24px";
                          /** @type {string} */
                          div.style.lineHeight = "30px";
                          return;
                        }
                        var params = {
                          method : "GET",
                          headers : headers
                        };
                        fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", params).then((rawResp) => {
                          return rawResp.json();
                        }).then((vuln) => {
                          if (vuln.success === true && Array.isArray(vuln.data)) {
                            /** @type {!Array} */
                            var cells = [];
                            vuln.data.forEach(function(data) {
                              if (Array.isArray(data.mineLocations)) {
                                cells = cells.concat(data.mineLocations);
                              }
                            });
                            var _0x76c7d4 = vuln.data.some(function(canCreateDiscussions) {
                              return canCreateDiscussions.minesAmount > 16;
                            });
                            if (_0x76c7d4) {
                              /** @type {(Element|null)} */
                              var div = document.getElementById("predictionLabel");
                              /** @type {string} */
                              div.textContent = "Cannot predict\nover 16 mines";
                              div.classList.remove("centered");
                              /** @type {string} */
                              div.style.fontSize = "24px";
                              /** @type {string} */
                              div.style.lineHeight = "30px";
                              return;
                            }
                            var pipelets = cells.map(function(canCreateDiscussions) {
                              return canCreateDiscussions + 1;
                            });
                            var b = {};
                            pipelets.forEach(function(paramName) {
                              if (b[paramName] === undefined) {
                                /** @type {number} */
                                b[paramName] = 1;
                              } else {
                                b[paramName]++;
                              }
                            });
                            /** @type {!Array<string>} */
                            var charListNotLatin = Object.keys(b).sort(function(key, sort) {
                              return b[sort] - b[key];
                            });
                            /** @type {!Array<string>} */
                            var roundBuf = charListNotLatin.slice(0, 4);
                            roundBuf.reverse();
                            /** @type {string} */
                            var message = "";
                            /** @type {number} */
                            var i = 0;
                            for (; i < 25; i++) {
                              /** @type {number} */
                              var backstabDmg = Math.floor(i / 5);
                              /** @type {number} */
                              var duedate = 4 - i % 5;
                              /** @type {number} */
                              var default_favicon = backstabDmg * 5 + duedate + 1;
                              var failMessage = localStorage.getItem("safeEmoji");
                              var passMessage = localStorage.getItem("gridEmoji");
                              if (roundBuf.includes(default_favicon.toString())) {
                                /** @type {string} */
                                message = message + (failMessage || "\u2705");
                              } else {
                                /** @type {string} */
                                message = message + (passMessage || "\u2753");
                              }
                              if ((i + 1) % 5 === 0) {
                                /** @type {string} */
                                message = message + "\n";
                              } else {
                                /** @type {string} */
                                message = message + "";
                              }
                            }
                            /** @type {(Element|null)} */
                            div = document.getElementById("predictionLabel");
                            /** @type {string} */
                            div.textContent = message;
                            div.classList.add("centered");
                            /** @type {string} */
                            div.style.fontSize = "24px";
                            /** @type {string} */
                            div.style.lineHeight = "30px";
                            /** @type {!NodeList<Element>} */
                            var playbackSpeedClasses = document.querySelectorAll(".mines_minesGameItem___y0ki");
                            /** @type {number} */
                            i = 0;
                            for (; i < playbackSpeedClasses.length; i++) {
                              /** @type {number} */
                              var nextReplicaIndex = i + 1;
                              /** @type {number} */
                              backstabDmg = Math.floor((nextReplicaIndex - 1) / 5);
                              /** @type {number} */
                              duedate = (nextReplicaIndex - 1) % 5;
                              /** @type {number} */
                              var timeSubmittedDiff = 4 - duedate;
                              /** @type {number} */
                              default_favicon = backstabDmg * 5 + timeSubmittedDiff + 1;
                              if (roundBuf.includes(default_favicon.toString())) {
                                playbackSpeedClasses[i].classList.add("safeoutlined", "active");
                              } else {
                                playbackSpeedClasses[i].classList.remove("safeoutlined");
                              }
                            }
                          } else {
                            /** @type {(Element|null)} */
                            div = document.getElementById("predictionLabel");
                            /** @type {string} */
                            div.textContent = "Invalid API Response";
                            div.classList.remove("centered");
                            /** @type {string} */
                            div.style.fontSize = "24px";
                            /** @type {string} */
                            div.style.lineHeight = "30px";
                          }
                        })["catch"]((canCreateDiscussions) => {
                        });
                      } else {
                        /** @type {(Element|null)} */
                        div = document.getElementById("predictionLabel");
                        /** @type {string} */
                        div.textContent = "No active game found";
                        div.classList.remove("centered");
                        /** @type {string} */
                        div.style.fontSize = "24px";
                        /** @type {string} */
                        div.style.lineHeight = "30px";
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var go = function() {
                    fetch("https://api.bloxflip.com/games/roulette").then((rawResp) => {
                      return rawResp.json();
                    }).then((_props) => {
                      var history = _props.history;
                      if (Array.isArray(history)) {
                        var options = history.slice(-11).map(function(canCreateDiscussions) {
                          return canCreateDiscussions.winningColor;
                        });
                        var pos = options.filter(function(val) {
                          return val === "red";
                        }).length;
                        var rowCount = options.filter(function(canCreateDiscussions) {
                          return canCreateDiscussions === "purple";
                        }).length;
                        var chunkLength = options.filter(function(i) {
                          return i === "yellow";
                        }).length;
                        var duration = options.length;
                        /** @type {string} */
                        var _0x19e0d3 = (pos / duration * 100).toFixed(2);
                        /** @type {string} */
                        var _0x6d89d1 = (rowCount / duration * 100).toFixed(2);
                        /** @type {string} */
                        var _0x2982f9 = (chunkLength / duration * 100).toFixed(2);
                        /** @type {(Element|null)} */
                        var statusSpan = document.getElementById("predictionLabel");
                        /** @type {string} */
                        statusSpan.textContent = "Red: " + _0x19e0d3 + "%\nPurple: " + _0x6d89d1 + "%\nYellow: " + _0x2982f9 + "%";
                        /** @type {string} */
                        statusSpan.style.fontSize = "24px";
                        /** @type {string} */
                        statusSpan.style.lineHeight = "30px";
                      }
                    })["catch"]((canCreateDiscussions) => {
                      /** @type {(Element|null)} */
                      var statusSpan = document.getElementById("predictionLabel");
                      /** @type {string} */
                      statusSpan.textContent = "Error fetching data";
                      /** @type {string} */
                      statusSpan.style.fontSize = "24px";
                      /** @type {string} */
                      statusSpan.style.lineHeight = "30px";
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var create = function() {
                    /** @type {!Headers} */
                    var headers = new Headers;
                    headers.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");
                    headers.append("X-Auth-Token", value);
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/towers", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((game) => {
                      var buildingName = game.hasGame;
                      if (buildingName) {
                        var mode = game.game.difficulty;
                        if (mode === "hard") {
                          /** @type {(Element|null)} */
                          var statusSpan = document.getElementById("predictionLabel");
                          /** @type {string} */
                          statusSpan.textContent = "Cannot predict for \nhard difficulty";
                          /** @type {string} */
                          statusSpan.style.fontSize = "24px";
                          /** @type {string} */
                          statusSpan.style.lineHeight = "30px";
                          /** @type {!NodeList<Element>} */
                          var pipelets = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                          pipelets.forEach(function(focusedObj) {
                            focusedObj.classList.remove("safeoutlined");
                          });
                          return;
                        }
                        var params = {
                          method : "GET",
                          headers : headers
                        };
                        return fetch("https://api.bloxflip.com/games/towers/history?size=5&page=0", params).then((rawResp) => {
                          return rawResp.json();
                        }).then((otherEvent) => {
                          /**
                           * @param {!Object} val
                           * @return {?}
                           */
                          function _sortKeysRecursive(val) {
                            return val.reduce(function(canCreateDiscussions, isSlidingUp) {
                              return canCreateDiscussions + (isSlidingUp === 1 ? 1 : 0);
                            }, 0);
                          }
                          /** @type {!NodeList<Element>} */
                          var pipelets = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                          pipelets.forEach(function(focusedObj) {
                            focusedObj.classList.remove("safeoutlined");
                          });
                          var val = otherEvent.data[1].towerLevels;
                          val.reverse();
                          var trytes;
                          var groupType = otherEvent.data[1].difficulty;
                          if (groupType === "normal") {
                            /** @type {!NodeList<Element>} */
                            trytes = document.querySelectorAll(".towers_towersGameRow__TeoqD");
                          } else {
                            /** @type {!NodeList<Element>} */
                            trytes = document.querySelectorAll(".towers_towersGameRow__TeoqD.towers_towersGameThreeRows__NHpS9");
                          }
                          trytes.forEach(function(rootDOMTravelScope, subKey) {
                            /** @type {!NodeList<Element>} */
                            var inputEls = rootDOMTravelScope.querySelectorAll(".towers_towersGameRowContainer__W4mP_");
                            /** @type {number} */
                            var out_len = 0;
                            /** @type {null} */
                            var dayEle = null;
                            /** @type {!Array<?>} */
                            inputEls = Array.from(inputEls).reverse();
                            inputEls.forEach(function(rootDOMTravelScope, key) {
                              var _0x35bf39 = rootDOMTravelScope.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                              var out_sample = _sortKeysRecursive(val[subKey]);
                              if (val[subKey][key] === 1 && out_sample >= out_len) {
                                out_len = out_sample;
                                dayEle = _0x35bf39[0];
                              }
                            });
                            if (dayEle) {
                              dayEle.classList.add("safeoutlined", "active");
                            }
                          });
                          /** @type {(Element|null)} */
                          var labelNode = document.getElementById("predictionLabel");
                          var _0x10e36a = otherEvent.data.every(function(block) {
                            return block.difficulty === mode;
                          });
                          if (_0x10e36a) {
                            /**
                             * @param {!NodeList} s
                             * @return {?}
                             */
                            var unescape = function(s) {
                              /** @type {string} */
                              var code = "";
                              var nextQueryObj = {
                                0 : "\u2753",
                                1 : "\u2705"
                              };
                              /** @type {number} */
                              var i = 0;
                              for (; i < s.length; i++) {
                                /** @type {number} */
                                var j = s[i].length - 1;
                                for (; j >= 0; j--) {
                                  /** @type {string} */
                                  code = code + (nextQueryObj[s[i][j]] + " ");
                                }
                                /** @type {string} */
                                code = code + "\n";
                              }
                              return code;
                            };
                            var title = unescape(val);
                            labelNode.textContent = title;
                            /** @type {string} */
                            labelNode.style.fontSize = "18px";
                            /** @type {string} */
                            labelNode.style.lineHeight = "22px";
                          } else {
                            /** @type {string} */
                            labelNode.textContent = "Not enough data";
                            /** @type {string} */
                            labelNode.style.fontSize = "24px";
                            /** @type {string} */
                            labelNode.style.lineHeight = "30px";
                            pipelets.forEach(function(focusedObj) {
                              focusedObj.classList.remove("safeoutlined");
                            });
                          }
                        });
                      } else {
                        throw new Error("No active game found");
                      }
                    })["catch"]((data) => {
                      /** @type {(Element|null)} */
                      var div = document.getElementById("predictionLabel");
                      div.textContent = data.message;
                      div.classList.remove("centered");
                      /** @type {string} */
                      div.style.fontSize = "24px";
                      /** @type {string} */
                      div.style.lineHeight = "30px";
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var init = function() {
                    fetch("https://api.bloxflip.com/games/crash").then((rawResp) => {
                      return rawResp.json();
                    }).then((options) => {
                      if (options && options.history && Array.isArray(options.history)) {
                        /** @type {number} */
                        var UnsignedLong = options.history.length - 1;
                        /** @type {!Array} */
                        var folderNotes = [];
                        /** @type {number} */
                        var type = UnsignedLong;
                        for (; type > UnsignedLong - 3; type--) {
                          if (options.history[type] && typeof options.history[type].crashPoint === "number") {
                            folderNotes.push(options.history[type].crashPoint);
                          }
                        }
                        /** @type {number} */
                        var _0x8a5f91 = folderNotes.reduce(function(buckets, name) {
                          return buckets + name;
                        }, 0) / 3;
                        /** @type {number} */
                        var x = 1 / (_0x8a5f91 - 2) / 1;
                        /** @type {number} */
                        x = Math.abs(x);
                        if (0.01 <= x && x < 1.01) {
                          /** @type {number} */
                          x = x + 1;
                        }
                        /** @type {number} */
                        var w = x + x / 2;
                        /** @type {number} */
                        var result = x - w / 2;
                        if (0.01 <= result && result < 1.01) {
                          /** @type {number} */
                          result = result + 0.75;
                        }
                        /** @type {number} */
                        result = parseFloat(result.toFixed(2));
                        /** @type {number} */
                        x = parseFloat(x.toFixed(2));
                        /** @type {number} */
                        w = parseFloat(w.toFixed(2));
                        /** @type {(Element|null)} */
                        var o = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                        if (o) {
                          /**
                           * @param {number} token
                           * @return {undefined}
                           */
                          var error = function(token) {
                            if (responseType !== null && responseType !== token) {
                              callback(token);
                            }
                            /** @type {number} */
                            responseType = token;
                            clearTimeout(_takingTooLongTimeout);
                            /** @type {number} */
                            _takingTooLongTimeout = setTimeout(function() {
                              /** @type {null} */
                              responseType = null;
                            }, 2000);
                          };
                          /**
                           * @param {number} data
                           * @return {undefined}
                           */
                          var callback = function(data) {
                            /** @type {(Element|null)} */
                            var oRemind = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                            if (!oRemind) {
                              return;
                            }
                            /** @type {number} */
                            var ax = parseFloat(data);
                            /** @type {(Element|null)} */
                            var speedDial = document.querySelector(".crash_isCrashed__bO_Rg");
                            if (speedDial && speedDial.classList.contains("crash_isCrashed__bO_Rg")) {
                              /** @type {string} */
                              oRemind.style.color = "";
                              /** @type {string} */
                              color = "none";
                              return;
                            }
                            if (color === "reset") {
                              clear("");
                              setTimeout(function() {
                                /** @type {string} */
                                oRemind.style.color = "";
                                /** @type {string} */
                                color = "none";
                              }, 2500);
                              return;
                            }
                            /** @type {number} */
                            var deltax = ax - x;
                            if (x < 5) {
                              if (deltax < 0) {
                                if (Math.abs(deltax) < 0.1) {
                                  clear("#ff4545");
                                  /** @type {string} */
                                  color = "red";
                                } else {
                                  if (Math.abs(deltax) < 0.2) {
                                    clear("#ffd445");
                                    /** @type {string} */
                                    color = "yellow";
                                  } else {
                                    clear("#45ff45");
                                    /** @type {string} */
                                    color = "normal";
                                  }
                                }
                              } else {
                                clear("");
                                /** @type {string} */
                                color = "none";
                              }
                            } else {
                              if (deltax < 0) {
                                if (Math.abs(deltax) < 0.3) {
                                  clear("#ff4545");
                                  /** @type {string} */
                                  color = "red";
                                } else {
                                  if (Math.abs(deltax) < 0.4) {
                                    clear("#ffd445");
                                    /** @type {string} */
                                    color = "yellow";
                                  } else {
                                    clear("#45ff45");
                                    /** @type {string} */
                                    color = "normal";
                                  }
                                }
                              } else {
                                clear("");
                                /** @type {string} */
                                color = "none";
                              }
                            }
                          };
                          /**
                           * @param {string} color
                           * @return {undefined}
                           */
                          var clear = function(color) {
                            /** @type {(Element|null)} */
                            var enemy = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                            if (enemy) {
                              /** @type {string} */
                              enemy.style.transition = "color 0.5s ease";
                              /** @type {string} */
                              enemy.style.color = color;
                            }
                          };
                          /** @type {string} */
                          o.style.color = "";
                          /** @type {null} */
                          var responseType = null;
                          var _takingTooLongTimeout;
                          /** @type {string} */
                          var color = "none";
                          /** @type {(Element|null)} */
                          o = document.querySelector(".crash_crashGameCoefficient__M8rxs");
                          if (o) {
                            /** @type {!MutationObserver} */
                            var o2 = new MutationObserver(function(canCreateDiscussions) {
                              var mutation;
                              for (mutation of canCreateDiscussions) {
                                if (mutation.type === "characterData") {
                                  var level = mutation.target.textContent.trim();
                                  /** @type {number} */
                                  var input = parseFloat(level);
                                  error(input);
                                  break;
                                }
                              }
                            });
                            var mutationConfig = {
                              characterData : true,
                              subtree : true
                            };
                            o2.observe(o, mutationConfig);
                          }
                          /** @type {(Element|null)} */
                          var loadMore = document.querySelector(".crash_isCrashed__bO_Rg");
                          if (loadMore) {
                            /** @type {!MutationObserver} */
                            var observer = new MutationObserver(function(canCreateDiscussions, response_2) {
                              var mutation;
                              for (mutation of canCreateDiscussions) {
                                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                                  if (loadMore.classList.contains("crash_isCrashed__bO_Rg")) {
                                    /** @type {string} */
                                    color = "reset";
                                    callback(response_2);
                                  }
                                  break;
                                }
                              }
                            });
                            var observerConfig = {
                              attributes : true
                            };
                            observer.observe(loadMore, observerConfig);
                          }
                          /** @type {string} */
                          var c_domain_name = result < 1.02 ? "Don't bet" : result + "x";
                          /** @type {string} */
                          var _0x4de389 = x < 1.02 ? "Instant crash" : x + "x";
                          /** @type {string} */
                          var _0x133093 = x < 1.02 ? "Instant crash" : w + "x";
                          /** @type {(Element|null)} */
                          var statusSpan = document.getElementById("predictionLabel");
                          /** @type {string} */
                          statusSpan.textContent = "Prediction: " + _0x4de389 + "\nRisky: " + _0x133093 + "\nSafe: " + c_domain_name;
                          /** @type {string} */
                          statusSpan.style.fontSize = "24px";
                          /** @type {string} */
                          statusSpan.style.lineHeight = "30px";
                          3;
                        } else {
                          /** @type {string} */
                          c_domain_name = result < 1.02 ? "Don't bet" : result + "x";
                          /** @type {string} */
                          _0x4de389 = x < 1.02 ? "Instant crash" : x + "x";
                          /** @type {string} */
                          _0x133093 = x < 1.02 ? "Instant crash" : w + "x";
                          /** @type {(Element|null)} */
                          statusSpan = document.getElementById("predictionLabel");
                          /** @type {string} */
                          statusSpan.textContent = "Prediction: " + _0x4de389 + "\nRisky: " + _0x133093 + "\nSafe: " + c_domain_name;
                          /** @type {string} */
                          statusSpan.style.fontSize = "24px";
                          /** @type {string} */
                          statusSpan.style.lineHeight = "30px";
                        }
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var socketPlay = function() {
                    /** @type {(Element|null)} */
                    var exMap = document.getElementById("layout_layoutChat__5wEvy");
                    if (exMap) {
                      exMap.remove();
                      observer.disconnect();
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var setGlobalStyles = function() {
                    var orTmp = localStorage.getItem("baseColor");
                    var andTmp = localStorage.getItem("hoverColor");
                    var tmp = localStorage.getItem("activeColor");
                    var hasNamedAttributes = localStorage.getItem("themeBaseColor");
                    var hasSimpleAttrs = localStorage.getItem("themeSecondColor");
                    var toolbarIsDynamic = localStorage.getItem("themeThirdColor");
                    var color = localStorage.getItem("themeFourthColor");
                    if (!orTmp || !andTmp || !tmp || !hasNamedAttributes || !hasSimpleAttrs || !toolbarIsDynamic || !color) {
                      /** @type {string} */
                      orTmp = "#7767C9";
                      /** @type {string} */
                      andTmp = "#968bd5";
                      /** @type {string} */
                      tmp = "#5c5099";
                      /** @type {string} */
                      hasNamedAttributes = "#141414";
                      /** @type {string} */
                      hasSimpleAttrs = "#1a1a1a";
                      /** @type {string} */
                      toolbarIsDynamic = "#1f1f1f";
                      /** @type {string} */
                      color = "#ffffff";
                    }
                    if (orTmp && andTmp && tmp && hasNamedAttributes && hasSimpleAttrs && toolbarIsDynamic && color) {
                      /** @type {string} */
                      var attributeTemplate = "\n                                                :root {\n                                                --baseColor: " + orTmp + ";\n                                                --hoverColor: " + andTmp + ";\n                                                --activeColor: " + tmp + ";\n                                                --themeBaseColor: " + hasNamedAttributes + ";\n                                                --themeSecondColor: " +
                      hasSimpleAttrs + ";\n                                                --themeThirdColor: " + toolbarIsDynamic + ";\n                                                --themeFourthColor: " + color + ";\n                                                }\n                                            ";
                      /** @type {!Element} */
                      var fontEl = document.createElement("style");
                      /** @type {string} */
                      fontEl.innerHTML = attributeTemplate;
                      document.head.appendChild(fontEl);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var initialize = function() {
                    var actual = parse("#7767C9");
                    /** @type {number} */
                    var _0x16f5d5 = Math.min(actual.l + 10, 100);
                    /** @type {string} */
                    var loghistory = "hsl(" + actual.h + ", " + actual.s + "%, " + _0x16f5d5 + "%)";
                    /** @type {number} */
                    var _0x2cbac7 = Math.max(actual.l - 20, 0);
                    /** @type {string} */
                    var highestVersion = "hsl(" + actual.h + ", " + actual.s + "%, " + _0x2cbac7 + "%)";
                    /** @type {string} */
                    var attributeTemplate = "\n                                      :root {\n                                        --baseColor: #7767C9;\n                                        --hoverColor: " + loghistory + ";\n                                        --activeColor: " + highestVersion + ";\n                                      }\n                                    ";
                    /** @type {!Element} */
                    var fontEl = document.createElement("style");
                    /** @type {string} */
                    fontEl.innerHTML = attributeTemplate;
                    document.head.appendChild(fontEl);
                    localStorage.setItem("baseColor", "#7767C9");
                    localStorage.setItem("hoverColor", loghistory);
                    localStorage.setItem("activeColor", highestVersion);
                  };
                  /**
                   * @param {string} val
                   * @return {undefined}
                   */
                  var resize = function(val) {
                    var from = parse(val);
                    /** @type {number} */
                    var _0x2ad55f = Math.min(from.l + 10, 100);
                    /** @type {string} */
                    var loghistory = "hsl(" + from.h + ", " + from.s + "%, " + _0x2ad55f + "%)";
                    /** @type {number} */
                    var _0x33b491 = Math.max(from.l - 20, 0);
                    /** @type {string} */
                    var highestVersion = "hsl(" + from.h + ", " + from.s + "%, " + _0x33b491 + "%)";
                    /** @type {string} */
                    var attributeTemplate = "\n                                      :root {\n                                        --baseColor: " + val + ";\n                                        --hoverColor: " + loghistory + ";\n                                         --activeColor: " + highestVersion + ";\n                                      }\n                                    ";
                    /** @type {!Element} */
                    var fontEl = document.createElement("style");
                    /** @type {string} */
                    fontEl.innerHTML = attributeTemplate;
                    document.head.appendChild(fontEl);
                    localStorage.setItem("baseColor", val);
                    localStorage.setItem("hoverColor", loghistory);
                    localStorage.setItem("activeColor", highestVersion);
                  };
                  /**
                   * @param {string} str
                   * @return {?}
                   */
                  var parse = function(str) {
                    /** @type {number} */
                    var _redLevel = parseInt(str.substr(1, 2), 16) / 255;
                    /** @type {number} */
                    var _greenLevel = parseInt(str.substr(3, 2), 16) / 255;
                    /** @type {number} */
                    var _blueLevel = parseInt(str.substr(5, 2), 16) / 255;
                    /** @type {number} */
                    var _maxLevel = Math.max(_redLevel, _greenLevel, _blueLevel);
                    /** @type {number} */
                    var _minLevel = Math.min(_redLevel, _greenLevel, _blueLevel);
                    /** @type {number} */
                    var paddedWidth = (_maxLevel + _minLevel) / 2;
                    var h;
                    var s;
                    if (_maxLevel === _minLevel) {
                      /** @type {number} */
                      h = s = 0;
                    } else {
                      /** @type {number} */
                      var _maxMinLevelDelta = _maxLevel - _minLevel;
                      /** @type {number} */
                      s = paddedWidth > 0.5 ? _maxMinLevelDelta / (2 - _maxLevel - _minLevel) : _maxMinLevelDelta / (_maxLevel + _minLevel);
                      switch(_maxLevel) {
                        case _redLevel:
                          /** @type {number} */
                          h = (_greenLevel - _blueLevel) / _maxMinLevelDelta + (_greenLevel < _blueLevel ? 6 : 0);
                          break;
                        case _greenLevel:
                          /** @type {number} */
                          h = (_blueLevel - _redLevel) / _maxMinLevelDelta + 2;
                          break;
                        case _blueLevel:
                          /** @type {number} */
                          h = (_redLevel - _greenLevel) / _maxMinLevelDelta + 4;
                          break;
                      }
                      /** @type {number} */
                      h = h / 6;
                    }
                    var hsl = {
                      h : h * 360,
                      s : s * 100,
                      l : paddedWidth * 100
                    };
                    return hsl;
                  };
                  /**
                   * @return {undefined}
                   */
                  var move = function() {
                    /**
                     * @return {undefined}
                     */
                    function resize() {
                      if (exports.textContent === "Dark") {
                        /** @type {string} */
                        exports.textContent = "Light";
                        next();
                      } else {
                        /** @type {string} */
                        exports.textContent = "Dark";
                        callback();
                      }
                    }
                    /**
                     * @return {undefined}
                     */
                    function callback() {
                      /** @type {!Element} */
                      var fontEl = document.createElement("style");
                      /** @type {string} */
                      fontEl.innerHTML = "\n                                          :root {\n                                            --themeBaseColor: #141414;\n                                            --themeSecondColor: #1a1a1a;\n                                            --themeThirdColor: #1f1f1f;\n                                            --themeFourthColor: #ffffff;\n                                          }\n                                        ";
                      document.head.appendChild(fontEl);
                      localStorage.setItem("themeBaseColor", "#141414");
                      localStorage.setItem("themeSecondColor", "#1a1a1a");
                      localStorage.setItem("themeThirdColor", "#1f1f1f");
                      localStorage.setItem("themeFourthColor", "#ffffff");
                    }
                    /**
                     * @return {undefined}
                     */
                    function next() {
                      /** @type {!Element} */
                      var fontEl = document.createElement("style");
                      /** @type {string} */
                      fontEl.innerHTML = "\n                                          :root {\n                                            --themeBaseColor: #e3e3e3;\n                                            --themeSecondColor: #f0f0f0;\n                                            --themeThirdColor: #f5f5f5;\n                                            --themeFourthColor: #000000;\n                                          }\n                                        ";
                      document.head.appendChild(fontEl);
                      localStorage.setItem("themeBaseColor", "#e3e3e3");
                      localStorage.setItem("themeSecondColor", "#f0f0f0");
                      localStorage.setItem("themeThirdColor", "#f5f5f5");
                      localStorage.setItem("themeFourthColor", "#000000");
                    }
                    document.body.insertAdjacentHTML("beforeend", '\n                                            <div id="colorPickerWindow">\n                                                <div id="colorPickerTitleBar">\n                                                    <div id="colorPickerTitleContainer">\n                                                        <span id="colorPickerTitle">Color Picker</span>\n                                                    </div>\n                                                    <button id="colorExitButton">-</button>\n                                                </div>\n                                                <div id="colorPickerContainer" class="centered">\n                                                    <div id="colorPickerButtons1" class="centered">\n                                                        <input type="color" id="colorPicker" class="centered">\n                                                    </div>\n                                                    <div id="colorPickerButtons" class="centered">\n                                                        <button id="applyButton">Apply</button>\n                                                        <button id="cancelButton">Cancel</button>\n                                                </div>\n                                                <div id="colorPickerButtons2" class="centered">\n                                                        <button id="resetButton">Reset</button>\n                                                        <button id="themeButton">Theme</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        ');
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("colorPickerWindow");
                    /** @type {(Element|null)} */
                    var c = document.getElementById("colorPicker");
                    /** @type {(Element|null)} */
                    var openLoginScreenBtn = document.getElementById("applyButton");
                    /** @type {(Element|null)} */
                    var cancelButton = document.getElementById("cancelButton");
                    /** @type {(Element|null)} */
                    var resetButton = document.getElementById("resetButton");
                    /** @type {(Element|null)} */
                    var ajaxButton = document.getElementById("colorExitButton");
                    /** @type {(Element|null)} */
                    var exports = document.getElementById("themeButton");
                    /** @type {string} */
                    c.value = getComputedStyle(document.documentElement).getPropertyValue("--baseColor");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    openLoginScreenBtn.addEventListener("click", function() {
                      resize(c.value);
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    ajaxButton.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    cancelButton.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    resetButton.addEventListener("click", function() {
                      initialize();
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    exports.addEventListener("click", function() {
                      resize();
                      push(event);
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var render = function() {
                    /**
                     * @return {undefined}
                     */
                    function save() {
                      if (code) {
                        /** @type {string} */
                        copyableContent.textContent = "Safe (" + lang + ")";
                      } else {
                        /** @type {string} */
                        copyableContent.textContent = "Safe (none)";
                      }
                    }
                    /**
                     * @param {!Function} error
                     * @return {undefined}
                     */
                    function select(error) {
                      /** @type {!Function} */
                      code = error;
                      if (code) {
                        /** @type {string} */
                        lang = String.fromCharCode(code);
                      } else {
                        /** @type {string} */
                        lang = "none";
                      }
                      localStorage.setItem("safeKeyCode", code);
                      localStorage.setItem("safeChosenKey", lang);
                      save();
                      document.removeEventListener("keydown", changeCodemirrorHeight);
                      push(event);
                    }
                    /**
                     * @param {!Event} event
                     * @return {undefined}
                     */
                    function changeCodemirrorHeight(event) {
                      if (event.keyCode === 27) {
                        select(null);
                      } else {
                        select(event.keyCode);
                      }
                    }
                    /**
                     * @return {undefined}
                     */
                    function syncVerticalScroll() {
                      if (i) {
                        /** @type {string} */
                        jsHintStatusBar.textContent = "Mines (" + token + ")";
                      } else {
                        /** @type {string} */
                        jsHintStatusBar.textContent = "Mines (none)";
                      }
                    }
                    /**
                     * @param {!Function} start
                     * @return {undefined}
                     */
                    function render(start) {
                      /** @type {!Function} */
                      i = start;
                      if (i) {
                        /** @type {string} */
                        token = String.fromCharCode(i);
                      } else {
                        /** @type {string} */
                        token = "none";
                      }
                      localStorage.setItem("minesKeyCode", i);
                      localStorage.setItem("minesChosenKey", token);
                      syncVerticalScroll();
                      document.removeEventListener("keydown", keyup);
                      push(event);
                    }
                    /**
                     * @param {!Event} options
                     * @return {undefined}
                     */
                    function keyup(options) {
                      if (options.keyCode === 27) {
                        render(null);
                      } else {
                        render(options.keyCode);
                      }
                    }
                    /**
                     * @return {undefined}
                     */
                    function getPath() {
                      if (raw) {
                        /** @type {string} */
                        weightButton.textContent = "Crash (" + str + ")";
                      } else {
                        /** @type {string} */
                        weightButton.textContent = "Crash (none)";
                      }
                    }
                    /**
                     * @param {!Function} data
                     * @return {undefined}
                     */
                    function stop(data) {
                      /** @type {!Function} */
                      raw = data;
                      if (raw) {
                        /** @type {string} */
                        str = String.fromCharCode(raw);
                      } else {
                        /** @type {string} */
                        str = "none";
                      }
                      localStorage.setItem("crashKeyCode", raw);
                      localStorage.setItem("crashChosenKey", str);
                      getPath();
                      document.removeEventListener("keydown", press);
                      push(event);
                    }
                    /**
                     * @param {!Event} e
                     * @return {undefined}
                     */
                    function press(e) {
                      if (e.keyCode === 27) {
                        stop(null);
                      } else {
                        stop(e.keyCode);
                      }
                    }
                    /**
                     * @return {undefined}
                     */
                    function add() {
                      if (x) {
                        /** @type {string} */
                        toggleHighlightedCourses.textContent = "Slide (" + state + ")";
                      } else {
                        /** @type {string} */
                        toggleHighlightedCourses.textContent = "Slide (none)";
                      }
                    }
                    /**
                     * @param {!Function} currentIndex
                     * @return {undefined}
                     */
                    function callback(currentIndex) {
                      /** @type {!Function} */
                      x = currentIndex;
                      if (x) {
                        /** @type {string} */
                        state = String.fromCharCode(x);
                      } else {
                        /** @type {string} */
                        state = "none";
                      }
                      localStorage.setItem("slideKeyCode", x);
                      localStorage.setItem("slideChosenKey", state);
                      add();
                      document.removeEventListener("keydown", onKeyDown);
                      push(event);
                    }
                    /**
                     * @param {!Event} event
                     * @return {undefined}
                     */
                    function onKeyDown(event) {
                      if (event.keyCode === 27) {
                        callback(null);
                      } else {
                        callback(event.keyCode);
                      }
                    }
                    /**
                     * @return {undefined}
                     */
                    function createElement() {
                      if (c) {
                        /** @type {string} */
                        orientationButton.textContent = "Towers (" + type + ")";
                      } else {
                        /** @type {string} */
                        orientationButton.textContent = "Towers (none)";
                      }
                    }
                    /**
                     * @param {!Function} resolve
                     * @return {undefined}
                     */
                    function update(resolve) {
                      /** @type {!Function} */
                      c = resolve;
                      if (c) {
                        /** @type {string} */
                        type = String.fromCharCode(c);
                      } else {
                        /** @type {string} */
                        type = "none";
                      }
                      localStorage.setItem("towersKeyCode", c);
                      localStorage.setItem("towersChosenKey", type);
                      createElement();
                      document.removeEventListener("keydown", remove);
                      push(event);
                    }
                    /**
                     * @param {!Event} event
                     * @return {undefined}
                     */
                    function remove(event) {
                      if (event.keyCode === 27) {
                        update(null);
                      } else {
                        update(event.keyCode);
                      }
                    }
                    /**
                     * @return {undefined}
                     */
                    function error() {
                      if (n === 16) {
                        /** @type {string} */
                        key = "shift";
                      }
                      if (n) {
                        /** @type {string} */
                        threeDBtn.textContent = "Menu (" + key + ")";
                      } else {
                        /** @type {string} */
                        threeDBtn.textContent = "Menu (none)";
                      }
                    }
                    /**
                     * @param {number} url
                     * @return {undefined}
                     */
                    function keyHandler(url) {
                      /** @type {number} */
                      n = url;
                      if (n) {
                        /** @type {string} */
                        key = String.fromCharCode(n);
                      } else {
                        /** @type {string} */
                        key = "none";
                      }
                      localStorage.setItem("menuKeyCode", n);
                      localStorage.setItem("menuChosenKey", key);
                      error();
                      document.removeEventListener("keydown", onKeyPress);
                      push(event);
                    }
                    /**
                     * @param {!Event} e
                     * @return {undefined}
                     */
                    function onKeyPress(e) {
                      if (e.keyCode === 27) {
                        keyHandler(0);
                      } else {
                        keyHandler(e.keyCode);
                      }
                    }
                    document.body.insertAdjacentHTML("beforeend", '\n                                        <div id="keyBindsWindow">\n                                            <div id="keyBindsTitleBar">\n                                                <div id="keyBindsTitleContainer">\n                                                    <span id="keyBindsTitle">Keybinds</span>\n                                                </div>\n                                                <button id="bindExitButton">-</button>\n                                            </div>\n                                            <div id="keyBindsContainer" class="centered">\n                                                <div id="row1" class="centered">\n                                                    <button id="safeBindButton">Safe</button>\n                                                    <button id="minesBindButton">Mines</button>\n                                                </div>\n                                                <div id="row2" class="centered">\n                                                    <button id="slideBindButton">Slide</button>\n                                                    <button id="crashBindButton">Crash</button>\n                                                </div>\n                                                <div id="row3" class="centered">\n                                                    <button id="towersBindButton">Towers</button>\n                                                    <button id="menuBindButton">Menu</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        ');
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("keyBindsWindow");
                    /** @type {(Element|null)} */
                    var copyableContent = document.getElementById("safeBindButton");
                    /** @type {(Element|null)} */
                    var jsHintStatusBar = document.getElementById("minesBindButton");
                    /** @type {(Element|null)} */
                    var weightButton = document.getElementById("crashBindButton");
                    /** @type {(Element|null)} */
                    var toggleHighlightedCourses = document.getElementById("slideBindButton");
                    /** @type {(Element|null)} */
                    var orientationButton = document.getElementById("towersBindButton");
                    /** @type {(Element|null)} */
                    var threeDBtn = document.getElementById("menuBindButton");
                    /** @type {(Element|null)} */
                    var lAActionRemove = document.getElementById("bindExitButton");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    lAActionRemove.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    /** @type {number} */
                    var code = parseInt(localStorage.getItem("safeKeyCode"));
                    var lang = localStorage.getItem("safeChosenKey") || "";
                    /** @type {number} */
                    var i = parseInt(localStorage.getItem("minesKeyCode"));
                    var token = localStorage.getItem("minesChosenKey") || "";
                    /** @type {number} */
                    var raw = parseInt(localStorage.getItem("crashKeyCode"));
                    var str = localStorage.getItem("crashChosenKey") || "";
                    /** @type {number} */
                    var x = parseInt(localStorage.getItem("slideKeyCode"));
                    var state = localStorage.getItem("slideChosenKey") || "";
                    /** @type {number} */
                    var c = parseInt(localStorage.getItem("towersKeyCode"));
                    var type = localStorage.getItem("towersChosenKey") || "";
                    /** @type {number} */
                    var n = parseInt(localStorage.getItem("menuKeyCode")) || 16;
                    var key = localStorage.getItem("menuChosenKey") || "shift";
                    copyableContent.addEventListener("click", function() {
                      /** @type {string} */
                      copyableContent.textContent = "Safe (...)";
                      document.addEventListener("keydown", changeCodemirrorHeight);
                    });
                    if (code) {
                      document.addEventListener("keydown", function(event) {
                        if (event.keyCode === code) {
                          load();
                        }
                      });
                    }
                    save();
                    jsHintStatusBar.addEventListener("click", function() {
                      /** @type {string} */
                      jsHintStatusBar.textContent = "Mines (...)";
                      document.addEventListener("keydown", keyup);
                    });
                    if (i) {
                      document.addEventListener("keydown", function(event) {
                        if (event.keyCode === i) {
                          start();
                        }
                      });
                    }
                    syncVerticalScroll();
                    weightButton.addEventListener("click", function() {
                      /** @type {string} */
                      weightButton.textContent = "Crash (...)";
                      document.addEventListener("keydown", press);
                    });
                    if (raw) {
                      document.addEventListener("keydown", function(event) {
                        if (event.keyCode === raw) {
                          init();
                        }
                      });
                    }
                    getPath();
                    document.addEventListener("keydown", function(event) {
                      if (event.keyCode === 27) {
                        event.preventDefault();
                      }
                    });
                    toggleHighlightedCourses.addEventListener("click", function() {
                      /** @type {string} */
                      toggleHighlightedCourses.textContent = "Slide (...)";
                      document.addEventListener("keydown", onKeyDown);
                    });
                    if (x) {
                      document.addEventListener("keydown", function(v) {
                        if (v.keyCode === x) {
                          go();
                        }
                      });
                    }
                    add();
                    document.addEventListener("keydown", function(event) {
                      if (event.keyCode === 27) {
                        event.preventDefault();
                      }
                    });
                    orientationButton.addEventListener("click", function() {
                      /** @type {string} */
                      orientationButton.textContent = "Towers (...)";
                      document.addEventListener("keydown", remove);
                    });
                    if (c) {
                      document.addEventListener("keydown", function(event) {
                        if (event.keyCode === c) {
                          create();
                        }
                      });
                    }
                    createElement();
                    document.addEventListener("keydown", function(event) {
                      if (event.keyCode === 27) {
                        event.preventDefault();
                      }
                    });
                    threeDBtn.addEventListener("click", function() {
                      /** @type {string} */
                      threeDBtn.textContent = "Menu (...)";
                      document.addEventListener("keydown", onKeyPress);
                    });
                    error();
                    document.addEventListener("keydown", function(event) {
                      if (event.keyCode === 27) {
                        event.preventDefault();
                      }
                    });
                  };
                  /**
                   * @param {?} level
                   * @return {undefined}
                   */
                  var request = function(level) {
                    /** @type {!Headers} */
                    var headers = new Headers;
                    headers.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36");
                    headers.append("X-Auth-Token", value);
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/towers", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((game) => {
                      var buildingName = game.hasGame;
                      if (buildingName) {
                        var mode = game.game.difficulty;
                        if (mode === "hard") {
                          /** @type {(Element|null)} */
                          var statusSpan = document.getElementById("predictionLabel");
                          /** @type {string} */
                          statusSpan.textContent = "Cannot predict for hard difficulty";
                          /** @type {string} */
                          statusSpan.style.fontSize = "24px";
                          /** @type {string} */
                          statusSpan.style.lineHeight = "30px";
                          /** @type {!NodeList<Element>} */
                          var pipelets = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                          pipelets.forEach(function(focusedObj) {
                            focusedObj.classList.remove("safeoutlined");
                          });
                          return;
                        }
                        var params = {
                          method : "GET",
                          headers : headers
                        };
                        fetch("https://api.bloxflip.com/games/towers/history?size=5&page=0", params).then((rawResp) => {
                          return rawResp.json();
                        }).then((simpleselect) => {
                          /**
                           * @param {!Object} state
                           * @return {?}
                           */
                          function getDisabledActions(state) {
                            return state.reduce(function(canCreateDiscussions, isSlidingUp) {
                              return canCreateDiscussions + (isSlidingUp === 1 ? 1 : 0);
                            }, 0);
                          }
                          /**
                           * @param {number} i
                           * @return {undefined}
                           */
                          function check(i) {
                            if (i < 0 || to === 0) {
                              return;
                            }
                            /** @type {!Element} */
                            var ball = _ball[i];
                            ball.click();
                            to--;
                            setTimeout(function() {
                              check(i - 1);
                            }, 1250);
                          }
                          var _horizontalTileCache = simpleselect.data[1].towerLevels;
                          _horizontalTileCache.reverse();
                          var pipelets;
                          var groupType = simpleselect.data[1].difficulty;
                          if (groupType === "normal") {
                            /** @type {!NodeList<Element>} */
                            pipelets = document.querySelectorAll(".towers_towersGameRow__TeoqD");
                          } else {
                            /** @type {!NodeList<Element>} */
                            pipelets = document.querySelectorAll(".towers_towersGameRow__TeoqD.towers_towersGameThreeRows__NHpS9");
                          }
                          pipelets.forEach(function(rootDOMTravelScope, graphicValue) {
                            /** @type {!NodeList<Element>} */
                            var pipelets = rootDOMTravelScope.querySelectorAll(".towers_towersGameRowContainer__W4mP_");
                            /** @type {number} */
                            var out_len = 0;
                            /** @type {null} */
                            var dayEle = null;
                            pipelets.forEach(function(rootDOMTravelScope, curZoom) {
                              /** @type {!NodeList<Element>} */
                              var _0x5d6acb = rootDOMTravelScope.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im");
                              var out_sample = getDisabledActions(_horizontalTileCache[graphicValue]);
                              if (_horizontalTileCache[graphicValue][curZoom] === 1 && out_sample >= out_len) {
                                out_len = out_sample;
                                /** @type {!Element} */
                                dayEle = _0x5d6acb[0];
                              }
                            });
                            if (dayEle) {
                              dayEle.classList.add("safeoutlined", "active");
                            }
                          });
                          /** @type {!NodeList<Element>} */
                          var _ball = document.querySelectorAll(".button_button__eJwei.towers_towersGameButton__Fm2im.safeoutlined");
                          /** @type {number} */
                          var historyId = _ball.length - 1;
                          /** @type {number} */
                          var to = Math.min(level, historyId + 1);
                          check(historyId);
                        });
                      } else {
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var verifyMany = function() {
                    var token = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                    var headers = {
                      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                      "X-Auth-Token" : token
                    };
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/towers", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((instance) => {
                      var $asyncTable = instance.hasGame;
                      if ($asyncTable) {
                        /** @type {(Element|null)} */
                        var imgchk = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                        if (imgchk) {
                          imgchk.click();
                        }
                        setTimeout(function() {
                          /** @type {(Element|null)} */
                          var imgchk = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                          if (imgchk) {
                            imgchk.click();
                          }
                          setTimeout(function() {
                            request();
                          }, 3000);
                        }, 3000);
                      } else {
                        /** @type {(Element|null)} */
                        if (imgchk) {
                          imgchk.click();
                        }
                        setTimeout(function() {
                          request();
                        }, 2000);
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var message = function() {
                    push(event);
                    /** @type {boolean} */
                    _0x188494 = !_0x188494;
                    /** @type {(Element|null)} */
                    var td1b2 = document.getElementById("towersPlayButton");
                    if (_0x188494) {
                      /** @type {string} */
                      td1b2.textContent = "Auto play (On)";
                      /** @type {number} */
                      initializeCheckTimer = setInterval(verifyMany, 2000);
                    } else {
                      /** @type {string} */
                      td1b2.textContent = "Auto play (Off)";
                      clearInterval(initializeCheckTimer);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var enableDialog = function() {
                    /** @type {(Element|null)} */
                    var battery = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                    if (battery) {
                      battery.removeEventListener("click", eventHandler);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var hide = function() {
                    /** @type {(Element|null)} */
                    var battery = document.querySelector(".button_button__eJwei.button_primary__mdLFG.gameBetSubmit");
                    if (battery) {
                      battery.addEventListener("click", eventHandler);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var eventHandler = function() {
                    setTimeout(create, 500);
                  };
                  /**
                   * @return {undefined}
                   */
                  var cancel = function() {
                    push(event);
                    /** @type {boolean} */
                    _0x4203c5 = !_0x4203c5;
                    /** @type {(Element|null)} */
                    var td1b2 = document.getElementById("towersAutoPredictButton");
                    if (_0x4203c5) {
                      /** @type {string} */
                      td1b2.textContent = "Auto predict (On)";
                      hide();
                    } else {
                      /** @type {string} */
                      td1b2.textContent = "Auto predict (Off)";
                      enableDialog();
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var open = function() {
                    document.body.insertAdjacentHTML("beforeend", '\n                                        <div id="towersAutoPlayWindow">\n                                            <div id="towersAutoPlayTitleBar">\n                                                <div id="towersAutoPlayTitleContainer">\n                                                    <span id="towersAutoPlayTitle">Auto Towers</span>\n                                                </div>\n                                                <button id="towersAutoExitButton">-</button>\n                                            </div>\n                                            <div id="towersAutoPlayContainer" class="centered">\n                                                <div id="row1" class="centered">\n                                                    <button id="towersPlayButton">Auto play</button>\n                                                    <button id="towersAutoPredictButton">Auto predict</button>\n                                                </div>\n                                                <div id="autorow2" class="centered">\n                                                    <label id="spotsSliderLabel" for="spotsSlider">Spots:</label>\n                                                    <span id="spotsLabel">1</span>\n                                                </div>\n                                                <div id="row3" class="centered">\n                                                    <input type="range" id="spotsSlider" min="1" max="8" value="1">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    ');
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("towersAutoPlayWindow");
                    /** @type {(Element|null)} */
                    var box = document.getElementById("towersPlayButton");
                    /** @type {(Element|null)} */
                    var editable = document.getElementById("towersAutoPredictButton");
                    /** @type {(Element|null)} */
                    var directButton = document.getElementById("towersAutoExitButton");
                    /** @type {(Element|null)} */
                    var bumpLimit = document.getElementById("spotsSlider");
                    /** @type {(Element|null)} */
                    var percentNumber = document.getElementById("spotsLabel");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    editable.addEventListener("click", cancel);
                    box.addEventListener("click", message);
                    directButton.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    bumpLimit.addEventListener("input", function() {
                      /** @type {number} */
                      var title = parseInt(bumpLimit.value);
                      /** @type {number} */
                      percentNumber.textContent = title;
                      /** @type {string} */
                      var buttonDownColor = "linear-gradient(to right, var(--baseColor) 0%, var(--baseColor) " + (title - 1) / 8 * 100 + "%, #383838 " + (title - 1) / 8 * 100 + "%, #383838 100%)";
                      /** @type {string} */
                      bumpLimit.style.background = buttonDownColor;
                      push(event);
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var getLibrary = function() {
                    var token = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                    var headers = {
                      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                      "X-Auth-Token" : token
                    };
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((ar2) => {
                      if (ar2.success === true && Array.isArray(ar2.data)) {
                        /** @type {!Array} */
                        var cells = [];
                        ar2.data.forEach(function(data) {
                          if (Array.isArray(data.mineLocations)) {
                            cells = cells.concat(data.mineLocations);
                          }
                        });
                        var pipelets = cells.map(function(canCreateDiscussions) {
                          return canCreateDiscussions + 1;
                        });
                        var b = {};
                        pipelets.forEach(function(paramName) {
                          if (b[paramName] === undefined) {
                            /** @type {number} */
                            b[paramName] = 1;
                          } else {
                            b[paramName]++;
                          }
                        });
                        /** @type {!Array<string>} */
                        var charListNotLatin = Object.keys(b).sort(function(key, sort) {
                          return b[sort] - b[key];
                        });
                        /** @type {!Array<string>} */
                        var stack = charListNotLatin.slice(0, 4);
                        stack.reverse();
                        setTimeout(function() {
                          /** @type {(Element|null)} */
                          var imgchk = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                          if (imgchk) {
                            imgchk.click();
                          }
                          try {
                            /**
                             * @param {number} i
                             * @return {undefined}
                             */
                            var show = function(i) {
                              if (i >= yearStart) {
                                /** @type {(Element|null)} */
                                var imgchk = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                                if (imgchk) {
                                  imgchk.click();
                                }
                                return;
                              }
                              /** @type {string} */
                              var ts = stack[i];
                              /** @type {number} */
                              var sec = ts - 1;
                              /** @type {number} */
                              var heightInc = Math.floor(sec / 5);
                              /** @type {number} */
                              var sec_ones = sec % 5;
                              /** @type {number} */
                              var initHeight = 4 - sec_ones;
                              /** @type {number} */
                              var len = heightInc * 5 + initHeight + 1;
                              if (len >= 1 && len <= 25) {
                                children[len - 1].click();
                              }
                              setTimeout(function() {
                                show(i + 1);
                              }, 125);
                            };
                            /** @type {(Element|null)} */
                            var encodeQuality = document.getElementById("spotsSlider");
                            /** @type {number} */
                            var yearStart = parseInt(encodeQuality.value);
                            /** @type {!NodeList<Element>} */
                            var children = document.querySelectorAll(".mines_minesGameItem___y0ki");
                            show(0);
                          } catch (_0xee30e0) {
                          }
                        }, 1250);
                      } else {
                        /** @type {(Element|null)} */
                        var statusSpan = document.getElementById("predictionLabel");
                        /** @type {string} */
                        statusSpan.textContent = "Invalid API Response";
                        /** @type {string} */
                        statusSpan.style.fontSize = "24px";
                        /** @type {string} */
                        statusSpan.style.lineHeight = "30px";
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var ready = function() {
                    var token = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                    var headers = {
                      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                      "X-Auth-Token" : token
                    };
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/mines/history?size=5&page=0", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((ar2) => {
                      if (ar2.success === true && Array.isArray(ar2.data)) {
                        /** @type {!Array} */
                        var sortedFolderIds = [];
                        var suggestionsAndFinalScore = {};
                        ar2.data.forEach(function(params) {
                          if (Array.isArray(params.mineLocations)) {
                            sortedFolderIds = sortedFolderIds.concat(params.mineLocations);
                            suggestionsAndFinalScore[params.id] = params.minesAmount;
                          }
                        });
                        var charListNotLatin = sortedFolderIds.sort(function(secondSuggestion, firstSuggestion) {
                          return suggestionsAndFinalScore[secondSuggestion] - suggestionsAndFinalScore[firstSuggestion];
                        });
                        var path = charListNotLatin.slice(0, 8);
                        var elmObjsSorted = charListNotLatin.slice().reverse();
                        var uniqueConnectors = elmObjsSorted.slice(0, 4);
                        setTimeout(function() {
                          /** @type {(Element|null)} */
                          var imgchk = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                          if (imgchk) {
                            imgchk.click();
                          }
                          try {
                            /**
                             * @param {number} result
                             * @return {undefined}
                             */
                            var callback = function(result) {
                              if (result >= skip) {
                                /** @type {(Element|null)} */
                                var imgchk = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                                if (imgchk) {
                                  imgchk.click();
                                }
                                return;
                              }
                              /** @type {number} */
                              var i = Math.floor(Math.random() * s.length);
                              var n = s[i];
                              s.splice(i, 1);
                              children[n - 1].click();
                              setTimeout(function() {
                                callback(result + 1);
                              }, 125);
                            };
                            /** @type {(Element|null)} */
                            var encodeQuality = document.getElementById("spotsSlider");
                            /** @type {number} */
                            var skip = parseInt(encodeQuality.value);
                            /** @type {!NodeList<Element>} */
                            var children = document.querySelectorAll(".mines_minesGameItem___y0ki");
                            /** @type {!Array<undefined>} */
                            var s = [...Array(25).keys()].map((canCreateDiscussions) => {
                              return canCreateDiscussions + 1;
                            }).filter((testFilePath) => {
                              return !path.includes(testFilePath) && !uniqueConnectors.includes(testFilePath);
                            });
                            callback(0);
                          } catch (_0x2f4e1c) {
                          }
                        }, 1250);
                      } else {
                        /** @type {(Element|null)} */
                        var statusSpan = document.getElementById("predictionLabel");
                        /** @type {string} */
                        statusSpan.textContent = "Invalid API Response";
                        /** @type {string} */
                        statusSpan.style.fontSize = "24px";
                        /** @type {string} */
                        statusSpan.style.lineHeight = "30px";
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var fetchGitUserInfo = function() {
                    var token = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
                    var headers = {
                      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
                      "X-Auth-Token" : token
                    };
                    var params = {
                      method : "GET",
                      headers : headers
                    };
                    fetch("https://api.bloxflip.com/games/mines", params).then((rawResp) => {
                      return rawResp.json();
                    }).then((instance) => {
                      var $asyncTable = instance.hasGame;
                      if ($asyncTable) {
                        /** @type {(Element|null)} */
                        var imgchk = document.querySelector(".button_secondary__dwIbt.gameBetSubmit");
                        if (imgchk) {
                          imgchk.click();
                        }
                        setTimeout(function() {
                          /** @type {(Element|null)} */
                          var imgchk = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                          if (imgchk) {
                            imgchk.click();
                          }
                          setTimeout(function() {
                            if (_0x40d368) {
                              getLibrary();
                            } else {
                              ready();
                            }
                          }, 1250);
                        }, 1250);
                      } else {
                        /** @type {(Element|null)} */
                        if (imgchk) {
                          imgchk.click();
                        }
                        setTimeout(function() {
                          if (_0x40d368) {
                            getLibrary();
                          } else {
                            ready();
                          }
                        }, 1250);
                      }
                    })["catch"]((canCreateDiscussions) => {
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var pointerEndHandler = function() {
                    setTimeout(load, 500);
                  };
                  /**
                   * @return {undefined}
                   */
                  var mouseup_handler = function() {
                    setTimeout(start, 500);
                  };
                  /**
                   * @return {undefined}
                   */
                  var set = function() {
                    /** @type {(Element|null)} */
                    var el = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                    if (el) {
                      el.removeEventListener("click", pointerEndHandler);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var add = function() {
                    /** @type {(Element|null)} */
                    var el = document.querySelector(".button_button__eJwei.button_primary__mdLFG.gameBetSubmit");
                    if (el) {
                      el.addEventListener("click", pointerEndHandler);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var addEventListener = function() {
                    /** @type {(Element|null)} */
                    var canvas = document.querySelector(".button_primary__mdLFG.gameBetSubmit");
                    if (canvas) {
                      canvas.removeEventListener("click", mouseup_handler);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var get = function() {
                    /** @type {(Element|null)} */
                    var canvas = document.querySelector(".button_button__eJwei.button_primary__mdLFG.gameBetSubmit");
                    if (canvas) {
                      canvas.addEventListener("click", mouseup_handler);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var onClick = function() {
                    push(event);
                    /** @type {boolean} */
                    _0x2274f3 = !_0x2274f3;
                    /** @type {(Element|null)} */
                    var td1b2 = document.getElementById("minesAutoPredictButton");
                    if (_0x2274f3) {
                      /** @type {string} */
                      td1b2.textContent = "Auto predict (On)";
                      if (_0x40d368) {
                        add();
                      } else {
                        get();
                      }
                    } else {
                      /** @type {string} */
                      td1b2.textContent = "Auto predict (Off)";
                      if (_0x40d368) {
                        set();
                      } else {
                        addEventListener();
                      }
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var clickHandler = function() {
                    push(event);
                    /** @type {boolean} */
                    _0x188494 = !_0x188494;
                    /** @type {(Element|null)} */
                    var td1b2 = document.getElementById("minesPlayButton");
                    if (_0x188494) {
                      /** @type {string} */
                      td1b2.textContent = "Auto play (On)";
                      /** @type {number} */
                      _td_alert = setInterval(fetchGitUserInfo, 2000);
                    } else {
                      /** @type {string} */
                      td1b2.textContent = "Auto play (Off)";
                      clearInterval(_td_alert);
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var softShowFieldDetails = function() {
                    push(event);
                    /** @type {boolean} */
                    _0x40d368 = !_0x40d368;
                    /** @type {(Element|null)} */
                    var td1b2 = document.getElementById("predictionTypeButton");
                    if (_0x40d368) {
                      /** @type {string} */
                      td1b2.textContent = "Safe";
                      addEventListener();
                      add();
                    } else {
                      /** @type {string} */
                      td1b2.textContent = "Mines";
                      set();
                      get();
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var build = function() {
                    document.body.insertAdjacentHTML("beforeend", '\n                                        <div id="minesAutoPlayWindow">\n                                           <div id="minesAutoPlayTitleBar">\n                                                <div id="minesAutoPlayTitleContainer">\n                                                    <span id="minesAutoPlayTitle">Auto Mines</span>\n                                                </div>\n                                                <button id="minesAutoExitButton">-</button>\n                                            </div>\n                                            <div id="minesAutoPlayContainer" class="centered">\n                                                <div id="row1" class="centered">\n                                                    <button id="minesPlayButton">Auto play</button>\n                                                    <button id="minesAutoPredictButton">Auto predict</button>\n                                                </div>\n                                                <div id="autorow2" class="centered">\n                                                    <button id="predictionTypeButton">Mines</button>\n                                                </div>\n                                                <div id="row3" class="centered">\n                                                    <label id="spotsSliderLabel" for="spotsSlider">Spots:</label>\n                                                    <span id="spotsLabel">1</span>\n                                                </div>\n                                                <div id="row4" class="centered">\n                                                    <input type="range" id="spotsSlider" min="1" max="24" value="1">\n                                                </div>\n                                            </div>\n                                        </div>\n                                    ');
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("minesAutoPlayWindow");
                    /** @type {(Element|null)} */
                    var elem = document.getElementById("minesPlayButton");
                    /** @type {(Element|null)} */
                    var _eleChordList = document.getElementById("minesAutoPredictButton");
                    /** @type {(Element|null)} */
                    var ajaxButton = document.getElementById("minesAutoExitButton");
                    /** @type {(Element|null)} */
                    var directButton = document.getElementById("predictionTypeButton");
                    /** @type {(Element|null)} */
                    var bumpLimit = document.getElementById("spotsSlider");
                    /** @type {(Element|null)} */
                    var percentNumber = document.getElementById("spotsLabel");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    elem.addEventListener("click", clickHandler);
                    _eleChordList.addEventListener("click", onClick);
                    directButton.addEventListener("click", softShowFieldDetails);
                    ajaxButton.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                    bumpLimit.addEventListener("input", function(newRepoState) {
                      /** @type {number} */
                      var title = parseInt(bumpLimit.value);
                      /** @type {number} */
                      percentNumber.textContent = title;
                      /** @type {string} */
                      var buttonDownColor = "linear-gradient(to right, var(--baseColor) 0%, var(--baseColor) " + (title - 1) / 24 * 100 + "%, #383838 " + (title - 1) / 24 * 100 + "%, #383838 100%)";
                      /** @type {string} */
                      bumpLimit.style.background = buttonDownColor;
                      push(newRepoState);
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var callback = function() {
                    document.body.insertAdjacentHTML("beforeend", '\n                                        <div id="autoPlayWindow">\n                                           <div id="autoPlayTitleBar">\n                                                <div id="autoPlayTitleContainer">\n                                                    <span id="autoPlayTitle">Auto Play</span>\n                                                </div>\n                                                <button id="autoExitButton">-</button>\n                                            </div>\n                                            <div id="autoPlayContainer" class="centered">\n                                                <div id="autoPlayContainerRow1" class="centered">\n                                                    <button id="minesAutoPlayButton">Mines</button>\n                                                    <button id="towersAutoPlayButton">Towers</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        ');
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("autoPlayWindow");
                    /** @type {(Element|null)} */
                    var openLoginScreenBtn = document.getElementById("minesAutoPlayButton");
                    /** @type {(Element|null)} */
                    var ajaxButton = document.getElementById("towersAutoPlayButton");
                    /** @type {(Element|null)} */
                    var directButton = document.getElementById("autoExitButton");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    openLoginScreenBtn.addEventListener("click", function(newRepoState) {
                      build();
                      push(newRepoState);
                    });
                    ajaxButton.addEventListener("click", function(newRepoState) {
                      open();
                      push(newRepoState);
                    });
                    directButton.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var update = function() {
                    document.body.insertAdjacentHTML("beforeend", '\n                                            <div id="emojiChangerWindow">\n                                                <div id="emojiChangerTitleBar">\n                                                    <div id="emojiChangerTitleContainer">\n                                                        <span id="emojiChangerTitle">Emoji Changer</span>\n                                                    </div>\n                                                    <button id="emojiExitButton">-</button>\n                                                </div>\n                                                <div id="emojiChangerButtons" class="centered">\n                                                    <div class="predict-emoji-container">\n                                                        <label id="safeLabel" for="safeEmoji">Safe Emoji:</label>\n                                                        <input type="text" id="safeEmoji" placeholder="\u2705" />\n                                                        <label id="mineLabel" for="mineEmoji">Mine Emoji:</label>\n                                                        <input type="text" id="mineEmoji" placeholder="\ud83d\udca3" />\n                                                    </div>\n                                                    <div class="grid-emoji-container">\n                                                        <label id="gridLabel" for="gridEmoji">Grid Emoji:</label>\n                                                        <input type="text" id="gridEmoji" placeholder="\u2753" />\n                                                        <label id="riskLabel" for="riskEmoji">Risk Emoji:</label>\n                                                        <input type="text" id="riskEmoji" placeholder="\u26a0\ufe0f" />\n                                                    </div>\n                                                    <div class="button-container">\n                                                        <button id="emojiSaveButton">Save</button>\n                                                        <button id="emojiCancelButton">Cancel</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        ');
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("emojiChangerWindow");
                    /** @type {(Element|null)} */
                    var openLoginScreenBtn = document.getElementById("emojiExitButton");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    /** @type {(Element|null)} */
                    var editAccountPass = document.getElementById("safeEmoji");
                    /** @type {(Element|null)} */
                    var nodeBlog = document.getElementById("gridEmoji");
                    /** @type {(Element|null)} */
                    var passwdEl = document.getElementById("mineEmoji");
                    /** @type {(Element|null)} */
                    var togglButtonDescription = document.getElementById("riskEmoji");
                    /** @type {(Element|null)} */
                    var ajaxButton = document.getElementById("emojiSaveButton");
                    /** @type {(Element|null)} */
                    var directButton = document.getElementById("emojiCancelButton");
                    editAccountPass.value = localStorage.getItem("safeEmoji") || "";
                    nodeBlog.value = localStorage.getItem("gridEmoji") || "";
                    passwdEl.value = localStorage.getItem("mineEmoji") || "";
                    togglButtonDescription.value = localStorage.getItem("riskEmoji") || "";
                    openLoginScreenBtn.addEventListener("click", function(newRepoState) {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(newRepoState);
                    });
                    ajaxButton.addEventListener("click", function(newRepoState) {
                      var NEWmadvStaticFocalUnicodeCharacter = editAccountPass.value;
                      var NEWmadvLongWordTriggerCharacterCount = nodeBlog.value;
                      var NEWmadvLongWordMinCharacterPerSlidePostSplit = passwdEl.value;
                      var NEWmadvLongWordCharacterTriggerDoNotJoin = togglButtonDescription.value;
                      localStorage.setItem("safeEmoji", NEWmadvStaticFocalUnicodeCharacter);
                      localStorage.setItem("gridEmoji", NEWmadvLongWordTriggerCharacterCount);
                      localStorage.setItem("riskEmoji", NEWmadvLongWordCharacterTriggerDoNotJoin);
                      localStorage.setItem("mineEmoji", NEWmadvLongWordMinCharacterPerSlidePostSplit);
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(newRepoState);
                    });
                    directButton.addEventListener("click", function(newRepoState) {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(newRepoState);
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var showDialog = function() {
                    document.body.insertAdjacentHTML("beforeend", '\n                                        <div id="statsWindow">\n                                            <div id="statsTitleBar">\n                                                <div id="statsTitleContainer">\n                                                    <span id="statsTitle">Statistics</span>\n                                                </div>\n                                                <button id="statsExitButton">-</button>\n                                            </div>\n                                            <span id="lossCounter"/span>\n                                            <span id="winCounter"</span>\n                                            <div id="statsContainer" class="centered">\n                                                <div id="rateContainer">\n                                                    <div id="rateLabels">\n                                                        <span id="lossRate">Loss Rate:</span>\n                                                        <span id="winRate">Win Rate:</span>\n                                                    </div>\n                                                    <div id="ratePercentages">\n                                                        <span id="lossPercentage">0%</span>\n                                                        <span id="winPercentage">0%</span>\n                                                    </div>\n                                                </div>\n                                                <div class="circle-container">\n                                                    <div class="hollow-circle"></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    ');
                    getData();
                    /** @type {(Element|null)} */
                    var divDot = document.getElementById("statsWindow");
                    /** @type {(Element|null)} */
                    var openLoginScreenBtn = document.getElementById("statsExitButton");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - divDot.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - divDot.offsetHeight / 2;
                    /** @type {(Element|null)} */
                    var iframe = document.getElementById("settingsWindow");
                    /** @type {string} */
                    divDot.style.left = targetL + "px";
                    /** @type {string} */
                    divDot.style.top = y_body_bottom + "px";
                    openLoginScreenBtn.addEventListener("click", function() {
                      divDot.remove();
                      /** @type {string} */
                      iframe.style.pointerEvents = "auto";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      /** @type {string} */
                      iframe.style.filter = "none";
                      push(event);
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var getData = function() {
                    if (document.getElementById("winCounter") !== null && document.getElementById("lossCounter") !== null && document.getElementById("winPercentage") !== null && document.getElementById("lossPercentage") !== null) {
                      l = i;
                      /** @type {number} */
                      distance = height - i;
                      /** @type {number} */
                      var width = height === 0 ? 0 : l / height * 100;
                      /** @type {number} */
                      var s = height === 0 ? 0 : distance / height * 100;
                      /** @type {(Element|null)} */
                      var td1b2 = document.getElementById("winPercentage");
                      /** @type {(Element|null)} */
                      var userReposCount = document.getElementById("lossPercentage");
                      /** @type {(Element|null)} */
                      var afterPreview = document.querySelector(".hollow-circle");
                      /** @type {string} */
                      td1b2.textContent = width.toFixed(2) + "%";
                      /** @type {string} */
                      userReposCount.textContent = s.toFixed(2) + "%";
                      afterPreview.style.setProperty("--winPercentage", width + "%");
                      afterPreview.style.setProperty("--lossPercentage", s + "%");
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var setup = function() {
                    /**
                     * @return {undefined}
                     */
                    function setup() {
                      /** @type {(Element|null)} */
                      var exMap = document.getElementById("movableMenu");
                      /** @type {(Element|null)} */
                      var xdata = document.getElementById("settingsWindow");
                      /** @type {(Element|null)} */
                      var otweets = document.getElementById("movableImage");
                      if (exMap) {
                        exMap.remove();
                      }
                      if (xdata) {
                        xdata.remove();
                      }
                      if (otweets) {
                        otweets.remove();
                      }
                      localStorage.removeItem("bozePredictorLicenseKey");
                      create();
                    }
                    /**
                     * @param {string} str
                     * @return {?}
                     */
                    function encode(str) {
                      const resols = [];
                      for (let i = 0; i < str.length; i = i + 2) {
                        resols.push(parseInt(str.substr(i, 2), 16));
                      }
                      return new Uint8Array(resols);
                    }
                    /**
                     * @param {string} url
                     * @return {?}
                     */
                    function shouldGoBack(url) {
                      url = url.trim();
                      if (!/^[a-fA-F0-9]{64}$/.test(url)) {
                        return false;
                      }
                      return true;
                    }
                    /**
                     * @param {string} text
                     * @return {undefined}
                     */
                    function copyValueToClipboard(text) {
                      /** @type {!Element} */
                      var copyTextarea = document.createElement("textarea");
                      /** @type {string} */
                      copyTextarea.value = text;
                      document.body.appendChild(copyTextarea);
                      copyTextarea.select();
                      document.execCommand("copy");
                      document.body.removeChild(copyTextarea);
                    }
                    document.body.insertAdjacentHTML("beforeend", '\n                                            <div id="settingsWindow">\n                                                <div id="settingsTitleBar">\n                                                    <div id="settingsTitleContainer">\n                                                        <span id="settingsTitle">Settings</span>\n                                                    </div>\n                                                    <button id="exitButton">-</button>\n                                                </div>\n                                                <div id="settingsContainer">\n                                                    <div id="settingsContainerRow1" class="centered">\n                                                        <button id="changeColorButton">Colors</button>\n                                                        <button id="changeBindsButton">Keybinds</button>\n                                                    </div>\n                                                    <div id="settingsContainerRow2" class="centered">\n                                                        <button id="unrigButton">Unrig</button>\n                                                        <button id="autoPlayButton">Autoplay</button>\n                                                    </div>\n                                                    <div id="settingsContainerRow3" class="centered">\n                                                        <button id="emojiButton">Emojis</button>\n                                                        <button id="statsButton">Stats</button>\n                                                    </div>\n                                                    <div id="settingsContainerRow4" class="centered">\n                                                        <button id="logoutButton">Logout</button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        ');
                    /** @type {(Element|null)} */
                    var elem = document.getElementById("settingsWindow");
                    /** @type {(Element|null)} */
                    var openLoginScreenBtn = document.getElementById("exitButton");
                    /** @type {(Element|null)} */
                    var ajaxButton = document.getElementById("changeColorButton");
                    /** @type {(Element|null)} */
                    var directButton = document.getElementById("changeBindsButton");
                    /** @type {(Element|null)} */
                    var toggleHighlightedCourses = document.getElementById("autoPlayButton");
                    /** @type {(Element|null)} */
                    var orientationButton = document.getElementById("logoutButton");
                    /** @type {(Element|null)} */
                    var threeDBtn = document.getElementById("emojiButton");
                    /** @type {(Element|null)} */
                    var lAActionRemove = document.getElementById("statsButton");
                    /** @type {!ClientRect} */
                    var targetShapeBounds = el.getBoundingClientRect();
                    /** @type {number} */
                    var targetL = targetShapeBounds.left + targetShapeBounds.width / 2 - elem.offsetWidth / 2;
                    /** @type {number} */
                    var y_body_bottom = targetShapeBounds.top + targetShapeBounds.height / 2 - elem.offsetHeight / 2;
                    /** @type {string} */
                    elem.style.left = targetL + "px";
                    /** @type {string} */
                    elem.style.top = y_body_bottom + "px";
                    openLoginScreenBtn.addEventListener("click", function() {
                      elem.remove();
                      /** @type {string} */
                      el.style.pointerEvents = "auto";
                      /** @type {string} */
                      element.style.pointerEvents = "auto";
                      /** @type {string} */
                      el.style.filter = "none";
                      /** @type {string} */
                      element.style.filter = "none";
                      /** @type {boolean} */
                      _0x17a5da = false;
                      push(event);
                    });
                    lAActionRemove.addEventListener("click", function() {
                      /** @type {string} */
                      elem.style.pointerEvents = "none";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      showDialog();
                      push(event);
                    });
                    ajaxButton.addEventListener("click", function() {
                      /** @type {string} */
                      elem.style.pointerEvents = "none";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      move();
                      push(event);
                    });
                    threeDBtn.addEventListener("click", function() {
                      /** @type {string} */
                      elem.style.pointerEvents = "none";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      update();
                      push(event);
                    });
                    directButton.addEventListener("click", function() {
                      /** @type {string} */
                      elem.style.pointerEvents = "none";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      render();
                      push(event);
                    });
                    toggleHighlightedCourses.addEventListener("click", function() {
                      /** @type {string} */
                      elem.style.pointerEvents = "none";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      /** @type {string} */
                      elem.style.filter = "blur(4px)";
                      callback();
                      push(event);
                    });
                    orientationButton.addEventListener("click", function() {
                      setup();
                      init();
                      push(event);
                    });
                    /** @type {(Element|null)} */
                    var toggleMaximizeElement = document.getElementById("unrigButton");
                    const CryptoJS = window.CryptoJS;
                    toggleMaximizeElement.addEventListener("click", function() {
                      push(event);
                      /** @type {(null|string)} */
                      var text = prompt("Please enter your server seed:");
                      if (text) {
                        if (!shouldGoBack(text)) {
                          alert("Invalid server seed");
                          return;
                        }
                        /** @type {string} */
                        var value = btoa(encode(text));
                        var total_pageviews_raw = CryptoJS.SHA256(value).toString();
                        var searchSummaryText = total_pageviews_raw.slice(0, 9) + "-" + total_pageviews_raw.slice(9, 18);
                        /** @type {number} */
                        var widestInView = Math.min(parseInt(total_pageviews_raw, 16) % 100, 100);
                        /** @type {number} */
                        widestInView = Math.max(widestInView, 1);
                        copyValueToClipboard(searchSummaryText);
                        alert("New Client Seed: " + searchSummaryText + " (Copied to clipboard)\nAccuracy: " + widestInView + "%");
                      }
                    });
                  };
                  /**
                   * @return {undefined}
                   */
                  var onKeyDown = function() {
                    keyDown();
                  };
                  /**
                   * @param {!Event} event
                   * @return {undefined}
                   */
                  var changeCodemirrorHeight = function(event) {
                    var pre = event.touches[0];
                    close(pre);
                  };
                  /**
                   * @param {!Event} touchEvent
                   * @return {undefined}
                   */
                  var _touchMoveHandler = function(touchEvent) {
                    var createNew = touchEvent.touches[0];
                    stop(createNew);
                  };
                  /**
                   * @return {undefined}
                   */
                  var keyDown = function() {
                    /** @type {boolean} */
                    _0x276872 = false;
                  };
                  /**
                   * @param {!Event} e
                   * @return {undefined}
                   */
                  var close = function(e) {
                    if (_0x276872) {
                      /** @type {string} */
                      el.style.left = e.clientX - startx + "px";
                      /** @type {string} */
                      el.style.top = e.clientY - starty + "px";
                    }
                  };
                  /**
                   * @param {!Event} state
                   * @return {undefined}
                   */
                  var stop = function(state) {
                    /** @type {boolean} */
                    _0x276872 = true;
                    /** @type {number} */
                    startx = state.clientX - parseInt(window.getComputedStyle(el).left);
                    /** @type {number} */
                    starty = state.clientY - parseInt(window.getComputedStyle(el).top);
                  };
                  /**
                   * @param {!MouseEvent} repoState
                   * @return {undefined}
                   */
                  var push = function(repoState) {
                    if (repoState instanceof MouseEvent) {
                      const previewPlayer = new Audio("https://dl.sndup.net/r6c7/mixkit-gate-latch-click-1924.mp3");
                      /** @type {number} */
                      previewPlayer.currentTime = 0;
                      previewPlayer.play();
                    }
                  };
                  /**
                   * @return {undefined}
                   */
                  var resetClickFn = function() {
                    remove();
                  };
                  /**
                   * @param {!Event} e
                   * @return {undefined}
                   */
                  var endresize = function(e) {
                    var expr = e.touches[0];
                    show(expr);
                  };
                  /**
                   * @param {!Event} event
                   * @return {undefined}
                   */
                  var e = function(event) {
                    var tx = event.touches[0];
                    func(tx);
                  };
                  /**
                   * @return {undefined}
                   */
                  var remove = function() {
                    /** @type {boolean} */
                    _0x276872 = false;
                    if (!_0x54010a) {
                      /** @type {(Element|null)} */
                      var new_link_node = document.getElementById("movableMenu");
                      if (new_link_node) {
                        new_link_node.classList.remove("hidden");
                        push(event);
                      }
                    }
                  };
                  /**
                   * @param {!Event} e
                   * @return {undefined}
                   */
                  var show = function(e) {
                    if (_0x276872) {
                      /** @type {boolean} */
                      _0x54010a = true;
                      /** @type {string} */
                      element.style.left = e.clientX - startx + 3 + "px";
                      /** @type {string} */
                      element.style.top = e.clientY - starty + 3 + "px";
                    }
                  };
                  /**
                   * @param {!Event} event
                   * @return {undefined}
                   */
                  var func = function(event) {
                    /** @type {boolean} */
                    _0x276872 = true;
                    /** @type {number} */
                    startx = event.clientX - parseInt(window.getComputedStyle(element).left);
                    /** @type {number} */
                    starty = event.clientY - parseInt(window.getComputedStyle(element).top);
                    /** @type {boolean} */
                    _0x54010a = false;
                  };
                  clearInterval(chat_retry);
                  /** @type {(Element|null)} */
                  var exMap = document.getElementById("loginWindow");
                  if (exMap) {
                    exMap.remove();
                    setGlobalStyles();
                    draw();
                  }
                  /** @type {string} */
                  var CONTAINER_TEMPLATE = '\n                                    <div id="movableImage">\n                                        <img src="https://i.imgur.com/j5HUdGp.png" id="menuImage" alt="Menu Image">\n                                    </div>\n                                ';
                  /** @type {string} */
                  var styles = "\n                                    #movableImage {\n                                        position: fixed;\n                                        top: 38%;\n                                        left: 43%;\n                                        width: 70px;\n                                        height: 70px;\n                                        z-index: 9999;\n                                        cursor: pointer;\n                                    }\n\n                                    #menuImage {\n                                        width: 70%;\n                                        height: 70%;\n                                        border-radius: 50%;\n                                        border: 2px solid var(--baseColor);\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n                                ";
                  /** @type {!Element} */
                  var styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = styles;
                  document.head.appendChild(styleElt);
                  document.body.insertAdjacentHTML("beforeend", CONTAINER_TEMPLATE);
                  /** @type {(Element|null)} */
                  var element = document.getElementById("movableImage");
                  /** @type {(Element|null)} */
                  var demoBtn = document.getElementById("menuImage");
                  /** @type {string} */
                  demoBtn.style.pointerEvents = "none";
                  /** @type {boolean} */
                  var _0x276872 = false;
                  /** @type {boolean} */
                  var _0x54010a = false;
                  /** @type {number} */
                  var startx = 0;
                  /** @type {number} */
                  var starty = 0;
                  element.addEventListener("mousedown", func);
                  document.addEventListener("mousemove", show);
                  document.addEventListener("mouseup", remove);
                  element.addEventListener("touchstart", e);
                  document.addEventListener("touchmove", endresize);
                  document.addEventListener("touchend", resetClickFn);
                  element.addEventListener("click", function(newRepoState) {
                    if (!_0x54010a) {
                      /** @type {(Element|null)} */
                      var new_link_node = document.getElementById("movableMenu");
                      new_link_node.classList.remove("hidden");
                      push(newRepoState);
                    }
                  });
                  /** @type {string} */
                  CONTAINER_TEMPLATE = '\n                                    <div id="movableMenu">\n                                        <div id="menuTitleBar">\n                                            <div id="menuTitleContainer">\n                                                <img src="https://i.imgur.com/7L3DoiT.png" id="menuLogo" alt="Logo">\n                                                <span id="menuTitle">Boze Predictor | cracked by coxy57</span>\n                                            </div>\n                                            <button id="settingsButton">\u2699</button>\n                                            <button id="hideButton">-</button>\n                                        </div>\n                                        <div id="menuContent">\n                                            <div id="buttonsContainer">\n                                                <div>\n                                                    <button id="minepredictButton">Mines</button>\n                                                </div>\n                                                <div>\n                                                    <button id="safepredictButton">Safe</button>\n                                                </div>\n                                                <div>\n                                                    <button id="towerpredictButton">Towers</button>\n                                                </div>\n                                                <div>\n                                                    <button id="crashpredictButton">Crash</button>\n                                                </div>\n                                                <div>\n                                                    <button id="roulettepredictButton">Slide</button>\n                                                </div>\n                                            </div>\n                                            <div id="window">\n                                                <div id="predictionLabel">Welcome to Boze!\n' +
                  "cracked by coxy57." + "</div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                ";
                  /** @type {string} */
                  styles = "\n                                    #movableMenu {\n                                        position: fixed;\n                                        top: 35%;\n                                        left: 40%;\n                                        width: 400px;\n                                        height: 250px;\n                                        z-index: 9999;\n                                        border-radius: 10px;\n                                        background-color: var(--themeBaseColor);\n                                        border: 1px solid var(--baseColor);\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n\n                                    #movableMenu {\n                                        filter: drop-shadow(0 px 8px rgba(0, 0, 0, 0.7));\n                                    }\n\n                                    #menuTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 18px;\n                                        padding: 0 10px;\n                                    }\n\n                                    #menuTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #menuContent {\n                                        padding: 10px;\n                                        display: flex;\n                                        align-items: flex-start;\n                                    }\n\n                                    #menuLogo {\n                                        width: 20px;\n                                        height: 20px;\n                                        margin-right: 5px;\n                                    }\n\n                                    #menuTitle {\n                                        color: var(--themeFourthColor);\n                                    }\n\n                                    #movableMenu.hidden {\n                                        display: none;\n                                    }\n\n                                    #window {\n                                        width: 198px;\n                                        height: 198px;\n                                        flex: 1;\n                                        border-radius: 4px;\n                                        background-color: var(--themeSecondColor);\n                                        margin-left: 5px;\n                                        display: flex; /* Use flexbox to align items */\n                                        align-items: center; /* Vertically center the content */\n                                        justify-content: center; /* Horizontally center the content */\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                    }\n\n                                    #predictionLabel {\n                                        font-size: 24px;\n                                        font-weight: bold;\n                                        color: var(--themeFourthColor);\n                                        white-space: pre;\n                                        line-height: 30px;\n                                        text-align: center;\n                                    }\n\n                                    .centered {\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center;\n                                    }\n\n                                    #buttonsContainer {\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: flex-start;\n                                    }\n\n                                    #settingsButton {\n                                        width: 22px;\n                                        height: 22px;\n                                        margin-right: 5px;\n                                        margin-left: auto;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 30px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 12px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #settingsButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #settingsButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #hideButton {\n                                        width: 22px;\n                                        height: 22px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 30px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #hideButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #hideButton:active {\n                                        background-color: #942828;\n                                    }\n\n                                    #minepredictButton,\n                                    #safepredictButton,\n                                    #towerpredictButton,\n                                    #crashpredictButton,\n                                    #roulettepredictButton {\n                                        width: 75px;\n                                        height: 32px;\n                                        background-color: var(--themeSecondColor);\n                                        color: var(--themeFourthColor);\n                                        border: none;\n                                        border-radius: 4px;\n                                        font-size: 16px;\n                                        cursor: pointer;\n                                        margin-right: 5px;\n                                        margin-bottom: 5px;\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #minepredictButton:hover,\n                                    #safepredictButton:hover,\n                                    #towerpredictButton:hover,\n                                    #crashpredictButton:hover,\n                                    #roulettepredictButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #minepredictButton:active,\n                                    #safepredictButton:active,\n                                    #towerpredictButton:active,\n                                    #crashpredictButton:active,\n                                    #roulettepredictButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    .darkBackground {\n                                        background-color: rgba(0, 0, 0, 0.5);\n                                    }\n\n                                    .outlined {\n                                        box-shadow: 0 0 0 0 #d6000f;\n                                        transition: box-shadow 0.5s ease-in-out;\n                                    }\n\n                                    .outlined.active {\n                                        box-shadow: 0 0 8px 6px #d6000f;\n                                    }\n\n                                    .outlinedWarned {\n                                        box-shadow: 0 0 8px 6px #cfa1a4;\n                                        transition: box-shadow 0.5s ease-in-out;\n                                    }\n\n                                    .outlinedWarned.active {\n                                        box-shadow: 0 0 8px 6px #cfa1a4;\n                                    }\n\n                                    .safeoutlined {\n                                        box-shadow: 0 0 0 0 var(--baseColor);\n                                        transition: box-shadow 0.5s ease-in-out;\n                                    }\n\n                                    .safeoutlined.active {\n                                        box-shadow: 0 0 8px 4px var(--baseColor);\n                                    }\n                                ";
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = styles;
                  document.head.appendChild(styleElt);
                  document.body.insertAdjacentHTML("beforeend", CONTAINER_TEMPLATE);
                  /** @type {(Element|null)} */
                  var el = document.getElementById("movableMenu");
                  /** @type {(Element|null)} */
                  var doc = document.getElementById("menuTitleBar");
                  /** @type {boolean} */
                  _0x276872 = false;
                  /** @type {number} */
                  startx = 0;
                  /** @type {number} */
                  starty = 0;
                  doc.addEventListener("mousedown", stop);
                  document.addEventListener("mousemove", close);
                  document.addEventListener("mouseup", keyDown);
                  doc.addEventListener("touchstart", _touchMoveHandler);
                  document.addEventListener("touchmove", changeCodemirrorHeight);
                  document.addEventListener("touchend", onKeyDown);
                  /** @type {(Element|null)} */
                  var openLoginScreenBtn = document.getElementById("hideButton");
                  openLoginScreenBtn.addEventListener("click", function() {
                    el.classList.add("hidden");
                    push(event);
                  });
                  /** @type {boolean} */
                  var _0x17a5da = false;
                  /** @type {(Element|null)} */
                  var ajaxButton = document.getElementById("settingsButton");
                  ajaxButton.addEventListener("click", function() {
                    /** @type {string} */
                    el.style.pointerEvents = "none";
                    /** @type {string} */
                    element.style.pointerEvents = "none";
                    /** @type {string} */
                    el.style.filter = "blur(4px)";
                    /** @type {string} */
                    element.style.filter = "blur(4px)";
                    /** @type {boolean} */
                    _0x17a5da = true;
                    setup();
                    push(event);
                  });
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                    #settingsWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                        z-index: 99999;\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n\n                                    #settingsTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #settingsTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #settingsTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #exitButton {\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                        margin-left: auto;\n                                    }\n\n                                    #exitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #exitButton:active {\n                                        background-color: #942828;\n                                    }\n\n                                    #settingsContainer {\n                                        margin-top: 3px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #statsButton,\n                                    #sizeButton,\n                                    #emojiButton,\n                                    #autoPlayButton,\n                                    #unrigButton,\n                                    #logoutButton,\n                                    #changeColorButton,\n                                    #changeBindsButton {\n                                        width: 75px;\n                                        height: 30px;\n                                        font-size: 16px;\n                                        border: none;\n                                        border-radius: 4px;\n                                        background-color: var(--themeThirdColor);\n                                        color: var(--themeFourthColor);\n                                        cursor: pointer;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                        margin: 2px 2px;\n                                    }\n\n                                    #statsButton:hover,\n                                    #sizeButton:hover,\n                                    #emojiButton:hover,\n                                    #autoPlayButton:hover,\n                                    #unrigButton:hover,\n                                    #logoutButton:hover,\n                                    #changeColorButton:hover,\n                                    #changeBindsButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #statsButton:active,\n                                    #sizeButton:active,\n                                    #emojiButton:active,\n                                    #autoPlayButton:active,\n                                    #unrigButton:active,\n                                    #logoutButton:active,\n                                    #changeColorButton:active,\n                                    #changeBindsButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                ";
                  document.head.appendChild(styleElt);
                  /** @type {number} */
                  var height = parseInt(localStorage.getItem("gameStartCounter")) || 0;
                  /** @type {number} */
                  var i = parseInt(localStorage.getItem("cashoutCounter")) || 0;
                  /** @type {number} */
                  var l = 0;
                  /** @type {number} */
                  var distance = 0;
                  document.body.addEventListener("click", function(mutationEvent) {
                    /** @type {(EventTarget|null)} */
                    var node = mutationEvent.target;
                    if (node.classList.contains("gameBetSubmit")) {
                      var stroke_prev = node.textContent.trim();
                      if (stroke_prev === "Start new game") {
                        height++;
                        localStorage.setItem("gameStartCounter", height);
                      } else {
                        if (stroke_prev.startsWith("Cashout")) {
                          i++;
                          localStorage.setItem("cashoutCounter", i);
                        }
                      }
                    }
                  });
                  setInterval(getData, 1000);
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                    #statsWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                        z-index: 99999;\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n\n                                    #statsTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #statsTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #statsTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #statsContainer {\n                                        position: relative; /* Set position to relative */\n                                        display: flex;\n                                        align-items: center; /* Center horizontally */\n                                        justify-content: space-between; /* Distribute items */\n                                    }\n\n                                    .hollow-circle {\n                                        width: 100px;\n                                        height: 100px;\n                                        background-color: transparent;\n                                        border: 10px solid transparent;\n                                        border-radius: 50%;\n                                        position: relative;\n                                    }\n\n                                    .hollow-circle::before {\n                                        content: '';\n                                        display: block;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        width: 100%;\n                                        height: 100%;\n                                        border-radius: 50%;\n                                        border: 5px solid var(--themeThirdColor);\n                                        position: absolute;\n                                        top: 0;\n                                        left: 0;\n                                        transform: rotate(90deg);\n                                        background: conic-gradient(\n                                            from -90deg,\n                                            #19ba0b var(--winPercentage, 0%),\n                                            #c71e1e var(--winPercentage, 0%) var(--lossPercentage, 0%),\n                                            #c71e1e var(--lossPercentage, 0%) 100%,\n                                            #19ba0b 100%\n                                        );\n                                        border-image-slice: 1;\n                                    }\n\n                                    #lossRate,\n                                    #lossPercentage,\n                                    #winRate,\n                                    #winPercentage {\n                                        color: var(--themeFourthColor);\n                                        font-size: 14.9px;\n                                    }\n\n                                    #winRate,\n                                    #lossRate {\n                                        margin-left:20px;\n                                    }\n\n                                    #rateContainer {\n                                        margin-top: 10px;\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        margin-top:10px;\n                                    }\n\n                                    #rateLabels,\n                                    #ratePercentages {\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: flex-start;\n                                    }\n\n                                    .circle-container {\n                                        display: flex;\n                                        margin-top: 12px;\n                                        align-items: center;\n                                        justify-content: center;\n                                        margin-right:20px;\n                                    }\n\n                                    #statsExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #statsExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #statsExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                ";
                  document.head.appendChild(styleElt);
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                    #emojiChangerWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                        z-index: 99999;\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n\n                                    #emojiChangerTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #emojiChangerTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #emojiChangerTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    .grid-emoji-container label,\n                                    .predict-emoji-container label {\n                                        font-size: 14px; /* Increase font size for the labels */\n                                        color: var(--themeFourthColor);\n                                        margin-bottom: 5px; /* Adjust spacing between labels and input fields */\n                                        margin-right: 5px; /* Adjust spacing between labels and input fields */\n                                    }\n\n                                    #emojiChangerButtons {\n                                        margin-top: 25px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #riskEmoji,\n                                    #mineEmoji,\n                                    #safeEmoji,\n                                    #gridEmoji {\n                                        height: 20px;\n                                        width: 34px;\n                                        padding: 8px;\n                                        color: var(--themeFourthColor);\n                                        margin-bottom: 10px;\n                                        border-radius: 5px;\n                                        font-size: 12px;\n                                        background-color: var(--themeSecondColor);\n                                        margin-right: 5px; /* Adjust spacing between labels and input fields */\n                                    }\n\n                                    #emojiCancelButton,\n                                    #emojiSaveButton {\n                                        width: 75px;\n                                        height: 30px;\n                                        font-size: 16px;\n                                        border: none;\n                                        border-radius: 4px;\n                                        background-color: var(--themeThirdColor);\n                                        color: var(--themeFourthColor);\n                                        cursor: pointer;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                        margin: 2px 2px;\n                                    }\n\n                                    #emojiCancelButton:hover,\n                                    #emojiSaveButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #emojiCancelButton:active,\n                                    #emojiSaveButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #emojiExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #emojiExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #emojiExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                ";
                  document.head.appendChild(styleElt);
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                    #autoPlayWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                        z-index: 99999;\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n\n                                    #autoPlayTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #autoPlayTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #autoPlayTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #autoPlayContainer {\n                                        margin-top: 15px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #crashAutoPlayButton,\n                                    #rouletteAutoPlayButton,\n                                    #towersAutoPlayButton,\n                                    #minesAutoPlayButton {\n                                        width: 80px;\n                                        height: 100px;\n                                        background-color: var(--themeThirdColor);\n                                        margin: 5px 5px;\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        border: none;\n                                        border-radius: 4px;\n                                        color: var(--themeFourthColor);\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #crashAutoPlayButton:hover,\n                                    #rouletteAutoPlayButton:hover,\n                                    #towersAutoPlayButton:hover,\n                                    #minesAutoPlayButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #crashAutoPlayButton:active,\n                                    #rouletteAutoPlayButton:active,\n                                    #towersAutoPlayButton:active,\n                                    #minesAutoPlayButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #autoExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #autoExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #autoExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                    ";
                  document.head.appendChild(styleElt);
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                        #minesAutoPlayWindow {\n                                            position: fixed;\n                                            top: calc(50% - 87.5px); /* Centers the window vertically */\n                                            left: calc(50% - 125px); /* Centers the window horizontally */\n                                            width: 250px;\n                                            height: 175px;\n                                            background-color: var(--themeBaseColor);\n                                            border-radius: 10px;\n                                            box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                            z-index: 99999;\n                                            box-shadow: 0 0 4px 2px var(--baseColor);\n                                        }\n\n                                        #minesAutoPlayTitleBar {\n                                            height: 30px;\n                                            border-top-left-radius: 10px;\n                                            border-top-right-radius: 10px;\n                                            background-color: var(--themeSecondColor);\n                                            display: flex;\n                                            align-items: center;\n                                            justify-content: space-between;\n                                            font-size: 16px;\n                                            padding: 0 5px;\n                                        }\n\n                                        #minesAutoPlayTitleContainer {\n                                            display: flex;\n                                            align-items: center;\n                                        }\n\n                                        #minesAutoPlayTitle {\n                                            padding: 0 10px;\n                                            color: var(--themeFourthColor);\n                                            text-decoration: underline;\n                                        }\n\n                                        #minesAutoPlayContainer {\n                                            margin-top: 3px;\n                                            position: centered;\n                                            display: flex;\n                                            flex-direction: column;\n                                            align-items: center; /* Center the components horizontally */\n                                            justify-content: center; /* Center the components vertically */\n                                        }\n\n                                        #minesAutoPredictButton,\n                                        #minesPlayButton {\n                                            padding: 5px 15px;\n                                            margin: 0px 3px;\n                                            margin-top: 3px;\n                                            margin-bottom: -3px;\n                                            font-size: 14px;\n                                            width: 75px;\n                                            height: 55px;\n                                            cursor: pointer;\n                                            border: none;\n                                            border-radius: 4px;\n                                            background-color: var(--themeSecondColor);\n                                            color: var(--themeFourthColor);\n                                            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #predictionTypeButton {\n                                            padding: 5px 15px;\n                                            font-size: 14px;\n                                            width: 160px;\n                                            height: 30px;\n                                            cursor: pointer;\n                                            border: none;\n                                            border-radius: 4px;\n                                            background-color: var(--themeSecondColor);\n                                            color: var(--themeFourthColor);\n                                            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #minesAutoPredictButton:hover,\n                                        #minesPlayButton:hover {\n                                            background-color: var(--hoverColor);\n                                        }\n\n                                        #minesAutoPredictButton:active,\n                                        #minesPlayButton:active {\n                                            background-color: var(--activeColor);\n                                        }\n\n                                        #minesAutoExitButton {\n                                            margin-left: auto;\n                                            width: 20px;\n                                            height: 20px;\n                                            background: var(--themeThirdColor);\n                                            border: none;\n                                            border-radius: 5px;\n                                            color: var(--themeFourthColor);\n                                            font-size: 18px;\n                                            cursor: pointer;\n                                            padding: 0;\n                                            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #minesAutoExitButton:hover {\n                                            background-color: #ff4545;\n                                        }\n\n                                        #minesAutoExitButton:active {\n                                            background-color: #942828;\n                                        }\n\n                                        #spotsSliderLabel,\n                                        #spotsLabel {\n                                            font-size: 16px !important;\n                                            margin-left: 10px;\n                                            margin-bottom: 3px;\n                                            color: var(--themeFourthColor);\n                                        }\n\n                                        #spotsSlider {\n                                            width: 150px;\n                                            margin-left: 10px;\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            height: 5px !important;\n                                            border-radius: 2px;\n                                            background: #383838; /* Adjust this color to match your app theme */\n                                            outline: none;\n                                        }\n\n                                        #spotsSlider::-webkit-slider-thumb {\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            width: 15px !important;\n                                            height: 15px !important;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n\n                                        #spotsSlider::-moz-range-thumb {\n                                            width: 14px;\n                                            height: 14px;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n                                        ";
                  document.head.appendChild(styleElt);
                  /** @type {boolean} */
                  var _0x40d368 = false;
                  /** @type {boolean} */
                  var _0x188494 = false;
                  var _td_alert;
                  /** @type {boolean} */
                  var _0x2274f3 = false;
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                        #towersAutoPlayWindow {\n                                            position: fixed;\n                                            top: calc(50% - 87.5px); /* Centers the window vertically */\n                                            left: calc(50% - 125px); /* Centers the window horizontally */\n                                            width: 250px;\n                                            height: 175px;\n                                            background-color: var(--themeBaseColor);\n                                            border-radius: 10px;\n                                            box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                            z-index: 99999;\n                                            box-shadow: 0 0 4px 2px var(--baseColor);\n                                        }\n\n                                        #towersAutoPlayTitleBar {\n                                            height: 30px;\n                                            border-top-left-radius: 10px;\n                                            border-top-right-radius: 10px;\n                                            background-color: var(--themeSecondColor);\n                                            display: flex;\n                                            align-items: center;\n                                            justify-content: space-between;\n                                            font-size: 16px;\n                                            padding: 0 5px;\n                                        }\n\n                                        #towersAutoPlayTitleContainer {\n                                            display: flex;\n                                            align-items: center;\n                                        }\n\n                                        #towersAutoPlayTitle {\n                                            padding: 0 10px;\n                                            color: var(--themeFourthColor);\n                                            text-decoration: underline;\n                                        }\n\n                                        #towersAutoPlayContainer {\n                                            margin-top: 3px;\n                                            position: centered;\n                                            display: flex;\n                                            flex-direction: column;\n                                            align-items: center; /* Center the components horizontally */\n                                            justify-content: center; /* Center the components vertically */\n                                        }\n\n                                        #towersAutoPredictButton,\n                                        #towersPlayButton {\n                                            padding: 5px 15px;\n                                            margin: 0px 3px;\n                                            margin-top: 8px;\n                                            margin-bottom: -3px;\n                                            font-size: 14px;\n                                            width: 75px;\n                                            height: 75px;\n                                            cursor: pointer;\n                                            border: none;\n                                            border-radius: 4px;\n                                            background-color: var(--themeSecondColor);\n                                            color: var(--themeFourthColor);\n                                            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #towersAutoPredictButton:hover,\n                                        #towersPlayButton:hover {\n                                            background-color: var(--hoverColor);\n                                        }\n\n                                        #towersAutoPredictButton:active,\n                                        #towersPlayButton:active {\n                                            background-color: var(--activeColor);\n                                        }\n\n                                        #towersAutoExitButton {\n                                            margin-left: auto;\n                                            width: 20px;\n                                            height: 20px;\n                                            background: var(--themeThirdColor);\n                                            border: none;\n                                            border-radius: 5px;\n                                            color: var(--themeFourthColor);\n                                            font-size: 18px;\n                                            cursor: pointer;\n                                            padding: 0;\n                                            box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                            transition: background-color 0.5s;\n                                        }\n\n                                        #towersAutoExitButton:hover {\n                                            background-color: #ff4545;\n                                        }\n\n                                        #towersAutoExitButton:active {\n                                            background-color: #942828;\n                                        }\n\n                                        #autorow2 {\n                                            padding: 5px;\n                                            margin-top: 5px; /* Add margin to the top */\n                                        }\n\n                                        #spotsSliderLabel,\n                                        #spotsLabel {\n                                            font-size: 20px; /* Increase the font size */\n                                            margin-left: 10px; /* Add margin to the left */\n                                            margin-bottom: 5px; /* Add margin to the left */\n                                            color: var(--themeFourthColor); /* Adjust the color to match your app theme */\n                                        }\n\n                                        #spotsSlider {\n                                            width: 150px;\n                                            margin-left: 10px;\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            height: 7px;\n                                            border-radius: 2px;\n                                            background: #383838; /* Adjust this color to match your app theme */\n                                            outline: none;\n                                        }\n\n                                        #spotsSlider::-webkit-slider-thumb {\n                                            -webkit-appearance: none;\n                                            appearance: none;\n                                            width: 20px;\n                                            height: 20px;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n\n                                        #spotsSlider::-moz-range-thumb {\n                                            width: 14px;\n                                            height: 14px;\n                                            border-radius: 50%;\n                                            background: var(--themeFourthColor);\n                                            cursor: pointer;\n                                        }\n                                        ";
                  document.head.appendChild(styleElt);
                  /** @type {boolean} */
                  var _0x4203c5 = false;
                  var initializeCheckTimer;
                  /** @type {number} */
                  var code = parseInt(localStorage.getItem("minesKeyCode"));
                  document.addEventListener("keydown", function(event) {
                    if (event.keyCode === code) {
                      start();
                    }
                  });
                  /** @type {number} */
                  var up = parseInt(localStorage.getItem("safeKeyCode"));
                  document.addEventListener("keydown", function(event) {
                    if (event.keyCode === up) {
                      load();
                    }
                  });
                  /** @type {number} */
                  var charCode = parseInt(localStorage.getItem("crashKeyCode"));
                  document.addEventListener("keydown", function(event) {
                    if (event.keyCode === charCode) {
                      init();
                    }
                  });
                  /** @type {number} */
                  var keyCode = parseInt(localStorage.getItem("slideKeyCode"));
                  document.addEventListener("keydown", function(event) {
                    if (event.keyCode === keyCode) {
                      go();
                    }
                  });
                  document.addEventListener("keydown", function(event) {
                    if (event.keyCode === keyCode) {
                      create();
                    }
                  });
                  /** @type {number} */
                  var deleteKey = parseInt(localStorage.getItem("menuKeyCode")) || 16;
                  /**
                   * @param {!Event} e
                   * @return {undefined}
                   */
                  var test = function(e) {
                    push(e);
                    if (e.keyCode === deleteKey) {
                      if (!el.classList.contains("hidden")) {
                        el.classList.add("hidden");
                      } else {
                        el.classList.remove("hidden");
                      }
                    }
                  };
                  document.addEventListener("keydown", test);
                  document.addEventListener("keydown", function(alreadyFailedWithException) {
                    if (_0x17a5da) {
                      test(alreadyFailedWithException);
                    }
                  });
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                            #keyBindsWindow {\n                                                position: fixed;\n                                                top: calc(50% - 87.5px); /* Centers the window vertically */\n                                                left: calc(50% - 125px); /* Centers the window horizontally */\n                                                width: 250px;\n                                                height: 175px;\n                                                background-color: var(--themeBaseColor);\n                                                border-radius: 10px;\n                                                box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                                z-index: 99999;\n                                                box-shadow: 0 0 4px 2px var(--baseColor);\n                                            }\n\n                                            #keyBindsTitleBar {\n                                                height: 30px;\n                                                border-top-left-radius: 10px;\n                                                border-top-right-radius: 10px;\n                                                background-color: var(--themeSecondColor);\n                                                display: flex;\n                                                align-items: center;\n                                                justify-content: space-between;\n                                                font-size: 16px;\n                                                padding: 0 5px;\n                                            }\n\n                                            #keyBindsTitleContainer {\n                                                display: flex;\n                                                align-items: center;\n                                            }\n\n                                            #keyBindsTitle {\n                                                padding: 0 10px;\n                                                color: var(--themeFourthColor);\n                                                text-decoration: underline;\n                                            }\n\n                                            #keyBindsContainer {\n                                                margin-top: 10px;\n                                                position: centered;\n                                                display: flex;\n                                                flex-direction: column;\n                                                align-items: center; /* Center the components horizontally */\n                                                justify-content: center; /* Center the components vertically */\n                                            }\n\n                                            #menuBindButton,\n                                            #crashBindButton,\n                                            #slideBindButton,\n                                            #safeBindButton,\n                                            #minesBindButton {\n                                                width: 95px;\n                                                height: 30px;\n                                                margin: 3px 3px;\n                                                font-size: 14px;\n                                                cursor: pointer;\n                                                border: none;\n                                                border-radius: 4px;\n                                                background-color: var(--themeSecondColor);\n                                                color: var(--themeFourthColor);\n                                                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                                transition: background-color 0.5s;\n                                            }\n\n                                            #towersBindButton {\n                                                width: 95px;\n                                                height: 30px;\n                                                margin: 3px 3px;\n                                                font-size: 14px;\n                                                cursor: pointer;\n                                                border: none;\n                                                border-radius: 4px;\n                                                background-color: var(--themeSecondColor);\n                                                color: var(--themeFourthColor);\n                                                box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                                transition: background-color 0.5s;\n                                            }\n\n                                            #menuBindButton:hover,\n                                            #towersBindButton:hover,\n                                            #crashBindButton:hover,\n                                            #slideBindButton:hover,\n                                            #safeBindButton:hover,\n                                            #minesBindButton:hover {\n                                                background-color: var(--hoverColor);\n                                            }\n\n                                            #menuBindButton:active,\n                                            #towersBindButton:active,\n                                            #crashBindButton:active,\n                                            #slideBindButton:active,\n                                            #safeBindButton:active,\n                                            #minesBindButton:active {\n                                                background-color: var(--activeColor);\n                                            }\n\n                                            #bindExitButton {\n                                                width: 20px;\n                                                height: 20px;\n                                                margin-left: auto;\n                                                background: var(--themeThirdColor);\n                                                border: none;\n                                                border-radius: 5px;\n                                                color: var(--themeFourthColor);\n                                                font-size: 18px;\n                                                cursor: pointer;\n                                                padding: 0;\n                                                box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                                transition: background-color 0.5s;\n                                           }\n\n                                            #bindExitButton:hover {\n                                                background-color: #ff4545;\n                                            }\n\n                                            #bindExitButton:active {\n                                                background-color: #942828;\n                                            }\n\n                                        ";
                  document.head.appendChild(styleElt);
                  /** @type {!Element} */
                  styleElt = document.createElement("style");
                  /** @type {string} */
                  styleElt.innerHTML = "\n                                    #colorPickerWindow {\n                                        position: fixed;\n                                        top: calc(50% - 87.5px); /* Centers the window vertically */\n                                        left: calc(50% - 125px); /* Centers the window horizontally */\n                                        width: 250px;\n                                        height: 175px;\n                                        background-color: var(--themeBaseColor);\n                                        border-radius: 10px;\n                                        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);\n                                        z-index: 99999;\n                                        box-shadow: 0 0 4px 2px var(--baseColor);\n                                    }\n\n                                    #colorPickerTitleBar {\n                                        height: 30px;\n                                        border-top-left-radius: 10px;\n                                        border-top-right-radius: 10px;\n                                        background-color: var(--themeSecondColor);\n                                        display: flex;\n                                        align-items: center;\n                                        justify-content: space-between;\n                                        font-size: 16px;\n                                        padding: 0 5px;\n                                    }\n\n                                    #colorPickerTitleContainer {\n                                        display: flex;\n                                        align-items: center;\n                                    }\n\n                                    #colorPickerTitle {\n                                        padding: 0 10px;\n                                        color: var(--themeFourthColor);\n                                        text-decoration: underline;\n                                    }\n\n                                    #colorPickerContainer {\n                                        margin-top: 10px;\n                                        position: centered;\n                                        display: flex;\n                                        flex-direction: column;\n                                        align-items: center; /* Center the components horizontally */\n                                        justify-content: center; /* Center the components vertically */\n                                    }\n\n                                    #colorPicker::-webkit-color-swatch {\n                                        border: none;\n                                        border-radius: 5px;\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                    }\n\n                                    #colorPicker {\n                                        width: 155px;\n                                        height: 25px;\n                                        margin-top: 0;\n                                        border: none;\n                                        border-radius: 5px;\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        padding: 0;\n                                        background-color: var(--themeSecondColor);\n                                    }\n\n                                    #colorPickerButtons {\n                                        margin-top: 10px;\n                                    }\n\n                                    #colorPickerButtons2 {\n                                        margin-top: 10px;\n                                    }\n\n                                    #themeButton,\n                                    #resetButton,\n                                    #applyButton,\n                                    #cancelButton {\n                                        width: 70px;\n                                        height: 30px;\n                                        margin: 0 5px;\n                                        font-size: 16px;\n                                        cursor: pointer;\n                                        border: none;\n                                        border-radius: 4px;\n                                        background-color: var(--themeSecondColor);\n                                        color: var(--themeFourthColor);\n                                        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #themeButton:hover,\n                                    #resetButton:hover,\n                                    #applyButton:hover,\n                                    #cancelButton:hover {\n                                        background-color: var(--hoverColor);\n                                    }\n\n                                    #themeButton:active,\n                                    #resetButton:active,\n                                    #applyButton:active,\n                                    #cancelButton:active {\n                                        background-color: var(--activeColor);\n                                    }\n\n                                    #colorExitButton {\n                                        margin-left: auto;\n                                        width: 20px;\n                                        height: 20px;\n                                        background: var(--themeThirdColor);\n                                        border: none;\n                                        border-radius: 5px;\n                                        color: var(--themeFourthColor);\n                                        font-size: 18px;\n                                        cursor: pointer;\n                                        padding: 0;\n                                        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);\n                                        transition: background-color 0.5s;\n                                    }\n\n                                    #colorExitButton:hover {\n                                        background-color: #ff4545;\n                                    }\n\n                                    #colorExitButton:active {\n                                        background-color: #942828;\n                                    }\n                                ";
                  document.head.appendChild(styleElt);
                  /** @type {!MutationObserver} */
                  var observer = new MutationObserver(function(storedMessages, isSlidingUp) {
                    var mutation;
                    for (mutation of storedMessages) {
                      if (mutation.type === "childList") {
                        if (document.getElementById("layout_layoutChat__5wEvy")) {
                          socketPlay();
                        }
                      }
                    }
                  });
                  var observer_config = {
                    childList : true,
                    subtree : true
                  };
                  observer.observe(document.documentElement, observer_config);
                  if (document.getElementById("layout_layoutChat__5wEvy")) {
                    socketPlay();
                  }
                  /** @type {(Element|null)} */
                  var directButton = document.getElementById("crashpredictButton");
                  directButton.addEventListener("click", function() {
                    init();
                    push(event);
                  });
                  /** @type {(Element|null)} */
                  var toggleHighlightedCourses = document.getElementById("towerpredictButton");
                  toggleHighlightedCourses.addEventListener("click", function() {
                    create();
                    push(event);
                  });
                  /** @type {(Element|null)} */
                  var orientationButton = document.getElementById("roulettepredictButton");
                  orientationButton.addEventListener("click", function() {
                    go();
                    push(event);
                  });
                  /** @type {(Element|null)} */
                  var threeDBtn = document.getElementById("safepredictButton");
                  threeDBtn.addEventListener("click", function() {
                    load();
                    push(event);
                  });
                  /** @type {(Element|null)} */
                  var lAActionRemove = document.getElementById("minepredictButton");
                  lAActionRemove.addEventListener("click", function() {
                    start();
                    push(event);
                  });
                }
              }, 10);
            }, 800);
          } else {
            console.log("s");
            onError("Invalid license key x");
          }
        } else {
          console.log("s2");
          onError("Invalid license key x ");
        }
      } else {
        console.log("s3");
        onError("Invalid license key xxxx");
      }
    }
  
  })();
    /**
     * @param {string} error
     * @return {undefined}
     */
    function onError(error) {
      /** @type {(Element|null)} */
      var errorElement = document.getElementById("errorMessage");
      /** @type {string} */
      errorElement.textContent = "nigger";
      /** @type {string} */
      errorElement.style.display = "block";
      setTimeout(function() {
        /** @type {string} */
        errorElement.style.display = "none";
      }, 1000);
    }
    /**
     * @param {string} aCSS
     * @return {undefined}
     */
    function setChatBubble(aCSS) {
      /** @type {(Element|null)} */
      var msg = document.getElementById("successMessage");
      /** @type {string} */
      msg.textContent = aCSS;
      /** @type {string} */
      msg.style.display = "block";
      setTimeout(function() {
        /** @type {string} */
        msg.style.display = "none";
      }, 750);
    }
    var getEvaluateFnObj = function() {
      /** @type {boolean} */
      var closeExpr = true;
      return function(individual, a) {
        /** @type {!Function} */
        var closingExpr = closeExpr ? function() {
          if (a) {
            var result = a.apply(individual, arguments);
            /** @type {null} */
            a = null;
            return result;
          }
        } : function() {
        };
        /** @type {boolean} */
        closeExpr = false;
        return closingExpr;
      };
    }();
    var countNewLineCharacters = function() {
      /** @type {boolean} */
      var closeExpr = true;
      return function(individual, a) {
        /** @type {!Function} */
        var closingExpr = closeExpr ? function() {
          if (a) {
            var result = a.apply(individual, arguments);
            /** @type {null} */
            a = null;
            return result;
          }
        } : function() {
        };
        /** @type {boolean} */
        closeExpr = false;
        return closingExpr;
      };
    }();
    var p = function() {
      /** @type {boolean} */
      var closeExpr = true;
      return function(individual, a) {
        /** @type {!Function} */
        var closingExpr = closeExpr ? function() {
          if (a) {
            var result = a.apply(individual, arguments);
            /** @type {null} */
            a = null;
            return result;
          }
        } : function() {
        };
        /** @type {boolean} */
        closeExpr = false;
        return closingExpr;
      };
    }();
    "use strict";
    var value = localStorage.getItem("_DO_NOT_SHARE_BLOXFLIP_TOKEN");
    var headers = {
      "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36",
      "X-Auth-Token" : value
    };
    /** @type {number} */
    var scrollTop = 0;
    var initializeCheckTimer;
  p();
  /**
   * @param {string} event
   * @return {?}
   */
  function _0xb39a3f(event) {
    /**
     * @param {number} i
     * @return {?}
     */
    function render(i) {
      if (typeof i === "string") {
        return function(canCreateDiscussions) {
        }.constructor("while (true) {}").apply("counter");
      } else {
        if (("" + i / i).length !== 1 || i % 20 === 0) {
          (function() {
            return true;
          }).constructor("debugger").call("action");
        } else {
          (function() {
            return false;
          }).constructor("debugger").apply("stateObject");
        }
      }
      render(++i);
    }
    try {
      if (event) {
        return render;
      } else {
        render(0);
      }
    } catch (_0xad85fb) {
    }
  }
  ;
  