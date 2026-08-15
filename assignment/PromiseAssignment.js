// question one[cite: 1]
function codingScoreCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let total = 0;
      for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
      }
      let average = total / marks.length;

      if (average >= cutoff) {
        resolve(average); 
      } else {
        reject("Sorry, you have not cleared the Coding Assessment."); 
      }
    }, 2000); 
  });
}

// question 2[cite: 1]
function technicalInterviewCheck(marks, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let total = 0;
      for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
      }
      let average = total / marks.length;

      if (average >= cutoff) {
        resolve(average); 
      } else {
        reject("Sorry, you have not cleared the Technical Interview."); 
      }
    }, 2000);
  });
}

// question 3[cite: 1]
function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let finalAverage = (codingAverage + technicalAverage) / 2;

      if (finalAverage >= cutoff) {
        resolve(finalAverage); 
      } else {
        reject("Sorry, you have not cleared the final selection cutoff."); 
      }
    }, 2000);
  });
}


let savedCodingScore = 0;

console.log("Starting interview process...");

codingScoreCheck([80, 90, 85], 80)
  .then((result1) => {
    console.log("Stage 1 Passed! Coding Score: " + result1);
    savedCodingScore = result1; 
    
    return technicalInterviewCheck([70, 80, 75], 75); 
  })
  .then((result2) => {
    console.log("Stage 2 Passed! Tech Score: " + result2);
    
    return finalSelectionCheck(savedCodingScore, result2, 75); 
  })
  .then((finalResult) => {
    console.log("Stage 3 Passed! You are hired! Final Score: " + finalResult);
  })
  .catch((error) => {
    console.log(error);
  });
