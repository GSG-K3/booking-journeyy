const name = document.getElementById('user_name').value;
const password = document.getElementById('user_password').value;
const button = document.getElementById('log_in')

button.addEventListener('click',(e)=>{
    e.preventDefault();
   const user_data = {
    user_name: name,
    user_password: password
   }
   
   
})