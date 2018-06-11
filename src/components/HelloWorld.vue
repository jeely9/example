<template>
  <div class="hello">
    <!--<h3 class="title">基础设施智慧服务系统</h3>-->
    <!--<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" color="#fff" label-width="100px" class="demo-ruleForm">-->
      <!--<el-form-item label="用户名" prop="username">-->
        <!--<el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="密码" prop="checkPass">-->
        <!--<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>-->
        <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
      <!--</el-form-item>-->
    <!--</el-form>-->
    <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container" style="width: 50%;margin-left: 25%;">
      <h3 class="title">基础设施智慧服务系统</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import API from '../api/api_user';
  export default {
    // data() {
    //   var validatePass = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入用户名'));
    //     } else {
    //       if (this.ruleForm2.checkPass !== '') {
    //         this.$refs.ruleForm2.validateField('checkPass');
    //       }
    //       callback();
    //     }
    //   };
    //   var validatePass2 = (rule, value, callback) => {
    //     if (value === '') {
    //       callback(new Error('请输入密码'));
    //     }  else {
    //       callback();
    //     }
    //   };
    //   return {
    //     ruleForm2: {
    //       username: 'admin',
    //       checkPass: '123456',
    //     },
    //     rules2: {
    //       username: [
    //         { validator: validatePass, trigger: 'blur' }
    //       ],
    //       checkPass: [
    //         { validator: validatePass2, trigger: 'blur' }
    //       ]
    //     }
    //   };
    // },
    // methods: {
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         this.$router.push({ path: 'main' })
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
    //   resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
    // }
    data() {
      return {
        loading: false,
        account: {
          username: 'admin',
          pwd: '123456'
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleLogin() {
        let that = this;
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {
            // this.loading = true;
            // let loginParams = {username: this.account.username, pwd: this.account.pwd};
            // API.login(loginParams).then(function (result) {
            //   that.loading = false;
            //   if (result && result.id) {
                // localStorage.setItem('access-user', JSON.stringify(result));
//                that.$store.commit('SET_ROUTERS', user.permissions)
//                that.$router.addRoutes(that.$store.getters.addRouters);
//                that.$router.options.routes = that.$store.getters.routers;
                that.$router.push({path: 'MainPage'});
            //   } else {
            //     that.$message.error({showClose: true, message: result.errmsg || '登录失败', duration: 2000});
            //   }
            // }, function (err) {
            //   that.loading = false;
            //   that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            // }).catch(function (error) {
            //   that.loading = false;
            //   console.log(error);
            //   that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            // });
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello{
    width: 80%;
    margin-top: 150px;
    background: url("../assets/images/bg1.jpg") no-repeat center;
  }
  .title{
    color: #fff;
    font-size: 26px;
  }
  market_out .el-form-item__label{
    color: #fff;
  }
</style>


