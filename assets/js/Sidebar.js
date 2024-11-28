const sidenav_btn = document.getElementById("sidenav_icon");
  const side_navbar = document.getElementById("side_navbar");
  let show_side_nav = false;

  if(sidenav_btn ){

    sidenav_btn.addEventListener("click", ()=>{


        if(show_side_nav == true) {

            side_navbar.style.left = "-200px";
            side_navbar.style.transition = "0.2s all ease"
            show_side_nav = false;
        }
        else if(show_side_nav == false) {
            
            side_navbar.style.left = "0";
            show_side_nav = true;
        }


    })
  }