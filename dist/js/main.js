$(document).ready(function(){var o=$(window).width();$(window).scroll(function(){$("body").scrollTop()>400?$(".to-top").css("display","block"):$(".to-top").css("display","none")}),$('a[href^="#"]').click(function(){elementClick=$(this).attr("href"),destination=$(elementClick).offset().top,$("body").animate({scrollTop:destination},1e3)}),$(".popup__btn").on("click",function(){$(".popup__text").fadeToggle(700),$(this).removeClass("swing")}),$(".my-work__btn").on("click",function(){o<768?$(".work__item:nth-child(n+4)").fadeToggle(500):$(".work__item:nth-child(n+7)").fadeToggle(500)}),$(".contact-icon__item").hover(function(){$(this).addClass("jello")},function(){$(this).removeClass("jello")}),$(window).load(function(){setTimeout(function(){$preloader=$("#preloader-wrap"),$loader=$preloader.find(".preloader"),$loader.fadeOut(),$preloader.delay(100).fadeOut("slow").remove(),$(".out").removeClass("out")},1e3)})});