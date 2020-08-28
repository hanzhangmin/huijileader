import axios from "axios"
import store from "../store"
// 添加请求拦截器

export function newrequest(config) {
    const instance1 = axios.create({
        baseURL: "http://huitengit.com/admin-api/",
        timeout: 5000
    })
    instance1.interceptors.request.use(config => {
        // 在发送请求之前做些什么
        //判断是否存在token，如果存在将每个页面header都添加token
        if (store.state.token) {
            config.headers.Authorization = 'Bearer  ' + store.state.token
        }
        return config;
    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // http response 拦截器
    instance1.interceptors.response.use(
        response => {
            return response.data;
        },
        error => {
            return Promise.reject(error.response)
        });

    return instance1(config)
}

function geturl(obj) {
    var url = `?`
    for (let item in obj) {
        let value = obj[item]
        if (typeof value === "number") {
            url += `${item}=${value}&`
        } else if (typeof value === "string") {
            if (item.toString() === "join") {
                let arr = value.split(",")
                arr.forEach(thevalue => {
                    url += `${item}=${thevalue}&`
                })
            } else {
                url += `${item}=${value}&`
            }
        } else {
            url += `${item}=${JSON.stringify(value)}`
        }
    }
    return url
}

// 新连接

// 领导登录
export function post_user_login(username, password) {
    return newrequest({
        url: `user/login`,
        method: "POST",
        dataType: "JSON",
        params: {
            username: username,
            password: password
        }
    })
}
// 获取用户信息
export function get_user_info() {
    return newrequest({
        url: `user/info`,
        method: "GET",
        dataType: "JSON",
    })
}

// 通过村id获取村简介



// 群众意见建议处理
export function get_feedback(cid, fields) {
    return newrequest({
        url: `feedback/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

export function get_feedbacks(params) {
    return newrequest({
        url: `feedback${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}
// 全区意见建议
export function get_feedbacks_bytown(params) {
    return newrequest({
        // url: `town?join=village&join=village.feedback`,
        url: `town/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",

    })
}

export function get_partymembers_bytown() {
    return newrequest({
        url: `town?join=village&join=village.partymember`,
        method: "GET",
        dataType: "JSON",
    })
}
// 通过区朝招镇

// 通过村民id获取村民信息
export function get_towns(params) {
    return newrequest({
        url: `town${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_villages(params) {
    return newrequest({
        url: `village${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}


export function get_villager(cid) {
    return newrequest({
        url: `villager/${cid}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_villagers(params) {
    return newrequest({
        url: `villager/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}



export function get_village_intro(vid) {
    return newrequest({
        url: `village/${vid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            join: "villageCadre"
        }
    })
}



// 获取村公告
export function get_village_bulletins(vid, pageSize, page, fields) {
    return newrequest({
        url: `village-bulletin-board`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            limit: pageSize,
            page: page,
            join: "village",
            s: {
                "village.id": {
                    "$eq": vid
                }
            },
            sort: "createdAt,ASC"
        }
    })
}

export function get_village_bulletin(bid, fields) {
    return newrequest({
        url: `village-bulletin-board/${bid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取村干部信息
export function get_village_cadres(params) {
    return newrequest({
        url: `village-cadre/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         }
        //     },
        // }
    })
}

export function get_village_cadre(cid, fields) {
    return newrequest({
        url: `village-cadre/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取村会议信息
export function get_village_meetings(params) {
    return newrequest({
        url: `village-meeting/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     // fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         }
        //     },
        //     // sort: "createdAt,ASC"
        // }
    })
}

export function get_village_meeting(cid, fields) {
    return newrequest({
        url: `village-meeting/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取村活动信息
export function get_village_actions(params) {
    return newrequest({
        url: `village-action/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     // fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         }
        //     },
        //     // sort: "createdAt,ASC"
        // }
    })
}

export function get_village_action(cid, fields) {
    return newrequest({
        url: `village-action/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取项目建设信息
export function get_project_constractions(params) {
    return newrequest({
        url: `project-construction/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_project_construction(cid, fields) {
    return newrequest({
        url: `project-construction/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取党组织活动类型信息
export function get_action_types(params) {
    return newrequest({
        url: `org-action-type/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     // fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         }
        //     },
        //     // sort: "createdAt,ASC"
        // }
    })
}

export function get_action_type(cid, fields) {
    return newrequest({
        url: `org-action-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取党组织活动
export function get_org_actions(params) {
    return newrequest({
        //  url: `org-action?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}},"type.id":{"$eq":${type}}}&join=village&join=type`,
        url: `org-action/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village&join=type",
        //     join: {
        //         "village",
        //         type
        //     },
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "type.id": {
        //             "$eq": Number(type)
        //         }
        //     },
        //     sort: "createdAt,ASC"
        // }
    })
}

export function get_org_action(cid, fields) {
    return newrequest({
        url: `org-action/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取党员信息
export function get_party_members(params) {
    return newrequest({
        url: `party-member/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_party_member(cid, fields) {
    return newrequest({
        url: `party-member/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取补助类型信息
export function get_subsidy_types(params) {
    return newrequest({
        url: `subsidy-type/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_subsidy_type(cid, fields) {
    return newrequest({
        url: `subsidy-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取补助类型信息
export function get_subsidys(params) {
    return newrequest({
        url: `subsidy/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}
// console.log(geturl({
//     // fields: fields,
//     limit: 10,
//     page: 1,
//     join: "village,type",
//     s: {
//         "village.id": {
//             "$eq": Number(9)
//         },
//         "type.id": {
//             "$eq": 13
//         }
//     },
// }));


export function get_subsidy(cid, fields) {
    return newrequest({
        url: `subsidy/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// export function get_subsidy_infos(vid, personal, pageSize, page, keyword1, fields) {
export function get_subsidy_infos(params) {
    return newrequest({
        // url: `subsidy-info?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}},"name":{"$cont":${keyword}},"personal":${personal}}&join=village&join=subsidy`,
        url: `subsidy-info/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_subsidy_info(cid, fields) {
    return newrequest({
        url: `subsidy-info/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取户口迁移信息
export function get_migraters(params) {
    return newrequest({
        url: `migrate/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "type": type
        //     },
        // }
    })
}

export function get_migrater(cid, fields) {
    return newrequest({
        url: `migrate/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取组信息
export function get_groups(vid, fields) {
    return newrequest({
        url: `group`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
        }
    })
}

export function get_group(cid, fields) {
    return newrequest({
        url: `group/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 获取资源类别信息
export function get_resource_types(vid) {
    return newrequest({
        url: `resources-type`,
        method: "GET",
        dataType: "JSON",
        params: {
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
        }
    })
}

export function get_resource_type(cid, fields) {
    return newrequest({
        url: `resources-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}

// 查询资源
export function get_resources(params) {
    let vid = 9
    return newrequest({
        // url: `resources?limit=${pageSize}&page=${page}&s={"group.id":{"$eq":${zid}},"type.id":{"$eq":${type}}}&join=group&join=type`,
        url: `resources/${geturl(params)}`,
        // url: `resources?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}}}&join=village`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         }
        //     },
        // }
    })
}

export function get_resource(cid, fields) {
    return newrequest({
        url: `resources/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 获取资产类型
export function get_assets_types(vid, fields) {
    return newrequest({
        url: `assets-type`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields,
            join: "village",
            s: {
                "village.id": {
                    "$eq": Number(vid)
                }
            },
        }
    })
}

export function get_assets_type(cid, fields) {
    return newrequest({
        url: `assets-type/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 查询经营性资产
export function get_assetss(params) {
    return newrequest({
        //  url: `assets?limit=${pageSize}&page=${page}&s={"village.id":{"$eq":${vid}},"type.id":${type}}&join=village&join=type`,
        url: `assets/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields,
        //     limit: pageSize,
        //     page: page,
        //     join: "village",
        //     s: {
        //         "village.id": {
        //             "$eq": Number(vid)
        //         },
        //         "type": type
        //     },
        // }
    })
}

export function get_assets(cid, fields) {
    return newrequest({
        url: `assets/${cid}?join=operatingAssets&join=nonOperatingAssets`,
        method: "GET",
        dataType: "JSON",
        // params: {
        //     fields: fields
        // }
    })
}

// 大数据资金查询

export function get_bigdata_funds_data(date) {
    return newrequest({
        url: `funds/date/${date}`,
        method: "GET",
        dataType: "JSON",
    })
}
// 查询资金zid
export function get_funds(params) {
    return newrequest({
        url: `funds/${geturl(params)}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function get_fund(cid, fields) {
    return newrequest({
        url: `funds/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}
// 查询学习园地
export function get_learning_resources(type, pageSize, page) {
    return newrequest({
        url: `learning-resources`,
        method: "GET",
        dataType: "JSON",
        params: {
            limit: pageSize,
            page: page,
            s: {
                "type": type
            },
        }
    })
}

export function get_learning_resource(cid, fields) {
    return newrequest({
        url: `learning-resources/${cid}`,
        method: "GET",
        dataType: "JSON",
        params: {
            fields: fields
        }
    })
}



// 村民修改密码
// export function patch_villager(cid, password, phone, address, sex) {

export function patch_villager(cid, formdata) {
    console.log(formdata);
    return newrequest({
        url: `villager/${cid}`,
        method: "PATCH",
        dataType: "JSON",
        data: {
            ...formdata
        }
    })
}
export function get_user(cid) {
    return newrequest({
        url: `user/${cid}`,
        method: "GET",
        dataType: "JSON",
    })
}

export function patch_user(cid, formdata) {
    console.log(formdata);
    return newrequest({
        url: `user/${cid}`,
        method: "PATCH",
        dataType: "JSON",
        data: {
            ...formdata
        }
    })
}

// 上传图片
export function post_file(file) {
    return newrequest({
        url: `app/upload`,
        method: "POST",
        dataType: "JSON",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: file
    })
}

// 大数据镇级资金接口