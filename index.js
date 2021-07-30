const commentblockone = document.querySelector(".comments-block"); 
const commentblocktwo = document.querySelector(".comments-blocktwo");
const opendisc  = (data)  =>
{
    if (data.length) {
     let html  = ``;
     data.forEach(doc => {
        const comment = doc.data();
        console.log(comment);
        const div = `
        <h3 class="comments-head">${comment.title}</h3>
       <h5 comment-content>${comment.content}</h5>
        `;
        html += div;
     });
     commentblockone.innerHTML = html;
    }
    else{
        commentblockone.innerHTML =
         `<h5>LOGIN TO VIEW GUIDES </h5>`;
    }
}
const opendisctwo = (data)=>{
    if (data.length) {
        let html = ``;
        data.forEach(doc=>{
            const commentrydisc = doc.data();
        const div = `
        <h3 class="comments-head">${commentrydisc.title}</h3>
           <h5 comment-content>${commentrydisc.content}</h5>
        `;
        html += div;
        });
        commentblocktwo.innerHTML = html;
    }else{
        commentblocktwo.innerHTML = `<h5>LOGIN TO VIEW GUIDES </h5>`;
    }
}
const loggedoutlinks = document.querySelectorAll(".logged-out");
const loggedinlinks = document.querySelectorAll(".logged-in")
// const setupui = (user)=>{
//     if (user) {
//         loggedinlinks.forEach(item=>item.style.display = 'block');
//         loggedoutlinks.forEach(item=>item.style.display = "none");
//     }else{
//         loggedinlinks.forEach(item=>item.style.display = 'none');
//         loggedoutlinks.forEach(item=>item.style.display = "block");
//     }
// }

