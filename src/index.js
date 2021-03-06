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

/**
 * 三項演算子
 */

const num_val = "a";
console.log(num_val.toLocaleString());

const formattedNum =
  typeof num_val === "number"
    ? num_val.toLocaleString()
    : "数値を入力してください";
console.log(formattedNum);

/**
 * 論理演算子復習
 */

// || は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const number_2 = null;
const fee2 = number_2 && "何か設定された";
console.log(fee2);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "竹内"];
const nameArr2 = nameArr.map((name) => name);
console.log(nameArr2);

nameArr2.map((name, index) => console.log(name, index));

const numArr = [1, 2, 3, 4, 5];
const oddArr = numArr.filter((num) => num % 2 === 1);
console.log(oddArr);

const newNameArr = nameArr.map((name) => name + "さん");
console.log(newNameArr);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
