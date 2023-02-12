function solution(clothes) {
  const cloth = {};

  clothes.forEach(([_, type]) => {
    if (cloth[type] !== undefined) {
      cloth[type] += 1;

      return;
    }

    cloth[type] = 1;
  });

  return Object.values(cloth).reduce((acc, val) => acc * (val + 1), 1) - 1;
}
