// Write your JavaScript code here!

// window.addEventListener("load", function() {
//         // let listedPlanets;
//     // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     // let listedPlanetsResponse;
//     // listedPlanetsResponse.then(function (result) {
//     //     listedPlanets = result;
//     //     console.log(listedPlanets);
//     // }).then(function () {
//     //     console.log(listedPlanets);
//     //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     // })
//     let form = document.querySelector("form");
   
//     let list = document.querySelector("#faultyItems");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault(); // Prevent the default form submission behavior
        
//         let pilot = document.querySelector("input[name=pilotName]").value;
//         let copilot = document.querySelector("input[name=copilotName]").value;
//         let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
//         let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        
//         formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoLevel);
//     });


    

    
// });

//         // Get form input values

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function(result) {
      listedPlanets = result;
      console.log(listedPlanets);
    }).then(function() {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      const planet = pickPlanet(listedPlanets)
      addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
  
    const pilot = document.querySelector('input[name="pilotName"]').value
    const copilot = document.querySelector('input[name="copilotName"]').value
    const fuelLevel = document.querySelector('input[name="fuelLevel"]').value
    const cargoMass = document.querySelector('input[name="cargoMass"]').value
    const list = document.querySelector("#faultyItems");
    const form = document.querySelector('form')
  
    form.addEventListener('submit', function(event) {
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
      event.preventDefault();
    })
  });
   
        
    
        // Call formSubmission function to further process the inputs
        
 