const socket = io("/websocket");

const message = document.getElementById('message');
const messages = document.getElementById('messages');
const email = document.getElementById('nombre');

const handleSubmitNewMessage = () => {
let msg = { message: message.value , email:email.value ,date: new Date() ,type:'user'};
  socket.emit('message', msg);
   fetch("http://localhost:3000/chat", {
     method: "POST",
     headers: {'Content-Type': 'application/json'}, 
     body: JSON.stringify(msg)
   }).then(res => {
     console.log("Request complete! response:", res);
   });


}

socket.on('message', ({ message,email ,date}) => {
    handleNewMessage(message,email,date);
})

const handleNewMessage = (message,email ,date) => {
  messages.appendChild(buildNewMessage(message,email ,date));
}

const buildNewMessage = (message,email ,date) => {
  const li = document.createElement("li");
  li.innerHTML=` <p class="text-light"> <strong class="text-primary"> ${email} : </strong> ${message} -- <span class="text-warning"> ${date} </span></p>`;  
  return li;
}

