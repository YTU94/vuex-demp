export default {
    buyVip({ commit }, e) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 后端api交互
                commit("setMemberInfo", {
                    userStatus: e.userStatus,
                    vipLevel: e.vipLevel
                })
                resolve("购买成功")
            }, 1000)
        })
    },
    getFreeVip({ commit, state }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 后端api交互
                if (state.userStatus == 0) {
                    commit("setMemberInfo", {
                        userStatus: 1,
                        vipLevel: 0
                    })
                    resolve("分享成功")
                } else {
                    resolve("分享成功")
                }
            }, 1000)
        })
    }
}
