let swtch0 = 0;
let swtch1 = 0;
let swtch2 = 0;
let swtch3 = 0;
let swtch4 = 0;
let swtch5 = 0;
let swtch6 = 0;
let swtch7 = 0;
let swtch8 = 0;

let banana0 = 0;
let banana1 = 0;
let banana2 = 0;
let banana3 = 0;
let banana4 = 0;
let banana5 = 0;
let banana6 = 0;
let banana7 = 0;
let banana8 = 0;

let gnob = 0;
let gnob1 = 0;
let gnob2 = 0;
let gnob3 = 0;
let gnob4 = 0;
let gnob5 = 0;
let gnob6 = 0;
let gnob7 = 0;
let gnob8 = 0;
let zzec = 0;
let cde = -1;

let ups = [];
let down_lefts = [];
let up_lefts = [];
let downs = [];
let lefts = [];
let down_rights = [];
let up_rights = [];
let rights = [];

let dl = [];
let dr = [];
let dx = [-0.62, 0.62];
let dy = [-0.62, 0.62];
let dx1 = [-0.62, 0.62];
let dy1 = [-0.62, 0.62];
let dx2 = [-0.62, 0.62];
let dy2 = [-0.62, 0.62];
let dx3 = [-0.62, 0.62];
let dy3 = [-0.62, 0.62];
let dx4 = [-0.62, 0.62];
let dy4 = [-0.62, 0.62];

let bn = [];
let bn1 = [];
let bn2 = [];
let bn3 = [];
let bn4 = [];
let bn5 = [];
let bn6 = [];
let bn7 = [];
let bt0 = [];
let bt1 = [];
let bt2 = [];
let bt3 = [];
let bt4 = [];
let bt5 = [];
let bt6 = [];
let bt7 = [];

let dxx;
let dyy;
let dxx1;
let dyy1;
let dxx2;
let goe = 0;
let dyy2;
let dxx3;
let dyy3;
let dxx4;
let dyy4;
let arwc = 0;

let nessP;
let box1;
let box2;
let box3;
let box4;
let box5;
let box6;
let box7;
let box8;
let box9;
let desk;
let gob = 255;

let b1;
let b2;
let b3;
let b4;
let b5;
let b6;
let b7;
let b8;
let b9;

let critter1;
let critter2;
let critter3;
let critter4;
let critter5;

let lady;
let nurse;
let applek;
let starman;
let orange;
let granny;
let business;

let ap = ['W', 'e', '\'', 'r', 'e', ' ', 'd', 'a', 't', 'i', 'n', 'g', '.'];

let an = ['T', 'h', 'a', 'n', 'k', ' ', 'y', 'o', 'u', ' ', 'f', 'o', 'r', ' ',
  'r', 'e', 's', 'c', 'u', 'i', 'n', 'g', ' ', 'o', 'u', 'r', ' ', 'f',
  'a', 'b', ' ', 'b', 'a', 'n', 'a', 'n', 'a', 's', '!'
];

let an2 = ['P', 'l', 'e', 'a', 's', 'e', ' ', 'a', 'l', 'l', 'o', 'w', ' ', 'm',
  'e', ' ', 't', 'o', ' ', 'r', 'e', 'p', 'a', 'i', 'r', ' ', 'y', 'o',
  'u', 'r', ' ', 'b', 'o', 'd', 'y', '.'
];

let an3 = ['I', 'f', ' ', 'o', 'n', 'l', 'y', ' ', 'm', 'y', ' ', 'h', 'u', 's',
  'b', 'a', 'n', 'd', ' ', 'w', 'o', 'u', 'l', 'd', ' ', 'l', 'e', 't',
  ' ', 'm', 'e', ' ', 'f', 'i', 'x', ' ', 'h', 'i', 'm'
];

let an4 = ['t', 'o', 'o', '.', '.', '.'];

let ld = ['S', 'h', 'a', 'r', 'e', ' ', 'y', 'o', 'u', 'r', ' ', 'b', 'a',
  'n', 'a', 'n', 'a', 's', ' ', 'w', 'i', 't', 'h', ' ', 't', 'h',
  'e', ' ', 'p', 'o', 't', 'a', 's', 's', 'i', 'u', 'm'
];

