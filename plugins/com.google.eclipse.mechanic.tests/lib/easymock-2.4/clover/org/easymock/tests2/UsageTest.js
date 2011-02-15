var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 1337, "sl" : 14, "el" : 305, "name" : "UsageTest",
    "methods" : [
              {"sl" : 18, "el" : 21, "sc" : 5},  {"sl" : 23, "el" : 39, "sc" : 5},  {"sl" : 41, "el" : 51, "sc" : 5},  {"sl" : 53, "el" : 77, "sc" : 5},  {"sl" : 79, "el" : 97, "sc" : 5},  {"sl" : 99, "el" : 121, "sc" : 5},  {"sl" : 123, "el" : 138, "sc" : 5},  {"sl" : 140, "el" : 156, "sc" : 5},  {"sl" : 158, "el" : 181, "sc" : 5},  {"sl" : 183, "el" : 218, "sc" : 5},  {"sl" : 220, "el" : 236, "sc" : 5},  {"sl" : 238, "el" : 252, "sc" : 5},  {"sl" : 254, "el" : 274, "sc" : 5},  {"sl" : 276, "el" : 304, "sc" : 5}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_188" : {
					  "name" : "openCallCountByLastCall",
					  "pass" : true ,
					  "methods" : [{"sl": 41 },],
					  "statements" : [{"sl": 43 },{"sl": 46 },{"sl": 48 },{"sl": 49 },{"sl": 50 },]
					  },
		"test_186" : {
					  "name" : "openCallCountByLastThrowable",
					  "pass" : true ,
					  "methods" : [{"sl": 79 },],
					  "statements" : [{"sl": 81 },{"sl": 84 },{"sl": 86 },{"sl": 87 },{"sl": 89 },{"sl": 90 },{"sl": 93 },{"sl": 94 },]
					  },
		"test_259" : {
					  "name" : "defaultResetToNice",
					  "pass" : true ,
					  "methods" : [{"sl": 238 },],
					  "statements" : [{"sl": 240 },{"sl": 242 },{"sl": 243 },{"sl": 245 },{"sl": 247 },{"sl": 249 },{"sl": 251 },]
					  },
		"test_215" : {
					  "name" : "exactCallCountByLastCall",
					  "pass" : true ,
					  "methods" : [{"sl": 23 },],
					  "statements" : [{"sl": 25 },{"sl": 26 },{"sl": 28 },{"sl": 29 },{"sl": 31 },{"sl": 32 },{"sl": 33 },{"sl": 35 },{"sl": 37 },]
					  },
		"test_202" : {
					  "name" : "moreThanOneArgument",
					  "pass" : true ,
					  "methods" : [{"sl": 99 },],
					  "statements" : [{"sl": 101 },{"sl": 104 },{"sl": 106 },{"sl": 108 },{"sl": 109 },{"sl": 110 },{"sl": 113 },{"sl": 118 },]
					  },
		"test_192" : {
					  "name" : "wrongArguments",
					  "pass" : true ,
					  "methods" : [{"sl": 123 },],
					  "statements" : [{"sl": 125 },{"sl": 126 },{"sl": 128 },{"sl": 129 },{"sl": 132 },]
					  },
		"test_250" : {
					  "name" : "mixingOrderedAndUnordered",
					  "pass" : true ,
					  "methods" : [{"sl": 183 },],
					  "statements" : [{"sl": 185 },{"sl": 186 },{"sl": 187 },{"sl": 188 },{"sl": 189 },{"sl": 190 },{"sl": 191 },{"sl": 192 },{"sl": 193 },{"sl": 195 },{"sl": 197 },{"sl": 198 },{"sl": 200 },{"sl": 201 },{"sl": 202 },{"sl": 204 },{"sl": 206 },{"sl": 210 },{"sl": 211 },{"sl": 212 },{"sl": 213 },{"sl": 214 },{"sl": 216 },]
					  },
		"test_262" : {
					  "name" : "resumeIfFailure",
					  "pass" : true ,
					  "methods" : [{"sl": 220 },],
					  "statements" : [{"sl": 222 },{"sl": 223 },{"sl": 224 },{"sl": 226 },{"sl": 228 },{"sl": 229 },{"sl": 233 },{"sl": 235 },]
					  },
		"test_256" : {
					  "name" : "strictResetToDefault",
					  "pass" : true ,
					  "methods" : [{"sl": 254 },],
					  "statements" : [{"sl": 256 },{"sl": 258 },{"sl": 259 },{"sl": 261 },{"sl": 263 },{"sl": 265 },{"sl": 266 },{"sl": 268 },{"sl": 270 },{"sl": 271 },{"sl": 273 },]
					  },
		"test_253" : {
					  "name" : "argumentsOrdered",
					  "pass" : true ,
					  "methods" : [{"sl": 158 },],
					  "statements" : [{"sl": 160 },{"sl": 161 },{"sl": 162 },{"sl": 163 },{"sl": 164 },{"sl": 165 },{"sl": 167 },{"sl": 168 },{"sl": 171 },]
					  },
		"test_193" : {
					  "name" : "summarizeSameObjectArguments",
					  "pass" : true ,
					  "methods" : [{"sl": 140 },],
					  "statements" : [{"sl": 142 },{"sl": 143 },{"sl": 144 },{"sl": 146 },{"sl": 147 },{"sl": 150 },]
					  },
		"test_190" : {
					  "name" : "exactCallCountByLastThrowable",
					  "pass" : true ,
					  "methods" : [{"sl": 53 },],
					  "statements" : [{"sl": 55 },{"sl": 58 },{"sl": 60 },{"sl": 61 },{"sl": 63 },{"sl": 64 },{"sl": 69 },{"sl": 70 },{"sl": 71 },{"sl": 75 },]
					  },
		"test_231" : {
					  "name" : "niceToStrict",
					  "pass" : true ,
					  "methods" : [{"sl": 276 },],
					  "statements" : [{"sl": 278 },{"sl": 280 },{"sl": 282 },{"sl": 284 },{"sl": 286 },{"sl": 288 },{"sl": 289 },{"sl": 291 },{"sl": 293 },{"sl": 294 },{"sl": 300 },{"sl": 301 },{"sl": 303 },]
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
  [ 215   ] ,
  [  ] ,
  [ 215   ] ,
  [ 215   ] ,
  [  ] ,
  [ 215   ] ,
  [ 215   ] ,
  [  ] ,
  [ 215   ] ,
  [ 215   ] ,
  [ 215   ] ,
  [  ] ,
  [ 215   ] ,
  [  ] ,
  [ 215   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 188   ] ,
  [  ] ,
  [ 188   ] ,
  [  ] ,
  [  ] ,
  [ 188   ] ,
  [  ] ,
  [ 188   ] ,
  [ 188   ] ,
  [ 188   ] ,
  [  ] ,
  [  ] ,
  [ 190   ] ,
  [  ] ,
  [ 190   ] ,
  [  ] ,
  [  ] ,
  [ 190   ] ,
  [  ] ,
  [ 190   ] ,
  [ 190   ] ,
  [  ] ,
  [ 190   ] ,
  [ 190   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 190   ] ,
  [ 190   ] ,
  [ 190   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 190   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 186   ] ,
  [  ] ,
  [ 186   ] ,
  [  ] ,
  [  ] ,
  [ 186   ] ,
  [  ] ,
  [ 186   ] ,
  [ 186   ] ,
  [  ] ,
  [ 186   ] ,
  [ 186   ] ,
  [  ] ,
  [  ] ,
  [ 186   ] ,
  [ 186   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 202   ] ,
  [  ] ,
  [ 202   ] ,
  [  ] ,
  [  ] ,
  [ 202   ] ,
  [  ] ,
  [ 202   ] ,
  [  ] ,
  [ 202   ] ,
  [ 202   ] ,
  [ 202   ] ,
  [  ] ,
  [  ] ,
  [ 202   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 202   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 192   ] ,
  [  ] ,
  [ 192   ] ,
  [ 192   ] ,
  [  ] ,
  [ 192   ] ,
  [ 192   ] ,
  [  ] ,
  [  ] ,
  [ 192   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 193   ] ,
  [  ] ,
  [ 193   ] ,
  [ 193   ] ,
  [ 193   ] ,
  [  ] ,
  [ 193   ] ,
  [ 193   ] ,
  [  ] ,
  [  ] ,
  [ 193   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 253   ] ,
  [  ] ,
  [ 253   ] ,
  [ 253   ] ,
  [ 253   ] ,
  [ 253   ] ,
  [ 253   ] ,
  [ 253   ] ,
  [  ] ,
  [ 253   ] ,
  [ 253   ] ,
  [  ] ,
  [  ] ,
  [ 253   ] ,
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
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [ 250   ] ,
  [  ] ,
  [ 250   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 262   ] ,
  [  ] ,
  [ 262   ] ,
  [ 262   ] ,
  [ 262   ] ,
  [  ] ,
  [ 262   ] ,
  [  ] ,
  [ 262   ] ,
  [ 262   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 262   ] ,
  [  ] ,
  [ 262   ] ,
  [  ] ,
  [  ] ,
  [ 259   ] ,
  [  ] ,
  [ 259   ] ,
  [  ] ,
  [ 259   ] ,
  [ 259   ] ,
  [  ] ,
  [ 259   ] ,
  [  ] ,
  [ 259   ] ,
  [  ] ,
  [ 259   ] ,
  [  ] ,
  [ 259   ] ,
  [  ] ,
  [  ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [ 256   ] ,
  [  ] ,
  [ 256   ] ,
  [  ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [ 231   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 231   ] ,
  [ 231   ] ,
  [  ] ,
  [ 231   ] ,
  [  ] ,
  [  ] 
];
