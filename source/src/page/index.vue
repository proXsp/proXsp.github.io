<template>
  <div>
    <el-container>
      <el-header>
        <about></about>
      </el-header>

      <el-main>
        <el-row>
          <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:2}" :md="{span:10,offset:2}">
            <div class="area-title">
              <span><i class="el-icon-s-custom"></i>{{titles.introduction}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="project-row">
          <el-col :xs="{span:12}" :sm="{span:8,offset:2}" :md="{span:8,offset:2}">
            <div class="icon-div"><img :src='me.picture' class="me-pic"></div>
          </el-col>
          <el-col :xs="{span:12}" :sm="{span:8,offset:2}" :md="{span:8,offset:2}">
            <ul class="me-desc">
              <li>技术爱好者</li>
              <li>多年全栈开发</li>
              <li>经历过大型PaaS平台研发、低代码平台研发</li>
              <li>精通微服务</li>
              <li>目前就职于<a href="https://baike.baidu.com/item/%E8%BF%9C%E5%85%89%E8%BD%AF%E4%BB%B6/3107423?fromtitle=%E8%BF%9C%E5%85%89%E8%BD%AF%E4%BB%B6%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&fromid=8748703&fr=aladdin" target="_blank">远光软件股份有限公司</a></li>
              <li style="margin-top: 10px">联系: <a href="#footer"><i class='el-icon-position'></i></a></li>
            </ul>
          </el-col>
        </el-row>

        <el-row class="area-row">
          <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:2}" :md="{span:10,offset:2}">
            <div class="area-title">
              <span><i class="el-icon-menu"></i>{{titles.project}}</span>
            </div>
          </el-col>
        </el-row>
        <el-row v-for="(item, index) in projects" :key="index" class="project-row" :class="item.rowClass">
          <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:2}" :md="{span:10,offset:2}">
            <div :body-style="{ padding: '0px' }">
              <router-link :to='item.page'>
                <img :src='item.image' class="image">
              </router-link>
            </div>
          </el-col>

          <el-col :xs="{span:24}" :sm="{span:16}" :md="{span:10}">
            <div class="project-desc" v-html="item.description"></div>
            <div class="desc-tag">
              <el-tag
                v-for="tag in item.tags"
                :key="tag.label"
                :color="tag.color"
                type="info"
                size="mini"
                effect="dark">
                {{ tag.label }}
              </el-tag>
            </div>
            <div class="desc-bottom">
              <span>{{item.name}}</span>：
              <a :href="item.linkAddr" target="_blank">github</a>
            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-footer id='footer'>
        <div class="contact">
          <div>
            联系：
            <a href="tel:13531101362" @mouseover="showFtel()"><i class="live-action el-icon-phone-outline"></i></a> |
            <a href="mailto:proXsp@163.com" @mouseover="showFmail()"><i class="live-action el-icon-message"></i></a>
          </div>
          <div>
            <span class="tel-text" v-if="status.show.ftelText">13531101362</span>
            <span v-if="status.show.ftelText && status.show.fmailText"> | </span>
            <span class="email-text" v-if="status.show.fmailText">proXsp@163.com</span>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

import about from './me/about.vue'

