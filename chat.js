window.onload = function(){

    var sendBtn = document.getElementById('send')
    var content = document.getElementById('key-words').value
    var person1 = document.getElementById('person1')
    var person2 = document.getElementById('person2')
    
    person1.onclick = function(){
        person1.style.display = 'none'
        person2.style.display = 'block'
    }
    person2.onclick = function(){
        person2.style.display = 'none'
        person1.style.display = 'block'
    }
    sendBtn.onclick = function(){
        content = document.getElementById('key-words').value
        if(content !== ''){
            if(person2.style.display == 'block'){
                document.getElementById('container').innerHTML = 
                document.getElementById('container').innerHTML + 
                "<div class='container-item-right'><i class='iconfont icon-touxiang'></i><div class='content'>"+content+"</div></div>"
                document.getElementById('key-words').value = ''
            }else if(person1.style.display == 'block'){
                document.getElementById('container').innerHTML = 
                document.getElementById('container').innerHTML + 
                "<div class='container-item-left'><i class='iconfont icon-portrait'></i><div class='content'>"+content+"</div></div>"
                document.getElementById('key-words').value = ''
            }else{
                document.getElementById('container').innerHTML = 
                document.getElementById('container').innerHTML + 
                "<div class='container-item-left'><i class='iconfont icon-portrait'></i><div class='content'>"+content+"</div></div>"
                document.getElementById('key-words').value = ''
            }
        }
    }
}