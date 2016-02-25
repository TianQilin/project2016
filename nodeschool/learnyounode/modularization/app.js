var filter = process.argv[3];
var result = '';
var readdirfilter = require('./filteredLs.js');

 readdirfilter(process.argv[2],filter,function(err,list){
    
   if(err){
   	  return console.log(err);
   }else{
       list.forEach(function(filename){
       	console.log(filename);
       });
        
    }
});