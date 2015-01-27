  //����url������һ�������ļ�ֵ����
  var url = require('url');
  function queryUrl(param, pathname, hash){

    var getParam = url.parse(req.url,true).query;
    clearNullValue(getParam);
    var hash = hash?hash:'';
    var pathname = pathname?pathname:'';
    var options = _.extend(getParam,param);
    return url.format(_.extend({
      pathname:pathname,
      query:options,
      hash:hash
    }));
  }

  //���һ������Ŀ�ֵ
  function clearNullValue(object){
    _.each(object,function(val,key){
      if(['null','undefined',''].indexOf(String(val)) !== -1){
        delete object[key];
      }
    });
  }
  
  module.exports = {
	queryUrl: queryUrl
  }


