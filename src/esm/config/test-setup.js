var chai = require('chai');

var sinonChai = require('sinon-chai');

var chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());
chai.use(sinonChai);