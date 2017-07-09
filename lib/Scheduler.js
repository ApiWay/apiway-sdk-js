/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('apiway:scheduler');

/**
 * A Schedule allows scoping of API requests to a particular ApiWay user.
 */
class Scheduler extends Requestable {
   /**
    * Create a Schedule.
    * @param {string} [schedulerId] -
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   constructor(schedulerId, auth, apiBase) {
      super(auth, apiBase);
      this.schedulerId = schedulerId;
   }

   /**
    * Create a Scheduler
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addScheduler(options, cb) {
      return this._request('POST', '/schedulers', options, cb);
   }

   /**
    * Update Scheduler
    * @param {string} [schedulerId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateScheduler(schedulerId, options, cb) {
      return this._request('PUT', `/schedulers/${schedulerId}`, options, cb);
   }

   /**
    * Add Schedules
    * @param {string} [schedulerId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getScheduler(schedulerId, cb) {
     return this._request('GET', `/schedulers/${schedulerId}`, null, cb);
   }

   /**
    * Get Scheduler list
    * @param {string} [schedulerId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getSchedulers(options, cb) {
      return this._request('GET', `/schedulers`, options, cb);
   }

   /**
    * Delete a Scheduler
    * @param {string} [schedulerId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteScheduler(schedulerId, options, cb) {
      return this._request('DELETE', `/schedulers/${schedulerId}`, options, cb);
   }

   /**
    * Delete a Schedule in aScheduler
    * @param {string} [scheduleId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteSchedule(scheduleId, options, cb) {
      return this._request('DELETE', `/schedulers/${scheduleId}`, options, cb);
   }
}

module.exports = Scheduler;
