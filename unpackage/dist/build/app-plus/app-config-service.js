
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/msg/msg","pages/my/my","components/common/common-list/common-list","pages/divider/divider","components/common/divider/divider","components/common/load-more/load-more","components/common/no-thing/no-thing","pages/search/search","pages/add-input/add-input","components/common/unpload-image/unpload-image","components/news/hot-cate/hot-cate","components/news/topic-list/topic-list","pages/topic-nav/topic-nav","pages/topic-detail/topic-detail","components/topic-detail/topic-info/topic-info","components/msg/msg-list/msg-list","pages/user-list/user-list","components/user-list/user-list","pages/user-chat/user-chat","components/user-chat/user-chat-list/user-chat-list","pages/detail/detail","components/common/bottom-input/bottom-input","components/common/more-share/more-share"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"Community Dating","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#323232","selectedColor":"#ED6384","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png"},{"pagePath":"pages/news/news","text":"动态","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png"},{"pagePath":"pages/msg/msg","text":"消息","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homed.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"时光信号","compilerVersion":"3.0.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F5F5","borderRadius":"4px","disabled":true,"placeholder":"搜索帖子","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/msg/msg","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息列表","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"left","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""},{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/common/common-list/common-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/divider/divider","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"分割线"}},{"path":"/components/common/divider/divider","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/common/load-more/load-more","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/common/no-thing/no-thing","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","placeholder":"搜索帖子","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"14px","text":"搜索"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":false}},{"path":"/components/common/unpload-image/unpload-image","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/news/hot-cate/hot-cate","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/news/topic-list/topic-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/topic-nav/topic-nav","meta":{},"window":{"navigationBarTitleText":"话题分类","enablePullDownRefresh":false}},{"path":"/pages/topic-detail/topic-detail","meta":{},"window":{"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/components/topic-detail/topic-info/topic-info","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/msg/msg-list/msg-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/user-list/user-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"slide-in-left","titleNView":{"autoBackButton":false,"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索用户","placeholderColor":"#6D6C67"},"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"15px","text":"取消"}]}}},{"path":"/components/user-list/user-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/user-chat/user-chat","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"bounce":"none","titleNView":{"buttons":[{"color":"#333333","colorPressed":"#FD597C","float":"right","fontSize":"20px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/components/user-chat/user-chat-list/user-chat-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"buttons":[{"type":"menu","float":"right"}]}}},{"path":"/components/common/bottom-input/bottom-input","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/common/more-share/more-share","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});