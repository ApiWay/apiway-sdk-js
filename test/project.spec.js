import expect from 'must';

import ApiWay from '../lib/ApiWay';
import testUser from './fixtures/user.json';
import {assertSuccessful, assertArray} from './helpers/callbacks';
let apiway = new ApiWay({ });
let awProject = apiway.getProject();

describe('Project', function() {
   let project;
   let data;
   let name = 'Kiosk-API-test'
   let full_name = 'ApiWay/kiosk-API-test'
   let owner = '591282603f4e5bc0b7c454c2'
   let email = "devops@bluehack.net"

   before(function() {
      data = {
         name: name,
         full_name: full_name,
         owner: owner,
         html_url: "https://github.com/ApiWay/Kiosk-API-test",
         provider: "github"
      };
   });

   it('should add a project ', function(done) {
      awProject.addProject(data, assertSuccessful(done, (err, response) => {
        expect(response.data).to.have.own('_id')
        done()
      }))
   });

   it('should update project ', function(done) {
      awProject.addProject(data, assertSuccessful(done, (err, response) => {
      })).then(res => {
         awProject.updateProject(res.data.data._id, data, assertSuccessful(done, (err, response) => {
            expect(response.data).to.have.own('_id')
            done()
         }))
      })
   });

   it('should get project information', function(done) {
      awProject.addProject(data, assertSuccessful(done, (err, response) => {
      })).then(res => {
         awProject.updateProject(res.data.data._id, data, assertSuccessful(done, (err, response) => {
         })).then((res) => {
            awProject.getProject(res.data.data._id, assertSuccessful(done, (err, response) => {
               // console.log("......" + JSON.stringify(response.data))
               expect(response.data).to.have.own('name', name)
               expect(response.data).to.have.own('full_name', full_name)
               expect(response.data).to.have.own('owner', owner)
               done()
            }))
         })
      })
   });

   it('should get project information', function(done) {
      awProject.addProject(data, assertSuccessful(done, (err, response) => {
      })).then(res => {
         awProject.getProjectsByUser(owner, assertSuccessful(done, (err, response) => {
            expect(response.data).to.have.own('projects')
            expect(response.data.projects).to.be.an.array();
            expect(response.data.projects.length).to.be.above(0)
            done()
         }))
      })
   });

   it('should add a email Subscriber', function(done) {
      awProject.addProject(data, assertSuccessful(done, (err, response) => {
      })).then(res => {
         console.log(res.data.data)
         let options = {
            email: email
         }
         awProject.addEmailSubscriber(res.data.data._id, options, assertSuccessful(done, (err, response) => {
            console.log(response.data.data)
            done()
         }))
      })
   });
});
