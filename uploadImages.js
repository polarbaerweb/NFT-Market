function save(){
	const config = require("./config.js")
	const https = require("https");
	const imageDownloader = require("image-downloader")
	let jsonData = []


	const options = {
		hostname: config.name,
		path: config.url,
		headers: {"X-Figma-Token": config.token}

	};

	function saveImage(){
		const savedUrl = jsonData.meta.images
		let count = 0;
		for(let imgUrl in savedUrl){
			count++;
			const options = {
				url: savedUrl[imgUrl],
				dest: `D:/NFT/public/images/photo_${count}.png`,
			};

			imageDownloader.image(options)
			.then(({ filename }) => {
				console.log('Saved to', filename);
			})
			.catch((err) => console.error(err));
		}	
	}

	https.get(options, function(res){
		res.on("data", (data)=>{
			jsonData.push(data)
		}).on("end", function(){
			jsonData = JSON.parse(jsonData)
			saveImage()
		})
	})
}

exports.save = save