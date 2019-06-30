<template>
    <div class="course-card" @click="goVideoList(course)">
        <div class="card-img">
            <img :src="course.thumb" alt mode>
        </div>
        <div class="card-info">
            <div class="card-info__name">
                {{course.title}}
                <div class="card-info__desc" v-html="course.description"></div>
            </div>
            <div class="card-info__oth" v-if="course.charge">{{course.charge}}</div>
            <div class="card-info__oth" v-else>免费课程</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        course: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        goVideoList() {
            this.$emit("goVideoList", this.course);
        }
    }
};
</script>

<style lang="less">
.course-card {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    .card-img {
        flex: 0 0 auto;
        img {
            width: 120px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        }
    }
    .card-info {
        display: flex;
        flex: 1;
        text-align: left;
        padding-left: 20px;
        margin-bottom: -5px;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        &__name {
            font-size: 16px;
        }
        &__desc {
            font-size: 12px;
            color: #797979;
        }
        &__oth {
            font-size: 12px;
            color: rgb(255, 153, 0);
            margin-bottom: 10px;
        }
    }
}
</style>
