<template>
	<div class="navWraper">
		<ul class="nav" :default-active="$route.path">
			<li><router-link to="/HelloWorld">首页</router-link></li>
			<li><router-link to="/Agent">地区概况</router-link></li>
			<li><router-link to="/SelfResearch">相关路线</router-link></li>
			<li><router-link to="/AboutUs">关于我们</router-link></li>
		</ul>
		<ul class="loginBox">
			<div v-show="userFlag" class="userFlag"  @click="unLogin">欢迎您！{{ruleForm2.userName}}</div>
			<div v-show="!userFlag">
				<el-button type="text" @click="dialogRegisterVisible = true">注册</el-button>
			    <el-button type="text" @click="dialogLoginVisible = true">登陆</el-button>
			</div>
			<el-dialog title="用户注册" :visible.sync="dialogRegisterVisible" width="30%">
			    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				
				  <el-form-item label="用户名" prop="userName" required>
				    <el-input v-model.number="ruleForm2.userName"></el-input>
				  </el-form-item>
				  <!-- <el-form-item
				    prop="email"
				    label="邮箱"
				    :rules="[
				      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
				      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
				    ]"
				  > -->
				  <el-form-item  prop="email" label="邮箱" required>
				    <el-input v-model="ruleForm2.email"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass" required>
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码" prop="checkPass" required>
				    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
				    <el-button class="cancleButton" @click="resetForm('ruleForm2')">取消</el-button>
				  </el-form-item>
				</el-form>
			</el-dialog>

			<!-- 登陆 -->
			<el-dialog title="用户登陆" :visible.sync="dialogLoginVisible" width="30%">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="用户名" prop="userName" required>
				    <el-input v-model.number="ruleForm2.userName"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass" required>
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
				    <el-button class="cancleButton" @click="resetForm('ruleForm2')">取消</el-button>
				  </el-form-item>
				</el-form>
			</el-dialog>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			var checkUserName = (rule, value, callback) => {
		        if (!value) {
		          return callback(new Error('用户名不能为空'));
		        }
		        setTimeout(() => {
		          if (value.length<6) {
		            callback(new Error('用户名不能少于6位'));
		          } else {
		            if (value.length>30) {
		              callback(new Error('用户名过长'));
		            } else {
		              callback();
		            }
		          }
		        }, 1000);
		      };
		      var checkEmail = (rule, value, callback) => {
		      	let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //邮箱验证正则表达式
		        if (!value) {
		          return callback(new Error('邮箱不能为空'));
		        }
		        setTimeout(() => {
		          if (!reg.test(value)) {
		            callback(new Error('请输入正确的邮箱地址'));
		          } 
		          else {
		            if (!reg.test(value)) {
		              callback(new Error('请输入正确的邮箱地址'));
		            } else {
		              callback();
		            }
		          }
		        }, 1000);
		      };
		      var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.ruleForm2.checkPass !== '') {
		            this.$refs.ruleForm2.validateField('checkPass');
		          }
		          callback();
		        }
		      };
		      var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.ruleForm2.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		      };
			return {
                dialogRegisterVisible: false,
                dialogLoginVisible:false,
		        formLabelWidth: '70px',
		        userFlag:false,
		        ruleForm2: {
		          pass: '',
		          userName:'',
		          checkPass: '',
		          email:''
		        },
		        rules2: {
		        	userName: [
		            { validator: checkUserName, trigger: 'blur' }
		          ],
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          checkPass: [
		            { validator: validatePass2, trigger: 'blur' }
		          ],
		          email: [
		            { validator: checkEmail, trigger: 'blur' }
		          ],
		        }
			}
		},
		methods: {
	      submitForm(formName) {
	      	var that = this;
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	          	// if(that.dialogLoginVisible){
            //         that.dialogLoginVisible = false
	          	// }else{
            //          this.dialogRegisterVisible = false;
	          	// }
	          	this.dialogRegisterVisible = false;
	            this.dialogLoginVisible = false;
	          	that.userFlag = true
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	        this.dialogRegisterVisible = false;
	        this.dialogLoginVisible = false;
	      },
	      unLogin(){
	      	let that = this;
	      	 this.$confirm('退出登录？', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$message({
	            type: 'success',
	            message: '退出成功!'
	          });
	          that.userFlag = false
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消退出登录操作'
	          });          
	        });
	      }
		}
      
	}

</script>
<style scoped>
    .navWraper{display:flex;justify-content: space-between;width:80%;padding:0 10%;background:#528cfc;}
	.nav .router-link-active{background:rgba(66,112,202);display: inherit;}
	.nav{display:flex;height:60px;line-height:60px;}
	.nav li{width:150px;text-align: center; }
	.nav li a{color:#fff;text-decoration: none}
	.loginBox{display:flex;align-items: center;}
	.loginBox a{color:#fff;text-decoration: none}
	.loginBox li{margin:0 5px;}
	.el-button{color:#fff;}
	.cancleButton{color:#333;}
	.el-form-item__content {margin-left:80px;}
	.el-dialog__body {padding: 30px 20%! important;}
	.userFlag{text-decoration: underline;cursor: pointer;color:#fff;}
</style>