const removeFromArray = function(array, ...items) {
    let item_index;

    for (let i = 0; i < items.length; i++){
        item_index = array.indexOf(items[i]);
        if (item_index != -1) array.splice(item_index,1);
    }
    return array;
}

const reverseString = function(in_str) {
    let in_arr = in_str.split("");
    let out_arr = [];

  for (let i = 0; i < in_str.length; i++){
      out_arr.push(in_arr.pop());
  }

  const out_str = out_arr.join("");
  return out_str;
}

const sumAll = function(begin, end) {
    if (Math.sign(begin) === -1 || Math.sign(end) === -1) return "ERROR";
    if (typeof(begin) != "number" || typeof(end) != "number") return "ERROR";

    let sum = end;

    const step = Math.sign(end - begin);
    
    for (let i = begin; i != end; i += step){
        sum += i;
    }
    return sum;
}

const leapYears = function(year) {
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {return true}
    else {return false};
}

const ftoc = function(f_temp) {
    let c_temp = (f_temp - 32) * 5 / 9;
    c_temp = Math.round(c_temp * 10) / 10;
    return c_temp;
}
    
const ctof = function(c_temp) {
    let f_temp = c_temp * 9 / 5 + 32;
    f_temp = Math.round(f_temp * 10) / 10;
    return f_temp;
}
