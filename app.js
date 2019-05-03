const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Event = require('./models/event');
const Organization = require('./models/organization');
const Event_Type = require('./models/event_type');

const { Op } = Sequelize;
const app = express();

app.use(bodyParser.json());

Event_Type.hasMany(Event, {
    foreignKey: 'EventTypeId'
});

Event.belongsTo(Event_Type, {
    foreignKey: 'EventTypeId'
});

app.get('/api/events', function(request, response){
    let filter = {};
    let { q } = request.query;

    if(q){
        filter = {
            where: {
                name: {
                    [Op.like]: '${q}%'
                }
            }
        };
    }

    Event.findAll(filter).then((events) => {
        response.json(events);
    });
});

app.get('/api/events/:id', function(request, response){
    let { id } = request.params;

    Event.findByPk(id,{
        include: [Event_Type]
    }).then((event) => {
        if(event){
            response.status(200).json(event);
        }else{
            response.status(404).json({});
        }
    });
});


app.post('/api/events', function(request, response){
    Event.create({
        title: request.body.title,
        address: request.body.address,
        city: request.body.city,
        state: request.body.state,
        zip_code: request.body.zip_code,
        date: request.body.date,
        start_time: request.body.start_time,
        end_time: request.body.end_time,
        org_id: request.body.org_id

    }).then((event) => {
        response.status(200).json(event);
    }, (validation) => {
        response.status(422).json({
            errors: validation.errors.map((errors) => {
                return{
                    attribute: errors.path,
                    message: errors.message
                };
            })
        });
    });
});

app.patch('/api/events/:id', function(request, response){
    let { id } = request.params;

    Event.findByPk(id).then((event) => {
        if(event) {
            event.title= request.body.title;
            event.address= request.body.address;
            event.city= request.body.city;
            event.state= request.body.state;
            event.zip_code= request.body.zip_code;
            event.date= request.body.date;
            event.start_time= request.body.start_time;
            event.end_time= request.body.end_time;
            event.org_id= request.body.org_id;
            event.save().then(() => {
                response.json(event)
                response.status(200).send();
            }, (validation) => {
                response.status(422).json({
                    errors: validation.errors.map((errors) => {
                        return{
                            attribute: errors.path,
                            message: errors.message
                        };
                    })
                });
            });
        } else {
            response.status(404).send();
        }
    }, (errors) => {
        response.status(500).send();
    });
});

app.delete('/api/events/:id', function(request,response){
    let { id } = request.params;

    Event
        .findByPk(id)
        .then((event) => {
            if (event) {
            // response.status(204).send();
            return event.destroy();
        } else {
            return Promise.reject();
        }
    })
    .then(() => {
        response.status(204).send();
    }, () => {
        response.status(404).send();
    });
    
});



app.listen(process.env.PORT || 8080);


