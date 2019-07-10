'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataForUserByType = exports.deleteDataForUser = exports.createDataForUser = undefined;

var _index = require('./index');

var createDataForUser = exports.createDataForUser = function createDataForUser(userId, data, unit, type, usagePointId) {
  var DBdata = data.map(function (e) {
    return {
      unit: unit,
      timestamp: e.timestamp,
      value: e.value,
      userId: userId,
      type: type,
      usagePointId: usagePointId
    };
  });
  return _index.Data.bulkCreate(DBdata);
};

var deleteDataForUser = exports.deleteDataForUser = function deleteDataForUser(userId) {
  return _index.Data.findAll({ where: { userId: userId } }).then(function (datas) {
    datas.foreach(function (d) {
      return d.destroy({ force: true });
    });
  });
  //return Data.destroy({ where: { userId } });
};

var getDataForUserByType = exports.getDataForUserByType = function getDataForUserByType(userId, type) {
  return _index.Data.findAll({
    where: { userId: userId, type: type },
    order: [['timestamp', 'DESC']]
  });
};
//# sourceMappingURL=data.js.map