const CryptoJS = require('crypto-js');

const encryptData = (data,key) =>{
  return CryptoJS.AES.encrypt(data,key).toString();

}

const decryptData = (encryptedData , key) =>{

        const bytes = CryptoJS.AES.decrypt(encryptedData,key)
        return bytes.toString(CryptoJS.enc.Utf8);

}

module.exports = {encryptData, decryptData}