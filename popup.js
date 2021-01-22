document.getElementById("ok_time").addEventListener("click", () => {
    let textTime = document.getElementById("logout_time").value
    
    let correct = /\d{1,2}:\d{1,2}:\d{1,2}/.test(textTime)
    if (correct) {
        createAlarmEvent(textTime)
        window.close()
    } else {
        document.getElementById("error_text").innerText = "L'orario inserito non ha un formato valido. Riprova"
    }
})

document.getElementById("ok_people").addEventListener("click", () => {
    let textPeople = document.getElementById("logout_people").value
    
    let correct = /\d+/.test(textPeople)
    if (correct) {
        createPeopleEvent(textPeople)
        window.close()
    } else {
        document.getElementById("error_text").innerText = "Il valore inserito non ha un formato valido. Riprova"
    }
})

let timeTabBtn = document.getElementById("time_tab_btn")
let peopleTabBtn = document.getElementById("people_tab_btn")
let timeTab = document.getElementById("time_tab")
let peopleTab = document.getElementById("people_tab")

timeTabBtn.addEventListener("click", () => {
    timeTabBtn.style.backgroundColor = "#00FF00"
    peopleTabBtn.style.backgroundColor = "#FFFFFF"
    timeTab.style.display = "block"
    peopleTab.style.display = "none"
})

peopleTabBtn.addEventListener("click", () => {
    peopleTabBtn.style.backgroundColor = "#00FF00"
    timeTabBtn.style.backgroundColor = "#FFFFFF"
    peopleTab.style.display = "block"
    timeTab.style.display = "none"
})
