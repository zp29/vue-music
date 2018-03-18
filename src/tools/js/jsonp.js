
import originJSONP from 'jsonp'

export default function jsonp(url, data, option ) {
  url += (url.indexOf('?') < 0 ? '?' : '&' ) + param(data);

  return new promise((res, esj) => {
    originJSONP(url, option, (err, data) => {
      if ( !err ) {
        res( data )
      }else {
        esj( err )
      }
    })
  })
}

function param( url ) {
  let url = '';

  for (k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }

  url = url ? url.substring(1) : ''
}
