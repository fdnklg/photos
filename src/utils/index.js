export const colorMode = (arr) => {
  const now = new Date().getHours();
  if(now < 6 || now > 20){
   return [arr[1], arr[0]];
  } else {
    return arr;
  }
}

export const cursorMode = (arr) => {
  const now = new Date().getHours();
  if(now < 6 || now > 20){
   return arr[0];
  } else {
    return arr[1];
  }
}

export default {
  colorMode,
  cursorMode
}