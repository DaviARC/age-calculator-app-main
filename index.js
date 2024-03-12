    let diaInput = document.querySelector("#dia");
    let mesInput = document.querySelector("#mes");
    let anoInput = document.querySelector("#ano");

    let diaTexto = document.querySelector("#diaTexto");
    let mesTexto = document.querySelector("#mesTexto");
    let anoTexto = document.querySelector("#anoTexto");

    let alertDia = document.querySelector("#alertDia")
    let alertMes = document.querySelector("#alertMes")
    let alertAno = document.querySelector("#alertAno")

    let button = document.querySelector("#button");

    let data = new Date();

    let diaAtual = data.getDate();
    let mesAtual = (data.getMonth() + 1);
    let anoAtual = data.getFullYear();


    diaInput.addEventListener('blur', ()=>{
        if(diaInput.value < 1 || diaInput.value > 31 ) {
            diaInput.classList.add('invalid');
            alertDia.style.display = "block";
            diaTexto.classList.add('red'); 
            alertDia.innerHTML = "Must be a valid day";
        }
    })
    diaInput.addEventListener('focus', ()=>{
        if(alertDia.innerHTML !== null){
            alertDia.style.display = "none";
            diaInput.classList.remove('invalid');
            diaTexto.classList.remove('red'); 
        }
    })
    mesInput.addEventListener('blur', ()=>{
        if(mesInput.value < 1 || mesInput.value > 31) {
            mesInput.classList.add('invalid');
            alertMes.style.display = "block";
            mesTexto.classList.add('red');
            alertMes.innerHTML = "Must be a valid month"
        }
        if(mesInput.value == 2 && diaInput.value > 28 || mesInput.value == 4 && diaInput.value > 30 || mesInput.value == 6 && diaInput.value > 30 || mesInput.value == 8 && diaInput.value > 30){
            alertDia.style.display = "block";
            diaInput.classList.add('invalid');
            mesInput.classList.add('invalid');
            anoInput.classList.add('invalid');
            diaTexto.classList.add('red'); 
            mesTexto.classList.add('red'); 
            anoTexto.classList.add('red'); 
            alertDia.innerHTML = "Must be a valid date";
        }
    })
    mesInput.addEventListener('focus', ()=>{
        if(alertMes.innerHTML !== null){
            alertMes.style.display = "none";
            mesInput.classList.remove('invalid');
            mesTexto.classList.remove('red'); 
        }
    })

    anoInput.addEventListener('blur', ()=>{
        if(anoInput.value < 1 || anoInput.value > anoAtual) {
            anoInput.classList.add('invalid');
            alertAno.style.display = "block";
            alertAno.innerHTML = "Must be in the post";
            anoTexto.classList.add('red');
        }
    })
    anoInput.addEventListener('focus', ()=>{
        if(alertAno.innerHTML !== null){
            alertAno.style.display = "none";
            anoInput.classList.remove('invalid');
            anoTexto.classList.remove('red'); 
        }
    })

    button.addEventListener('click', () =>{
        if(diaInput.value === "" || mesInput.value === "" || anoInput.value === ""){
            alertDia.style.display = "block";
            alertMes.style.display = "block";
            alertAno.style.display = "block";
            diaInput.classList.add('invalid');
            mesInput.classList.add('invalid');
            anoInput.classList.add('invalid');
            diaTexto.classList.add('red'); 
            mesTexto.classList.add('red'); 
            anoTexto.classList.add('red'); 
            alertDia.innerHTML = "This field is required";
            alertMes.innerHTML = "This field is required";
            alertAno.innerHTML = "This field is required";
        } else {

        let ano = anoAtual - anoInput.value;
        let mes = 0;
        if(mesAtual >= mesInput.value){
            mes = mesAtual - mesInput.value;
        } else {
            mes = Math.abs(mesAtual - mesInput.value);
            ano = ano - 1
        }
        let dia = 0;
        if(diaAtual >= diaInput.value){
            dia = diaAtual - diaInput.value;
        } else {
            dia = diaInput.value - diaAtual;
        }

       
       if(mesInput.value < 1 && mesInput.value > 12){
        mesInput.class.add('invalid');
       }
       if(anoInput.value < ano){
        anoInput.class.add('invalid');
       }
    
        let boldY = document.querySelector(".bold-y");
        boldY.innerHTML = ano;
        let boldM = document.querySelector(".bold-m");
        boldM.innerHTML = mes;
        let boldD = document.querySelector(".bold-d");
        boldD.innerHTML = dia;
    }
    })