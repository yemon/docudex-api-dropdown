import React, { useState, useEffect } from 'react';

const App = () => {
  const [jsonInput, setJsonInput] = useState(`[
    {
        "id": "1390582212495151104",
        "name": "PIMS",
        "label": "Section",
        "children": [
            {
                "id": "1390582681682579456",
                "name": "প্রাথমিক তথ্য বিবরণী ফরম / Preliminary information statement form",
                "label": "Document Category",
                "children": []
            },
            {
                "id": "1390583897015717888",
                "name": "তথ্য সংশোধনী / Data correction",
                "label": "Document Category",
                "children": []
            },
            {
                "id": "1390584138678931456",
                "name": "প্রশিক্ষণ / Training",
                "label": "Document Category",
                "children": []
            },
            {
                "id": "1390584516787048448",
                "name": "বিদেশ ভ্রমণ / Travel abroad",
                "label": "Document Category",
                "children": []
            },
            {
                "id": "1390584715806773248",
                "name": "অন্যান্য / Others",
                "label": "Document Category",
                "children": []
            }
        ]
    },
    {
        "id": "1576875700621676544",
        "name": "Personnel Information",
        "label": "Section",
        "children": [
            {
                "id": "1576877389433016320",
                "name": "বদলি",
                "label": "Category",
                "children": [
                    {
                        "id": "1584073605895950336",
                        "name": "আইজিপি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584074352125546496",
                        "name": "অ্যাডিশনাল আইজি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584074447273332736",
                        "name": "ডিআইজি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584074723858321408",
                        "name": "অ্যাডিশনাল ডিআইজি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584074837846921216",
                        "name": "এসপি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584074958227640320",
                        "name": "অ্যাডিশনাল এসপি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584075114259943424",
                        "name": "এএসপি",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584075361736462336",
                        "name": "টেলিকম অফিসার (এএসপি)",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584076053528186880",
                        "name": "ইন্সপেক্টর (নিরস্ত্র/টিটি/সশস্ত্র)",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584076553958985728",
                        "name": "সহকারী টেলিকম অফিসার (পুলিশ পরিদর্শক)",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584077328424636416",
                        "name": "এসআই (নিরস্ত্র/সশস্ত্র/)/সার্জেন্ট/টিএসআই",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584077843040571392",
                        "name": "টেলিকম টেকনেশিয়ান (এসআই)",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584078177083330560",
                        "name": "এএসআই (নিরস্ত্র/সশস্ত্র/)/এটিএসআই",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584078408957038592",
                        "name": "সহকারী টেলিকম টেকনেশিয়ান (এএসআই)",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584078490423005184",
                        "name": "নায়েক",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584078633843036160",
                        "name": "কনস্টেবল",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584078956598923264",
                        "name": "ট্রেডম্যান কনস্টেবল",
                        "label": "বদলি",
                        "children": []
                    },
                    {
                        "id": "1584079058134634496",
                        "name": "নন-পুলিশ",
                        "label": "বদলি",
                        "children": []
                    }
                ]
            },
            {
                "id": "1580829717357924352",
                "name": "পদোন্নতি",
                "label": "Category",
                "children": [
                    {
                        "id": "1584079534586597376",
                        "name": "আইজিপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584079709715566592",
                        "name": "অ্যাডিশনাল আইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584079757148950528",
                        "name": "ডিআইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584079821313413120",
                        "name": "অ্যাডিশনাল ডিআইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584079869057175552",
                        "name": "এসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584079942214225920",
                        "name": "অ্যাডিশনাল এসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080009306312704",
                        "name": "এএসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080069066756096",
                        "name": "টেলিকম অফিসার (এএসপি)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080157793062912",
                        "name": "ইন্সপেক্টর (নিরস্ত্র/টিটি/সশস্ত্র)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080265750253568",
                        "name": "সহকারী টেলিকম অফিসার (পুলিশ পরিদর্শক)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080372558204928",
                        "name": "এসআই (নিরস্ত্র/সশস্ত্র/)/সার্জেন্ট/টিএসআই",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080666293702656",
                        "name": "টেলিকম টেকনেশিয়ান (এসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080744303562752",
                        "name": "এএসআই (নিরস্ত্র/সশস্ত্র/)/এটিএসআই",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080848913698816",
                        "name": "সহকারী টেলিকম টেকনেশিয়ান (এএসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584080903615811584",
                        "name": "নায়েক",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1581615198685368320",
                "name": "প্রেষণ/সংযুক্তি/লিয়েন/শিক্ষা ছুটি",
                "label": "Category",
                "children": [
                    {
                        "id": "1584081413139861504",
                        "name": "প্রেষণ",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584081541321986048",
                        "name": "সংযুক্তি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584081579389489152",
                        "name": "লিয়েন",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584082021028728832",
                        "name": "উচ্চশিক্ষা ছুটি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584082115958411264",
                        "name": "উচ্চশিক্ষা প্রেষণ",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1584072096508547072",
                "name": "পুরস্কার",
                "label": "Category",
                "children": [
                    {
                        "id": "1584082395479412736",
                        "name": "বিপিএম",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584082491927433216",
                        "name": "পিপিএম",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584082757770809344",
                        "name": "শুদ্ধাচার পুরস্কার",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584083066349948928",
                        "name": "বঙ্গবন্ধু জনপ্রশাসন পদক",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584085238957477888",
                        "name": "Bangladesh Woman Police Award",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584085792228118528",
                        "name": "Police Force Exemplary Good Service Badge",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584086021941760000",
                        "name": "জিএস মার্ক",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584086184869498880",
                        "name": "অর্থ পুরস্কার",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1584072271457161216",
                "name": "নিয়োগ",
                "label": "Category",
                "children": [
                    {
                        "id": "1584086586197282816",
                        "name": "এএসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584086775079374848",
                        "name": "এসআই (নিরস্ত্র)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584086895741112320",
                        "name": "সার্জেন্ট",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584087051051995136",
                        "name": "টেলিকম টেকনেশিয়ান (এসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584087108778201088",
                        "name": "কনস্টেবল",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584087171403354112",
                        "name": "ট্রেডম্যান কনস্টেবল",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584087385409327104",
                        "name": "নন-পুলিশ",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088005201629184",
                        "name": "চুক্তি ভিত্তিকনিয়োগ",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1584072394815836160",
                "name": "শাস্তি",
                "label": "Category",
                "children": [
                    {
                        "id": "1584088405476642816",
                        "name": "আইজিপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088461042782208",
                        "name": "অ্যাডিশনাল আইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088506026692608",
                        "name": "ডিআইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088557004263424",
                        "name": "অ্যাডিশনাল ডিআইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088631805480960",
                        "name": "এসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088681814167552",
                        "name": "অ্যাডিশনাল এসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088730828804096",
                        "name": "এএসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088797946056704",
                        "name": "টেলিকম অফিসার (এএসপি)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088869798678528",
                        "name": "ইন্সপেক্টর (নিরস্ত্র/টিটি/সশস্ত্র)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584088927667490816",
                        "name": "সহকারী টেলিকম অফিসার (পুলিশ পরিদর্শক)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089015471050752",
                        "name": "এসআই (নিরস্ত্র/সশস্ত্র/)/সার্জেন্ট/টিএসআই",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089080776364032",
                        "name": "টেলিকম টেকনেশিয়ান (এসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089280593006592",
                        "name": "এএসআই (নিরস্ত্র/সশস্ত্র/)/এটিএসআই",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089383332483072",
                        "name": "সহকারী টেলিকম টেকনেশিয়ান (এএসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089440257576960",
                        "name": "নায়েক",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089494238269440",
                        "name": "কনস্টেবল",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089547476570112",
                        "name": "ট্রেডম্যান কনস্টেবল",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584089580649320448",
                        "name": "নন-পুলিশ",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1584072595781718016",
                "name": "বৈদেশিক প্রশিক্ষণ",
                "label": "Category",
                "children": [
                    {
                        "id": "1584090176206934016",
                        "name": "Others/ বিবিধ",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090223829061632",
                        "name": "Seminar",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090391869657088",
                        "name": "Symposium",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090447540654080",
                        "name": "Training",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090504423804928",
                        "name": "Conference",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090577304031232",
                        "name": "Workshop",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090610741022720",
                        "name": "Meetings",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1584072778535931904",
                "name": "বৈদেশিক ভ্রমণ",
                "label": "Category",
                "children": [
                    {
                        "id": "1584090863464615936",
                        "name": "PSI",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090898302504960",
                        "name": "FAT",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090954283880448",
                        "name": "Sports & Culture",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584090998651228160",
                        "name": "Leave",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584091122710351872",
                        "name": "Deputation",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584091221171638272",
                        "name": "Treatment",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584091311860879360",
                        "name": "Investigation",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584091408183070720",
                        "name": "Religious Work",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1601103666855546880",
                        "name": "Others/ বিবিধ",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1584073109772701696",
                "name": "অভ্যন্তরীণ প্রশিক্ষণ",
                "label": "Category",
                "children": [
                    {
                        "id": "1584091840162828288",
                        "name": "মৌলিক প্রশিক্ষণ",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584092073898807296",
                        "name": "বুনিয়াদি প্রশিক্ষণ",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584092213388775424",
                        "name": "ইন সার্ভিস",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584092309794852864",
                        "name": "অনলাইন",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1584092637881700352",
                        "name": "পদোন্নতির জন্য বাধ্যতামূলক প্রশিক্ষণ",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1586327291468713984",
                "name": "Others/ বিবিধ",
                "label": "Category",
                "children": []
            },
            {
                "id": "1588474842565316608",
                "name": "শাস্তি বাতিল",
                "label": "Category",
                "children": [
                    {
                        "id": "1588475034207260672",
                        "name": "আইজিপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475143083003904",
                        "name": "অ্যাডিশনাল আইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475180424892416",
                        "name": "ডিআইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475221478739968",
                        "name": "অ্যাডিশনাল ডিআইজি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475258736742400",
                        "name": "এসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475297605357568",
                        "name": "অ্যাডিশনাল এসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475348595511296",
                        "name": "এএসপি",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475390437888000",
                        "name": "টেলিকম অফিসার (এএসপি)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475426383073280",
                        "name": "ইন্সপেক্টর (নিরস্ত্র/টিটি/সশস্ত্র)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475470444236800",
                        "name": "সহকারী টেলিকম অফিসার (পুলিশ পরিদর্শক)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475509719699456",
                        "name": "এসআই (নিরস্ত্র/সশস্ত্র/)/সার্জেন্ট/টিএসআই",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475547338412032",
                        "name": "টেলিকম টেকনেশিয়ান (এসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475587553398784",
                        "name": "এএসআই (নিরস্ত্র/সশস্ত্র/)/এটিএসআই",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475632818327552",
                        "name": "সহকারী টেলিকম টেকনেশিয়ান (এএসআই)",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475664749563904",
                        "name": "নায়েক",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475698308190208",
                        "name": "কনস্টেবল",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475736509911040",
                        "name": "ট্রেডম্যান কনস্টেবল",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1588475779635744768",
                        "name": "নন-পুলিশ",
                        "label": "Type",
                        "children": []
                    },
                    {
                        "id": "1598624088786472960",
                        "name": "All Ranks",
                        "label": "Type",
                        "children": []
                    }
                ]
            },
            {
                "id": "1592074297436803072",
                "name": "অবসর সংক্রান্ত / Retirement related",
                "label": "Category",
                "children": []
            }
        ]
    },
    {
        "id": "1592127087592869888",
        "name": "শাখার সংশ্লিষ্ট ডকুমেন্টস",
        "label": "Section",
        "children": []
    }
]`);
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);
  
  // For cascading dropdowns
  const [selectedLevels, setSelectedLevels] = useState([null]);
  const [dropdownOptions, setDropdownOptions] = useState([[]]);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const parseJson = () => {
    if (!jsonInput.trim()) {
      setError("Please enter some JSON data");
      return;
    }
    
    try {
      const parsed = JSON.parse(jsonInput);
      const normalizedData = Array.isArray(parsed) ? parsed : [parsed];
      setJsonData(normalizedData);
      
      // Reset dropdowns when new JSON is loaded
      setSelectedLevels([null]);
      setDropdownOptions([normalizedData]);
      
      setError(null);
    } catch (err) {
      setError("Invalid JSON format. Please check your input.");
      setJsonData(null);
    }
  };

  // Handle dropdown selection change
  const handleSelectChange = (index, value) => {
    // Update the selected value at this level
    const newSelectedLevels = [...selectedLevels.slice(0, index + 1)];
    newSelectedLevels[index] = value;
    
    // Find the selected option object
    const currentOptions = dropdownOptions[index];
    const selectedOption = currentOptions.find(option => option.id === value);
    
    // If has children, create a new level
    if (selectedOption && selectedOption.children && selectedOption.children.length > 0) {
      newSelectedLevels.push(null); // Add a new level with null selection
      
      // Update the dropdown options to include only levels that exist
      const newDropdownOptions = [...dropdownOptions.slice(0, index + 1)];
      newDropdownOptions.push(selectedOption.children);
      setDropdownOptions(newDropdownOptions);
    } else {
      // If no children, remove any additional levels
      const newDropdownOptions = [...dropdownOptions.slice(0, index + 1)];
      setDropdownOptions(newDropdownOptions);
    }
    
    setSelectedLevels(newSelectedLevels);
  };

  // TreeNode component for rendering each level of the tree
  const TreeNode = ({ node, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const hasChildren = node.children && node.children.length > 0;
    
    return (
      <div className="ml-4">
        <div 
          className="flex items-center py-2 cursor-pointer hover:bg-gray-100 rounded px-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mr-2 w-4 text-gray-500">
            {hasChildren ? (isOpen ? '▼' : '►') : '•'}
          </span>
          <span className="font-medium">{node.name}</span>
          {node.label && <span className="text-gray-500 ml-2 text-sm">({node.label})</span>}
        </div>
        
        {isOpen && hasChildren && (
          <div className="ml-2 border-l-2 border-gray-200 pl-2">
            {node.children.map((child, index) => (
              <TreeNode key={child.id || index} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render cascading dropdowns
  const renderCascadingDropdowns = () => {
    if (!jsonData) return null;
    
    return (
      <div className="mb-8 border rounded-lg p-4 bg-gray-50">
        <h3 className="text-lg font-bold mb-3">Cascading Dropdowns</h3>
        {selectedLevels[selectedLevels.length - 1] && (
          <h1 className="text-center text-2xl font-bold my-4">
            Category ID: {selectedLevels[selectedLevels.length - 1]}
          </h1>
        )}
        <div className="flex flex-col w-full">
          {selectedLevels.map((selectedValue, index) => (
            <div key={index} className="w-full mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {index === 0 ? 'Root Level' : `Level ${index}`}
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedValue || ''}
                onChange={(e) => handleSelectChange(index, e.target.value)}
              >
                <option value="">-- Select {index === 0 ? 'Root' : 'Item'} --</option>
                {dropdownOptions[index]?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name} {option.label ? `(${option.label})` : ''}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen p-4 bg-gray-50">
      <div className="w-1/2 p-4 mr-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-3">JSON Input</h2>
        <textarea
          value={jsonInput}
          onChange={handleInputChange}
          placeholder="Paste your JSON tree here..."
          rows={20}
          className="w-full p-3 border border-gray-300 rounded font-mono text-sm"
        />
        <button 
          onClick={parseJson} 
          className="mt-3 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Generate Dropdown
        </button>
        {error && <div className="mt-3 text-red-500">{error}</div>}
      </div>
      
      <div className="w-1/2 p-4 bg-white rounded-lg shadow overflow-auto">
        <h2 className="text-xl font-bold mb-3">Navigation Options</h2>
        
        {jsonData && renderCascadingDropdowns()}
        
        <h3 className="text-lg font-bold mb-3">Tree View</h3>
        <div className="overflow-auto max-h-[calc(100vh-16rem)]">
          {jsonData ? (
            jsonData.map((node, index) => (
              <TreeNode key={node.id || index} node={node} />
            ))
          ) : (
            <div className="text-gray-500 italic">
              Enter valid JSON on the left and click "Generate Dropdown" to see the result
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;