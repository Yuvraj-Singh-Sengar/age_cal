// script.js
function calculateAge() {
    const birthDate = document.getElementById("birthDate").value;
    const resultDiv = document.getElementById("result");
  
    if (!birthDate) {
      resultDiv.textContent = "Please select a valid date.";
      return;
    }
  
    const birth = new Date(birthDate);
    const today = new Date();
  
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  