// linkdin profile url validator
const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-_]{5,30}[a-zA-Z0-9]$/;

function validateLinkedInURL(url) {
  if (regex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/johndoe");
validateLinkedInURL("https://www.linkedin.com/in/jane-smith_123");
validateLinkedInURL("https://www.linkedin.com/in/invalid_url");
validateLinkedInURL("https://www.linkedin.com/in/");
validateLinkedInURL("http://www.linkedin.com/in/johndoe");
