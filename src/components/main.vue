<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 7}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
        <div class="cover">
          <div class="content">
            <div class="avatarContainer">
              <div class="avatar"></div>
            </div>
          </div>
        </div>
      </Col>
      <Col :span="spanRight">
        <div class="layout-right-body">
          <div class="layout-header">
            <Button type="text" @click="toggleClick" class="">
              <Icon type="navicon" size="32"></Icon>
            </Button>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
          <div class="layout-copy">
            2017 &copy; Neo Jiang
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spanLeft: 7,
        spanRight: 17
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 7 ? 14 : 24;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 7) {
          this.spanLeft = 2;
          this.spanRight = 22;
        } else {
          this.spanLeft = 7;
          this.spanRight = 17;
        }
      }
    }
  }
</script>
<style scoped>
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .avatarContainer{
    position: relative;
    height: 200px;
    display:-webkit-box;
    -webkit-box-pack:center;
    -webkit-box-align:center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50px 50px ;
    background-size: contain;
    background-image: url(/static/img/avatar_normal.jpg);
  }
  .avatar:hover {
    background-image: url(/static/img/avatar_hover.jpg);
    -webkit-animation: rotating 3s linear infinite;
    animation: rotating 3s linear infinite;
  }
  .layout{
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }
  .layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .cover {
    height: 100%;
    width: 100%;
    background:linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.75)) repeat scroll 0% 0% transparent;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .layout-menu-left{
    height: 100%;
    background: url(/static/img/tools.jpg) no-repeat;
    background-position: top center;
    background-size: auto 100%;
  }
  .layout-header{
    height: 3rem;
    background: #fff;
    border-bottom: 1px solid #ddd
    /*box-shadow: 0 1px 1px rgba(0,0,0,.1);*/
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
  .layout-right-body {
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
