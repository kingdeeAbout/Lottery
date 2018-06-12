/**
 * Created by Administrator on 2018/6/11.
 */
import ajax from '../libs/ajax'

class WelfareApi {
  getWelfare(data) {
    return new Promise(function (resolve, reject) {
      ajax({
        url: '/crm/marketing/activity/getLottery',
        // data: data,
        params: data,
        json: false,
        method: 'get'
      }).then(function (data) {
        resolve(data)
      })
    })
  }

}

export default WelfareApi