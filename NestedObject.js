const charieInfo = {
  MyPersonalInfo:{
  Name: "Charie B. Del Rosario ",
  Age: 18,
  Height: 5.2,
  Weight: 50,
  },
  Family: {
    Mother:"Lorenza Del Rosario ",
    Father:"Nestor Del Rosario ",
    Siblings:"Nessie,\nSally,\nJane,\nJanice,\nRozano,\nFreddie,\nFely"
  },
  School: {
    SchoolName: "SMSAT", 
    Grade: "12",
    Section: "Katmon"
  }
} 
  
delete charieInfo.MyPersonalInfo.Weight

console.log(charieInfo.MyPersonalInfo);
console.log(charieInfo.Family);
console.log(charieInfo.School
