<template>

    <div class="sign-warp">
        <div class="login">
            <div class="logo"><img src="src/assets/images/login_logo.png"></div>
            <div class="content-warp">
                <el-input placeholder="请输入用户名" v-model="input3">
                    <template slot="prepend"><i class="iconfont icon-yonghu"></i> </template>
                </el-input>
                <el-input type="password" placeholder="请输入密码" v-model="input3">
                    <template slot="prepend"><i class="iconfont icon-password"></i></template>
                </el-input>
                <div class="remeber">
                    <el-checkbox v-model="checked" checked>自动登陆</el-checkbox>
                    <router-link to="">忘记密码</router-link>
                </div>
                <div class="opera">
                    <button type="submit" class="active">登陆</button>
                    <button>注册</button>
                </div>
            </div>

            <router-link to="" class="retrun">返回首页</router-link>
        </div>

    </div>
</template>
<style>

</style>
<script>
    export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
