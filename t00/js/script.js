const superTeam = {
  title: "",
  leader: "",
  members: [],
  memberCount: 8,
  agenda: "",
  isEvil: false,
}
let a = prompt("Enter name: ");
let b = prompt("Enter leader: ");
let c = prompt("Enter members(enter the names separated by a comma): ");
let d = prompt("Enter agenda: ");
let e = prompt("Enter isEvil: ");


superTeam.title = String(a);
superTeam.leader = String(b);
superTeam.agenda = String(c);
superTeam.members = d;
superTeam.isEvil = Boolean(e);

d = d.split(',');
superTeam.members = d;

alert(`name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members}
memberCount - ${superTeam.memberCount}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`)