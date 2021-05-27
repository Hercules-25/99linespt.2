document.addEventListener("DOMContentLoaded", function() {
let myButton = document.createElement("button");
myButton.textContent = "Sing!";
document.body.appendChild(myButton);

let friends = ["Jonathan", "Ari", "Josh", "Kenny", "Sam"];

document.body.addEventListener("click", function () {

  for (let i = 0; i < friends.length; i++) {
    let frndDiv = document.createElement("div")
    frndDiv.className = "friend"
    let frndNme = document.createElement("h3")
    
   let para2 = document.createElement("p") 
   let para3 = document.createElement("p") 
   frndNme.textContent = friends[i]
    frndDiv.appendChild(frndNme)
   
  
    document.body.appendChild(frndDiv)



    let num = 99;
    while (num >= 1) {
      if (num === 2) {
        let parag2 =
          num +
            " lines of code in the file, " +
            num +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (num - 1) +
            " line of code in the file."
        para2.textContent = parag2
         frndDiv.appendChild(para2);
    
      } else if (num === 1) {
        let parag3 =
          num +
            " line of code in the file, " +
            num +
            " line of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (num - 1) +
            " lines of code in the file."
        para3.textContent = parag3
        frndDiv.appendChild(para3);
      } else {
        let parag1 =
          num +
            " lines of code in the file, " +
            num +
            " lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, " +
            (num - 1) +
            " lines of code in the file." 
      let para1 = document.createElement("p")
      para1.textContent = parag1
       frndDiv.appendChild(para1) ;
      };
      num--;
    }
    
  };""
});
})