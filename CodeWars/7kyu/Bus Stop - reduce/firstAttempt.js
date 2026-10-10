var number = function(busStops){
  let peopleOnBus = 0
  
  for(busStop of busStops){
    let on = busStop[0]
    let off = busStop[1]
    
    peopleOnBus += on
    peopleOnBus -= off
  }
  
  return peopleOnBus
}