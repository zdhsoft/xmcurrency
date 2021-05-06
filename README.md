# 人民币处理类

## 历史版本
- 1.0.1
  - * 更新依赖的lodash的版本

## 目标版本是 ES2015 请确认运行环境是否支持ES2015

## 库
- github: https://github.com/zdhsoft/xmcurrency
- npm: https://www.npmjs.com/package/xmcurrency

## 示例代码
```js
let m = [];
let c = new XMCurrency(-12345);
m.push(c);
m.push(c.add(109999));
m.push(c.sub(10));
m.push(c.div(0.01));
m.push(c.mul(10));
m.push(c.mul(0.01));

let tt = new XMCurrency(0);
tt.selfAdd(2805307.04);
tt.selfAdd(4323515.28);
tt.selfAdd(2805307.04);
tt.selfAdd(3281107.13);
m.push(tt);


for(let mm of m) {
    console.log(mm.value, mm.intValue, mm.toString(), mm.format(true, true), mm.Chinese());
}

//输出结果
//-12345 -1234500 -12345.00 ￥-1,2345.00 负壹万贰仟叁佰肆拾伍元整
//97654 9765400 97654.00 ￥9,7654.00 玖万柒仟陆佰伍拾肆元整
//-12355 -1235500 -12355.00 ￥-1,2355.00 负壹万贰仟叁佰伍拾伍元整
//-1234500 -123450000 -1234500.00 ￥-123,4500.00 负壹佰贰拾叁万肆仟伍佰元整
//-123450 -12345000 -123450.00 ￥-12,3450.00 负拾贰万叁仟肆佰伍拾元整
//-123.45 -12345 -123.45 ￥-123.45 负壹佰贰拾叁元肆角伍分
//13215236.49 1321523649 13215236.49 ￥1321,5236.49 壹仟叁佰贰拾壹万伍仟贰佰叁拾陆元肆角玖分
```
