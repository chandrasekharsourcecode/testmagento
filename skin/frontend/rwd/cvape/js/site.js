$(document).ready(function() {
	// navigation part ====================
	
	var windowHeight = $( window ).height();
	/*var windowWidth = $(window).outerWidth(true);
	alert(windowWidth);
	var headerWidth = $('.headerbar').width();
	alert(headerWidth);*/
	var headerHeight = $('.headerbar').height();
	
	$('.navpart').css('top', headerHeight + 'px');
	
	//$(".section_body").css('padding-top', headerHeight + 'px');
	$('.left_navigation_holder').css('height', (windowHeight - headerHeight) + 'px');
	
    $('.left_navigation #leftNav .nav_holder .nav > li, .headerbar a').mouseover(function(){
       $('.menuhover_overlay, .navpart').show();
	   //alert('1');
    });
	$('.left_navigation #leftNav .nav_holder .nav > li.active').mouseover(function(){
       $('.menuhover_overlay, .navpart').hide();
	   //alert('1');
    });
	$('.left_navigation #leftNav .nav_holder .nav > li.dropdown.active').mouseover(function(){
       $('.menuhover_overlay, .navpart').show();
	   //alert('1');
    });
    $('.left_navigation #leftNav .nav_holder .nav > li, .headerbar a').mouseout(function(){
        $('.menuhover_overlay, .navpart').hide();
	   //alert('2');
    });
	
	$('.left_navigation #leftNav .navbar-nav > li.dropdown').mouseover(function(){
       $(this).addClass('opennav');
	   //alert('dfbvb fdcbd');
    });
    $('.left_navigation #leftNav .navbar-nav > li.dropdown').mouseout(function(){
       $(this).removeClass('opennav');
	   //alert('dfbvb fdcbd');
    });


	$('.left_navigation #leftNav .nav_holder .nav > li > a, .navpart').mouseover(function(){
	   $('body').addClass('hiddenscroll');
	   
	   //alert('dfbvb fdcbd');
    });
	$('.left_navigation #leftNav .nav_holder .nav > li.active > a').mouseover(function(){
	   $('body').removeClass('hiddenscroll');
	   //alert('dfbvb fdcbd');
    });
	$('.left_navigation #leftNav .nav_holder .nav > li.dropdown.active > a').mouseover(function(){
	   $('body').addClass('hiddenscroll');
	   //alert('dfbvb fdcbd');
    });
    $('.left_navigation #leftNav .nav_holder .nav > li > a, .navpart').mouseout(function(){
	   $('body').removeClass('hiddenscroll');
	   //alert('dfbvb fdcbd');
    });

	$('#informationtext a, .carousallegend_overlay').mouseover(function(){
		$('.carousallegend_overlay').show();
	   //alert('dfbvb fdcbd');
    });
	$('.carousallegend_overlay').mouseout(function(){
		$('.carousallegend_overlay').hide();
	   //alert('dfbvb fdcbd');
    });
	$('#close').on('click', function() {
		$('.carousallegend_overlay').hide();
	});

	
	//menu showhide===================================
	var mainnavHeight = $('.mainnav').height();
	$('.navpart').css('height', (mainnavHeight) + 30 + 'px');
	
	
    $('#e_liquidsnav').mouseover(function(){
       $('.e_liquidsnav').show().addClass('active');
    });
    
    $('.e_liquidsnav').mouseover(function(){
       $('#e_liquidsnav').trigger('mouseover');
    });
	
	
	
//    $('#e_liquidsnav, .e_liquidsnav.active').mouseout(function(){
//        $('.e_liquidsnav').hide();
//    });
      $(document).on('mouseleave', '.e_liquidsnav, #e_liquidsnav', function(e){
        console.log(e.target);
        $('.e_liquidsnav').hide();
        $('#e_liquidsnav').removeClass('opennav');
        $('.menuhover_overlay, .navpart').hide();
//        if(e.target == $('.e_liquidsnav')){
//          $('.e_liquidsnav').hide();
//        }
      });
      
      
      /**
       * 
       * @type Second menu
       */
      
		$('#e_cig_productsnav').mouseover(function(){
			$('.e_cig_productsnav').show().addClass('active');
		});
		
		$('.e_cig_productsnav').mouseover(function(){
			$('#e_cig_productsnav').trigger('mouseover');
		});
		$(document).on('mouseleave', '.e_cig_productsnav, #e_cig_productsnav', function(e){
			console.log(e.target);
			$('.e_cig_productsnav').hide();
			$('#e_cig_productsnav').removeClass('opennav');
			$('.menuhover_overlay, .navpart').hide();
		});
      
      /**
       * 
       * @type end
       */
	   
	   
	   /**
       * 
       * @type Thard menu
       */
      
		$('#e_cig_accessoriesnav').mouseover(function(){
			$('.e_cig_accessoriesnav').show().addClass('active');
		});
		
		$('.e_cig_accessoriesnav').mouseover(function(){
			$('#e_cig_accessoriesnav').trigger('mouseover');
		});
		$(document).on('mouseleave', '.e_cig_accessoriesnav, #e_cig_accessoriesnav', function(e){
			console.log(e.target);
			$('.e_cig_accessoriesnav').hide();
			$('#e_cig_accessoriesnav').removeClass('opennav');
			$('.menuhover_overlay, .navpart').hide();
		});
      
      /**
       * 
       * @type end
       */
	   
      /**
       * 
       * @type Thard menu
       */
      
		$('#dealsnav').mouseover(function(){
			$('.dealsnav').show().addClass('active');
		});
		
		$('.dealsnav').mouseover(function(){
			$('#dealsnav').trigger('mouseover');
		});
		$(document).on('mouseleave', '.dealsnav, #dealsnav', function(e){
			console.log(e.target);
			$('.dealsnav').hide();
			$('#dealsnav').removeClass('opennav');
			$('.menuhover_overlay, .navpart').hide();
		});
      
      /**
       * 
       * @type end
       */
      /**
       * 
       * @type Thard menu
       */
      
		$('#apparelnav').mouseover(function(){
			$('.apparelnav').show().addClass('active');
		});
		
		$('.apparelnav').mouseover(function(){
			$('#apparelnav').trigger('mouseover');
		});
		$(document).on('mouseleave', '.apparelnav, #apparelnav', function(e){
			console.log(e.target);
			$('.apparelnav').hide();
			$('#apparelnav').removeClass('opennav');
			$('.menuhover_overlay, .navpart').hide();
		});
      
      /**
       * 
       * @type end
       */
	   
	   /**
       * 
       * @type Thard menu
       */
      
		$('#resource_centernav').mouseover(function(){
			$('.resource_centernav').show().addClass('active');
		});
		
		$('.resource_centernav').mouseover(function(){
			$('#resource_centernav').trigger('mouseover');
		});
		$(document).on('mouseleave', '.resource_centernav, #resource_centernav', function(e){
			console.log(e.target);
			$('.resource_centernav').hide();
			$('#resource_centernav').removeClass('opennav');
			$('.menuhover_overlay, .navpart').hide();
		});
      
      /**
       * 
       * @type end
       */
	   
	
	// header bottom 3 carousel===========================
	var owlTop3 = $('.top3owl-carousel');
	owlTop3.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		navText: [ '<i class="fa fa-custom-left"></i>', '<i class="fa fa-custom-right"></i>' ],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			992: {
				items: 3
			},
			1599: {
				items: 4
			}
		}
	});
	
	// footer top carousel===========================
	var owlBrandProduct = $('.eLiquiedBrandProduct-carousel');
	owlBrandProduct.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		navText: [ '<i class="fa fa-custom-left"></i>', '<i class="fa fa-custom-right"></i>' ],
		responsive: {
			0: {
				items: 2
			},
			992: {
				items: 4
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			},
			1349: {
				items: 5
			}
		}
	});
	
	// newarrivals-carousel ===========================	
	var owlFlavors = $('.flavors-carousel');
		owlFlavors.owlCarousel({
			margin: 20,
			nav: true,
			loop: true,
			navText: [ '<i class="fa fa-custom-left"></i>', '<i class="fa fa-custom-right"></i>' ],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				992: {
					items: 3
				},
				1400: {
					items: 4
				},
				1700: {
					items: 5
				}
			}
		});
		
	// newarrivals-carousel ===========================	
	
	$('#todaysdeals').on('click', function() {
		$(this).parent().addClass('active').removeClass('activeout');
		$('#topeliquieds, #topdevices, #newarrivals, #featuredproducts, #clearance').parent().removeClass('active').addClass('activeout');
		$('#todaysdealsactive').show();
		$('#topeliquiedsactive, #topdevicesactive, #newarrivalsactive, #featuredproductsactive, #clearanceactive, #popularaid').hide();
	});
	$('#topeliquieds').on('click', function() {
		$(this).parent().addClass('active').removeClass('activeout');
		$('#todaysdeals, #topdevices, #newarrivals, #featuredproducts, #clearance').parent().removeClass('active').addClass('activeout');
		$('#topeliquiedsactive').show();
		$('#todaysdealsactive, #topdevicesactive, #newarrivalsactive, #featuredproductsactive, #clearanceactive, #popularaid').hide();
	});
	$('#topdevices').on('click', function() {
		$(this).parent().addClass('active').removeClass('activeout');
		$('#todaysdeals, #topeliquieds, #newarrivals, #featuredproducts, #clearance').parent().removeClass('active').addClass('activeout');
		$('#topdevicesactive').show();
		$('#todaysdealsactive, #topeliquiedsactive, #newarrivalsactive, #featuredproductsactive, #clearanceactive, #popularaid').hide();
	});
	$('#newarrivals').on('click', function() {
		$(this).parent().addClass('active').removeClass('activeout');
		$('#todaysdeals, #topeliquieds, #topdevices, #featuredproducts, #clearance').parent().removeClass('active').addClass('activeout');
		$('#newarrivalsactive').show();
		$('#todaysdealsactive, #topeliquiedsactive, #topdevicesactive, #featuredproductsactive, #clearanceactive, #popularaid').hide();
		var owlNewarrivals = $('.newarrivals-carousel');
		owlNewarrivals.owlCarousel({
			margin: 20,
			nav: true,
			loop: true,
			autoplay:true,
    		autoplayTimeout:3000,
			autoplayHoverPause:true,
			navText: [ '<i class="fa fa-custom-left"></i>', '<i class="fa fa-custom-right"></i>' ],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				992: {
					items: 3
				}
			}
		});
		
		
		
	});
	$('#featuredproducts').on('click', function() {
		$(this).parent().addClass('active').removeClass('activeout');
		$('#todaysdeals, #topeliquieds, #topdevices, #newarrivals, #clearance').parent().removeClass('active').addClass('activeout');
		$('#featuredproductsactive').show();
		$('#todaysdealsactive, #topeliquiedsactive, #topdevicesactive, #newarrivalsactive, #clearanceactive, #popularaid').hide();
		
		var owlFeaturedproducts = $('.featuredproducts-carousel');
		owlFeaturedproducts.owlCarousel({
			margin: 20,
			nav: true,
			autoplay:true,
    		autoplayTimeout:3000,
			autoplayHoverPause:true,
			loop: true,
			navText: [ '<i class="fa fa-custom-left"></i>', '<i class="fa fa-custom-right"></i>' ],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				992: {
					items: 3
				}
			}
		});
		
	});
	$('#clearance').on('click', function() {
		$(this).parent().addClass('active').removeClass('activeout');
		$('#todaysdeals, #topeliquieds, #topdevices, #newarrivals, #featuredproducts').parent().removeClass('active').addClass('activeout');
		$('#clearanceactive').show();
		$('#todaysdealsactive, #topeliquiedsactive, #topdevicesactive, #newarrivalsactive, #featuredproductsactive, #popularaid').hide();
	});
	
	/*$('.quickpopularaid').on('click', function() {
		//$(this).parent().addClass('active').removeClass('activeout');
		$('#todaysdeals, #topeliquieds, #topdevices, #newarrivals, #featuredproducts, #clearance').parent().removeClass('active').addClass('activeout');
		$('#popularaid').show();
		$('#todaysdealsactive, #topeliquiedsactive, #topdevicesactive, #newarrivalsactive, #featuredproductsactive, #popularaid, #clearanceactive').hide();
	});*/
	
	$('body').click(function() {
	  	$('#todaysdeals, #topeliquieds, #topdevices, #newarrivals, #featuredproducts, #clearance').parent().removeClass('active, activeout');
		$('#popularaid').show();
		$('#todaysdealsactive, #topeliquiedsactive, #topdevicesactive, #newarrivalsactive, #featuredproductsactive, #clearanceactive').hide();
	});
	
	$('.quickpopularaid').click(function(event){
	   event.stopPropagation();
	});
	
	
	
	//=filtering ===============
	$('#filterOne').listnav();
	$('.filter a').click(function(e) {
		e.preventDefault();
	});
	
	
	//=on click scroll ===============
		
	var window_width = $( window ).width();
	//alert(window_width);
	if(window_width > 1200){
		
	}
	if(window_width < 1200){
		$("#todaysdeals").click(function() {
			$('html, body').animate({
				scrollTop: $("#todaysdealsactive").offset().top
			}, 2000);
		});
		$("#topeliquieds").click(function() {
			$('html, body').animate({
				scrollTop: $("#topeliquiedsactive").offset().top
			}, 2000);
		});
		$("#topdevices").click(function() {
			$('html, body').animate({
				scrollTop: $("#topdevicesactive").offset().top
			}, 2000);
		});
		$("#newarrivals").click(function() {
			$('html, body').animate({
				scrollTop: $("#newarrivalsactive").offset().top
			}, 2000);
		});
		$("#featuredproducts").click(function() {
			$('html, body').animate({
				scrollTop: $("#featuredproductsactive").offset().top
			}, 2000);
		});
		$("#clearance").click(function() {
			$('html, body').animate({
				scrollTop: $("#clearanceactive").offset().top
			}, 2000);
		});
	}
	if(window_width < 768){
		$('.left_navigation').addClass('leftnavigationsmall');
		$('.left_navigation .navbar-toggle').click(function() {
			//$('.left_navigation').toggleClass('leftnavigationsmall');
		});
	}

	
	
	//==================add number=============
	$('.after').bootstrapNumber();
	
	$(document).on('click', '.selectoption', function(){
		$(this).parents('.item').siblings().find('.selectoptiondiv').removeClass('select').hide().end().end().find('.selectoptiondiv').addClass('select').show();	
	});
	
	$('body').on('click', function(e){
		if(!$(e.target).is('.selectoptiondiv.select *') && !$(e.target).is('.selectoptiondiv.select')){
			$('.selectoptiondiv').hide();
		}
	});
	
	//====================ratingpart===================
	/*$('.ratingdropdown').mouseover(function(){
		$('.ratingdetails').show();
	   //alert('dfbvb fdcbd');
    });
	$('body').on('mouseleave', function(e){
		if(!$(e.target).is('.ratingdetails *')){
			$('.ratingdetails').hide();
		}
	});*/
	
	
	
	
	
	
	
});


