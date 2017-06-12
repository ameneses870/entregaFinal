import * as firebase from 'firebase'


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
        return error
    }
}



export const setUsername = async (userId,name) => {
   let userNamePath= "/usuarios/"+userId+"details/name"
   return firebase.database().ref(userNamePath).set(name);
}

export const setImage = async (userId,url) => {
   let userNamePath= "/user/"+userId+"details/apellido"
   return firebase.database().ref(userNamePath).set(url);
}