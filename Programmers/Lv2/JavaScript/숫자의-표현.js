function solution(n) {
  const maxDigit = Math.floor(n / 2) <= 1 ? n : n / 2;
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < maxDigit; i += 1) {
    sum += i;

    if (n - sum <= 0 || (n - sum) % (i + 1) !== 0) continue;

    cnt += 1;
  }

  return cnt;
}
