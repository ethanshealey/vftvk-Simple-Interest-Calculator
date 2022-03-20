
const compute = (e) => {
    const p = document.getElementById("principal").value
    const r = document.getElementById("rate").value/1000
    const y = document.getElementById("years").value
    
    const interest = (parseInt(p) * (1 + (parseFloat(r) * parseInt(y)))) - parseInt(p)

    document.getElementById("result").innerHTML = `
        <p>If you invest <span class="highlight">$${p}</span></p>
        <p>At a rate of <span class="highlight">${Math.round((r*100)*100)/100}%</span></p>
        <p>You will have <span class="highlight">$${Math.round(interest*100)/100}</span></p>
        <p>In the year <span class="highlight">${parseInt(new Date().getFullYear()) + parseInt(y)}</span></p>
    `
    return false;
}

const compute_rate = (perc) => {
    const rate = document.getElementById("range-value")
    rate.innerHTML = "" + perc/10 + "%"
}

const validate_amount = () => {
    const principal = document.getElementById('principal')
    if(principal.value < 0) principal.value = 0
}

const validate_years = () => {
    const years = document.getElementById('years')
    if(years.value < 0) years.value = 0
}
