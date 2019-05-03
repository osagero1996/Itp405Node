const frisby = require('frisby');

const { Joi } = frisby

it('should return a status of 200 when the event is found', () => {
    return frisby
    .get('http://localhost:8080/api/events/8')
    .expect('status', 200);
});

it('should return an error', () => {
    return frisby
    .get('http://localhost:8080/api/events/-1')
    .expect('status', 404);
});

it('should get all events', () => {
    return frisby
    .get('http://localhost:8080/api/events')
    .expect('status', 200);
});

it('should create a new event', () => {
    return frisby
        .post('http://localhost:8080/api/events', {
            title: 'Amazing Grace',
	        address: "1177 W 30th St",
            city: "Los Angeles",
            state: "CA",
            zip_code: 90007,
            date: "5/10/2019",
            start_time: "15:00",
            end_time: "18:00",
        })
        .expect('status', 200)
        .expect('json','title', 'Amazing Grace')
        .expect('json', 'address', '1177 W 30th St')
        .expect('json', 'city', 'Los Angeles')
        .expect('json', 'state', 'CA')
        .expect('json', 'date', '2019-05-10')
        .expect('json', 'zip_code', 90007)
        .expect('json', 'start_time', '15:00')
        .expect('json', 'end_time', '18:00');
});


it('should return a status of 200 when track is updated and appropriate response body', () => {

    return frisby
    .patch('http://localhost:8080/api/events/10', {
        title : "Why Hello There"
    })
    .expect('status', 200)
    .expect('json', 'title', 'Why Hello There');
});

it('should delete event', () => {
    
    return frisby
    .delete('http://localhost:8080/api/events/6')
    .expect('status', 204);
    

});

it('should not delete event and return 404', () => {
    
    return frisby
    .delete('http://localhost:8080/api/events/-1')
    .expect('status', 404);
    

});
