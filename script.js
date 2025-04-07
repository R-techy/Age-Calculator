function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    if (isNaN(dob)) {
      document.getElementById("result").innerHTML = "Please enter a valid date!";
      return;
    }
  
    const today = new Date();
    let ageY = today.getFullYear() - dob.getFullYear();
    let ageM = today.getMonth() - dob.getMonth();
    let ageD = today.getDate() - dob.getDate();
  
    if (ageD < 0) {
      ageM--;
      ageD += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageM < 0) {
      ageY--;
      ageM += 12;
    }
  
    const diffTime = today - dob;
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = ageY * 12 + ageM;
  
    document.getElementById("result").innerHTML = `
      <p>Your age is <b>${ageY} years, ${ageM} months, and ${ageD} days</b>.</p>
      <p>Total Days: <b>${totalDays}</b></p>
      <p>Total Weeks: <b>${totalWeeks}</b></p>
      <p>Total Months: <b>${totalMonths}</b></p>
    `;
  }
  