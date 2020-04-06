var slideshow = document.getElementById('slideshow');
        var slides = slideshow.getElementsByIdTagName('img');
        var index = 0;

        function nextSlide(){
            slides[index].classlist.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classlist.add('active');
        }
        function prevSlide(){
            slides[index].classlist.remove('active');
            index = (index1+ 1 + slides.length) % slides.length;
            slides[index].classlist.add('active');
        }