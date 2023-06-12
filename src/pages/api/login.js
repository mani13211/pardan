// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var jwt = require('jsonwebtoken');

export default function handler(req, res) {
    if(req.method=="POST"){
        let email=req.body.email
        let password=req.body.password
        if(email==process.env.NEXT_PUBLIC_admin_mail){
            if(password==process.env.NEXT_PUBLIC_admin_pass){
                console.log("welcome back")
                var token = jwt.sign({ email: email,password:password }, process.env.NEXT_PUBLIC_JWT);
                res.status(200).json({success:true,message:"welcome back",token})

            }else{
                console.log("wrong password")
                res.status(200).json({success:false,message:"wrong password"})

            }

        }else{
            console.log("user not found")
            res.status(200).json({success:false,message:"user not found"})
        }

    }else{
        res.status(200).json({ message:"method not allowed" })
    }
    
    // res.status(200).json({ name: 'John Doe' })
  }
  