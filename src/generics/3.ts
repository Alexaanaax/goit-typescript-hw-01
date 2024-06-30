type Name = {
    name: string;
  };
  
  type Age = {
    age: number;
  };
  
  function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  const merged = merge<Name, Age>({ name: "Alex" }, { age: 23 });
  
  merged.name;