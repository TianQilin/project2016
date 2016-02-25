var http = require('http');
var bl = require('bl');



http.get(process.argv[2], function callback(response){
      
      
      response.on('error', function(err){
      	console.log(err);
      })
     

      response.pipe(bl(function(err, data){
          data = data.toString();
         console.log(data.length);
         console.log(data);	
      }))
});
        


