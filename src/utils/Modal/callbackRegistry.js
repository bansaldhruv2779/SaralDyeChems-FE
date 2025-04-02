// callbackRegistry.js
class CallbackRegistry {
  constructor() {
    this.callbacks = {};
    this.nextId = 1;
  }

  register(callback) {
    const id = `cb_${this.nextId++}`;
    this.callbacks[id] = callback;
    return id;
  }

  invoke(id, ...args) {
    if (this.callbacks[id]) {
      this.callbacks[id](...args);
      // Optionally remove callback after invocation to prevent memory leaks
      this.unregister(id);
    }
  }

  unregister(id) {
    if (this.callbacks[id]) {
      delete this.callbacks[id];
    }
  }
}

// Create a singleton instance
export const callbackRegistry = new CallbackRegistry();
