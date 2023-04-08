const countOne = (str) => {
  return str.match(/1/g).length;
};

function solution(n) {
  const nOneCnt = countOne(n.toString(2));
  let num = n + 1;

  while (num < 1000000) {
    const numOneCnt = countOne(num.toString(2));

    if (nOneCnt === numOneCnt) break;

    num += 1;
  }

  return num;
}
