// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1995-2017",
      text: {
        headline: "EDWARD'S JOURNEY",
        text: "<p>This is Chen Yuheng, Edward, a young man in his early 20s who just embarked on post-graduate study in New Media Programme at Chinese University of Hong Kong.</p>"
      },
      media: {
        url: "Photo1.jpeg",
      }
    }, {
      date: "1995",
      text: {
        headline: "XIAMEN",
        text: "<p>I was born in Xiamen, a cozy and idyllic islet situated on the southeast coast of China. Poetic seascape, Southeast Asian-style architecture and mild climate of Xiamen wound through my entire childhood.</p>"
      },
      location: {
        name: "Yitian Haijing Building, Xiamen",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 24.49215,
        lon: 118.09282,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo2.jpg",
        type: "image",
        credit: "Xiamen, Amoy",
        caption: "HOME SWEET HOME"
      }
    }, {
      date: "2007",
      text: {
        headline: "XIAMEN FOREIGN LANGUAGE SCHOOL",
        text: "<p>In 2007, I entered Xiamen Foreign Language School, one of the best schools in Fujian Province. I spent the next six years with XMFLS, where I got enlightened for the first time and met probably some of the most important friends in my life.</p> "
      },
      location: {
        name: "Xiamen Foreign Language School",
        lat: 24.47985,
        lon: 118.08775,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo3.JPG",
        credit: "XMFLS",
        caption: "Xiamen Foreign Language School"
      }
    },{
      date: "2010",
      text: {
        headline: "GULANG ISLET",
        text: "<p>I like to walk along the seashore of Gulang Islet, to watch ships cruising far, sunset dyeing the sky red and darkness defusing. I always miss my hometown, as it is the place where I can truly slow down to feel the sea breeze and sense the lively details of life.</p> "
      },
      location: {
        name: "Gulang Islet",
        lat: 24.44482,
        lon: 118.06229,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo4.jpeg",
        credit: "Gulang Islet, Xiamen",
        caption: "Garden on the Sea"
      }
    },{
      date: "2013",
      text: {
        headline: "UNIVERSITY OF INTERNATIONAL BUSINESS AND ECONOMICS",
        text: "<p>In 2013, I travelled to Beijing for undergraduate study. I was majored in English(Business Journalism) at University of International Business and Economics. I went further in English learning while taking lessons on business journalism. I also worked with a group of talented people and sharpened my skills in the student union during my first two years with UIBE.</p> "
      },
      location: {
        name: "University of International Business and Economics",
        lat: 39.97902,
        lon: 116.42179,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo5.jpg",
        credit: "UIBE, Beijing",
        caption: "University of International Business and Economics"
      }
    },{
      date: "2015",
      text: {
        headline: "LOYOLA UNIVERSITY CHICAGO",
        text: "<p>In my junior year, I became an exchange student in Loyola University Chicago. Bathed in the breeze from Lake Michigan, I immersed myself in theatrical study and dived into authentic American culture.</p> "
      },
      location: {
        name: "Loyola University Chicago",
        lat: 41.99870,
        lon: -87.65651,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo6.JPG",
        credit: "Loyola, Chicago",
        caption: "Loyola University Chicago"
      }
    },{
      date: "2015",
      text: {
        headline: "UNITED CENTER",
        text: "<p>In Chicago Bulls' United Center, I watched a NBA game in the stadium for the first time.</p> "
      },
      location: {
        name: "United Center",
        lat: 41.88068,
        lon: -87.67409,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo7.JPG",
        credit: "United Center, Chicago",
        caption: "Chicago Bulls"
      }
    },{
      date: "2016",
      text: {
        headline: "YUSYS TECHNOLOGIES CORPORATION",
        text: "<p>I landed my first internship at Yusys Technologies Corporation, a financial IT company in Beijing after I returned from Chicago. My foremost job was to assist in preparation for the annual gala of the company. I took charge of caption writing and video processing for the gala held in Beijing International Convention Center.</p>"
      },
      location: {
        name: "Yusys Technologies Corporation",
        lat: 39.98791,
        lon: 116.39697,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo8.JPG",
        credit: "Beijing International Convention Center, Beijing",
        caption: "Annual Gala"
      }
    },{
      date: "2016",
      text: {
        headline: "PHOENIX NEW MEDIA",
        text: "<p>In last September, I got started on my second internship as a news editor in Phoenix New Media, the new media branch of Phoenix Television. I was devoted to news gathering, editing and weekly competitive analyses. Not only did I get familiar with online news production, but also learnt how important data are to new media industry nowadays.</p>"
      },
      location: {
        name: "Phoenix New Media",
        lat: 40.00385,
        lon: 116.48493,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo9.jpg",
        credit: "Phoenix New Media, Beijing",
        caption: "Phoenix New Media, Phoenix Television"
      }
    },{
      date: "2017",
      text: {
        headline: "NEW ASIA COLLEGE",
        text: "<p>In this September, I went on a brand-new journey at New Asia College of Chinese University of Hong Kong as a post-graduate student.</p> "
      },
      location: {
        name: "Chinese University of Hong Kong",
        lat: 22.42159,
        lon: 114.20995,
        zoom: 16,
        line: true
      },
      media: {
        url: "Photo10.jpg",
        credit: "CUHK, Hong Kong",
        caption: "Pavilion of Harmony, New Asia College"
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'stamen:terrain',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}