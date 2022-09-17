function solution(s) {
  const chars = s.toLowerCase().split('');
  const answer = [];

  chars.forEach((char) => {
    if (!answer.length || answer[answer.length - 1] === ' ') {
      answer.push(char.toUpperCase());

      return;
    }

    answer.push(char);
  });

  return answer.join('');
}
