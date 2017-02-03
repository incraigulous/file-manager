/**
 * GROUPS EVENT BUS
 * ////////////////
 *
 * Acts as an event bus to allow group components to communicate with each other using:
 *
 * bus.$emit('key', data)
 * - and -
 * bus.$on('key', callback)
 */

import Vue from 'vue'

export default new Vue()