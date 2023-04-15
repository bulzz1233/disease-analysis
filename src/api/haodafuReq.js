import request from '@/util/request';

export function haodafuAllComment() {
    return request({
        method:'GET',
        url:'/haodf/distribute/all'
    })
}
export function haodafuConsumerComment() {
    return request({
        method:'GET',
        url:'/haodf/distribute/consumer_medical'
    })
}