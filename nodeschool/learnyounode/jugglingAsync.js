var http = require('http');
var bl = require('bl');
var content1 = "";
var content2 = "";
var content3 = "";


http.get(process.argv[2], function (response){
      
     
     
      response.on('data', function(data){
      	 content1 += data;
      })
      
      response.on('end', function(){
      
	      http.get(process.argv[3],function (response){
		      	
		      	response.on('data', function(data){
		      		content2 += data;
		      	      
		      	})
		      	response.on('end', function(){
		      		http.get(process.argv[4],function(response){
		      			
                        response.on('data', function(data){
			      			content3 += data;
			      		
			      	    });
			      	    response.on('end', function(){
		                  
		                 console.log(content1);
			      	     console.log(content2);
			      		 console.log(content3);
			      	    })
		      	    })
		     
		      		
		      	})
	      })
    
      });
  })     