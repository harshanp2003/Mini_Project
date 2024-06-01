import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from 'cors';
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";
import multer from 'multer';
import nodemailer from 'nodemailer';
const app = express();
const port = 3001;
const saltRounds = 10;
env.config();

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  });
  db.connect();

  const dir=process.env.DIR_PATH
  const imageUpload = multer({
      storage: multer.diskStorage(
          {
              destination: function (req, file, cb) {
                  cb(null, dir);
              },
              filename: function (req, file, cb) {
                  cb(
                      null,
                      new Date().valueOf() + 
                      '_' +
                      file.originalname
                  );
              }
          }
      ), 
  });
  async function Child_Labour(id,area,city) {
    // Async function enables allows handling of promises with await
      const htmlcontent=` <h1>From,</h1>
      <h4>Public user</h4>
      <h4>${id}</h4>  
      <h4>${area}</h4> 
      <h4>${city}</h4>
  
      <br>
      <h1>To,</h1>
      <h4>The Director,</h4>
      <h4>Ministry of Labour and Employment</h4> 
      <h4>${city}</h4>
      <br>
      <h2>Subject: Urgent Action Needed: Addressing Child Labor Issue</h2>
      <br>
  
      <h3>Respected Sir/Madam,</h3>
      <br>
    
      <p>I urgently bring to your attention the issue of child labor in our community. </p>
      <p>Several establishments employ underage children in hazardous conditions, violating </p>
      <p>their rights and perpetuating poverty. I urge your organization to investigate, </p>
      <p>collaborate with authorities, and implement measures to end child labor. Providing </p>
      <p>support services is crucial for these children's well-being and future. Together, </p>
      <p>let's break the cycle of exploitation and empower these vulnerable children. </p>
      <p>Your prompt action is vital. Thank you for your attention.</p>
  
  
      
     
      <h5>Thanking you</h5>
  `
      // First, define send settings by creating a new transporter: 
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
        port: 465, // Port for SMTP (usually 465)
        secure: true, // Usually true if connecting to port 465
        auth: {
          user: "harshanp603@gmail.com", // Your email address
          pass: "bjqa zfwr yqmy ahjr", // Password (for gmail, your app password)
          // ⚠️ For better security, use environment variables set on the server for these values when deploying
        },
      });
      
      // Define and send message inside transporter.sendEmail() and await info about send from promise:
      let info = await transporter.sendMail({
        from: 'harshanp603@gmail.com',
        to: "labourdept27@gmail.com",
        subject: "Reporting child labour problem",
        html: htmlcontent
      });
    
      console.log(info.messageId); // Random ID generated after successful send (optional)
    }
    async function Bad_roads(id,area,city) {
      // Async function enables allows handling of promises with await
      
        // First, define send settings by creating a new transporter: 
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
          port: 465, // Port for SMTP (usually 465)
          secure: true, // Usually true if connecting to port 465
          auth: {
            user: "harshanp603@gmail.com", // Your email address
            pass: "bjqa zfwr yqmy ahjr", // Password (for gmail, your app password)
            // ⚠️ For better security, use environment variables set on the server for these values when deploying
          },
        });
        
        // Define and send message inside transporter.sendEmail() and await info about send from promise:
        let info = await transporter.sendMail({
          from: 'harshanp603@gmail.com',
          to: "ppwd98056@gmail.com",
          subject: "Reporting the worst condition of the roads",
          html: `
          <h1>From,</h1>
          <h4>Public user</h4>
          <h4>${id}</h4>  
          <h4>${area}</h4> 
          <h4>${city}</h4>
      
          <br>
          <h1>To,</h1>
          <h4>The Director,</h4>
          <h4>Public Works department</h4> 
          <h4>${city}e</h4>
          <br>
      
          <h2>Subject:Regarding Bad Condition of the roads</h2>
          <p>I am the resident of ${area} ${city}. We in our locality are constantly facing problems </p>
          <p>while driving the vehicles beacsuse of the worst condition of the roads there are many potholes . Many people have got injured especially </p>
          <p>while driving the bike during the night. So i request you to consider this issue seriously and provide the solution as soon as possible.</p>
          <br><br>
          <h5>Thanking you</h5>
      
          
          `,
        });
      
        console.log(info.messageId); // Random ID generated after successful send (optional)
      }
      async function water_scarcity(id,area,city) {
        // Async function enables allows handling of promises with await
        
          // First, define send settings by creating a new transporter: 
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
            port: 465, // Port for SMTP (usually 465)
            secure: true, // Usually true if connecting to port 465
            auth: {
              user: "harshanp603@gmail.com", // Your email address
              pass: "bjqa zfwr yqmy ahjr", // Password (for gmail, your app password)
              // ⚠️ For better security, use environment variables set on the server for these values when deploying
            },
          });
          
          // Define and send message inside transporter.sendEmail() and await info about send from promise:
          let info = await transporter.sendMail({
            from: 'harshanp603@gmail.com',
            to: "departmentwater9@gmail.com",
            subject: "Scarcity of water",
            html: `
            <h1>From,</h1>
            <h4>Public user</h4>
            <h4>${id}</h4>  
            <h4>${area}</h4> 
            <h4>${city}</h4>
        
            <br>
            <h1>To,</h1>
            <h4>The Director,</h4>
            <h4>Department of Water Resources</h4> 
            <h4>${city}</h4>
            <br>
            <h2>Subject: Urgent Action Needed: Water Issue</h2>
            <br>
        
            <h3>Respected Sir/Madam,</h3>
            <br>
          
            <p>I urgently bring to your attention the pressing water issue in our community. Several areas face </p>
            <p>water scarcity and contamination, posing serious health risks and affecting livelihoods. I urge your  </p>
            <p>organization to investigate, collaborate with authorities, and implement measures to ensure </p>
            <p>access to clean and safe water for all residents. Providing sustainable solutions is crucial for our  </p>
            <p>community's well-being and future. Together, let's address this water crisis and ensure the right to  </p>
            <p>clean water for all. Your prompt action is vital. Thank you for your attention.</p>
 
          <h5>Thanking you</h5>
        
            
            `,
          });
        
          console.log(info.messageId); // Random ID generated after successful send (optional)
        }



   /*Below is the code to send the email to recepient on submitting the form */

        async function sendEmailToRecipient(recipientEmail) {
          let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
              port: 465, // Port for SMTP (usually 465)
              secure: true, // Usually true if connecting to port 465
              auth: {
                  user: "harshanp603@gmail.com", // Your email address
                  pass: "bjqa zfwr yqmy ahjr", // Password (for gmail, your app password)
                  // ⚠️ For better security, use environment variables set on the server for these values when deploying
              },
          });
          console.log(recipientEmail);
          let info = await transporter.sendMail({
              from: 'harshanp603@gmail.com',
              to: recipientEmail,
              subject: 'Confirmation regarding the email delivery',
              html: `<p>Hello user ,thanks for reporting the issue.</p>
              <p>we will forward your issue to the concerned department and will notify you the status of your application soon.</p>`,
          });
          
          console.log(info.messageId);
      }
       
      
      async function sendstatusEmailToRecipient(recipientEmail,statusselected) {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
            port: 465, // Port for SMTP (usually 465)
            secure: true, // Usually true if connecting to port 465
            auth: {
                user: "harshanp603@gmail.com", // Your email address
                pass: "bjqa zfwr yqmy ahjr", // Password (for gmail, your app password)
                // ⚠️ For better security, use environment variables set on the server for these values when deploying
            },
        });
        console.log(recipientEmail);
        let info = await transporter.sendMail({
            from: 'harshanp603@gmail.com',
            to: recipientEmail,
            subject: 'Confirmation regarding the status of your issue submitted',
            html: `<p>Hello user ,we are glad to inform you that the issue you had reported has been marked as ${statusselected} </p>
            <p>In addition you can check it in the website.</p>`,
        });
        
        console.log(info.messageId);
    }


  // app.post('/upload',imageUpload.single('file'),async(req, res) => { // here in imageUpload.single('file_info') file_info inside single is name given in axios
  app.post('/upload',async(req, res) => {
      const {userid,street,area,pincode,city,issueselection,phone,issuedescription,date}=req.body;
      // const { filename, mimetype} = req.file;
      // console.log(filename);
      console.log(userid,street,area,pincode,city,issueselection,phone,issuedescription,date);
      console.log('hi');

      const queryres=await db.query("INSERT INTO issue_details(u_id,street_name,area,pincode,city,issue,phone_no,description,date) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *",[userid,street,area,pincode,city,issueselection,phone,issuedescription,date]);
      const email_for_receipient=await db.query('select u_email from users where u_id=$1',[queryres.rows[0].u_id]);
      console.log(queryres.rows[0].issue_id);
      if(issueselection==='Child_Labour'){
        Child_Labour(queryres.rows[0].issue_id,area)
      .catch(err => console.log(err));
      }
       if(issueselection==='water_scarcity'){
        water_scarcity(queryres.rows[0].issue_id,area,city)
      .catch(err => console.log(err));
      }
      if(issueselection==='Bad_roads'){
       Bad_roads(queryres.rows[0].issue_id,area)
      .catch(err => console.log(err));
      }
      sendEmailToRecipient(email_for_receipient.rows[0].u_email);

      // password’ for your Google account (see security settings).

// const nodemailer = require("nodemailer");

// Import NodeMailer (after npm install)





//   Bad_roads()
// .catch(err => console.log(err));

//   water_scarcity()
// .catch(err => console.log(err));

res.json("upload successful")

  });

  app.get('/',(req,res)=>{
    res.json("logged in")
})
app.get("/login",(req,res)=>{
  res.json("wrong password")
})
app.get("/issue_details/:userid",async(req,res)=>{    //this is done to display the issues submitted by the user
  const {userid}=req.params;
  console.log(userid);
  const issue_result= await db.query('select * from issue_details where u_id=$1',[userid]);
  console.log(issue_result.rows);
  res.json(issue_result.rows);
})
/*Now fetching data from pg database and displaying it to the user the details of his 7-4-24*/
app.get('/currentUser/:email', async (req, res) => {
  
  const {email}=req.params;

  const result = await db.query('SELECT * FROM users where u_email=$1',[email]);
  res.json(result.rows[0]);
  // console.log(result.rows);
  
});

