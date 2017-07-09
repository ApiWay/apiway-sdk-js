/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('apiway:project');

/**
 * A Project allows scoping of API requests to a particular ApiWay user.
 */
class Project extends Requestable {
   /**
    * Create a Project.
    * @param {string} [fullName] - the project to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   constructor(fullName, auth, apiBase) {
      super(auth, apiBase);
      this.fullName = fullName;
   }

   /**
    * Get project information
    * @param {string} [projectId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getProject(projectId, cb) {
     return this._request('GET', `/projects/${projectId}`, null, cb);
   }

   /**
    * Get user's project list
    * @param {string} [userId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getProjectsByUser(userId, cb) {
      return this._request('GET', `/projects/users/${userId}`, null, cb);
   }

   /**
    * Add a repo as a Project
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addProject(options, cb) {
      return this._request('POST', '/projects', options, cb);
   }

   /**
    * Update data of project
    * @param {string} [projectId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateProject(projectId, options, cb) {
      return this._request('PUT', `/projects/${projectId}`, options, cb);
   }

   /**
    * Add a email subscriber
    * @param {string} [projectId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addEmailSubscriber(projectId, options, cb) {
      return this._request('POST', `/projects/${projectId}/subscribe/email`, options, cb);
   }

   /**
    * Delete a email subscriber
    * @param {string} [projectId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteEmailSubscriber(projectId, options, cb) {
      return this._request('DELETE', `/projects/${projectId}/subscribe/email`, options, cb);
   }

   setScheduleId(projectId, scheduleId, cb) {
      var options = {
         scheduleId: scheduleId
      }
      return this._request('PUT', `/projects/${projectId}`, options, cb);
   }

   /**
    * Update schedule of project
    * @param {string} [projectId]
    * @param {string} [when]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateScheduleWhen (projectId, when, cb) {
      let schedule = ''
      if (when.endsWith('m')) {
         schedule = `${when.replace('m', '')} * * * *`
      } else if (when.endsWith('h')) {
         schedule = `* ${when.replace('h', '')} * * *`
      }
      let options = {
         schedule: schedule
      }
      return this._request('PUT', `/projects/${projectId}`, options, cb);
   }

   /**
    * Update schedule of project
    * @param {string} [projectId]
    * @param {string} [interval]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateScheduleInterval(projectId, interval, cb) {
      let schedule = ''
      if (interval.endsWith('h')) {
         schedule = `* */${interval.replace('h', '')} * * *`
      } else if (interval.endsWith('d')) {
         schedule = `* * */${interval.replace('d', '')} * *`
      }
      let options = {
         schedule: schedule
      }
      return this._request('PUT', `/projects/${projectId}`, options, cb);
   }

   /**
    * Update schedule of project
    * @param {string} [projectId]
    * @param {string} [cron]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateScheduleCron(projectId, cron, cb) {
      let options = {
         schedule: cron
      }
      return this._request('PUT', `/projects/${projectId}`, options, cb);
   }

   /**
    * Delete a project
    * @param {string} [projectId]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteProject(projectId, cb) {
      return this._request('DELETE', `/projects/${projectId}`, null, cb);
   }
}

module.exports = Project;
