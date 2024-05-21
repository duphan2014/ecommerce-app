export function characterCount(script){
  return script.ranges.reduce((count, [a, b])=>{
    return count + (b - a);
  }, 0);
}

export function findLargestScript(scripts){
  return scripts.reduce((a, b) => {
    return characterCount(a) > characterCount(b)? a:b;
  });
}