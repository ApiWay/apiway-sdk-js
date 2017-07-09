import expect from 'must';

import ApiWay from '../lib/ApiWay';
import testUser from './fixtures/user.json';
import {assertSuccessful, assertArray} from './helpers/callbacks';

describe('Instance', function() {
   let apiway;
   let instance;
   let projectId = '59173df991c95c06396593e6';
   let data;
   let owner = '591282603f4e5bc0b7c454c2'

   before(function() {
      apiway = new ApiWay({
         // username: testUser.USERNAME,
         // password: testUser.PASSWORD,
         // auth: 'basic',
      });
      instance = apiway.getInstance();
      data = {
         projectId: projectId
      };
   });

   it('should add a instance', function(done) {
      instance.addInstance(data, assertSuccessful(done, (err, response) => {
        expect(response.data).to.have.own('instanceId')
        done()
      }))
   });

   it('should update instance', function(done) {
      instance.updateInstance(data, assertSuccessful(done, (err, response) => {
         expect(response.data).to.have.own('instanceId')
         done()
       }))
   });

   it('should get user\'s project list', function(done) {
      instance.updateInstance(data, assertSuccessful(done, (err, response) => {
        instance.getInstancesByUser(owner, assertSuccessful(done, (err, response) => {
          // console.log("......" + JSON.stringify(response.data))
          expect(response.data).to.have.own('instances')
          expect(response.data.instances).to.be.an.array();
          expect(response.data.instances.length).to.be.above(0)
          done()
        }))
      }))
   });

   it('should get user\'s project list', function(done) {
      instance.updateInstance(data, assertSuccessful(done, (err, response) => {
        instance.getInstancesByProject(projectId, assertSuccessful(done, (err, response) => {
          // console.log("......" + JSON.stringify(response.data))
          expect(response.data).to.have.own('instances')
          expect(response.data.instances).to.be.an.array();
          expect(response.data.instances.length).to.be.above(0)
          done()
       }))
     }))
   });
});
