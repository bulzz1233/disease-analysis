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
//chunyuDistribution
export function chunyuDistributionAll() {
    return request({
        method:'GET',
        url:'/chunyu/distribute/all'
    })
}
export function chunyuDistributionConsumer() {
    return request({
        method:'GET',
        url:'/chunyu/distribute/consumer_medical'
    })
}