const nodemailer=require('nodemailer')

const sendmail= async(req,res)=>{
    try{
    const transporter =await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
  
        auth: {
            user: 'breanne0@ethereal.email',
            pass: '464Br3hm9y5wefXekH'
        }
    })
    let info= await transporter.sendMail({
        from: '"Quora" <breanne0@ethereal.email>' ,
        to : "sanikaalmeida@gmail.com",
        subject : "login at Quora ",
        text : "Login done successfully"
    })
}
catch(error){
    
}
}

module.exports= sendmail