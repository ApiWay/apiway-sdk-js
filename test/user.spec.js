import ApiWay from '../lib/ApiWay';
import testUser from './fixtures/user.json';
import {assertSuccessful, assertArray} from './helpers/callbacks';

describe('User', function() {
   let apiway;
   let user;

   before(function() {
      apiway = new ApiWay({
         // username: testUser.USERNAME,
         // password: testUser.PASSWORD,
         // auth: 'basic',
      });
      user = apiway.getUser();
   });

   it('should update user\'s profile', function(done) {
      const data = {
         login: "bluehackmaster",
         avatarUrl: "http://apiway.io/sjff",
         email: "master@bluehack.net",
         oauthProvider: "github"
      };
      user.updateProfile(data, assertSuccessful(done));
   });

   it('should get user\'s profile', function(done) {
     var userId = '591075a71af9c1a44fa2616f'
     // console.log('test start')
     user.getProfile(userId, assertSuccessful(done));
   });

});
