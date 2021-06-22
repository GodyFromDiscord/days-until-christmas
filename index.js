function daysUntilChristmas(){
  const dayTime = 24 * 60 * 60 * 1000;
  const now = new Date();

  const currentYear = now.getFullYear();

  let christmasDay = new Date(currentYear, 11, 24).getTime();

  if(christmasDay < now - dayTime){
    christmasDay = new Date(currentYear + 1, 11, 24).getTime()
  }
  return Math.abs(Math.ceil((christmasDay - now) / dayTime));
}

module.exports = daysUntilChristmas;
