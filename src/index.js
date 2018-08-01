import Vue from 'vue';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';

import App from './app.vue';
import router from './router';
import './index.less';

Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
/* eslint-enable no-new */
