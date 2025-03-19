import React, { useState, useEffect } from 'react';

const App = () => {
  const [jsonInput, setJsonInput] = useState(`[
    {
        "id": "1210837140577980416",
        "name": "Police Headquarters",
        "label": "Department",
        "children": [
            {
                "id": "1260519484574142464",
                "name": "Legal Cell",
                "label": "Section",
                "children": [
                    {
                        "id": "1260519703600697344",
                        "name": "Administrative Tribunal Case",
                        "label": "Division",
                        "children": [
                            {
                                "id": "1337710174202236928",
                                "name": "Note / নোটাংশ",
                                "label": "Document Type",
                                "children": []
                            },
                            {
                                "id": "1337710327978004480",
                                "name": "Letters / পত্রাংশ",
                                "label": "Document Type",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "1260519826447667200",
                        "name": "High Court",
                        "label": "Division",
                        "children": [
                            {
                                "id": "1260520077875220480",
                                "name": "Writ Petition Case / রিট পিটিশন মামলা",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1260520353017368576",
                                "name": "Criminal Miscellaneous Case / ফৌজদারী বিবিধ মামলা",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1260520412740063232",
                                "name": "Suo-Moto Rule / সু-মটো রুল",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1260520463474364416",
                                "name": "Contempt Petition / কনটেম্পট পিটিশন",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1260841611252731904",
                                "name": "Civil Case / দেওয়ানী মামলা",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1260843177468760064",
                                "name": "Others / বিবিধ",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1260845913786552320",
                                "name": "Criminal Revision Case / ফৌজদারি রিভিশন মামলা",
                                "label": "Documents",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "1362659882603384832",
                        "name": "Miscellaneous",
                        "label": "Division",
                        "children": [
                            {
                                "id": "1362661384508149760",
                                "name": "Writ Petition Case / রিট পিটিশন মামলা",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1362661666931609600",
                                "name": "Criminal Miscellaneous Case / ফৌজদারী বিবিধ মামলা",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1362661790948790272",
                                "name": "Suo-Moto Rule / সু-মটো রুল",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1362661941796933632",
                                "name": "Contempt Petition / কনটেম্পট পিটিশন",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1362662028119904256",
                                "name": "Others / বিবিধ",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1370286808759275520",
                                "name": "Civil Case / দেওয়ানী মামলা",
                                "label": "Documents",
                                "children": []
                            },
                            {
                                "id": "1370286913272942592",
                                "name": "Criminal Revision Case / ফৌজদারি রিভিশন মামলা",
                                "label": "Documents",
                                "children": []
                            }
                        ]
                    }
                ]
            },
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
        ]
    },
    {
        "id": "1619616180106956800",
        "name": "আরআরএফ",
        "label": "Department",
        "children": [
            {
                "id": "1619616251787612160",
                "name": "আরআরএফ, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616306594582528",
                "name": "আরআরএফ, চট্টগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616354229293056",
                "name": "আরআরএফ, খুলনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616396134584320",
                "name": "আরআরএফ, রাজশাহী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616447196041216",
                "name": "আরআরএফ, বরিশাল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616499503206400",
                "name": "আরআরএফ, সিলেট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616543002333184",
                "name": "আরআরএফ, রংপুর",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619630046291431424",
        "name": "ইন-সার্ভিস ট্রেনিং সেন্টার",
        "label": "Department",
        "children": [
            {
                "id": "1619630182832803840",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, ৬ এপিবিএন, খাগড়াছড়ি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630222557057024",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, সিএমপি, চট্টগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630262692352000",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, গাজীপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630303272243200",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, মাদারীপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630342862278656",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, টাঙ্গাইল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630379923148800",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, ময়মনসিংহ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630416812052480",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, জামালপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630452044206080",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, নেত্রকোণা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630489188962304",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, শেরপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630523162824704",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, কুমিল্লা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630558424338432",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, নোয়াখালী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630599427854336",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, কক্সবাজার",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630631778521088",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, বান্দরবান",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630672584904704",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, বরিশাল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630703316570112",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, পিরোজপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630738833936384",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, সিলেট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630768915484672",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, হবিগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630802260201472",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, সুনামগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630835915296768",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, রাজশাহী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630888310542336",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, নওগাঁ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630931146969088",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, বগুড়া",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619630962704912384",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, সিরাজগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631001078599680",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, গাইবান্ধা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631038965747712",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, লালমনিরহাট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631074445365248",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, নীলফামারী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631113636941824",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, দিনাজপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631147971514368",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, ঠাকুরগাঁও",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631177839153152",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, সাতক্ষীরা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631209611005952",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, ঝিনাইদহ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619631251478548480",
                "name": "ইন-সার্ভিস ট্রেনিং সেন্টার, কুষ্টিয়া",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619613375556227072",
        "name": "এন্টি টেররিজম ইউনিট",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619616626993270784",
        "name": "এপিবিএন",
        "label": "Department",
        "children": [
            {
                "id": "1619616747701145600",
                "name": "এপিবিএন সদরদপ্তর, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616800322883584",
                "name": "ডিআইজি এপিবিএন (পার্বত্য জেলা সমূহ)",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616922289049600",
                "name": "১ এপিবিএন, উত্তরা, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619616959194730496",
                "name": "২ এপিবিএন, মুক্তাগাছা, ময়মনসিংহ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617005369823232",
                "name": "৩ এপিবিএন, শিরোমনি, খুলনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617059107246080",
                "name": "৪ এপিবিএন, নিশিন্দারা, বগুড়া",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617114107154432",
                "name": "৫ এপিবিএন, উত্তরা, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617156637396992",
                "name": "৬ এপিবিএন, মহালছড়ি, খাগড়াছড়ি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617196160323584",
                "name": "৭ এপিবিএন, লালাবাজার, সিলেট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617238912864256",
                "name": "৮ এপিবিএন, কক্সবাজার",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617298748805120",
                "name": "৯ এপিবিএন, ষোলশহর, চট্টগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617345435602944",
                "name": "১০ এপিবিএন, বরিশাল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617391057047552",
                "name": "১১ এপিবিএন, উত্তরা, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617430932295680",
                "name": "১২ এপিবিএন, উত্তরা, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617472720146432",
                "name": "১৩ এপিবিএন, এয়ারপোর্ট, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617519658602496",
                "name": "১৪ এপিবিএন, কক্সবাজার",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617567905681408",
                "name": "১৬ এপিবিএন, কক্সবাজার",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619617621181730816",
                "name": "১৮ এপিবিএন, রাঙ্গামাটি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618149739532288",
                "name": "সিকিউরিটি ও প্রটেকশন ব্যাটালিয়ন-১, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618213354541056",
                "name": "সিকিউরিটি ও প্রটেকশন ব্যাটালিয়ন-২, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618273328893952",
                "name": "বিশেষায়িত ট্রেনিং সেন্টার, খাগড়াছড়ি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618335983407104",
                "name": "পিএসটিএস, বেতবুনিয়া, রাঙ্গামাটি",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619606140969029632",
        "name": "এসবি",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619613426273751040",
        "name": "কেন্দ্রীয় পুলিশ হাসপাতাল",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619618501985570816",
        "name": "জেলা",
        "label": "Department",
        "children": [
            {
                "id": "1619618569245429760",
                "name": "ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618602229436416",
                "name": "নারায়নগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618649776066560",
                "name": "নরসিংদী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618683582156800",
                "name": "গাজীপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618728759005184",
                "name": "মুন্সিগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618764024713216",
                "name": "মানিকগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618803887378432",
                "name": "কিশোরগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618847306813440",
                "name": "টাঙ্গাইল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618889748975616",
                "name": "ফরিদপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618933520732160",
                "name": "মাদারীপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619618973723136000",
                "name": "গোপালগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619157601423360",
                "name": "শরীয়তপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619194108645376",
                "name": "রাজবাড়ী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619228174782464",
                "name": "ময়মনসিংহ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619266540081152",
                "name": "নেত্রকোণা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619301466050560",
                "name": "জামালপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619337226686464",
                "name": "শেরপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619375654899712",
                "name": "চট্টগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619409205137408",
                "name": "কক্সবাজার",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619445867548672",
                "name": "রাঙ্গামাটি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619498711584768",
                "name": "খাগড়াছড়ি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619532911939584",
                "name": "বান্দরবান",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619613404827648",
                "name": "নোয়াখালী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619652336357376",
                "name": "লক্ষীপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619686628986880",
                "name": "ফেনী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619728723021824",
                "name": "কুমিল্লা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619770619924480",
                "name": "ব্রাহ্মণবাড়িয়া",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619807013900288",
                "name": "চাঁদপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619851293167616",
                "name": "সিলেট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619885996838912",
                "name": "হবিগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619925133889536",
                "name": "মৌলভীবাজার",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619619959804006400",
                "name": "সুনামগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620077374541824",
                "name": "রাজশাহী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620159666786304",
                "name": "নওগাঁ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620199198101504",
                "name": "নাটোর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620266822864896",
                "name": "চাঁপাইনবাবগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620296652754944",
                "name": "বগুড়া",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620332887347200",
                "name": "জয়পুরহাট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620369033859072",
                "name": "পাবনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620405322977280",
                "name": "সিরাজগঞ্জ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620491713056768",
                "name": "রংপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620918814838784",
                "name": "গাইবান্ধা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620946123952128",
                "name": "কুড়িগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619620980693405696",
                "name": "লালমনিরহাট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621023022321664",
                "name": "নীলফামারী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621066836021248",
                "name": "দিনাজপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621108875530240",
                "name": "ঠাকুরগাঁও",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621136524382208",
                "name": "পঞ্চগড়",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621167188938752",
                "name": "খুলনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621204551798784",
                "name": "বাগেরহাট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621243089063936",
                "name": "সাতক্ষীরা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621278233137152",
                "name": "যশোর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621310575415296",
                "name": "ঝিনাইদহ",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621346830979072",
                "name": "মাগুরা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621416322207744",
                "name": "নড়াইল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621454578454528",
                "name": "কুষ্টিয়া",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621494948630528",
                "name": "চুয়াডাঙ্গা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621533657862144",
                "name": "মেহেরপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621581623922688",
                "name": "বরিশাল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621620098273280",
                "name": "ভোলা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621669767221248",
                "name": "পিরোজপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621703392956416",
                "name": "ঝালকাঠি",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621737861746688",
                "name": "পটুয়াখালী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619621768710852608",
                "name": "বরগুনা",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619613244391952384",
        "name": "ট্যুারিস্ট পুলিশ",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619613307574947840",
        "name": "নৌ পুলিশ",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619613042331357184",
        "name": "পুলিশ টেলিকম",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619612961972686848",
        "name": "পুলিশ ব্যুরো অব ইনভেস্টিগেশন",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619613174011531264",
        "name": "পুলিশ স্টাফ কলেজ",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619606018554073088",
        "name": "পুলিশ হেডকোয়ার্টার্স, ঢাকা",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619629656837722112",
        "name": "প্রশিক্ষণ কেন্দ্র",
        "label": "Department",
        "children": [
            {
                "id": "1619629741554274304",
                "name": "বাংলাদেশ পুলিশ একাডেমী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619629776819982336",
                "name": "পিটিসি, টাঙ্গাইল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619629811443961856",
                "name": "পিটিসি, রংপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619629852174848000",
                "name": "পিটিসি, নোয়াখালী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619629888447188992",
                "name": "পিটিসি, খুলনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619629943539372032",
                "name": "টিডিএস, ঢাকা",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619613507399979008",
        "name": "বাংলাদেশ পুলিশ মুক্তিযোদ্ধ জাদুঘর",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619614257840656384",
        "name": "মেট্রোপলিটন",
        "label": "Department",
        "children": [
            {
                "id": "1619614330989318144",
                "name": "ডিএমপি, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614377822916608",
                "name": "সিএমপি, চট্টগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614447502888960",
                "name": "কেএমপি, খুলনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614507825369088",
                "name": "আরএমপি, রাজশাহী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614582353956864",
                "name": "বিএমপি, বরিশাল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614632542998528",
                "name": "এসএমপি, সিলেট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614702835339264",
                "name": "জিএমপি, গাজীপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614847735959552",
                "name": "আরপিএমপি, রংপুর",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619613570297761792",
        "name": "ম্যাস র‍‍্যাপিড ট্রানজিট (এমআরটি)",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619613674224226304",
        "name": "রেঞ্জ অফিস",
        "label": "Department",
        "children": [
            {
                "id": "1619613783607480320",
                "name": "ঢাকা রেঞ্জ অফিস, ঢাকা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619613834488582144",
                "name": "চট্টগ্রাম রেঞ্জ অফিস চট্টগ্রাম",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619613883775848448",
                "name": "খুলনা রেঞ্জ অফিস খুলনা",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619613934413680640",
                "name": "রাজশাহী রেঞ্জ অফিস রাজশাহী",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619613986775371776",
                "name": "বরিশাল রেঞ্জ অফিস বরিশাল",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614042479923200",
                "name": "সিলেট রেঞ্জ অফিস সিলেট",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614089435156480",
                "name": "রংপুর রেঞ্জ অফিস, রংপুর",
                "label": "Unit",
                "children": []
            },
            {
                "id": "1619614138940526592",
                "name": "ময়মনসিংহ রেঞ্জ অফিস ময়মনসিংহ",
                "label": "Unit",
                "children": []
            }
        ]
    },
    {
        "id": "1619615870235971584",
        "name": "রেলওয়ে",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619613120941002752",
        "name": "র‍‍্যাপিড এ্যাকশন ব্যাটালিয়ন",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619615934467543040",
        "name": "শিল্পাঞ্চল",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619606442854060032",
        "name": "সিআইডি",
        "label": "Department",
        "children": []
    },
    {
        "id": "1619615809879937024",
        "name": "হাইওয়ে",
        "label": "Department",
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