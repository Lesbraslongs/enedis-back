'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.findOrCreateUser = exports.getUserByEnedisId = undefined;

var _index = require('./index');

var getUserByEnedisId = exports.getUserByEnedisId = function getUserByEnedisId(enedisId) {
  return _index.User.findById(enedisId);
};

var findOrCreateUser = exports.findOrCreateUser = function findOrCreateUser(firstname, lastname, enedisId, accessToken, refreshToken, usagePointId, expiresAt) {
  return _index.User.findOrCreate({
    where: { id: enedisId },
    defaults: {
      firstname: firstname,
      lastname: lastname,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresAt: expiresAt,
      usagePointId: usagePointId
    }
  });
};

var updateUser = exports.updateUser = function updateUser(user, newData) {
  var firstname = newData.firstname,
      lastname = newData.lastname,
      accessToken = newData.accessToken,
      usagePointId = newData.usagePointId;

  return user.update({ accessToken: accessToken, firstname: firstname, lastname: lastname, usagePointId: usagePointId });
};
//# sourceMappingURL=user.js.map