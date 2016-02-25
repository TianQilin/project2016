var fs = require('fs');

function asyncfunction(callback){
                  fs.readFile(process.argv[2],'utf-8',function(err,data){
                       
                 
                    count = data.split('\n').length - 1;
                    console.log(count);

                  })
                } 

asyncfunction();
