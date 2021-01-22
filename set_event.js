function createAlarmEvent(textTime) {    
    let values = textTime.split(":")
	let date = new Date()
    date.setHours(values[0], values[1],values[2])

    chrome.alarms.create('LogoutAlarmEvent', {
        when:date.getTime()
    })
}

function createPeopleEvent(peopleCount) {
    chrome.tabs.query({url: 'https://meet.google.com/*'}, tabs => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { msg: "logout_people", count: peopleCount }, response => {    
                console.log(response ? response.msg : "No response received")
            })
        });
    })
}

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name == 'LogoutAlarmEvent') {
        chrome.tabs.query({url: 'https://meet.google.com/*'}, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, { msg: "logout_time" }, response => {    
                    console.log(response ? response.msg : "No response received")
                })
            });
        })
    }
})