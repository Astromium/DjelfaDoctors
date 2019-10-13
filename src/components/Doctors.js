import React, { Component } from 'react';
import Doctor from './Doctor';

class Doctors extends Component {
  state = {
    field: '',
    generals: [
      {
        key: 0,
        name: 'مصطفاوي عيشة',
        adress: 'حي الضاية 04/531',
        phone: '027930403'
      },
      {
        key: 1,
        name: 'قويدر ونوقي',
        adress: 'حي الظل الجميل 23/274',
        phone: '027923674 / 0776122399'
      },
      {
        key: 2,
        name: 'موفق أحمد',
        adress: 'حي الحدائق عمارة 05/29',
        phone: '027911313 / 0665100056'
      },
      {
        key: 3,
        name: 'حبيب .ع',
        adress: 'حي سليمان عميرات مقابل مسجد نايل',
        phone: '027913573'
      },
      {
        key: 4,
        name: 'حبيب .ن',
        adress: 'حي بربيح عند مفترق الطرق المشعل',
        phone: '0551254274'
      },
      {
        key: 5,
        name: 'جاب الله مصطفى',
        adress: 'شارع نايل 73 بالقرب من حمام الحرفة',
        phone: '027873709'
      },
      {
        key: 6,
        name: 'قيت عبد الباقي',
        adress: 'حي 100 دار خلف التكوين المهني',
        phone: '027903628 / 027895364'
      },
      {
        key: 7,
        name: 'بورحلة محمد إلياس',
        adress: 'حي بن عزيز 74',
        phone: '0551360857'
      },
      {
        key: 8,
        name: 'عزي بوعلام',
        adress: 'حي 5 جويلية مقابل سوق الفلاح 38/785',
        phone: '027915022 / 0672694263'
      },
      {
        key: 9,
        name: 'غزال .ز',
        adress: 'حي بربيح 940 مقابل مدرسة بلاحي',
        phone: '027878246'
      },
      {
        key: 10,
        name: 'حاج عيسى يوسف',
        adress: 'طريق الأغواط 29',
        phone: '027922284'
      },
      {
        key: 11,
        name: 'قدوري عبد الحميد',
        adress: 'حي بوتريفيس',
        phone: '027873293'
      },
      {
        key: 12,
        name: 'بن ضيف محمد .ز',
        adress: 'حي بوتريفيس',
        phone: '0673739679'
      },
      {
        key: 13,
        name: 'دبوز محمد',
        adress: 'حي عين الشيح 15/841',
        phone: '0555349151'
      },
      {
        key: 14,
        name: 'العمري الحسن',
        adress: 'حي بن جرمة 15/375',
        phone: '027871418'
      },
      {
        key: 15,
        name: 'سعيد عبد الرحمان',
        adress: 'حي بن عزيز بناية 71 رقم 1',
        phone: '027930242'
      },
      {
        key: 16,
        name: 'عروي مصطفى كمال',
        adress: 'حي قناني 09/484',
        phone: '0550885594'
      },
      {
        key: 17,
        name: 'فيروز بن سيد',
        adress: 'حي الفصحى 73/40',
        phone: '0773501371'
      },
      {
        key: 18,
        name: 'شكالي .س',
        adress: 'حي عين الشيح مقابل التكوين المهني',
        phone: '0561624911'
      },
      {
        key: 19,
        name: 'بن سالم نصيرة',
        adress: 'وسط المدينة 43/3 بالقرب من مسجد سي أحمد بن الشريف',
        phone: '0661616151'
      },
      {
        key: 20,
        name: 'بن تونسي سعدي',
        adress: 'حي مائة دار',
        phone: '027901688'
      },
      {
        key: 21,
        name: 'عبد الرحمان برمان',
        adress: 'حي البناء الذاتي',
        phone: '0664213694'
      },
      {
        key: 22,
        name: 'محفوظي .ن',
        adress: 'حي بوتريفيس 98/116',
        phone: '027902626'
      },
      {
        key: 23,
        name: 'مسلمي عبد العزيز',
        adress: 'حي العمراوي بوتريفيس',
        phone: '0663166300'
      },
      {
        key: 24,
        name: 'قويدر ونوقي',
        adress: 'شارع فلسطين 23/174',
        phone: '0776122396'
      },
      {
        key: 25,
        name: 'لخذاري فيصل',
        adress: 'حي 05 جويلية عمارة 14',
        phone: '0663508242'
      },
      {
        key: 26,
        name: 'محمد أحمد',
        adress: 'حي قناني رويني',
        phone: '027875083'
      },
      {
        key: 27,
        name: 'بن سالم محمد',
        adress: 'حي الضاية عمارة 03/09 خلف البريد',
        phone: '0672008856'
      },
      {
        key: 28,
        name: 'أمجكوح .و',
        adress: 'حي برنادة مقابل إقامة الدرك الوطني',
        phone: '0540983438'
      },
      {
        key: 29,
        name: 'علماني مراد',
        adress: 'حي الضاية بجوار الحماية المدنية',
        phone: '0698759240'
      },
      {
        key: 30,
        name: 'بن حدة .س',
        adress: 'حي بن تيبة بجوار صيدلية حاجي',
        phone: '0540286663'
      },
      {
        key: 31,
        name: 'بن عزوز علي',
        adress: 'حي عين الشيح بجوار التكوين',
        phone: '0656151400'
      },
      {
        key: 32,
        name: 'خير الدين منصور',
        adress: 'حي بن جرمة بجوار حمام الحرفة 67/331',
        phone: '0559190213'
      },
      {
        key: 33,
        name: 'زرقين .ز',
        adress: 'بجوار مسجد بن دنيدينة 03/102',
        phone: '0657780705'
      },
      {
        key: 34,
        name: 'بشير بسكر',
        adress: 'حي بن عزيز 02/64',
        phone: 'غير متوفر'
      },
      {
        key: 35,
        name: 'مقار بن سليم',
        adress: 'حي مائة دار',
        phone: '0552052104'
      },
      {
        key: 36,
        name: 'سعد الدين علي',
        adress: 'حي بوتريفيس',
        phone: '0667729514'
      },
      {
        key: 37,
        name: 'محمد فرج',
        adress: 'حي شعباني',
        phone: '0665890204 / 027936047'
      }
    ],
    genicos: [
      {
        key: 0,
        name: 'بدوي خديجة',
        adress: 'حي باب الشارف بالقرب من مدرسة حنيشي الشمالية',
        phone: '0560198815'
      },
      {
        key: 1,
        name: 'تونسي نورة',
        adress: '(حي بن جرمة (مقابل مدرسة المكفوفين',
        phone: '0553251914'
      },
      {
        key: 2,
        name: 'خالدي عبد الحكيم',
        adress: 'حي بقوقة عيادة المروج',
        phone: '0771475486'
      },
      {
        key: 3,
        name: 'زمار خالد',
        adress: 'حي السعادات بجوار القطاع العسكري',
        phone: '027900788'
      },
      {
        key: 4,
        name: 'محمد عزوزي',
        adress: 'حي عين الشيح 05/852',
        phone: '0660613161'
      },
      {
        key: 5,
        name: 'عمار يونسي',
        adress: 'حي بربيح خلف إقامة الإناث',
        phone: '0771242577'
      },
      {
        key: 6,
        name: 'نايش نصيرة',
        adress: 'حي سليمان عميرات مقابل مسجد نايل',
        phone: '027873443'
      },
      {
        key: 7,
        name: 'لحرش حسيبة',
        adress: 'حي السعادة 29/320',
        phone: 'بالقرب من مسجد السعادة'
      },
      {
        key: 8,
        name: 'غلاب .س.ر',
        adress: 'حي بن جرمة بجوار محل بطاش لبيع الهواتف',
        phone: '0668123968'
      },
      {
        key: 9,
        name: 'عبد الوهاب حارش',
        adress: 'حي المسجد الجديد بناية 295 رقم 6',
        phone: '027873752'
      },
      {
        key: 10,
        name: 'بن جدو باديس',
        adress: ' حي بلغزال بناية 867 رقم 15 بجانب ميدان سباق الخيل',
        phone: '0559096605'
      },
      {
        key: 11,
        name: 'خير الناس إبراهيم',
        adress: 'حي بن جرمة 26 مسكن',
        phone: '027938672'
      }
    ],
    dermatos: [
      {
        key: 0,
        name: 'كريم بشار',
        adress: 'حي المسجد الجديد الخونية خلف وكالة شيفرولي',
        phone: '027937189'
      },
      {
        key: 1,
        name: 'حمر العين .ن',
        adress: 'حي باب الشارف 04/101 بالقرب من دار البارود',
        phone: '0551998040'
      }
    ],
    neuros: [
      {
        key: 0,
        name: 'حنشي محمد',
        adress: 'حي المستشفى بجوار الخزينة العمومية',
        phone: '027901070'
      },
      {
        key: 1,
        name: 'حسناوي موسى',
        adress: 'حي السعادات',
        phone: '0561313165'
      },
      {
        key: 2,
        name: 'هبال محمد',
        adress: 'حي بربيح مقابل مديرية الحماية المدنية',
        phone: '027875812'
      },
      {
        key: 3,
        name: 'بوخلخال سهام',
        adress: 'حي 5 جويلية بزار رياض الفتح عمارة 543',
        phone: '0666799498'
      },
      {
        key: 4,
        name: 'عراشي جمال',
        adress: 'حي بربيح بالقرب من مخبزة هاني',
        phone: '027875812'
      },
      {
        key: 5,
        name: 'خليفي محمود',
        adress: 'شارع سي الحواس بناية 34 رقم 23',
        phone: '027871976'
      },
      {
        key: 6,
        name: 'بهلول عبد النور',
        adress: 'حي شعباني',
        phone: '0550851384'
      }
    ],
    orls: [
      {
        key: 0,
        name: 'بن دكن بو حفص',
        adress: 'حي قناني مقابل محافظة السهوب',
        phone: '027875768 / 0781990352'
      },
      {
        key: 1,
        name: 'يوسفي محمد',
        adress: 'حي المستشفى بالقرب من وكالة كوندور',
        phone: '0553335873'
      },
      {
        key: 2,
        name: 'مراد باباسي',
        adress: 'حي محمد بوضياف عمارة 64',
        phone: '0779063378'
      },
      {
        key: 3,
        name: 'بوسنة .ف',
        adress: 'حي شعباني مقابل مستشفى الأم و الطفل',
        phone: '027872174 / 0551509936'
      },
      {
        key: 4,
        name: 'ميلود .ل',
        adress: 'حي بلغزال بجوار سوق دبي',
        phone: '0557401398'
      }
    ],
    pedias: [
      {
        key: 0,
        name: 'سفيان بن موسى',
        adress: 'حي المسجد الجديد بجوار مفترق الطرق الرويني',
        phone: '0551072591'
      },
      {
        key: 1,
        name: 'يحياوي مراد',
        adress: 'حي قناني 13/485',
        phone: '0542713104'
      },
      {
        key: 2,
        name: 'عبد الكريم طالب',
        adress: 'وسط المدينة بجوار صيدلية حميدة',
        phone: '027922844 / 0667850026'
      },
      {
        key: 3,
        name: 'صلاح الدين زياني',
        adress: 'شارع سيدي نايل 129/99',
        phone: '0560202772'
      },
      {
        key: 4,
        name: 'محمد حران',
        adress: 'حي المستشفى بالقرب من المستشفى القديم',
        phone: '027914384'
      },
      {
        key: 5,
        name: 'كمال كلام',
        adress: 'حي باب الشارف مقابل مخبزة طرشي',
        phone: '027875911 / 0771558267'
      },
      {
        key: 6,
        name: 'سليم لغراب',
        adress: 'حي بربيح طريق التكوين المهني',
        phone: '0772123418'
      },
      {
        key: 7,
        name: 'دخينيسة محمد',
        adress: 'حي بربيح مقابل سوق السيارات',
        phone: '027873778'
      },
      {
        key: 8,
        name: 'محساس .ل',
        adress: 'وسط المدينة مقابل مسجد خالد بن الوليد',
        phone: '027923132'
      }
    ],
    radios: [
      {
        key: 0,
        name: 'طارق محمد سعيد',
        adress: 'حي المسجد الجديد 18/479 خلف وكالة شيفرولي',
        phone: '027873261'
      },
      {
        key: 1,
        name: 'عمير عبد الكريم',
        adress: 'حي بربيح 02/471 مقابل مديرية السكن',
        phone: '027901212 / 0557523873'
      },
      {
        key: 2,
        name: 'يونسي عماد',
        adress: 'حي بربيح طريق التكوين المهني',
        phone: 'غير متوفر'
      },
      {
        key: 3,
        name: 'زرمان زكية',
        adress: 'حي العقيد شعباني 113',
        phone: 'غير متوفر'
      },
      {
        key: 4,
        name: 'بن بلعيش سليم',
        adress: 'حي بوضياف 63/04',
        phone: 'غير متوفر'
      },
      {
        key: 5,
        name: 'رزايقية .أ',
        adress: 'حي العقيد شعباني مقابل المجلس القضائي',
        phone: '0698173317'
      }
    ],
    uros: [
      {
        key: 0,
        name: 'صخري فاطمة',
        adress: 'الشارع الجديد 135/29',
        phone: '027922844 / 0775225392'
      },
      {
        key: 1,
        name: 'بلعباس عبد القادر',
        adress: 'حي المسجد الجديد بجوار مدرسة النور 34/125',
        phone: '027937777 / 0667048893'
      },
      {
        key: 2,
        name: 'بلقماري علية',
        adress: 'حي تشيقيفارا بناية 2 باب 12',
        phone: '027904608 / 0552765490'
      },
      {
        key: 3,
        name: 'سبتي ناجي',
        adress: 'حي بن جرمة بجوار السوق المغطاة',
        phone: '0661566024'
      },
      {
        key: 4,
        name: 'بختي .ع',
        adress: 'حي بربيح طريق التكوين المهني',
        phone: '0698987370'
      }
    ],
    cardios: [
      {
        key: 0,
        name: 'حاشي جلول',
        adress: 'حي بربيح مقابل مديرية السكن',
        phone: '0553430093'
      },
      {
        key: 1,
        name: 'عيسو إبراهيم',
        adress: 'حي شعباني مقابل مستشفى الأم و الطفل',
        phone: '027874135 / 0793785063'
      },
      {
        key: 2,
        name: 'عايدي مختار',
        adress: 'حي الفلاح بيرو عرب ',
        phone: '559662107'
      },
      {
        key: 3,
        name: 'رشيد علي لحرش',
        adress: 'حي بلغزال بالقرب من مسجد بلغزال',
        phone: '0556355110'
      },
      {
        key: 4,
        name: 'طالبي محمد',
        adress: 'حي المستشفى مقابل المجلس الولائي',
        phone: '055489426'
      },
      {
        key: 5,
        name: 'سيجري منير',
        adress: 'حي بوضياف عمارة رقم 1 ',
        phone: '0771163189'
      }
    ],
    ophtas: [
      {
        key: 0,
        name: 'الحاج عيسى إبراهيم',
        adress: 'حي المسجد الجديد الخونية 5/243 بجوار موبيليس',
        phone: '027937113 / 0666026600'
      },
      {
        key: 1,
        name: 'عمر بوصوار',
        adress: 'حي عين السرار',
        phone: '0777701954'
      },
      {
        key: 2,
        name: 'اسماوي مصطفى',
        adress: 'حي شعباني بجوار مركز الضرائب',
        phone: '0559152111 / 027936305'
      },
      {
        key: 3,
        name: 'رحالي الطاهر',
        adress: 'حي المسجد الجديد بناية 243 رقم 5',
        phone: 'غير متوفر'
      },
      {
        key: 4,
        name: 'بن الأطرش .م',
        adress: 'مصلحة المروج',
        phone: 'غير متوفر'
      },
      {
        key: 5,
        name: 'مستشفى الصداقة الجزائري الكوبي',
        adress: 'بالقرب من الولاية',
        phone: '027875021'
      }
    ],
    chests: [
      {
        key: 0,
        name: 'حسينة حمرون',
        adress: 'حي المسجد الجديد 81/330',
        phone: '0777079475'
      },
      {
        key: 1,
        name: 'حاكم .أ',
        adress: 'حي بلغزال 27/596',
        phone: '0558602766 / 027870620'
      },
      {
        key: 2,
        name: 'كشيدة محمد عبد الصمد',
        adress: 'حي دار البارود 06/427 مقابل ملعب شبيرة',
        phone: '0554063054 / 027870620'
      },
      {
        key: 3,
        name: 'بجقينة .س',
        adress: 'حي شعباني مقابل ثانوية طهيري عبد الرحمان',
        phone: '0551500635 / 027920122'
      }
    ],
    bones: [
      {
        key: 0,
        name: 'شويحة مختار',
        adress: 'حي حاشي معمر بناية 160 وراء المستشفى القديم',
        phone: '0774355341'
      },
      {
        key: 1,
        name: 'زعيميني محمد',
        adress: 'حي بلغزال 27/596 قرب مسجد عمار بن ياسر',
        phone: '0558602766'
      },
      {
        key: 2,
        name: 'قسمي نعيمة',
        adress: 'بالقرب من مستشفى طب العيون كوبا',
        phone: '027904116'
      },
      {
        key: 3,
        name: 'الأندلسي نور الدين',
        adress: 'حي 5 جويلية بزار جواف',
        phone: '0560340406'
      },
      {
        key: 4,
        name: 'ميهوبي نور الدين',
        adress: 'حي بربيح مقابل مديرية الشؤون الإجتماعية',
        phone: '027874376'
      },
      {
        key: 5,
        name: 'بن مسعود محمد',
        adress: ' حي المسجد الجديد شارع البنك',
        phone: '0549183899'
      },
      {
        key: 6,
        name: 'بن عبد اللَه أحمد',
        adress: 'حي النعاس بربيح بجانب البريد و مركز التكوين',
        phone: '0771307591'
      },
      {
        key: 7,
        name: 'بنواة فريد',
        adress: 'حي بن تيبة طريق مقر الدائرة الجديدة',
        phone: '0556890702'
      }
    ],
    diabetics: [
      {
        key: 0,
        name: 'قزران سالم',
        adress: 'شارع سيدي نايل بالقرب من النقل الحضري لبربيح',
        phone: '0555427560'
      },
      {
        key: 1,
        name: 'كراش فضيلة',
        adress: 'حي بوتريفيس فوج 58 خلف المحطة الحضرية ببحرارة',
        phone: '0791457100'
      },
      {
        key: 2,
        name: 'بن لحرش .ك .ن',
        adress: 'حي بوتريفيس 58/157 وراء إكمالية مقواس',
        phone: '0780251105'
      },
      {
        key: 3,
        name: 'منصوري وسيلة',
        adress: 'حي بلغزال',
        phone: '0553731626'
      }
    ],
    surgeons: [
      {
        key: 0,
        name: 'المصحة العلاجية المروج',
        adress: 'رؤوس العيون خلف المجلس القضائي',
        phone: '0771475486 / 0667784136'
      },
      {
        key: 1,
        name: 'حمزة الأحرش',
        adress: 'حي شعباني',
        phone: '027903110'
      },
      {
        key: 2,
        name: 'السعيد صاحب',
        adress: 'حي بن جرمة بالقرب من السوق المغطاة',
        phone: '0771599805'
      },
      {
        key: 3,
        name: 'مايدي محمد',
        adress: 'حي 5 جويلية عمارة 761/37',
        phone: '0777666660'
      },
      {
        key: 4,
        name: 'حرزلاوي رمضان',
        adress: 'حي النعاس بناية 13/471 بربيح',
        phone: 'غير متوفر'
      },
      {
        key: 5,
        name: 'سراي حميد',
        adress: 'حي المستقبل مقابل مقر الدائرة الجديدة',
        phone: '0542527959'
      },
      {
        key: 6,
        name: 'بن لمان حميدو',
        adress: 'حي المستقبل 612/156',
        phone: '0550689849 / 0669767303'
      },
      {
        key: 7,
        name: 'خريسات أماني',
        adress: 'حي بن جرمة 26 مسكن 490/10',
        phone: 'غير متوفر'
      },
      {
        key: 8,
        name: 'بشير محمد',
        adress: 'بجوار مديرية النقل',
        phone: '0550804942 / 0781336700'
      },
      {
        key: 9,
        name: 'مريان .ب',
        adress: 'حي بن تيبة طريق مقر الدائرة الجديدة',
        phone: '0771140614'
      },
      {
        key: 10,
        name: 'بن الأحرش عبد الكريم',
        adress: 'حي النعاس بناية 471 رقم 19 بربيح',
        phone: '027879749'
      }
    ],
    internals: [
      {
        key: 0,
        name: 'السعودي .ع',
        adress: 'حي باب الشارف مقابل النقل الحضري لعين الشيح',
        phone: '027871291'
      },
      {
        key: 1,
        name: 'قيت شوقي',
        adress: 'حي المسجد الجديد بناية 321',
        phone: '027900925'
      },
      {
        key: 2,
        name: 'دهينة أحمد',
        adress: 'حي الظل الجميل بالقرب من فوج الكشافة',
        phone: '027875858'
      },
      {
        key: 3,
        name: 'خطبات مصطفى',
        adress: 'حي بن جرمة 26 مسكن بالقرب من الدائرة',
        phone: '027872165'
      },
      {
        key: 4,
        name: 'ساهل رشيدة',
        adress: 'حي 5 جويلية بالقرب من المركز التجاري',
        phone: '0665125483'
      },
      {
        key: 5,
        name: 'منصوري وسيلة',
        adress: 'حي بلغزال',
        phone: '0553731626'
      },
      {
        key: 6,
        name: 'بوزيدي مصطفى',
        adress: 'حي 5 جويلية مقابل ثانوية طهيري عبد الرحمان',
        phone: '0554200649'
      }
    ],
    dentists: [
      {
        key: 0,
        name: 'محمدي عبد القادر',
        adress: 'حي بوتريفيس وراء مسجد سيدي نايل',
        phone: '0669796812'
      },
      {
        key: 1,
        name: 'بسيسة علي',
        adress: 'حي بوتريفيس بالقرب من مسجد سيدي نايل',
        phone: '0697664973'
      },
      {
        key: 2,
        name: 'عثماني أحمد',
        adress: 'حي بن جرمة بجانب الدائرة القديمة',
        phone: '0799868651'
      },
      {
        key: 3,
        name: 'عبد الحفيظي مصطفى',
        adress: 'حي المستشفى بجانب الخزينة الولائية',
        phone: '027902859'
      },
      {
        key: 4,
        name: 'عبد الوهاب أمير',
        adress: 'شارع نايل بناية 53',
        phone: '0659845584'
      },
      {
        key: 5,
        name: 'امحمد السايح العالم',
        adress: 'شارع فلسطين 32/134',
        phone: '0773866086'
      },
      {
        key: 6,
        name: 'عمر منصور',
        adress: 'حي باب الشارف',
        phone: '0540684530'
      }
    ]
  };

