
const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const heading = document.createElement('h1');
    heading.textContent = "Contact";
    pageContent.append(heading);
    
    
    const contact = document.createElement('div');
    contact.classList.add('contact-div');
    pageContent.append(contact)
    
    const person = document.createElement('ul')
    person.textContent = "Chef Whiskers"
    contact.append(person)

    const position = document.createElement('li')
    position.textContent = "Head Chef"
    person.append(position)

    const phoneNumber = document.createElement('li')
    phoneNumber.textContent = "666-1234-5461"
    person.append(phoneNumber)

    const email = document.createElement('li')
    email.textContent = "notarealeamail@fake.com"
    person.append(email);

    content.append(pageContent);
};

export default createContactPage;