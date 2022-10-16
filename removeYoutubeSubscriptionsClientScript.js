;(async function () {
    for (let i = 0; i < 100; i++) {
        try {
            await new Promise(resolve => setTimeout(resolve, 100))
            document
                .querySelectorAll(
                    "#content-section [version=modern].ytd-subscribe-button-renderer .yt-spec-touch-feedback-shape__fill"
                )
                [i].click()
            await new Promise(resolve => setTimeout(resolve, 100))
            document.querySelector("[aria-label='Se désabonner']").click()
        } catch (error) {
            console.log(error)
        }
    }
})()
