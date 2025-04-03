console.log("Write a program to store information (name, yearOfEstablishment,  municipal) of your school and college. Then check wether the school and college are in the same municipal.");

const school= {
  name: "Sanchez Mira School of Arts and Trades", 
  yearEst: 1963,
  municipal: "Sanchez Mira"
}
const college= {
  name: "Cagayan States University", 
  yearEst: 1978,
  municipal: "Sanchez Mira"
}

if(college.municipal == school.municipal)
{
  console. log("YES");
}
else
{
  console.log("NO");
}
