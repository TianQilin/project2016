var fs = require('fs');
var path = require('path');
var filter = "." + process.argv[3];
var result = '';


              fs.readdir(process.argv[2],function(err,list){
                    
               if(err){
               	console.log(err);
               }else{
	               for(var i=0; i < list.length; i++){

	                   if( path.extname(list[i]) == filter){
	                   	
	                   	 result += (list[i] + '\n');
	                   }
	                
	               } 
	                console.log(result);
                }
              });
            


