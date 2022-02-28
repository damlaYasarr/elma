const Joi=require('joi')
const jwt = require('jsonwebtoken');
const User = require('../model/users');
let nodeMailer = require("nodemailer");
const bcrypt = require('bcryptjs')
const VerificationToken = require('../model/verificationToken');

const getUser = (async (req, res, next) => {

  try {
    const { email } = req.body;
   // validator.validate(email);//emailin geçerli olup olmamasını kontrol ettik

    const foundUser = await User.findOne({ where: { email: email } });
  
    if (foundUser.dataValues) {
      res.send(foundUser.dataValues)
      return res.status(200).send(`You already activated you account!`);
    }
    else {
      
      const foundToken = await VerificationToken.findOne({ where: { email: email } });
      if (foundToken) {
     
        await User.update(
          { online: true },
          { returning: true, where: { email: email } });

        return res.status(200).send(`Account associated with email ${email} has been Activated!`);
      }
      else {
        return res.status(404).send('Token expired');
      }
    }

  } catch (err) {
    return res.status(404).send('Email not found');
  }
})



const register = (async (req, res, next) => {

  console.log("register ,", req.body);
  try {
    let { password, email } = req.body;
    const results = await User.findOne({ where: { email: email } });
    if (results) {

      return res.status(401).send('bu email zaten var');
    } else {
      password = bcrypt.hashSync(password, 10);

      const user = await User.create({ password: password, email: email });
      //verification code generation
      const verificationToken = await VerificationToken.create({ email: user.dataValues.email, token: user.password, createdat: new Date(), updatedat: new Date()  })
      await User.update({
        online:true}, {returning: true , where:{email:email}})
      //await sendMail(user.dataValues.email, verificationToken.dataValues.token, jwtTokenEmailVerify)
      return res.status(200).send(`You have Registered Successfully, Activation link sent to: ${user.dataValues.email}`)
    

    }

  } catch (err) {
    console.log("err1 ", err)
    return res.status(500);
  }
})
const forgotPasswordEmail = (async (req, res) => {
  try {
    const schema = Joi.object({ email: Joi.string().email().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user)
      return res.status(400).send("user with given email doesn't exist");

    let token = await VerificationToken.findOne({ userId: user._id });
    if (!token) {
      token = await new VerificationToken({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const link = `http://localhost:5000/elma/user/password-reset/${user.id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);

    res.send("password reset link sent to your email account");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
})


const resetPassword = (async (req, res) => {
  console.log("şuan reset çalışıyor")
  try {
    const schema = Joi.object({ password: Joi.string().required() });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ userId: req.params.id });
    if (!user) return res.status(400).send("invalid link or expired");

    let token = await VerificationToken.findOne({
      userId:req.params.id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link or expired");
     req.body.password = bcrypt.hashSync(req.body.password, 10);
    user.password = req.body.password;
    console.log(user.dataValues)
    await user.save();
    // await token.delete();
    console.log(user.dataValues)
    res.send("password reset sucessfully.");
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
})
const forgotPasswordPhone = (async (req, res) => {
  //bu kısım araştırılacak
}
)
const addPicture= async(req,res)=>{
  await sequelize.sync()
  const filePath = `${req.file.destination}/${req.file.filename}`
    const mymodel= await User.create({filePath})
    return res.send(`başarı ile eklendi`)
}
const updatePersonalInfo = (async (req, res) => {
  //email adresi update kısmı eksik
  console.log("update çalışıyor")
  try {
    let { name, lastname, phone_number, email, adress } = req.body;

    const user = await User.findOne({ where: { email: email } });

    user.name = name;
    user.lastname = lastname;
    user.phone_number = phone_number;
    user.email = email;
    user.adress = adress;
    console.log(user.dataValues)
    await user.save();
    res
      .status(200).send(`bilgiler update edildi ${user.dataValues}`);

  } catch (err) {
    return res.status(500).send((err.title));

  }
})
const login = (async (req, res) => {
  try {
    
    let { email, password } = req.body;
    const results = await User.findOne({ where: { email: email } });
    
    if (!results) {
      return res.status(401).send('Invalid login credentials');
    }
    else {
       if (!bcrypt.compareSync(password,results.dataValues.password)) {
       return res.status(401).send('şifre yanlış');
     }
      else {
       
          await User.update({
            online:true}, {returning: true , where:{email:email}})
        
         const token=jwt.sign({
           email:email
         },
         'secretKey',{
           expiresIn:"60s"
         })
         res.send(token)
         console.log("giriş başarılı")

        return res.status(200).send(data)
      }
    }


  } catch (err) {
    return res.status(500).send((err.title));

  }
})

const logout = (async (req, res) => {
  try {
    let { email} = req.body;
    const results = await User.findOne({ where: { email: email } });
       if(results){
        await User.update({
        online:false}, {returning: true , where:{email:email}})
       }
      
       
    return res.send("exit is successfully!")

  } catch (err) {
    return res.status(500).send((err.title));

  }
})
const changePassword= async(req,res)=>{
    try{
        let {email,password} =req.body;
        const user =await User.findOne({where : {email:email}});
      
        if(!user){
          return res.status(401).send(`kişi yok`)
        }else{
         
          password = bcrypt.hashSync(password, 10);
         await User.update({
         password:password}, {returning: true , where:{email:email}})
           console.log(password)
        return res.status(201).send(`şifre başarı ile değişti`)
        }
        
    }catch(err){
          return res.status(500).send(err.title)
    }
  }
  
const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: 'damlayasar40@gmail.com',
        pass: 'Turkuaz;;94',
      },
    });

    await transporter.sendMail({
      from: 'damlayasar40@gmail.com',
      to: email,
      subject: subject,
      text: text,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent", error);
  }
};

module.exports = {
  getUser, register, forgotPasswordEmail, resetPassword, updatePersonalInfo, login,
  logout,changePassword,addPicture

}
