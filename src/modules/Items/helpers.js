export const reduceErrorsArray = array => array
  .reverse()
  .reduce((res, c) => {
    if (res[c.number]) {
      res[c.number].push(c);
    } else {
      res[c.number] = [c];
    }
    return res;
  }, {});

export const a = 2;
