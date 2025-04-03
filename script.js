document.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementsByClassName('search');

    search[0].addEventListener('keydown', (e) => {
          if (e.key ===  "Enter" && search[0].value == "Wheels"){
            console.log("wheels are searched for!")
          }
    });
});
