var b = document.getElementById("border");
var r = document.getElementById("res");
const tl = document.getElementById("tl");
const tr = document.getElementById("tr");
const bl = document.getElementById("bl");
const br = document.getElementById("br");
$("#teste").click(function(){
    mudaBorder();
})
$("#limpa").click(function(){
    limpa();
})
function mudaBorder(){
    if(tl == ""){
        tl = 0;
    }
    const t1 = tl.value;
    const t2 = tr.value;
    const b1 = bl.value;
    const b2 = br.value;
    b.style.borderTopLeftRadius = t1 + 'px';
    b.style.borderTopRightRadius = t2 + 'px';
    b.style.borderBottomLeftRadius = b1 + 'px';
    b.style.borderBottomRightRadius = b2 + 'px';
    r.innerHTML = 'Top Left: ' + t1 + 'px' + '\n' + 'Top Right: ' + t2 + 'px' + '\n'
                    + 'Bottom Left: ' + b1 + 'px' + '\n' + 'Bottom Right: ' + b2 + 'px';
}
function limpa(){
    tl.value = "0";
    tr.value = "0";
    bl.value = "0";
    br.value = "0";
    mudaBorder();
}