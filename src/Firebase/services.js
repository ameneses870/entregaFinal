import * as firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'

export const validarLogin = async () => {
    let usuario = false
    try{
        await firebase.auth().onAuthStateChanged((user)=>{
            usuario = user                        
             return usuario
        })
       
    }catch(error){
        return false;
    }
    
}

export const getUID = async () => {
    try{
        let user = await firebase.auth().currentUser;        
        return user.uid
    }catch(error){
      alert(error)
        return false
    }
}

export const loguearse = async (email,password) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email,password);        
        return true
    }catch(error){	
        alert(error)		        
        return false
    }
}



export const setUsername = async (userId,name) => {
   let userNamePath= "/usuarios/"+userId+"/details"
   return firebase.database().ref(userNamePath).set(name);
}

export const setImage = async (userId,url) => {
   let userNamePath= "/user/"+userId+"/details/apellido"
   return firebase.database().ref(userNamePath).set(url);
}


export const registrarce = async (user,password) => {

    try{
        await firebase.auth().createUserWithEmailAndPassword(user,password)    
            return true;
    }catch(error){        
            alert(error)
            return false
    }
}

export const uploadImage = async (uri,imageName,mime='image/jpg') => {
    const Blob = RNFetchBlob.polyfill.Blob
    const fs= RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    return new Promise((resolve,reject)=>{
        const uploadUri= uri
        let uploadBlob = null
        const imageRef = firebase.storage().ref('image').child(imageName)
        fs.readFile(uploadUri,'base64')
        .then((data)=>{
            return Blob.build(data,{type: `${mime};BASE64`})
        })
        .then((blob)=>{
            uploadBlob = blob
            return imageRef.put(blob,{contentType:mime})
        })
        .then(()=>{
            uploadBlob.close()
            return imageRef.getDownloadURL
        })
        .then((url)=>{
            resolve(url)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export const getImageUrl = async (userID,callBack) => {
    let userNamePath = "usuarios/"+userID+"details/url"
    firebase.database().ref(userNamePath).on('value',(snapshot)=>{
        let imageUrl=''
        if(snapshot.val()){
            imageUrl = snapshot.val()
        }
        callBack(imageUrl);
    })
}

/*export const getName = async (userID,callBack) => {
    let userNamePath = "usuarios/"+userID+"details/"
    firebase.database().ref(userNamePath).on('value',(snapshot)=>{
        let imageUrl=''
        if(snapshot.val()){
            imageUrl = snapshot.val()
        }
        callBack(imageUrl);
    })
}*/
	

	