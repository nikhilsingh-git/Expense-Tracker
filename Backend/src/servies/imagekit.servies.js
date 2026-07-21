const Imagekit = require('@imagekit/nodejs')
require('dotenv').config()

const client = new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    // privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    // urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = async(buffer)=>{
    const  result = await client.files.upload({
        file :buffer,
        fileName :"image.jpg"
    })

    return result
}




module.exports = {uploadFile}