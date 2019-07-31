/**
 */
const $container = {
  /**
   */
  services: {},
  /**
   * @param {string} name
   * @returns {*}
   */
  get(name) {
    return this.services[name];
  },
  /**
   * @param {string} name
   * @param {function} service
   */
  set(name, service) {
    this.services[name] = service;
  },
};

export default $container;
