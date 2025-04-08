(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Experience
    $('.experience').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })



    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: true,
        margin:20,
        
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive:{
                0:{
                    items:1,
                
                },
                600:{
                    items:2,
             
                },
                1000:{
                    items:3,
              
                }
            }
    });
    

        // Testimonial carousel
        $(".Medical-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            dots: true,
            nav: true,
            margin:20,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive:{
                0:{
                    items:1,
                
                },
                600:{
                    items:1,
             
                },
                1000:{
                    items:2,
              
                }
            }
    
        });




        $(".low-medica-n").owlCarousel({
            items: 2,
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            dots: false,
            nav: true,
            margin: 20,
            navText: [
                '<i class="bi bi-arrow-left custom-nav-icon"></i>',
                '<i class="bi bi-arrow-right custom-nav-icon"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 3,
                }
            }
        });
        // Testimonial carousel
        $(".facilities-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            dots: false,
            nav: true,
            margin:20,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive:{
                0:{
                    items:1,
                
                },
                600:{
                    items:1,
             
                },
                1000:{
                    items:4,
              
                }
            }
    
        });
})(jQuery);



 //client countdown start
   // Function to start the countdown
   function startCountdown() {
    // Get elements
    const yearsElement = document.getElementById('years');
    const staffElement = document.getElementById('staff');
    const departmentsElement = document.getElementById('departments');
    const patientsElement = document.getElementById('patients');
    
    // Set target values
    const targetYears = 5;
    const targetStaff = 15;
    const targetDepartments = 9;
    const targetPatients = 32000;

    // Set initial values
    let years = 1;
    let staff = 1;
    let departments = 1;
    let patients = 1;

    // Function to update the values
    function updateValues() {
        yearsElement.textContent = years + '+';
        staffElement.textContent = staff;
        departmentsElement.textContent = departments;
        patientsElement.textContent = patients + '+';
    }

    // Function to animate the numbers
    function animateCountdown() {
        const incrementYears = Math.ceil(targetYears / 50);
        const incrementStaff = Math.ceil(targetStaff / 50);
        const incrementDepartments = Math.ceil(targetDepartments / 50);
        const incrementPatients = Math.ceil(targetPatients / 50);

        const interval = setInterval(() => {
            if (years < targetYears) years += incrementYears;
            if (staff < targetStaff) staff += incrementStaff;
            if (departments < targetDepartments) departments += incrementDepartments;
            if (patients < targetPatients) patients += incrementPatients;

            if (years >= targetYears) years = targetYears;
            if (staff >= targetStaff) staff = targetStaff;
            if (departments >= targetDepartments) departments = targetDepartments;
            if (patients >= targetPatients) patients = targetPatients;

            updateValues();

            if (years === targetYears && staff === targetStaff && departments === targetDepartments && patients === targetPatients) {
                clearInterval(interval);
            }
        }, 100);
    }

    // Start the animation
    animateCountdown();
}

// Function to observe the countdown container
function observeCountdown() {
    const countdownContainer = document.querySelector('.countdown-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCountdown();
                observer.unobserve(countdownContainer); // Stop observing after the countdown starts
            }
        });
    });

    observer.observe(countdownContainer);
}

// Start observing the countdown container
observeCountdown();


$('#header-carousel').on('slide.bs.carousel', function (e) {
    var nextIndex = $(e.relatedTarget).index();
    $('.carosal-indicator li').removeClass('active');
    $('.carosal-indicator li').eq(nextIndex).addClass('active');
});