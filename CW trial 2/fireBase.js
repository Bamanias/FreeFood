var app_firebase = {}

(function(){
     // Your web app's Firebase configuration
     const firebaseConfig = {
        apiKey: "AIzaSyC1x2RD-r0lodWlcShFqLqrs6HyF-StVlY",
        authDomain: "test-831ef.firebaseapp.com",
        projectId: "test-831ef",
        storageBucket: "test-831ef.appspot.com",
        messagingSenderId: "279871077643",
        appId: "1:279871077643:web:56ebcedbdacaaaec0c760e"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      app_firebase = app;
})()