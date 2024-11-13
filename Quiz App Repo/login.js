const firebaseConfig = {
  apiKey: "AIzaSyBmqr_D7V8lj2NL_KnUxoCzyNQ5YhJP7eY",
  authDomain: "quiz-nimer.firebaseapp.com",
  databaseURL: "https://quiz-nimer-default-rtdb.firebaseio.com",
  projectId: "quiz-nimer",
  storageBucket: "quiz-nimer.firebasestorage.app",
  messagingSenderId: "107324649883",
  appId: "1:107324649883:web:f940a031061f7997fcb13e"
};
  firebase.initializeApp(firebaseConfig); 
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      
      // Redirect to index.html after alert disappears
      window.location.href = "quiz.html";
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }