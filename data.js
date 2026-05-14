// Fortify Health Impact Visualisation — Data File
// Edit this file to update state data, programme data, and reach figures.
// After editing, commit and push to GitHub — Render will redeploy automatically.

window.APP_DATA = {

// ── NFHS + CNNS anaemia data by state ─────────────────────────────────────────
STATES: [
  {id:"INAN",name:"Andaman & Nicobar",pop:0.4,anaemiaW:[null,null,null],anaemiaC:[null,null,null],anaemiaM:[null,null],ironDef:[null,null,null]},
  {id:"INAP",name:"Andhra Pradesh",pop:54.0,anaemiaW:[74.3,59.7,59.9],anaemiaC:[81.9,58.8,65.0],anaemiaM:[17.5,17.7],ironDef:[13.0,10.6,15.2]},
  {id:"INAR",name:"Arunachal Pradesh",pop:1.6,anaemiaW:[28.0,34.9,35.9],anaemiaC:[28.7,38.1,34.0],anaemiaM:[27.8,29.3],ironDef:[14.9,7.7,18.3]},
  {id:"INAS",name:"Assam",pop:35.6,anaemiaW:[69.0,45.9,65.8],anaemiaC:[67.8,35.7,68.5],anaemiaM:[29.5,35.7],ironDef:[8.5,3.5,11.5]},
  {id:"INBR",name:"Bihar",pop:124.0,anaemiaW:[67.5,60.3,63.5],anaemiaC:[77.9,63.5,69.0],anaemiaM:[32.9,34.3],ironDef:[20.2,7.8,12.7]},
  {id:"INCH",name:"Chandigarh",pop:1.2,anaemiaW:[null,null,null],anaemiaC:[null,null,null],anaemiaM:[null,null],ironDef:[null,null,null]},
  {id:"INCT",name:"Chhattisgarh",pop:29.4,anaemiaW:[50.0,47.4,41.5],anaemiaC:[60.5,41.6,60.2],anaemiaM:[24.3,20.8],ironDef:[38.5,28.4,31.3]},
  {id:"INDH",name:"Dadra & Nagar Haveli",pop:0.6,anaemiaW:[null,null,null],anaemiaC:[null,null,null],anaemiaM:[null,null],ironDef:[null,null,null]},
  {id:"INDL",name:"Delhi",pop:20.6,anaemiaW:[43.9,54.2,49.0],anaemiaC:[57.1,60.2,49.3],anaemiaM:[22.5,17.8],ironDef:[38.3,16.1,18.4]},
  {id:"INGA",name:"Goa",pop:1.6,anaemiaW:[34.0,32.2,41.8],anaemiaC:[40.4,42.5,53.8],anaemiaM:[16.4,14.9],ironDef:[11.9,5.5,13.6]},
  {id:"INGJ",name:"Gujarat",pop:70.0,anaemiaW:[55.5,51.2,55.5],anaemiaC:[74.8,62.6,79.7],anaemiaM:[20.4,19.0],ironDef:[55.7,37.9,35.0]},
  {id:"INHR",name:"Haryana",pop:28.9,anaemiaW:[55.7,62.7,63.0],anaemiaC:[72.2,71.2,70.5],anaemiaM:[22.4,22.9],ironDef:[58.9,35.6,28.7]},
  {id:"INHP",name:"Himachal Pradesh",pop:7.4,anaemiaW:[42.8,53.5,54.5],anaemiaC:[54.4,54.5,54.8],anaemiaM:[20.6,28.4],ironDef:[34.5,23.0,22.0]},
  {id:"INJK",name:"Jammu & Kashmir",pop:13.6,anaemiaW:[47.0,49.0,54.8],anaemiaC:[57.5,53.7,72.0],anaemiaM:[22.3,29.2],ironDef:[44.7,17.8,30.7]},
  {id:"INJH",name:"Jharkhand",pop:38.0,anaemiaW:[70.0,69.6,65.0],anaemiaC:[70.9,69.7,69.9],anaemiaM:[33.0,30.0],ironDef:[13.8,5.1,10.1]},
  {id:"INKA",name:"Karnataka",pop:68.0,anaemiaW:[51.0,45.4,44.8],anaemiaC:[70.1,60.6,66.3],anaemiaM:[20.7,19.4],ironDef:[50.1,31.2,30.5]},
  {id:"INKL",name:"Kerala",pop:35.0,anaemiaW:[32.5,34.3,39.2],anaemiaC:[44.0,35.5,43.0],anaemiaM:[12.7,15.3],ironDef:[35.2,18.0,25.3]},
  {id:"INLA",name:"Ladakh",pop:0.27,anaemiaW:[47.0,49.0,51.0],anaemiaC:[57.5,53.7,63.0],anaemiaM:[22.3,25.0],ironDef:[44.7,17.8,25.0]},
  {id:"INLD",name:"Lakshadweep",pop:0.07,anaemiaW:[null,null,null],anaemiaC:[null,null,null],anaemiaM:[null,null],ironDef:[null,null,null]},
  {id:"INMP",name:"Madhya Pradesh",pop:85.0,anaemiaW:[55.4,52.5,54.7],anaemiaC:[74.1,68.9,72.7],anaemiaM:[24.5,26.6],ironDef:[45.9,25.2,22.1]},
  {id:"INMH",name:"Maharashtra",pop:124.0,anaemiaW:[48.5,48.0,45.7],anaemiaC:[69.6,58.6,68.9],anaemiaM:[20.3,20.7],ironDef:[49.0,29.1,31.2]},
  {id:"INMN",name:"Manipur",pop:3.2,anaemiaW:[15.9,27.0,23.0],anaemiaC:[9.6,13.4,17.5],anaemiaM:[17.5,12.5],ironDef:[17.4,10.5,12.6]},
  {id:"INML",name:"Meghalaya",pop:3.4,anaemiaW:[48.0,56.2,51.1],anaemiaC:[64.3,45.8,57.6],anaemiaM:[29.7,31.3],ironDef:[24.9,12.0,13.7]},
  {id:"INMZ",name:"Mizoram",pop:1.2,anaemiaW:[21.6,31.7,30.7],anaemiaC:[43.9,19.4,46.9],anaemiaM:[12.7,19.4],ironDef:[4.2,2.1,9.4]},
  {id:"INNL",name:"Nagaland",pop:2.3,anaemiaW:[18.7,22.6,25.5],anaemiaC:[22.9,18.9,28.5],anaemiaM:[14.0,17.0],ironDef:[null,null,null]},
  {id:"INOR",name:"Odisha",pop:46.0,anaemiaW:[61.0,51.8,63.0],anaemiaC:[65.0,44.7,71.9],anaemiaM:[23.6,27.5],ironDef:[30.4,13.1,20.4]},
  {id:"INPY",name:"Puducherry",pop:1.5,anaemiaW:[null,null,null],anaemiaC:[null,null,null],anaemiaM:[null,null],ironDef:[null,null,null]},
  {id:"INPB",name:"Punjab",pop:30.1,anaemiaW:[37.9,53.4,57.6],anaemiaC:[65.8,55.8,70.9],anaemiaM:[16.5,21.3],ironDef:[67.2,50.9,45.3]},
  {id:"INRJ",name:"Rajasthan",pop:81.0,anaemiaW:[52.5,46.8,54.4],anaemiaC:[79.6,60.3,72.0],anaemiaM:[16.8,21.6],ironDef:[44.3,39.0,35.1]},
  {id:"INSK",name:"Sikkim",pop:0.7,anaemiaW:[60.1,67.4,53.0],anaemiaC:[72.0,52.2,56.0],anaemiaM:[24.9,24.0],ironDef:[27.9,7.7,21.2]},
  {id:"INTG",name:"Telangana",pop:39.0,anaemiaW:[null,56.5,47.0],anaemiaC:[null,60.0,61.3],anaemiaM:[null,17.1],ironDef:[33.4,22.7,26.0]},
  {id:"INTN",name:"Tamil Nadu",pop:78.0,anaemiaW:[53.2,55.1,50.0],anaemiaC:[69.2,50.7,56.8],anaemiaM:[15.8,17.6],ironDef:[41.7,20.3,26.1]},
  {id:"INTR",name:"Tripura",pop:4.1,anaemiaW:[64.0,64.4,74.3],anaemiaC:[62.1,48.2,70.7],anaemiaM:[30.8,37.5],ironDef:[16.0,8.7,11.8]},
  {id:"INUP",name:"Uttar Pradesh",pop:234.0,anaemiaW:[49.6,52.4,50.4],anaemiaC:[73.9,63.6,66.4],anaemiaM:[22.2,22.7],ironDef:[23.9,9.0,17.2]},
  {id:"INUT",name:"Uttarakhand",pop:11.4,anaemiaW:[56.0,45.6,56.2],anaemiaC:[76.0,55.7,62.7],anaemiaM:[20.8,26.5],ironDef:[51.2,18.4,19.6]},
  {id:"INWB",name:"West Bengal",pop:98.0,anaemiaW:[62.9,62.5,71.0],anaemiaC:[69.5,54.0,69.0],anaemiaM:[24.1,28.2],ironDef:[21.1,5.4,16.9]},
],

// ── National figures (NFHS-3/4/5) ────────────────────────────────────────────
NATIONAL: {
  anaemiaW:[53.1,53.1,57.0], anaemiaC:[58.6,58.6,67.1],
  anaemiaM:[null,22.7,25.0], ironDef:[null,null,31.9]
},

// ── SSNP Reach: wheat beneficiaries by state and scheme ──────────────────────
REACH_STATES: [
  {id:"INJK",name:"Jammu & Kashmir",grain:"wheat",pds:{total:7241000,wheat:2156179},icds:{total:788289,wheat:0},mdm:{total:868926,wheat:0}},
  {id:"INLA",name:"Ladakh",grain:"wheat",pds:{total:144000,wheat:82571},icds:{total:16122,wheat:6747},mdm:{total:16515,wheat:0}},
  {id:"INHP",name:"Himachal Pradesh",grain:"wheat",pds:{total:2988000,wheat:1895070},icds:{total:317195,wheat:248987},mdm:{total:461113,wheat:0}},
  {id:"INPB",name:"Punjab",grain:"wheat",pds:{total:14145000,wheat:14145000},icds:{total:1062256,wheat:879600},mdm:{total:1558309,wheat:1558309}},
  {id:"INCH",name:"Chandigarh",grain:"wheat",pds:{total:299000,wheat:0},icds:{total:26143,wheat:10456},mdm:{total:62425,wheat:62425}},
  {id:"INUT",name:"Uttarakhand",grain:"wheat",pds:{total:6194000,wheat:2716275},icds:{total:507122,wheat:335331},mdm:{total:517578,wheat:0}},
  {id:"INHR",name:"Haryana",grain:"wheat",pds:{total:12649000,wheat:12649000},icds:{total:994849,wheat:796901},mdm:{total:1470820,wheat:1470820}},
  {id:"INDL",name:"Delhi",grain:"wheat",pds:{total:7278000,wheat:5782313},icds:{total:561645,wheat:280650},mdm:{total:1175056,wheat:1175056}},
  {id:"INRJ",name:"Rajasthan",grain:"wheat",pds:{total:44001000,wheat:44001000},icds:{total:2108695,wheat:1770904},mdm:{total:4590367,wheat:4590367}},
  {id:"INUP",name:"Uttar Pradesh",grain:"wheat",pds:{total:149870000,wheat:57001905},icds:{total:6219600,wheat:5416374},mdm:{total:10247081,wheat:10247081}},
  {id:"INBR",name:"Bihar",grain:"both",pds:{total:87116000,wheat:34846438},icds:{total:7166809,wheat:0},mdm:{total:10383675,wheat:0}},
  {id:"INJH",name:"Jharkhand",grain:"rice",pds:{total:26419000,wheat:5283800},icds:{total:2022485,wheat:1160890},mdm:{total:2908046,wheat:0}},
  {id:"INWB",name:"West Bengal",grain:"rice",pds:{total:60184000,wheat:35809557},icds:{total:7497440,wheat:0},mdm:{total:8016881,wheat:0}},
  {id:"INSK",name:"Sikkim",grain:"rice",pds:{total:381000,wheat:30530},icds:{total:12540,wheat:2035},mdm:{total:42265,wheat:0}},
  {id:"INAR",name:"Arunachal Pradesh",grain:"rice",pds:{total:844000,wheat:0},icds:{total:38702,wheat:0},mdm:{total:130175,wheat:0}},
  {id:"INAS",name:"Assam",grain:"rice",pds:{total:24798000,wheat:724835},icds:{total:2104863,wheat:320793},mdm:{total:3164676,wheat:0}},
  {id:"INMN",name:"Manipur",grain:"rice",pds:{total:2087000,wheat:0},icds:{total:184168,wheat:0},mdm:{total:171352,wheat:0}},
  {id:"INML",name:"Meghalaya",grain:"rice",pds:{total:2146000,wheat:267155},icds:{total:216151,wheat:134531},mdm:{total:686352,wheat:0}},
  {id:"INMZ",name:"Mizoram",grain:"rice",pds:{total:705000,wheat:0},icds:{total:76194,wheat:28293},mdm:{total:129285,wheat:0}},
  {id:"INNL",name:"Nagaland",grain:"rice",pds:{total:1405000,wheat:0},icds:{total:23518,wheat:0},mdm:{total:122234,wheat:0}},
  {id:"INTR",name:"Tripura",grain:"rice",pds:{total:2443000,wheat:340044},icds:{total:217315,wheat:0},mdm:{total:282433,wheat:0}},
  {id:"INMP",name:"Madhya Pradesh",grain:"both",pds:{total:53479000,wheat:40153632},icds:{total:6003052,wheat:4147773},mdm:{total:4457999,wheat:4457999}},
  {id:"INCT",name:"Chhattisgarh",grain:"rice",pds:{total:20077000,wheat:0},icds:{total:2205816,wheat:1930782},mdm:{total:2404929,wheat:0}},
  {id:"INMH",name:"Maharashtra",grain:"both",pds:{total:70017000,wheat:39286520},icds:{total:5092829,wheat:4534478},mdm:{total:8867355,wheat:0}},
  {id:"INGJ",name:"Gujarat",grain:"both",pds:{total:36584000,wheat:14793190},icds:{total:3081936,wheat:2635097},mdm:{total:4044689,wheat:4044689}},
  {id:"INGA",name:"Goa",grain:"rice",pds:{total:532000,wheat:84774},icds:{total:44796,wheat:37905},mdm:{total:156947,wheat:156947}},
  {id:"INDH",name:"Dadra & Nagar Haveli",grain:"both",pds:{total:269000,wheat:25172},icds:{total:24539,wheat:11092},mdm:{total:60904,wheat:60904}},
  {id:"INOR",name:"Odisha",grain:"rice",pds:{total:32517000,wheat:0},icds:{total:3162696,wheat:2717437},mdm:{total:4532042,wheat:0}},
  {id:"INAP",name:"Andhra Pradesh",grain:"rice",pds:{total:26822000,wheat:316505},icds:{total:1891839,wheat:1567367},mdm:{total:2312938,wheat:0}},
  {id:"INTG",name:"Telangana",grain:"rice",pds:{total:19170000,wheat:648452},icds:{total:1191324,wheat:1001571},mdm:{total:1246598,wheat:0}},
  {id:"INKA",name:"Karnataka",grain:"rice",pds:{total:40193000,wheat:0},icds:{total:2454823,wheat:1958019},mdm:{total:4007212,wheat:4007212}},
  {id:"INKL",name:"Kerala",grain:"rice",pds:{total:15480000,wheat:2879248},icds:{total:775308,wheat:609947},mdm:{total:2603494,wheat:0}},
  {id:"INTN",name:"Tamil Nadu",grain:"rice",pds:{total:36412000,wheat:3641200},icds:{total:2713665,wheat:2125629},mdm:{total:3387514,wheat:0}},
  {id:"INPY",name:"Puducherry",grain:"rice",pds:{total:634000,wheat:0},icds:{total:30265,wheat:0},mdm:{total:46467,wheat:0}},
  {id:"INAN",name:"Andaman & Nicobar",grain:"rice",pds:{total:61000,wheat:20160},icds:{total:10416,wheat:0},mdm:{total:23412,wheat:0}},
  {id:"INLD",name:"Lakshadweep",grain:"rice",pds:{total:22000,wheat:0},icds:{total:3631,wheat:0},mdm:{total:8606,wheat:0}},
],

// ── Fortify Health government programme footprint ────────────────────────────
FH_PROJECTS: [
  {id:"INGJ", name:"Gujarat",        partner:"Akshaya Patra Foundation",
   status:"ongoing",  program:"Govt / PM-POSHAN",
   bens:529685, atta:300, start:"Jan 2025", end:"Jan 2029",
   type:"Students (age 6–16)", mills:6},
  {id:"INAP", name:"Andhra Pradesh", partner:"Andhra Pradesh PDS",
   status:"stopped",  program:"Govt / PDS",
   bens:4900000, atta:1840, start:"Oct 2023", end:"Jul 2024",
   type:"General population (low-income households)", mills:3},
  {id:"INUP", name:"Uttar Pradesh",  partner:"TAPF Vrindavan",
   status:"pipeline", program:"Govt / PM-POSHAN",
   bens:100000, atta:90, start:"Jun 2026", end:"Ongoing",
   type:"Students (age 6–16)", mills:1},
],

};

// Computed totals (do not edit — calculated from REACH_STATES above)
window.APP_DATA.REACH_TOTALS = {
  pds_wheat:  window.APP_DATA.REACH_STATES.reduce((s,x)=>s+x.pds.wheat,0),
  icds_wheat: window.APP_DATA.REACH_STATES.reduce((s,x)=>s+x.icds.wheat,0),
  mdm_wheat:  window.APP_DATA.REACH_STATES.reduce((s,x)=>s+x.mdm.wheat,0),
};
window.APP_DATA.REACH_TOTALS.total_wheat = window.APP_DATA.REACH_TOTALS.pds_wheat + window.APP_DATA.REACH_TOTALS.icds_wheat + window.APP_DATA.REACH_TOTALS.mdm_wheat;
