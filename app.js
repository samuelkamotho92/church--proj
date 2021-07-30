document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    console.log(elems);
     M.Modal.init(elems);
  });
  const sideNav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sideNav, {});
// const formone = document.querySelector(".formone");
// const formtwo = document.querySelector(".formtwo");
// console.log(formone,formtwo);
// formone.addEventListener("submit",()=>{ 
//     db.collection("discussions").add({
//         title:formone["title-comments"].value,
//         content:formone["content-comments"].value
//     }).then(()=>{
// formone.reset();
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
// formtwo.addEventListener("submit",()=>{
//     db.collection("discussionstwo").add({
//         title: formtwo["title-comments"].value,
//         content: formtwo["content-comments"].value
//     }).then(()=>{
//         formtwo.reset();
//     }).catch((err)=>{
//         console.log(err)
//     })
// })