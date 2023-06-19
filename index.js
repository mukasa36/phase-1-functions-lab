function distanceFromHqInBlocks(distance) {
    if (distance <= 42) {
       console.log(42 - distance);
      return 42 - distance;
    } else if (distance >= 42) {
       console.log(distance -42)
      return distance - 42;
    }
  }
  function distanceFromHqInFeet(value) {
  
  let blocksAway = distanceFromHqInBlocks(value);
  //console.log(" nada "+blocksAway * 264);
  return blocksAway * 264;
  }
  function distanceTravelledInFeet(start,destination){
    let myDistance ;
    let myblock =264;
    if (destination >= start){
       console.log("destination is greater "+(destination - start) *myblock)
      myDistance =(destination - start) *myblock
    }
    else if (destination < start ) {
      console.log("start is greater " + (destination - start) *264)
       myDistance =((start-destination) * 264) 
    }
  return myDistance;
  }
  function calculatesFarePrice(start, destination){
    let myFeet = distanceTravelledInFeet(start,destination);
    let charges =0;
    if (myFeet < 400){
      return  charges;
    }
    else if (myFeet>400 && myFeet<=2000) {
      charges =(myFeet -400) *0.02;
      return charges;
    }
    else if(myFeet >2000 && myFeet <2500){
      charges =(myFeet -2000) *25;
      console.log( "this is my charge"+charges);
      return charges;
    }
    else if (myFeet >2500) {
      return 'cannot travel that far';
    }
  }
  distanceFromHqInBlocks(50);
  distanceFromHqInFeet(43);
  distanceTravelledInFeet(50,58);
  calculatesFarePrice(50,58);