  componentDidMount(props) {
    const { field } = this.props.match.params;
    this.setState({
      field
    });
  }

  renderDoctors = () => {
    const {
      field,
      generals,
      genicos,
      dermatos,
      neuros,
      orls,
      pedias,
      radios,
      uros,
      cardios,
      ophtas,
      chests,
      bones,
      diabetics,
      surgeons,
      internals,
      dentists
    } = this.state;

    switch (field) {
      case 'general':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>طب عام</span>
            </h2>
            {generals.map(general => {
              return (
                <Doctor
                  name={general.name}
                  adress={general.adress}
                  phone={general.phone}
                  key={general.key}
                />
              );
            })}
          </div>
        );
      case 'genico':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>أمراض النساء و التوليد</span>
            </h2>
            {genicos.map(genico => {
              return (
                <Doctor
                  key={genico.key}
                  name={genico.name}
                  adress={genico.adress}
                  phone={genico.phone}
                />
              );
            })}
          </div>
        );
      case 'dermato':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>أمراض الجلد</span>
            </h2>
            {dermatos.map(dermato => {
              return (
                <Doctor
                  key={dermato.key}
                  name={dermato.name}
                  adress={dermato.adress}
                  phone={dermato.phone}
                />
              );
            })}
          </div>
        );
      case 'neuro':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>أمراض الأعصاب و الرأس</span>
            </h2>
            {neuros.map(neuro => {
              return (
                <Doctor
                  key={neuro.key}
                  name={neuro.name}
                  adress={neuro.adress}
                  phone={neuro.phone}
                />
              );
            })}
          </div>
        );
      case 'orl':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص :{' '}
              <span className='text-info'>أمراض الأنف و الأذن و الحنجرة</span>
            </h2>
            {orls.map(orl => {
              return (
                <Doctor
                  key={orl.key}
                  name={orl.name}
                  adress={orl.adress}
                  phone={orl.phone}
                />
              );
            })}
          </div>
        );
      case 'pedia':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>طب الأطفال</span>
            </h2>
            {pedias.map(pedia => {
              return (
                <Doctor
                  key={pedia.key}
                  name={pedia.name}
                  adress={pedia.adress}
                  phone={pedia.phone}
                />
              );
            })}
          </div>
        );
      case 'radio':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>التصوير بالأشعة</span>
            </h2>
            {radios.map(radio => {
              return (
                <Doctor
                  key={radio.key}
                  name={radio.name}
                  adress={radio.adress}
                  phone={radio.phone}
                />
              );
            })}
          </div>
        );
      case 'uro':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص :{' '}
              <span className='text-info'>أمراض الكلى و المسالك البولية</span>
            </h2>
            {uros.map(uro => {
              return (
                <Doctor
                  key={uro.key}
                  name={uro.name}
                  adress={uro.adress}
                  phone={uro.phone}
                />
              );
            })}
          </div>
        );
      case 'cardio':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>أمراض القلب و الشرايين</span>
            </h2>
            {cardios.map(cardio => {
              return (
                <Doctor
                  key={cardio.key}
                  name={cardio.name}
                  adress={cardio.adress}
                  phone={cardio.phone}
                />
              );
            })}
          </div>
        );
      case 'ophta':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>طب وجراحة العيون</span>
            </h2>
            {ophtas.map(ophta => {
              return (
                <Doctor
                  name={ophta.name}
                  adress={ophta.adress}
                  phone={ophta.phone}
                  key={ophta.key}
                />
              );
            })}
          </div>
        );
      case 'chest':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص :{' '}
              <span className='text-info'>أمراض الصدر و الجهاز التنفسي</span>
            </h2>
            {chests.map(chest => {
              return (
                <Doctor
                  name={chest.name}
                  adress={chest.adress}
                  phone={chest.phone}
                  key={chest.key}
                />
              );
            })}
          </div>
        );
      case 'bones':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>أمراض العظام و المفاصل</span>
            </h2>
            {bones.map(bone => {
              return (
                <Doctor
                  name={bone.name}
                  adress={bone.adress}
                  phone={bone.phone}
                  key={bone.key}
                />
              );
            })}
          </div>
        );
      case 'diabetics':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص :{' '}
              <span className='text-info'>أمراض السكري و الغدد الصماء</span>
            </h2>
            {diabetics.map(x => {
              return (
                <Doctor
                  name={x.name}
                  adress={x.adress}
                  phone={x.phone}
                  key={x.key}
                />
              );
            })}
          </div>
        );
      case 'surgeons':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>جراحة</span>
            </h2>
            {surgeons.map(surgeon => {
              return (
                <Doctor
                  key={surgeon.key}
                  name={surgeon.name}
                  adress={surgeon.adress}
                  phone={surgeon.phone}
                />
              );
            })}
          </div>
        );
      case 'internals':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>أمراض داخلية</span>
            </h2>
            {internals.map(internal => {
              return (
                <Doctor
                  key={internal.key}
                  name={internal.name}
                  adress={internal.adress}
                  phone={internal.phone}
                />
              );
            })}
          </div>
        );
      case 'dentists':
        return (
          <div>
            <h2 style={{ textAlign: 'right' }} className='mb-4'>
              التخصص : <span className='text-info'>طب الأسنان</span>
            </h2>
            {dentists.map(dentist => {
              return (
                <Doctor
                  key={dentist.key}
                  name={dentist.name}
                  adress={dentist.adress}
                  phone={dentist.phone}
                />
              );
            })}
          </div>
        );
      default:
        return null;
    }
    //return null;
  };
  render() {
    return <div>{this.renderDoctors()}</div>;
  }
}

export default Doctors;
