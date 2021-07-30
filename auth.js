
 
auth.onAuthStateChanged(user=>{
    if (user) {
        console.log("user logged in:",user);
        db.collection("discussions").onSnapshot((snapshot)=>{
            opendisc(snapshot.docs);
             })
             db.collection("discussionstwo").onSnapshot((snapshot)=>{
                 opendisctwo(snapshot.docs);
             })
    // setupui(user);
    }else{
        console.log("user logged out");
        opendisc([]);
        opendisctwo([]);
        // setupui([]);
    }
});

//signing user in
const authemail = document.querySelector("#signup_email");
const authpassword = document.querySelector("#signup_password");
const signupform = document.querySelector(".signupform");
console.log(signupform);
signupform.addEventListener("submit",(e)=>{
    e.preventDefault();
const signup_email = authemail.value;
const sigup_passowrd = authpassword.value;
auth.createUserWithEmailAndPassword(signup_email,sigup_passowrd)
.then(()=>{
    console.log(cred.user);
    const md = document.querySelector("#modal1");
    M.Modal.getInstance(md).close();
    signupform.reset();
    alert("signed in Thank You");
}).catch(err=>{
    if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
alert("network issue refresh")  
    }else{
        console.log(err.message);
    }
    signupform.reset();
})
});

//log in user
const loginUserForm = document.querySelector(".loginUser");
loginUserForm.addEventListener("submit",(e)=>{
e.preventDefault();
const logoutemail = loginUserForm["login_email"].value;
const logoutpassword = loginUserForm["login_password"].value;
auth.signInWithEmailAndPassword(logoutemail,logoutpassword).then((cred)=>{
    loginUserForm.reset();
    alert("You are Logged in Thank You");
}).catch(err=>{
    if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
alert("network issue refresh")  
    }else{
        console.log(err.message)
    }
    loginUserForm.reset();
})
})
//log out
const userlogout = document.querySelectorAll("#logout");
userlogout.forEach(item=>{
    item.addEventListener("click",((e)=>{
        e.preventDefault();
            auth.signOut().then(()=>{
                alert("Logged Out");
            }).catch((err)=>{
            if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
           alert("network issue refresh")  
                }else{
                    console.log(err.message)
                        }
            })
        }))
})

let userform = document.querySelector(".userform");
userform.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("my page");
    db.collection("user").add({
        name: userform.name.value,
        email: userform.email.value,
        phonenumber: userform.phonenumber.value,
        issue:userform.issue.value
    })
   userform.name.value = "";
   userform.email.value= "";
   userform.phonenumber.value= "";
   userform.issue.value = "";
})
console.log(userform.name.value);
//create comments
