$(document).ready(function(){var n=$(".nav-container");$(".nav-container__icon").on("click",function(){n.removeClass("menu-show")}),$(".nav-button").on("click",function(){n.addClass("menu-show")});var o=(new Date).getFullYear();document.querySelector(".age").innerHTML=o-1994,function(n){for(var o=document.querySelectorAll(n),t=[],e=0;e<o.length;e++)t.push(o[e]);var i=t.map(function(n){return n.getBoundingClientRect().top});window.onscroll=function(){for(var n=window.pageYOffset,o=0;o<t.length;o++)i[o]-n<500&&(t[o].classList.contains("fade")?t[o].classList.add("fade-in"):t[o].classList.contains("slide-right-down")?t[o].classList.add("slide-right-down-in"):t[o].classList.contains("slide-right")?t[o].classList.add("slide-right-in"):t[o].classList.contains("slide-left")?t[o].classList.add("slide-left-in"):t[o].classList.contains("slide-top")?t[o].classList.add("slide-top-in"):t[o].classList.contains("slide-bottom")&&t[o].classList.add("slide-bottom-in"))}}(".animation");var t=$(window).width();$(window).scroll(function(){$("body").scrollTop()>400?$(".to-top").css("display","block"):$(".to-top").css("display","none")}),$('a[href^="#"]').click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body").animate({scrollTop:destination},1e3)}),$(".popup__btn").on("click",function(){$(".popup__text").fadeToggle(700),$(this).removeClass("swing")}),$(".my-work__btn").on("click",function(){t<768?$(".work__item:nth-child(n+4)").fadeToggle(500):$(".work__item:nth-child(n+7)").fadeToggle(500)}),$(".contact-icon__item").hover(function(){$(this).addClass("jello")},function(){$(this).removeClass("jello")}),$(window).load(function(){setTimeout(function(){$preloader=$("#preloader-wrap"),$loader=$preloader.find(".preloader"),$loader.fadeOut(),$preloader.delay(100).fadeOut("slow").remove(),$(".out").removeClass("out")},1e3)})});