app.get('/status/:type',async (req,res)=>{
  const param=req.params;
  const type=param.type.split('-');

  const userid=type[0]
  const selected=type[1];
  const issue_result= await db.query('select issue_id,u_id,city,issue,date,curr_status from issue_details where u_id=$1 and curr_status=$2',[userid,selected]);
  console.log(issue_result.rows)
  res.json(issue_result.rows);

})



app.get('/admin' ,async (req,res)=>{

  const issue_result= await db.query('select * from issue_details where curr_status is null');
  res.json(issue_result.rows);

})

app.put('/adminUpdate/:status' ,async (req,res)=>{


  const param=req.params;
  const type=param.status.split('-');

  const issueid=type[1]
  const selected=type[0];
  const userid=type[2];
  const issue_result= await db.query('update issue_details set curr_status=$1 where issue_id=$2',[selected,issueid]);
  const userstatusemail=await db.query('select u_email from users where u_id=$1',[userid]);
  console.log('The email is '+userstatusemail.rows);
  sendstatusEmailToRecipient(userstatusemail.rows[0].u_email,selected);
  // res.json(issue_result.rows);

  

})


/*Ending after fetching data from database */

  app.post("/login",passport.authenticate("local", {
      successRedirect: "/",  /*Changing the redirect here to USerdeatils 7-4-24 */
      failureRedirect: "/login",
    })
  );
  
  app.post("/register", async (req, res) => {
    const {name,email,pswd}=req.body;//same should be written in axios

    try {
      const checkResult = await db.query("SELECT * FROM users WHERE u_email = $1", [email]);
  
      if (checkResult.rows.length > 0) {
        res.json('exist')
      } else {
        bcrypt.hash(pswd, saltRounds, async (err, hash) => {
          if (err) {
            console.error("Error hashing password:", err);
          } else {
            const result = await db.query("INSERT INTO users (u_name,u_email,u_pswd) VALUES ($1,$2,$3) RETURNING *",[name,email,hash]);
            const user = result.rows[0];
            req.login(user, (err) => {
                res.json('registered')
            });
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  passport.use(
    new Strategy(async function verify(username, password, cb) {
      try {
        const result = await db.query("SELECT * FROM users WHERE u_email = $1 ", [username]);

        if (result.rows.length > 0) {
          const user = result.rows[0];
          const storedHashedPassword = user.u_pswd;
          bcrypt.compare(password, storedHashedPassword, (err, valid) => {
            if (err) {
              //Error with password check
              console.error("Error comparing passwords:", err);
              return cb(err);
            } else {
              if (valid) {
                //Passed password check
                return cb(null, user);
              } else {
                //Did not pass password check
                return cb(null, false);
              }
            }
          });
        } else {
          return cb("User not found");
        }
      } catch (err) {
        console.log(err);
      }
    })
  );
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  passport.deserializeUser((user, cb) => {
    cb(null, user);
  });


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});