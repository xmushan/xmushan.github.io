---
title: JS原型链  # 博客标题（必须）
subtitle: 原型链是JS的主要继承方式  # 博客副标题（可选）
date: 2022-04-21  # 博客日期，会显示在文章头部（可选）
author: Xumushan # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
# header_style: image  # 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）
header_img: /img/firstBlog.jpg  # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）
header_mask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
catalog: true  # 是否启用右侧目录：false / true（可选，默认为 false）
---

``` js
// 每个构造函数中都有一个 prototype函数 （prototype是函数才会有的属性）
function SuperType(){}

// 构造函数中的prototype指向该构造函数的原型，同时原型中也有一个constructor函数指回原型
console.log(SuperType.prototype.constructor == SuperType) // true
// 构造函数中也有一个隐式原型指向Object的原型
console.log(SuperType.prototype.__proto__ == Object.prototype) // true
// Object原型中的隐式原型指向null
console.log(SuperType.prototype.__proto__.__proto__ == null) // true

// 同样的，Object的原型中也有一个构造函数指向Object
console.log(Object.prototype.constructor == Object) // true
console.log(SuperType.prototype.__proto__.constructor == Object) // true

/*
    在创建一个实例之后，再去重写原型对象，将会切换实例和原型对象之间的联系，
    实例仍旧指向老的原型对象，除非新建一个新的实例
*/
const s1 = new SuperType()

// 每个实例中都有一个隐藏原型 __proto__ 指向构造函数的原型
console.log(s1.__proto__ == SuperType.prototype)

// ！！！ 构造函数，实例，原型对象是三个不同的对象
// 原型最主要的问题在于：共享特性
```
