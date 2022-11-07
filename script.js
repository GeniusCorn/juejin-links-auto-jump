// ==UserScript==
// @name             自动跳转掘金链接
// @name:en          juejin-links-auto-jump
// @namespace        https://github.com/GeniusCorn/juejin-links-auto-jump
// @version          0.1
// @description      自动跳转掘金中的链接。
// @description:en   Auto skipping links in Juejin.
// @author           GeniusCorn
// @match            *://link.juejin.cn/*
// ==/UserScript==

;(function () {
  'use strict'
  const button = document.querySelector('.btn')

  button.click()
})()
