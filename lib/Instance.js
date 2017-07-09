/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */
import Requestable from './Requestable';
import debug from 'debug';
const log = debug('apiway:instance');

/**
 * A Project allows scoping of API requests to a particular ApiWay user.
 */
class Instance extends Requestable {
   /**
    * Create a Instance.
    * @param {string} [instance] - the instance to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   constructor(instance, auth, apiBase) {
      super(auth, apiBase);
      this.instanceId = instance;
   }

   /**
    * Get project information
    * @param {string} [projectId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getInstance(instanceId, cb) {
     return this._request('GET', `/instances/${instanceId}`, null, cb);
   }

   /**
    * Get user's project list
    * @param {string} [userId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getInstancesByUser(userId, options, cb) {
      return this._request('GET', `/instances/users/${userId}`, options, cb);
   }

   /**
    * Get project's instance list
    * @param {string} [projectId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getInstancesByProject(projectId, options, cb) {
      return this._request('GET', `/instances/projects/${projectId}`, options, cb);
   }

   /**
    * Add a new Instance
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addInstance(options, cb) {
      return this._request('POST', '/instances', options, cb);
   }

   /**
    * Update user's profile (Will create a new user if not exist)
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateInstance(instanceId, options, cb) {
      return this._request('PUT', `/instances/${instanceId}`, options, cb);
   }
}

module.exports = Instance;
