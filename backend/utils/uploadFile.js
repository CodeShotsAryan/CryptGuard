export function uploadFile(encryptedData, fileName) {
    fetch('http://localhost:3123/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ encryptedData, fileName })
    })
    .then(response => {
      if (response.ok) {
        console.log(`${fileName} uploaded successfully.`);
      } else {
        console.error('Failed to upload file:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  }
  