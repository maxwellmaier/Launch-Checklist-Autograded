// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  const missionTarget = document.querySelector('#missionTarget')
  missionTarget.innerHTML =
    `<h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name}</li>
                   <li>Diameter: ${diameter}</li>
                   <li>Star: ${star}</li>
                   <li>Distance from Earth: ${distance}</li>
                   <li>Number of Moons: ${moons}</li>
               </ol>
               <img src=${imageUrl}>`
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  const h2 = document.querySelector("#launchStatus");
  const pilotStatus = document.querySelector('#pilotStatus')
  const copilotStatus = document.querySelector('#copilotStatus')
  const fuelStatus = document.querySelector('#fuelStatus')
  const cargoStatus = document.querySelector('#cargoStatus')

  if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
    alert("Enter valid inputs")
  } else {
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
    list.style.visibility = 'visible'
  }

  if (validateInput(fuelLevel) === 'Is a Number') {
    if (Number(fuelLevel) < 10000) {
      h2.style.color = 'red'
      h2.textContent = 'Shuttle Not Ready for Launch'
      fuelStatus.textContent = 'Fuel level too low for launch'
    } else {
      fuelStatus.textContent = 'Fuel level high enough for launch'
    }
  }

  if (validateInput(cargoLevel) === 'Is a Number') {
    if (Number(cargoLevel) > 10000) {
      h2.style.color = 'red'
      h2.innerText = 'Shuttle Not Ready for Launch'
      cargoStatus.textContent = 'Cargo mass too heavy for launch'
    } else {
      cargoStatus.textContent = 'Cargo mass low enough for launch'
    }
  }

  if (Number(fuelLevel) >= 10000 && Number(cargoLevel) <= 10000) {
    list.style.visibility = 'visible'
    h2.textContent = 'Shuttle is Ready for Launch';
    h2.style.color = 'green';
  }
}

async function myFetch() {

  let res = await fetch('https://handlers.education.launchcode.org/static/planets.json')
  let planetsReturned = await res.json()

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * 6)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;