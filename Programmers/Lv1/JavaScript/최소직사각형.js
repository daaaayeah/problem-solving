function solution(sizes) {
  let card = {
    w: 0,
    h: 0,
  };

  sizes.forEach(([w, h]) => {
    const [width, height] = w >= h ? [w, h] : [h, w];

    if (width > card.w) {
      card.w = width;
    }

    if (height > card.h) {
      card.h = height;
    }
  });

  return card.w * card.h;
}
