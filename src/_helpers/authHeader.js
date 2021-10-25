export function authHeader(){
    const user = JSON.stringify(localStorage.getItem('user'));
    
    if(user && user.token){
        return {'Authorization' : 'Bearer '+ user.token}
    }else{
        return {}
    }
}