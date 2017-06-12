import * as firebase from 'firebase'


class Firebase{
	static init(){
		firebase.initializeApp({
			apiKey: "AIzaSyBoIwRXUiTv_06mf2NoxEMoZNTDesLOxDY",
			authDomain: "react-native-login-8b0a0.firebaseapp.com",
			databaseURL: "https://react-native-login-8b0a0.firebaseio.com",
			projectId: "react-native-login-8b0a0",
			storageBucket: "react-native-login-8b0a0.appspot.com"
		})
	}
}
module.exports= Firebase