let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  }, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere.vulputate@sed.com"
  }, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@convallis.edu"
  }];
  
let newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};
contacts.push(newContact);

console.log(`${contacts[0].name}/${contacts[0].phone}/${contacts[0].email}`);
let n = contacts.length;
console.log(`${contacts[n-1].name}/${contacts[n-1].phone}/${contacts[n-1].email}`);

