import expect from 'must';

import ApiWay from '../lib/ApiWay';
import {assertSuccessful, assertArray} from './helpers/callbacks';

let QUERY_SCHEDULE_PER_PAGE = 100
let QUERY_SCHEDULE_PAGE = 0

let SINGLE_OPTION = {
   "projectId": "5953e75b9815455b4b6abae7",
   "owner": "5932e6879815455b4b1050f3"
}

let apiway = new ApiWay({
   // username: testUser.USERNAME,
   // password: testUser.PASSWORD,
   // auth: 'basic',
});
let awSchedule = apiway.getSchedule();

describe('Schedule', function() {
   before(function() {
   });

   it('create a schedule', function(done) {
      let id;
      awSchedule.addSchedule(SINGLE_OPTION, assertSuccessful(done, (err, response) => {
         expect(response).to.have.own('responseStatus')
         expect(response).to.have.own('data')
         expect(response.data).to.have.own('_id')
         id = response.data._id
         expect(response.data).to.have.own('cron')
         done()
      }))
   });

   it('get schedule info', function(done) {
      awSchedule.addSchedule(SINGLE_OPTION, assertSuccessful(done, (err, response) => {
      })).then((data) => {
          awSchedule.getSchedule(data.data.data._id, assertSuccessful(done, (err, response) => {
             // console.log(response)
             expect(response).to.have.own('responseStatus')
             expect(response).to.have.own('data')
             expect(response.data).to.have.own('_id')
             expect(response.data).to.have.own('cron')
             done()
          }))
       })
   });


   it('get all schedules', function(done) {
      getSchedules().then((schedules) => {
         console.log(schedules)
         expect(schedules).to.be.an.array();
         expect(schedules.length).to.be.above(0)
         done()
      })
   });

   // it('delete a schedule', function(done) {
   //    awSchedule.addSchedule(SINGLE_OPTION, assertSuccessful(done, (err, response) => {
   //    })).then((data) => {
   //       awSchedule.deleteSchedule(data.data.data._id, assertSuccessful(done, (err, response) => {
   //          expect(response).to.have.own('responseStatus')
   //          done()
   //       }))
   //    })
   // });
});

function getSchedules() {
   return new Promise((resolve, reject) => {
      getAllSchedule([], 0, (schedules) => {
         resolve(schedules)
      })
   })
}

function getAllSchedule(array, page, cb) {
   let options = {
      per_page: QUERY_SCHEDULE_PER_PAGE,
      page: page,
      state: "inactive"
   }
      awSchedule.getSchedules(options).then(res => {
         if (res != null && res.data != null && res.data.data != null && res.data.data.schedules != null) {
            let schedules = res.data.data.schedules
            if (schedules.length > 0) {
               let a = array.concat(schedules)
               getAllSchedule(a, page + 1, cb)
            } else {
               cb(array)
            }
         }
      })
}
