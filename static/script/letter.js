//import snap from "snapsvg"
function setLetter(){
$(".cb-project-letter").each(function() {
    var a = $(this);
    console.log(a)
    a.trigger("immediateShow");
    //a.trigger("immediateSplit");
    if (!a.data("data-letter-init")) {
        a.data("data-letter-init", !0);
        var r = a.data("letter")
            , n = (a.html("<svg></svg>"),
                a.find("svg"))
            , o = Snap(n.get(0)).attr({
                viewBox: "0 0 440 440",
                preserveAspectRatio: "none"
            })
            , i = o.path("M1.6,5.6l4.1-4.1C6,1.2,6.3,1,6.8,1.5C7.2,1.9,7,2.3,6.7,2.6L2.6,6.7C2.2,7,1.9,7.1,1.5,6.7C1.1,6.3,1.3,5.9,1.6,5.6z").attr({
                opacity: .5
            }).pattern(0, 0, 8, 8)
            , s = o.rect(0, 0, 220, 440).attr({
                fill: "#fff"
            })
            , c = o.rect(220, 0, 240, 440).attr({
                fill: "#fff"
            })
            , l = o.mask().toDefs().attr({
                maskUnits: "userSpaceOnUse",
                shapeRendering: "crispEdges"
            }).add(s).add(c);
        if (a.on("loading", function(t, e) {
                i.attr({
                    fill: "#fff"
                }),
                    c.stop().animate({
                        transform: "translate(0,-430)"
                    }, 15e3, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
            }),
                a.on("immediateLoaded", function(t, e) {
                    i.attr({
                        fill: "#fff"
                    }),
                        c.attr({
                            transform: "translate(0,-440)"
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("loaded", function(t, e) {
                    i.attr({
                        fill: "#fff"
                    }),
                        c.stop().animate({
                            transform: "translate(0,-440)"
                        }, 700, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                }),
                a.on("immediateUnload", function(t, e) {
                    c.attr({
                        transform: "translate(0,0)"
                    }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("unload", function(t, e) {
                    c.stop().animate({
                        transform: "translate(0,0)"
                    }, 500, mina.easeinout, function() {
                        i.attr({
                            fill: "#000"
                        }),
                        "function" == typeof e && e.call(a)
                    })
                }),
                a.on("reset", function() {
                    s.attr({
                        transform: "translate(0,0)"
                    }),
                        c.attr({
                            transform: "translate(0,0)"
                        })
                }),
                a.on("stop", function() {
                    for (var t = o.selectAll("*"), e = 0; e < t.length; e++)
                        t[e].stop()
                }),
                a.on("immediateSplit", function(t, e) {
                    s.attr({
                        transform: "translate(220,0)"
                    }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("split", function(t, e) {
                    s.attr({
                        transform: "translate(0,0)"
                    }).stop().animate({
                        transform: "translate(220,0)"
                    }, 400, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                }),
                a.on("immediateUnsplit", function(t, e) {
                    s.attr({
                        transform: "translate(0,0)"
                    }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("unsplit", function(t, e) {
                    s.attr({
                        transform: "translate(220,0)"
                    }).stop().animate({
                        transform: "translate(0,0)"
                    }, 400, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                }),
            "c" == r) {
            var f = o.path("M219.3,359.5C142.7,359.2,80.5,296.7,80.5,220c0-76.7,62.2-139.2,138.8-139.5c44.4,0.1,85.1,20.8,111.6,56.6l64.3-47.6c-20-27-46.3-49.4-76-64.7C288.7,9,254.4,0.7,219.8,0.5v0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0v0C160.6,0.8,105.9,23.6,64.7,64.8C23.3,106.3,0.5,161.4,0.5,220s22.8,113.7,64.2,155.2c41.2,41.2,95.9,64,154.1,64.3v0c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0v0c34.5-0.2,68.7-8.5,99.2-24.2c29.7-15.3,56-37.6,76-64.5l-64.2-47.7C304.3,338.8,263.7,359.4,219.3,359.5z")
                , d = o.path("M364.575874,112.753201 C331.772822,68.6049929 279.226938,40 220,40 C120.588745,40 40,120.588745 40,220 C40,319.411255 120.588745,400 220,400 L220,400 C279.2513,400 331.816049,371.37147 364.616343,327.192313")
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d).attr({
                    stroke: "#fff",
                    strokeWidth: 80
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#fff"
                    }),
                        m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            strokeDashoffset: 0
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        setTimeout(function() {
                            m.flicking(60)
                        }, 300),
                        m.selectAll("path")[0].animate({
                            strokeDashoffset: 0
                        }, 850, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }).animate({
                            strokeDashoffset: d.getTotalLength()
                        }, 600, mina.ease, "function" == typeof e ? e.bind(a) : null)
                })
        }
        if ("y" == r) {
            var f = o.polygon([317, 0, 220.9, 202.8, 219.5, 202.8, 219.1, 202.8, 123, 0, 28.3, 0, 176, 281.2, 176, 440, 219.5, 440, 260, 440, 260, 285.2, 411.7, 0])
                , d = o.rect(0, 0, 440, 440)
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d).attr({
                    fill: "#fff"
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.select("rect").attr({
                            transform: "translate(0,440)"
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.select("rect").attr({
                            transform: "translate(0,0)"
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.select("rect").animate({
                            transform: "translate(0,360)"
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    transform: "translate(0,0)"
                                }, 350, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.select("rect").animate({
                            transform: "translate(0,-440)"
                        }, 400, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                })
        }
        if ("n" == r) {
            var f = o.path("M130,162.016876 L130,440 L42,440 L42,0 L130,0 L130,0.187848461 L310,277.983124 L310,0 L398,0 L398,440 L310,440 L310,439.812152 L130,162.016876 L130,162.016876 L130,162.016876 Z")
                , d = o.path("M86,440 L86,0")
                , v = o.path("M347,420 L93,0")
                , b = o.path("M354,440 L354,0")
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v, b).attr({
                    stroke: "#fff",
                    strokeWidth: 80
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("path")[0].attr({
                            transform: "translate(0,440)"
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            transform: "translate(0,442)"
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            transform: "translate(0,0)"
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            transform: "translate(0,0)"
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].animate({
                            transform: "translate(0,350)"
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    transform: "translate(0,0)"
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout),
                                        m.selectAll("path")[2].animate({
                                            transform: "translate(0,0)"
                                        }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                })
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("path")[1].animate({
                            strokeDashoffset: v.getTotalLength()
                        }, 200, mina.easeinout, function() {
                            m.selectAll("path")[0].animate({
                                transform: "translate(0,-440)"
                            }, 200, mina.easeinout),
                                m.selectAll("path")[2].animate({
                                    transform: "translate(0,442)"
                                }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                })
        }
        if ("h" == r) {
            var f = o.polygon([315, 0, 315, 187, 126, 187, 126, 0, 46, 0, 46, 440, 126, 440, 126, 267, 315, 267, 315, 440, 395, 440, 395, 0])
                , d = o.rect(46, 0, 80, 440)
                , v = o.rect(124, 187, 194, 80)
                , b = o.rect(315, 0, 80, 440)
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v, b).attr({
                    fill: "#fff"
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("rect")[0].attr({
                            transform: "translate(0,442)"
                        }),
                        m.selectAll("rect")[1].attr({
                            transform: "matrix(0, 0, 0, 1, 220, 0)"
                        }),
                        m.selectAll("rect")[2].attr({
                            transform: "scale(1,0)"
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("rect")[0].attr({
                            transform: "scale(1,1)"
                        }),
                        m.selectAll("rect")[1].attr({
                            transform: "matrix(1, 0, 0, 1, 0, 0)"
                        }),
                        m.selectAll("rect")[2].attr({
                            transform: "scale(1,1)"
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("rect")[1].animate({
                            transform: "matrix(0.40, 0, 0, 1, 130, 0)"
                        }, 350, mina.easeinout, function() {
                            this.flicking(60, function() {
                                m.selectAll("rect")[0].animate({
                                    transform: "scale(1,1)"
                                }, 300, mina.easeinout),
                                    m.selectAll("rect")[1].animate({
                                        transform: "matrix(1, 0, 0, 1, 0, 0)"
                                    }, 250, mina.easeinout),
                                    m.selectAll("rect")[2].animate({
                                        transform: "scale(1,1)"
                                    }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("rect")[1].animate({
                            transform: "scale(0, 1)"
                        }, 200, function() {
                            m.selectAll("rect")[0].animate({
                                transform: "scale(1,0)"
                            }, 300, mina.easeinout),
                                m.selectAll("rect")[2].animate({
                                    transform: "translate(0,442)"
                                }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                })
        }
        if ("b" == r) {
            var f = o.path("M360.4,219.9c-5.9-6.7-12.3-12.7-19.1-17.9c14.7-20.9,22.1-46,21.7-73.6c-0.7-38.9-16.4-73.5-44.3-97.4 C296.1,11.6,265.9,0,238,0H45v440h220c35.7,0,69-14.7,93.9-41.3c22.9-24.5,36.1-56.9,36.1-88.7C395,277.8,382.4,245,360.4,219.9z M125,80h113c9.3,0,44.3,8.4,45,49.6c0.2,13.2-3.6,23.5-11.6,31.7c-9.9,10.1-24.3,14.7-33.4,14.7h-3.5H125V80z M265,360H125V256 h109.5l0,0h31c16.7,0,28.1,9,34.7,16.6c9.2,10.6,14.8,24.5,14.8,37.4C315,330.9,296,360,265,360z")
                , d = o.path("M123,40c0,0,77.8,0,113,0c33.4,0,83.9,27.2,85,89c1,60.8-51.6,87-85,87")
                , v = o.path("M233.5,216h31c53.5,0,89.5,49.3,89.5,94c0,43.7-37.5,90-90,90H121")
                , b = o.path("M123,216h132")
                , y = o.path("M84,0v440")
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v, b, y).attr({
                    stroke: "#fff",
                    strokeWidth: 80
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: 3 * v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            strokeDasharray: b.getTotalLength(),
                            strokeDashoffset: 3 * b.getTotalLength()
                        }),
                        m.selectAll("path")[3].attr({
                            strokeDasharray: y.getTotalLength(),
                            strokeDashoffset: y.getTotalLength()
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            strokeDashoffset: 2 * b.getTotalLength()
                        }),
                        m.selectAll("path")[3].attr({
                            strokeDashoffset: 2 * y.getTotalLength()
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[3].animate({
                            strokeDashoffset: y.getTotalLength() + 80
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * y.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[2].animate({
                                        strokeDashoffset: 2 * b.getTotalLength()
                                    }, 150, mina.easeinout, function() {
                                        m.selectAll("path")[0].animate({
                                            strokeDashoffset: 2 * d.getTotalLength()
                                        }, 300, mina.easeinout),
                                            m.selectAll("path")[1].animate({
                                                strokeDashoffset: 2 * v.getTotalLength()
                                            }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                    })
                                })
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("path")[2].animate({
                            strokeDashoffset: b.getTotalLength()
                        }, 150, mina.easeinout, function() {
                            m.selectAll("path")[0].animate({
                                strokeDashoffset: 3 * d.getTotalLength()
                            }, 250, mina.easeinout),
                                m.selectAll("path")[1].animate({
                                    strokeDashoffset: v.getTotalLength()
                                }, 250, mina.easeinout, function() {
                                    m.selectAll("path")[3].animate({
                                        strokeDashoffset: 3 * y.getTotalLength()
                                    }, 250, mina.easeinout)
                                })
                        })
                })
        }
        if ("i" == r) {
            var f = o.polygon([368, 80, 368, 0, 72, 0, 72, 80, 180, 80, 180, 360, 72, 360, 72, 440, 368, 440, 368, 360, 260, 360, 260, 80])
                , d = o.rect(72, 0, 296, 80)
                , v = o.rect(180, 79, 80, 282)
                , b = o.rect(72, 360, 296, 80)
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v, b).attr({
                    fill: "#fff"
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("rect")[0].attr({
                            transform: "translate(-440,0)"
                        }),
                        m.selectAll("rect")[1].attr({
                            transform: "matrix(1, 0, 0, 0, 0, 210)"
                        }),
                        m.selectAll("rect")[2].attr({
                            transform: "translate(440,0)"
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("rect")[0].attr({
                            transform: "translate(0,0)"
                        }),
                        m.selectAll("rect")[1].attr({
                            transform: "matrix(1, 0, 0, 1, 0, 0)"
                        }),
                        m.selectAll("rect")[2].attr({
                            transform: "translate(0,0)"
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("rect")[1].animate({
                            transform: "matrix(1, 0, 0, 0.30, 0, 160)"
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                m.selectAll("rect")[0].animate({
                                    transform: "translate(0,0)"
                                }, 300, mina.easeinout),
                                    m.selectAll("rect")[1].animate({
                                        transform: "matrix(1, 0, 0, 1, 0, 0)"
                                    }, 100, mina.easeinout),
                                    m.selectAll("rect")[2].animate({
                                        transform: "translate(0,0)"
                                    }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("rect")[1].animate({
                            transform: "matrix(1, 0, 0, 0, 0, 210)"
                        }, 300, mina.easeinout, function() {
                            m.selectAll("rect")[0].animate({
                                transform: "translate(440,0)"
                            }, 300, mina.easeinout),
                                m.selectAll("rect")[2].animate({
                                    transform: "translate(-440,0)"
                                }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                })
        }
        if ("t" == r) {
            var f = o.polygon(401, 6, 401, 86, 260, 86, 260, 434, 180, 434, 180, 86, 39, 86, 39, 6)
                , d = o.path("M220,434 L220,0")
                , v = o.path("M39,46 L220,46")
                , b = o.path("M220,46 L401,46")
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v, b).attr({
                    stroke: "#fff",
                    strokeWidth: 80
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: 3 * d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            strokeDasharray: b.getTotalLength(),
                            strokeDashoffset: 3 * b.getTotalLength()
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            strokeDashoffset: 2 * b.getTotalLength()
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].animate({
                            strokeDashoffset: 3 * d.getTotalLength() - 80
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * d.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout),
                                        m.selectAll("path")[2].animate({
                                            strokeDashoffset: 2 * b.getTotalLength()
                                        }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                })
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("path")[0].animate({
                            strokeDashoffset: d.getTotalLength()
                        }, 300, mina.easeinout, function() {
                            m.selectAll("path")[1].animate({
                                strokeDashoffset: 3 * v.getTotalLength()
                            }, 200, mina.easeinout),
                                m.selectAll("path")[2].animate({
                                    strokeDashoffset: b.getTotalLength()
                                }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        })
                })
        }
        if ("p" == r) {
            var f = o.path("M400,150 C400,103.411393 381.036543,64.1905012 348.71269,36.8395486 C321.694018,13.9775957 286.668464,1 255,1 L62,1 L62,439 L142,439 L142,298 L255,298 C286.614847,298 321.528379,285.342106 348.500248,262.838949 C380.97228,235.746899 400,196.661723 400,150 L400,150 L400,150 Z M142,81 L256,81 C268.640676,81 285.383785,87.2036221 298.03731,97.9104514 C312.743634,110.354263 321,127.430372 321,150 C321,172.472394 312.836616,189.240945 298.249752,201.411051 C285.657109,211.917339 268.879659,218 256,218 L142,218 L142,81 L142,81 Z")
                , d = o.path("M102,41 L102,399").attr({
                    strokeLinecap: "square"
                })
                , v = o.path("M100,41 C100,41 215,41 256,41 C297,41 361,75 361,150 C361,225 297,258 256,258 L100,258")
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v).attr({
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 80
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: 3 * v.getTotalLength()
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].animate({
                            strokeDashoffset: d.getTotalLength() + 30
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * d.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                })
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("path")[1].animate({
                            strokeDashoffset: v.getTotalLength()
                        }, 300, mina.easeinout),
                        setTimeout(function() {
                            m.selectAll("path")[0].animate({
                                strokeDashoffset: d.getTotalLength()
                            }, 300, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                        }, 200)
                })
        }
        if ("r" == r) {
            var f = o.path("M303.8,281.6c18-6.6,34.6-16.8,48.4-30.4c27-26.6,41.8-63.7,41.8-106.2s-14.4-79.5-40.9-106c-25.5-25.4-60.3-39-97.6-39H127H47v440h80V290h85.7L315,440h97L303.8,281.6z M255,210H127V80h128.5c34.9,0,58.5,23.5,58.5,65c0,21.6-6.6,38-17.8,49.1C285.8,204.3,271.2,210,255,210z")
                , d = o.path("M87,0v440")
                , v = o.path("M127,40h128.5C309,40,354,78,354,145s-46.5,105-99,105H127")
                , b = o.path("M240,259l139,204")
                , p = o.g(f).attr({
                    fill: i
                })
                , u = o.g(f.clone()).attr({
                    fill: "#fff"
                })
                , h = o.g(p, u)
                , m = o.g(d, v, b).attr({
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: 82
                })
                , g = o.mask().toDefs().attr({
                    maskUnits: "userSpaceOnUse"
                }).add(m);
            h.attr({
                mask: g
            }),
                u.attr({
                    mask: l
                }),
                a.on("reset", function() {
                    i.attr({
                        fill: "#000"
                    }),
                        m.selectAll("path")[0].attr({
                            strokeDasharray: d.getTotalLength(),
                            strokeDashoffset: d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDasharray: v.getTotalLength(),
                            strokeDashoffset: 3 * v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            strokeDasharray: b.getTotalLength(),
                            strokeDashoffset: 3 * b.getTotalLength()
                        })
                }),
                a.on("immediateShow", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].attr({
                            strokeDashoffset: 2 * d.getTotalLength()
                        }),
                        m.selectAll("path")[1].attr({
                            strokeDashoffset: 2 * v.getTotalLength()
                        }),
                        m.selectAll("path")[2].attr({
                            strokeDashoffset: 2 * b.getTotalLength()
                        }),
                    "function" == typeof e && e.call(a)
                }),
                a.on("show", function(t, e) {
                    a.trigger("reset"),
                        a.trigger("stop"),
                        m.selectAll("path")[0].animate({
                            strokeDashoffset: d.getTotalLength() + 60
                        }, 200, mina.easeinout, function() {
                            this.flicking(60, function() {
                                this.animate({
                                    strokeDashoffset: 2 * d.getTotalLength()
                                }, 200, mina.easeinout, function() {
                                    m.selectAll("path")[1].animate({
                                        strokeDashoffset: 2 * v.getTotalLength()
                                    }, 200, mina.easeinout),
                                        setTimeout(function() {
                                            m.selectAll("path")[2].animate({
                                                strokeDashoffset: 2 * b.getTotalLength()
                                            }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null)
                                        }, 150)
                                })
                            })
                        })
                }),
                a.on("hide", function(t, e) {
                    a.trigger("stop"),
                        m.selectAll("path")[1].animate({
                            strokeDashoffset: v.getTotalLength()
                        }, 200, mina.easeinout),
                        setTimeout(function() {
                            m.selectAll("path")[0].animate({
                                strokeDashoffset: 3 * d.getTotalLength()
                            }, 200, mina.easeinout, "function" == typeof e ? e.bind(a) : null),
                                m.selectAll("path")[2].animate({
                                    strokeDashoffset: b.getTotalLength()
                                }, 200, mina.easeinout)
                        }, 200)
                })
        }
        a.trigger("reset");
        var w = a.data("letter-state");
        if (w = w ? w.split(",") : null,
            w && w.length > 0)
            for (var x = 0; x < w.length; x++)
                a.trigger(w[x]);
        ($(this).off("show").on("show", function(t, e) {
            var a = $(this);
            a.hide(),
                a.trigger("immediateShow").trigger("immediateSplit"),
                setTimeout(function() {
                    a.fadeIn(function() {})
                }, 1e3)
        }),
            $(this).off("hide").on("hide", function() {
                $(this).fadeOut("fast")
            }))
    }
})
Snap.plugin(function(t, e, a, r) {
    e.prototype.flicking = function(t, e) {
        var a = this
            , r = 0
            , n = function n() {
                r++,
                    a.attr({
                        opacity: 0
                    }),
                    setTimeout(function() {
                        a.attr({
                            opacity: 1
                        }),
                            r < 3 ? setTimeout(n, t / 2) : "function" == typeof e && e.call(a)
                    }, t / 2)
            };
        return n(),
            a
    }
})

}