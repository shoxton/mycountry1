angular.
	module('images').
	factory('Images',['$resource', 
		function ($resource) {
			var url;
			return $resource(url, {}, {
				url: 'https://unsplash.com/oauth/token?client_id=:clientId&client_secret=:clientSecret&redirect_uri=:redirectUri&code=:codeId&grant_type=authorization_code',
				post: {
					method: 'POST',
					params: {
						clientId: '9f636fae33aa0dd3a0215c11179fbe7e3adddf8cbd8701d6a8d3f923cb5c0e9d',
						clientSecret: 'c50b6af19c519b0332d71f9f582adb10252437fdf30b54357ff55c0727336226',
						redirectUri: 'https://localhost:8000/countries',
						codeId: 'e5f50f3a91ed8eab4d2d17ab85cd1850a4e430405f97efc34710aac7b2995cc2'
					}
				},
				query: {
					url: 'https://api.unsplash.com/search/photos?page=1&query=:keyWord',
					method: 'GET',
					params: {
						keyWord: ''
					},
					headers: {Authorization: 'Bearer 4c794b61271c7562e66bccc656322d048babf29b103963864b28b27307abe172'}
				}
			})
		}])	