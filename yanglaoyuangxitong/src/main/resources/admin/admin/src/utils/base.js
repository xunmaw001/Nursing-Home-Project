const base = {
    get() {
        return {
            url : "http://localhost:8080/yanglaoyuangxitong/",
            name: "yanglaoyuangxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yanglaoyuangxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序养老院系统"
        } 
    }
}
export default base
