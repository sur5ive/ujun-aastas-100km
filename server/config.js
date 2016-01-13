ServiceConfiguration.configurations.remove({
	service: "facebook"
});

ServiceConfiguration.configurations.insert({
	service: "facebook",
	appId: "1520174918301166",
	secret: "0e66195506d9d1b555bcbafef4827549"
});

console.log("Facebook login configuration inserted");