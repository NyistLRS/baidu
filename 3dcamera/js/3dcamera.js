/**
 * 3d相册js,通用方法
 * 
 */
;(function(root){
  root.camera = {}
  function getMethod(type){
    console.log(type);
  }
  /**
   * 得到容器对象
   */
  function getElement(selector){
    return document.querySelector(selector);
  }
  function getOptions(){
    return {
      contanier: '',
      data: [],
      width: '200',
      height: '100',
      align: 'center',
      speed: 'fast'
    }
  }
  function addClass(className){
    this.classList = this.classList + ' ' +className;
  }
  function getCamera(){
    debugger
    return camera.default.contanier;
  }
  /**
   * 初始化的方法
   * @param {Object} options
   */
  function init(options) {
    merge(options);
    console.log('初始化');
    var $el = getElement(getCamera());
    $el.style.background = "lightcyan";
    var camera = document.createElement('div');
    camera.classList = 'contanier';
    $el.appendChild(camera);
    addClass.call(camera,'aa');
  }
  /**
   * 把默认的属性和传进来的属性合并
   * @param {Object} option1
   * @param {Object} option2
   * @return {object} newOption 
   */
  function merge(option2){
    camera.default = {
      contanier: option2.contanier||getOptions().contanier,
      data: option2.data||getOptions().data,
      width: option2.width||getOptions().width,
      height: option2.height||getOptions().height,
      align: option2.align||getOptions().align,
      speed: option2.speed||getOptions().speed
    }
  }
  camera.default = getOptions();
  camera.init = init
  
})(window)
