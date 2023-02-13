function solution(brown, yellow) {
  const divisors = [];

  for (let i = 1; i <= yellow; i += 1) {
    if (yellow % i !== 0) continue;

    divisors.push(i);
  }

  const lastIdx = divisors.length - 1;
  const answer = [];

  for (let i = 0; i <= lastIdx / 2; i += 1) {
    const w = divisors[lastIdx - i];
    const h = divisors[i];

    if (2 * w + 2 * h + 4 !== brown) continue;

    answer.push(w + 2, h + 2);
  }

  return answer;
}