let ld2 = ['d', 'e', 'f', 'i', 'c', 'i', 'e', 'n', 't', ' ', 's', 't',
  'u', 'd', 'e', 'n', 't', 's', '.'
];

let ld3 = ['T', 'h', 'e', 'y', '\'', 'r', 'e', ' ', 'l', 'o', 'c', 'a', 't',
  'e', 'd', ' ', 'u', 'p', ' ', 'a', 'h', 'e', 'a', 'd', '.'
];

let biz = ['I', ' ', 'r', 'e', 'g', 'r', 'e', 't', ' ', 'p', 'u', 'r', 'c', 'h',
  'a', 's', 'i', 'n', 'g', ' ', 's', 'u', 'c', 'h', ' ', 'a', ' ', 'l',
  'a', 'r', 'g', 'e', ' ', 'q', 'u', 'a', 'n', 't', 'i', 't', 'y',
];

let biz2 = ['o', 'f', ' ', 'd', 'o', 'g', 'g', 'o', 's', ' ', 'f', 'o', 'r',
  ' ', 'o', 'u', 'r', ' ', 's', 'c', 'h', 'o', 'o', 'l', '.',
];

let biz3 = ['T', 'h', 'e', 'r', 'e', ' ', 'a', 'r', 'e', ' ', 'j', 'u', 's', 't',
  ' ', 't', 'o', 'o', ' ', 'm', 'a', 'n', 'y', ' ', 'h', 'e', 'c', 'k',
  'i', 'n', ' ', 'w', 'o', 'o', 'f', 'e', 'r', 's', '!',
];

let gm1 = ['I', ' ', 'e', 'n', 'v', 'y', ' ', 't', 'h', 'e', ' ', 'y', 'o', 'u',
  't', 'h', 'f', 'u', 'l', ' ', 's', 'p', 'i', 'r', 'i', 't', '.'
];

let word;
let wt = 0;
let spt = 0;
let bgt = 0;
let sptt = 0;
let kdt = 0;
let bgs = 0;
let bgm = 0;
let nht = 76;
let countdown = 15;
let jt = 0;
let cda = 0;
let swt = 0;
let seconds = 59;
let cdaa = 0;
let gpu = 0;
let kdtt = 0;
let tsts = 0;
let wts = 0;
let wtss = 0;

let nx = [-1.4 + 0.42, 0.9 - 0.42];
let ny = [-0.9 + 0.42, 1.3 - 0.42];
let nxx;
let nyy;
let nx1 = [-1.2 + 0.42, 1.0 - 0.42];
let ny1 = [-1.0 + 0.42, 0.9 - 0.42];
let nxx1;
let nyy1;
let nx2 = [-1.7 + 0.42, 1.2 - 0.42];
let ny2 = [-1.3 + 0.42, 1.4 - 0.42];
let nxx2;
let nyy2;
let nx3 = [-1.0 + 0.42, 1.7 - 0.42];
let ny3 = [-1.4 + 0.42, 1.0 - 0.42];
let nxx3;
let nyy3;
let nx4 = [-0.9 + 0.42, 1.3 - 0.42];
let ny4 = [-1.7 + 0.42, 1.2 - 0.42];
let nxx4;
let nyy4;
let nx5 = [-1.3 + 0.42, 1.4 - 0.42];
let ny5 = [-1.2 + 0.42, 1.7 - 0.42];
let nxx5;
let nyy5;

let fff = 255;
let ffff = 0;

let ylg = ['I', ' ', 'p', 'a', 'i', 'n', 't', 'e', 'd', ' ', 'm', 'y', ' ', 'd', 'r',
  'e', 's', 's', ' ', 'a', 'n', 'd', ' ', 'h', 'a', 'i', 'r', ' ', 'y', 'e',
  'l', 'l', 'o', 'w', ' ', 't', 'o', 'e', 'x', 'p', 'r', 'e', 's', 's', ' ',
  'm', 'y', ' ', 'l', 'o', 'v', 'e', ' ', 'o', 'f', ' ', 'b', 'a', 'n', 'a',
  'n', 'a', 's', '.'
];

