import "./styles.css";

let myAge = 32;

// テンプレート文字列
const text = `私の年齢は${myAge}歳です`;
console.log(text);

/**
 * 分割代入
 */
const profile = {
  name: "kuroki",
  age: 32
};

// まずはテンプレート文字列を使って上のprofile定数の中身を出力
const message2 = `私の名前は${profile.name}で年齢は${profile.age}です`;
console.log(message2);

// 次に分割代入を使ってproifle定数の中身を分割代入してみる
const { name, age } = profile;
const message3 = `私の名前は${name}で年齢は${age}です`;
console.log(message3);

// 配列についても同様に試してみる
const profile2 = ["kuroki", 32];
const message4 = `私の名前は${profile2[0]}で年齢は${profile2[1]}です`;
console.log(message4);

// 配列の分割代入
const [name2, age2] = profile2;
const message5 = `私の名前は${name2}で年齢は${age2}です`;
console.log(message5);

/**
 * スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
// 分割代入との合わせ技
const [num1, num2, ...num3] = arr2;
console.log(num1);
console.log(num2);
console.log(num3);

// 配列のコピー・結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
