function contar() {
    let ini = document.getElementById("txti");
    let fi = document.getElementById("txtf");
    let pass = document.getElementById("txtp");
    let cont = document.getElementById("res");
  
    if (ini.value.length == 0 || fi.value.length == 0 || pass.value.length == 0) {
      window.alert("[Error] Faltam dados");
    } else {
      cont.innerHTML = "Contando...";
      let i = Number(ini.value);
      let f = Number(fi.value);
      let p = Number(pass.value);
  
      if (i < f) {
        for (let c = i; c <= f; c += p) {
          cont.innerHTML += ` ${c}   \u{1F449}	 `;
        }
      } else if (i >= f) {
        for (let c = i; c >= f; c -= p) {
          cont.innerHTML += `${c}  `;
        }
      }
  
      cont.innerHTML += ` \u{1F44D} `;
    }
  }