let rlg = ['W', 'h', 'e', 'n', 'e', 'v', 'e', 'r', ' ', 's', 'o', 'm', 'e', 'b', 'o',
  'd', 'y', ' ', 'a', 'l', 'l', 'u', 'd', 'e', 's', ' ', 't', 'o', ' ', 't',
  'h', 'e', ' ', 'a', 'c', 't', ' ', 'o', 'f', ' ', '"', 'p', 'o', 'o', 'p',
  'i', 'n', 'g', '"', ' ', 'o', 'r', ' ', '"', 'p', 'e', 'e', 'i', 'n', 'g',
  '"', '.', '.', '.'
];

let rlg1 = ['I', ' ', 'u', 't', 'i', 'l', 'i', 'z', 'e', ' ', 'm', 'y', ' ', 'v', 'o',
  'c', 'a', 'l', ' ', 'c', 'h', 'o', 'r', 'd', 's', ' ', 't', 'o', ' ', 'p',
  'r', 'o', 'd', 'u', 'c', 'e', ' ', 'a', ' ', '"', 'c', 'h', 'u', 'c', 'k',
  'l', 'e', '"'
];

let ggdg = ['T', 'h', 'a', 'n', 'k', ' ', 'y', 'o', 'u', ' ', 'f', 'o', 'r', ' ', 'r',
  'e', 't', 'u', 'r', 'n', 'i', 'n', 'g', ' ', 'o', 'u', 'r', ' ', 'b', 'a',
  'n', 'a', 'n', 'a', 's', '!', ' ', 'O', 'u', 'r', ' ', 'b', 'o', 'd', 'i',
  'e', 's', ' ', 'd', 'e', 's', 'p', 'e', 'r', 'a', 't', 'e', 'l', 'y', ' ',
  'n', 'e', 'e', 'd', ' ', 't', 'h', 'e', ' ', 'e', 'x', 't', 'r', 'a'
];

let ggdg1 = ['p', 'o', 't', 'a', 's', 's', 'i', 'u', 'm', '.', ' ', 'T', 'o', ' ', 'r',
  'e', 't', 'u', 'r', 'n', ' ', 't', 'h', 'e', ' ', 'f', 'a', 'v', 'o', 'r',
  ',', ' ', 'I', '\'', 'l', 'l', ' ', 'b', 'e', ' ', 'y', 'o', 'u', 'r', ' ',
  'c', 'r', 'i', 't', 't', 'e', 'r', ' ', 'f', 'r', 'i', 'e', 'n', 'd', ' ',
  'f', 'r', 'o', 'm', ' ', 'n', 'o', 'w', ' ', 'o', 'n', '!'
];

let oldg = ['F', 'o', 'r', ' ', 't', 'h', 'e', ' ', 'p', 'a', 's', 't', ' ', '7', '6',
  ' ', 'y', 'e', 'a', 'r', 's', ',', ' ', 'I', '\'', 'v', 'e', ' ', 'b', 'e',
  'e', 'n', ' ', 'w', 'a', 'i', 't', 'i', 'n', 'g', ' ', 'i', 'n', ' ', 't',
  'h', 'i', 's', ' ', 'r', 'o', 'o', 'm', '.', ' ', 'T', 'h', 'e', 'y', ' ',
  'p', 'r', 'o', 'm', 'i', 's', 'e', 'd'
];

let oldg1 = ['t', 'o', ' ', 'b', 'r', 'i', 'n', 'g', ' ', 'm', 'e', ' ', 'a', ' ', 'b', 'a', 'n', 'a',
  'n', 'a', '.', ' ', 'B', 'u', 't', ' ', 'w', 'a', 'i', 't', 'i', 'n', 'g',
  ' ', 'f', 'o', 'r', ' ', 's', 'o', ' ', 'm', 'a', 'n', 'y', ' ', 'd', 'e',
  'c', 'a', 'd', 'e', 's', ' ', 'b', 'r', 'o', 'u', 'g', 'h', 't', ' ', 'm',
  'e', ' ', 's', 'u', 'f', 'f', 'e', 'r', 'i', 'n', 'g', '.'
];

