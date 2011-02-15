var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 2561, "sl" : 16, "el" : 149, "name" : "UsageVarargTest",
    "methods" : [
              {"sl" : 22, "el" : 26, "sc" : 5},  {"sl" : 28, "el" : 43, "sc" : 5},  {"sl" : 45, "el" : 54, "sc" : 5},  {"sl" : 56, "el" : 65, "sc" : 5},  {"sl" : 67, "el" : 76, "sc" : 5},  {"sl" : 78, "el" : 87, "sc" : 5},  {"sl" : 89, "el" : 98, "sc" : 5},  {"sl" : 100, "el" : 109, "sc" : 5},  {"sl" : 111, "el" : 120, "sc" : 5},  {"sl" : 122, "el" : 131, "sc" : 5},  {"sl" : 133, "el" : 148, "sc" : 5},  {"sl" : 137, "el" : 140, "sc" : 13}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_332" : {
					  "name" : "varargAcceptedIfArrayIsGiven",
					  "pass" : true ,
					  "methods" : [{"sl": 133 },{"sl": 137 },],
					  "statements" : [{"sl": 135 },{"sl": 139 },{"sl": 142 },{"sl": 143 },{"sl": 144 },{"sl": 145 },{"sl": 146 },{"sl": 147 },]
					  },
		"test_334" : {
					  "name" : "varargShortAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 122 },],
					  "statements" : [{"sl": 124 },{"sl": 125 },{"sl": 127 },{"sl": 128 },{"sl": 129 },{"sl": 130 },]
					  },
		"test_326" : {
					  "name" : "varargLongAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 111 },],
					  "statements" : [{"sl": 113 },{"sl": 114 },{"sl": 116 },{"sl": 117 },{"sl": 118 },{"sl": 119 },]
					  },
		"test_312" : {
					  "name" : "varargCharAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 67 },],
					  "statements" : [{"sl": 69 },{"sl": 70 },{"sl": 72 },{"sl": 73 },{"sl": 74 },{"sl": 75 },]
					  },
		"test_327" : {
					  "name" : "varargIntAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 100 },],
					  "statements" : [{"sl": 102 },{"sl": 103 },{"sl": 105 },{"sl": 106 },{"sl": 107 },{"sl": 108 },]
					  },
		"test_315" : {
					  "name" : "varargByteAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 56 },],
					  "statements" : [{"sl": 58 },{"sl": 59 },{"sl": 61 },{"sl": 62 },{"sl": 63 },{"sl": 64 },]
					  },
		"test_320" : {
					  "name" : "varargFloatAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 89 },],
					  "statements" : [{"sl": 91 },{"sl": 92 },{"sl": 94 },{"sl": 95 },{"sl": 96 },{"sl": 97 },]
					  },
		"test_323" : {
					  "name" : "varargDoubleAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 78 },],
					  "statements" : [{"sl": 80 },{"sl": 81 },{"sl": 83 },{"sl": 84 },{"sl": 85 },{"sl": 86 },]
					  },
		"test_310" : {
					  "name" : "varargObjectAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 28 },],
					  "statements" : [{"sl": 30 },{"sl": 31 },{"sl": 32 },{"sl": 33 },{"sl": 34 },{"sl": 36 },{"sl": 37 },{"sl": 38 },{"sl": 39 },{"sl": 40 },{"sl": 41 },{"sl": 42 },]
					  },
		"test_318" : {
					  "name" : "varargBooleanAccepted",
					  "pass" : true ,
					  "methods" : [{"sl": 45 },],
					  "statements" : [{"sl": 47 },{"sl": 48 },{"sl": 50 },{"sl": 51 },{"sl": 52 },{"sl": 53 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 310   ] ,
  [  ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [  ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [ 310   ] ,
  [  ] ,
  [  ] ,
  [ 318   ] ,
  [  ] ,
  [ 318   ] ,
  [ 318   ] ,
  [  ] ,
  [ 318   ] ,
  [ 318   ] ,
  [ 318   ] ,
  [ 318   ] ,
  [  ] ,
  [  ] ,
  [ 315   ] ,
  [  ] ,
  [ 315   ] ,
  [ 315   ] ,
  [  ] ,
  [ 315   ] ,
  [ 315   ] ,
  [ 315   ] ,
  [ 315   ] ,
  [  ] ,
  [  ] ,
  [ 312   ] ,
  [  ] ,
  [ 312   ] ,
  [ 312   ] ,
  [  ] ,
  [ 312   ] ,
  [ 312   ] ,
  [ 312   ] ,
  [ 312   ] ,
  [  ] ,
  [  ] ,
  [ 323   ] ,
  [  ] ,
  [ 323   ] ,
  [ 323   ] ,
  [  ] ,
  [ 323   ] ,
  [ 323   ] ,
  [ 323   ] ,
  [ 323   ] ,
  [  ] ,
  [  ] ,
  [ 320   ] ,
  [  ] ,
  [ 320   ] ,
  [ 320   ] ,
  [  ] ,
  [ 320   ] ,
  [ 320   ] ,
  [ 320   ] ,
  [ 320   ] ,
  [  ] ,
  [  ] ,
  [ 327   ] ,
  [  ] ,
  [ 327   ] ,
  [ 327   ] ,
  [  ] ,
  [ 327   ] ,
  [ 327   ] ,
  [ 327   ] ,
  [ 327   ] ,
  [  ] ,
  [  ] ,
  [ 326   ] ,
  [  ] ,
  [ 326   ] ,
  [ 326   ] ,
  [  ] ,
  [ 326   ] ,
  [ 326   ] ,
  [ 326   ] ,
  [ 326   ] ,
  [  ] ,
  [  ] ,
  [ 334   ] ,
  [  ] ,
  [ 334   ] ,
  [ 334   ] ,
  [  ] ,
  [ 334   ] ,
  [ 334   ] ,
  [ 334   ] ,
  [ 334   ] ,
  [  ] ,
  [  ] ,
  [ 332   ] ,
  [  ] ,
  [ 332   ] ,
  [  ] ,
  [ 332   ] ,
  [  ] ,
  [ 332   ] ,
  [  ] ,
  [  ] ,
  [ 332   ] ,
  [ 332   ] ,
  [ 332   ] ,
  [ 332   ] ,
  [ 332   ] ,
  [ 332   ] ,
  [  ] ,
  [  ] 
];
