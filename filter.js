/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough); // [ { name: 'Michael', age: 23 } ]

  const paul = people.filter(p => p.name === "Paul");
  console.log(paul); //[ { name: 'Paul', age: 18 } ]
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
  })

  console.log(candidates)
/*   [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [ [Object], [Object], [Object] ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [ [Object], [Object], [Object] ]
    }
  ] */

  //More readable
  const has5yearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
  const candidate = students.filter(hasStrongSkills);
  console.log(candidate);

let list = candidates.map(n => [n.name]);
console.log(list) //[ [ 'Mark' ], [ 'Jason' ] ]
