import expect from 'must';

import ApiWay from '../lib/ApiWay';
import {assertSuccessful, assertArray} from './helpers/callbacks';

let apiway = new ApiWay({ });
let awScheduler = apiway.getScheduler();

describe('Scheduler', function() {
   before(function () {});

   it('create a Scheduler', function (done) {
      let options = {
         "schedules": ["1111", "2222"]
      }
      awScheduler.addScheduler(options, assertSuccessful(done, (err, response) => {
         expect(response).to.have.own('responseStatus')
         expect(response.data).to.have.own('_id')
         done()
      }))
   });

   it('get a Scheduler', function (done) {
      let options = {
         "name" : "1",
         "schedules": ["1111", "2222"]
      }
      awScheduler.addScheduler(options, assertSuccessful(done, (err, response) => {
      })).then((data) => {
         awScheduler.getScheduler(data.data.data._id, assertSuccessful(done, (err, response) => {
            expect(response).to.have.own('responseStatus')
            expect(response.data).to.have.own('_id')
            expect(response.data).to.have.own('schedules')
            expect(response.data.schedules).to.be.an.array()
            expect(response.data.schedules.length).to.be.an.above(0)
            done()
         }))
      })
   });

   it('update a Scheduler', function (done) {
      let options = {
         "name" : "1",
         "schedules": ["1111"]
      }
      awScheduler.addScheduler(options, assertSuccessful(done, (err, response) => {
      })).then((data) => {
         awScheduler.updateScheduler(data.data.data._id, options, assertSuccessful(done, (err, response) => {
            expect(response).to.have.own('responseStatus')
            expect(response.data).to.have.own('_id')
            expect(response.data).to.have.own('name')
            expect(response.data.name).to.equal('1')
            expect(response.data).to.have.own('schedules')
            expect(response.data.schedules).to.be.an.array()
            expect(response.data.schedules.length).to.equal(1)
            done()
        }))
      })
   });

   it('get Schedulers', function (done) {
      let options = {
         "name" : "1",
         "schedules": ["1111"]
      }
      awScheduler.addScheduler(options, assertSuccessful(done, (err, response) => {
      })).then((data) => {
         awScheduler.getSchedulers(null, assertSuccessful(done, (err, response) => {
            expect(response).to.have.own('responseStatus')
            expect(response.responseStatus).to.equal('SUCCESS')
            expect(response.data).to.have.own('schedulers')
            expect(response.data.schedulers).to.be.an.array()
            expect(response.data.schedulers.length).to.be.above(0)
            done()
         }))
      })
   });


   it('delete a Scheduler', function (done) {
      let options = {
         "name" : "1",
         "schedules": ["1111"]
      }
      awScheduler.addScheduler(options, assertSuccessful(done, (err, response) => {
      })).then((data) => {
         awScheduler.deleteScheduler(data.data.data._id, options, assertSuccessful(done, (err, response) => {
            expect(response).to.have.own('responseStatus')
            expect(response.responseStatus).to.equal("SUCCESS")
            done()
         }))
      })
   });
})

