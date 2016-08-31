/**
 * Created by my on 30.08.16.
 */
'use strict';

/**
 * A stack based finite state machine that acts as a brain.
 *
 * Not using the constructor pattern but rather use a more functional approach
 * @type {{stack: Array, popState: StackBasedFSM.popState, pushState: StackBasedFSM.pushState, getCurrentState: StackBasedFSM.getCurrentState, update: StackBasedFSM.update}}
 */
var StackBasedFSM = {
  /**
   * the states to go through
   */
  stack: [],

  /**
   * acts as a constructor
   */
  create: function() {
    return Object.create(this);
  },

  /**
   * pop the last executed state
   */
  popState: function popState() {
    return this.stack.pop();
  },

  /**
   * pushes a state to the stack.
   * it also checks if the given state is the current one,
   * if so, don't add it
   *
   * @param state
   */
  pushState: function pushState(state) {
    if (this.getCurrentState() !== state) {
      this.stack.push(state);
    }
  },

  /**
   * retrieves the top of the stack and returns it
   * if the stack is empty null is returned
   *
   * @returns {null}
   */
  getCurrentState: function getCurrentState() {
    return stack.length > 0 ? stack[stack.length - 1] : null;
  },

  /**
   * executes a state if given
   */
  update: function update() {
    var currentStateFn = this.getCurrentState();

    if (currentStateFn) {
      currentStateFn();
    }
  }
};

// ---------------------------------------------

module.exports = StackBasedFSM;
