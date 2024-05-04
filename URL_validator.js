 //url validator
 const url = "https://www.example.com";

 const regex1 = /^(https?:\/\/)([\w\.]+)\.(.+)$/;
 
 if (regex1.test(url)) {
   console.log("The input is a valid URL.");
 } else {
   console.log("The input is not a valid URL.");
 }