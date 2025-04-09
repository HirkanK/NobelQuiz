<script>
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      // Email format validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (email === "" || password === "") {
        errorMsg.textContent = "Please fill in all fields.";
        return;
      }

      if (!email.match(emailPattern)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
      }

      if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters.";
        return;
      }

      // Simulate success (replace with real login logic or redirect)
      alert("Login successful! Redirecting...");
      errorMsg.textContent = "";
      window.location.href = "Dashboard.html"});
  </script>