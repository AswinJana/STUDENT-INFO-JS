//  outerbox div
let outerdiv = document.createElement("div")
outerdiv.id = "outerdivbox"
document.body.append(outerdiv)
outerdiv.style.border = " 2px solid red"
outerdiv.style.padding = " 50px"
outerdiv.style.display = " flex"
outerdiv.style.justifyContent = "space-around"
outerdiv.style.flexDirection = " row"
outerdiv.style.flexWrap = "wrap"

// student details 
let student = [
    
    { id:123, name:"akash", class: "7th" },
    { id:234, name:"ashok", class: "7th" },
    { id:345, name:"bala", class: "7th" },
    { id:456, name:"barani", class: "7th" },
    { id:567, name:"chander", class: "7th" },
    { id:678, name:"durka", class: "7th" },
    { id:789, name:"diksha", class: "7th" },
    { id:890, name:"jakan", class: "7th" },
    { id:901, name:"jonson", class: "7th" },
    { id:987, name:"karthi", class: "7th" },
    { id:876, name:"kathir", class: "7th" },
    { id:765, name:"logesh", class: "7th" },
    { id:654, name:"losan", class: "7th" },
    { id:543, name:"magesh", class: "7th" },
    { id:432, name:"malathi", class: "7th" },
]
student.map(student => {

    // inner div
    let innerdiv = document.createElement("div")
    innerdiv.id = "innerdiv"
    outerdiv.append(innerdiv)
    innerdiv.style.border = "2px black solid"
    innerdiv.style.padding = "20px"
    innerdiv.style.display = "flex"
    innerdiv.style.width = "400px"
    innerdiv.style.marginBottom = "10px"



    // img 
    let img = document.createElement("img")
    img.id = "img"
    img.style.width = "150px"
    img.style.height = "150px"
    img.src = "./img1.jpeg"
    img.style.padding = "5px "
    innerdiv.append(img)
    
    // data in div box
    let databox = document.createElement("div")
    databox.id = "databox"
    databox.style.padding = "10px"
    innerdiv.append(databox)
    // h3 
    let h3 = document.createElement("h3")
    h3.id = "h3"
    databox.append(h3)
    h3.innerHTML = "name :" + student.name
     // h3 
     let h2 = document.createElement("h3")
     h2.id = "h2"
     databox.append(h2)
    h2.innerHTML = "id :" + student.id
     // h3 
     let h1 = document.createElement("h3")
     h1.id = "h1"
     databox.append(h1)
    h1.innerHTML = "class :" + student.class

    })