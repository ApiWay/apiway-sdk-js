/**
 * @file
 * @copyright  2017 BlueHack Inc.
 * @license    Licensed under MIT.
 *             Github.js is freely distributable.
 */

import Requestable from './Requestable';
import debug from 'debug';
const log = debug('apiway:schedule');

/**
 * A Schedule allows scoping of API requests to a particular ApiWay user.
 */
class Schedule extends Requestable {
   /**
    * Create a Schedule.
    * @param {string} [scheduleId] -
    * @param {Requestable.auth} [auth] - information required to authenticate to ApiWay
    * @param {string} [apiBase=https://api.apiway.io] - the base ApiWay API URL
    */
   constructor(scheduleId, auth, apiBase) {
      super(auth, apiBase);
      this.scheduleId = scheduleId;
   }

   /**
    * Get schedule information
    * @param {string} [scheduleId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getSchedule(scheduleId, cb) {
     return this._request('GET', `/schedules/${scheduleId}`, null, cb);
   }

   /**
    * Get schedule list
    * @param {string} [scheduleId]
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getSchedules(options, cb) {
      return this._request('GET', `/schedules`, options, cb);
   }

   /**
    * Get user's schedules list
    * @param {string} [userId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getSchedulesByUser(userId, options, cb) {
      return this._request('GET', `/schedules/users/${userId}`, options, cb);
   }

   /**
    * Get project related schedule list
    * @param {string} [projectId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the list of repositories
    * @return {Promise} - the promise for the http request
    */
   getSchedulesByProject(projectId, options, cb) {
      return this._request('GET', `/schedules/projects/${projectId}`, options, cb);
   }

   /**
    * Create a schedule
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   addSchedule(options, cb) {
      return this._request('POST', '/schedules', options, cb);
   }

   /**
    * Update data of schedule
    * @param {string} [scheduleId]
    * @param {object} options -
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateSchedule(scheduleId, options, cb) {
      return this._request('PUT', `/schedules/${scheduleId}`, options, cb);
   }

   /**
    * Update cron of Schedule
    * @param {string} [scheduleId]
    * @param {string} [when]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateScheduleWhen (scheduleId, when, cb) {
      let schedule = ''
      if (when.endsWith('m')) {
         schedule = `${when.replace('m', '')} * * * *`
      } else if (when.endsWith('h')) {
         schedule = `* ${when.replace('h', '')} * * *`
      }
      let options = {
         cron: schedule
      }
      return this._request('PUT', `/schedules/${scheduleId}`, options, cb);
   }

   /**
    * Update cron of Schedule
    * @param {string} [scheduleId]
    * @param {string} [interval]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateScheduleInterval(scheduleId, interval, cb) {
      let schedule = ''
      if (interval.endsWith('h')) {
         schedule = `* */${interval.replace('h', '')} * * *`
      } else if (interval.endsWith('d')) {
         schedule = `* * */${interval.replace('d', '')} * *`
      }
      let options = {
         cron: schedule
      }
      return this._request('PUT', `/schedules/${scheduleId}`, options, cb);
   }

   /**
    * Update cron of Schedule
    * @param {string} [scheduleId]
    * @param {string} [cron]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateCron(scheduleId, cron, cb) {
      let options = {
         cron: cron
      }
      return this._request('PUT', `/schedules/${scheduleId}`, options, cb);
   }

   /**
    * Update state of Schedule
    * @param {string} [scheduleId]
    * @param {string} [state]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   updateState(scheduleId, state, cb) {
      let options = {
         state: state
      }
      return this._request('PUT', `/schedules/${scheduleId}`, options, cb);
   }

   /**
    * Delete a schedule
    * @param {string} [scheduleId]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteSchedule(scheduleId, cb) {
      return this._request('DELETE', `/schedules/${scheduleId}`, null, cb);
   }

   /**
    * Delete schedules by userId
    * @param {string} [userId]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteSchedulesByUser(userId, cb) {
      return this._request('DELETE', `/schedules/users/${userId}`, null, cb);
   }

   /**
    * Delete schedules by projectId
    * @param {string} [projectId]
    * @param {Requestable.callback} [cb] - will receive the API response
    * @return {Promise} - the promise for the http request
    */
   deleteSchedulesByProject(projectId, cb) {
      return this._request('DELETE', `/schedules/projects/${projectId}`, null, cb);
   }
}

module.exports = Schedule;
