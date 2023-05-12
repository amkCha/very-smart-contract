// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract Pairing100 {

    struct G1Point {
        uint X;
        uint Y;
    }

    G1Point[100] public vk;

    constructor() {
        vk[0] = G1Point(
            3913146479250333998622309518342179854776388675763500448325061276047871385028,
            185902641878167853786013541387769876019822308496137446718496175008088134965
        );

        vk[1] = G1Point(
            3066949056198555590635621162084363174762527476622332118327842035011606793952,
            2162571409210902214336812509672057078658587427403012932644293527850387519156
        );

        vk[2] = G1Point(
            8488790424014158852808006439223343295226971170088490706045068147193001550599,
            15533262107732603341702625683247434142241321708314454154455671678191112358883
        );

        vk[3] = G1Point(
            15498356887658237969202350156895359735754782519547024837768823850341320383276,
            18043358128034609114248819170759582834297009296355155153256975697104654277482
        );

        vk[4] = G1Point(
            6567029474530677569488194734194250250570285395463850727851121497011576634627,
            1952169722727701625695211431819915372584015014098667009341874426445277275409
        );

        vk[5] = G1Point(
            7983094460044061917184665751343846528917223973727668540609481601054516669380,
            13073411943223982722608981931194140929654969432838450821822380279373205694540
        );

        vk[6] = G1Point(
            6235254487603623311509594370074069771036715566675668423360562477653321213694,
            16348146029413394893095677470763579440263315501392573505110251361786086111748
        );

        vk[7] = G1Point(
            12126230703813379196905492399911032289157141882681249791742262746221956435664,
            21824357088719214382926551780637722669585190256191017503396653466603977666160
        );

        vk[8] = G1Point(
            10613712952540031218381119319419543617541815295229336208011689530011199688535,
            4592079294597931003139600470582401940650194077066693677222963213001984771652
        );

        vk[9] = G1Point(
            3911255295243246572381650626618017989180793092410038772879346029962164371222,
            20707153197739152432912301139550552920520579590641272006246634774964843219027
        );

        vk[10] = G1Point(
            11892500116628810223727210540182406632392016834847116628237108078905657482121,
            14711114067180791500399151644962712269552453743799493074158273490185336020392
        );

        vk[11] = G1Point(
            9183014413227020895002734499598490676394098841236386025615160839774137140858,
            9582865320358157815924266045220199184707642207541576610273447728638869402848
        );

        vk[12] = G1Point(
            13892435818247230557011116927971479775033781875296602336601976433383564563228,
            14733448935712935443414454397165120382231825236729361587040978447025752552981
        );

        vk[13] = G1Point(
            17401712645354510672876078146418383500681865058306486281552878566762375427257,
            20486073793183479284747068769667013438227637945205924637833865634902153972807
        );

        vk[14] = G1Point(
            12542945177566110147515483264178913219335969620393213829679296068703471654263,
            14507302716493402635132650456910109213791510706246873554623739152933578354782
        );

        vk[15] = G1Point(
            17262671835229452055040768758779568490937342065764654420598847161477754030825,
            8902971187566518627682001128928050354700036485645478563285262811824680312795
        );

        vk[16] = G1Point(
            2517092168115592419226866474026532297002849402135262172105829244870031873767,
            5441677800156144741677796942852428248886812324716256833812586939545360386553
        );

        vk[17] = G1Point(
            16352603512600688738155061629075068863201450829351196946082637536789820772324,
            18927273847130979134794259223289142814361248364229652488443571874192685947616
        );

        vk[18] = G1Point(
            2180973227235578788710927545110613481031038894649648025035535210348330223155,
            3507425497681887054666522686927478472275561239370715484736685279835745443493
        );

        vk[19] = G1Point(
            21060865790233599822231133344591416589146418696172581714008599651157654485577,
            11445704792629508009509530745672449871152458786577656651399880869793578183538
        );

        vk[20] = G1Point(
            14962922779924834333807088380732268106533627899319967840459394518301601944902,
            12641115320963479719774006201733593283460207791235448771211717531831128631986
        );

        vk[21] = G1Point(
            4186981001816470806980748781585918132583910335167314696545999009872429264973,
            17565855649932537025068269231075491026770085614015983747359821562568883706223
        );

        vk[22] = G1Point(
            16312170887333793475640777226722750017815511399203573224417188753987361268062,
            14942299556601867394310962262283413205020816495555982640061951999926073906170
        );

        vk[23] = G1Point(
            11116982558963830693347282315846967801531679296436746818272732121331724415720,
            5873619496054897441797349224362529314197498237479985364281745701741828890223
        );

        vk[24] = G1Point(
            7022610961304395808415740511844195116328680518742785550228915385939858023878,
            3136892863857862871481332688425068826979796665029750363309374645841360217432
        );

        vk[25] = G1Point(
            8157557205265774407360029054875726935492541606165132860923411819480266205728,
            81012924889287601351558230557166415960328857029602316655253741163216562264
        );

        vk[26] = G1Point(
            21387183076392014337790811106800278834050500139493358334136872383128902568974,
            7314778968936160478301679546290108816508132795495073939210992055620514882950
        );

        vk[27] = G1Point(
            17445370062398000783311321822998675262681592534816043788545673331055581981338,
            4675382597784294729649795567482785231305950693131859255309513051178177175147
        );

        vk[28] = G1Point(
            2098486770907856191452018054264372066670081881036141132191766235747034517957,
            1815216053155211776578165772337605223514474799477706574780357340295527292101
        );

        vk[29] = G1Point(
            7247597047636474744927667131995247170347121112158565895891458041517309296389,
            192163179728062470503970372632568808101844243963511753219985601280107313588
        );

        vk[30] = G1Point(
            9501203604906811513710929504005271216818701558451549918406058132625156622140,
            13415551798489062914081927666384545099868303281595275344663896205914217872078
        );

        vk[31] = G1Point(
            8034595547439438515257075919781050926864947386461328816426271763205695561810,
            3642829052524533022920002316425451318885679003862750085869559319724420881642
        );

        vk[32] = G1Point(
            7389684095037929207631024101452345138987391705473424971516979116156341370031,
            20579346475224820747653673571292546222054464762132703448050660242437987760856
        );

        vk[33] = G1Point(
            1099064042522969917142691337028490131971642761995798870015264529977810129874,
            4136739376632161133724827833970087000788767831702190026854456646968400813758
        );

        vk[34] = G1Point(
            15902640373161477583518974310718417505509060791924961343157477459642931778416,
            1762478943943949736546872517381831620025398511173518621074233342446251355911
        );

        vk[35] = G1Point(
            9487596420461016268451980893550096361069347323138723495572679418046046688516,
            21544892836467812510793690303334485681390117717928076905731274778121908775623
        );

        vk[36] = G1Point(
            5820742566388270780628696340911428355864552004252479310278041095949430795376,
            7641545445878583943991373750714475758318324289158901278777701540735262273286
        );

        vk[37] = G1Point(
            12251320072812281522145414395832737970348394787433255591714150097089431407791,
            1532779231870484091585282548681946168911463262567902797320995702737440600730
        );

        vk[38] = G1Point(
            10101613659948566217818739071435123184975710593253921139345225712243031098260,
            2640636367314325922533248149727739621985364283675597424474610904727340867587
        );

        vk[39] = G1Point(
            5274085047519363354811875262114176759943519780130758450894988285688729358933,
            16937296383981904953674801963392439007888700172373626045529133960039399617263
        );

        vk[40] = G1Point(
            3188599184332565193899369748973079401161586075804055427027494260172731823565,
            12968148658083523222968587586141447230993399408675687327780669641109440554181
        );

        vk[41] = G1Point(
            6458679214833537132762167352491386830890325825067568504280547744045616578060,
            18468430467927738997242809956404712244666634410317213833141099954108019752365
        );

        vk[42] = G1Point(
            20623060804426468927294862308817315019265876115430041233840695215686630451173,
            17087264238689414062897963203925434079076282890481053770322544570572170791084
        );

        vk[43] = G1Point(
            13325627203350085472814451732459661888038862533482320269567426702823739329985,
            15776877746534956413446522278166863682458481282527146558228748205100102572752
        );

        vk[44] = G1Point(
            21668441582737826762284872544546266101011979954395973562059583274610785704512,
            8277583852037002978546735597203532757285123793571816105035644796689659489126
        );

        vk[45] = G1Point(
            8536734248796214979017755496101738844563999731454217385048880639936148506055,
            20050543179037705575872012681412619075809416420502779193387785187983159802429
        );

        vk[46] = G1Point(
            11953986823633174213575339280604577641359038793605491295923798560589727371956,
            13147634485185373963488944552653926289625401157498385879547759582230194995039
        );

        vk[47] = G1Point(
            1550712004197774641075033256835604628352158352713007226217725635275012226118,
            11203299551088982147798422942849790450362141843828509216540844403325585105151
        );

        vk[48] = G1Point(
            18196271432499014695041842961836011055301353978784919923839413819261319730858,
            17098246883967118308242007705459913729702320623322185243317557342538873073008
        );

        vk[49] = G1Point(
            11531116823867493145527748839530207312938155107914319337102872641313100242222,
            2697631011753785502387459101482062165916413038880404121649035963091673433064
        );

        vk[50] = G1Point(
            19631156064522474229619641610560117574796667466539324323824988031144145984381,
            8937425392860060539170803423572257992722753021855554898593023194915230583803
        );

        vk[51] = G1Point(
            18051666508329012801246216448195697328672943604860514259327889529692653255003,
            9776962899569029336118636701542682706337611353719012721741705378235920461022
        );

        vk[52] = G1Point(
            11475939723265162413789647159385731316378041455196431353866586443244485875960,
            19711286708431892260060507102028877127791309206835055077147368871237918812844
        );

        vk[53] = G1Point(
            11026344553624187160806030841924275695941597805136178910833830083155671710696,
            17162259106859976824562173306587249703506336000572176722780992931150003382282
        );

        vk[54] = G1Point(
            18072014661614829050905335947561719081371194373328681685188989976710752519958,
            1048774928195049223435951979787210247304656815367952815402170340291203327793
        );

        vk[55] = G1Point(
            3221143767918066976906625234268647838438505710085915094550693082136124954378,
            10609209382910755371095430847148428568017844178029295267934890570954490604373
        );

        vk[56] = G1Point(
            18603265763099527508808162560935573442394246009812715067853557618675227114718,
            11587922405411678536596695952166816873905254266295729425002776504155871866385
        );

        vk[57] = G1Point(
            10114761011080890155283117352096466322084587359113823233655131129809908439285,
            5508807755576750114007448677480215198205054512071101691922034235838061098992
        );

        vk[58] = G1Point(
            9473224577697192182393997942482349654852015982345608217160238854137662694850,
            5232619463453481364828566196626075235351370331947090314816487540777930815749
        );

        vk[59] = G1Point(
            5828405670751893034234121115192004049259338974472201883856438484025352454589,
            3633323324079227154005083110521782808490892738558883105373813514476535351512
        );

        vk[60] = G1Point(
            9481001625234164910092417433822014284864981517603152850384837599413333732088,
            18386678173060928637493215959625252441776561544797402448843069753038309706398
        );

        vk[61] = G1Point(
            364501025358600818780755326403010729029463316682362019677778479288396511819,
            10921245151415767613656441640218247912049165999046837003614440575555392502991
        );

        vk[62] = G1Point(
            7412432117223787136546267187474701163839580784868897752482245004405373487816,
            14421834339860903299006524733412603591618190844451037914060151606872119869654
        );

        vk[63] = G1Point(
            6758356448748273679612068112965369625648505132685375942552567389525551794313,
            18898694627951555492949080550455672542650697400113643917079813065361088117351
        );

        vk[64] = G1Point(
            2232426915296748097728380112764112830256664229981443467879391402850835961005,
            17886990959858849028776727028779317010658807731479716471554709099443198391877
        );

        vk[65] = G1Point(
            19386684389754528007206697728725486021492582825389320018808101756896486223763,
            5387944841171208361896631485654248835440117619070885391004123093753703767533
        );

        vk[66] = G1Point(
            12647065993168520043526182937209775921405750220974685444664551951358272974493,
            13366972599313287188896739755647120252951756955470758833728145978865191885332
        );

        vk[67] = G1Point(
            18787943133831207667822354828276073727409268368355483818755165180933524613843,
            14157388513572656930506703772013995574294570155316280419904839453909945513212
        );

        vk[68] = G1Point(
            21524068563373174125502750466662633697416975469194703149213549758771064143806,
            19330633973479566265383470717707159202647232323953472749583165647656210689772
        );

        vk[69] = G1Point(
            18382902852942323899973219125400009598490102054273518026407333530852107135564,
            5587556133767484044476916396039091505022130703765554879534031897599284695340
        );

        vk[70] = G1Point(
            9606930799644572048804158116652707177514237680732063560098981656270261037968,
            5136249659645845922930624684319684098674157523379969261653636459876902241146
        );

        vk[71] = G1Point(
            13552542113314993893290710085750912895320123663026256826131125947307038096408,
            709273112699884026311409013166059830376072517342412739277236776866334978888
        );

        vk[72] = G1Point(
            4877695026492837904576447514487946170274766503110664007065051006317417028911,
            9446076080426295446536293256688999725548133948518312450170562478729416816073
        );

        vk[73] = G1Point(
            7745407439919264073462666166103574869059650004645099967253653215503500518730,
            8958000654601464310040236040720076000298815451674171928370656192395821571291
        );

        vk[74] = G1Point(
            18666320048773366090983312937110187453777592458193442257099376708416358364469,
            5539513286001813732779693880109891933912857627313433936315887072372257898800
        );

        vk[75] = G1Point(
            17762000693904052174149226238971528607238820505142737089093305569141218095604,
            21813189192876658164580671884381389056637414147229002438166607672106061685075
        );

        vk[76] = G1Point(
            10620403668573083681678811832492214395842703160132031753632193443445132940858,
            9287214924394327270674892448424295944430582227602780738386553108169870248604
        );

        vk[77] = G1Point(
            3225723314799122490693549255900886936628936604463053909144327405767083517367,
            13296795156783832061321769403471090730204694557283869635175430523261252422880
        );

        vk[78] = G1Point(
            19394283269851765166190520453710260933464736369229146491483414402572036649235,
            8886347394143457971098959915862183096606640244332501467928584161268657741540
        );

        vk[79] = G1Point(
            11211101631546988901713127520653099409246632641328196192389635621453268719604,
            7533450628229590941864952327666728681554006380658922550113985739199255638676
        );

        vk[80] = G1Point(
            20281375053270705107000390143308705274685813353750898370539071869251555616918,
            4191504470134081448832429650265903916036318956937686405591767766612018536246
        );

        vk[81] = G1Point(
            21730429297217903457297617624317163698633779108372279268294203214963841239599,
            3455168649241599958364434680402533707717293629319160914142901270957667623322
        );

        vk[82] = G1Point(
            3733487430670068762717150810067800653321114341709315796018436370189955345854,
            16993516290835476757984075812093517551647545212347461054793061694546089118405
        );

        vk[83] = G1Point(
            4069347453305835841899489561884027971507987034637139177752057964697523071884,
            1956678427081338497880770997396896779466225278969197692269889397339747587977
        );

        vk[84] = G1Point(
            12688563169962246380429505363810909719278960011517597178276847596058759674530,
            2927641600345355068914853681494591852216028218422911788003225244122043842764
        );

        vk[85] = G1Point(
            4455557144275882809490589083576310491054371424484637119621439376441819761829,
            9731487948258565288497893143140566785594886936141150696674322531881129525085
        );

        vk[86] = G1Point(
            2619477629022801354541827825039395847140273659251589045546247153678969401001,
            17836540777608540858002712754656630392833096079100756487601556239085848528635
        );

        vk[87] = G1Point(
            17062191534864932254047439130752387946329235277076184342923625213771678836935,
            12069527596907551270256200398919523423277992112424100276678513119084727281716
        );

        vk[88] = G1Point(
            16805402258218753489165124144746360879274608960953677668700957483879628729815,
            10410789682524022432691807145340097146023648177608444718821101447661767567785
        );

        vk[89] = G1Point(
            8008007635828919944721498889155253916141351807179483997112773450223661089031,
            3056216602318722957626231548277738119817129937156384969718806681210818813385
        );

        vk[90] = G1Point(
            17667744232917991611151306720567572212556922769873510455013405323308378680476,
            2890516289406621384766044747643579791042650014890801167964314867977213603626
        );

        vk[91] = G1Point(
            3143780756554946361446807874127330304332880216504691698401282667783892825765,
            5028022739746074390415051300734944677415023517308139648614267686230087830490
        );

        vk[92] = G1Point(
            4441632139452511774754687310993428522463840333562308532916275348517874568273,
            3805657638938374125360055067937180653723886063939263403849322700999001648464
        );

        vk[93] = G1Point(
            3013746618735534923159878225091501634239528953276121826823488677950608530535,
            13303028874453780721063879979526033805375485792805017809758536559366914354384
        );

        vk[94] = G1Point(
            147897481815608548178330421825812162733090109575127779417863797051852392003,
            8640707092187677945028587417279452926189344446161983387648630388517595059973
        );

        vk[95] = G1Point(
            2577256613690079498068095765293720593058588557523481248270938666627067239265,
            557967286957109878996836148405729465277762109969903801336199294077387543421
        );

        vk[96] = G1Point(
            8686488647634619838672230770846132946046686268388456771190560796889050807187,
            9655938106080828371789874989347293139151622023273311610492266716485237742652
        );

        vk[97] = G1Point(
            16599968643048917866313339039047045832907766174850659964114094763810732985169,
            12352676869643809540552538084233558931904841866746829566346313116816615110547
        );

        vk[98] = G1Point(
            9267573706827759556576977525684723234253097476251745496874796559184732114237,
            19587468868070611863092114139198146359967042685205673652032650844827081496187
        );

        vk[99] = G1Point(
            11705191676975146315944183303161754911767575431964910047638549236413625571714,
            8095106176974497014713170771085910822558210350216200986553411154835804708953
        );
    }
}
