function solution(priorities, location) {
  const tasks = priorities.map((prior, idx) => ({
    prior,
    idx,
  }));
  const seq = [];

  while (tasks.length > 0) {
    const j = tasks.shift();
    const hasHigherPrior = tasks.some((task) => task.prior > j.prior);

    if (hasHigherPrior) {
      tasks.push(j);

      continue;
    }

    seq.push(j);
  }

  return seq.findIndex((elem) => elem.idx === location) + 1;
}
