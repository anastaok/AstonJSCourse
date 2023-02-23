const createLiker = () => {
  let count = 0;
  return {
    like() {
      count++;
      return this;
    },
    dislike() {
      count--;
      return this;
    },
    val() {
      return count;
    },
  };
};
