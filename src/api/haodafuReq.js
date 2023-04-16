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
export function haodafuAllType() {
    return request({
        method:'GET',
        url:'/haodf/list/all'
    })
}
export function haodafuConsumerMedicalType() {
    return request({
        method:'GET',
        url:'/haodf/list/consumer_medical'
    })
}
export function haodafuAllPatient() {
    return request({
        method:'GET',
        url:'/haodf/patientDistrict/all'
    })
}
export function haodafuConsumerPatient() {
    return request({
        method:'GET',
        url:'/haodf/patientDistrict/consumer_medical'
    })
}