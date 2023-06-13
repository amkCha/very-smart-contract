// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract Pairing1000 {

    struct G1Point {
        uint X;
        uint Y;
    }

    G1Point[101] public vk;

    constructor() {

        vk[0] = G1Point(
            19391891390609481429849774145579503985374912055370046060106347963180567737648,
            7728129834219170358551601609946089408272789276196019291377633982082964264714
        );

        vk[1] = G1Point(
            228181717483219631881657075204725935385048273455808643893243197164559350421,
            15508572652012038327422985835367154161109393774231544670603904898987703339046
        );

        vk[2] = G1Point(
            16754121749542176817018561144730772493675261004204649097804584067550029429764,
            17198634116191727394680940996772782519853632044920636906274502553914565398533
        );

        vk[3] = G1Point(
            17957826624334676365790727934855184468288134758298197553821849563875784518295,
            11406944883794382503312535656888338714736169159186960939240866611040057953907
        );

        vk[4] = G1Point(
            4430494423928001497300523686255609706462362613573142892959836577073966586667,
            13162682470663696321459107672743862398804392623617041025907097398229531565530
        );

        vk[5] = G1Point(
            14257009587274680131434329887478603228568836644077894222628586460501309457074,
            11646274224080018681410242920703798265921447377022922965379193380569262526301
        );

        vk[6] = G1Point(
            9705958142725732334171292951895582262453103495226515030924122300318445171445,
            13694782303955607160992526693851231852459773108619276337185038380591985756496
        );

        vk[7] = G1Point(
            17144012643506768456362242707497029877693906598559317669357981307632003015152,
            11530719059110160059659430237719853818953715174794303473948058261774712009985
        );

        vk[8] = G1Point(
            14483890631953705848041353681278392175692989931587713018682235387322135726786,
            17427021586348812404499081252639576599520587094666536022623220701285350530468
        );

        vk[9] = G1Point(
            17889382316777192599293408639688887991696476616460947563545460888753944231405,
            20352775334017958538073502200757565414898846974625645781257112656447740307043
        );

        vk[10] = G1Point(
            5951262494284676135349496221747578090299959473645061787220637810949004073376,
            14922032753898924330673643869866676805069688661209194494635965419171158760589
        );

        vk[11] = G1Point(
            14157110821921252447764389098290770100004176856427647780277344609571231620687,
            20709704698226862108207042948311273224238835582484024370305399265471877818695
        );

        vk[12] = G1Point(
            7728759661843518063486549138063376271515204045617668507188211998990686355923,
            10711743748251684178249009586963144563210034088884838210857401639959975316833
        );

        vk[13] = G1Point(
            2651390927031831475551158402902979685807224853052037975527524295438342728413,
            11004334363823378697748692777964374325632053561615011779936484804038418721791
        );

        vk[14] = G1Point(
            8246811305647017907134069673379285161957161889986106809441259650967328678244,
            20494711448810555007005264172937271620975611130788125438879019136802800991047
        );

        vk[15] = G1Point(
            9227237815575743955536388616372607676700984624496162638091113803457981055424,
            7490146127910565474405078546634898959685582216342077796995152448422625084147
        );

        vk[16] = G1Point(
            14988255449888576466983686333725846498816266130898987208151466403609279975637,
            171153654716536684403810039714768984905610497645997537317020641135452111030
        );

        vk[17] = G1Point(
            4313051815878873447335298243871896526283302009812695687199895781635541219892,
            18022206114946361755183429638924181803457754841419074711392713576527324416177
        );

        vk[18] = G1Point(
            12596501053628393984644163774187853284269767174172592557301269012245428487146,
            21204447263079063745466366206201043101439752606465213007704313903164357344632
        );

        vk[19] = G1Point(
            4130034343055488361685767779382955857974023520998228920193364089842314664441,
            8542303792250873618267744068827215642358232542234575387855251882269356769896
        );

        vk[20] = G1Point(
            6874451393411262130192832783491921955806954538787269105471079063336949779335,
            6461933848170403547021264180029668962878963209941514169961510428223244909955
        );

        vk[21] = G1Point(
            14446083874196363503105045557966370866184469389586599702851903416345637521014,
            3794939657763066492124405264096579882646447937001202207430292939220594903055
        );

        vk[22] = G1Point(
            12619429072171004657585865286806128551255324771581379374115006053003312336296,
            19034585709515568979275882623176869138315316932867345905842355860246882800271
        );

        vk[23] = G1Point(
            9587228225561280563242073506877752354490385404177352841706335890979927900938,
            13956343537392811329003855132730055606205214193873442646494391935942884829436
        );

        vk[24] = G1Point(
            20101337934907004002377597083705994838193569275135806876517069383194438778874,
            11932388712951261352094258210650491031751658096692447547561800199948408982592
        );

        vk[25] = G1Point(
            4864969763814313389538966758485110878780529318576302874540654995999903361786,
            21172133458608732300887989383427281965171394293400317363673505108237404173045
        );

        vk[26] = G1Point(
            5598686200209475726801826209869416677931202133322427961462147150076924987454,
            12622619536843741987254461244719750638031901625031570099275218121269742818251
        );

        vk[27] = G1Point(
            14751187683369284974807198981066190747232275415561207627517237286483560910232,
            7370796989413051296003280586660709473139474321751039074813372431405031731783
        );

        vk[28] = G1Point(
            13373281139229644325143068039438096279917013863338833314623078167728933486768,
            18183063850705378508093406636734075337683851672731923707148837425651461022765
        );

        vk[29] = G1Point(
            14756358962228304251158891920353940748816049525067429607888240490682964727051,
            20018100238418134474422914328691582505033804481193180797273235391424655852304
        );

        vk[30] = G1Point(
            15050376363683056331420166772246738225621521672827061638572803333762939171137,
            6692324624851091562518331948429504853563070333909916418627744242683838734585
        );

        vk[31] = G1Point(
            14613643419505957778895147639592351129371688663085961967252736252082421938049,
            13492467422136441255221235571918205307022431482664045250662874767261956568072
        );

        vk[32] = G1Point(
            19272459865926252510534687364159235945661180836599787066322921201698318795509,
            16068412419077751339494815562144240543858490922842578066695430530869706287406
        );

        vk[33] = G1Point(
            14217590080649035438270780473813500271147838186437137302772374368155325056231,
            16845218990033720012206713315597881577890180135341475875645585510779182583901
        );

        vk[34] = G1Point(
            12766219689999522508596366817447705524383432762899487116849913496852028403974,
            4442617591051747505650488338566434480312793816520262764041789007779179988292
        );

        vk[35] = G1Point(
            2934784815494397384351742089802347731790762336685129985935528071559993822490,
            17880874099099888607726520043741004359341385182615919072159716670997697418122
        );

        vk[36] = G1Point(
            3091792813862966591589586900310729719569763521242154412799763578943493346092,
            12290890978553676777434435615322571862215959293936331080984908465327888047012
        );

        vk[37] = G1Point(
            13349543775207628424618511926556727231899969609146526061238742368888352486720,
            5003445500192377637035596053952244157270587264435908525609473486606154214324
        );

        vk[38] = G1Point(
            13632797795153659929604438391125254473547917060153457450906928983123223191377,
            5708656200864299430493302357901484790017620521269743632664850438879166816962
        );

        vk[39] = G1Point(
            21516403793437117639030947980477132855009778094943037156716379075978787390280,
            7868436334373748638648374668468765846000853203993087329280199600531049528370
        );

        vk[40] = G1Point(
            6770897784781928031867397130583859969297957667075284038692545903252609202431,
            12046473195834772553947525821743025778710598381179496030496587998620473788606
        );

        vk[41] = G1Point(
            5926176049559574560260760825415608508897247818185031118363669095436999505577,
            1284235126934163425152880230217201535104165367449041665405825230750579143459
        );

        vk[42] = G1Point(
            9814794488139713091910995228789191065371188268827695780345623170960847122387,
            15870155803409128348333957775616624227522281868352860278925895373376838711032
        );

        vk[43] = G1Point(
            630137277498399446981091669581474261039009945706701335506763273366672636179,
            13952577276779470095201114655417544637344887436927155806431990890918153197048
        );

        vk[44] = G1Point(
            15192807545573808832740581991479347066357485231283136831234600432486788338824,
            13336740193212789758417221190944155324475645844938488994636724314418921395651
        );

        vk[45] = G1Point(
            7607024848915044030666118805238957943725471764468897335573065792589070610525,
            18828486222218564947599361272642509130365988231349565397145165726730105380985
        );

        vk[46] = G1Point(
            19219088923309135511331143862756584023260991705388547107879751789238398902932,
            11840728000909187450200302908706078675043705326472195449253543077443288770765
        );

        vk[47] = G1Point(
            8198110311046717662168615086746414716008488843642178474166696280798054527609,
            18391623548971096033174898388145095550422306181038552191664535695479873494861
        );

        vk[48] = G1Point(
            20473324992097053080214599560787533368765381847626731312973518541012228935407,
            15139100058797500577596377412753454591078218415414562312861822286326595328626
        );

        vk[49] = G1Point(
            16690152730829129171363650035011230427014461803054035287014395891043858902305,
            5326966792817389284869617519600725784611480553007555807761966918896487799007
        );

        vk[50] = G1Point(
            18586810049419201902021421770909981604979205904450207333004106074319375484261,
            3000873763528382823704879922058832571060952569141847371705147067254092754708
        );

        vk[51] = G1Point(
            6160362872509440327488675888373254687689061222210050599850135296059225220090,
            11955733398559263911071101838295129900857283000260075168171477297818776773094
        );

        vk[52] = G1Point(
            14492156678394742115002689633313558714055091005636725204386661729651842287960,
            2980665139814186575079397395460047714146959917489383503315814677932929076799
        );

        vk[53] = G1Point(
            4437942380909227322513410180060012980958045771284745269897449720247874839689,
            7150494348880348053541326495332743092604904626956271535314626613514430993283
        );

        vk[54] = G1Point(
            10001482437609468168905690425834276810547626250526078900702957349563018037572,
            17014991335060100931663517391092589109560972962613182089256344856852776456399
        );

        vk[55] = G1Point(
            1146270991420408915157883757671063620180145253802196811286398183158315238637,
            6595381571366057179191301477376853660703424082291020709647253315873432708642
        );

        vk[56] = G1Point(
            2295778711541749139331688618938654319774844488123355539010336352804404868225,
            9038534441289298754730651091717232113184375524170344329410952166419901016636
        );

        vk[57] = G1Point(
            18030946263552418600342891101501630584358154999129913737473179136306653430480,
            10094754102441716302333922040785128796851364870659094529989236043049046754330
        );

        vk[58] = G1Point(
            20515540872993825885735721479173249600098405292336704804023475489580401026065,
            12815186508201140451186217899334134254620120042158973516233694480916914696934
        );

        vk[59] = G1Point(
            1804891765707908198689064720256107365408735953357075069394624098415344430470,
            4312888158987705375771863918381406338922739182806784141939327753721205636124
        );

        vk[60] = G1Point(
            16877448648938629336455970504682822004466354494832925338785741819796014329831,
            9004801518342253672610622229304283273598061572445418279279029358986672673
        );

        vk[61] = G1Point(
            11684773357441616204473407127066407940187405235118841266149422930304904671101,
            4601212052624124091208177291565916707049495386831211638013106687568736240760
        );

        vk[62] = G1Point(
            9200780553406884834747928192666944108171558035410990678489962416081866969139,
            245355479222183059321071080146375836278832602529335915498668060326748169409
        );

        vk[63] = G1Point(
            17193390511345077394677912937415581020324899967030747109811423759826062775250,
            14696937504671569536105740730959339419173196545590013576300751730484773918342
        );

        vk[64] = G1Point(
            8297139883987906366044974400932874460526844353137077214534106934254464947529,
            14639909594931070175367464867880176626775875179760782510898942522291894584639
        );

        vk[65] = G1Point(
            3609661837891552736040452521070929765605206776804107786039109126252989056239,
            10853920482510922842280129089725351153170312759841380539906217565931367896137
        );

        vk[66] = G1Point(
            7048912278298591433696726716891346726989208866324514786372956956644445635212,
            12157714004316966786418194782795130754506250999436816297735513634950158089609
        );

        vk[67] = G1Point(
            7237253195546107369268020076523471861310952350764543603629859106621717737743,
            19116693017681209184478944674814040872992816925296619469639887753314093264028
        );

        vk[68] = G1Point(
            820625138379551054125244647280563550681344648876046036596370519279935595980,
            15390303712492827323530771631892852471365986110637908851116363235496682208149
        );

        vk[69] = G1Point(
            8469123334208791102121090147866917462036787879068918118100650044571085670556,
            985411289560761222426587701260531417696603744604459001958487372203239838614
        );

        vk[70] = G1Point(
            13489859579431512566327338972385537701090240862822503025335968374670729750179,
            15995490443153950629132783532642148356156923684608642055029435450417126828716
        );

        vk[71] = G1Point(
            5025068258170967584974704925088363304406401089212153750732215881376591257673,
            246161595180469439871964180140987057585752496762790101427696426737962631903
        );

        vk[72] = G1Point(
            18624725444473222776113747225616131120503456023323493209399495423851291344464,
            9092973913660288900922543673887769243869708135622690978610355029219090242011
        );

        vk[73] = G1Point(
            21061649267559242832401893079341589206002708787277690534085280507837218231993,
            1900216925036373287933306987274284611233495151280539379320118154386310400384
        );

        vk[74] = G1Point(
            5693819266837633730481574793993745768266196474943094326515211680080687275556,
            8001442935407932010447890827128680450594583042442977582211611638286748616423
        );

        vk[75] = G1Point(
            9771493922794336654550195000151837133645846617865062117671322834447274876162,
            20138988792268648395724831202845132235993313594369643169024085972293417381258
        );

        vk[76] = G1Point(
            20562331451062703893881754168627416099192602113158327030049126971276681495286,
            9922952610656157940491441913447469115396311761440205415203273517602781900330
        );

        vk[77] = G1Point(
            1498434369431250451487086928778526427184171624524365632160766332094635168365,
            10944624617277440037922758627002938245363946650386133795299870996528247641094
        );

        vk[78] = G1Point(
            10832377128347608519203756448849245101957725856901326194321191013438270941056,
            7576992144586346969235891142502318009466716130788201106309475932341748663598
        );

        vk[79] = G1Point(
            5404747453972409299405410409234055146842412072217069882583020025356846653559,
            3428836275574699574063363434174092703696554190928235534549184825651458251596
        );

        vk[80] = G1Point(
            7255017254601736382654669268816814947260432488086305071618299686058285162223,
            388230518794721608401893790016913578404082517791606318989885831955879795517
        );

        vk[81] = G1Point(
            4274998285745241118487495635569318784037872516843008992484936039849104436969,
            14443139989460339019339671111544342047053107908892353590183300190419623712419
        );

        vk[82] = G1Point(
            21634128749231115557689347711533942752321658258117687994986298238533176713309,
            10098417356594951025541196814774222751252911748634174773868142001516047077280
        );

        vk[83] = G1Point(
            4046156447368671967831159377498153821361453924530371493710822968609325137996,
            18017858974683766542167316686978896501129877893451827180444219136119997531276
        );

        vk[84] = G1Point(
            21576662739301169631034067114295524106324010408122737616899507736956659368082,
            15549928284767128044386306983641879983650007657189247282820571281896321376047
        );

        vk[85] = G1Point(
            1406769679588655346791608544853221495318169507694271345467605886427526915690,
            3409297043583054603125408386307169121805510872604185290967931750429507053754
        );

        vk[86] = G1Point(
            18106931570945502786841144602374292011476307636057752946308260680847654343704,
            9791468742662328594521401814684679988434087939060398459565194697721566045579
        );

        vk[87] = G1Point(
            7380005378468683252627012582609447422016826052174902627743382133360819693854,
            20633054862281771907537793266045250094730636508212325524072161612808367803506
        );

        vk[88] = G1Point(
            21816007361916942614683383057256332048576032449298996257144182426645723007,
            10912910615005771985596617300532268853511005944312259503708390682977924203283
        );

        vk[89] = G1Point(
            12001517725790823506681311268316938140899443303693221917009913892717505376340,
            18733366505580458632546585000773545702151172407556419331157287281777465198385
        );

        vk[90] = G1Point(
            13038529351805911780242589893720599224800897313574636339730140424280318086809,
            604867398672054997877704956089885545998912635452415333991349902105952235548
        );

        vk[91] = G1Point(
            6965452184674160535858129493567304283978585666567675983356581787165057162793,
            8188904991803284378320034233479215172581458071883536673427260453562983768793
        );

        vk[92] = G1Point(
            7323426258562249761902177855323941542869198991480596258992292026005765690196,
            7734116018069009730025562122809887507597980452974169334081864598385477997973
        );

        vk[93] = G1Point(
            3572211610711428000486113151838078977403731645172584972748286662113382514432,
            18711593891651314440023504352017778245051448086570991878012325473969331338616
        );

        vk[94] = G1Point(
            7677036601374967423052162698241883162849333096754182212479474495752708964837,
            13798545013798901163002915143037261535691350570216409435910452728915409359004
        );

        vk[95] = G1Point(
            11732505988352344596120544927115732305075423591163239480525667528602339935516,
            4069380080273191891307429136149700368963445073424053925195989656180249274574
        );

        vk[96] = G1Point(
            12775129330581327799943466193674752419999697177743962446788076996471746889946,
            9836399901287341215772290431451579844703774446363508350054750538806344363660
        );

        vk[97] = G1Point(
            13659216341517969142512653259655976972352364397892462114225201467730133607513,
            10152067278164672036207642045055219013398144777524244506209490093573651971267
        );

        vk[98] = G1Point(
            14068442030322336486683798451946234901532576912811507447671823028446914239553,
            16568587289510253032355455503323159426432639802135247941810760160977485677894
        );

        vk[99] = G1Point(
            16069986319801270730475863882303863352160415869709497383777418777645617330791,
            18994036875310789539672950667776067654503953865260933343246227010190649423581
        );

        vk[100] = G1Point(
            753591038799143596501465994871794478010410947327974571148528957768253266557,
            19133326316177193676715715513949481761943512145445692809255783400361270511862
        );

    }
}
