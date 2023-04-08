function solution(s) {
  const stack = [];

  s.split('').forEach((ch) => {
    if (stack.length === 0) {
      stack.push(ch);

      return;
    }

    if (stack.at(-1) === ch) {
      stack.pop();

      return;
    }

    stack.push(ch);
  });

  return stack.length === 0 ? 1 : 0;
}
