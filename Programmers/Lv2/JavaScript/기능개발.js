function solution(progresses, speeds) {
  const periods = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  const answer = [];
  let deployPeriod = periods.shift();
  let cnt = 1;

  while (periods.length > 0) {
    const topPeriod = periods.shift();

    if (topPeriod <= deployPeriod) {
      cnt += 1;

      continue;
    }

    answer.push(cnt);
    deployPeriod = topPeriod;
    cnt = 1;
  }

  answer.push(cnt);

  return answer;
}
