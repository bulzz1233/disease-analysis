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
export function chunyuWordAll() {
    return request({
        method:'GET',
        url:'/chunyu/wordcloud/all'
    })
} 
export function chunyuWordConsumer() {
    return request({
        method:'GET',
        url:'/chunyu/wordcloud/consumer_medical'
    })
} 
export function chunyuTopicAll() {
    return request({
        method:'GET',
        url:'/chunyu/lda/all'
    })
} 
export function chunyuTopicConsumer() {
    return request({
        method:'GET',
        url:'/chunyu/lda/consumer_medical'
    })
} 
export function chunyuTextAll() {
    return request({
        method:'GET',
        url:'/chunyu/inquiry/all'
    })
} 
export function chunyuTextConsumer() {
    return request({
        method:'GET',
        url:'/chunyu/inquiry/consumer_medical'
    })
} 