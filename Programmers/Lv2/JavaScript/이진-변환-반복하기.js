function solution(s) {
  let cnt = 0;
  let zeros = 0;

  while (s !== '1') {
    const beforeLength = s.length;

    s = s.replaceAll('0', '');

    const afterLength = s.length;

    zeros += beforeLength - afterLength;
    s = afterLength.toString(2);
    cnt += 1;
  }

  return [cnt, zeros];
}
