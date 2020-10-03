
exports.min = function min (array) {
  if (!array) {
    return 0;
  } 
  else if (array.lenght === 0) {
    return 0;
  }
  else if (array == 0) {
    return 0;
  }    
  else {
    let minInt = Math.min.apply(null, array);
    return minInt;
  }
}

exports.max = function max (array) {
  if (!array) {
    return 0;
  } 
  else if (array.lenght === 0) {
    return 0;
  }
  else if (array == 0) {
    return 0;
  }    
  else {
    let maxInt = Math.max.apply(null, array);
    return maxInt;
  }
}

exports.avg = function avg (array) {
  if (!array) {
    return 0;
  } 
  else if (array.lenght === 0) {
    return 0;
  }
  else if (array == 0) {
    return 0;
  }    
  else {
    let total = 0;
    for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  let avgInt = total / array.length;
  return avgInt;
  }
    
 }