let oldg2 = ['I', 'n', 's', 't', 'e', 'a', 'd', ' ', 'o', 'f', ' ', 'a', 'c', 'c', 'e',
  'p', 't', 'i', 'n', 'g', ' ', 'y', 'o', 'u', 'r', ' ', 'b', 'a', 'n', 'a',
  'n', 'a', '.', '.', '.', ' ', 'I', '\'', 'm', ' ', 'g', 'o', 'n', 'n', 'a',
  ' ', 't', 'a', 'k', 'e', ' ', 'm', 'y', ' ', 'a', 'n', 'g', 'e', 'r', ' ',
  'o', 'u', 't', ' ', 'o', 'n', ' ', 'y', 'o', 'u', '.'
]

let dsk1;
let dsk2;
let dsk3;
let dsk4;
let dsk5;
let dsk6;
let dsk7;
let blk;
let chr;
let blk2;
let blondie;
let gabbie;
let reddie;
let oldie;
let bngtm = 0;
let rdg = 0;
let dilg = 4;
let gilg = 4;
let yilg = 4;
let oilg = 4;
let ailg = 4;
let nuilg = 4;
let nswt = 0;
let lilg = 4;
let bilg = 4;
let grilg = 4;
let cmv = 0;

let htimer = 0;
let htimx;
let htimy;
let ntimer = 76;
let drop;
let lkn;
let rkn;
let oldx = 128.5;
let oldy = 60;
let oldxx = 1;
let oldyy = 0.5;
let fffff = 255;
let cswt = 0;
let drop1;
let drop2;
let drop3;
let drop4;
let drop5;
let drop6;
let drop7;
let drop8;
let drop9;
let drop10;
let drswt = 0;
let drswt1 = 0;
let drswt2 = 0;
let drswt3 = 0;
let drswt4 = 0;
let drswt5 = 0;
let drswt6 = 0;
let drswt7 = 0;
let drswt8 = 0;
let drswt9 = 0;
let drswt10 = 0;

let drop11;
let drop12;
let drop13;
let drop14;
let drop15;
let drop16;
let drop17;
let drop18;
let drop19;
let drop20;
let drswt11 = 0;
let drswt12 = 0;
let drswt13 = 0;
let drswt14 = 0;
let drswt15 = 0;
let drswt16 = 0;
let drswt17 = 0;
let drswt18 = 0;
let drswt19 = 0;
let drswt20 = 0;

let drop21;
let drop22;
let drop23;
let drop24;
let drop25;
let drop26;
let drop27;
let drop28;
let drop29;
let drop30;
let drswt21 = 0;
let drswt22 = 0;
let drswt23 = 0;
let drswt24 = 0;
let drswt25 = 0;
let drswt26 = 0;
let drswt27 = 0;
let drswt28 = 0;
let drswt29 = 0;
let drswt30 = 0;
let omtm = 0;
let oldxxz = 1.5;

let hmx = 320;
let hmy = 270;
let hmyv = 6.5;
let hmyx = 2;
let hmx1 = -80;
let hmy1 = 270;
let hmyv1 = 6.5;
let hmyx1 = 2;
let hmx2 = 350;
let hmy2 = -20;
let hmyv2 = 6.5;
let hmyx2 = 2;
let hmx3 = -110;
let hmy3 = -20;
let hmyv3 = 6.5;
let hmyx3 = 2;
let hmx4 = 270;
let hmy4 = 330;
let hmyx4 = 6.5;
let hmyv4 = 2;
let hmx5 = -13;
let hmy5 = 330;
let hmyx5 = 6.5;
let hmyv5 = 2;

let drop0;
let drop01;
let drop02;
let drop03;
let drop04;
let drop05;
let drop06;
let drop07;
let drop08;
let drop09;
let drop010;
let drswt0 = 0;
let drswt01 = 0;
let drswt02 = 0;
let drswt03 = 0;
let drswt04 = 0;
let drswt05 = 0;
let drswt06 = 0;
let drswt07 = 0;
let drswt08 = 0;
let drswt09 = 0;
let drswt010 = 0;

