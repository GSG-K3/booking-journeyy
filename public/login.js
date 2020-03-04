window.addEventListener('load', () => {

    const getJrn = () => {
        apicall('GET', '/api/Journies', response => {
            const journeyData = document.getElementById('jrnData');
           
            const data = JSON.parse(response);
            console.log(data)
            data.forEach(e => {
                let div = document.createElement('div');
                let img = document.createElement('img')
                let p = document.createElement('p')
                let h = document.createElement('h2')
                let hh = document.createElement('h3')

                img.setAttribute('src', e.img)
                h.innerHTML= e.place_name
                hh.innerHTML= e.journey_date
                p.innerText =e.journey_des
                img.classList.add("img")

                div.appendChild(h);
                div.appendChild(img);
                div.appendChild(hh);
                div.appendChild(p);
                journeyData.appendChild(div);
            });


        })



    }
    getJrn()
    console.log("1111111111111111")
})



