// console.log('main')


getCXX.onclick = () => {
  const requestCss = new XMLHttpRequest()
  requestCss.open('GET', '/style.css')

  requestCss.onreadystatechange = ()=>{
    // 说明下载完成，但不知道是成功 2xx 还是失败4xx/5xx 了
    if (requestCss.readyState === 4){
      if(requestCss.status >= 200 && requestCss.status <300){
        const style = document.createElement('style')
        style.innerHTML = requestCss.response
        document.body.append(style)
      }else{
        alert('加载css失败了')
      }
    }
  }

  requestCss.send()
}

getJs.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {

    const scrtipt = document.createElement('script')
    scrtipt.innerHTML = request.response
    document.body.append(scrtipt)
  }
  request.onerror = () => {
    console.log('error')
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onload = () => {

    const div = document.createElement('div')
    div.innerHTML = request.response
    document.body.append(div)
  }
  request.onerror = () => {
    console.log('error')
  }
  request.send()
}

getXML.onclick = ()=>{
  const request = new XMLHttpRequest()
  request.open('GET','4.xml')
  request.onreadystatechange = ()=>{
    if(request.readyState ===4){
      if(request.status >= 200 && request.status<300){
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
      }
    }
  }
  request.send()
}

getJSON.onclick = ()=>{
  const request = new XMLHttpRequest();
  request.open('GET','5.json')
  request.onreadystatechange = ()=>{
    if (request.readyState ===4){
      if(request.status >= 200 && request.status <300){
        const obj = JSON.parse(request.response)
        loginName.textContent = obj.name
        console.log(loginName)
        console.log(request.response)
        console.log(obj)
      }else{
        alert('加载 json失败了')
      }
    }

  }
  request.send()
}