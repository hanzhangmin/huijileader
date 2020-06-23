import axios from "axios"

export function requeste(config) {
    const instance1 = axios.create({
        baseURL: "http://47.105.118.98/jdpth/",
        timeout: 5000
    })
    instance1.interceptors.response.use((res) => {
        return res.data
    }, err => {
        return Promise.reject(err)
    })
    return instance1(config)
}
export function request_login(config) {
    const instance1 = axios.create({
        baseURL: "http://www.huitengit.com/jdpth/",
        timeout: 5000
    })
    instance1.interceptors.response.use((res) => {
        return res.data
    }, err => {
        return Promise.reject(err)
    })
    return instance1(config)
}
export function requestf(config) {
    const instance1 = axios.create({
        baseURL: "http://47.105.118.98/jdpt/",
        timeout: 5000
    })
    instance1.interceptors.response.use((res) => {
        return res.data
    }, err => {
        return Promise.reject(err)
    })
    return instance1(config)
}

// 登录
export function post_login(str1, str2, str3) {
    return request_login({
        url: "h/llogin",
        method: "POST",
        dataType: "JSON",
        params: {
            mAccountnumber: str1,
            mPassword: str2,
            mType: Number(str3)
        }
    })
}
// 通过时间和id得到反馈数量0：全区
export function post_fksum(id, theday) {
    return requeste({
        url: "Fankuileader",
        method: "POST",
        dataType: "JSON",
        params: {
            zhenId: id,
            time: theday
        }
    })
}
//  通过时间得到反馈类型数量0：全区
export function post_fltype(time) {
    return requeste({
        url: "qulxbintu",
        method: "POST",
        dataType: "JSON",
        params: {
            time: time
        }
    })
}
// 通过得到近年来全区资金（年表）
export function post_zijin_all(id) {
    return requeste({
        url: "leaderCapitalController/findAllCapital",
        method: "POST",
        dataType: "JSON",
        params: {
            regionId: id
        }
    })
}
// 通过镇id和年份startpage, pagesize获取组织活动
export function post_huodong(id, year, thepage, pagesize) {
    return requeste({
        url: "h/huodongFindByZhenAndTime",
        method: "POST",
        dataType: "JSON",
        params: {
            mZhenid: id,
            year: year,
            startPage: thepage,
            pageSize: pagesize
        }
    })
}
// 得到全区党员情况
export function post_dylist() {
    return requeste({
        url: "CountByqu",
        method: "POST",
        dataType: "JSON",
    })
}
// 通过镇id获取所有村
export function post_villages_zhen(id) {
    return requeste({
        url: "cun_List",
        method: "POST",
        dataType: "JSON",
        params: {
            zhenId: id
        }
    })
}
// 根据镇id获取反馈列表
export function post_fankui_zhen(thetime, zhuangtai, startPage, pageSize, zhenId) {
    return requeste({
        url: "ququanfankui",
        method: "POST",
        dataType: "JSON",
        params: {
            time: thetime,
            zhuangtai: zhuangtai,
            startPage: startPage,
            pageSize: pageSize,
            zhenId: zhenId
        }
    })
}
// 通过镇名字和村id获取反馈列表
export function post_fankui_V(time, zhuangtai, startPage, pageSize, zhenName, vId) {
    return requeste({
        url: "ququanfankui",
        method: "POST",
        dataType: "JSON",
        params: {
            time: time,
            zhuangtai: zhuangtai,
            startPage: startPage,
            pageSize: pageSize,
            zhenname: zhenName,
            villageId: vId
        }
    })
}
// 通过反馈id获取反馈详情
export function get_fkdetail_byid(id) {
    return requestf({
        url: `/YichuliInfo/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取反馈类型
export function get_feedback_type() {
    return requestf({
        url: `/AllBacktype/`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取村图片
export function get_v_imgs(vid) {
    return requestf({
        url: `FindVimg/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 主页获取村简介
export function get_v_intro(vid) {
    return requestf({
        url: `FindVillagesurveyByVid/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 村发展规划
export function get_v_guihua(vid) {
    return requestf({
        url: `FindCunfazhanByVillageId/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取村干部列表，根据村ID
export function get_vmanagers_list(vid) {
    return requestf({
        url: `PageFindVillagecadres/${vid}/1/1000`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取补助对象通过页码和村id，默认一页显示10条
export function get_subsidyObj_by_vid(vid, page, pagesize) {
    return requestf({
        url: `PageFindSubsidyobjectByCunId/${vid}/${page}/${pagesize}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取补助对象通过页码和村id,姓名，默认一页显示10条
export function get_subsidyObj_by_vidAndName(vid, name, page, pagesize) {
    return requestf({
        url: `SearchSubsidyobjectByName/${vid}/${name}/${page}/${pagesize}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取补助户通过页码和村id，默认一页显示10条
export function get_buzhuhu_by_vid(vid, page, pagesize) {
    return requestf({
        url: `PageFindBuzhuhuById/${vid}/${page}/${pagesize}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 获取村会议通过页码和村id，默认一页显示10条
export function get_huiyi_by_vid(vid, page, pageSize) {
    return requestf({
        url: `FindHuiyiByCunId/${vid}/${page}/${pageSize}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 获取村活动通过页码和村id，默认一页显示10条
export function get_activity_by_vid(vid, page, pagesize) {
    return requestf({
        url: `ListHuoDong/${vid}/${page}/${pagesize}`,
        dataType: "JSON",
        method: "GET"
    })
}
//获取迁入迁出通过页码和村id，默认一页显示10条,type迁出为2，迁入为1
export function get_qianyi_by_vid(vid, type, page, pageSize) {
    return requestf({
        url: `FindByCunIdLeixing/${vid}/${type}/${page}/${pageSize}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 通过会议id获取活动详情
export function get_meeting_details(id) {
    return requestf({
        url: `HuiYiXQ/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过活动id获取会议详情
export function get_activity_details(id) {
    return requestf({
        url: `Cunzuzhihuodongxq/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过迁入迁出id获取迁入详情
export function get_qianyi_details(id) {
    return requestf({
        url: `FindHKQYById/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 通过zhenid获取全镇资金详情
export function post_zjin_zhen(zhenId) {
    return requeste({
        url: "leaderCapitalController/findAllCapitalByZhenId",
        method: "POST",
        dataType: "JSON",
        params: {
            zhenId: zhenId
        }
    })
}
/*
type:
1:积极分子
2：发展对象
3：预备党员
4：正式党员
*/
export function post_dylist_bytype(vid, page, pageSize, type, year) {
    return requestf({
        url: `QSelect/`,
        dataType: "JSON",
        method: "POST",
        params: {
            villageId: vid,
            year: year,
            entity: type,
            startPage: page,
            pageSize: pageSize
        }
    })
}

// 获取党组织活动类型列表，通过页码
export function get_dzuzhihd_by_vid(vid) {
    return requestf({
        url: `queryAllLeiXing/1/10000/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过类型id查找活动列表queryAllHuoDong
export function get_dzuzhihd_list_by_vid(vid, page, zid, pageSize) {
    return requestf({
        url: `queryAllHuoDong/${page}/${pageSize}/${zid}/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}
// 通过id获取党组织活动详情
export function get_dzuzhihd_detail_by_id(id) {
    return requestf({
        url: `queryHuoDongById/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}

// 通过村id和年饭获取资金区域图
export function post_vzijin_year(vid, year) {
    return requeste({
        url: "leaderCapitalController/findAllCapitalByVillageId/",
        dataType: "JSON",
        method: "POST",
        params: {
            villageId: vid,
            date: year
        }
    })
}
// 通过资金id获取资金详情 url:uri+"findByZijinId/"+zjid,
export function get_zijinintro_byid(id) {
    return requestf({
        url: `findByZijinId/${id}`,
        dataType: "JSON",
        method: "GET"
    })
}
//通过村id获取资源 uri1 + "ResourceSelectDetalies/"+villageId+"/"+startpage+"/"+pagesize,
export function get_ziyuan_list_byvid(vid, page, pagesize) {
    return requestf({
        url: `ResourceSelectDetalies/${vid}/${page}/${pagesize}`,
        dataType: "JSON",
        method: "GET"
    })
}
//  url: uri1 + "findAssetsDetailsByCunid/"+villageId+"/"+startpage+"/"+pagesize,
export function get_zichan_list_byvid(vid, page, pagesize) {
    return requestf({
        url: `findAssetsDetailsByCunid/${vid}/${page}/${pagesize}`,
        dataType: "JSON",
        method: "GET"
    })
}
//通过村id 获取项目建设信息
export function get_project_byid(vid, page) {
    return requestf({
        url: `queryOperationManagements/${page}/8/${vid}`,
        dataType: "JSON",
        method: "GET"
    })
}