let html = document.querySelector("#html");
let style = document.querySelector("#style");                 
                    
let string = `/*
*大家好，我是陈同学，
*接下来给我要给你们展示一下我的前端功底
*首先准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}`


let printwords=''
let count = 0 
function step(){
        setTimeout(()=>{
            if(string[count]=="\n"){ //注意斜杠的写法
                printwords+='</br>'
            }if(string[count]==' '){
                printwords+='&nbsp'
            }
            else{
                printwords+= string[count]
            }
            style.innerHTML = string.substring(0,count)
            html.innerHTML =printwords
            window.scrollTo(0, 99999);
            html.scrollTo(0, 99999);
            if(count<string.length-1){
                count+=1
                step()
            }
        },10)    
    }
step()