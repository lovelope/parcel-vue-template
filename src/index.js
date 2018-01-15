import Vue from 'vue/dist/vue.esm';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui/lib/index';

import app from './app.vue';
import router from './router';
import './index.less';

Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  router,
  el: 'app',
  components: {
    app,
  },
});
/* eslint-enable no-new */
