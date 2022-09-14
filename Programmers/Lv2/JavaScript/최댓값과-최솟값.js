function solution(s) {
  const strings = s.split(' ');

  return `${Math.min(...strings)} ${Math.max(...strings)}`;
}
