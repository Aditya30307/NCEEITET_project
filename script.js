document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementsByClassName('search');
    const lower = document.getElementsByClassName("lower");
    const clear = document.getElementsByClassName("clear");
    const wheels = 2;
    const service = 3;
    const modification = 2;
    const cleaning = 3;
    let count = 0;
    function removeElement() {
      while (lower[0].firstChild){
        lower[0].removeChild(lower[0].firstChild);
      }
    }
    clear[0].addEventListener("click", ()=>{
      count = 0;
      search[0].value = "";
    })
    search[0].addEventListener('keydown', (e) => {
          if (e.key ===  "Enter" && count == 0){
            let searchChanged = search[0].value.toLowerCase();
            if (searchChanged == "wheels") {
              count++;
              removeElement();
              for(let i = 0; i < wheels;i++) {
                const result = document.createElement("div");
                result.classList.add("result");
                result.innerText = "wheels";
                lower[0].append(result);
              }
            }
            else if (searchChanged == "service"){
              removeElement();
              for (let i = 0; i < service; i++) {
                const result = document.createElement("div");
                result.classList.add("result");
                result.innerText = "service";
                lower[0].append(result);
                
              }
            }
            else if (searchChanged == "cleaning"){
              removeElement();
              for (let i = 0; i < cleaning; i++) {
                const result = document.createElement("div");
                result.classList.add("result");
                result.innerText = "cleaning";
                lower[0].append(result);
                
              }
            }
            else if (searchChanged == "modification"){
              removeElement();
              for (let i = 0; i < modification; i++) {
                const result = document.createElement("div");
                result.classList.add("result");
                result.innerText = "modification";
                lower[0].append(result);
                
              }
            }
            else{
              removeElement();
              const noResult = document.createElement("h3");
              noResult.classList.add("heading");
              noResult.innerText = "No search result try searching for something else";
              lower[0].append(noResult);
            }
          }
          else if (e.key == "Backspace" ){
            // count = 0;
            // console.log(count);
            console.log(e);
            if(search[0].value.length == 0){
              count = 0;
              console.log(count);
            }
          }
    });
});
