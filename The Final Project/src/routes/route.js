import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controller/controller';

const routes = (app) => {

    app.route('/contact')
    // GET
    // .get((req, res, next) => {
    //     // MIDDLEWARE
    //     console.log(`Request from :${req.originalUrl}`)
    //     console.log(`Request type: ${req.method}`)
    //     next();
    // }, (req, res, next) => {
    //     res.send('GET request Successful!!!')        
    // })

    // GET
    .get(getContacts)
    
    // POST ENDPOINT
    .post(addNewContact);
// ===============================================
// ===============================================
    app.route('/contact/:contactID')

    // GET a Specific CONTACT
    .get(getContactWithID)

    // PUT
    // .put((req, res) =>
    // res.send('PUT request Successful!!!!'))

    // UPDATING a Specific CONTACT
    .put(updateContact)

    //DELETE
    // .delete((req, res) =>
    // res.send('DELETE request Successful!'))

    // DELETING a Specific CONTACT
    .delete(deleteContact)
}
export default routes;






<form action="/contact" method="POST">

    label
    input



    button


</form>