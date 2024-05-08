<template>
  <div class="overview">
    <div class="top">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <h4>关于</h4>
          </div>
        </template>
        <div class="card-body">
          Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
          等后台系统解决方案。
        </div>
      </el-card>
    </div>
    <div class="view-list">
      <el-card style="max-width: 100%">
        <template #header>
          <div class="card-header">
            <h4>技术栈</h4>
          </div>
        </template>
        <div class="card-body">
          <div class="card-list">
            <div class="item">
              <span class="item-title">开发工具 : </span>
              <a class="item-link" href="#">Visual Studio Code</a>
            </div>
            <div class="item">
              <span class="item-title">编程语言 : </span>
              <a class="item-link" href="#">TypeScript 4.x + JavaScript</a>
            </div>
            <div class="item">
              <span class="item-title">构建工具 : </span>
              <a class="item-link" href="#">Vite 2.x / Webpack5.x</a>
            </div>
            <div class="item">
              <span class="item-title">前端框架 : </span>
              <a class="item-link" href="#">Vue 3.x</a>
            </div>
            <div class="item">
              <span class="item-title">路由工具 : </span>
              <a class="item-link" href="#">Vue Router 4.x</a>
            </div>
            <div class="item">
              <span class="item-title">状态管理 : </span>
              <a class="item-link" href="#">Vuex 4.x</a>
            </div>
            <div class="item">
              <span class="item-title">UI框架 : </span>
              <a class="item-link" href="#">Element Plus</a>
            </div>
            <div class="item">
              <span class="item-title">可视化 : </span>
              <a class="item-link" href="#">Echart5.x</a>
            </div>
            <div class="item">
              <span class="item-title">富文本 : </span>
              <a class="item-link" href="#">WangEditor</a>
            </div>
            <div class="item">
              <span class="item-title">工具库 : </span>
              <a class="item-link" href="#">@vueuse/core + dayjs + countup.js</a>
            </div>
            <div class="item">
              <span class="item-title">CSS预编译 : </span>
              <a class="item-link" href="#">Sass / Less</a>
            </div>
            <div class="item">
              <span class="item-title">HTTP工具 : </span>
              <a class="item-link" href="#">Axios</a>
            </div>
            <div class="item">
              <span class="item-title">Git Hook工具 : </span>
              <a class="item-link" href="#">husky</a>
            </div>
            <div class="item">
              <span class="item-title">代码规范 : </span>
              <a class="item-link" href="#">EditorConfig + Prettier + ESLint</a>
            </div>
            <div class="item">
              <span class="item-title">提交规范 : </span>
              <a class="item-link" href="#">Commitizen + Commitlint</a>
            </div>
            <div class="item">
              <span class="item-title">自动部署 : </span>
              <a class="item-link" href="#">Centos + Jenkins + Nginx</a>
            </div>
          </div>
          <div class="card-descriptions">
            <div class="card-title">生产环境依赖</div>
            <el-descriptions :column="2" border>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">vue</div>
                </template>
                <el-tag size="small">3.0.5</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">vue-router</div>
                </template>
                <el-tag size="small">4.0.6</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">vuex</div>
                </template>
                <el-tag size="small">4.0.0</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">axios</div>
                </template>
                <el-tag size="small">0.21.1</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">element-plus</div>
                </template>
                <el-tag size="small">1.0.2</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">mockjs</div>
                </template>
                <el-tag size="small">1.1.0</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">less</div>
                </template>
                <el-tag size="small">4.1.1</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">scss</div>
                </template>
                <el-tag size="small">0.2.4</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">EChart</div>
                </template>
                <el-tag size="small">5.1.1</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">@vueuse/core</div>
                </template>
                <el-tag size="small">4.9.1</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">countup.js</div>
                </template>
                <el-tag size="small">2.0.7</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">dayjs</div>
                </template>
                <el-tag size="small">1.10.4</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">pinia</div>
                </template>
                <el-tag size="small">2.0.0</el-tag>
              </el-descriptions-item>
              <el-descriptions-item>
                <template #label>
                  <div class="cell-item">wangeditor</div>
                </template>
                <el-tag size="small">4.6.17</el-tag>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.overview {
  .top {
    margin-bottom: 20px;
  }
  .view-list {
    margin-bottom: 20px;
    .card-list {
      margin-bottom: 40px;
      .item {
        margin: 8px;
        .item-title {
          font-size: 16px;
          margin-right: 16px;
        }
        .item-link {
          font-size: 14px;
          color: #409eff;
        }
        .item-link:hover {
          color: #83afea;
          border-bottom: 1px solid #83afea;
        }
      }
    }
    .card-descriptions {
      .card-title {
        font-size: 16px;
        margin: 16px 0;
      }
    }
  }
}
</style>
