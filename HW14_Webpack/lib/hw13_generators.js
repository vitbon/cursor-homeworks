function createIdGenerator() {
  let id = 0;
  return {
    next() {
      id++;
      const symbol = Symbol(id);
      return {
        value: symbol.description,
        done: false
      };
    }

  };
}

export default createIdGenerator;