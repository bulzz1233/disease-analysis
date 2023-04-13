import request from '@/util/request';

export function chunyuAllType() {
    return request({
        method:'GET',
        url:'/chunyu/list/all'
    })
}
export function chunyuConsumerMedicalType() {
    return request({
        method:'GET',
        url:'/chunyu/list/consumer_medical'
    })
}