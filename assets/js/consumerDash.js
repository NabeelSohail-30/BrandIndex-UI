document.querySelector('.btn-gray').addEventListener('click', () => {
    const brandList = document.querySelector('.brand-list');
    const count = brandList.children.length + 1;
  
    const newBrandItem = document.createElement('div');
    newBrandItem.classList.add('brand-item');
    newBrandItem.innerHTML = `
      <label class="numbering">${count}.</label>
      <select class="inpt" name="brand${count}">
        <option value="dalda">Dalda</option>
        <option value="soya-supreme">Soya Supreme</option>
        <option value="eva-canola">EVA Canola</option>
        <!-- Add more options as needed -->
      </select>
    `;
  
    brandList.appendChild(newBrandItem);
  });


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