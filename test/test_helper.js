import jsdom from 'jsdom';
import _jq from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// setup testing environment to run like browser in command line
// emulate the DOM with jsdom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _jq(window); //looks for global.window instead of usual DOM

// build renderComponent() that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  //wrap html with jquery
  return $(ReactDOM.findDOMNode(componentInstance));
};

// build helper for event simulation
//allows simulate() to be chained on to any jquery objects
//cant use arrow functions due to the context of 'this'
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }

  //'this' is a reference to the jquery object that starts the simulation
  TestUtils.Simulate[eventName](this[0]);
};

// setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
