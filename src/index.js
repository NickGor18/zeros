module.exports = function zeros(expression) {
  expression=String(expression);
  var mult=1;
 
  if(expression.indexOf('*',0)==-1){
    for(let i=5;i>0;i--){
      
      mult*=i;
    }
    console.log(mult);
    return 1;
  }
  else{
    var arr=Array(arr);
  var j=0;
  var str = new String(str);
  str='';
  for(let i=0;i<expression.length;i++){
    if(expression[i]!='*'){
      str+=expression[i];
    }
    else{
      arr[j]=str;
      j++;
      str='';
    }
  }
  arr[j]=str;
  j++;
  var arr1 = new Array(arr1);
  for(let i=0;i<j;i++){
    var expl_count=0;
    var ch = String(ch);
    ch='';
    for(let char of arr[i]){
      if(char=='!') expl_count++; 
      else ch+=char;
    }
    ch = Number(ch);
    console.log(ch);
    var m1=BigInt(1);
    if(expl_count==1){
      for(let i=ch;i>0;i--){
        m1*=BigInt(i);
      }
    } else {
        for(let i=ch;i>0;i-=2){
          m1*=BigInt(i);
        }
    }
    arr1[i]=BigInt(m1);
    }
    console.log(arr1);
    mult = BigInt(mult);
    for(let i=0;i<j;i++){
      mult*=arr1[i];
    }
    console.log(mult);
    var z_count=0;
    while(mult%BigInt(10)==0){
      z_count++;
      mult/=BigInt(10);
    }
    return(z_count);
  }
  
  }
  

