var $ = {
        ajax : ({
        method = '',
        url  = '/',
        date,
        async = true
    }) =>{
        return new Promise((resolve,reject) => {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () =>{
                if (xhr.readyState === 4 && xhr.status === 200){
                    let res = JSON.parse(xhr.responseText)
                    resolve(res)
                }
            }
            xhr.open(method,url,async)
            if (method === 'get'){
                xhr.send()
            }
        }

     )
    }
    
}

$.ajax({
    method: 'get',
    url: 'http://apis.juhe/mobile/get',
    data: {
      phone: '17323410000',
      key: 'fcbbb62f008c07cc7f8bae66c59be1f2'
    }
  })
  .then(res => console.log(res))
