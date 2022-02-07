let projects = []

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById('input-project').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-project-image')
    let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(item => item.value)

    image = URL.createObjectURL(image.files[0])

    let project = {
        name,
        description,
        image,
        postedAt: new Date(),
        checkboxes
    }

    projects.push(project)

    renderProject()
}

function renderProject() {
    let lengthData = projects.length

    let projectContainer = document.getElementById('contents')
    projectContainer.innerHTML = firstProject()

    let i = 0
    for (i; i < lengthData; i++) {
        let checkIcons = projects[i].checkboxes.map(value => `<img src="assets/${value}">`)

        projectContainer.innerHTML += `
      <div class="project">
                    <div>
                        <img src="${projects[i].image}" alt="" />
                    </div>

                    <div>
                    <div>
                        <a href="project-detail.html">${projects[i].name}</a>
                    </div>
                    </div>

                    <div class="duration">
                        <p>Durasi: ${getDistanceDuration()}</p>
                    </div>

                    <div class="desc-container">
                        <p>
                            ${projects[i].description}
                        </p>
                    </div>


                    <div class="tech-skills">
                        `+ checkIcons + `
                    </div>

                    <div>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
      `
    }
}

function firstProject() {
    return `
    <div class="project">
                    <div>
                        <img src="assets/Me.png" alt="" />
                    </div>

                    <div>
                        <a href="project-detail.html">Dumbways Mobile App - 2022</a>
                    </div>

                    <div class="duration">
                        <p>Durasi: 3 bulan</p>
                    </div>

                    <div class="desc-container">
                        <p>
                            App that used for dumbways student, it was deployed and can downloaded on playstore. Happy
                            Download
                        </p>
                    </div>

                    <div class="tech-skills">
                        <img src="assets/Node-JS.png" alt="check">
                        <img src="assets/React-JS.png" alt="check">
                        <img src="assets/Next-JS.png" alt="check">
                        <img src="assets/Typescript.png" alt="check">
                    </div>

                    <div>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
    `
}


function getDistanceDuration() {
    let startdate = document.getElementById('start-date').value
    let enddate = document.getElementById('end-date').value

    const miliseconds = 1000
    const secondsInMinute = 60
    const minutesInHour = 60
    const secondsInHour = secondsInMinute * minutesInHour
    const hoursInDay = 23

    let dateOne = new Date(startdate)
    let dateTwo = new Date(enddate)

    let finalDate = Math.abs(dateOne - dateTwo);
    let dateDistance = Math.floor(finalDate / (miliseconds * secondsInHour * hoursInDay))

    if (dateDistance < 30) {
        return `${dateDistance} Day`
    } else {
        let monthConvert = Math.floor(finalDate / (miliseconds * secondsInHour * hoursInDay * 30));
        if (monthConvert >= 1) {
            return `${monthConvert} Month`
        }

    }
}