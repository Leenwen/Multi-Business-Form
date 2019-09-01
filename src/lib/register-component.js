import Input from 'componentDir/Input'
import PicUpload from 'componentDir/PicUpload'
import Vue from 'vue'
const Register = {};
Register.install = function(){
    Vue.component("InputItem", Input);
    Vue.component("PicUploadItem", PicUpload);
}

export default Register;