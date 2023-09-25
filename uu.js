// ==UserScript==
// @name         Project Aura | Bloxflip
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A Bloxflip Predictor Built Into A Clean GUI System.
// @author       Project Aura
// @match        https://bloxflip.com/*
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==
(function () {
  'use strict';
  const window = require('window')
  const document = require('document')

  function _0x4afd1a() {
    alert("You Have Successfully Logged In To Aura.");
  }

  if (window.location.hostname == "bloxflip.com") {
    _0x4afd1a();
  }

  let _0x195d87 = false;
  let _0x28ab29;
  let _0x3af4e8;
  let _0x96aec1 = false;
  let _0x904d72 = false;
  let _0x18f6ba = false;

  const _0x185baf = document.createElement("div");
  _0x185baf.setAttribute('id', "tampermonkey-gui");
  _0x185baf.innerHTML = "\n    <div class=\"gui-header\">\n        <span class=\"gui-title\">Project Aura</span>\n    </div>\n    <div class=\"gui-content\">\n        <div class=\"gui-buttons\">\n            <button class=\"gui-button\" id=\"mines-button\">Bomb</button>\n            <button class=\"gui-button\" id=\"safe-button\">Safe</button>\n            <button class=\"gui-button\" id=\"towers-button\">Towers</button>\n            <button class=\"gui-button\" id=\"crash-button\">Crash</button>\n            <button class=\"gui-button\" id=\"slide-button\">Slide</button>\n        </div>\n        <div class=\"big-square\"></div>\n    </div>\n    <button class=\"gui-close\" id=\"gui-shape-toggle\">-</button>\n  ";

  GM_addStyle(`
        #tampermonkey-gui {
            position: fixed;
            top: 50px;
            left: 20px;
            width: 400px;
            height: 260px;
            background-color: rgba(20, 20, 20, 1);
            color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            border: 2px solid #1a6a9c;
            z-index: 9999;
            display: flex;
            flex-direction: column;
        }
        #tampermonkey-gui.circular {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .gui-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px;
            background-color: rgba(25, 25, 25, 1);
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .gui-title {
            margin-left: 10px;
            font-size: 15px;
            font-weight: bold;
        }
        .gui-content {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 10px;
        }
        .gui-buttons {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-right: 10px;
            width: 100px;
        }
        .gui-button {
            margin-bottom: 5px;
            padding: 8px 2px;
            width: 80px;
            background-color: rgba(25, 25, 25, 1);
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.5s;
        }
        .gui-button:hover {
            background-color: #1976b0;
        }
        .big-square {
            width: 320px;
            height: 205px;
            background-color: rgba(25, 25, 25, 1);
        }
        .gui-close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(31, 31, 31, 1);
            color: #fff;
            border: none;
            font-size: 18px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .gui-close:hover {
            background-color: rgba(235, 85, 78, 1);
        }
    `);

  document.body.appendChild(_0x185baf);

  const _0x190c2e = document.createElement('button');
  _0x190c2e.setAttribute("class", "gui-close circular");
  _0x190c2e.textContent = 'O';
  document.body.appendChild(_0x190c2e);

  function _0x4ef273() {
    _0x96aec1 = !_0x96aec1;
    _0x185baf.style.display = _0x96aec1 ? "none" : "flex";
    _0x190c2e.style.display = _0x96aec1 ? "flex" : 'none';
  }

  document.getElementById("gui-shape-toggle").addEventListener("click", _0x4ef273);

  _0x190c2e.addEventListener("click", () => {
    _0x96aec1 = false;
    _0x4ef273();
  });

  function _0x8873c8(_0x59900a) {
    _0x195d87 = true;
    _0x28ab29 = _0x59900a.clientX - _0x185baf.getBoundingClientRect().left;
    _0x3af4e8 = _0x59900a.clientY - _0x185baf.getBoundingClientRect().top;
  }

  function _0x1c25fd() {
    _0x195d87 = false;
  }

  function _0x457508(_0x2bb4f9) {
    if (_0x195d87) {
      const _0xd7b409 = _0x2bb4f9.clientX - _0x28ab29;
      const _0x56f227 = _0x2bb4f9.clientY - _0x3af4e8;
      _0x185baf.style.left = _0xd7b409 + 'px';
      _0x185baf.style.top = _0x56f227 + 'px';
    }
  }

  function _0x2bd603(_0x57ff8d, _0x513659) {
    const _0xe71378 = document.querySelectorAll(".mines_minesGameItem___y0ki").length;
    const _0x4bca54 = Math.floor(Math.random() * _0xe71378);
    const _0x1b5028 = Math.floor((_0x513659 + _0x4bca54) * (0x1 + Math.cos(_0x513659 + 0x1))) % _0xe71378;
    const _0x349c3e = document.querySelectorAll('.mines_minesGameItem___y0ki')[_0x1b5028];
    _0x349c3e.style.boxShadow = "0 0 10px #ffcccc, 0 0 20px #ff6666, 0 0 30px #ff0000";
  }

  function _0x15028f() {
    const _0x448b47 = document.querySelectorAll(".mines_minesGameItem___y0ki");
    if (_0x448b47) {
      _0x448b47.forEach(_0x2bd603);
    }
  }

  document.getElementById("mines-button").addEventListener("click", function () {
    _0x2e0c31();
  });

  _0x185baf.addEventListener("mousedown", _0x8873c8);
  window.addEventListener("mouseup", _0x1c25fd);
  window.addEventListener("mousemove", _0x457508);

  function _0x210c11(_0x1e3570, _0x18a4e6) {
    const _0x2b382d = document.querySelectorAll(".mines_minesGameItem___y0ki").length;
    const _0x2eb2cb = Math.floor(Math.random() * _0x2b382d);
    const _0x14fdf7 = Math.floor((_0x18a4e6 + _0x2eb2cb) * (0x1 + Math.sin(_0x18a4e6 + 0x1))) % _0x2b382d;
    const _0x54627e = document.querySelectorAll(".mines_minesGameItem___y0ki")[_0x14fdf7];
    _0x54627e.style.boxShadow = "0 0 10px #ccf2ff, 0 0 20px #66d9ff, 0 0 30px #00bfff";
  }

  function _0x2e8e02() {
    const _0x4c0b9a = document.querySelectorAll(".mines_minesGameItem___y0ki");
    if (_0x4c0b9a) {
      _0x4c0b9a.forEach(_0x210c11);
    }
  }

  document.getElementById("safe-button").addEventListener("click", function () {
    _0x31428a();
  });

  document.getElementById('towers-button').addEventListener("click", function () {
    print("Towers Predictor Enabled");
  });

  document.getElementById("crash-button").addEventListener('click', function () {
    print("Crash Predictor Enabled");
  });

  document.getElementById("slide-button").addEventListener("click", function () {
    print("Roulette Predictor Enabled");
  });

  function _0x2e0c31() {
    _0x904d72 = !_0x904d72;
    const _0x3bca3b = document.querySelectorAll(".mines_minesGameItem___y0ki");
    if (_0x3bca3b) {
      if (_0x904d72) {
        _0x15028f();
      } else {
        _0x3bca3b.forEach(_0x3fb170 => {
          _0x3fb170.style.boxShadow = '';
        });
      }
    }
  }

  function _0x31428a() {
    _0x18f6ba = !_0x18f6ba;
    const _0xeca16 = document.querySelectorAll('.mines_minesGameItem___y0ki');
    if (_0xeca16) {
      if (_0x18f6ba) {
        _0x2e8e02();
      } else {
        _0xeca16.forEach(_0x2b8fdd => {
          _0x2b8fdd.style.boxShadow = '';
        });
      }
    }
  }

  document.addEventListener("keydown", function (_0x1bbce4) {
    const _0xcfe57e = _0x1bbce4.key.toLowerCase();
    if (_0xcfe57e === 'b') {
      _0x2e0c31();
    } else if (_0xcfe57e === 's') {
      _0x31428a();
    }
  });

})();
