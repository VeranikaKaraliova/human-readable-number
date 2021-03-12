module.exports = function toReadable (number) {
  let arr1 = ['one', 'two', "three", 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let num = (new String(number)).substr(0,1);
  let num2 = 0;
  let num3 = 0;

  if(number < 10 && number !== 0){
    return arr1[num - 1];
  }

  if(number > 9 && number < 20){
    num = (new String(number)).substr(0,2);
    return arr1[num - 1];
  };

  if(number >= 20 && number <= 99){
    num3 = (new String(number)).substr(1,1);
    if(num3 === '0'){
      return arr2[num - 2];
    };
    return arr2[num - 2] + ' ' + arr1[num3 - 1];
  };

  if(number > 99){
    num3 = (new String(number)).substr(2,1);
    num2 = (new String(number)).substr(1,2);

    if((new String(number)).substr(1,2) >= 20 && num3 !== '0' ){
      num2 = (new String(number)).substr(1,1);
      return arr1[num - 1] + ' ' + 'hundred' + ' ' + arr2[num2 - 2] +' '+ arr1[num3 - 1];
    };

    if((new String(number)).substr(1,2) <20 && num3 !== '0'){
     return arr1[num - 1] + ' ' + 'hundred' + ' ' + arr1[num2 - 1]; 
    };

    if((num3 === '0' && new String(number)).substr(1,2) >19 ){
      num2 = (new String(number)).substr(1,1);
     return arr1[num - 1] + ' ' + 'hundred' + ' ' + arr2[num2 - 2] ;
    };

    if(num2 === '10'){
      return arr1[num - 1] + ' ' + 'hundred' + ' ' + arr1[9];
    };

    if(num2 === '00'){
      return arr1[num - 1] + ' ' + 'hundred';
    };
  };
  return 'zero';
}