let drop011;
let drop012;
let drop013;
let drop014;
let drop015;
let drop016;
let drop017;
let drop018;
let drop019;
let drop020;
let drswt011 = 0;
let drswt012 = 0;
let drswt013 = 0;
let drswt014 = 0;
let drswt015 = 0;
let drswt016 = 0;
let drswt017 = 0;
let drswt018 = 0;
let drswt019 = 0;
let drswt020 = 0;

let drop021;
let drop022;
let drop023;
let drop024;
let drop025;
let drop026;
let drop027;
let drop028;
let drop029;
let drop030;
let drswt021 = 0;
let drswt022 = 0;
let drswt023 = 0;
let drswt024 = 0;
let drswt025 = 0;
let drswt026 = 0;
let drswt027 = 0;
let drswt028 = 0;
let drswt029 = 0;
let drswt030 = 0;

let drop00;
let drop001;
let drop002;
let drop003;
let drop004;
let drop005;
let drop006;
let drop007;
let drop008;
let drop009;
let drop0010;
let drswt00 = 0;
let drswt001 = 0;
let drswt002 = 0;
let drswt003 = 0;
let drswt004 = 0;
let drswt005 = 0;
let drswt006 = 0;
let drswt007 = 0;
let drswt008 = 0;
let drswt009 = 0;
let drswt0010 = 0;

let drop0011;
let drop0012;
let drop0013;
let drop0014;
let drop0015;
let drop0016;
let drop0017;
let drop0018;
let drop0019;
let drop0020;
let drswt0011 = 0;
let drswt0012 = 0;
let drswt0013 = 0;
let drswt0014 = 0;
let drswt0015 = 0;
let drswt0016 = 0;
let drswt0017 = 0;
let drswt0018 = 0;
let drswt0019 = 0;
let drswt0020 = 0;

let drop0021;
let drop0022;
let drop0023;
let drop0024;
let drop0025;
let drop0026;
let drop0027;
let drop0028;
let drop0029;
let drop0030;
let drswt0021 = 0;
let drswt0022 = 0;
let drswt0023 = 0;
let drswt0024 = 0;
let drswt0025 = 0;
let drswt0026 = 0;
let drswt0027 = 0;
let drswt0028 = 0;
let drswt0029 = 0;
let drswt0030 = 0;
let ommtm = 0;

let flamx = 212;
let flamy = 68;
let flal = [];
let ctmir = 0;
let oaswt = 0;
let hpr = 0;
let ogh = 0;
let noelwe = [];
let noex = 270;
let noey = 70;
let nfst = 0;
let ffbb = 0;
let txtm = 0;
let nodig = 0;
let fd = 0;
let fdt = 0;
let fdsw = 1;
let fdc = 0;
let cfi = 255;
let cfil = 255;
let nos7a = [];

let nogg1 = ['H', 'e', 'y', ' ', 't', 'h', 'e', 'r', 'e', '.', '.', '.', ' ', 'a', 'r',
  'e', ' ', 'y', 'o', 'u', ' ', 'o', 'k', 'a', 'y', '?', 'Y', 'o', 'u', ' ',
  's', 'h', 'o', 'u', 'l', 'd', ' ', 'b', 'e', ' ', 's', 'a', 'f', 'e', ' ',
  'f', 'r', 'o', 'm', ' ', 't', 'h', 'a', 't', 't', 'e', 'r', 'r', 'i', 'b',
  'l', 'e', ' ', 'm', 'a', 'n', ' ', 'n', 'o', 'w', '.'
];

let nogg2 = ['T', 'h', 'a', 'n', 'k', ' ', 'G', 'o', 'd', ' ', 'I', ' ', 'a', 'r', 'r',
  'i', 'v', 'e', 'd', ' ', 'h', 'e', 'r', 'e', ' ', 'o', 'n', ' ', 't', 'i',
  'm', 'e', '.', 'H', 'o', 'w', ' ', 'd', 'i', 'd', ' ', 'y', 'o', 'u', ' ',
  'e', 'n', 'd', ' ', 'u', 'p', ' ', 'i', 'n', ' ', 's', 'u', 'c', 'h', 'a',
  ' ', 'p', 'r', 'e', 'd', 'i', 'c', 'a', 'm', 'e', 'n', 't', '?'
];

let nogg3 = ['.', '.', '.'];
let nogg7 = ['.', '.', '.'];

