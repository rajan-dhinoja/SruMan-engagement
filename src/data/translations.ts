export interface TranslationDict {
  welcome: {
    shreenathjiMantra: string;
    ganeshMantra: string;
    kuldeviMantra: string;
    ringCeremony: string;
    shreefalVidhi: string;
    scrollExplore: string;
  };
  couple: {
    familyBlessingIntro: string;
    shreenathjiGrace: string;
    brideGrandparents: string;
    brideParents: string;
    brideName: string;
    brideRole: string;
    brideTagline: string;
    brideDesc: string;
    groomGrandparents: string;
    groomParents: string;
    groomName: string;
    groomRole: string;
    groomTagline: string;
    groomDesc: string;
    eventAnnouncement: string;
    invitationGreeting: string;
    foreverBeginning: string;
    gettingEngagedDate: string;
  };
  nimantrak: {
    title: string;
    grandparents: string;
    parents: string;
    uncleAunt: string;
    relativesList: {
      riki: string;
      rajan: string;
      ruchi: string;
      vansh: string;
    };
    endingGreeting: string;
    shubhSthalTitle: string;
    shubhSthalName: string;
    shubhSthalAddress: string;
    shubhSthalMobile: string;
  };
  eventDetails: {
    joinCelebration: string;
    mainTitle: string;
    countdownAwaiting: string;
    countdown: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    dateTimeCard: {
      title: string;
      date: string;
      time: string;
      button: string;
    };
    venueCard: {
      title: string;
      name: string;
      address: string;
      button: string;
    };
    dressCodeCard: {
      title: string;
      style: string;
      colors: string;
      button: string;
    };
  };
  venue: {
    addressLabel: string;
    mainTitle: string;
    venueName: string;
    address: string;
    button: string;
  };
  blessings: {
    blessingsLove: string;
    mainTitle: string;
    writeWishTitle: string;
    inputNamePlaceholder: string;
    inputTextPlaceholder: string;
    selectCardStyle: string;
    cardStyles: {
      gold: string;
      purple: string;
      champagne: string;
    };
    submitButton: string;
    defaultWishes: {
      wish1: string;
      wish2: string;
      wish3: string;
    };
    justNow: string;
    hoursAgo: string;
    daysAgo: string;
  };
  gateEntry: {
    openGateBtn: string;
  };
  global: {
    navDots: {
      welcome: string;
      couple: string;
      nimantrak: string;
      events: string;
      venue: string;
      blessings: string;
      credits: string;
    };
    footer: {
      madeWithLove: string;
    };
    audio: {
      mute: string;
      play: string;
    };
  };
}

