const {Router} = require('express');
const Validate = require('./middlewares/validators')


const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = Router();


routes.post('/ongs',Validate.OngCreation,OngController.create);
routes.post('/session',SessionController.create);

routes.get('/ongs', OngController.index);



routes.get('/incidents',Validate.incidentPage,IncidentController.index);

routes.use(Validate.token);
routes.post('/incidents',Validate.incidnetCreation,IncidentController.create);
routes.delete('/incidents/:id',Validate.incidentDelete,IncidentController.delete);
routes.get('/profile',ProfileController.index);

module.exports = routes;