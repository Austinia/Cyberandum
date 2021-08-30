const quotes = [
  {
    funcname: "setInterval(func, ms)",
    description: "ms마다 func을 실행한다.",
  },
  {
    funcname: "String.padStart(num, str)",
    description: "String의 최소 글자수를 num으로 맞추고 빈칸은 str로 채운다.",
  },
  {
    funcname: "setTimeout(func, ms)",
    description: "ms뒤에 func을 실행한다.",
  },
  {
    funcname: "Math.random()",
    description: "0 과 1 사이의 무작위 난수를 생성한다.",
  },
  {
    funcname: "Math.round(num)",
    description: "num의 소숫점 밑을 반올림 한다.",
  },
  {
    funcname: "Math.ceil(num)",
    description: "cnum의 소숫점 밑을 올림 한다.",
  },
  {
    funcname: "Math.floor(num)",
    description: "num의 소숫점 밑을 내림 한다.",
  },
  {
    funcname: "JSON.stringify(some)",
    description: "some을 스트링을 만든다.",
  },
  {
    funcname: "JSON.parse(str)",
    description: "str을 파싱해 객체나 배열로 되돌린다.",
  },
  {
    funcname: "arr.filter((name) => confidential boolean)",
    description: "조건문이나 리턴문에 대입해 true인 arr배열의 각 요소들을 모아 새 배열을 만든다.",
  },
  {
    funcname: "navigator.geolocation.getCurrentPosition(ok, error)",
    description: "기기의 좌표를 불러온다 성공하면 ok함수를 실패하면 error함수를 실행한다..",
  },
  {
    funcname: "fetch(url).then(func)",
    description: "JS가 url을 불러올때까지 기다리고 그 후에 func를 실행한다.",
  },
];

const funcname = document.querySelector("#quote #tdf");
const description = document.querySelector("#quote #tdfd");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

funcname.innerText = todaysQuote.funcname;
description.innerText = todaysQuote.description;
