const button = document.getElementById('log_in')

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const name = document.getElementById('user_name').value;
    const password = document.getElementById('user_password').value;
    if(name.trim()!=="" && password.trim()!==""){
    const user_data = {
    user_name: name,
    user_password: password
   }
   console.log(user_data)
   apicall('POST', '/login',()=>{console.log('hi')} ,user_data)
   
}

 else{
     alert("ENTER NAME AND PASSWORD")
 }  
   
})
