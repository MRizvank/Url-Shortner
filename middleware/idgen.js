function generateRandomId(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$^&*()_-+=<>?';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
  
    let generatedId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedId += allChars.charAt(randomIndex);
    }
  
    return generatedId;
  }
  
  // Example: Generate a random ID with a length of 12 characters
  module.exports={
    generateRandomId

  }