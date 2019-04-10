// GALLERY 1
jQuery('#gallery1').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/p1.jpg',
            'thumb': 'images/photos/p1-s.jpg',
            'subHtml': 'Lorem ipsum dolor'
        }, {
            'src': 'images/photos/p2.jpg',
            'thumb': 'images/photos/p2-s.jpg',
            'subHtml': "Ullamco ubi mandaremus"
        }, {
            'src': 'images/photos/p3.jpg',
            'thumb': 'images/photos/p3-s.jpg',
            'subHtml': "Quae expetendis"
        }, {
            'src': 'images/photos/p4.jpg',
            'thumb': 'images/photos/p4-s.jpg',
            'subHtml': "Non nulla"
        }]
    })
});

// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "http://vimeo.com/70301553",
                "subHtml": "Vimeo"
            },
            { // You Tube videos work only on a server.
                "src": "http://www.youtube.com/embed/efVWyPNd3xw",
                "subHtml": "You Tube"
            }
        ]
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/p5.jpg',
            'thumb': 'images/photos/p5-s.jpg',
            'subHtml': 'Quae expetendis'
        }, {
            'src': 'images/photos/p2.jpg',
            'thumb': 'images/photos/p2-s.jpg',
            'subHtml': "Lorem ipsum dolor"
        }, {
            'src': 'images/photos/p4.jpg',
            'thumb': 'images/photos/p4-s.jpg',
            'subHtml': "Legam a expetendis"
        }, {
            'src': 'images/photos/p3.jpg',
            'thumb': 'images/photos/p3-s.jpg',
            'subHtml': "Magna quamquam"
        }]
    })
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'images/photos/p2.jpg',
            'thumb': 'images/photos/p2-s.jpg',
            'subHtml': 'Tamen excepteur'
        }, {
            'src': 'images/photos/p5.jpg',
            'thumb': 'images/photos/p5-s.jpg',
            'subHtml': "Iudicem admodum"
        }, {
            'src': 'images/photos/p4.jpg',
            'thumb': 'images/photos/p4-s.jpg',
            'subHtml': "Enim pariatur"
        }]
    })
});

// GALLERY Univ
jQuery('#gallery_video_univ').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "https://vimeo.com/167397631",
                "subHtml": "MAMBO CANAILLE - Une expérience de livre augmenté unique"
            },
            {
                "src": "https://vimeo.com/164710312",
                "subHtml": "MAMBO CANAILLE -L'envolé du Gaspacho"
            },
            { // You Tube videos work only on a server.
                "src": "https://vimeo.com/270620323",
                "subHtml": "HOLY WOOD - Tommy: portrait fantasmé d’un auteur"
            },
            {
                "src": "https://vimeo.com/300293290",
                "subHtml": "HOLY WOOD - La Biche et le Castor"
            },
            {
                "src": "https://vimeo.com/272906442",
                "subHtml": "HOLY WOOD - Ivy For Real"
            },
            {
                "src": "https://vimeo.com/272906268",
                "subHtml": "HOLY WOOD - Norma - Si Marilyn n’avait jamais existé"
            },
            {
                "src": "https://vimeo.com/218363093",
                "subHtml": "JOSEPH APPRIN - Regards sur notre lieu de vie"
            },
            {
                "src": "https://vimeo.com/218344455",
                "subHtml": "JOSEPH APPRIN - Portraits, autoportraits"
            },
            {
                "src": "https://vimeo.com/218341458",
                "subHtml": "JOSEPH APPRIN - Conservation de la mémoire"
            },
            {
                "src": "https://vimeo.com/194946965",
                "subHtml": "L’HISTOIRE DU MAGASIN - Chapitre 1"
            },
            {
                "src": "https://vimeo.com/194947388",
                "subHtml": "L’HISTOIRE DU MAGASIN - Chapitre 2"
            },
            {
                "src": "https://vimeo.com/194949013",
                "subHtml": "L’HISTOIRE DU MAGASIN - Chapitre 3"
            }
        ]
    });
});

// GALLERY 2
jQuery('#gallery_video_placpluc').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            { // You Tube videos work only on a server.
                "src": "https://youtu.be/2TLJqXmzq3A",
                "subHtml": "Plac & Pluc - E01"
            },
            { // You Tube videos work only on a server.
                "src": "https://youtu.be/HYrMsRxOoS4",
                "subHtml": "Plac & Pluc - E02"
            },
            { // You Tube videos work only on a server.
                "src": "https://youtu.be/ipS26T3xheU",
                "subHtml": "Plac & Pluc - E03"
            },
            { // You Tube videos work only on a server.
                "src": "https://youtu.be/hM19NM-XxM0",
                "subHtml": "Plac & Pluc - E04"
            },
        ]
    });
});
