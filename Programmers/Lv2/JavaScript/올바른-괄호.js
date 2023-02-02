function solution(s) {
  const brackets = s.split('').reverse();
  const stack = [];

  while (brackets.length > 0) {
    const bracket = brackets.pop();

    if (bracket === '(') {
      stack.push(bracket);

      continue;
    }

    const stackTop = stack.pop();

    if (stackTop === ')' || stackTop === undefined) {
      return false;
    }
  }

  return stack.length === 0;
}
