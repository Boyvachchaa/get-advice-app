const element = document.querySelector(".items")
const btn = document.querySelector(".btn")



function getAdvice() {
    let req = new XMLHttpRequest();
    
    req.open("GET", "https://api.adviceslip.com/advice")
    
    req.send()
    

    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200) {
            let statuses = JSON.parse(req.response);
            
            element.innerHTML = 
            `   
                <p>ADVICE #${statuses.slip.id}</p>
                <h1>“${statuses.slip.advice}”</h1>
                <div class="icon">
                <div class="line"></div>
                    <img src="img/icon.svg" alt="Middle Icon">
                <div class="line"></div>
                </div>
            `
            document.querySelector('.loading').style.display = 'none'
            document.querySelector(".items").style.display = "block"
        }
    });
}

btn.addEventListener('click', () => {
    document.querySelector(".loading").style.display = "block"
    document.querySelector(".items").style.display = "none"
    getAdvice()
})