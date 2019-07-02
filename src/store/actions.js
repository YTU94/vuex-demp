
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
    }
}
