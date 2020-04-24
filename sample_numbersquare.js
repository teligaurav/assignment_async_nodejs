var http = require("http");

http.createServer(function(req,res){
	
	
	function square_num(num)
	{
		return new Promise(function(resolve,reject){
			if(isNaN(num))
				reject("Not a number!");
			else 
				resolve(num * num);
		});
	}
	
	
	var nums = [1,2,3,4,5,6,7,8,9];
	
	nums = nums.map(function(i){ return square_num(i)});
	
	console.log("List of all promise created");
	console.log(nums);
	
	Promise.all(nums)
	.then(function(result){
		console.log("Resolved all promise");
		console.log(result);
	});
	
	console.log("not a number check");
	console.log(square_num('test'))
	
}).listen(3000);
