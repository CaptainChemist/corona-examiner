import { filter } from "lodash"

export const rawCollection = [
  {
    Province_State: "",
    Country_Region: "Afghanistan",
    iso3: "AFG",
    Population: "38928341",
  },
  {
    Province_State: "",
    Country_Region: "Albania",
    iso3: "ALB",
    Population: "2877800",
  },
  {
    Province_State: "",
    Country_Region: "Algeria",
    iso3: "DZA",
    Population: "43851043",
  },
  {
    Province_State: "",
    Country_Region: "Andorra",
    iso3: "AND",
    Population: "77265",
  },
  {
    Province_State: "",
    Country_Region: "Angola",
    iso3: "AGO",
    Population: "32866268",
  },
  {
    Province_State: "",
    Country_Region: "Antigua and Barbuda",
    iso3: "ATG",
    Population: "97928",
  },
  {
    Province_State: "",
    Country_Region: "Argentina",
    iso3: "ARG",
    Population: "45195777",
  },
  {
    Province_State: "",
    Country_Region: "Armenia",
    iso3: "ARM",
    Population: "2963234",
  },
  {
    Province_State: "Australian Capital Territory",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "428100",
  },
  {
    Province_State: "New South Wales",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "8118000",
  },
  {
    Province_State: "Northern Territory",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "245600",
  },
  {
    Province_State: "Queensland",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "5115500",
  },
  {
    Province_State: "South Australia",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "1756500",
  },
  {
    Province_State: "Tasmania",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "535500",
  },
  {
    Province_State: "Victoria",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "6629900",
  },
  {
    Province_State: "Western Australia",
    Country_Region: "Australia",
    iso3: "AUS",
    Population: "2630600",
  },
  {
    Province_State: "",
    Country_Region: "Austria",
    iso3: "AUT",
    Population: "9006400",
  },
  {
    Province_State: "",
    Country_Region: "Azerbaijan",
    iso3: "AZE",
    Population: "10139175",
  },
  {
    Province_State: "",
    Country_Region: "Bahamas",
    iso3: "BHS",
    Population: "393248",
  },
  {
    Province_State: "",
    Country_Region: "Bahrain",
    iso3: "BHR",
    Population: "1701583",
  },
  {
    Province_State: "",
    Country_Region: "Bangladesh",
    iso3: "BGD",
    Population: "164689383",
  },
  {
    Province_State: "",
    Country_Region: "Barbados",
    iso3: "BRB",
    Population: "287371",
  },
  {
    Province_State: "",
    Country_Region: "Belarus",
    iso3: "BLR",
    Population: "9449321",
  },
  {
    Province_State: "",
    Country_Region: "Belgium",
    iso3: "BEL",
    Population: "11589616",
  },
  {
    Province_State: "",
    Country_Region: "Benin",
    iso3: "BEN",
    Population: "12123198",
  },
  {
    Province_State: "",
    Country_Region: "Bhutan",
    iso3: "BTN",
    Population: "771612",
  },
  {
    Province_State: "",
    Country_Region: "Bolivia",
    iso3: "BOL",
    Population: "11673029",
  },
  {
    Province_State: "",
    Country_Region: "Bosnia and Herzegovina",
    iso3: "BIH",
    Population: "3280815",
  },
  {
    Province_State: "",
    Country_Region: "Brazil",
    iso3: "BRA",
    Population: "212559409",
  },
  {
    Province_State: "",
    Country_Region: "Brunei",
    iso3: "BRN",
    Population: "437483",
  },
  {
    Province_State: "",
    Country_Region: "Bulgaria",
    iso3: "BGR",
    Population: "6948445",
  },
  {
    Province_State: "",
    Country_Region: "Burkina Faso",
    iso3: "BFA",
    Population: "20903278",
  },
  {
    Province_State: "",
    Country_Region: "Cabo Verde",
    iso3: "CPV",
    Population: "555988",
  },
  {
    Province_State: "",
    Country_Region: "Cambodia",
    iso3: "KHM",
    Population: "16718971",
  },
  {
    Province_State: "",
    Country_Region: "Cameroon",
    iso3: "CMR",
    Population: "26545864",
  },
  {
    Province_State: "Alberta",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "4413146",
  },
  {
    Province_State: "British Columbia",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "5110917",
  },
  {
    Province_State: "Grand Princess",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "",
  },
  {
    Province_State: "Manitoba",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "1377517",
  },
  {
    Province_State: "New Brunswick",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "779993",
  },
  {
    Province_State: "Newfoundland and Labrador",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "521365",
  },
  {
    Province_State: "Nova Scotia",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "977457",
  },
  {
    Province_State: "Ontario",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "14711827",
  },
  {
    Province_State: "Prince Edward Island",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "158158",
  },
  {
    Province_State: "Quebec",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "8537674",
  },
  {
    Province_State: "Saskatchewan",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "1181666",
  },
  {
    Province_State: "",
    Country_Region: "Central African Republic",
    iso3: "CAF",
    Population: "4829764",
  },
  {
    Province_State: "",
    Country_Region: "Chad",
    iso3: "TCD",
    Population: "16425859",
  },
  {
    Province_State: "",
    Country_Region: "Chile",
    iso3: "CHL",
    Population: "19116209",
  },
  {
    Province_State: "Anhui",
    Country_Region: "China",
    iso3: "CHN",
    Population: "63240000",
  },
  {
    Province_State: "Beijing",
    Country_Region: "China",
    iso3: "CHN",
    Population: "21540000",
  },
  {
    Province_State: "Chongqing",
    Country_Region: "China",
    iso3: "CHN",
    Population: "31020000",
  },
  {
    Province_State: "Fujian",
    Country_Region: "China",
    iso3: "CHN",
    Population: "39410000",
  },
  {
    Province_State: "Gansu",
    Country_Region: "China",
    iso3: "CHN",
    Population: "26370000",
  },
  {
    Province_State: "Guangdong",
    Country_Region: "China",
    iso3: "CHN",
    Population: "113460000",
  },
  {
    Province_State: "Guangxi",
    Country_Region: "China",
    iso3: "CHN",
    Population: "49260000",
  },
  {
    Province_State: "Guizhou",
    Country_Region: "China",
    iso3: "CHN",
    Population: "36000000",
  },
  {
    Province_State: "Hainan",
    Country_Region: "China",
    iso3: "CHN",
    Population: "9340000",
  },
  {
    Province_State: "Hebei",
    Country_Region: "China",
    iso3: "CHN",
    Population: "75560000",
  },
  {
    Province_State: "Heilongjiang",
    Country_Region: "China",
    iso3: "CHN",
    Population: "37730000",
  },
  {
    Province_State: "Henan",
    Country_Region: "China",
    iso3: "CHN",
    Population: "96050000",
  },
  {
    Province_State: "Hong Kong",
    Country_Region: "China",
    iso3: "HKG",
    Population: "7496988",
  },
  {
    Province_State: "Hubei",
    Country_Region: "China",
    iso3: "CHN",
    Population: "59170000",
  },
  {
    Province_State: "Hunan",
    Country_Region: "China",
    iso3: "CHN",
    Population: "68990000",
  },
  {
    Province_State: "Inner Mongolia",
    Country_Region: "China",
    iso3: "CHN",
    Population: "25340000",
  },
  {
    Province_State: "Jiangsu",
    Country_Region: "China",
    iso3: "CHN",
    Population: "80510000",
  },
  {
    Province_State: "Jiangxi",
    Country_Region: "China",
    iso3: "CHN",
    Population: "46480000",
  },
  {
    Province_State: "Jilin",
    Country_Region: "China",
    iso3: "CHN",
    Population: "27040000",
  },
  {
    Province_State: "Liaoning",
    Country_Region: "China",
    iso3: "CHN",
    Population: "43590000",
  },
  {
    Province_State: "Macau",
    Country_Region: "China",
    iso3: "MAC",
    Population: "649342",
  },
  {
    Province_State: "Ningxia",
    Country_Region: "China",
    iso3: "CHN",
    Population: "6880000",
  },
  {
    Province_State: "Qinghai",
    Country_Region: "China",
    iso3: "CHN",
    Population: "6030000",
  },
  {
    Province_State: "Shaanxi",
    Country_Region: "China",
    iso3: "CHN",
    Population: "38640000",
  },
  {
    Province_State: "Shandong",
    Country_Region: "China",
    iso3: "CHN",
    Population: "100470000",
  },
  {
    Province_State: "Shanghai",
    Country_Region: "China",
    iso3: "CHN",
    Population: "24240000",
  },
  {
    Province_State: "Shanxi",
    Country_Region: "China",
    iso3: "CHN",
    Population: "37180000",
  },
  {
    Province_State: "Sichuan",
    Country_Region: "China",
    iso3: "CHN",
    Population: "83410000",
  },
  {
    Province_State: "Tianjin",
    Country_Region: "China",
    iso3: "CHN",
    Population: "15600000",
  },
  {
    Province_State: "Tibet",
    Country_Region: "China",
    iso3: "CHN",
    Population: "3440000",
  },
  {
    Province_State: "Xinjiang",
    Country_Region: "China",
    iso3: "CHN",
    Population: "24870000",
  },
  {
    Province_State: "Yunnan",
    Country_Region: "China",
    iso3: "CHN",
    Population: "48300000",
  },
  {
    Province_State: "Zhejiang",
    Country_Region: "China",
    iso3: "CHN",
    Population: "57370000",
  },
  {
    Province_State: "",
    Country_Region: "Colombia",
    iso3: "COL",
    Population: "50882884",
  },
  {
    Province_State: "",
    Country_Region: "Congo (Brazzaville)",
    iso3: "COG",
    Population: "5518092",
  },
  {
    Province_State: "",
    Country_Region: "Congo (Kinshasa)",
    iso3: "COD",
    Population: "89561404",
  },
  {
    Province_State: "",
    Country_Region: "Costa Rica",
    iso3: "CRI",
    Population: "5094114",
  },
  {
    Province_State: "",
    Country_Region: "Cote d'Ivoire",
    iso3: "CIV",
    Population: "26378275",
  },
  {
    Province_State: "",
    Country_Region: "Croatia",
    iso3: "HRV",
    Population: "4105268",
  },
  {
    Province_State: "",
    Country_Region: "Diamond Princess",
    iso3: "",
    Population: "",
  },
  {
    Province_State: "",
    Country_Region: "Cuba",
    iso3: "CUB",
    Population: "11326616",
  },
  {
    Province_State: "",
    Country_Region: "Cyprus",
    iso3: "CYP",
    Population: "1207361",
  },
  {
    Province_State: "",
    Country_Region: "Czechia",
    iso3: "CZE",
    Population: "10708982",
  },
  {
    Province_State: "Faroe Islands",
    Country_Region: "Denmark",
    iso3: "FRO",
    Population: "48865",
  },
  {
    Province_State: "Greenland",
    Country_Region: "Denmark",
    iso3: "GRL",
    Population: "56772",
  },
  {
    Province_State: "",
    Country_Region: "Denmark",
    iso3: "DNK",
    Population: "5792203",
  },
  {
    Province_State: "",
    Country_Region: "Djibouti",
    iso3: "DJI",
    Population: "988002",
  },
  {
    Province_State: "",
    Country_Region: "Dominican Republic",
    iso3: "DOM",
    Population: "10847904",
  },
  {
    Province_State: "",
    Country_Region: "Ecuador",
    iso3: "ECU",
    Population: "17643060",
  },
  {
    Province_State: "",
    Country_Region: "Egypt",
    iso3: "EGY",
    Population: "102334403",
  },
  {
    Province_State: "",
    Country_Region: "El Salvador",
    iso3: "SLV",
    Population: "6486201",
  },
  {
    Province_State: "",
    Country_Region: "Equatorial Guinea",
    iso3: "GNQ",
    Population: "1402985",
  },
  {
    Province_State: "",
    Country_Region: "Eritrea",
    iso3: "ERI",
    Population: "3546427",
  },
  {
    Province_State: "",
    Country_Region: "Estonia",
    iso3: "EST",
    Population: "1326539",
  },
  {
    Province_State: "",
    Country_Region: "Eswatini",
    iso3: "SWZ",
    Population: "1160164",
  },
  {
    Province_State: "",
    Country_Region: "Ethiopia",
    iso3: "ETH",
    Population: "114963583",
  },
  {
    Province_State: "",
    Country_Region: "Fiji",
    iso3: "FJI",
    Population: "896444",
  },
  {
    Province_State: "",
    Country_Region: "Finland",
    iso3: "FIN",
    Population: "5540718",
  },
  {
    Province_State: "French Guiana",
    Country_Region: "France",
    iso3: "GUF",
    Population: "298682",
  },
  {
    Province_State: "French Polynesia",
    Country_Region: "France",
    iso3: "PYF",
    Population: "280904",
  },
  {
    Province_State: "Guadeloupe",
    Country_Region: "France",
    iso3: "GLP",
    Population: "400127",
  },
  {
    Province_State: "Mayotte",
    Country_Region: "France",
    iso3: "MYT",
    Population: "272813",
  },
  {
    Province_State: "New Caledonia",
    Country_Region: "France",
    iso3: "NCL",
    Population: "285491",
  },
  {
    Province_State: "Reunion",
    Country_Region: "France",
    iso3: "REU",
    Population: "895308",
  },
  {
    Province_State: "Saint Barthelemy",
    Country_Region: "France",
    iso3: "BLM",
    Population: "9885",
  },
  {
    Province_State: "St Martin",
    Country_Region: "France",
    iso3: "MAF",
    Population: "38659",
  },
  {
    Province_State: "Martinique",
    Country_Region: "France",
    iso3: "MTQ",
    Population: "375265",
  },
  {
    Province_State: "",
    Country_Region: "France",
    iso3: "FRA",
    Population: "65273512",
  },
  {
    Province_State: "",
    Country_Region: "Gabon",
    iso3: "GAB",
    Population: "2225728",
  },
  {
    Province_State: "",
    Country_Region: "Gambia",
    iso3: "GMB",
    Population: "2416664",
  },
  {
    Province_State: "",
    Country_Region: "Georgia",
    iso3: "GEO",
    Population: "3989175",
  },
  {
    Province_State: "",
    Country_Region: "Germany",
    iso3: "DEU",
    Population: "83783945",
  },
  {
    Province_State: "",
    Country_Region: "Ghana",
    iso3: "GHA",
    Population: "31072945",
  },
  {
    Province_State: "",
    Country_Region: "Greece",
    iso3: "GRC",
    Population: "10423056",
  },
  {
    Province_State: "",
    Country_Region: "Guatemala",
    iso3: "GTM",
    Population: "17915567",
  },
  {
    Province_State: "",
    Country_Region: "Guinea",
    iso3: "GIN",
    Population: "13132792",
  },
  {
    Province_State: "",
    Country_Region: "Guyana",
    iso3: "GUY",
    Population: "786559",
  },
  {
    Province_State: "",
    Country_Region: "Haiti",
    iso3: "HTI",
    Population: "11402533",
  },
  {
    Province_State: "",
    Country_Region: "Holy See",
    iso3: "VAT",
    Population: "809",
  },
  {
    Province_State: "",
    Country_Region: "Honduras",
    iso3: "HND",
    Population: "9904608",
  },
  {
    Province_State: "",
    Country_Region: "Hungary",
    iso3: "HUN",
    Population: "9660350",
  },
  {
    Province_State: "",
    Country_Region: "Iceland",
    iso3: "ISL",
    Population: "341250",
  },
  {
    Province_State: "",
    Country_Region: "India",
    iso3: "IND",
    Population: "1380004385",
  },
  {
    Province_State: "",
    Country_Region: "Indonesia",
    iso3: "IDN",
    Population: "273523621",
  },
  {
    Province_State: "",
    Country_Region: "Iran",
    iso3: "IRN",
    Population: "83992953",
  },
  {
    Province_State: "",
    Country_Region: "Iraq",
    iso3: "IRQ",
    Population: "40222503",
  },
  {
    Province_State: "",
    Country_Region: "Ireland",
    iso3: "IRL",
    Population: "4937796",
  },
  {
    Province_State: "",
    Country_Region: "Israel",
    iso3: "ISR",
    Population: "8655541",
  },
  {
    Province_State: "",
    Country_Region: "Italy",
    iso3: "ITA",
    Population: "60461828",
  },
  {
    Province_State: "",
    Country_Region: "Jamaica",
    iso3: "JAM",
    Population: "2961161",
  },
  {
    Province_State: "",
    Country_Region: "Japan",
    iso3: "JPN",
    Population: "126476458",
  },
  {
    Province_State: "",
    Country_Region: "Jordan",
    iso3: "JOR",
    Population: "10203140",
  },
  {
    Province_State: "",
    Country_Region: "Kazakhstan",
    iso3: "KAZ",
    Population: "18776707",
  },
  {
    Province_State: "",
    Country_Region: "Kenya",
    iso3: "KEN",
    Population: "53771300",
  },
  {
    Province_State: "",
    Country_Region: '"Korea, South"',
    iso3: "KOR",
    Population: "51269183",
  },
  {
    Province_State: "",
    Country_Region: "Kuwait",
    iso3: "KWT",
    Population: "4270563",
  },
  {
    Province_State: "",
    Country_Region: "Kyrgyzstan",
    iso3: "KGZ",
    Population: "6524191",
  },
  {
    Province_State: "",
    Country_Region: "Latvia",
    iso3: "LVA",
    Population: "1886202",
  },
  {
    Province_State: "",
    Country_Region: "Lebanon",
    iso3: "LBN",
    Population: "6825442",
  },
  {
    Province_State: "",
    Country_Region: "Liberia",
    iso3: "LBR",
    Population: "5057677",
  },
  {
    Province_State: "",
    Country_Region: "Liechtenstein",
    iso3: "LIE",
    Population: "38137",
  },
  {
    Province_State: "",
    Country_Region: "Lithuania",
    iso3: "LTU",
    Population: "2722291",
  },
  {
    Province_State: "",
    Country_Region: "Luxembourg",
    iso3: "LUX",
    Population: "625976",
  },
  {
    Province_State: "",
    Country_Region: "Madagascar",
    iso3: "MDG",
    Population: "27691019",
  },
  {
    Province_State: "",
    Country_Region: "Malaysia",
    iso3: "MYS",
    Population: "32365998",
  },
  {
    Province_State: "",
    Country_Region: "Maldives",
    iso3: "MDV",
    Population: "540542",
  },
  {
    Province_State: "",
    Country_Region: "Malta",
    iso3: "MLT",
    Population: "441539",
  },
  {
    Province_State: "",
    Country_Region: "Mauritania",
    iso3: "MRT",
    Population: "4649660",
  },
  {
    Province_State: "",
    Country_Region: "Mauritius",
    iso3: "MUS",
    Population: "1271767",
  },
  {
    Province_State: "",
    Country_Region: "Mexico",
    iso3: "MEX",
    Population: "128932753",
  },
  {
    Province_State: "",
    Country_Region: "Moldova",
    iso3: "MDA",
    Population: "4033963",
  },
  {
    Province_State: "",
    Country_Region: "Monaco",
    iso3: "MCO",
    Population: "39244",
  },
  {
    Province_State: "",
    Country_Region: "Mongolia",
    iso3: "MNG",
    Population: "3278292",
  },
  {
    Province_State: "",
    Country_Region: "Montenegro",
    iso3: "MNE",
    Population: "628062",
  },
  {
    Province_State: "",
    Country_Region: "Morocco",
    iso3: "MAR",
    Population: "36910558",
  },
  {
    Province_State: "",
    Country_Region: "Namibia",
    iso3: "NAM",
    Population: "2540916",
  },
  {
    Province_State: "",
    Country_Region: "Nepal",
    iso3: "NPL",
    Population: "29136808",
  },
  {
    Province_State: "Aruba",
    Country_Region: "Netherlands",
    iso3: "ABW",
    Population: "106766",
  },
  {
    Province_State: "Curacao",
    Country_Region: "Netherlands",
    iso3: "CUW",
    Population: "164100",
  },
  {
    Province_State: "Sint Maarten",
    Country_Region: "Netherlands",
    iso3: "SXM",
    Population: "42882",
  },
  {
    Province_State: "",
    Country_Region: "Netherlands",
    iso3: "NLD",
    Population: "17134873",
  },
  {
    Province_State: "",
    Country_Region: "New Zealand",
    iso3: "NZL",
    Population: "4822233",
  },
  {
    Province_State: "",
    Country_Region: "Nicaragua",
    iso3: "NIC",
    Population: "6624554",
  },
  {
    Province_State: "",
    Country_Region: "Niger",
    iso3: "NER",
    Population: "24206636",
  },
  {
    Province_State: "",
    Country_Region: "Nigeria",
    iso3: "NGA",
    Population: "206139587",
  },
  {
    Province_State: "",
    Country_Region: "North Macedonia",
    iso3: "MKD",
    Population: "2083380",
  },
  {
    Province_State: "",
    Country_Region: "Norway",
    iso3: "NOR",
    Population: "5421242",
  },
  {
    Province_State: "",
    Country_Region: "Oman",
    iso3: "OMN",
    Population: "5106622",
  },
  {
    Province_State: "",
    Country_Region: "Pakistan",
    iso3: "PAK",
    Population: "220892331",
  },
  {
    Province_State: "",
    Country_Region: "Panama",
    iso3: "PAN",
    Population: "4314768",
  },
  {
    Province_State: "",
    Country_Region: "Papua New Guinea",
    iso3: "PNG",
    Population: "8947027",
  },
  {
    Province_State: "",
    Country_Region: "Paraguay",
    iso3: "PRY",
    Population: "7132530",
  },
  {
    Province_State: "",
    Country_Region: "Peru",
    iso3: "PER",
    Population: "32971846",
  },
  {
    Province_State: "",
    Country_Region: "Philippines",
    iso3: "PHL",
    Population: "109581085",
  },
  {
    Province_State: "",
    Country_Region: "Poland",
    iso3: "POL",
    Population: "37846605",
  },
  {
    Province_State: "",
    Country_Region: "Portugal",
    iso3: "PRT",
    Population: "10196707",
  },
  {
    Province_State: "",
    Country_Region: "Qatar",
    iso3: "QAT",
    Population: "2881060",
  },
  {
    Province_State: "",
    Country_Region: "Romania",
    iso3: "ROU",
    Population: "19237682",
  },
  {
    Province_State: "",
    Country_Region: "Russia",
    iso3: "RUS",
    Population: "145934460",
  },
  {
    Province_State: "",
    Country_Region: "Rwanda",
    iso3: "RWA",
    Population: "12952209",
  },
  {
    Province_State: "",
    Country_Region: "Saint Lucia",
    iso3: "LCA",
    Population: "183629",
  },
  {
    Province_State: "",
    Country_Region: "Saint Vincent and the Grenadines",
    iso3: "VCT",
    Population: "110947",
  },
  {
    Province_State: "",
    Country_Region: "San Marino",
    iso3: "SMR",
    Population: "33938",
  },
  {
    Province_State: "",
    Country_Region: "Saudi Arabia",
    iso3: "SAU",
    Population: "34813867",
  },
  {
    Province_State: "",
    Country_Region: "Senegal",
    iso3: "SEN",
    Population: "16743930",
  },
  {
    Province_State: "",
    Country_Region: "Serbia",
    iso3: "SRB",
    Population: "8737370",
  },
  {
    Province_State: "",
    Country_Region: "Seychelles",
    iso3: "SYC",
    Population: "98340",
  },
  {
    Province_State: "",
    Country_Region: "Singapore",
    iso3: "SGP",
    Population: "5850343",
  },
  {
    Province_State: "",
    Country_Region: "Slovakia",
    iso3: "SVK",
    Population: "5459643",
  },
  {
    Province_State: "",
    Country_Region: "Slovenia",
    iso3: "SVN",
    Population: "2078932",
  },
  {
    Province_State: "",
    Country_Region: "Somalia",
    iso3: "SOM",
    Population: "15893219",
  },
  {
    Province_State: "",
    Country_Region: "South Africa",
    iso3: "ZAF",
    Population: "59308690",
  },
  {
    Province_State: "",
    Country_Region: "Spain",
    iso3: "ESP",
    Population: "46754783",
  },
  {
    Province_State: "",
    Country_Region: "Sri Lanka",
    iso3: "LKA",
    Population: "21413250",
  },
  {
    Province_State: "",
    Country_Region: "Sudan",
    iso3: "SDN",
    Population: "43849269",
  },
  {
    Province_State: "",
    Country_Region: "Suriname",
    iso3: "SUR",
    Population: "586634",
  },
  {
    Province_State: "",
    Country_Region: "Sweden",
    iso3: "SWE",
    Population: "10099270",
  },
  {
    Province_State: "",
    Country_Region: "Switzerland",
    iso3: "CHE",
    Population: "8654618",
  },
  {
    Province_State: "",
    Country_Region: "Taiwan*",
    iso3: "TWN",
    Population: "23816775",
  },
  {
    Province_State: "",
    Country_Region: "Tanzania",
    iso3: "TZA",
    Population: "59734213",
  },
  {
    Province_State: "",
    Country_Region: "Thailand",
    iso3: "THA",
    Population: "69799978",
  },
  {
    Province_State: "",
    Country_Region: "Togo",
    iso3: "TGO",
    Population: "8278737",
  },
  {
    Province_State: "",
    Country_Region: "Trinidad and Tobago",
    iso3: "TTO",
    Population: "1399491",
  },
  {
    Province_State: "",
    Country_Region: "Tunisia",
    iso3: "TUN",
    Population: "11818618",
  },
  {
    Province_State: "",
    Country_Region: "Turkey",
    iso3: "TUR",
    Population: "84339067",
  },
  {
    Province_State: "",
    Country_Region: "Uganda",
    iso3: "UGA",
    Population: "45741000",
  },
  {
    Province_State: "",
    Country_Region: "Ukraine",
    iso3: "UKR",
    Population: "43733759",
  },
  {
    Province_State: "",
    Country_Region: "United Arab Emirates",
    iso3: "ARE",
    Population: "9890400",
  },
  {
    Province_State: "Bermuda",
    Country_Region: "United Kingdom",
    iso3: "BMU",
    Population: "62273",
  },
  {
    Province_State: "Cayman Islands",
    Country_Region: "United Kingdom",
    iso3: "CYM",
    Population: "65720",
  },
  {
    Province_State: "Channel Islands",
    Country_Region: "United Kingdom",
    iso3: "GBR",
    Population: "170499",
  },
  {
    Province_State: "Gibraltar",
    Country_Region: "United Kingdom",
    iso3: "GIB",
    Population: "33691",
  },
  {
    Province_State: "Isle of Man",
    Country_Region: "United Kingdom",
    iso3: "IMN",
    Population: "85032",
  },
  {
    Province_State: "Montserrat",
    Country_Region: "United Kingdom",
    iso3: "MSR",
    Population: "4999",
  },
  {
    Province_State: "",
    Country_Region: "United Kingdom",
    iso3: "GBR",
    Population: "67886004",
  },
  {
    Province_State: "",
    Country_Region: "Uruguay",
    iso3: "URY",
    Population: "3473727",
  },
  {
    Province_State: "",
    Country_Region: "US",
    iso3: "USA",
    Population: "329466283",
  },
  {
    Province_State: "",
    Country_Region: "Uzbekistan",
    iso3: "UZB",
    Population: "33469199",
  },
  {
    Province_State: "",
    Country_Region: "Venezuela",
    iso3: "VEN",
    Population: "28435943",
  },
  {
    Province_State: "",
    Country_Region: "Vietnam",
    iso3: "VNM",
    Population: "97338583",
  },
  {
    Province_State: "",
    Country_Region: "Zambia",
    iso3: "ZMB",
    Population: "18383956",
  },
  {
    Province_State: "",
    Country_Region: "Zimbabwe",
    iso3: "ZWE",
    Population: "14862927",
  },
  {
    Province_State: "Diamond Princess",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "",
  },
  {
    Province_State: "",
    Country_Region: "Dominica",
    iso3: "DMA",
    Population: "71991",
  },
  {
    Province_State: "",
    Country_Region: "Grenada",
    iso3: "GRD",
    Population: "112519",
  },
  {
    Province_State: "",
    Country_Region: "Mozambique",
    iso3: "MOZ",
    Population: "31255435",
  },
  {
    Province_State: "",
    Country_Region: "Syria",
    iso3: "SYR",
    Population: "17500657",
  },
  {
    Province_State: "",
    Country_Region: "Timor-Leste",
    iso3: "TLS",
    Population: "1318442",
  },
  {
    Province_State: "",
    Country_Region: "Belize",
    iso3: "BLZ",
    Population: "397621",
  },
  {
    Province_State: "Recovered",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "",
  },
  {
    Province_State: "",
    Country_Region: "Laos",
    iso3: "LAO",
    Population: "7275556",
  },
  {
    Province_State: "",
    Country_Region: "Libya",
    iso3: "LBY",
    Population: "6871287",
  },
  {
    Province_State: "",
    Country_Region: "West Bank and Gaza",
    iso3: "PSE",
    Population: "5101416",
  },
  {
    Province_State: "",
    Country_Region: "Guinea-Bissau",
    iso3: "GNB",
    Population: "1967998",
  },
  {
    Province_State: "",
    Country_Region: "Mali",
    iso3: "MLI",
    Population: "20250834",
  },
  {
    Province_State: "",
    Country_Region: "Saint Kitts and Nevis",
    iso3: "KNA",
    Population: "53192",
  },
  {
    Province_State: "Northwest Territories",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "44904",
  },
  {
    Province_State: "Yukon",
    Country_Region: "Canada",
    iso3: "CAN",
    Population: "41078",
  },
  {
    Province_State: "",
    Country_Region: "Kosovo",
    iso3: "XKS",
    Population: "1810366",
  },
  {
    Province_State: "",
    Country_Region: "Burma",
    iso3: "MMR",
    Population: "54409794",
  },
  {
    Province_State: "Anguilla",
    Country_Region: "United Kingdom",
    iso3: "AIA",
    Population: "15002",
  },
  {
    Province_State: "British Virgin Islands",
    Country_Region: "United Kingdom",
    iso3: "VGB",
    Population: "30237",
  },
  {
    Province_State: "Turks and Caicos Islands",
    Country_Region: "United Kingdom",
    iso3: "TCA",
    Population: "38718",
  },
  {
    Province_State: "",
    Country_Region: "MS Zaandam",
    iso3: "",
    Population: "",
  },
  {
    Province_State: "",
    Country_Region: "Botswana",
    iso3: "BWA",
    Population: "2351625",
  },
  {
    Province_State: "",
    Country_Region: "Burundi",
    iso3: "BDI",
    Population: "11890781",
  },
  {
    Province_State: "",
    Country_Region: "Sierra Leone",
    iso3: "SLE",
    Population: "7976985",
  },
  {
    Province_State: '"Bonaire, Sint Eustatius and Saba"',
    Country_Region: "Netherlands",
    iso3: "BES",
    Population: "26221",
  },
  {
    Province_State: "",
    Country_Region: "Malawi",
    iso3: "MWI",
    Population: "19129955",
  },
  {
    Province_State: "Falkland Islands (Malvinas)",
    Country_Region: "United Kingdom",
    iso3: "FLK",
    Population: "3483",
  },
  {
    Province_State: "Saint Pierre and Miquelon",
    Country_Region: "France",
    iso3: "SPM",
    Population: "5795",
  },
  {
    Province_State: "",
    Country_Region: "South Sudan",
    iso3: "SSD",
    Population: "11193729",
  },
  {
    Province_State: "",
    Country_Region: "Western Sahara",
    iso3: "ESH",
    Population: "597330",
  },
  {
    Province_State: "",
    Country_Region: "Sao Tome and Principe",
    iso3: "STP",
    Population: "219161",
  },
  {
    Province_State: "",
    Country_Region: "Yemen",
    iso3: "YEM",
    Population: "29825968",
  },
  {
    Province_State: "",
    Country_Region: "Yemen",
    iso3: "YEM",
    Population: "29825968",
  },
  {
    Province_State: "",
    Country_Region: "Yemen",
    iso3: "YEM",
    Population: "29825968",
  },
  {
    Province_State: "",
    Country_Region: "Yemen",
    iso3: "YEM",
    Population: "29825968",
  },
]

export const lookupKeys = ({
  Province_State,
  Country_Region,
}: {
  Province_State: string
  Country_Region: string
}) => {
  return (
    filter(rawCollection, { Province_State, Country_Region })[0] || {
      Province_State: "",
      Country_Region: "",
      iso3: "",
      Population: "0",
    }
  )
}

export const lookupKeyByISO = (iso3: string) => {
  return filter(rawCollection, { iso3 })[0]
}
