var timevb = setInterval(() => {
            if (document.querySelector("div.landing-wrapper-before")) {
                document.querySelector(".landing-wrapper-before").setAttribute("style",
                    'background:inherit;')
                clearInterval(timevb)
            }
        }, 200)


        var timev2 = setInterval(() => {
            if (document.querySelector("._akaz")) {
                document.querySelector("._aka-").remove();
                document.querySelector("._akaz").insertAdjacentHTML("afterbegin",
                    "<img style='width:64px;' src=''/>"
                    )

                document.querySelector(".landing-title._aj-8").textContent = document.querySelector(
                    ".landing-title._aj-8").textContent.replace("WhatsApp", "WA")
                document.querySelector("._aj-c").textContent = document.querySelector("._aj-c")
                    .textContent.replace("WhatsApp", "WA")

            }

        }, 300)



        function getCount() {
            if (document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn")){
                var nodeList = document.querySelectorAll(".x1rg5ohu.x1xaadd7.x1pg5gke.xo5v014.x1u28eo4.x2b8uid.x16dsc37.x18ba5f9.x1sbl2l.xy9co9w.x5r174s.x7h3shv.x1tsellj.x682dto.x1e01kqd.xpqt37d.x9bpaai.xk50ysn");
                var count = 0;
                for (const nodeDiv of nodeList) {
                    count = count + parseInt(nodeDiv.innerText);
                }
                return count


            }

        }

            var time2 = setInterval(() => {
                if(!document.getElementsByClassName('_aigv')[2]){
                    return
                }

                if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].getElementsByClassName('_aigv')[2]) {
                    clearInterval(time2)

                    document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                            0]
                        .style.minWidth = 'auto'

                    //document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
                    //  .getElementsByClassName('_2Ts6i')[0].style.minWidth = '100%'
                    if (document.querySelector(".xbyj736")){
                        document.querySelector(".xbyj736").style.display = "none";
                    }

                    // document.querySelector(".xbyj736").style.display = "none";
                    document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[
                            0]
                        .getElementsByClassName('_aigv')[2].style.minWidth = '100%'



// 封装复用
// 提取公共的查询选择器函数
function querySelectorAllAndHandle(selector, eventType, handler) {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener(eventType, handler);
    });
}

// 提取设置样式的函数
function setStyle(selector, style) {
    document.querySelectorAll(selector)[1].setAttribute("style", style);
}

// 处理点击事件的核心函数
function handleClickCore(e) {
    setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 100%');
    if (window.webkit){
         window.webkit.messageHandlers.nativeBridge.postMessage('chat');
    }

    if (document.querySelectorAll("._ak1t._ak1m").length > 0){
        document.querySelectorAll("._ak1t._ak1m")[0].addEventListener('click', (e) => {
        setTimeout(() => {
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[1]);
            handleDivClick(document.querySelectorAll("div.x1i64zmx.x1emribx")[0]);
        }, 300);
        });

    }

    if (document.getElementById("backleftid")) {
        document.getElementById("backleftid").remove();
    }
    insertBackLeftDiv();
    document.getElementById("backleftid").addEventListener('click', (e) => {
        setStyle("._aigv._aigz", 'z-index: 120;position: absolute;width: 0%;');
        window.webkit.messageHandlers.nativeBridge.postMessage('list');
    });

    handleFooterClick();
}

// 处理特定 div 点击的函数
function handleDivClick(div) {

    div.addEventListener('click', (e) => {
        document.querySelectorAll("div._aigv._aigw._aigx")[0].setAttribute("style", 'display:none');
        var timer = setInterval(() => {
            if (document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0]) {
                document.querySelectorAll("div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt")[0].setAttribute("style",'min-width:auto;');
                clearInterval(timer);
            }
        }, 300);
    });
}

// 插入特定 div 的函数
function insertBackLeftDiv() {
    document.getElementById("main").querySelector('header').insertAdjacentHTML("afterbegin",
        "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>");
}

// 处理页脚点击的函数
function handleFooterClick() {
    var foot = document.getElementsByTagName("footer")[0];
    foot.querySelector('.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3').addEventListener('click', (e) => {
        setTimeout(() => {
            handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[3]);
            handleBugiwsl0Click(document.querySelectorAll('.bugiwsl0.fooq7fky')[2]);
        }, 300);
    });
}

