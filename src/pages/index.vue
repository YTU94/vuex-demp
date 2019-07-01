<template>
    <div class="index">
        <h1>你好</h1>
        <p class="text">
            尊敬的
            <span style="color: red;">用户</span>，欢迎来到德莱联盟！
        </p>

        <div class>
            <card
                :course="item"
                @goVideoList="goVideoList"
                v-for="(item, index) in courseList"
                :key="index"
            ></card>
        </div>
        <button class="footer-opt btn" @click="recharge">充值</button>
    </div>
</template>

<script>
import card from "../components/card";

export default {
    components: {
        card
    },
    data() {
        return {
            courseList: []
        };
    },

    created() {
        // Mock
        this.courseList = [
            {
                id: "1",
                thumb:
                    "//img1.mukewang.com/5cb831fd0949d9f306000338-590-330.jpg",
                title: "学习vuex",
                description: "2312",
                charge: "",
                permission: ""
            },
            {
                id: "2",
                thumb:
                    "//img1.mukewang.com/5cb831fd0949d9f306000338-590-330.jpg",
                title: "实战课程",
                description: "2312",
                charge: "实战课程",
                permission: "vip"
            },
            {
                id: "3",
                thumb:
                    "//img1.mukewang.com/5cb831fd0949d9f306000338-590-330.jpg",
                title: "v12会员专享课程",
                description: "2312",
                charge: "v12会员专享",
                permission: 12
            }
        ];
    },
    mounted() {},
    methods: {
        recharge() {
            this.$router.push("./userCenter");
        },
        goVideoList(e) {
            const r = this.checkPermission(e.permission);
            if (r) {
                alert(r);
            } else {
                this.$router.push({
                    name: "course",
                    params: {
                        id: e.id
                    }
                });
            }
        },
        checkPermission(p) {
            if (!p) return "";
            if (p === "vip") {
                if (this.userStatus !== "vip") {
                    return "您不是vip，无权观看";
                }
            } else if (typeof p === "number") {
                if (this.vipLevel < p) {
                    return "您的vip等级不够，无权观看";
                }
            }
        }
    }
};
</script>

<style lang="less">
.index {
    padding: 0 20px 20px;
    box-sizing: border-box;
    h1,
    .text {
        text-align: left;
    }
    .footer {
        position: absolute;
        bottom: 0;
        left: 20px;
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
}
</style>

