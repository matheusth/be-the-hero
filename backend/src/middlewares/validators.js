const {celebrate,Segments,Joi} = require('celebrate');

const Validate = {
    OngCreation :  celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            whatsapp: Joi.string().required().
            pattern(/^([1-9]{2})(9*)(\d{8})$/),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)
        })

    }),

    token : celebrate({
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required().length(8),
        }).unknown()
    }),

    incidentDelete : celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        })
    }),
    incidentPage : celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number()
        })
    }),
    incidnetCreation: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required().min(3),
            description: Joi.string().required().min(20),
            value: Joi.number()
        })
    })
}
module.exports = Validate;