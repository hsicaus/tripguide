<template>
  <div id="Login">
    <div class="Login">
      <h1 style="font-size: 2rem; font-weight: 500; line-height: 8rem; margin-bottom:-2rem;"><span style="color:orange">登陆</span>以获取更多功能</h1>
      <div style="width: 300px; margin: auto; margin-top: 1rem;">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="background-color: orange; color:white;" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button style="background-color: orange; color:white;" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        <span style="color: gray;">账号admin 密码123456</span>
      </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    const validateusername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.username !== '') {
          this.$refs.ruleForm.validateField('username')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        password: '',
        username: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateusername, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations('user', ['setUser']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit', this.ruleForm)
          // 模拟网络请求
          if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123456') {
            const obj = {
              username: this.ruleForm.username,
              ifLogin: true,
              token: 'admin token'
            }
            this.setUser(obj)
            // this.$store.commit('user/setUser', obj)
            localStorage.setItem('user', JSON.stringify(obj))
            this.$router.replace('/')
          } else {
            this.$message.error('账号或密码错误')
          }
        } else {
          console.log('error submit')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
#Login{
background-color: orange;
position:absolute;
width: 100%;
height:100%;
}
.Login{
  background-color: white;
  margin: auto;
  width: 30rem;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow:5px 5px 10px rgba(0, 0, 0, 0.546);
  text-align: center;
  margin-top: 16rem;
}
</style>