export const translations: Record<"gu" | "en" | "hi", TranslationDict> = {
  gu: {
    welcome: {
      shreenathjiMantra: "|| શ્રીનાથજી બાવા સદા બિરાજમાન છે. ||",
      ganeshMantra: "|| શ્રી ગણેશાય નમઃ ||",
      kuldeviMantra: "|| શ્રી કુળદેવીમાં સત્ય છે. ||",
      ringCeremony: "Ring Ceremony",
      shreefalVidhi: "(શ્રીફળ વિધિ)",
      scrollExplore: "શોધખોળ કરવા માટે સ્ક્રોલ કરો",
    },
    couple: {
      familyBlessingIntro: "પરિવારના આશીર્વાદ સાથે",
      shreenathjiGrace: "પરમ કૃપાળુ શ્રી નાથજી બાવાની અસીમ કૃપાથી",
      brideGrandparents: "ગૌ.વા. શરદભાઈ ઘેલાભાઈ ધીનોજા તથા ગૌ.વા. પુષ્પાબેન શરદચંદ્ર ધીનોજા ની સુપોત્રી",
      brideParents: "તથા શ્રી અજયભાઈ શરદચંદ્ર ધીનોજા તથા અ.સૌ. રીનાબેન અજયભાઈ ધીનોજા ની સુપુત્રી",
      brideName: "ચિ. સૃષ્ટિ",
      brideRole: "કન્યા",
      brideTagline: "લાવણ્ય અને હેતની સરવાણી",
      brideDesc: "સુંદર સપનાઓથી ભરેલું હૃદય. તે Aman ની દુનિયામાં ખુશીઓ અને શાલીનતા લાવે છે, રોજિંદી પળોને યાદગાર વાર્તાઓમાં ફેરવે છે.",
      groomGrandparents: "જયપુર નિવાસી ગૌ.વા. જગદીશભાઈ કનૈયાલાલ નાતાણી તથા શ્રી ચંદ્રાબાગાબેન જગદીશપ્રસાદ નાતાણી ના સુપોત્ર",
      groomParents: "તથા શ્રી મુરારીભાઈ જગદીશભાઈ નાતાણી તથા અ.સૌ. સુધાલતાબેન મુરારીભાઈ નાતાણી ના સુપુત્ર",
      groomName: "ચિ. અમન",
      groomRole: "વરરાજ",
      groomTagline: "ધૈર્ય અને સમર્પણનો પથદર્શક",
      groomDesc: "એક સ્વપ્નદ્રષ્ટા અને શક્તિનો સ્તંભ, જે માયાળુ અને હૂંફાળો છે. Aman Srushti ને એક નિશ્ચિત, અતૂટ અને આદરપૂર્વકનો પ્રેમ આપે છે.",
      eventAnnouncement: "સાથે શ્રીફળ વિધિ (સગાઈ અને ચુંદડી) શ્રાવણ સુદ-૬ ને મંગળવાર તા. ૧૮-૦૮-૨૦૨૬ ના શુભ દિવસે નિરધારેલ છે.",
      invitationGreeting: "તો આ શુભ પ્રસંગે aap સહ પરિવાર sahit પધારી amari શોભામાં અભિવૃધ્ધી કરશોજી.",
      foreverBeginning: "અનંતકાળની શરૂઆત",
      gettingEngagedDate: "સગાઈના બંધનમાં બંધાવા જઈ રહ્યા છે • ૧૮ ઓગસ્ટ ૨૦૨૬",
    },
    nimantrak: {
      title: ":: નિમંત્રક ::",
      grandparents: "ગૌ.વા. શરદચંદ્ર ઘેલાભાઈ ધીણોજા • ગૌ.વા. પુષ્પાબેન શરદચંદ્ર ધીણોજા",
      parents: "અજયભાઈ શરદચંદ્ર ધીણોજા • અ.સૌ. રીનાબેન અજયભાઈ ધીણોજા",
      uncleAunt: "અમિતભાઈ શરદચંદ્ર ધીણોજા • અ.સૌ. જ્યોતિબેન અમિતભાઈ ધીણોજા",
      relativesList: {
        riki: "કુ. રીકી અજયભાઈ ધીણોજા",
        rajan: "રાજન અજયભાઈ ધીણોજા",
        ruchi: "કુ. રુચિ અમિતભાઈ ધીણોજા",
        vansh: "વંશ અમિતભાઈ ધીણોજા",
      },
      endingGreeting: "તથા ધીણોજા પરિવારના જય શ્રી કૃષ્ણ",
      shubhSthalTitle: ":: નિવાસ સ્થાન ::",
      shubhSthalName: '"ગિરિકંદરા"',
      shubhSthalAddress: "ચોરડી દરવાજો, ઉદ્યોગ ભારતી ચોક, ગોંડલ.",
      shubhSthalMobile: "મો. ૯૧૦૬૬૭૫૧૫૬",
    },
    eventDetails: {
      joinCelebration: "ઉજવણીમાં સામેલ થાઓ",
      mainTitle: "સમારોહની વિગત",
      countdownAwaiting: "શુભ ઘડીની રાહ",
      countdown: {
        days: "દિવસ",
        hours: "કલાક",
        minutes: "મિનિટ",
        seconds: "સેકન્ડ",
      },
      dateTimeCard: {
        title: "તારીખ અને સમય",
        date: "મંગળવાર, ૧૮ ઓગસ્ટ ૨૦૨૬",
        time: "સવારે ૯:૦૦ વાગ્યાથી શરૂ",
        button: "કેલેન્ડરમાં ઉમેરો",
      },
      venueCard: {
        title: "સ્થળ",
        name: "પરિશ્રમ ધ લોન્સ",
        address: "મોવીયા રોડ, ગોંડલ, ગુજરાત",
        button: "નકશામાં જુઓ",
      },
      dressCodeCard: {
        title: "પહેરવેશ",
        style: "રાજવી ભારતીય પરંપરાગત / ઇન્ડો-વેસ્ટર્ન",
        colors: "જાંબલી, લેવેન્ડર અને સોનેરી રંગો",
        button: "શુભેચ્છા પાઠવો",
      },
    },
    venue: {
      addressLabel: "સરનામું",
      mainTitle: "સ્થળ અને દિશા નિર્દેશ",
      venueName: "પરિશ્રમ ધ લોન્સ",
      address: "મોવીયા રોડ, ગોંડલ, રૂપાવટી, ગુજરાત ૩૬૦૩૧૧",
      button: "રસ્તો મેળવો",
    },
    blessings: {
      blessingsLove: "આશીર્વાદ અને પ્રેમ",
      mainTitle: "શુભેચ્છા બોર્ડ",
      writeWishTitle: "શુભેચ્છા લખો",
      inputNamePlaceholder: "આપનું નામ",
      inputTextPlaceholder: "અહીં તમારા શુભાશિષ લખો...",
      selectCardStyle: "કાર્ડની શૈલી પસંદ કરો",
      cardStyles: {
        gold: "સોનેરી",
        purple: "જાંબલી",
        champagne: "શેમ્પેઈન",
      },
      submitButton: "શુભેચ્છા મોકલો",
      defaultWishes: {
        wish1: "સૌથી સુંદર જોડીને, તમારી રિંગ સેરેમની તમારા જીવનની નવી અને પ્રેમભરી શરૂઆત બને તેવી શુભકામનાઓ!",
        wish2: "Srushti અને Aman, અમને તમારા આ સુંદર સોપાનની ઉજવણી તમારી સાથે કરતાં ખૂબ જ આનંદ થાય છે! ખુબ ખુબ અભિનંદન!",
        wish3: "તમારા બંનેને મારા હાર્દિક આશીર્વાદ અને પ્રાર્થના. આ સુંદર પ્રેમ ઉત્સવની ઉજવણી જોવા આતુર છું!",
      },
      justNow: "હમણાં જ",
      hoursAgo: "કલાક પહેલા",
      daysAgo: "દિવસ પહેલા",
    },
    gateEntry: {
      openGateBtn: "મહેલના દ્વાર ખોલો",
    },
    global: {
      navDots: {
        welcome: "શ્રી ગણેશ",
        couple: "વર-વધૂ",
        nimantrak: "નિમંત્રક",
        events: "પ્રસંગો",
        venue: "સ્થળ",
        blessings: "આશીર્વાદ",
        credits: "ડોટર",
      },
      footer: {
        madeWithLove: "પ્રેમપૂર્વક બનાવેલ • ઓગસ્ટ ૨૦૨૬",
      },
      audio: {
        mute: "મ્યૂટ કરો",
        play: "મ્યુઝિક ચાલુ કરો",
      },
    },
  },
  en: {
    welcome: {
      shreenathjiMantra: "|| श्रीनाथजी बावा सदा विराजमान हैं। ||",
      ganeshMantra: "|| श्री गणेशाय नमः ||",
      kuldeviMantra: "|| श्री कुलदेवी माँ सत्य है। ||",
      ringCeremony: "Ring Ceremony",
      shreefalVidhi: "(Shreefal Vidhi)",
      scrollExplore: "Scroll to Explore",
    },
    couple: {
      familyBlessingIntro: "With Family Blessings",
      shreenathjiGrace: "By the Grace of Lord Shreenathji",
      brideGrandparents: "Granddaughter of Late Sharadbhai Ghelabhai Dhinoja & Late Pushpaben Sharadchandra Dhinoja",
      brideParents: "and Daughter of Mr. Ajaybhai Sharadchandra Dhinoja & Mrs. Rinaben Ajaybhai Dhinoja",
      brideName: "Chi. Srushti",
      brideRole: "Bride-to-be",
      brideTagline: "A Symphony of Grace & Love",
      brideDesc: "A heart filled with beautiful dreams. She brings joy and elegance to Aman's world, making everyday moments beautiful memories.",
      groomGrandparents: "Grandson of Late Jagdishbhai Kanhaiyalal Natani & Mrs. Chandrabaghaben Jagdishprasad Natani (Residents of Jaipur)",
      groomParents: "and Son of Mr. Muraribhai Jagdishbhai Natani & Mrs. Sudhalataben Muraribhai Natani",
      groomName: "Chi. Aman",
      groomRole: "Groom-to-be",
      groomTagline: "A Pillar of Strength & Devotion",
      groomDesc: "A visionary and pillar of strength, kind and warm. Aman gives Srushti a steady, unwavering, and respectful love.",
      eventAnnouncement: "The auspicious Shreefal Vidhi (Engagement & Chundadi) is fixed on Shravan Sud-6, Tuesday, August 18, 2026.",
      invitationGreeting: "Therefore, on this auspicious occasion, please grace us with your presence along with your family and add to our joy.",
      foreverBeginning: "The Beginning of Forever",
      gettingEngagedDate: "Getting Engaged • August 18, 2026",
    },
    nimantrak: {
      title: ":: Inviters ::",
      grandparents: "Late Sharadchandra Ghelabhai Dhinoja • Late Pushpaben Sharadchandra Dhinoja",
      parents: "Ajaybhai Sharadchandra Dhinoja • Mrs. Rinaben Ajaybhai Dhinoja",
      uncleAunt: "Amitbhai Sharadchandra Dhinoja • Mrs. Jyotiben Amitbhai Dhinoja",
      relativesList: {
        riki: "Riki Ajaybhai Dhinoja",
        rajan: "Rajan Ajaybhai Dhinoja",
        ruchi: "Ruchi Amitbhai Dhinoja",
        vansh: "Vansh Amitbhai Dhinoja",
      },
      endingGreeting: "and the entire Dhinoja Family's warm regards",
      shubhSthalTitle: ":: Residence ::",
      shubhSthalName: '"Girikandra"',
      shubhSthalAddress: "Chordi Darwajo, Udhyog Bharti Chok, Gondal.",
      shubhSthalMobile: "Mo. 9106675156",
    },
    eventDetails: {
      joinCelebration: "Join the Celebration",
      mainTitle: "Event Details",
      countdownAwaiting: "Awaiting the Auspicious Hour",
      countdown: {
        days: "Days",
        hours: "Hours",
        minutes: "Mins",
        seconds: "Secs",
      },
      dateTimeCard: {
        title: "Date & Time",
        date: "Tuesday, August 18, 2026",
        time: "Starting from 9:00 AM",
        button: "Add to Calendar",
      },
      venueCard: {
        title: "Venue",
        name: "Parishram The Lawns",
        address: "Moviya Road, Gondal, Gujarat",
        button: "View on Map",
      },
      dressCodeCard: {
        title: "Dress Code",
        style: "Royal Indian Traditional / Indo-Western",
        colors: "Purple, Lavender & Gold Colors",
        button: "Send Wishes",
      },
    },
    venue: {
      addressLabel: "Address",
      mainTitle: "Venue & Directions",
      venueName: "Parishram The Lawns",
      address: "Moviya Road, Gondal, Rupavati, Gujarat 360311",
      button: "Get Directions",
    },
    blessings: {
      blessingsLove: "Blessings & Love",
      mainTitle: "Wishes Wall",
      writeWishTitle: "Write a Wish",
      inputNamePlaceholder: "Your Name",
      inputTextPlaceholder: "Write your blessings here...",
      selectCardStyle: "Select Card Theme",
      cardStyles: {
        gold: "Gold",
        purple: "Purple",
        champagne: "Champagne",
      },
      submitButton: "Send Wishes",
      defaultWishes: {
        wish1: "Wishing the most beautiful couple a wonderful engagement and a beautiful beginning to your life together!",
        wish2: "Srushti and Aman, we are so delighted to celebrate this beautiful milestone with you! Congratulations!",
        wish3: "Sending my heartfelt blessings and prayers to both of you. Can't wait to see this beautiful celebration of love!",
      },
      justNow: "Just Now",
      hoursAgo: "hours ago",
      daysAgo: "days ago",
    },
    gateEntry: {
      openGateBtn: "Open Palace Gates",
    },
    global: {
      navDots: {
        welcome: "Shree Ganesh",
        couple: "Couple",
        nimantrak: "Inviters",
        events: "Events",
        venue: "Venue",
        blessings: "Blessings",
        credits: "dotr",
      },
      footer: {
        madeWithLove: "Made with Love • August 2026",
      },
      audio: {
        mute: "Mute Music",
        play: "Play Music",
      },
    },
  },
  hi: {
    welcome: {
      shreenathjiMantra: "|| श्रीनाथजी बावा सदा विराजमान हैं। ||",
      ganeshMantra: "|| श्री गणेशाय नमः ||",
      kuldeviMantra: "|| श्री कुलदेवी माँ सत्य है। ||",
      ringCeremony: "Ring Ceremony",
      shreefalVidhi: "(श्रीफल विधि)",
      scrollExplore: "खोजने के लिए स्क्रॉल करें",
    },
    couple: {
      familyBlessingIntro: "परिवार के आशीर्वाद के साथ",
      shreenathjiGrace: "परम कृपालु श्री नाथजी बावा की असीम कृपा से",
      brideGrandparents: "स्व. शरदभाई घेलाभाई धीनोजा एवं स्व. पुष्पाबेन शरदचंद्र धीनोजा की सुपौत्री",
      brideParents: "तथा श्री अजयभाई शरदचंद्र धीनोजा एवं अ.सौ. रीनाबेन अजयभाई धीनोजा की सुपुत्री",
      brideName: "चि. सृष्टि",
      brideRole: "कन्या",
      brideTagline: "सच्चे प्रेम और शालीनता की मूरत",
      brideDesc: "सुंदर सपनों से भरा दिल। वह अमन की दुनिया में खुशियाँ और गरिमा लाती हैं, रोज़मर्रा के पलों को यादगार कहानियों में बदल देती हैं।",
      groomGrandparents: "जयपुर निवासी स्व. जगदीशभाई कन्हैयालाल नाताणी तथा श्रीमती चंद्राबागाबेन जगदीशप्रसाद नाताणी के सुपौत्र",
      groomParents: "तथा श्री मुरारीभाई जगदीशभाई नाताणी एवं अ.सौ. सुधालाताबेन मुरारीभाई नाताणी के सुपुत्र",
      groomName: "चि. अमन",
      groomRole: "वरराज",
      groomTagline: "धैर्य और सच्चे समर्पण की पहचान",
      groomDesc: "एक दूरदर्शी और शक्ति के स्तंभ, दयालु और स्नेही। अमन सृष्टि को एक स्थिर, अटूट और सम्मानजनक प्रेम देते हैं।",
      eventAnnouncement: "के साथ श्रीफल विधि (सगाई और चुनरी) श्रावण सुद-६, मंगलवार दिनांक १८-૦૮-२०२६ के शुभ दिन तय हुई है।",
      invitationGreeting: "तो इस शुभ अवसर पर आप सपरिवार सहित पधारकर हमारी शोभा बढ़ाएं।",
      foreverBeginning: "अनंत काल की शुरुआत",
      gettingEngagedDate: "सगाई के बंधन में बंधने जा रहे हैं • १८ अगस्त २०२६",
    },
    nimantrak: {
      title: ":: निमंत्रक ::",
      grandparents: "स्व. शरदचंद्र घेलाभाई धीणोजा • स्व. पुष्पाबेन शरदचंद्र धीणोजा",
      parents: "अजयभाई शरदचंद्र धीणोजा • अ.सौ. रीनाबेन अजयभाई धीणोजा",
      uncleAunt: "अमितभाई शरदचंद्र धीणोजा • अ.सौ. ज्योतिबेन अमितभाई धीणोजा",
      relativesList: {
        riki: "कु. रिकी अजयभाई धीणोजा",
        rajan: "राजन अजयभाई धीणोजा",
        ruchi: "कु. रुचि अमितभाई धीणोजा",
        vansh: "वंश अमितभाई धीणोजा",
      },
      endingGreeting: "तथा धीणोजा परिवार के जय श्री कृष्ण",
      shubhSthalTitle: ":: निवास स्थान ::",
      shubhSthalName: '"गिरिकंदरा"',
      shubhSthalAddress: "चोरडी दरवाजा, उद्योग भारती चौक, गोंडल।",
      shubhSthalMobile: "मो. ९१०६६७५१५६",
    },
    eventDetails: {
      joinCelebration: "उत्सव में शामिल हों",
      mainTitle: "समारोह विवरण",
      countdownAwaiting: "शुभ घड़ी की प्रतीक्षा",
      countdown: {
        days: "दिन",
        hours: "घंटे",
        minutes: "मिनट",
        seconds: "सेकंड",
      },
      dateTimeCard: {
        title: "तारीख और समय",
        date: "मंगलवार, १८ अगस्त २०२६",
        time: "सुबह ९:०० बजे से शुरू",
        button: "कैलेंडर में जोड़ें",
      },
      venueCard: {
        title: "स्थान",
        name: "परिश्रम द लॉन्स",
        address: "मोवीया रोड, गोंडल, गुजरात",
        button: "नकशे पर देखें",
      },
      dressCodeCard: {
        title: "परिधान (ड्रेस कोड)",
        style: "शाही भारतीय पारंपरिक / इंडो-वेस्टर्न",
        colors: "बैंगनी, लैवेंडर और सुनहरे रंग",
        button: "शुभकामनाएं भेजें",
      },
    },
    venue: {
      addressLabel: "पता",
      mainTitle: "स्थान और मार्ग दर्शन",
      venueName: "परिश्रम द लॉन्स",
      address: "मोवीया रोड, गोंडल, रूपावटी, गुजरात ३६૦૩૧૧",
      button: "मार्ग प्राप्त करें",
    },
    blessings: {
      blessingsLove: "आशीर्वाद और स्नेह",
      mainTitle: "शुभकामना बोर्ड",
      writeWishTitle: "शुभकामनाएं लिखें",
      inputNamePlaceholder: "आपका नाम",
      inputTextPlaceholder: "यहां अपने मंगल वचन लिखें...",
      selectCardStyle: "कार्ड की शैली चुनें",
      cardStyles: {
        gold: "सुनहरा",
        purple: "बैंगनी",
        champagne: "शैम्पेन",
      },
      submitButton: "शुभकामनाएं भेजें",
      defaultWishes: {
        wish1: "सबसे खूबसूरत जोड़ी को सगाई की हार्दिक बधाई! आपका नया जीवन खुशियों और अपार प्रेम से भरा हो।",
        wish2: "सृष्टि और अमन, हमें आप दोनों के इस खूबसूरत सफर का हिस्सा बनने की बेहद खुशी है! बहुत-बहुत बधाई!",
        wish3: "आप दोनों को मेरा हार्दिक आशीर्वाद। इस सुंदर प्रेम उत्सव को देखने के लिए हम उत्सुक हैं!",
      },
      justNow: "अभी-अभी",
      hoursAgo: "घंटे पहले",
      daysAgo: "दिन पहले",
    },
    gateEntry: {
      openGateBtn: "महल के द्वार खोलें",
    },
    global: {
      navDots: {
        welcome: "श्री गणेश",
        couple: "वर-वधू",
        nimantrak: "निमंत्रक",
        events: "समारोह",
        venue: "स्थान",
        blessings: "आशीर्वाद",
        credits: "डोटर",
      },
      footer: {
        madeWithLove: "प्रेमपूर्वक निर्मित • अगस्त २०२६",
      },
      audio: {
        mute: "म्यूट करें",
        play: "म्यूजिक चलाएं",
      },
    },
  },
};
