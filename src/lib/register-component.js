import Input from '../component/form-item-components/Input'
import PicUpload from '../component/form-item-components/PicUpload'
import Vue from 'vue'
const Register = {};
Register.install = function(){
    Vue.component("InputItem", Input);
    Vue.component("PicUploadItem", PicUpload);
}

export default Register;