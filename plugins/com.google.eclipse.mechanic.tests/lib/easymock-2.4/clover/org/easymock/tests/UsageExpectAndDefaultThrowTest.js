var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 3691, "sl" : 21, "el" : 156, "name" : "UsageExpectAndDefaultThrowTest",
    "methods" : [
              {"sl" : 28, "el" : 32, "sc" : 5},  {"sl" : 34, "el" : 53, "sc" : 5},  {"sl" : 55, "el" : 72, "sc" : 5},  {"sl" : 74, "el" : 91, "sc" : 5},  {"sl" : 93, "el" : 110, "sc" : 5},  {"sl" : 112, "el" : 129, "sc" : 5},  {"sl" : 131, "el" : 154, "sc" : 5}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_328" : {
					  "name" : "booleanType",
					  "pass" : true ,
					  "methods" : [{"sl": 34 },],
					  "statements" : [{"sl": 36 },{"sl": 39 },{"sl": 40 },{"sl": 41 },{"sl": 44 },{"sl": 46 },{"sl": 47 },{"sl": 50 },{"sl": 52 },]
					  },
		"test_294" : {
					  "name" : "floatType",
					  "pass" : true ,
					  "methods" : [{"sl": 74 },],
					  "statements" : [{"sl": 76 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 82 },{"sl": 84 },{"sl": 85 },{"sl": 88 },{"sl": 90 },]
					  },
		"test_299" : {
					  "name" : "throwableAndDefaultThrowable",
					  "pass" : true ,
					  "methods" : [{"sl": 131 },],
					  "statements" : [{"sl": 134 },{"sl": 136 },{"sl": 137 },{"sl": 139 },{"sl": 141 },{"sl": 142 },{"sl": 145 },{"sl": 146 },{"sl": 149 },{"sl": 150 },{"sl": 153 },]
					  },
		"test_285" : {
					  "name" : "doubleType",
					  "pass" : true ,
					  "methods" : [{"sl": 93 },],
					  "statements" : [{"sl": 95 },{"sl": 96 },{"sl": 97 },{"sl": 98 },{"sl": 101 },{"sl": 103 },{"sl": 104 },{"sl": 107 },{"sl": 109 },]
					  },
		"test_325" : {
					  "name" : "longType",
					  "pass" : true ,
					  "methods" : [{"sl": 55 },],
					  "statements" : [{"sl": 57 },{"sl": 58 },{"sl": 59 },{"sl": 60 },{"sl": 63 },{"sl": 65 },{"sl": 66 },{"sl": 69 },{"sl": 71 },]
					  },
		"test_283" : {
					  "name" : "object",
					  "pass" : true ,
					  "methods" : [{"sl": 112 },],
					  "statements" : [{"sl": 114 },{"sl": 115 },{"sl": 116 },{"sl": 117 },{"sl": 120 },{"sl": 122 },{"sl": 123 },{"sl": 126 },{"sl": 128 },]
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
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 328   ] ,
  [  ] ,
  [ 328   ] ,
  [  ] ,
  [  ] ,
  [ 328   ] ,
  [ 328   ] ,
  [ 328   ] ,
  [  ] ,
  [  ] ,
  [ 328   ] ,
  [  ] ,
  [ 328   ] ,
  [ 328   ] ,
  [  ] ,
  [  ] ,
  [ 328   ] ,
  [  ] ,
  [ 328   ] ,
  [  ] ,
  [  ] ,
  [ 325   ] ,
  [  ] ,
  [ 325   ] ,
  [ 325   ] ,
  [ 325   ] ,
  [ 325   ] ,
  [  ] ,
  [  ] ,
  [ 325   ] ,
  [  ] ,
  [ 325   ] ,
  [ 325   ] ,
  [  ] ,
  [  ] ,
  [ 325   ] ,
  [  ] ,
  [ 325   ] ,
  [  ] ,
  [  ] ,
  [ 294   ] ,
  [  ] ,
  [ 294   ] ,
  [ 294   ] ,
  [ 294   ] ,
  [ 294   ] ,
  [  ] ,
  [  ] ,
  [ 294   ] ,
  [  ] ,
  [ 294   ] ,
  [ 294   ] ,
  [  ] ,
  [  ] ,
  [ 294   ] ,
  [  ] ,
  [ 294   ] ,
  [  ] ,
  [  ] ,
  [ 285   ] ,
  [  ] ,
  [ 285   ] ,
  [ 285   ] ,
  [ 285   ] ,
  [ 285   ] ,
  [  ] ,
  [  ] ,
  [ 285   ] ,
  [  ] ,
  [ 285   ] ,
  [ 285   ] ,
  [  ] ,
  [  ] ,
  [ 285   ] ,
  [  ] ,
  [ 285   ] ,
  [  ] ,
  [  ] ,
  [ 283   ] ,
  [  ] ,
  [ 283   ] ,
  [ 283   ] ,
  [ 283   ] ,
  [ 283   ] ,
  [  ] ,
  [  ] ,
  [ 283   ] ,
  [  ] ,
  [ 283   ] ,
  [ 283   ] ,
  [  ] ,
  [  ] ,
  [ 283   ] ,
  [  ] ,
  [ 283   ] ,
  [  ] ,
  [  ] ,
  [ 299   ] ,
  [  ] ,
  [  ] ,
  [ 299   ] ,
  [  ] ,
  [ 299   ] ,
  [ 299   ] ,
  [  ] ,
  [ 299   ] ,
  [  ] ,
  [ 299   ] ,
  [ 299   ] ,
  [  ] ,
  [  ] ,
  [ 299   ] ,
  [ 299   ] ,
  [  ] ,
  [  ] ,
  [ 299   ] ,
  [ 299   ] ,
  [  ] ,
  [  ] ,
  [ 299   ] ,
  [  ] ,
  [  ] ,
  [  ] 
];
