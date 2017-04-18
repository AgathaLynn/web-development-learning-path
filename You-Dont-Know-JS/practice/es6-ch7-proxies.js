"use strict";
// playing with Proxies

// define an object
var family = {
  parents: ["dad", "mom"],
  children: ["Alice", "Bob", "Charlie", "Doreen"],
  size() {
    return this.parents.length + this.children.length;
  }
};

// define handlers
var handlers = {
  // custom get - logs "accessing", then gets and formats
  get(target, key, context) {
    console.log("accessing: ", key);
    var res = Reflect.get(target, key, context);
    if (Array.isArray(res)) {
      return res.join(" - ");
    }
    else {
      return res;
    }
  },
  // custom delete - does nothing special
  deleteProperty(target, prop) {
    Reflect.deleteProperty(target, prop);
    return true;
  },
  // allows you to use .child to add child to .children prop
  defineProperty(target, prop, attr) {
    if (prop == "child") {
      var val = Reflect.get(target, "children");
      if (!val) {
        attr.value = [].concat(attr.value);
        Reflect.defineProperty(target, "children", attr);
      }
      else {
        Reflect.set(target, "children", val.concat(attr.value));
      }
    }
    else {
      Reflect.defineProperty(target, prop, attr);
    }
    return true;
  }
};

// try out get
var proxy = new Proxy(family, handlers);
console.log(family.parents);
console.log(proxy.parents);

// try out delete
delete proxy.children;
console.log(family.children);
console.log(proxy.children);

// play around with defining properties
console.log("ATTEMPTING TO OVERWRITE DEFINE PROPERTY");
proxy.child = "William";
console.log(family.children);
console.log(proxy.children);

proxy.child = "Wilhelmina";
console.log(family.children);
console.log(proxy.children);
