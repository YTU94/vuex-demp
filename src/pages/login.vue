<template>
    <div class="login">
        <p class="login-title">
            <span class="login-title_left">Muke</span>
            <span class="login-title_right">Wang</span>
        </p>
        <div class="section">
            <input
                class="section-input"
                v-model="form.account"
                placeholder-class="input-holder"
                placeholder="请输入您的账号"
            >
        </div>
        <div class="section">
            <input
                class="section-input"
                type="password"
                v-model="form.password"
                placeholder-class="input-holder"
                placeholder="请输入您的密码"
            >
        </div>
        <button class="btn" @click="login">登录</button>

        <p class="login-text">版本归属@ytu所有</p>
    </div>
</template>

<script>
import store from "../store";

export default {
    data() {
        return {
            isHidden: false,
            isPassword: true,
            logs: [],
            form: {
                account: "",
                password: ""
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        onGotUserInfo() {},
        goRegister() {},
        ckeckLogin() {},
        login() {
            if (!this.form.account && !this.form.password) {
                return false;
                alert("请填写账号密码");
            }
            const that = this;
            setTimeout(() => {
                store.commit("login", {
                    account: that.form.account,
                    password: that.form.password
                });
                that.$router.push("./");
            }, 500);
        }
    }
};
</script>

<style lang="less">
.login {
    position: relative;
    top: 0;
    left: 0;
    padding: 0 45px;
    p {
        text-align: center;
    }
    &-title {
        color: #111111;
        font-size: 36px;
        padding: 40px 0 30px;
        &_left {
            padding: 0 15px;
        }
        &_right {
            background-color: #f29d38;
            border-radius: 5px;
            padding: 0 15px;
        }
    }
    .section {
        &-input {
            width: 100%;
            height: auto;
            border: none;
            margin-bottom: 30px;
            outline: none;
            font-size: 16px;
            line-height: 1.6;
            border-bottom: 1px solid #666;
        }
        .input-holder {
            color: #777777;
            font-size: 16px;
        }
    }
    .btn {
        width: 100%;
        height: auto;
        color: #fff;
        background: #373737;
        margin: 10px 0 20px;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
    }
    .btn-primary {
        color: #373737;
        background: #fff;
    }
    .login-text {
        position: fixed;
        left: 0;
        bottom: 60px;
        width: 100%;
        height: auto;
        font-size: 12px;
        color: #777777;
        text-align: center;
    }
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}
</style>
