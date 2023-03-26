import request from '@/util/request';

export function allDisease() {
    return request({
        method:'GET',
        url:'/m1/2419308-0-default/chunyu/list/all'
    })
}