<template>
    <div class="user-center">
        <h1>用户中心</h1>
        <div class>
            <section class="user-info">
                <label for class="user-info-label">账号</label>
                <span class="user-info-value">{{userInfo.account}}</span>
            </section>
            <section class="user-info">
                <label for class="user-info-label">身份</label>
                <span class="user-info-value">{{memberInfo}}</span>
            </section>
            <section class="vip-list">
                <ul class="container">
                    <li v-for="(item, index) in vipList" :key="index" class="list-item">
                        <div class="item-name">{{item.name}}</div>
                        <div class="item-content">
                            <span class="item-content__price">
                                {{item.charge}}元
                                <span class="item-content__date">/ 30天</span>
                            </span>
                            <button class="item-content__btn" @click="buy(item)">购买</button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    data() {
        return {
            vipList: []
        };
    },
    mounted() {
        this.vipList = [
            { name: "普通会员", charge: "10.00", value: "vip", key: "vip" },
            { name: "VIP1会员", charge: "50.00", value: "1", key: "level" },
            { name: "VIP3会员", charge: "100.00", value: "3", key: "level" },
            { name: "VIP9会员", charge: "1000.00", value: "9", key: "level" },
            { name: "VIP12会员", charge: "10000.00", value: "12", key: "level" }
        ];
    },
    computed: {
        ...mapState(["userInfo"]),
        ...mapGetters(["memberInfo"])
    },
    methods: {
        recharge() {},
        upgrade() {},
        buy() {}
    }
};
</script>

<style lang="less">
.user-center {
    padding: 0 20px;
    box-sizing: border-box;
    .user-info {
        display: flex;
        align-items: center;
        line-height: 2;
        border-bottom: 1px solid #eee;
        justify-content: space-between;
        &-label,
        &-value {
            flex: 0 0 auto;
        }
    }
    .user-info:last-child {
        border-bottom: none;
    }
    .container {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        box-sizing: border-box;
        .list-item {
            flex: 1;
            width: 100%;
            padding: 10px;
            text-align: left;
            box-sizing: border-box;
            margin-bottom: 20px;
            border-radius: 5px;
            list-style: none;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
            background: linear-gradient(
                to left top,
                rgb(234, 124, 62),
                rgb(173, 26, 139)
            );

            .item-name {
                display: block;
                width: 100%;
                color: #ffe5db;
            }
            .item-content {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
                &__price {
                    flex: 1;
                    color: rgb(255, 153, 0);
                    font-size: 22px;
                    .item-content__date {
                        font-size: 14px;
                        color: #ffe5db;
                    }
                }
                &__btn {
                    flex: 0 0 auto;
                    font-size: 16px;
                    background: transparent;
                    opacity: 0.9;
                    // background: linear-gradient(to left top,red, rgb(111, 0, 255));
                    // border-top-right-radius: 30px;
                    // border-bottom-right-radius: 30px;
                    color: #fff;
                    // padding:5px 20px;
                    line-height: 2;
                    &::after {
                        border: none;
                    }
                }
            }
            .item-description {
                width: 100%;
                font-size: 12px;
                color: #ffe5db;
            }
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
}
</style>

