document.querySelector(".button").addEventListener('click',()=> {
    let w1 = [parseFloat(document.querySelector(".length").value)/1000];
    let w2 = [parseFloat(document.querySelector(".width").value)/1000];
    let tck = [parseFloat(document.querySelector(".thick").value)/1000];
    let den = [parseFloat(document.querySelector(".den").value)];
    let res_el = document.querySelector(".result")

    let dim1 = ((w1-tck)*tck);
    let dim2 = (w2 * tck);
    let totalVol = (dim1 + dim2);
    let wt = (totalVol*den).toFixed(3);
    res_el.innerHTML=`The Weight is ${wt}`;
})