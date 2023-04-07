<template>
    <div class="box">
        <div class="title">
            <div>在线问诊服务</div>
            <div>文本分析和数据分析系统</div>
        </div>
        <div class="content">
            <div class="chunyu">
                <div class="BFC">
                    <img class="logo" src="@/assets/img/chunyuLogo.png" />
                </div>

                <div class="chunyu_detail">
                    春雨在线问诊,以真实临床医生手机接诊,涵盖全部17个一级科室,每天7x24小时,每次3分钟之内响应,是家庭医生、分级诊疗和慢病管理的主要入口。
                </div>
            </div>
            <div class="line"></div>
            <div class="chunyu">
                <div class="BFC">
                    <img class="logo" src="@/assets/img/haoDaFu-Logo.png" />
                </div>

                <div class="chunyu_detail">
                    基于分析中国患者的需求,好大夫在线创建了实时更新的互联网医生数据库、专业的网上分诊系统、互联网院后疾病管理和线上复诊服务、远程专家门诊服务等等。
                </div>
            </div>

        </div>
                <el-button class="btn" @click="enterAnalysis()" type="primary">进入分析</el-button>

    </div>
</template>

<script>
export default {
    name: 'enter',
    data() {
        return {};
    },
    methods: {
        enterAnalysis() {
            this.$router.push({
                name: 'c_distribution',
            });
        },
    },
    created() {},
};
</script>
<style scoped>
.box {
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;

    flex-direction: column;
}
.title {
    color: #64927c;
    letter-spacing: 0.5rem;
    font-size: 4rem;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    
}

.chunyu_detail {
    width: 340px;
    letter-spacing: 3px;
    line-height: 30px;
    font-size: 1.3rem;
    text-indent: 45px;
    color: rgb(133, 133, 133);
    transition: all 0.5s;
    margin-top: 1rem;
}
.chunyu:hover {
    text-shadow: 0 0 2px rgb(166, 241, 205);
    color: #64927c;
}
.chunyu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
}
.BFC {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.line {
    height: 24rem;
    width: 0.0625rem;
    background: #64927c;
    margin-left: 8rem;
    margin-right: 8rem;
}
.btn {
    width: 10rem;
    font-size: 1.5rem;
    font-weight: bolder;
    transition: all 1s;
    overflow: hidden;
    margin-top: 3rem;
    margin-bottom: 10rem;
    /* cursor: wait; */
}
.btn:hover {
    box-shadow: 10px 10px 99px 6px rgba(131, 168, 150, 1);
}
</style>
