
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
            "<img style='width:64px;' src='data:image/png;base64,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'/>"
        )

        document.querySelector(".landing-title._aj-8").textContent = document.querySelector(
            ".landing-title._aj-8").textContent.replace("WhatsApp", "WA")
        document.querySelector("._aj-c").textContent = document.querySelector("._aj-c")
            .textContent.replace("WhatsApp", "WA")

    }
    

}, 300)



var time2 = setInterval(() => {

    if (!document.getElementsByClassName('_aigv')[2]) {
        return
    }

    if (document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
        .getElementsByClassName('_aigv')[2]) {
        clearInterval(time2)

        document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0].style
            .minWidth = 'auto'

        document.getElementsByClassName('app-wrapper-web')[0].getElementsByClassName('two')[0]
            .getElementsByClassName('_aigv')[2].style.minWidth = '100%'

        document.querySelectorAll(".x10l6tqk.xh8yej3.x1g42fcv").forEach(item => {

            item.addEventListener('click', (e) => {

                document.querySelectorAll("._aigv._aigz")[1].setAttribute("style",
                    'z-index: 120;position: absolute;width: 100%;')

                document.querySelectorAll("._ak1t._ak1m")[0]
                    .addEventListener('click', (e) => {
                        setTimeout(() => {
                            document.querySelectorAll(
                                    "div.x1i64zmx.x1emribx")[1]
                                .addEventListener('click', (e) => {
                                    document.querySelectorAll(
                                            "div._aigv._aigw._aigx")[0]
                                        .setAttribute("style",
                                            'display:none')
                                    var tmer = setInterval(() => {
                                        if (document
                                            .querySelectorAll(
                                                "div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt"
                                                )[0]) {
                                            document
                                                .querySelectorAll(
                                                    "div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1qjc9v5._ajwt"
                                                    )[0]
                                                .setAttribute(
                                                    "style",
                                                    'min-width:auto;'
                                                    )
                                            clearInterval(tmer)
                                        }
                                    }, 300)
                                })

                            document.querySelectorAll(
                                    "div.x1i64zmx.x1emribx")[0]
                                .addEventListener('click', (
                                    e) => {
                                    document
                                        .querySelectorAll(
                                            "div._aigv._aigw._aigx"
                                        )[0]
                                        .setAttribute(
                                            "style",
                                            'display:none')

                                    var tmersc =
                                        setInterval(() => {
                                            if (document
                                                .querySelectorAll(
                                                    "div.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x1hc1fzr.x6ikm8r.x10wlt62"
                                                    )[0]) {

                                                document
                                                    .querySelectorAll(
                                                        "div.x1c4vz4f"
                                                        )[0]
                                                    .setAttribute(
                                                        "style",
                                                        'min-width:auto;'
                                                    )

                                                clearInterval
                                                    (
                                                        tmersc)
                                            }

                                        }, 300)
                                })




                        }, 300)

                    })


                if (document.getElementById("backleftid")) {
                    document.getElementById("backleftid").remove()
                }
                document.getElementById("main").querySelector(
                        'header')
                    .insertAdjacentHTML("afterbegin",
                        "<div id='backleftid' style='width: 29px;height:30px;display: flex;align-items: center;'><img style='width:21px;' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADyUlEQVR4Ae2cPYsTQRjHk+hBBPN2oIKBvBVikUJIIShIxFq0ucavoYUW4p2NhV/BL2BlIQiHCHIKKopWaheTSAIhRZIiJFGT+Iy547K5JDsz2ZdnzH9gye7O7M4zv9/O7t3luQ0EUEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABOYRKBaLx2l/aF6dafuCJgWcTqevBoPBRxTzBVqGtHwYj8e3K5XKF5PGMR2rMQKy2ex9gr1DwVtipn1/aN8NkvBiemCmrFsGwzXoTCazTbE9WBJfvdfrnWs0Gt0lbVhWsb+PSsAXYM+Gw+GLLAnbBMVagCT8f0MMhUI5m7GyrGYrQAW+IDscDr+zJGwTFEsBqvBpjF8jkchHm7GyrGb3ENaA36Pbz5VSqfSJJWGboMQvNGyKDvzRaHS9XC4bCV+AZzMDdOFXq9VXbK4gjUBYCFhX+CxmwDrD913AusP3VQDgTx4YvjwDAH8C35cZAPiH8D0XAPhW+J4KAPyj8D0TAPjz4XsiAPAXw3ddAOAvh++qAMC3h++aAMCXg++KAMCXh++4AMBXg++oAMBXh++YAMDXg++IAMpYe0zZaXcUQuiJrxFN/yZLYbxLm67011C68p/R2W8u7cFaCfhWHvoZxrlc7h7gz9DU2NSeAXT196i/sGSfuPIXgNJKzMrn82cU4A9wz19An3ZrCVh8OtSoEsAtSJWYw+21ZwClAz5UiOUEtX+eSqWuKRyzFk21Z4Cggx9DV79Gjq1yina7/TQWi52k/9u6JHmeDWq7FY1G33c6nR+Sx/zXzVYSIMgQyJfxeFzMpKLYliiQMAVpZQHiXDQTXkPCFFWFVUcEQIIC8ZmmjgmAhBmykpuOCoAESepTzRwXAAlTdCVWXREACRLk95u4JgAS5CS4KgAS7CW4LgASlkvwRAAkLJbgmQBImC/BUwGQcFSC5wIgwSrBFwGQcCjBNwGQMJHgqwBICAR8F7DuElgIWGcJbASsImFzc3O31WrVxTlMK6wECHg6X29SdvblZDL5pNlsipe5GlXYCRD0NCScHgwGu5Qg8NMo+hQsSwE6Eijx6x2J+2yaAO3MOC8GSu+C26Z+dmT6ogTgkkw7bm3YzoADUJK3o3q/37/b7XZ/Hxxnyid7AQKkkJBIJEa0WqTFkk65//LuW7Va7RvVGVeMECCokoQ9SoPco9TG87R5ipZftLylZYvenP6GPlG8IlAoFDaoL9bPL69YoB8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQkCDwF77bKDf6sSL5AAAAAElFTkSuQmCC' /></div>"
                    )
                document.getElementById("backleftid").addEventListener(
                    'click',
                    (e) => {
                        document.querySelectorAll("._aigv._aigz")[1]
                            .setAttribute("style",
                                'z-index: 120;position: absolute;width: 0%;'
                            )
                    })

                var foot = document.getElementsByTagName("footer")[0]

                foot.querySelector(
                        '.x10l6tqk.x1ey2m1c.x17qophe.x9f619.xh8yej3')
                    .addEventListener('click', (
                        e) => {
                        setTimeout(() => {
                            document.querySelectorAll(
                                    '.bugiwsl0.fooq7fky')[3]
                                .addEventListener('click', (
                                    e) => {

                                    document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[0]
                                        .setAttribute(
                                            "style",
                                            'flex:0;')
                                    if (document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[1]) {
                                        document
                                            .querySelectorAll(
                                                '._2Ts6i._3RGKj._318SY'
                                            )[1]
                                            .setAttribute(
                                                "style",
                                                'flex:0;')
                                    }
                                    if (document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[2]) {
                                        document
                                            .querySelectorAll(
                                                '._2Ts6i._3RGKj._318SY'
                                            )[2]
                                            .setAttribute(
                                                "style",
                                                'flex:0;')
                                    }
                                    if (document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[3]) {
                                        document
                                            .querySelectorAll(
                                                '._2Ts6i._3RGKj._318SY'
                                            )[3]
                                            .setAttribute(
                                                "style",
                                                'flex:0;')
                                    }

                                    var timm = setInterval(
                                        () => {

                                            if (document
                                                .querySelectorAll(
                                                    '.HP5-u'
                                                )[0]
                                            ) {


                                                document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        0
                                                    ]
                                                    .setAttribute(
                                                        "style",
                                                        'min-width:auto;'
                                                    )

                                                if (document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        1
                                                    ]
                                                ) {
                                                    document
                                                        .querySelectorAll(
                                                            '.HP5-u'
                                                        )[
                                                            1
                                                        ]
                                                        .setAttribute(
                                                            "style",
                                                            'min-width:auto;'
                                                        )
                                                }
                                                if (document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        2
                                                    ]
                                                ) {
                                                    document
                                                        .querySelectorAll(
                                                            '.HP5-u'
                                                        )[
                                                            2
                                                        ]
                                                        .setAttribute(
                                                            "style",
                                                            'min-width:auto;'
                                                        )
                                                }
                                                if (document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        3
                                                    ]
                                                ) {
                                                    document
                                                        .querySelectorAll(
                                                            '.HP5-u'
                                                        )[
                                                            3
                                                        ]
                                                        .setAttribute(
                                                            "style",
                                                            'min-width:auto;'
                                                        )
                                                }

                                                // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
                                            }

                                            if (!
                                                document
                                                .querySelectorAll(
                                                    '.bugiwsl0.fooq7fky'
                                                )[2]
                                            ) {
                                                clearInterval
                                                    (
                                                        timm)
                                            }

                                        }, 300)

                                })

                            document.querySelectorAll(
                                    '.bugiwsl0.fooq7fky')[2]
                                .addEventListener('click', (
                                    e) => {

                                    document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[0]
                                        .setAttribute(
                                            "style",
                                            'flex:0;')
                                    if (document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[1]) {
                                        document
                                            .querySelectorAll(
                                                '._2Ts6i._3RGKj._318SY'
                                            )[1]
                                            .setAttribute(
                                                "style",
                                                'flex:0;')
                                    }
                                    if (document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[2]) {
                                        document
                                            .querySelectorAll(
                                                '._2Ts6i._3RGKj._318SY'
                                            )[2]
                                            .setAttribute(
                                                "style",
                                                'flex:0;')
                                    }
                                    if (document
                                        .querySelectorAll(
                                            '._2Ts6i._3RGKj._318SY'
                                        )[3]) {
                                        document
                                            .querySelectorAll(
                                                '._2Ts6i._3RGKj._318SY'
                                            )[3]
                                            .setAttribute(
                                                "style",
                                                'flex:0;')
                                    }

                                    var timm = setInterval(
                                        () => {

                                            if (document
                                                .querySelectorAll(
                                                    '.HP5-u'
                                                )[0]
                                            ) {


                                                document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        0
                                                    ]
                                                    .setAttribute(
                                                        "style",
                                                        'min-width:auto;'
                                                    )

                                                if (document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        1
                                                    ]
                                                ) {
                                                    document
                                                        .querySelectorAll(
                                                            '.HP5-u'
                                                        )[
                                                            1
                                                        ]
                                                        .setAttribute(
                                                            "style",
                                                            'min-width:auto;'
                                                        )
                                                }
                                                if (document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        2
                                                    ]
                                                ) {
                                                    document
                                                        .querySelectorAll(
                                                            '.HP5-u'
                                                        )[
                                                            2
                                                        ]
                                                        .setAttribute(
                                                            "style",
                                                            'min-width:auto;'
                                                        )
                                                }
                                                if (document
                                                    .querySelectorAll(
                                                        '.HP5-u'
                                                    )[
                                                        3
                                                    ]
                                                ) {
                                                    document
                                                        .querySelectorAll(
                                                            '.HP5-u'
                                                        )[
                                                            3
                                                        ]
                                                        .setAttribute(
                                                            "style",
                                                            'min-width:auto;'
                                                        )
                                                }

                                                // document.querySelectorAll('.ej3x2ktq.p357zi0d.f8m0rgwh.sh5ccnuw.tkdu00h0.gfz4du6o.r7fjleex.jv8uhy2r')[0].setAttribute("style",'margin-top:auto;')
                                            }

                                            if (!
                                                document
                                                .querySelectorAll(
                                                    '.bugiwsl0.fooq7fky'
                                                )[2]
                                            ) {
                                                clearInterval
                                                    (
                                                        timm)
                                            }

                                        }, 300)

                                })


                        }, 300)

                    })

            })
        })




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

//}



var time1 = setInterval(() => {

    if (document.querySelector(".landing-main")) {

        clearInterval(time1)
        document.querySelector(".landing-wrapper").style.minWidth = "100%";
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