$(window).scroll(function(){
	var headerHeight = $('.headersticky').height();
	
	var sticky = $('.headersticky'),
		scroll = $(window).scrollTop(), navWidth = $('.left_navigation').width();
                
        var windowHeight = $(window).height();
	
			$('.navpart').css('top', headerHeight + 'px');
	
        
	if (scroll >= 50) {
		sticky.addClass('fixed');
		$(".mainbodyinn").css('padding-top', headerHeight + 'px');
		$('.left_navigation_holder').addClass('fixed_nav').width(navWidth);
		$('.left_navigation_holder').css('top', headerHeight + 'px');
		$('.navpart').css('top', headerHeight + 'px');
		//$('.navpart').css('top', headerHeight + 'px').addClass('navpart_fixed');
	}else {
		headerHeight = $('.headerbar').height();
		sticky.removeClass('fixed');
		$(".mainbodyinn").css('padding-top', 0 + 'px');
		$(".section_body").css('padding-top', 0 + 'px');
		$('.left_navigation_holder').removeClass('fixed_nav');
		$('.navpart').css('top', headerHeight + 'px');
		
	}
    
	$('.left_navigation_holder').css('height', (windowHeight - headerHeight) + 'px');
	
	

});

	/*//===========================
	window.smoothScroll = function(target) {
		var window_width = $( window ).width();
		//alert(window_width);
		if(window_width > 1200){
			
		}
		if(window_width < 1200){
			var scrollContainer = target;
			do { //find scroll container
				scrollContainer = scrollContainer.parentNode;
				if (!scrollContainer) return;
				scrollContainer.scrollTop += 1;
			} while (scrollContainer.scrollTop == 0);
			
			var targetY = 0;
			do { //find the top of target relatively to the container
				if (target == scrollContainer) break;
				targetY += target.offsetTop;
			} while (target = target.offsetParent);
			
			scroll = function(c, a, b, i) {
				i++; if (i > 30) return;
				c.scrollTop = a + (b - a) / 30 * i;
				setTimeout(function(){ scroll(c, a, b, i); }, 20);
			}
			// start scrolling
			scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
		}
	};*/
	
