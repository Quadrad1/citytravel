jQuery(document).ready(function () {

	$(".fancybox").fancybox();

	$(".select").selectize({});

	$(".scroll").click(function() {
		$.scrollTo($(".divScroll"), 800, {
			offset: 0
		});
	});

	headerAlignment();

	function headerAlignment(){
		var logo = $('.logo').offset().left;
		$('.main_slr .caption').css({"marginLeft": logo});
	}

	$(window).resize(function(){
		headerAlignment();
	});


	var mslr = new Swiper('.mslr', {
	    autoplay: 5000,
	    speed: 2200,
	    loop: true,
	    spaceBetween: 0,
	    observer:true,
	    observeParents:true,
	    preventClicks: false,
		loopAdditionalSlides: 0,
		slidesPerView: 1,
		effect: 'fade',
        pagination: '.swiper-pagination',
        paginationClickable: true,
	});


	$('.wave_l').each(function() {
	    var $this = $(this);

	    var wave_li, d, x, y;

	    setInterval(function() {
	        if($this.find(".wave_li").length === 0){
	            $this.prepend("<span class='wave_li'></span>");
	        }

	        wave_li = $this.find(".wave_li");
	        wave_li.removeClass("animate");

	        if(!wave_li.height() && !wave_li.width()){
	            d = Math.max($this.outerWidth(), $this.outerHeight());
	            wave_li.css({height: d, width: d});
	        }

	        x = Math.round(Math.random()*wave_li.width() - wave_li.width()/2);
	        y = Math.round(Math.random()*wave_li.height() - wave_li.height()/2);

	        wave_li.css({top: y+'px', left: x+'px'}).addClass("animate");
	    }, 2500)
	});


	$('.blc_map').hide();
	$('#dd1').click(function(){
		$(this).toggleClass('active');
		$('#map_m').addClass('open');
		$('#map_m').slideToggle();
		map_m();
	});

	$('#dd2').click(function(){
		$(this).toggleClass('active');
		$('#map_c').addClass('open');
		$('#map_c').slideToggle();
		map_c();
	});

	$('#dd3').click(function(){
		$(this).toggleClass('active');
		$('#map_k').addClass('open');
		$('#map_k').slideToggle();
		map_k();
	});

	if($('div').is('#gmap_m')){
		var map;
		function map_m() {
			map = new google.maps.Map(document.getElementById('gmap_m'), {
				center: {lat: 55.7099941, lng: 37.6536219},
				zoom: 16,
				scrollwheel: false,
				overviewMapControlOptions: {
					opened: false
				},
	            featureType: "ROAD.MAP",
	            styles:  [
							    {
							        "featureType": "all",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-12"
							            },
							            {
							                "lightness": "-2"
							            },
							            {
							                "gamma": "1.28"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "saturation": "-37"
							            },
							            {
							                "lightness": "26"
							            },
							            {
							                "gamma": "3.31"
							            },
							            {
							                "weight": "0.01"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "saturation": "-83"
							            },
							            {
							                "lightness": "-8"
							            },
							            {
							                "gamma": "1.98"
							            },
							            {
							                "weight": "0.72"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels",
							        "stylers": [
							            {
							                "saturation": "-6"
							            },
							            {
							                "lightness": "6"
							            },
							            {
							                "gamma": "1.12"
							            },
							            {
							                "weight": "1.63"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "3"
							            },
							            {
							                "gamma": "0.93"
							            },
							            {
							                "weight": "1.63"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "-10"
							            },
							            {
							                "gamma": "1.98"
							            },
							            {
							                "weight": "4.13"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text.stroke",
							        "stylers": [
							            {
							                "weight": "0.01"
							            },
							            {
							                "lightness": "100"
							            },
							            {
							                "saturation": "-52"
							            },
							            {
							                "gamma": "0.09"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "weight": "0.01"
							            },
							            {
							                "visibility": "on"
							            },
							            {
							                "saturation": "22"
							            }
							        ]
							    },
							    {
							        "featureType": "administrative.land_parcel",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "9"
							            },
							            {
							                "gamma": "0.84"
							            },
							            {
							                "weight": "3.93"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-42"
							            },
							            {
							                "lightness": "10"
							            },
							            {
							                "gamma": "0.58"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-88"
							            },
							            {
							                "weight": "0.78"
							            },
							            {
							                "lightness": "-1"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "saturation": "24"
							            },
							            {
							                "visibility": "on"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "14"
							            },
							            {
							                "lightness": "32"
							            },
							            {
							                "hue": "#00aeff"
							            },
							            {
							                "gamma": "0.29"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "saturation": "72"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "labels.text",
							        "stylers": [
							            {
							                "saturation": "33"
							            },
							            {
							                "lightness": "-6"
							            },
							            {
							                "hue": "#00b5ff"
							            }
							        ]
							    }
						]
			});

			var image = 'img/marker.png';
	        var beachMarker = new google.maps.Marker({
		        position: {lat: 55.7099941, lng: 37.6536219},
		        map: map,
		        icon: image
	        });
		}
	}

	if($('div').is('#gmap_c')){
		var map_ca;
		function map_c() {
			map_ca = new google.maps.Map(document.getElementById('gmap_c'), {
				center: {lat: 53.204615, lng: 50.142736},
				zoom: 16,
				scrollwheel: false,
				overviewMapControlOptions: {
					opened: false
				},
	            featureType: "ROAD.MAP",
	            styles:  [
							    {
							        "featureType": "all",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-12"
							            },
							            {
							                "lightness": "-2"
							            },
							            {
							                "gamma": "1.28"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "saturation": "-37"
							            },
							            {
							                "lightness": "26"
							            },
							            {
							                "gamma": "3.31"
							            },
							            {
							                "weight": "0.01"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "saturation": "-83"
							            },
							            {
							                "lightness": "-8"
							            },
							            {
							                "gamma": "1.98"
							            },
							            {
							                "weight": "0.72"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels",
							        "stylers": [
							            {
							                "saturation": "-6"
							            },
							            {
							                "lightness": "6"
							            },
							            {
							                "gamma": "1.12"
							            },
							            {
							                "weight": "1.63"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "3"
							            },
							            {
							                "gamma": "0.93"
							            },
							            {
							                "weight": "1.63"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "-10"
							            },
							            {
							                "gamma": "1.98"
							            },
							            {
							                "weight": "4.13"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text.stroke",
							        "stylers": [
							            {
							                "weight": "0.01"
							            },
							            {
							                "lightness": "100"
							            },
							            {
							                "saturation": "-52"
							            },
							            {
							                "gamma": "0.09"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "weight": "0.01"
							            },
							            {
							                "visibility": "on"
							            },
							            {
							                "saturation": "22"
							            }
							        ]
							    },
							    {
							        "featureType": "administrative.land_parcel",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "9"
							            },
							            {
							                "gamma": "0.84"
							            },
							            {
							                "weight": "3.93"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-42"
							            },
							            {
							                "lightness": "10"
							            },
							            {
							                "gamma": "0.58"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-88"
							            },
							            {
							                "weight": "0.78"
							            },
							            {
							                "lightness": "-1"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "saturation": "24"
							            },
							            {
							                "visibility": "on"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "14"
							            },
							            {
							                "lightness": "32"
							            },
							            {
							                "hue": "#00aeff"
							            },
							            {
							                "gamma": "0.29"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "saturation": "72"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "labels.text",
							        "stylers": [
							            {
							                "saturation": "33"
							            },
							            {
							                "lightness": "-6"
							            },
							            {
							                "hue": "#00b5ff"
							            }
							        ]
							    }
						]
			});

			var image = 'img/marker.png';
	        var beachMarker = new google.maps.Marker({
		        position: {lat: 53.204615, lng: 50.142736},
		        map: map_ca,
		        icon: image
	        });
		}
	}

	if($('div').is('#gmap_k')){
		var map_ka;
		function map_k() {
			map_ca = new google.maps.Map(document.getElementById('gmap_k'), {
				center: {lat: 55.7815474, lng: 49.1311678},
				zoom: 16,
				scrollwheel: false,
				overviewMapControlOptions: {
					opened: false
				},
	            featureType: "ROAD.MAP",
	            styles:  [
							    {
							        "featureType": "all",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-12"
							            },
							            {
							                "lightness": "-2"
							            },
							            {
							                "gamma": "1.28"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "saturation": "-37"
							            },
							            {
							                "lightness": "26"
							            },
							            {
							                "gamma": "3.31"
							            },
							            {
							                "weight": "0.01"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "geometry.stroke",
							        "stylers": [
							            {
							                "saturation": "-83"
							            },
							            {
							                "lightness": "-8"
							            },
							            {
							                "gamma": "1.98"
							            },
							            {
							                "weight": "0.72"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels",
							        "stylers": [
							            {
							                "saturation": "-6"
							            },
							            {
							                "lightness": "6"
							            },
							            {
							                "gamma": "1.12"
							            },
							            {
							                "weight": "1.63"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "3"
							            },
							            {
							                "gamma": "0.93"
							            },
							            {
							                "weight": "1.63"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text.fill",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "-10"
							            },
							            {
							                "gamma": "1.98"
							            },
							            {
							                "weight": "4.13"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.text.stroke",
							        "stylers": [
							            {
							                "weight": "0.01"
							            },
							            {
							                "lightness": "100"
							            },
							            {
							                "saturation": "-52"
							            },
							            {
							                "gamma": "0.09"
							            }
							        ]
							    },
							    {
							        "featureType": "all",
							        "elementType": "labels.icon",
							        "stylers": [
							            {
							                "weight": "0.01"
							            },
							            {
							                "visibility": "on"
							            },
							            {
							                "saturation": "22"
							            }
							        ]
							    },
							    {
							        "featureType": "administrative.land_parcel",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-100"
							            },
							            {
							                "lightness": "9"
							            },
							            {
							                "gamma": "0.84"
							            },
							            {
							                "weight": "3.93"
							            }
							        ]
							    },
							    {
							        "featureType": "landscape",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-42"
							            },
							            {
							                "lightness": "10"
							            },
							            {
							                "gamma": "0.58"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "-88"
							            },
							            {
							                "weight": "0.78"
							            },
							            {
							                "lightness": "-1"
							            }
							        ]
							    },
							    {
							        "featureType": "road",
							        "elementType": "geometry.fill",
							        "stylers": [
							            {
							                "saturation": "24"
							            },
							            {
							                "visibility": "on"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "all",
							        "stylers": [
							            {
							                "saturation": "14"
							            },
							            {
							                "lightness": "32"
							            },
							            {
							                "hue": "#00aeff"
							            },
							            {
							                "gamma": "0.29"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "geometry",
							        "stylers": [
							            {
							                "saturation": "72"
							            }
							        ]
							    },
							    {
							        "featureType": "water",
							        "elementType": "labels.text",
							        "stylers": [
							            {
							                "saturation": "33"
							            },
							            {
							                "lightness": "-6"
							            },
							            {
							                "hue": "#00b5ff"
							            }
							        ]
							    }
						]
			});

			var image = 'img/marker.png';
	        var beachMarker = new google.maps.Marker({
		        position: {lat: 55.7815474, lng: 49.1311678},
		        map: map_ca,
		        icon: image
	        });
		}
 	}



});


jQuery(window).load(function () {

	rsSchedule();

	function rsSchedule(){
		var hImg = $('.schedule_list li .desc_img img').outerHeight(true);
		$('.schedule_list li .desc_txt').css({"height": hImg});
	}

	rsImf();

	function rsImf() {
		var hImg = $('.ps_dtr img').outerHeight(true);
		var wImg = $('.ps_dtr img').outerWidth(true);
		var HImg = $('.ps_dtl');
		var HImg2 = $('.ps_dtl_cnt');
		var lL = $('.logo').offset().left;

		var ww = $(window).width();
		var rez = ww - wImg;

		$(HImg).css({"height": hImg});
		$(HImg2).css({"height": hImg});
		$(".ps_dtl_cnt").css({"paddingLeft": lL});
		$(".ps_dtl_cnt .date").css({"paddingLeft": lL});
		$('.left_txt').css({"paddingLeft": lL});
	}


    transferImg();

    function transferImg(){
        var $width = $(document).width();
        var $rImg = $('.schedule_list li .desc .left_txt');
        if($width < 943){
            $('.schedule_list li:nth-child(2) .desc .desc_img').after($rImg);
        }else{
            $('.schedule_list li:nth-child(2) .desc .desc_img').before($rImg);
        }
    }

	jQuery(window).resize(function () {
		rsImf();
		rsSchedule();
		transferImg();
	});

});



(function($){
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$('html').addClass('safari_mac');
	}
})(jQuery);

(function($) {
	$(function() {
		$('ul.city_list').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.all_city').find('div.city_desc').removeClass('active').eq($(this).index()).addClass('active');
		});
	});
})(jQuery);
$('.tour-town').click(function(){
	var attrSelected = $(this).attr('data-select')

	$('.checked-tour').attr('data-selected',attrSelected)

	$('.selected').text(attrSelected);

	$('.tours').slideToggle(300);

});

$('.country').click(function(){
	$('.list-country').slideToggle(300)
});



$(".select-custom").click(function(){

	$(this).children(".custom-items").slideToggle(300);

});

$('.select-custom__item').click(function(){
	var attrSelectedCustomItems = $(this).attr('data-select')
	$('.meal__title').attr('data-selected',attrSelectedCustomItems)
	$('.meal__title').text(attrSelectedCustomItems);

});

	$(".travel-menu__item").click(function(){

		$(".travel-menu__item").removeClass("travel-menu__item_active");
		$(this).addClass("travel-menu__item_active");
		$(".m-block").addClass("hide");
		var showBlock = $(this).attr('data-class');
		$(showBlock).removeClass("hide");
		$(".travel-bg").addClass('white');

	});

	$(".bg-image").click(function(){

		$(".travel-bg").removeClass('white');

});
$(".download-more").click(function(){
	$(".show-more-item").toggleClass('none');
	$(this).hide();
});
