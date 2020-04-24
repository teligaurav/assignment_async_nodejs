var http = require("http");

http.createServer(function(req,res){
/* sample promise example	
var testPromise = new Promise(function(resolve,reject){
		resolve("Hello Promise!!");
	});
	
	testPromise
	.then(async function(message){
		await new Promise(resolve => setTimeout(resolve, 1000));
		console.log(message);
	});
	*/

function countDown(result) {   
  delay(result);  
  return result - 100;
}

function delay(milliseconds)
{
	return new Promise((resolve, reject) => {				
		setTimeout(function() {

		if(milliseconds != 0)
			console.log(milliseconds); 
		else 
			console.log("Done!");
		
		resolve(milliseconds)},1000);		
		
	});
}	

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!
/* ### reducer example 
		function delay(nextID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

	console.log(`${nextID} : Resolve! ${new Date()}`);

      resolve();
    }, nextID);
  });
}

[100,200,300,400,500,600,700,800,900,1000].reduce( (accumulatorPromise, nextID) => {

  console.log(`${nextID} : Loop! ${new Date()}`);

  return accumulatorPromise.then(() => {
    return delay(nextID);
  });
}, Promise.resolve()); */
			
	
	
		
}).listen(3000);