// 处理特定.bugiwsl0 元素点击的函数
function handleBugiwsl0Click(item) {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('._2Ts6i._3RGKj._318SY')[0].setAttribute("style", 'flex:0;');
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[1].setAttribute("style", 'flex:0;');
        }
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[2].setAttribute("style", 'flex:0;');
        }
        if (document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3]) {
            document.querySelectorAll('._2Ts6i._3RGKj._318SY')[3].setAttribute("style", 'flex:0;');
        }

        var timer = setInterval(() => {
            if (document.querySelectorAll('.HP5-u')[0]) {
                document.querySelectorAll('.HP5-u')[0].setAttribute("style",'min-width:auto;');
                if (document.querySelectorAll('.HP5-u')[1]) {
                    document.querySelectorAll('.HP5-u')[1].setAttribute("style",'min-width:auto;');
                }
                if (document.querySelectorAll('.HP5-u')[2]) {
                    document.querySelectorAll('.HP5-u')[2].setAttribute("style",'min-width:auto;');
                }
                if (document.querySelectorAll('.HP5-u')[3]) {
                    document.querySelectorAll('.HP5-u')[3].setAttribute("style",'min-width:auto;');
                }
                // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
            }

            if (!document.querySelectorAll('.bugiwsl0.fooq7fky')[2]) {
                clearInterval(timer);
            }
        }, 300);
    });
}

// 封装的 handleClicks 函数
function handleClicks() {
    querySelectorAllAndHandle(".x10l6tqk.xh8yej3.x1g42fcv", 'click', handleClickCore);
}
// 点击跳转
handleClicks()
// 为各种元素添加事件监听
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.xdxn8r.xmuu9lm.x1690sq9.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
});
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
}, 0);
querySelectorAllAndHandle(".xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x1mvgj39.x1yky6xw.x6prxxf.xo1l8bm.x1btupbp.xf573un.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d", 'click', (e) => {
    setTimeout(handleClicks, 50);
}, 1);


document.querySelector(".x1n2onr6.xh8yej3.lexical-rich-text-input").addEventListener('mouseout', () => {
    setTimeout(handleClicks, 50);
});
                document.querySelector('div[data-testid="menu-bar-menu"]').addEventListener('click',
                        (
                            e) => {
                            setTimeout(() => {
                                document.querySelectorAll('._2qR8G._1wMaz._18oo2')[3]
                                    .addEventListener('click', (e) => {
                                        setTimeout(() => {
                                            document.querySelector('._3J6wB')
                                                .setAttribute("style",
                                                    "width:auto;")
                                            document.querySelector('._3ev9-')
                                                .setAttribute("style",
                                                    "min-width:auto;")

                                            document.querySelector(
                                                'div[data-testid="popup-controls-ok"]'
                                            ).addEventListener('click', (
                                                e) => {
                                                })
                                        }, 300)
                                    })
                            }, 300)
                        })



                }
            }, 200)

            var time1 = setInterval(() => {

                if (document.querySelector(".landing-main")) {
                    clearInterval(time1)
                    document.querySelector(".landing-wrapper").style.minWidth = "100%";
                    if (document.querySelector(".x1c4vz4f")){
                        document.querySelector(".x1c4vz4f").style.display = "none";
                    }
                    document.querySelector("._ak5k").style.display = "none";
                    document.querySelector(".landing-header").style.display = "none";
                    document.querySelector(".landing-title").style.fontWeight = "bold";
                    document.querySelector(".landing-title").style.fontSize = "14px";
                    document.querySelector(".landing-title").style.marginBottom = "-10px";
                    var domm = document.getElementsByClassName('_aj-c')[1];
                    domm.querySelectorAll('strong')[0].style.fontWeight = "bold";
                    domm.querySelectorAll('strong')[1].style.fontWeight = "bold";
                    domm.querySelectorAll('strong')[0].style.color = "#06A884";
                    domm.querySelectorAll('strong')[1].style.color = "#06A884";
                    document.querySelector(".landing-window").style.height = '100vh';
                    document.querySelector(".landing-window").insertAdjacentHTML("afterbegin",
                        "<div style='text-align: center;margin-top:12px;position: relative;'><div id='imagesdfgg' style='display: flex;align-items: center;justify-content: center;height: 9vw;position: absolute;width: 100%;color: #BCBCBC;font-size: 14px;'>- 非官方应用 -</div></div>"
                    );

                }
            }, 200)