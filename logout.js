chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
    if (request.msg == 'logout_time') {
        console.log("logout (time)")
        logout()
        sendResponse({ msg: "logged out" })

    } else if (request.msg == 'logout_people') {
        console.log("logout (people)")
        let count = request.count
        let domObserver = new MutationObserver((_) => {
            let currentCount = document.getElementsByClassName("uGOf1d")[0]
            console.log(currentCount)
            if ( currentCount.textContent < count) {
                logout()
            }
        })
        domObserver.observe(document, { childList: true, subtree: true })
        sendResponse({ msg: "waiting people count to logout"})
    }
})

function logout() {
    console.log("logging out...")
    let button = document.querySelector("[aria-label='Chiudi la chiamata']")
    button.click()
}