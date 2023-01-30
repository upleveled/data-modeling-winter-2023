// - name
// - job position
// - role (editor, admin, no rights)
// - pets (with name and type)

const jobPositions = {
  ceo: 'CEO',
  developer: 'Developer',
};

const teamRoles = {
  editor: 'Editor',
  admin: 'Admin',
  noRights: 'no rights',
};

const teamMembers = [
  {
    id: 1,
    firstName: 'Kimberley',
    jobPosition: jobPositions.ceo,
    role: teamRoles.admin,
    pets: [
      {
        name: 'Wuff',
        type: 'dog',
      },
      {
        name: 'Miau',
        type: 'cat',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Victor',
    jobPosition: jobPositions.developer,
    role: teamRoles.editor,
    pets: [],
  },
];

// console.log(teamMembers);
// console.log(JSON.stringify(teamMembers, null, 4));

console.log(typeof teamMembers); // object

console.log(Array.isArray(teamMembers)); // true
console.log(Array.isArray({})); // false

console.log(typeof teamMembers.firstName); // undefined
console.log(typeof teamMembers[0].firstName); // string
console.log(typeof teamMembers[0].pets); // object

if (typeof teamMembers[0].firstName !== 'string') {
  throw new Error('first name is not a string');
}

// maps
// <div>First Name: <first name here></div>
// <div>Job Position: <job position here></div>

// teamMembers.map((teamMember) => {
//   return (
//     <div key={`teamMember-${teamMember.id}`}>
//       <div>First Name: {teamMember.firstName}</div>
//       <div>Job Position: {teamMember.jobPosition}</div>
//     </div>
//   );
// });

const jose = {
  id: 3,
  firstName: 'Jose',
  jobPosition: jobPositions.developer,
  role: teamRoles.editor,
  pets: [],
};

teamMembers.push(jose);

// console.log(teamMembers);

// console.log(
//   teamMembers.filter((teamMember) => {
//     return teamMember.id !== 3;
//   }),
// );

// teamMembers[0].firstName = 'Karl';

const teamMemberIndex = teamMembers.findIndex((teamMember) => {
  return (teamMember.firstName = 'Kimberley');
});

console.log(teamMemberIndex);

teamMembers[teamMemberIndex].firstName = 'Karl';

console.log(teamMembers);

const findTeamMember = teamMembers.find((teamMember) => {
  return teamMember.role === 'Editor';
});

console.log(findTeamMember);

// change team member name in React using find and map/filter and forEach
// https://codesandbox.io/s/change-name-on-click-61hiy4?file=/src/App.js