let nogg4 = ['B', 'a', 'n', 'a', 'n', 'a', 's', '?', ' ', 'H', 'e', 'c', 'k', 'i', 'n',
  ' ', 'w', 'o', 'o', 'f', 'e', 'r', 's', '?', 'P', 'o', 't', 'a', 's', 's',
  'i', 'u', 'm', ' ', 'd', 'e', 'f', 'i', 'c', 'i', 'e', 'n', 'c', 'y', '!', '?'
];

let nogg5 = ['S', 'o', 'u', 'n', 'd', 's', ' ', 'l', 'i', 'k', 'e', ' ', 'y', 'o', 'u',
  '\'', 'v', 'e', ' ', 'h', 'a', 'd', 'q', 'u', 'i', 't', 'e', ' ', 'a', ' ',
  'd', 'a', 'y', '.', '.', '.'
];

let nogg6 = ['B', 'y', ' ', 't', 'h', 'e', ' ', 'w', 'a', 'y', ',', ' ', 'w', 'h', 'a',
  't', ' ', 'i', 's', ' ', 'y', 'o', 'u', 'r', ' ', 'n', 'a', 'm', 'e', '?'
];

let nogg8 = ['O', 'k', 'a', 'y', ' ', 'N', 'e', 's', 's', ',', ' ', 'I', '\'', 'm', ' ',
  'g', 'o', 'n', 'n', 'a', 'n', 'e', 'e', 'd', ' ', 'y', 'o', 'u', 'r', ' ',
  'h', 'e', 'l', 'p', '.', '.', '.'
];

let nogg9 = ['T', 'h', 'i', 's', ' ', 'i', 'n', 'f', 'o', 'r', 'm', 'a', 't', 'i', 'o',
  'n', ' ', 'i', 's', ' ', 'i', 'm', 'p', 'o', 'r', 't', 'a', 'n', 't', ',',
  's', 'o', ' ', 'l', 'i', 's', 't', 'e', 'n', ' ', 'c', 'a', 'r', 'e', 'f',
  'u', 'l', 'l', 'y', '.', '.', '.'
];

let tre1;
let tre2;
let tre3;
let tre4;
let tre5;
let tre6;
let tre7;
let tre8;
let tre9;
let tre10;
let tre11;
let tre12;
let tre13;
let tre14;
let tre15;
let tre16;
let utre1;
let utre2;
let utre3;
let utre4;
let utre5;
let utre6;
let utre7;
let utre8;
let utre9;
let utre10;
let utre11;
let utre12;
let utre13;
let utre14;
let utre15;
let utre16;
let utre17;
let utre18;
let utre19;
let utre20;
let utre21;
let utre22;
let utre23;
let utre24;
let utre25;
let utre26;
let utre27;
let utre28;
let utre29;
let utre30;
let utre31;
let utre32;
let utre33;
let utre34;
let utre35;
let utre36;
let utre37;
let utre38;
let utre39;

let hmtm = 0;
let guid = 0;
let mnu = 0;
let uks = 0;
let itw = 0;
let eqw = 0;
let cnw = 0;
let its = 0;
let eqs = 0;
let itmn = 13;
let eqmn = 13;
let itps = 0;
let eqps = 0;
let cnps = 0;
let volw = 0;
let vuks = 0;
let kit = 255;
let eqis = 0;
let eqiw = 0;
let enw = 0;
let itis = 0;
let itiw = 0;
let itnw = 0;
let exdr = 0;
let hmtwb = 0;
let fltm = 0;
let fltx = 0;
let kfsp = 0;
let ssqu = 0;
let kfstp = 0;
let skmu = 0;
let ombi = 0;
let whm = 0;

let unusable_menu = 0;

let sdd = ['*', ' ', 'S', 'c', 'h', 'o', 'o', 'l', '\'', 's', ' ', 'o', 'v', 'e', 'r',
  ',', ' ', 'N', 'e', 's', 's', '!'
];

let sdw = [' ', ' ', 'W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 't', 'h',
  'e', ' ', 'r', 'e', 'a', 'l', ' ', 'w', 'o', 'r', 'l', 'd', '.'
];