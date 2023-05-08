//string to array
// let text="Robin Singh";
// console.log(text.split(" "));


//string truncate
// function textSelect(text,count){
//     if(count>=text.length){
//         return text;
//     }
//     return text.slice(0,count);
// }
// console.log(textSelect('Robin Singh',4));


//string email
// function emailSelect(mail){
//     let [username,gmail] = mail.split("@")
//     let alluser = username.slice(0,5)
//     let allmail = alluser + '...@' + gmail
//     return allmail;
// }
// console.log(emailSelect("robin_singh@example.com"));


//string repeat 
// function string_repeat(text,count){
// if(text==null|| text==" " || count<=0){
//     return('Error in string or count.')
// }
// return text.repeat(count);
// }
// console.log(string_repeat('a',5));



//string searh
// let text1="The quick brown fox";
// let text2="aa,bb,cc,dd,aa";
// let result=text2.match(/aa/gi);
// console.log(result+" was found"+" "+result.length+" "+ "times");