export default {
  components: {
    about
  },
  data () {
    return {
      titles: {
        introduction: 'PROFILE',
        project: 'MY PROJECTS'
      },
      me: {
        picture: require('../assets/me.png')
      },
      projects: [{
        page: '/hellodesigner',
        linkAddr: 'https://github.com/proXsp/HelloDesigner',
        name: 'HelloDesigner',
        description: '<ul>' +
        '<li>支持web端、pc端的开源绘图工具</li>' +
        '<li>web端提供轻量级SaaS服务，前后端分离</li>' +
        '<li>pc端提供离线版本，在有限网络下环境使用</li>' +
        '<li>基于开源库<a href="https://github.com/jgraph/mxgraph-js" target="_blank">mxgraphjs</a>无侵入式扩展，可跟随mxgraphjs升级</li>' +
        '<li>基于开源库<a href="https://www.electronjs.org/" target="_blank">Electron</a>进行PC端构建打包</li>' +
        '</ul>',
        image: require('../assets/projects/hello-design.png'),
        tags: [{
          label: 'JavaScript',
          color: '#ff2300'
        }, {
          label: 'Vue',
          color: '#527bf1'
        }, {
          label: 'mxGraph',
          color: '#85ff00'
        }, {
          label: 'electron',
          color: '#365984'
        }, {
          label: 'SpringBoot',
          color: '#29cc15'
        }, {
          label: 'Mysql',
          color: '#7264bf'
        }],
        rowClass: 'hellodesigner'
      }, {
        page: '/igrouppurchase',
        linkAddr: 'https://github.com/proXsp/IGroupPurchase',
        name: 'IGroupPurchase',
        description: '<ul>' +
        '<li>开源社区团购系统，建设中...欢迎参与建设，详见github</li>' +
        '<li>服务端采用微服务架构 <a href="https://spring.io/projects/spring-cloud-alibaba" target="_blank">spring cloud alibaba</a></li>' +
        '<li>流量管控、广告推荐、第三方认证、多终端、流程管理</li>' +
        '<li>客户端 <a href="https://flutterchina.club/" target="_blank">Flutter</a>提供多终端支撑</li>' +
        '</ul>',
        image: require('../assets/projects/igroup-purchase.png'),
        tags: [{
          label: '分布式',
          color: '#8099cc'
        }, {
          label: '微服务',
          color: '#e45050'
        }, {
          label: 'Nacos',
          color: '#536756'
        }, {
          label: 'Gateway',
          color: '#bdba4c'
        }, {
          label: 'Ribbon',
          color: '#29cc15'
        }, {
          label: 'Sentinel',
          color: '#71a6e8'
        }, {
          label: 'Zipkin',
          color: '#b11919'
        }, {
          label: 'Redis',
          color: '#000000'
        }, {
          label: 'Rocket mq',
          color: '#22617f'
        }, {
          label: 'Dubbo',
          color: '#27bfa3'
        }, {
          label: 'OAuth2.0',
          color: '#9a2525'
        }, {
          label: 'Spark',
          color: '#e04f4f'
        }, {
          label: 'Flutter',
          color: '#b12699'
        }],
        rowClass: 'igrouppurchase'
      }],
      status: {
        show: {
          ftelText: false,
          fmailText: false
        }
      }
    }
  },
  methods: {
    showFtel: function () {
      this.status.show.ftelText = true
    },
    showFmail: function () {
      this.status.show.fmailText = true
    }
  }
}

</script>

<style lang="less" scoped>
.image {
 width: 100%;
 max-width: 350px;
}
.project-row {
  background-color: #ffffff;
  margin-top: 20px;
  box-shadow: 1px 1px 10px #ccc;
  a, a:link, a:visited, a:hover, a:active, a:focus {
    text-decoration: none;
    color: #66b1ff;
  }
}
.area-row {
  margin-top: 50px;
}
.area-title {
  font-size: 26px;
  border-bottom: solid 1px #ccc;
  span {
    background-color: #79d6ea;
    color: #fff;
    border-radius: 8px;
    padding: 3px 3px 0px 3px;
    box-shadow: 2px 1px 2px #d6d4d4;
  }
}
.me-pic {
  width: 100%;
  max-width: 130px;
  border-radius: 10px;
}
.icon-div {
  padding: 5px;
}
.contact {
  text-align: center;
  color: #888;
}
.desc-tag {
  margin-top: 40px;
  margin-bottom: 20px;
  padding-left: 40px;
  .el-tag {
    margin-right: 3px;
  }
}
.desc-bottom {
  padding-left: 40px;
  position: absolute;
  bottom: 0px;
  margin-bottom: 35px;
}
.me-desc {
  list-style:none;
  color:#666;
}
@media screen and (max-width: 992px) {
  .desc-bottom {
    position: relative;
  }
  .me-desc {
    padding: 0;
    padding-right: 5px;
    font-size: 12px;
  }
}
.live-action {
  margin-left: 5px;
  margin-right: 5px;
  opacity: .1;
  animation:mymove 5s infinite;
  -webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
  animation-direction:alternate;/*轮流反向播放动画。*/
  animation-timing-function: ease-in-out; /*动画的速度曲线*/
  /* Safari 和 Chrome */
  -webkit-animation:mymove 5s infinite;
  -webkit-animation-direction:alternate;/*轮流反向播放动画。*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
}
@keyframes mymove {
    0%{
      transform: scale(1);  /*开始为原始大小*/
      opacity: .1;
    }
    25%{
        transform: scale(2); /*放大1.1倍*/
        opacity: .5;
    }
    50%{
        transform: scale(1);
        opacity: .1;
    }
    75%{
        transform: scale(2);
        opacity: .5;
    }

}
</style>

<style lang="less">
.project-desc {
  ul {
    list-style:none;
    color: #999;
    li {
      margin-bottom: 15px;
    }
  }
  a, a:link, a:visited, a:hover, a:active, a:focus {
    text-decoration: none;
    color: #66b1ff;
  }
}
@media screen and (max-width: 992px) {
  .project-desc {
    ul {
      padding: 10px 20px 10px 20px;
    }
  }
}
</style>
