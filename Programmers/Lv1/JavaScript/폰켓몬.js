function solution(nums) {
  const numSetSize = new Set(nums).size;
  const count = nums.length / 2;

  return numSetSize > count ? count : numSetSize;
}
