const quizData = [
  // 8과
  { lesson: 8, chinese: "沙发", pinyin: "shāfā", meaning: "소파" },
  { lesson: 8, chinese: "抽", pinyin: "chōu", meaning: "(담배를) 피우다" },
  { lesson: 8, chinese: "活儿", pinyin: "huór", meaning: "일" },
  { lesson: 8, chinese: "气", pinyin: "qì", meaning: "성내다, 화내다" },
  { lesson: 8, chinese: "批评", pinyin: "pīpíng", meaning: "비평하다, 꾸짖다" },
  { lesson: 8, chinese: "社会", pinyin: "shèhuì", meaning: "사회" },
  { lesson: 8, chinese: "平等", pinyin: "píngděng", meaning: "평등, 평등하다" },
  { lesson: 8, chinese: "模范", pinyin: "mófàn", meaning: "모범, 모범적이다" },
  { lesson: 8, chinese: "改变", pinyin: "gǎibiàn", meaning: "변하다, 바꾸다" },
  { lesson: 8, chinese: "认错", pinyin: "rèncuò", meaning: "잘못을 인정하다" },
  { lesson: 8, chinese: "今后", pinyin: "jīnhòu", meaning: "이제부터, 앞으로" },
  { lesson: 8, chinese: "家务", pinyin: "jiāwù", meaning: "집안일, 가사" },
  { lesson: 8, chinese: "劝", pinyin: "quàn", meaning: "권하다, 중재하다" },
  { lesson: 8, chinese: "表现", pinyin: "biǎoxiàn", meaning: "표현하다, 태도, 모습" },
  { lesson: 8, chinese: "演讲", pinyin: "yǎnjiǎng", meaning: "강연, 연설" },
  { lesson: 8, chinese: "题目", pinyin: "tímù", meaning: "제목, 문제" },
  { lesson: 8, chinese: "复杂", pinyin: "fùzá", meaning: "복잡하다" },
  { lesson: 8, chinese: "到处", pinyin: "dàochù", meaning: "도처, 곳곳" },
  { lesson: 8, chinese: "连", pinyin: "lián", meaning: "~조차도 / 连～也" },
  { lesson: 8, chinese: "男人", pinyin: "nánrén", meaning: "남자" },
  { lesson: 8, chinese: "认为", pinyin: "rènwéi", meaning: "여기다, 생각하다" },
  { lesson: 8, chinese: "特点", pinyin: "tèdiǎn", meaning: "특징" },

  // 9과
  { lesson: 9, chinese: "纸", pinyin: "zhǐ", meaning: "종이" },
  { lesson: 9, chinese: "笔", pinyin: "bǐ", meaning: "필기구, 펜" },
  { lesson: 9, chinese: "经理", pinyin: "jīnglǐ", meaning: "사장, 매니저" },
  { lesson: 9, chinese: "秘书", pinyin: "mìshū", meaning: "비서" },
  { lesson: 9, chinese: "报纸", pinyin: "bàozhǐ", meaning: "신문" },
  { lesson: 9, chinese: "贵", pinyin: "guì", meaning: "귀한, 귀사의/귀하의" },
  { lesson: 9, chinese: "客人", pinyin: "kèrén", meaning: "손님" },
  { lesson: 9, chinese: "参观", pinyin: "cānguān", meaning: "참관하다, 견학하다" },
  { lesson: 9, chinese: "简历", pinyin: "jiǎnlì", meaning: "이력서" },
  { lesson: 9, chinese: "证明", pinyin: "zhèngmíng", meaning: "증명하다, 증명" },
  { lesson: 9, chinese: "毕业证", pinyin: "bìyèzhèng", meaning: "졸업증서" },
  { lesson: 9, chinese: "件", pinyin: "jiàn", meaning: "건, 개(서류를 세는 단위)" },
  { lesson: 9, chinese: "发展", pinyin: "fāzhǎn", meaning: "발전하다" },
  { lesson: 9, chinese: "前途", pinyin: "qiántú", meaning: "전망, 앞날" },
  { lesson: 9, chinese: "能力", pinyin: "nénglì", meaning: "능력" },
  { lesson: 9, chinese: "技术", pinyin: "jìshù", meaning: "기술" },
  { lesson: 9, chinese: "增加", pinyin: "zēngjiā", meaning: "증가하다" },
  { lesson: 9, chinese: "收入", pinyin: "shōurù", meaning: "수입" },
  { lesson: 9, chinese: "面试", pinyin: "miànshì", meaning: "면접을 치르다, 면접" },
  { lesson: 9, chinese: "通知", pinyin: "tōngzhī", meaning: "통지하다, 알리다" },
  { lesson: 9, chinese: "招", pinyin: "zhāo", meaning: "모집하다" },
  { lesson: 9, chinese: "其中", pinyin: "qízhōng", meaning: "그중" },
  { lesson: 9, chinese: "印象", pinyin: "yìnxiàng", meaning: "인상" },
  { lesson: 9, chinese: "年龄", pinyin: "niánlíng", meaning: "나이, 연령" },
  { lesson: 9, chinese: "比较", pinyin: "bǐjiào", meaning: "비교적" },
  { lesson: 9, chinese: "熟悉", pinyin: "shúxī", meaning: "익숙하다, 잘 알다" },
  { lesson: 9, chinese: "负责", pinyin: "fùzé", meaning: "책임지다, 책임감이 있다" },
  { lesson: 9, chinese: "提高", pinyin: "tígāo", meaning: "향상시키다, 높이다" },

  // 10과
  { lesson: 10, chinese: "喜糖", pinyin: "xǐtáng", meaning: "결혼 사탕" },
  { lesson: 10, chinese: "喜事", pinyin: "xǐshì", meaning: "경사, 기쁜 일" },
  { lesson: 10, chinese: "喜酒", pinyin: "xǐjiǔ", meaning: "결혼 축하주" },
  { lesson: 10, chinese: "新娘", pinyin: "xīnniáng", meaning: "신부" },
  { lesson: 10, chinese: "怪不得", pinyin: "guàibude", meaning: "과연, 그러기에, 어쩐지" },
  { lesson: 10, chinese: "新郎", pinyin: "xīnláng", meaning: "신랑" },
  { lesson: 10, chinese: "浪漫", pinyin: "làngmàn", meaning: "낭만적이다" },
  { lesson: 10, chinese: "婚礼", pinyin: "hūnlǐ", meaning: "결혼식, 혼례" },
  { lesson: 10, chinese: "日子", pinyin: "rìzi", meaning: "날짜" },
  { lesson: 10, chinese: "顺", pinyin: "shùn", meaning: "순조롭다" },
  { lesson: 10, chinese: "举", pinyin: "jǔ", meaning: "들다" },
  { lesson: 10, chinese: "干杯", pinyin: "gānbēi", meaning: "건배하다" },
  { lesson: 10, chinese: "拜", pinyin: "bài", meaning: "절하다" },
  { lesson: 10, chinese: "恋爱", pinyin: "liàn’ài", meaning: "연애하다, 연애" },
  { lesson: 10, chinese: "经过", pinyin: "jīngguò", meaning: "경험하다, 과정, 경과" },
  { lesson: 10, chinese: "补充", pinyin: "bǔchōng", meaning: "보충하다" },
  { lesson: 10, chinese: "同班同学", pinyin: "tóngbān tóngxué", meaning: "동급생, 같은 반 학우" },
  { lesson: 10, chinese: "突然", pinyin: "tūrán", meaning: "갑자기" },
  { lesson: 10, chinese: "故事", pinyin: "gùshi", meaning: "이야기" },
  { lesson: 10, chinese: "精彩", pinyin: "jīngcǎi", meaning: "훌륭하다, 뛰어나다" },
  { lesson: 10, chinese: "和美", pinyin: "héměi", meaning: "사이가 좋다, 화목하다" },
  { lesson: 10, chinese: "白头到老", pinyin: "bái tóu dào lǎo", meaning: "백년해로하다" },
  { lesson: 10, chinese: "白头偕老", pinyin: "bái tóu xié lǎo", meaning: "백년해로하다" },

  // 11과
  { lesson: 11, chinese: "拿……来说", pinyin: "ná……lái shuō", meaning: "~으로 말하자면, ~의 경우에는" },
  { lesson: 11, chinese: "主要", pinyin: "zhǔyào", meaning: "주로, 주요하다" },
  { lesson: 11, chinese: "电视剧", pinyin: "diànshìjù", meaning: "드라마" },
  { lesson: 11, chinese: "集", pinyin: "jí", meaning: "회, 편" },
  { lesson: 11, chinese: "退休", pinyin: "tuìxiū", meaning: "은퇴하다" },
  { lesson: 11, chinese: "打", pinyin: "dǎ", meaning: "마작, 트럼프 따위를 하다" },
  { lesson: 11, chinese: "牌", pinyin: "pái", meaning: "카드" },
  { lesson: 11, chinese: "麻将", pinyin: "májiàng", meaning: "마작" },
  { lesson: 11, chinese: "教师", pinyin: "jiàoshī", meaning: "교사" },
  { lesson: 11, chinese: "备课", pinyin: "bèi kè", meaning: "교사가 수업을 준비하다" },
  { lesson: 11, chinese: "其他", pinyin: "qítā", meaning: "기타, 다른" },
  { lesson: 11, chinese: "下载", pinyin: "xiàzài", meaning: "다운로드하다" },
  { lesson: 11, chinese: "难道", pinyin: "nándào", meaning: "설마 ~하겠는가?" },
  { lesson: 11, chinese: "歌曲", pinyin: "gēqǔ", meaning: "노래" },
  { lesson: 11, chinese: "奇怪", pinyin: "qíguài", meaning: "이상하다, 의아하다" },
  { lesson: 11, chinese: "相同", pinyin: "xiāngtóng", meaning: "똑같다, 서로 같다" },
  { lesson: 11, chinese: "厨房", pinyin: "chúfáng", meaning: "주방" },
  { lesson: 11, chinese: "书房", pinyin: "shūfáng", meaning: "서재" },
  { lesson: 11, chinese: "静", pinyin: "jìng", meaning: "조용하다, 고요하다" },
  { lesson: 11, chinese: "科学", pinyin: "kēxué", meaning: "과학적이다, 과학" },
  { lesson: 11, chinese: "晒", pinyin: "shài", meaning: "햇볕을 쬐다" },
  { lesson: 11, chinese: "阳台", pinyin: "yángtái", meaning: "베란다, 발코니" },

  // 12과
  { lesson: 12, chinese: "建议", pinyin: "jiànyì", meaning: "제안하다, 건의하다" },
  { lesson: 12, chinese: "自助餐", pinyin: "zìzhùcān", meaning: "뷔페" },
  { lesson: 12, chinese: "葡萄酒", pinyin: "pútáojiǔ", meaning: "와인, 포도주" },
  { lesson: 12, chinese: "白酒", pinyin: "báijiǔ", meaning: "바이주, 중국식 증류주" },
  { lesson: 12, chinese: "醉", pinyin: "zuì", meaning: "취하다" },
  { lesson: 12, chinese: "减肥", pinyin: "jiǎnféi", meaning: "다이어트하다, 살을 빼다" },
  { lesson: 12, chinese: "笑话", pinyin: "xiàohua", meaning: "비웃다, 웃음거리" },
  { lesson: 12, chinese: "身材", pinyin: "shēncái", meaning: "체격, 몸매" },
  { lesson: 12, chinese: "口福", pinyin: "kǒufú", meaning: "먹을 복" },
  { lesson: 12, chinese: "强", pinyin: "qiáng", meaning: "강하다, 낫다, 더 좋다" },
  { lesson: 12, chinese: "坚持", pinyin: "jiānchí", meaning: "견지하다, 꾸준히 계속하다" },
  { lesson: 12, chinese: "饮食", pinyin: "yǐnshí", meaning: "음식, 식생활" },
  { lesson: 12, chinese: "中餐", pinyin: "Zhōngcān", meaning: "중국 음식" },
  { lesson: 12, chinese: "非……不可", pinyin: "fēi……bùkě", meaning: "반드시 ~해야 한다" },
  { lesson: 12, chinese: "刀", pinyin: "dāo", meaning: "칼, 나이프" },
  { lesson: 12, chinese: "叉", pinyin: "chā", meaning: "포크" },
  { lesson: 12, chinese: "左手", pinyin: "zuǒshǒu", meaning: "왼손" },
  { lesson: 12, chinese: "右手", pinyin: "yòushǒu", meaning: "오른손" },
  { lesson: 12, chinese: "切", pinyin: "qiē", meaning: "썰다, 자르다" },
  { lesson: 12, chinese: "鸡", pinyin: "jī", meaning: "닭" },
  { lesson: 12, chinese: "面条儿", pinyin: "miàntiáor", meaning: "면, 국수" },
  { lesson: 12, chinese: "筷子", pinyin: "kuàizi", meaning: "젓가락" },
  { lesson: 12, chinese: "冰箱", pinyin: "bīngxiāng", meaning: "냉장고" },
  { lesson: 12, chinese: "牛奶", pinyin: "niúnǎi", meaning: "우유" },
  { lesson: 12, chinese: "果汁", pinyin: "guǒzhī", meaning: "과일 주스" },
  { lesson: 12, chinese: "豆浆", pinyin: "dòujiāng", meaning: "더우장, 콩 음료" },
  { lesson: 12, chinese: "油条", pinyin: "yóutiáo", meaning: "여우탸오, 기름에 튀긴 음식" }
];
const sentenceData = [
   {
    lesson: 8,
    chinese: "你今天怎么也回来晚了?",
    pinyin: "Nǐ jīntiān zěnme yě huílai wǎn le?",
    meaning: "당신 오늘 왜 이렇게 늦게 돌아왔어요?",
    words: ["你", "今天", "怎么", "也", "回来", "晚", "了"]
  },
  {
    lesson: 8,
    chinese: "我来跟你一起做饭吧。",
    pinyin: "Wǒ lái gēn nǐ yìqǐ zuòfàn ba.",
    meaning: "내가 같이 식사 준비할게요.",
    words: ["我", "来", "跟", "你", "一起", "做饭", "吧"]
  },
  {
    lesson: 8,
    chinese: "回来得并不晚，到楼上张师傅家坐了会儿。",
    pinyin: "Huílai de bìng bù wǎn, dào lóushàng Zhāng shīfu jiā zuò le huìr.",
    meaning: "전혀 늦지 않게 왔는데, 윗층 장 사부님 댁에 잠깐 앉아 있다 왔어요.",
    words: ["回来得", "并不", "晚", "到", "楼上", "张师傅家", "坐了", "会儿"]
  },
  {
    lesson: 8,
    chinese: "他们家又吵架了。",
    pinyin: "Tāmen jiā yòu chǎojià le.",
    meaning: "그 집 또 싸웠어요.",
    words: ["他们家", "又", "吵架", "了"]
  },
  {
    lesson: 8,
    chinese: "他们为什么又吵了?",
    pinyin: "Tāmen wèishénme yòu chǎo le?",
    meaning: "왜 또 싸웠대요?",
    words: ["他们", "为什么", "又", "吵", "了"]
  },
  {
    lesson: 8,
    chinese: "张师傅一回家就躺在沙发上，边看电视边抽烟。",
    pinyin: "Zhāng shīfu yì huí jiā jiù tǎng zài shāfā shàng, biān kàn diànshì biān chōuyān.",
    meaning: "장 씨는 집에 오자마자 소파에 누워 TV를 보면서 담배를 펴요.",
    words: ["张师傅", "一", "回家", "就", "躺在", "沙发上", "边", "看电视", "边", "抽烟"]
  },
  {
    lesson: 8,
    chinese: "他爱人下了班，又洗菜又做饭。",
    pinyin: "Tā àiren xià le bān, yòu xǐ cài yòu zuòfàn.",
    meaning: "그의 부인은 퇴근하고 와서 채소도 씻고 밥도 해요.",
    words: ["他爱人", "下了班", "又", "洗菜", "又", "做饭"]
  },
  {
    lesson: 8,
    chinese: "张师傅一点儿忙也不帮。",
    pinyin: "Zhāng shīfu yìdiǎnr máng yě bù bāng.",
    meaning: "장 씨는 조금도 도와주지 않아요.",
    words: ["张师傅", "一点儿", "忙", "也", "不", "帮"]
  },
  {
    lesson: 8,
    chinese: "这就是张师傅不对了。",
    pinyin: "Zhè jiù shì Zhāng shīfu bú duì le.",
    meaning: "이건 장 씨가 잘못했네요.",
    words: ["这", "就是", "张师傅", "不对", "了"]
  },
  {
    lesson: 8,
    chinese: "两个人都上了一天的班，都挺累的，回到家，怎么能光让一个人干活儿呢?",
    pinyin: "Liǎng ge rén dōu shàng le yì tiān de bān, dōu tǐng lèi de, huí dào jiā, zěnme néng guāng ràng yí ge rén gàn huór ne?",
    meaning: "두 사람 다 하루 종일 일해서 피곤할 텐데, 집에 돌아와서 어떻게 한 사람만 일하게 할 수 있겠어요?",
    words: ["两个人", "都", "上了", "一天的班", "都", "挺累的", "回到家", "怎么能", "光", "让", "一个人", "干活儿", "呢"]
  },
  {
    lesson: 8,
    chinese: "他爱人叫张师傅帮着一起做，张师傅不做，结果把他爱人气哭了。",
    pinyin: "Tā àiren jiào Zhāng shīfu bāngzhe yìqǐ zuò, Zhāng shīfu bú zuò, jiéguǒ bǎ tā àiren qì kū le.",
    meaning: "아내가 장 씨에게 같이 하자고 했는데 장 씨가 안 해서, 결국 아내를 화나게 해서 울렸어요.",
    words: ["他爱人", "叫", "张师傅", "帮着", "一起", "做", "张师傅", "不", "做", "结果", "把", "他爱人", "气哭", "了"]
  },
  {
    lesson: 8,
    chinese: "现在两个人怎么样了?",
    pinyin: "Xiànzài liǎng ge rén zěnmeyàng le?",
    meaning: "지금 두 사람은 어때요?",
    words: ["现在", "两个人", "怎么样", "了"]
  },
  {
    lesson: 8,
    chinese: "我批评了张师傅，给他讲了男女在社会上要平等，在家庭中也要平等。",
    pinyin: "Wǒ pīpíng le Zhāng shīfu, gěi tā jiǎng le nánnǚ zài shèhuì shàng yào píngděng, zài jiātíng zhōng yě yào píngděng.",
    meaning: "내가 장 씨를 꾸짖고, 남녀는 사회에서도 평등해야 하고 가정에서도 평등해야 한다고 말해 줬어요.",
    words: ["我", "批评了", "张师傅", "给", "他", "讲了", "男女", "在", "社会上", "要", "平等", "在", "家庭中", "也", "要", "平等"]
  },
  {
    lesson: 8,
    chinese: "又把咱们俩的经验介绍了一下儿。",
    pinyin: "Yòu bǎ zánmen liǎ de jīngyàn jièshào le yíxiàr.",
    meaning: "그리고 우리 둘의 경험도 좀 소개해 줬어요.",
    words: ["又", "把", "咱们俩的", "经验", "介绍了", "一下儿"]
  },
  {
    lesson: 8,
    chinese: "你没向他们夸夸我这个模范丈夫?",
    pinyin: "Nǐ méi xiàng tāmen kuākua wǒ zhège mófàn zhàngfu?",
    meaning: "당신, 그들에게 모범 남편인 나를 좀 칭찬하지 않았어요?",
    words: ["你", "没", "向", "他们", "夸夸", "我", "这个", "模范丈夫"]
  },
  {
    lesson: 8,
    chinese: "正因为我夸了你，张师傅才改变了态度，向他爱人认了错，两个人一起高高兴兴地做了一顿饭。",
    pinyin: "Zhèng yīnwèi wǒ kuā le nǐ, Zhāng shīfu cái gǎibiàn le tàidu, xiàng tā àiren rèn le cuò, liǎng ge rén yìqǐ gāogāoxìngxìng de zuò le yí dùn fàn.",
    meaning: "바로 내가 당신을 칭찬했기 때문에 장 씨가 태도를 바꾸고, 아내에게 잘못을 인정하고, 두 사람이 즐겁게 함께 한 끼를 만들었어요.",
    words: ["正因为", "我", "夸了", "你", "张师傅", "才", "改变了", "态度", "向", "他爱人", "认了错", "两个人", "一起", "高高兴兴地", "做了", "一顿饭"]
  },
  {
    lesson: 8,
    chinese: "希望他们俩今后再也不因为做家务的事吵架了。",
    pinyin: "Xīwàng tāmen liǎ jīnhòu zàiyě bù yīnwèi zuò jiāwù de shì chǎojià le.",
    meaning: "앞으로 그들이 다시는 집안일 하는 문제로 싸우지 않았으면 좋겠네요.",
    words: ["希望", "他们俩", "今后", "再也", "不", "因为", "做家务的事", "吵架", "了"]
  },
  {
    lesson: 8,
    chinese: "你劝架劝得不错嘛!",
    pinyin: "Nǐ quànjià quàn de búcuò ma!",
    meaning: "당신 아주 중재를 잘했네요!",
    words: ["你", "劝架", "劝得", "不错", "嘛"]
  },
  {
    lesson: 8,
    chinese: "你把咱们俩刚结婚时我的表现也告诉他们了?",
    pinyin: "Nǐ bǎ zánmen liǎ gāng jiéhūn shí wǒ de biǎoxiàn yě gàosu tāmen le?",
    meaning: "당신, 우리가 막 결혼했을 때 내 모습도 그들에게 말해 줬어요?",
    words: ["你", "把", "咱们俩", "刚结婚时", "我的", "表现", "也", "告诉", "他们", "了"]
  },
  {
    lesson: 8,
    chinese: "不说那些，经验从哪儿说起呀?",
    pinyin: "Bù shuō nàxiē, jīngyàn cóng nǎr shuō qǐ ya?",
    meaning: "그런 걸 말하지 않으면 경험을 어디서부터 말하겠어요?",
    words: ["不", "说", "那些", "经验", "从", "哪儿", "说起", "呀"]
  },
  {
    lesson: 8,
    chinese: "真不好意思，咱们俩的秘密全让人知道了。",
    pinyin: "Zhēn bù hǎoyìsi, zánmen liǎ de mìmì quán ràng rén zhīdao le.",
    meaning: "정말 부끄러워요, 우리 둘의 비밀이 다른 사람들에게 알려졌어요.",
    words: ["真", "不好意思", "咱们俩的", "秘密", "全", "让", "人", "知道", "了"]
  },
  {
    lesson: 8,
    chinese: "我昨天睡了十个小时觉。",
    pinyin: "Wǒ zuótiān shuì le shí ge xiǎoshí jiào.",
    meaning: "나는 어제 잠을 열 시간 잤다.",
    words: ["我", "昨天", "睡了", "十个小时", "觉"]
  },
  {
    lesson: 8,
    chinese: "下班后他洗了澡。",
    pinyin: "Xiàbān hòu tā xǐ le zǎo.",
    meaning: "그는 퇴근 후에 샤워를 했다.",
    words: ["下班后", "他", "洗了", "澡"]
  },
  {
    lesson: 8,
    chinese: "今天我请你客。",
    pinyin: "Jīntiān wǒ qǐng nǐ kè.",
    meaning: "오늘은 내가 밥을 살게.",
    words: ["今天", "我", "请你", "客"]
  },
  {
    lesson: 8,
    chinese: "我们要举行演讲比赛，帮我想想怎么讲。",
    pinyin: "Wǒmen yào jǔxíng yǎnjiǎng bǐsài, bāng wǒ xiǎngxiang zěnme jiǎng.",
    meaning: "우리 곧 웅변대회가 있는데, 내가 어떻게 말하면 좋을지 좀 생각해 줘.",
    words: ["我们", "要", "举行", "演讲比赛", "帮", "我", "想想", "怎么", "讲"]
  },
  {
    lesson: 8,
    chinese: "演讲的题目是什么?",
    pinyin: "Yǎnjiǎng de tímù shì shénme?",
    meaning: "연설 주제가 뭔데?",
    words: ["演讲的", "题目", "是", "什么"]
  },
  {
    lesson: 8,
    chinese: "男女平等。",
    pinyin: "Nánnǚ píngděng.",
    meaning: "남녀평등.",
    words: ["男女", "平等"]
  },
  {
    lesson: 8,
    chinese: "这个问题很复杂，内容又太多，不好讲，你肯定有困难。",
    pinyin: "Zhège wèntí hěn fùzá, nèiróng yòu tài duō, bù hǎo jiǎng, nǐ kěndìng yǒu kùnnan.",
    meaning: "이 문제는 아주 복잡하고 내용도 너무 많아서 말하기 쉽지 않겠네. 너 분명 어려움이 있겠다.",
    words: ["这个", "问题", "很", "复杂", "内容", "又", "太", "多", "不好", "讲", "你", "肯定", "有", "困难"]
  },
  {
    lesson: 8,
    chinese: "所以才请你帮我想想嘛。",
    pinyin: "Suǒyǐ cái qǐng nǐ bāng wǒ xiǎngxiang ma.",
    meaning: "그러니까 네가 좀 생각해 달라고 하는 거지.",
    words: ["所以", "才", "请", "你", "帮", "我", "想想", "嘛"]
  },
  {
    lesson: 8,
    chinese: "我不知道从哪儿讲起。",
    pinyin: "Wǒ bù zhīdao cóng nǎr jiǎng qǐ.",
    meaning: "나는 어디서부터 말을 시작해야 할지 모르겠어.",
    words: ["我", "不", "知道", "从", "哪儿", "讲起"]
  },
  {
    lesson: 8,
    chinese: "到处都有人谈男女平等，报上谈，电视里也谈。",
    pinyin: "Dàochù dōu yǒu rén tán nánnǚ píngděng, bàoshàng tán, diànshì lǐ yě tán.",
    meaning: "곳곳에서 남녀평등을 이야기해. 신문에서도 이야기하고, TV에서도 이야기하지.",
    words: ["到处", "都", "有人", "谈", "男女平等", "报上", "谈", "电视里", "也", "谈"]
  },
  {
    lesson: 8,
    chinese: "谈来谈去，连一个最简单的问题也没谈清楚。",
    pinyin: "Tán lái tán qù, lián yí ge zuì jiǎndān de wèntí yě méi tán qīngchu.",
    meaning: "이야기를 하고 또 해도 가장 간단한 문제조차 분명히 설명하지 못했어.",
    words: ["谈来谈去", "连", "一个", "最简单的", "问题", "也", "没", "谈清楚"]
  },
  {
    lesson: 8,
    chinese: "什么问题?",
    pinyin: "Shénme wèntí?",
    meaning: "무슨 문제?",
    words: ["什么", "问题"]
  },
  {
    lesson: 8,
    chinese: "一般人都以为男人能做的事女人也能做，好像就是实现了男女平等了。",
    pinyin: "Yìbān rén dōu yǐwéi nánrén néng zuò de shì nǚrén yě néng zuò, hǎoxiàng jiù shì shíxiàn le nánnǚ píngděng le.",
    meaning: "보통 사람들은 남자가 할 수 있는 일을 여자도 할 수 있으면, 마치 그게 곧 남녀평등이 실현된 것처럼 생각해.",
    words: ["一般人", "都", "以为", "男人", "能做的事", "女人", "也", "能做", "好像", "就是", "实现了", "男女平等", "了"]
  },
  {
    lesson: 8,
    chinese: "你怎么认为呢?",
    pinyin: "Nǐ zěnme rènwéi ne?",
    meaning: "너는 어떻게 생각해?",
    words: ["你", "怎么", "认为", "呢"]
  },
  {
    lesson: 8,
    chinese: "男人有男人的特点，女人有女人的特点，只在一点上讨论，那就太简单了。",
    pinyin: "Nánrén yǒu nánrén de tèdiǎn, nǚrén yǒu nǚrén de tèdiǎn, zhǐ zài yì diǎn shàng tǎolùn, nà jiù tài jiǎndān le.",
    meaning: "남자는 남자의 특징이 있고 여자는 여자의 특징이 있는데, 한 가지 점만 놓고 토론하는 건 너무 단순한 거야.",
    words: ["男人", "有", "男人的", "特点", "女人", "有", "女人的", "特点", "只", "在", "一点上", "讨论", "那", "就", "太", "简单", "了"]
  },
  {
    lesson: 8,
    chinese: "找来找去，没找到。",
    pinyin: "Zhǎo lái zhǎo qù, méi zhǎodào.",
    meaning: "이리저리 찾아도 찾지 못했다.",
    words: ["找来找去", "没", "找到"]
  },
  {
    lesson: 8,
    chinese: "商量来商量去，他也不同意。",
    pinyin: "Shāngliang lái shāngliang qù, tā yě bù tóngyì.",
    meaning: "의논하고 또 해봐도 그는 역시 동의하지 않았다.",
    words: ["商量来商量去", "他", "也", "不同意"]
  },
  {
    lesson: 8,
    chinese: "想来想去，怎么也想不起他叫什么名字。",
    pinyin: "Xiǎng lái xiǎng qù, zěnme yě xiǎng bu qǐ tā jiào shénme míngzi.",
    meaning: "생각하고 또 해봤지만, 어떻게 해도 그의 이름이 떠오르지 않는다.",
    words: ["想来想去", "怎么", "也", "想不起", "他", "叫", "什么", "名字"]
  },
  {
    lesson: 8,
    chinese: "他说来说去都是自己夸自己。",
    pinyin: "Tā shuō lái shuō qù dōu shì zìjǐ kuā zìjǐ.",
    meaning: "그는 이 말 저 말을 하지만 모두 다 자기 자랑이다.",
    words: ["他", "说来说去", "都", "是", "自己", "夸", "自己"]
  },
  {
    lesson: 8,
    chinese: "今天他没来，我以为是他病了，后来才知道是他孩子病了。",
    pinyin: "Jīntiān tā méi lái, wǒ yǐwéi shì tā bìng le, hòulái cái zhīdao shì tā háizi bìng le.",
    meaning: "오늘 그가 오지 않아서 나는 그가 아픈 거라고 생각했는데, 나중에 알고 보니 그의 아이가 병이 났던 것이었다.",
    words: ["今天", "他", "没", "来", "我", "以为", "是", "他", "病了", "后来", "才", "知道", "是", "他孩子", "病了"]
  },
  {
    lesson: 8,
    chinese: "张师傅回到家一点活儿都不干，大家都认为这是不对的。",
    pinyin: "Zhāng shīfu huí dào jiā yìdiǎn huór dōu bù gàn, dàjiā dōu rènwéi zhè shì bú duì de.",
    meaning: "장 씨는 집에 돌아와서 일을 조금도 하지 않아서, 모두가 이것은 잘못이라고 생각한다.",
    words: ["张师傅", "回到家", "一点", "活儿", "都", "不", "干", "大家", "都", "认为", "这", "是", "不对的"]
  },
  {
    lesson: 8,
    chinese: "今天路上车很多，我以为他不回来。",
    pinyin: "Jīntiān lùshang chē hěn duō, wǒ yǐwéi tā bù huílai.",
    meaning: "오늘 길에 차가 많아서 나는 그가 안 올 것이라고 생각했다.",
    words: ["今天", "路上", "车", "很多", "我", "以为", "他", "不", "回来"]
  },
  {
    lesson: 8,
    chinese: "孩子改不了爱吃糖的习惯，结果牙都坏了。",
    pinyin: "Háizi gǎi bù liǎo ài chī táng de xíguàn, jiéguǒ yá dōu huài le.",
    meaning: "아이가 단 것을 좋아하는 습관을 고치지 못해서 결국 이가 다 상했다.",
    words: ["孩子", "改不了", "爱吃糖的", "习惯", "结果", "牙", "都", "坏了"]
  },
  {
    lesson: 8,
    chinese: "他把约会的时间记错了，结果女朋友生气了。",
    pinyin: "Tā bǎ yuēhuì de shíjiān jì cuò le, jiéguǒ nǚpéngyou shēngqì le.",
    meaning: "그는 약속 시간을 잘못 기억해서 결국 여자친구가 화가 났다.",
    words: ["他", "把", "约会的", "时间", "记错了", "结果", "女朋友", "生气了"]
  },
  {
    lesson: 8,
    chinese: "住的要好，吃的也要好。",
    pinyin: "Zhù de yào hǎo, chī de yě yào hǎo.",
    meaning: "사는 것도 좋아야 하고, 먹는 것도 좋아야 한다.",
    words: ["住的", "要", "好", "吃的", "也", "要", "好"]
  },
  {
    lesson: 8,
    chinese: "上班的路上要注意安全，下班的路上也要注意安全。",
    pinyin: "Shàngbān de lùshang yào zhùyì ānquán, xiàbān de lùshang yě yào zhùyì ānquán.",
    meaning: "출근길에도 안전에 주의해야 하고, 퇴근길에도 안전에 주의해야 한다.",
    words: ["上班的", "路上", "要", "注意", "安全", "下班的", "路上", "也", "要", "注意", "安全"]
  },
  {
    lesson: 8,
    chinese: "教室里边要安静，教室外边也要安静。",
    pinyin: "Jiàoshì lǐbian yào ānjìng, jiàoshì wàibian yě yào ānjìng.",
    meaning: "교실 안도 조용해야 하고, 교실 밖도 조용해야 한다.",
    words: ["教室里边", "要", "安静", "教室外边", "也", "要", "安静"]
  },
  {
    lesson: 8,
    chinese: "看来看去，一个都不喜欢。",
    pinyin: "Kàn lái kàn qù, yí ge dōu bù xǐhuan.",
    meaning: "보고 또 봐도 하나도 마음에 들지 않는다.",
    words: ["看来看去", "一个", "都", "不", "喜欢"]
  },
  {
    lesson: 8,
    chinese: "走来走去，又走回来了。",
    pinyin: "Zǒu lái zǒu qù, yòu zǒu huílai le.",
    meaning: "왔다 갔다 하다가 다시 돌아왔다.",
    words: ["走来走去", "又", "走回来", "了"]
  },
  {
    lesson: 8,
    chinese: "讨论来讨论去，也没有好主意。",
    pinyin: "Tǎolùn lái tǎolùn qù, yě méiyǒu hǎo zhǔyi.",
    meaning: "토론하고 또 토론해도 좋은 생각이 없었다.",
    words: ["讨论来讨论去", "也", "没有", "好", "主意"]
  },
  {
    lesson: 8,
    chinese: "连他的名字也没想起来。",
    pinyin: "Lián tā de míngzi yě méi xiǎng qǐlai.",
    meaning: "그의 이름조차도 떠올리지 못했다.",
    words: ["连", "他的", "名字", "也", "没", "想起来"]
  },
  {
    lesson: 8,
    chinese: "连东南西北也不知道。",
    pinyin: "Lián dōng nán xī běi yě bù zhīdao.",
    meaning: "동서남북조차도 모른다.",
    words: ["连", "东南西北", "也", "不知道"]
  },
  {
    lesson: 8,
    chinese: "连图书馆也没去过。",
    pinyin: "Lián túshūguǎn yě méi qù guo.",
    meaning: "도서관조차도 가 본 적이 없다.",
    words: ["连", "图书馆", "也", "没", "去过"]
  },
  {
    lesson: 8,
    chinese: "我想找个干净勤劳的伴侣。",
    pinyin: "Wǒ xiǎng zhǎo ge gānjìng qínláo de bànlǚ.",
    meaning: "나는 깔끔하고 부지런한 배우자를 찾고 싶다.",
    words: ["我", "想", "找", "个", "干净", "勤劳的", "伴侣"]
  },
     {
    lesson: 9,
    chinese: "我是来找工作的。",
    pinyin: "Wǒ shì lái zhǎo gōngzuò de.",
    meaning: "저는 일자리를 구하러 왔습니다.",
    words: ["我", "是", "来", "找工作", "的"]
  },
  {
    lesson: 9,
    chinese: "喂，您好！麻烦您帮我叫一下儿刘山。",
    pinyin: "Wéi, nínhǎo! Máfan nín bāng wǒ jiào yíxiàr Liú Shān.",
    meaning: "여보세요, 안녕하세요! 실례지만 리우샨 씨를 좀 바꿔 주세요.",
    words: ["喂", "您好", "麻烦", "您", "帮", "我", "叫一下儿", "刘山"]
  },
  {
    lesson: 9,
    chinese: "他早就不在这儿干了。",
    pinyin: "Tā zǎo jiù bú zài zhèr gàn le.",
    meaning: "그는 진작에 여기에서 일하지 않았어요.",
    words: ["他", "早就", "不", "在", "这儿", "干", "了"]
  },
  {
    lesson: 9,
    chinese: "他去哪儿了?",
    pinyin: "Tā qù nǎr le?",
    meaning: "그는 어디로 갔나요?",
    words: ["他", "去", "哪儿", "了"]
  },
  {
    lesson: 9,
    chinese: "他开了一家电脑公司，自己当老板了。",
    pinyin: "Tā kāi le yì jiā diànnǎo gōngsī, zìjǐ dāng lǎobǎn le.",
    meaning: "그는 컴퓨터 회사를 차려서 본인이 사장이 되었어요.",
    words: ["他", "开了", "一家", "电脑公司", "自己", "当", "老板", "了"]
  },
  {
    lesson: 9,
    chinese: "真没想到。",
    pinyin: "Zhēn méi xiǎngdào.",
    meaning: "정말 뜻밖이네요.",
    words: ["真", "没", "想到"]
  },
  {
    lesson: 9,
    chinese: "您知道怎么和他联系吗?",
    pinyin: "Nín zhīdao zěnme hé tā liánxì ma?",
    meaning: "그와 어떻게 연락해야 하는지 아시나요?",
    words: ["您", "知道", "怎么", "和", "他", "联系", "吗"]
  },
  {
    lesson: 9,
    chinese: "我给你他的手机号码好吧。",
    pinyin: "Wǒ gěi nǐ tā de shǒujī hàomǎ hǎo ba.",
    meaning: "그의 휴대전화 번호를 알려 드릴게요.",
    words: ["我", "给", "你", "他的", "手机号码", "好", "吧"]
  },
  {
    lesson: 9,
    chinese: "他走以前留下的。",
    pinyin: "Tā zǒu yǐqián liúxià de.",
    meaning: "그가 떠나기 전에 남겨 둔 거예요.",
    words: ["他", "走", "以前", "留下", "的"]
  },
  {
    lesson: 9,
    chinese: "您等一下儿，我拿纸和笔。",
    pinyin: "Nín děng yíxiàr, wǒ ná zhǐ hé bǐ.",
    meaning: "잠시만 기다려 주세요. 제가 종이와 펜을 가져올게요.",
    words: ["您", "等一下儿", "我", "拿", "纸", "和", "笔"]
  },
  {
    lesson: 9,
    chinese: "好了，您说吧。",
    pinyin: "Hǎo le, nín shuō ba.",
    meaning: "됐습니다. 말씀하세요.",
    words: ["好了", "您", "说", "吧"]
  },
  {
    lesson: 9,
    chinese: "记下来了吗?",
    pinyin: "Jì xialai le ma?",
    meaning: "받아 적으셨나요?",
    words: ["记下来", "了", "吗"]
  },
  {
    lesson: 9,
    chinese: "记下来了，谢谢！",
    pinyin: "Jì xialai le, xièxie!",
    meaning: "다 적었어요. 감사합니다!",
    words: ["记下来", "了", "谢谢"]
  },
  {
    lesson: 9,
    chinese: "请问，王经理在吗?",
    pinyin: "Qǐngwèn, Wáng jīnglǐ zài ma?",
    meaning: "실례하지만 왕 사장님 계신가요?",
    words: ["请问", "王经理", "在", "吗"]
  },
  {
    lesson: 9,
    chinese: "有什么事?",
    pinyin: "Yǒu shénme shì?",
    meaning: "무슨 일이시죠?",
    words: ["有", "什么", "事"]
  },
  {
    lesson: 9,
    chinese: "我是他的秘书。",
    pinyin: "Wǒ shì tā de mìshū.",
    meaning: "제가 그분의 비서입니다.",
    words: ["我", "是", "他的", "秘书"]
  },
  {
    lesson: 9,
    chinese: "您好，我是来找工作的。",
    pinyin: "Nínhǎo, wǒ shì lái zhǎo gōngzuò de.",
    meaning: "안녕하세요. 저는 일자리를 구하러 왔습니다.",
    words: ["您好", "我", "是", "来", "找工作", "的"]
  },
  {
    lesson: 9,
    chinese: "我看到报纸上有贵公司的广告。",
    pinyin: "Wǒ kàndào bàozhǐ shàng yǒu guì gōngsī de guǎnggào.",
    meaning: "신문에서 귀사의 광고를 봤습니다.",
    words: ["我", "看到", "报纸上", "有", "贵公司的", "广告"]
  },
  {
    lesson: 9,
    chinese: "王经理陪客人参观去了。",
    pinyin: "Wáng jīnglǐ péi kèrén cānguān qù le.",
    meaning: "왕 사장님은 손님을 모시고 참관하러 가셨어요.",
    words: ["王经理", "陪", "客人", "参观", "去", "了"]
  },
  {
    lesson: 9,
    chinese: "请先把您的简历给我一份。",
    pinyin: "Qǐng xiān bǎ nín de jiǎnlì gěi wǒ yí fèn.",
    meaning: "우선 저에게 이력서를 한 부 주세요.",
    words: ["请", "先", "把", "您的", "简历", "给", "我", "一份"]
  },
  {
    lesson: 9,
    chinese: "您看这些够吗?",
    pinyin: "Nín kàn zhèxiē gòu ma?",
    meaning: "이 정도면 충분한가요?",
    words: ["您", "看", "这些", "够", "吗"]
  },
  {
    lesson: 9,
    chinese: "有学历证明吗?",
    pinyin: "Yǒu xuélì zhèngmíng ma?",
    meaning: "학력 증명서가 있나요?",
    words: ["有", "学历证明", "吗"]
  },
  {
    lesson: 9,
    chinese: "这是毕业证的复印件。",
    pinyin: "Zhè shì bìyèzhèng de fùyìnjiàn.",
    meaning: "이것은 졸업증서의 복사본입니다.",
    words: ["这", "是", "毕业证的", "复印件"]
  },
  {
    lesson: 9,
    chinese: "经理一回来，我就交给他。",
    pinyin: "Jīnglǐ yì huílai, wǒ jiù jiāo gěi tā.",
    meaning: "사장님이 돌아오시면 바로 전해 드릴게요.",
    words: ["经理", "一", "回来", "我", "就", "交给", "他"]
  },
  {
    lesson: 9,
    chinese: "什么时候面试请等我们的电话。",
    pinyin: "Shénme shíhou miànshì qǐng děng wǒmen de diànhuà.",
    meaning: "언제 면접을 볼지는 저희 전화를 기다려 주세요.",
    words: ["什么时候", "面试", "请", "等", "我们的", "电话"]
  },
  {
    lesson: 9,
    chinese: "你为什么要做这份工作?",
    pinyin: "Nǐ wèishénme yào zuò zhè fèn gōngzuò?",
    meaning: "당신은 왜 이 일을 하려고 하나요?",
    words: ["你", "为什么", "要", "做", "这份", "工作"]
  },
  {
    lesson: 9,
    chinese: "我对这份工作感兴趣。",
    pinyin: "Wǒ duì zhè fèn gōngzuò gǎn xìngqù.",
    meaning: "저는 이 일에 흥미가 있습니다.",
    words: ["我", "对", "这份", "工作", "感兴趣"]
  },
  {
    lesson: 9,
    chinese: "现在电脑公司很多，你为什么想来我们公司?",
    pinyin: "Xiànzài diànnǎo gōngsī hěn duō, nǐ wèishénme xiǎng lái wǒmen gōngsī?",
    meaning: "지금 컴퓨터 회사가 아주 많은데, 왜 우리 회사에 오려고 하나요?",
    words: ["现在", "电脑公司", "很多", "你", "为什么", "想", "来", "我们公司"]
  },
  {
    lesson: 9,
    chinese: "你们是一家新开的公司，发展很快。",
    pinyin: "Nǐmen shì yì jiā xīn kāi de gōngsī, fāzhǎn hěn kuài.",
    meaning: "귀사는 새로 시작한 회사이고, 발전이 매우 빠릅니다.",
    words: ["你们", "是", "一家", "新开的", "公司", "发展", "很", "快"]
  },
  {
    lesson: 9,
    chinese: "我认为在这里工作有前途。",
    pinyin: "Wǒ rènwéi zài zhèlǐ gōngzuò yǒu qiántú.",
    meaning: "저는 이곳에서 일하는 것이 전망이 밝다고 생각합니다.",
    words: ["我", "认为", "在", "这里", "工作", "有", "前途"]
  },
  {
    lesson: 9,
    chinese: "你说的有前途是什么意思?",
    pinyin: "Nǐ shuō de yǒu qiántú shì shénme yìsi?",
    meaning: "당신이 말한 전망이 밝다는 무슨 뜻인가요?",
    words: ["你", "说的", "有前途", "是", "什么", "意思"]
  },
  {
    lesson: 9,
    chinese: "在工作中锻炼，提高工作能力和技术水平，也希望快点儿增加收入。",
    pinyin: "Zài gōngzuò zhōng duànliàn, tígāo gōngzuò nénglì hé jìshù shuǐpíng, yě xīwàng kuài diǎnr zēngjiā shōurù.",
    meaning: "일을 하면서 단련하고, 업무 능력과 기술 수준을 높일 수 있으며, 수입도 빨리 늘어나기를 바랍니다.",
    words: ["在", "工作中", "锻炼", "提高", "工作能力", "和", "技术水平", "也", "希望", "快点儿", "增加", "收入"]
  },
  {
    lesson: 9,
    chinese: "我们这儿的工作很忙，有时候周末也不能休息。",
    pinyin: "Wǒmen zhèr de gōngzuò hěn máng, yǒu shíhou zhōumò yě bù néng xiūxi.",
    meaning: "우리 회사 일은 매우 바쁩니다. 어떤 때는 주말에도 쉬지 못합니다.",
    words: ["我们这儿的", "工作", "很", "忙", "有时候", "周末", "也", "不能", "休息"]
  },
  {
    lesson: 9,
    chinese: "我很年轻，喜欢紧张的生活。",
    pinyin: "Wǒ hěn niánqīng, xǐhuan jǐnzhāng de shēnghuó.",
    meaning: "저는 아직 젊고, 바쁘고 긴장감 있는 생활을 좋아합니다.",
    words: ["我", "很", "年轻", "喜欢", "紧张的", "生活"]
  },
  {
    lesson: 9,
    chinese: "我母亲常说，不忙不幸福。",
    pinyin: "Wǒ mǔqīn cháng shuō, bù máng bù xìngfú.",
    meaning: "제 어머니는 자주 바쁘지 않으면 행복하지 않다고 말씀하십니다.",
    words: ["我母亲", "常", "说", "不忙", "不", "幸福"]
  },
  {
    lesson: 9,
    chinese: "我觉得她说得有道理。",
    pinyin: "Wǒ juéde tā shuō de yǒu dàoli.",
    meaning: "저는 어머니 말씀이 일리가 있다고 생각합니다.",
    words: ["我", "觉得", "她", "说得", "有", "道理"]
  },
  {
    lesson: 9,
    chinese: "今天的面试就到这儿，结果怎么样请等我们的通知。",
    pinyin: "Jīntiān de miànshì jiù dào zhèr, jiéguǒ zěnmeyàng qǐng děng wǒmen de tōngzhī.",
    meaning: "오늘의 면접은 여기까지입니다. 결과가 어떨지는 저희의 통지를 기다려 주세요.",
    words: ["今天的", "面试", "就", "到", "这儿", "结果", "怎么样", "请", "等", "我们的", "通知"]
  },
  {
    lesson: 9,
    chinese: "我们公司每年都招一些新职员。",
    pinyin: "Wǒmen gōngsī měinián dōu zhāo yìxiē xīn zhíyuán.",
    meaning: "우리 회사는 해마다 새 직원을 좀 모집합니다.",
    words: ["我们公司", "每年", "都", "招", "一些", "新职员"]
  },
  {
    lesson: 9,
    chinese: "其中有不少中年人给我留下了很好的印象。",
    pinyin: "Qízhōng yǒu bù shǎo zhōngniánrén gěi wǒ liúxià le hěn hǎo de yìnxiàng.",
    meaning: "그중 적지 않은 중년 지원자가 제게 아주 좋은 인상을 남겼습니다.",
    words: ["其中", "有", "不少", "中年人", "给", "我", "留下了", "很好的", "印象"]
  },
  {
    lesson: 9,
    chinese: "他们年龄比较大，都工作过一段时间。",
    pinyin: "Tāmen niánlíng bǐjiào dà, dōu gōngzuò guo yí duàn shíjiān.",
    meaning: "그분들은 나이가 비교적 많고 모두 어느 정도 일해 본 적이 있습니다.",
    words: ["他们", "年龄", "比较", "大", "都", "工作过", "一段", "时间"]
  },
  {
    lesson: 9,
    chinese: "他们懂技术，有经验，能够很快熟悉工作。",
    pinyin: "Tāmen dǒng jìshù, yǒu jīngyàn, nénggòu hěn kuài shúxī gōngzuò.",
    meaning: "그들은 기술을 알고 경험이 있으며 일을 빨리 익힐 수 있습니다.",
    words: ["他们", "懂", "技术", "有", "经验", "能够", "很快", "熟悉", "工作"]
  },
  {
    lesson: 9,
    chinese: "工作起来认真，负责，我对他们很满意。",
    pinyin: "Gōngzuò qǐlai rènzhēn, fùzé, wǒ duì tāmen hěn mǎnyì.",
    meaning: "일할 때 성실하고 책임감도 있어서 저는 그분들에게 매우 만족합니다.",
    words: ["工作起来", "认真", "负责", "我", "对", "他们", "很", "满意"]
  },
  {
    lesson: 9,
    chinese: "当然，来面试的大学毕业生也不少。",
    pinyin: "Dāngrán, lái miànshì de dàxué bìyèshēng yě bù shǎo.",
    meaning: "물론 면접을 보러 오는 대학 졸업생들도 적지 않습니다.",
    words: ["当然", "来", "面试的", "大学毕业生", "也", "不少"]
  },
  {
    lesson: 9,
    chinese: "有一些也成了我们的新职员。",
    pinyin: "Yǒu yìxiē yě chéng le wǒmen de xīn zhíyuán.",
    meaning: "그중 일부는 우리 회사의 신입 직원이 되었습니다.",
    words: ["有", "一些", "也", "成了", "我们的", "新职员"]
  },
  {
    lesson: 9,
    chinese: "他们热情，爱学习，技术和能力都提高得很快。",
    pinyin: "Tāmen rèqíng, ài xuéxí, jìshù hé nénglì dōu tígāo de hěn kuài.",
    meaning: "그들은 열정적이고 배우기를 좋아하며 기술과 능력도 매우 빨리 향상됩니다.",
    words: ["他们", "热情", "爱", "学习", "技术", "和", "能力", "都", "提高得", "很快"]
  },
  {
    lesson: 9,
    chinese: "我对他们也很满意。",
    pinyin: "Wǒ duì tāmen yě hěn mǎnyì.",
    meaning: "저는 그들에 대해서도 매우 만족합니다.",
    words: ["我", "对", "他们", "也", "很", "满意"]
  },
  {
    lesson: 9,
    chinese: "我把你的手机号记下来。",
    pinyin: "Wǒ bǎ nǐ de shǒujī hào jì xialai.",
    meaning: "내가 너의 휴대전화 번호를 적어 둘게.",
    words: ["我", "把", "你的", "手机号", "记下来"]
  },
  {
    lesson: 9,
    chinese: "新书发下来了。",
    pinyin: "Xīn shū fā xialai le.",
    meaning: "새 책이 배부되었다.",
    words: ["新书", "发下来", "了"]
  },
  {
    lesson: 9,
    chinese: "我玩起来常常忘了时间。",
    pinyin: "Wǒ wán qǐlai chángcháng wàng le shíjiān.",
    meaning: "나는 놀다 보면 자주 시간을 잊는다.",
    words: ["我", "玩起来", "常常", "忘了", "时间"]
  },
  {
    lesson: 9,
    chinese: "天气热起来了，夏天快到了。",
    pinyin: "Tiānqì rè qǐlai le, xiàtiān kuài dào le.",
    meaning: "날씨가 더워졌고, 여름이 곧 다가온다.",
    words: ["天气", "热起来", "了", "夏天", "快", "到", "了"]
  },
  {
    lesson: 9,
    chinese: "我是昨天晚上刚到北京的。",
    pinyin: "Wǒ shì zuótiān wǎnshang gāng dào Běijīng de.",
    meaning: "나는 어젯밤에 막 베이징에 도착한 것이다.",
    words: ["我", "是", "昨天晚上", "刚", "到", "北京", "的"]
  },
  {
    lesson: 9,
    chinese: "他们是从中国南方来的。",
    pinyin: "Tāmen shì cóng Zhōngguó nánfāng lái de.",
    meaning: "그들은 중국 남방에서 온 것이다.",
    words: ["他们", "是", "从", "中国南方", "来", "的"]
  },
  {
    lesson: 9,
    chinese: "你们究竟是来干什么的呢?",
    pinyin: "Nǐmen jiūjìng shì lái gàn shénme de ne?",
    meaning: "너희들은 도대체 무엇을 하러 온 것이니?",
    words: ["你们", "究竟", "是", "来", "干", "什么", "的", "呢"]
  },
  {
    lesson: 9,
    chinese: "不发达，我不回家。",
    pinyin: "Bù fādá, wǒ bù huí jiā.",
    meaning: "출세하지 않으면 집에 돌아가지 않겠다.",
    words: ["不", "发达", "我", "不", "回家"]
  },
  {
    lesson: 9,
    chinese: "你今天不做作业不能出去玩儿。",
    pinyin: "Nǐ jīntiān bù zuò zuòyè bù néng chūqù wánr.",
    meaning: "너는 오늘 숙제를 하지 않으면 나가 놀 수 없다.",
    words: ["你", "今天", "不", "做", "作业", "不能", "出去", "玩儿"]
  },
  {
    lesson: 9,
    chinese: "他们早就研究过这个问题了。",
    pinyin: "Tāmen zǎo jiù yánjiū guo zhège wèntí le.",
    meaning: "그들은 진작에 이 문제를 연구한 적이 있다.",
    words: ["他们", "早就", "研究过", "这个", "问题", "了"]
  },
  {
    lesson: 9,
    chinese: "秘书早就把你的简历交给经理了。",
    pinyin: "Mìshū zǎo jiù bǎ nǐ de jiǎnlì jiāo gěi jīnglǐ le.",
    meaning: "비서는 진작에 너의 이력서를 사장에게 넘겼다.",
    words: ["秘书", "早就", "把", "你的", "简历", "交给", "经理", "了"]
  },
  {
    lesson: 9,
    chinese: "我早就熟悉这儿的饭馆儿了。",
    pinyin: "Wǒ zǎo jiù shúxī zhèr de fànguǎnr le.",
    meaning: "나는 진작에 이곳의 음식점에 익숙해졌다.",
    words: ["我", "早就", "熟悉", "这儿的", "饭馆儿", "了"]
  },
  {
    lesson: 9,
    chinese: "课文背下来了吗?",
    pinyin: "Kèwén bèi xialai le ma?",
    meaning: "본문 외웠니?",
    words: ["课文", "背下来", "了", "吗"]
  },
  {
    lesson: 9,
    chinese: "她陪奶奶买东西去了。",
    pinyin: "Tā péi nǎinai mǎi dōngxi qù le.",
    meaning: "그녀는 할머니를 모시고 물건을 사러 갔다.",
    words: ["她", "陪", "奶奶", "买", "东西", "去", "了"]
  },
  {
    lesson: 9,
    chinese: "他陪老师看病去了。",
    pinyin: "Tā péi lǎoshī kàn bìng qù le.",
    meaning: "그는 선생님을 모시고 병원에 갔다.",
    words: ["他", "陪", "老师", "看病", "去", "了"]
  },
  {
    lesson: 9,
    chinese: "爸爸陪孩子换钱去了。",
    pinyin: "Bàba péi háizi huàn qián qù le.",
    meaning: "아빠는 아이를 데리고 환전하러 갔다.",
    words: ["爸爸", "陪", "孩子", "换钱", "去", "了"]
  },
  {
    lesson: 9,
    chinese: "领导不负责不行。",
    pinyin: "Lǐngdǎo bù fùzé bù xíng.",
    meaning: "지도자가 책임감이 없으면 안 된다.",
    words: ["领导", "不", "负责", "不", "行"]
  },
  {
    lesson: 9,
    chinese: "成绩不及格不发毕业证。",
    pinyin: "Chéngjì bù jígé bù fā bìyèzhèng.",
    meaning: "성적이 모자라면 졸업증서를 발급하지 않는다.",
    words: ["成绩", "不", "及格", "不", "发", "毕业证"]
  },
     {
    lesson: 10,
    chinese: "请你参加我们的婚礼。",
    pinyin: "Qǐng nǐ cānjiā wǒmen de hūnlǐ.",
    meaning: "우리 결혼식에 참석해 줘.",
    words: ["请", "你", "参加", "我们的", "婚礼"]
  },
  {
    lesson: 10,
    chinese: "谁的喜糖？",
    pinyin: "Shéi de xǐtáng?",
    meaning: "누구의 결혼식 사탕이야?",
    words: ["谁的", "喜糖"]
  },
  {
    lesson: 10,
    chinese: "李秘书的。",
    pinyin: "Lǐ mìshū de.",
    meaning: "이 비서 거야.",
    words: ["李秘书的"]
  },
  {
    lesson: 10,
    chinese: "他结婚了？",
    pinyin: "Tā jiéhūn le?",
    meaning: "그가 결혼했어?",
    words: ["他", "结婚", "了"]
  },
  {
    lesson: 10,
    chinese: "什么时候办的喜事？",
    pinyin: "Shénme shíhou bàn de xǐshì?",
    meaning: "결혼식 언제 했어?",
    words: ["什么时候", "办的", "喜事"]
  },
  {
    lesson: 10,
    chinese: "没办。",
    pinyin: "Méi bàn.",
    meaning: "안 올렸어.",
    words: ["没", "办"]
  },
  {
    lesson: 10,
    chinese: "请亲戚朋友喝了顿喜酒，然后就带着新娘旅行去了。",
    pinyin: "Qǐng qīnqi péngyou hē le dùn xǐjiǔ, ránhòu jiù dàizhe xīnniáng lǚxíng qù le.",
    meaning: "친척과 친구들을 초대해서 축하주 한 잔 하고, 바로 신부 데리고 여행을 떠났어.",
    words: ["请", "亲戚朋友", "喝了", "顿", "喜酒", "然后", "就", "带着", "新娘", "旅行", "去", "了"]
  },
  {
    lesson: 10,
    chinese: "怪不得这几天他没来上班呢，原来是当新郎去了。",
    pinyin: "Guàibude zhè jǐ tiān tā méi lái shàngbān ne, yuánlái shì dāng xīnláng qù le.",
    meaning: "어쩐지 요 며칠 그가 출근하지 않더라니, 알고 보니 새신랑이 되었구나.",
    words: ["怪不得", "这几天", "他", "没", "来", "上班", "呢", "原来", "是", "当", "新郎", "去", "了"]
  },
  {
    lesson: 10,
    chinese: "他们去几天？",
    pinyin: "Tāmen qù jǐ tiān?",
    meaning: "그들은 며칠 동안 가는데?",
    words: ["他们", "去", "几天"]
  },
  {
    lesson: 10,
    chinese: "最少也得一个星期吧。",
    pinyin: "Zuìshǎo yě děi yí ge xīngqī ba.",
    meaning: "최소한 일주일은 가겠지.",
    words: ["最少", "也", "得", "一个", "星期", "吧"]
  },
  {
    lesson: 10,
    chinese: "将来你也来个旅行结婚，好不好？",
    pinyin: "Jiānglái nǐ yě lái ge lǚxíng jiéhūn, hǎo bù hǎo?",
    meaning: "나중에 너도 여행 결혼을 하는 건 어때?",
    words: ["将来", "你", "也", "来个", "旅行结婚", "好不好"]
  },
  {
    lesson: 10,
    chinese: "我来个更浪漫的。",
    pinyin: "Wǒ lái ge gèng làngmàn de.",
    meaning: "난 좀 더 낭만적으로 해야지.",
    words: ["我", "来个", "更", "浪漫的"]
  },
  {
    lesson: 10,
    chinese: "什么更浪漫的？",
    pinyin: "Shénme gèng làngmàn de?",
    meaning: "어떤 더 낭만적인 것?",
    words: ["什么", "更", "浪漫的"]
  },
  {
    lesson: 10,
    chinese: "这是秘密，现在不能告诉你。",
    pinyin: "Zhè shì mìmì, xiànzài bù néng gàosu nǐ.",
    meaning: "그건 비밀이야, 지금은 말해줄 수 없어.",
    words: ["这", "是", "秘密", "现在", "不能", "告诉", "你"]
  },
  {
    lesson: 10,
    chinese: "是你们哪，快请进！",
    pinyin: "Shì nǐmen na, kuài qǐng jìn!",
    meaning: "너희들이구나, 어서 들어와!",
    words: ["是", "你们", "哪", "快", "请进"]
  },
  {
    lesson: 10,
    chinese: "什么时候吃你们的喜糖呀？",
    pinyin: "Shénme shíhou chī nǐmen de xǐtáng ya?",
    meaning: "너희들 결혼 사탕은 언제 먹게 해 줄 거니?",
    words: ["什么时候", "吃", "你们的", "喜糖", "呀"]
  },
  {
    lesson: 10,
    chinese: "六月十六日，星期六。",
    pinyin: "Liù yuè shíliù rì, xīngqīliù.",
    meaning: "6월 16일, 토요일이야.",
    words: ["六月", "十六日", "星期六"]
  },
  {
    lesson: 10,
    chinese: "请你参加我们的婚礼。",
    pinyin: "Qǐng nǐ cānjiā wǒmen de hūnlǐ.",
    meaning: "우리 결혼식에 참석해 줘.",
    words: ["请", "你", "参加", "我们的", "婚礼"]
  },
  {
    lesson: 10,
    chinese: "这可是大喜事。",
    pinyin: "Zhè kě shì dà xǐshì.",
    meaning: "이건 정말 기쁜 일이다.",
    words: ["这", "可是", "大喜事"]
  },
  {
    lesson: 10,
    chinese: "日子选得真好！",
    pinyin: "Rìzi xuǎn de zhēn hǎo!",
    meaning: "날도 아주 잘 선택했네!",
    words: ["日子", "选得", "真", "好"]
  },
  {
    lesson: 10,
    chinese: "六六大顺哪！",
    pinyin: "Liù liù dà shùn na!",
    meaning: "모든 일이 순조로울 거야!",
    words: ["六六大顺", "哪"]
  },
  {
    lesson: 10,
    chinese: "我一定去。",
    pinyin: "Wǒ yídìng qù.",
    meaning: "꼭 갈게.",
    words: ["我", "一定", "去"]
  },
  {
    lesson: 10,
    chinese: "喜酒得多多准备呀。",
    pinyin: "Xǐjiǔ děi duōduō zhǔnbèi ya.",
    meaning: "결혼 축하주나 많이 준비해 둬!",
    words: ["喜酒", "得", "多多", "准备", "呀"]
  },
  {
    lesson: 10,
    chinese: "请大家举杯，为新郎新娘的幸福，干杯！",
    pinyin: "Qǐng dàjiā jǔ bēi, wèi xīnláng xīnniáng de xìngfú, gānbēi!",
    meaning: "여러분 잔을 들어 주십시오. 신랑과 신부의 행복을 위하여 건배!",
    words: ["请", "大家", "举杯", "为", "新郎新娘的", "幸福", "干杯"]
  },
  {
    lesson: 10,
    chinese: "干杯！",
    pinyin: "Gānbēi!",
    meaning: "건배!",
    words: ["干杯"]
  },
  {
    lesson: 10,
    chinese: "现在喜酒也喝了，父母也拜了，该干什么了？",
    pinyin: "Xiànzài xǐjiǔ yě hē le, fùmǔ yě bài le, gāi gàn shénme le?",
    meaning: "축하주도 마셨고, 부모님께 큰절도 올렸으니 이제 뭘 해야 하죠?",
    words: ["现在", "喜酒", "也", "喝", "了", "父母", "也", "拜", "了", "该", "干", "什么", "了"]
  },
  {
    lesson: 10,
    chinese: "新郎新娘介绍恋爱经过。",
    pinyin: "Xīnláng xīnniáng jièshào liàn’ài jīngguò.",
    meaning: "신랑, 신부의 연애담 좀 들어 봅시다.",
    words: ["新郎新娘", "介绍", "恋爱经过"]
  },
  {
    lesson: 10,
    chinese: "别拿我们开心了。",
    pinyin: "Bié ná wǒmen kāixīn le.",
    meaning: "우리 가지고 놀리지 마세요.",
    words: ["别", "拿", "我们", "开心", "了"]
  },
  {
    lesson: 10,
    chinese: "今天是什么日子？",
    pinyin: "Jīntiān shì shénme rìzi?",
    meaning: "오늘이 무슨 날이지요?",
    words: ["今天", "是", "什么", "日子"]
  },
  {
    lesson: 10,
    chinese: "他们不说，行吗？",
    pinyin: "Tāmen bù shuō, xíng ma?",
    meaning: "신랑, 신부가 말 안 해도 될까요?",
    words: ["他们", "不", "说", "行", "吗"]
  },
  {
    lesson: 10,
    chinese: "不行！",
    pinyin: "Bù xíng!",
    meaning: "안 돼요!",
    words: ["不行"]
  },
  {
    lesson: 10,
    chinese: "那我先说吧。",
    pinyin: "Nà wǒ xiān shuō ba.",
    meaning: "그럼 제가 먼저 말할게요.",
    words: ["那", "我", "先", "说", "吧"]
  },
  {
    lesson: 10,
    chinese: "如果他说得不完全，新娘再给补充补充。",
    pinyin: "Rúguǒ tā shuō de bù wánquán, xīnniáng zài gěi bǔchōng bǔchōng.",
    meaning: "만약 신랑이 전부 말하지 않으면 신부가 더 보충해 주십시오.",
    words: ["如果", "他", "说得", "不", "完全", "新娘", "再", "给", "补充补充"]
  },
  {
    lesson: 10,
    chinese: "我们俩是同班同学，原来互相不太熟悉。",
    pinyin: "Wǒmen liǎ shì tóngbān tóngxué, yuánlái hùxiāng bú tài shúxī.",
    meaning: "우리는 같은 반 친구였는데, 처음에는 서로 잘 몰랐었습니다.",
    words: ["我们俩", "是", "同班同学", "原来", "互相", "不太", "熟悉"]
  },
  {
    lesson: 10,
    chinese: "一天，下课的时候，突然下起雨来。",
    pinyin: "Yì tiān, xiàkè de shíhou, tūrán xià qǐ yǔ lái.",
    meaning: "어느 날 수업이 끝난 후 갑자기 비가 내리기 시작했다.",
    words: ["一天", "下课的时候", "突然", "下起", "雨", "来"]
  },
  {
    lesson: 10,
    chinese: "真浪漫。",
    pinyin: "Zhēn làngmàn.",
    meaning: "진짜 낭만적이다.",
    words: ["真", "浪漫"]
  },
  {
    lesson: 10,
    chinese: "别说话，好好儿听。",
    pinyin: "Bié shuōhuà, hǎohāor tīng.",
    meaning: "말하지 말고 잘 들어요.",
    words: ["别", "说话", "好好儿", "听"]
  },
  {
    lesson: 10,
    chinese: "新郎和新娘说完了故事。",
    pinyin: "Xīnláng hé xīnniáng shuō wán le gùshi.",
    meaning: "신랑과 신부가 이야기를 마쳤다.",
    words: ["新郎", "和", "新娘", "说完了", "故事"]
  },
  {
    lesson: 10,
    chinese: "大家说，他们的故事怎么样？",
    pinyin: "Dàjiā shuō, tāmen de gùshi zěnmeyàng?",
    meaning: "여러분, 신랑 신부 이야기 어땠어요?",
    words: ["大家", "说", "他们的", "故事", "怎么样"]
  },
  {
    lesson: 10,
    chinese: "好极了！",
    pinyin: "Hǎo jí le!",
    meaning: "정말 좋아요!",
    words: ["好极了"]
  },
  {
    lesson: 10,
    chinese: "太精彩了！",
    pinyin: "Tài jīngcǎi le!",
    meaning: "정말 멋져요!",
    words: ["太", "精彩", "了"]
  },
  {
    lesson: 10,
    chinese: "来，我们再一次举杯，祝新郎新娘和和美美！",
    pinyin: "Lái, wǒmen zài yí cì jǔ bēi, zhù xīnláng xīnniáng héhé měiměi!",
    meaning: "자, 우리 다시 한번 잔을 들어 신랑, 신부가 화목하게 잘 살도록 축복합시다!",
    words: ["来", "我们", "再", "一次", "举杯", "祝", "新郎新娘", "和和美美"]
  },
  {
    lesson: 10,
    chinese: "白头到老！",
    pinyin: "Bái tóu dào lǎo!",
    meaning: "백년해로하세요!",
    words: ["白头到老"]
  },
  {
    lesson: 10,
    chinese: "办喜事，当然要选好日子。",
    pinyin: "Bàn xǐshì, dāngrán yào xuǎn hǎo rìzi.",
    meaning: "결혼식을 치르는데 당연히 좋은 날짜를 골라야 한다.",
    words: ["办", "喜事", "当然", "要", "选", "好", "日子"]
  },
  {
    lesson: 10,
    chinese: "请大家吃喜糖，喝喜酒啦！",
    pinyin: "Qǐng dàjiā chī xǐtáng, hē xǐjiǔ la!",
    meaning: "모두 결혼 사탕을 드시고 결혼 축하주를 마셔요!",
    words: ["请", "大家", "吃", "喜糖", "喝", "喜酒", "啦"]
  },
  {
    lesson: 10,
    chinese: "怪不得今天他这么高兴呢，原来妈妈来看他了。",
    pinyin: "Guàibude jīntiān tā zhème gāoxìng ne, yuánlái māma lái kàn tā le.",
    meaning: "어쩐지 오늘 그가 그렇게 기분이 좋더라니, 알고 보니 어머니가 그를 보러 오셨구나.",
    words: ["怪不得", "今天", "他", "这么", "高兴", "呢", "原来", "妈妈", "来", "看", "他", "了"]
  },
  {
    lesson: 10,
    chinese: "她是在中国长大的，怪不得她的汉语说得这么棒呢！",
    pinyin: "Tā shì zài Zhōngguó zhǎng dà de, guàibude tā de Hànyǔ shuō de zhème bàng ne!",
    meaning: "그녀는 중국에서 자랐어. 어쩐지 그녀의 중국어 실력이 대단하더라니!",
    words: ["她", "是", "在", "中国", "长大", "的", "怪不得", "她的", "汉语", "说得", "这么", "棒", "呢"]
  },
  {
    lesson: 10,
    chinese: "再来一首吧！",
    pinyin: "Zài lái yì shǒu ba!",
    meaning: "한 곡 더 불러!",
    words: ["再", "来", "一首", "吧"]
  },
  {
    lesson: 10,
    chinese: "周末来个大扫除吧。",
    pinyin: "Zhōumò lái ge dà sǎochú ba.",
    meaning: "주말에 대청소하자.",
    words: ["周末", "来个", "大扫除", "吧"]
  },
  {
    lesson: 10,
    chinese: "我吃蛋糕，你来不来？",
    pinyin: "Wǒ chī dàngāo, nǐ lái bù lái?",
    meaning: "나 케이크 먹을 건데, 너도 먹을래?",
    words: ["我", "吃", "蛋糕", "你", "来不来"]
  },
  {
    lesson: 10,
    chinese: "他们常常拿小孩子开心。",
    pinyin: "Tāmen chángcháng ná xiǎo háizi kāixīn.",
    meaning: "그들은 항상 어린아이를 놀리며 장난친다.",
    words: ["他们", "常常", "拿", "小孩子", "开心"]
  },
  {
    lesson: 10,
    chinese: "你们别拿我说错的话开心了。",
    pinyin: "Nǐmen bié ná wǒ shuō cuò de huà kāixīn le.",
    meaning: "너희들 내가 잘못한 말을 가지고 놀리지 마.",
    words: ["你们", "别", "拿", "我", "说错的", "话", "开心", "了"]
  },
  {
    lesson: 10,
    chinese: "通过了面试，然后就可以上班了。",
    pinyin: "Tōngguò le miànshì, ránhòu jiù kěyǐ shàngbān le.",
    meaning: "면접에 통과하면 바로 출근하면 된다.",
    words: ["通过了", "面试", "然后", "就", "可以", "上班", "了"]
  },
  {
    lesson: 10,
    chinese: "我工作了一年，然后就来中国了。",
    pinyin: "Wǒ gōngzuò le yì nián, ránhòu jiù lái Zhōngguó le.",
    meaning: "나는 1년 동안 일하고 바로 중국에 왔다.",
    words: ["我", "工作了", "一年", "然后", "就", "来", "中国", "了"]
  },
  {
    lesson: 10,
    chinese: "我看了一会儿电视，然后就睡觉了。",
    pinyin: "Wǒ kàn le yíhuìr diànshì, ránhòu jiù shuìjiào le.",
    meaning: "나는 TV를 잠시 보고 바로 잠들었다.",
    words: ["我", "看了", "一会儿", "电视", "然后", "就", "睡觉", "了"]
  },
  {
    lesson: 10,
    chinese: "怪不得没人相信呢，原来他总开玩笑。",
    pinyin: "Guàibude méi rén xiāngxìn ne, yuánlái tā zǒng kāi wánxiào.",
    meaning: "어쩐지 아무도 안 믿더라니, 알고 보니 그는 늘 농담을 하는구나.",
    words: ["怪不得", "没人", "相信", "呢", "原来", "他", "总", "开玩笑"]
  },
  {
    lesson: 10,
    chinese: "怪不得他这么重视呢，原来这是毕业考试。",
    pinyin: "Guàibude tā zhème zhòngshì ne, yuánlái zhè shì bìyè kǎoshì.",
    meaning: "어쩐지 그가 그렇게 중시하더라니, 알고 보니 이건 졸업시험이구나.",
    words: ["怪不得", "他", "这么", "重视", "呢", "原来", "这", "是", "毕业考试"]
  },
  {
    lesson: 10,
    chinese: "怪不得他们那么熟悉呢，原来是同班同学。",
    pinyin: "Guàibude tāmen nàme shúxī ne, yuánlái shì tóngbān tóngxué.",
    meaning: "어쩐지 그들이 그렇게 잘 알더라니, 알고 보니 같은 반 친구였구나.",
    words: ["怪不得", "他们", "那么", "熟悉", "呢", "原来", "是", "同班同学"]
  },
  {
    lesson: 10,
    chinese: "坐火车去的话，最少要一天一夜吧。",
    pinyin: "Zuò huǒchē qù de huà, zuìshǎo yào yì tiān yí yè ba.",
    meaning: "기차를 타고 간다면 최소한 하루 낮과 하룻밤은 걸릴 거야.",
    words: ["坐", "火车", "去", "的话", "最少", "要", "一天一夜", "吧"]
  },
  {
    lesson: 10,
    chinese: "韩国同学最少占百分之五十吧。",
    pinyin: "Hánguó tóngxué zuìshǎo zhàn bǎi fēn zhī wǔshí ba.",
    meaning: "한국인 학생이 최소한 50퍼센트는 차지할 거다.",
    words: ["韩国同学", "最少", "占", "百分之五十", "吧"]
  },
  {
    lesson: 10,
    chinese: "写八百字，最少要用半个小时吧。",
    pinyin: "Xiě bābǎi zì, zuìshǎo yào yòng bàn ge xiǎoshí ba.",
    meaning: "800자를 쓰려면 최소한 30분은 걸릴 거다.",
    words: ["写", "八百字", "最少", "要", "用", "半个小时", "吧"]
  },
  {
    lesson: 10,
    chinese: "祝大家学习进步！",
    pinyin: "Zhù dàjiā xuéxí jìnbù!",
    meaning: "모두의 학습이 진보하길 바랍니다!",
    words: ["祝", "大家", "学习", "进步"]
  },
  {
    lesson: 10,
    chinese: "祝老师们节日快乐！",
    pinyin: "Zhù lǎoshīmen jiérì kuàilè!",
    meaning: "선생님들 기념일 축하해요!",
    words: ["祝", "老师们", "节日", "快乐"]
  },
  {
    lesson: 10,
    chinese: "祝你工作顺利！",
    pinyin: "Zhù nǐ gōngzuò shùnlì!",
    meaning: "너 일이 순조롭게 잘 되기를 바라!",
    words: ["祝", "你", "工作", "顺利"]
  },
     {
    lesson: 11,
    chinese: "客人有客人的爱好嘛。",
    pinyin: "Kèrén yǒu kèrén de àihào ma.",
    meaning: "사람마다 각자의 취미가 있잖아.",
    words: ["客人", "有", "客人的", "爱好", "嘛"]
  },
  {
    lesson: 11,
    chinese: "中国人晚上一般干什么？",
    pinyin: "Zhōngguó rén wǎnshang yìbān gàn shénme?",
    meaning: "중국인들은 저녁에 주로 뭘 하니?",
    words: ["中国人", "晚上", "一般", "干", "什么"]
  },
  {
    lesson: 11,
    chinese: "人跟人不一样。",
    pinyin: "Rén gēn rén bù yíyàng.",
    meaning: "사람마다 다 달라.",
    words: ["人", "跟", "人", "不", "一样"]
  },
  {
    lesson: 11,
    chinese: "拿我来说吧，主要是看电视。",
    pinyin: "Ná wǒ lái shuō ba, zhǔyào shì kàn diànshì.",
    meaning: "나로 말하자면 주로 TV를 시청해.",
    words: ["拿", "我", "来说", "吧", "主要", "是", "看", "电视"]
  },
  {
    lesson: 11,
    chinese: "晚上常常有好看的电视剧，一天两集。",
    pinyin: "Wǎnshang chángcháng yǒu hǎokàn de diànshìjù, yì tiān liǎng jí.",
    meaning: "저녁에 종종 재미있는 드라마를 하루에 두 편씩 해 줘.",
    words: ["晚上", "常常", "有", "好看的", "电视剧", "一天", "两集"]
  },
  {
    lesson: 11,
    chinese: "一个电视剧一般有二三十集，有的四五十集。",
    pinyin: "Yí ge diànshìjù yìbān yǒu èr sān shí jí, yǒu de sì wǔ shí jí.",
    meaning: "드라마 한 편은 보통 20~30회 정도인데, 어떤 것은 40~50회까지 있어.",
    words: ["一个", "电视剧", "一般", "有", "二三十集", "有的", "四五十集"]
  },
  {
    lesson: 11,
    chinese: "那么长！",
    pinyin: "Nàme cháng!",
    meaning: "그렇게 길어!",
    words: ["那么", "长"]
  },
  {
    lesson: 11,
    chinese: "如果好看就不觉得长。",
    pinyin: "Rúguǒ hǎokàn jiù bù juéde cháng.",
    meaning: "만약 재미있으면 그다지 길게 느껴지지 않아.",
    words: ["如果", "好看", "就", "不", "觉得", "长"]
  },
  {
    lesson: 11,
    chinese: "除了看电视，还干什么？",
    pinyin: "Chúle kàn diànshì, hái gàn shénme?",
    meaning: "TV 시청 외에 또 무엇을 하니?",
    words: ["除了", "看", "电视", "还", "干", "什么"]
  },
  {
    lesson: 11,
    chinese: "已经退休的，有的打牌，有的打麻将。",
    pinyin: "Yǐjīng tuìxiū de, yǒu de dǎ pái, yǒu de dǎ májiàng.",
    meaning: "이미 은퇴한 어떤 사람은 카드를 하고, 어떤 사람은 마작을 하기도 해.",
    words: ["已经", "退休的", "有的", "打牌", "有的", "打", "麻将"]
  },
  {
    lesson: 11,
    chinese: "没退休的，拿我姐姐来说，她是教师。",
    pinyin: "Méi tuìxiū de, ná wǒ jiějie lái shuō, tā shì jiàoshī.",
    meaning: "아직 은퇴하지 않은 사람들, 우리 언니를 예로 들면 그녀는 교사야.",
    words: ["没", "退休的", "拿", "我姐姐", "来说", "她", "是", "教师"]
  },
  {
    lesson: 11,
    chinese: "一般是备备课，陪孩子玩儿一会儿。",
    pinyin: "Yìbān shì bèi bei kè, péi háizi wánr yíhuìr.",
    meaning: "보통은 수업 준비를 좀 하거나 아이와 잠깐 놀아 줘.",
    words: ["一般", "是", "备备课", "陪", "孩子", "玩儿", "一会儿"]
  },
  {
    lesson: 11,
    chinese: "再做点儿家务什么的，就差不多该睡觉了。",
    pinyin: "Zài zuò diǎnr jiāwù shénme de, jiù chàbuduō gāi shuìjiào le.",
    meaning: "그리고 집안일 같은 것을 좀 하면 거의 잠잘 시간이 돼.",
    words: ["再", "做点儿", "家务", "什么的", "就", "差不多", "该", "睡觉", "了"]
  },
  {
    lesson: 11,
    chinese: "其他年轻人呢？",
    pinyin: "Qítā niánqīng rén ne?",
    meaning: "다른 젊은이들은?",
    words: ["其他", "年轻人", "呢"]
  },
  {
    lesson: 11,
    chinese: "有的去逛逛街，跳跳舞，唱唱卡拉OK什么的。",
    pinyin: "Yǒu de qù guàng guang jiē, tiào tiao wǔ, chàng chang kǎlā OK shénme de.",
    meaning: "어떤 이들은 쇼핑하거나, 춤을 추기도 하고, 노래방에서 노래를 부르기도 해.",
    words: ["有的", "去", "逛逛街", "跳跳舞", "唱唱", "卡拉OK", "什么的"]
  },
  {
    lesson: 11,
    chinese: "有的上网聊聊天儿。",
    pinyin: "Yǒu de shàngwǎng liáo liao tiānr.",
    meaning: "어떤 이들은 인터넷 채팅을 하기도 해.",
    words: ["有的", "上网", "聊聊天儿"]
  },
  {
    lesson: 11,
    chinese: "吃完晚饭先出去散散步。",
    pinyin: "Chī wán wǎnfàn xiān chūqù sàn san bù.",
    meaning: "저녁을 먹은 후 먼저 밖에 나가서 산책해.",
    words: ["吃完", "晚饭", "先", "出去", "散散步"]
  },
  {
    lesson: 11,
    chinese: "然后回房间复习复习白天学的新课。",
    pinyin: "Ránhòu huí fángjiān fùxí fùxí báitiān xué de xīn kè.",
    meaning: "그다음 방에 돌아와서 낮에 배운 새로운 과를 복습해.",
    words: ["然后", "回", "房间", "复习复习", "白天", "学的", "新课"]
  },
  {
    lesson: 11,
    chinese: "有的时候给家里打打电话。",
    pinyin: "Yǒu de shíhou gěi jiālǐ dǎ da diànhuà.",
    meaning: "어떤 때는 집에 전화를 걸기도 해.",
    words: ["有的时候", "给", "家里", "打打电话"]
  },
  {
    lesson: 11,
    chinese: "或者上上网，给朋友发发E-mail什么的。",
    pinyin: "Huòzhě shàng shang wǎng, gěi péngyou fā fa E-mail shénme de.",
    meaning: "또는 인터넷을 하고, 친구에게 이메일을 보내기도 해.",
    words: ["或者", "上上网", "给", "朋友", "发发", "E-mail", "什么的"]
  },
  {
    lesson: 11,
    chinese: "快来听，我下载的这首歌太好听了。",
    pinyin: "Kuài lái tīng, wǒ xiàzài de zhè shǒu gē tài hǎotīng le.",
    meaning: "어서 와서 들어봐, 내가 다운로드 받은 이 노래가 아주 듣기 좋아.",
    words: ["快", "来", "听", "我", "下载的", "这首歌", "太", "好听", "了"]
  },
  {
    lesson: 11,
    chinese: "我听听，我怎么不觉得好听？",
    pinyin: "Wǒ tīng ting, wǒ zěnme bù juéde hǎotīng?",
    meaning: "어디 좀 들어 보자, 나는 왜 좋다고 생각되지 않지?",
    words: ["我", "听听", "我", "怎么", "不", "觉得", "好听"]
  },
  {
    lesson: 11,
    chinese: "你别这么说，你才比我大两岁。",
    pinyin: "Nǐ bié zhème shuō, nǐ cái bǐ wǒ dà liǎng suì.",
    meaning: "그렇게 말하지 마, 너는 나보다 겨우 두 살밖에 많지 않은걸.",
    words: ["你", "别", "这么", "说", "你", "才", "比", "我", "大", "两岁"]
  },
  {
    lesson: 11,
    chinese: "难道你不喜欢流行歌曲吗？",
    pinyin: "Nándào nǐ bù xǐhuan liúxíng gēqǔ ma?",
    meaning: "설마 너 유행가를 안 좋아해?",
    words: ["难道", "你", "不", "喜欢", "流行歌曲", "吗"]
  },
  {
    lesson: 11,
    chinese: "不太喜欢，主要是不常听。",
    pinyin: "Bú tài xǐhuan, zhǔyào shì bù cháng tīng.",
    meaning: "그다지 좋아하지도 않고, 중요한 건 자주 안 듣는다는 거지.",
    words: ["不太", "喜欢", "主要", "是", "不", "常", "听"]
  },
  {
    lesson: 11,
    chinese: "我还是喜欢老歌。",
    pinyin: "Wǒ háishi xǐhuan lǎo gē.",
    meaning: "난 역시 오래된 노래가 좋아.",
    words: ["我", "还是", "喜欢", "老歌"]
  },
  {
    lesson: 11,
    chinese: "以前的老歌，可好听了。",
    pinyin: "Yǐqián de lǎo gē, kě hǎotīng le.",
    meaning: "옛날 노래는 정말 듣기 좋아.",
    words: ["以前的", "老歌", "可", "好听", "了"]
  },
  {
    lesson: 11,
    chinese: "我发现咱们俩虽然都是歌迷，可是迷的对象大不一样。",
    pinyin: "Wǒ fāxiàn zánmen liǎ suīrán dōu shì gēmí, kěshì mí de duìxiàng dà bù yíyàng.",
    meaning: "우리는 비록 모두 노래를 좋아하지만 좋아하는 대상은 아주 다른 것 같아.",
    words: ["我", "发现", "咱们俩", "虽然", "都", "是", "歌迷", "可是", "迷的", "对象", "大", "不", "一样"]
  },
  {
    lesson: 11,
    chinese: "电影你爱看老的，歌曲也爱听老的。",
    pinyin: "Diànyǐng nǐ ài kàn lǎo de, gēqǔ yě ài tīng lǎo de.",
    meaning: "너는 영화도 옛날 영화를 즐겨 보고, 노래도 옛날 노래를 즐겨 듣는구나.",
    words: ["电影", "你", "爱", "看", "老的", "歌曲", "也", "爱", "听", "老的"]
  },
  {
    lesson: 11,
    chinese: "我怎么对老歌就没兴趣呢？",
    pinyin: "Wǒ zěnme duì lǎo gē jiù méi xìngqù ne?",
    meaning: "나는 어째서 옛 노래에는 흥미가 없을까?",
    words: ["我", "怎么", "对", "老歌", "就", "没", "兴趣", "呢"]
  },
  {
    lesson: 11,
    chinese: "这没什么奇怪的，客人有客人的爱好嘛。",
    pinyin: "Zhè méi shénme qíguài de, kèrén yǒu kèrén de àihào ma.",
    meaning: "그건 뭐 별로 이상할 것도 없지, 사람마다 각자의 기호가 있잖아.",
    words: ["这", "没", "什么", "奇怪的", "客人", "有", "客人的", "爱好", "嘛"]
  },
  {
    lesson: 11,
    chinese: "不过，咱们有一点是相同的。",
    pinyin: "Búguò, zánmen yǒu yì diǎn shì xiāngtóng de.",
    meaning: "그렇지만 우린 한 가지는 같아.",
    words: ["不过", "咱们", "有", "一点", "是", "相同的"]
  },
  {
    lesson: 11,
    chinese: "咱们都爱好音乐，对吧？",
    pinyin: "Zánmen dōu àihào yīnyuè, duì ba?",
    meaning: "우리는 모두 음악을 좋아한다는 거지, 그렇지?",
    words: ["咱们", "都", "爱好", "音乐", "对", "吧"]
  },
  {
    lesson: 11,
    chinese: "下班回家，我不是在厨房，就是在书房。",
    pinyin: "Xiàbān huí jiā, wǒ bú shì zài chúfáng, jiù shì zài shūfáng.",
    meaning: "퇴근하고 집에 돌아오면 저는 주방에 있거나 서재에 있습니다.",
    words: ["下班", "回家", "我", "不是", "在", "厨房", "就是", "在", "书房"]
  },
  {
    lesson: 11,
    chinese: "我有两大爱好，一动一静，一个是做饭，一个是看书。",
    pinyin: "Wǒ yǒu liǎng dà àihào, yí dòng yí jìng, yí ge shì zuò fàn, yí ge shì kàn shū.",
    meaning: "저에게는 두 가지 큰 취미가 있는데, 하나는 동적이고 하나는 정적인 것으로, 하나는 요리이고 하나는 독서입니다.",
    words: ["我", "有", "两大", "爱好", "一动一静", "一个", "是", "做饭", "一个", "是", "看书"]
  },
  {
    lesson: 11,
    chinese: "做饭可以活动身体，看书可以丰富知识。",
    pinyin: "Zuò fàn kěyǐ huódòng shēntǐ, kàn shū kěyǐ fēngfù zhīshi.",
    meaning: "요리를 하면 몸을 움직일 수 있고, 독서는 지식을 풍부하게 해 줍니다.",
    words: ["做饭", "可以", "活动", "身体", "看书", "可以", "丰富", "知识"]
  },
  {
    lesson: 11,
    chinese: "怎么样？挺科学吧？",
    pinyin: "Zěnmeyàng? Tǐng kēxué ba?",
    meaning: "어떤가요? 꽤 과학적이지 않나요?",
    words: ["怎么样", "挺", "科学", "吧"]
  },
  {
    lesson: 11,
    chinese: "你说我应该出去晒晒太阳？",
    pinyin: "Nǐ shuō wǒ yīnggāi chūqù shài shai tàiyáng?",
    meaning: "제가 밖으로 나가서 햇빛을 좀 받아야 한다고요?",
    words: ["你", "说", "我", "应该", "出去", "晒晒", "太阳"]
  },
  {
    lesson: 11,
    chinese: "不用出去。",
    pinyin: "Búyòng chūqù.",
    meaning: "밖에 나갈 필요가 없습니다.",
    words: ["不用", "出去"]
  },
  {
    lesson: 11,
    chinese: "坐在我家的阳台上，一边晒太阳，一边看书，那才舒服呢！",
    pinyin: "Zuò zài wǒ jiā de yángtái shang, yìbiān shài tàiyáng, yìbiān kàn shū, nà cái shūfu ne!",
    meaning: "우리 집 베란다에 앉아서 한편으로는 햇볕을 쬐고, 한편으로는 책을 보면 그게 정말 편안합니다!",
    words: ["坐在", "我家的", "阳台上", "一边", "晒太阳", "一边", "看书", "那", "才", "舒服", "呢"]
  },
  {
    lesson: 11,
    chinese: "有的年轻人特别喜欢名牌。",
    pinyin: "Yǒu de niánqīng rén tèbié xǐhuan míngpái.",
    meaning: "어떤 젊은이들은 특히 명품을 좋아한다.",
    words: ["有的", "年轻人", "特别", "喜欢", "名牌"]
  },
  {
    lesson: 11,
    chinese: "拿小王来说，他穿的，用的都是名牌。",
    pinyin: "Ná Xiǎo Wáng lái shuō, tā chuān de, yòng de dōu shì míngpái.",
    meaning: "샤오왕을 예로 들면, 그가 입는 것과 쓰는 것은 모두 명품이다.",
    words: ["拿", "小王", "来说", "他", "穿的", "用的", "都", "是", "名牌"]
  },
  {
    lesson: 11,
    chinese: "难道有困难就不学了吗？",
    pinyin: "Nándào yǒu kùnnan jiù bù xué le ma?",
    meaning: "설마 어렵다고 배우지 않을까?",
    words: ["难道", "有", "困难", "就", "不", "学", "了", "吗"]
  },
  {
    lesson: 11,
    chinese: "难道不吃药，不打针病就能好了不成？",
    pinyin: "Nándào bù chī yào, bù dǎ zhēn bìng jiù néng hǎo le bùchéng?",
    meaning: "설마 약도 안 먹고 주사도 맞지 않았는데 병이 나을 수 있겠는가?",
    words: ["难道", "不", "吃药", "不", "打针", "病", "就", "能", "好", "了", "不成"]
  },
  {
    lesson: 11,
    chinese: "不论下雨或者刮风，他都骑自行车上班。",
    pinyin: "Búlùn xià yǔ huòzhě guā fēng, tā dōu qí zìxíngchē shàngbān.",
    meaning: "비가 오든 바람이 불든 그는 모두 자전거를 타고 출근한다.",
    words: ["不论", "下雨", "或者", "刮风", "他", "都", "骑", "自行车", "上班"]
  },
  {
    lesson: 11,
    chinese: "学历史还是学文学？",
    pinyin: "Xué lìshǐ háishi xué wénxué?",
    meaning: "역사를 배울까 아니면 문학을 배울까?",
    words: ["学", "历史", "还是", "学", "文学"]
  },
  {
    lesson: 11,
    chinese: "我不知道学文学好还是学历史好。",
    pinyin: "Wǒ bù zhīdao xué wénxué hǎo háishi xué lìshǐ hǎo.",
    meaning: "나는 문학을 배우는 것이 좋을지 역사를 배우는 것이 좋을지 모르겠다.",
    words: ["我", "不知道", "学", "文学", "好", "还是", "学", "历史", "好"]
  },
  {
    lesson: 11,
    chinese: "你今天来或者明天来都行。",
    pinyin: "Nǐ jīntiān lái huòzhě míngtiān lái dōu xíng.",
    meaning: "네가 오늘 오든 내일 오든 다 괜찮다.",
    words: ["你", "今天", "来", "或者", "明天", "来", "都", "行"]
  },
  {
    lesson: 11,
    chinese: "我们每天不是上课就是考试，忙得很。",
    pinyin: "Wǒmen měitiān bú shì shàngkè jiù shì kǎoshì, máng de hěn.",
    meaning: "우리는 매일 수업이 아니면 시험을 봐서 아주 바쁘다.",
    words: ["我们", "每天", "不是", "上课", "就是", "考试", "忙得", "很"]
  },
  {
    lesson: 11,
    chinese: "食堂的饭不是馒头就是米饭，我想吃点儿别的。",
    pinyin: "Shítáng de fàn bú shì mántou jiù shì mǐfàn, wǒ xiǎng chī diǎnr bié de.",
    meaning: "식당의 밥은 만터우가 아니면 밥이라서 나는 다른 것을 좀 먹고 싶다.",
    words: ["食堂的", "饭", "不是", "馒头", "就是", "米饭", "我", "想", "吃点儿", "别的"]
  },
  {
    lesson: 11,
    chinese: "除了上网，还喜欢什么？",
    pinyin: "Chúle shàngwǎng, hái xǐhuan shénme?",
    meaning: "인터넷 하는 것 외에 또 무엇을 좋아하니?",
    words: ["除了", "上网", "还", "喜欢", "什么"]
  },
  {
    lesson: 11,
    chinese: "除了夸你帅，还夸你唱歌好听。",
    pinyin: "Chúle kuā nǐ shuài, hái kuā nǐ chànggē hǎotīng.",
    meaning: "너를 잘생겼다고 칭찬한 것 외에 노래를 잘한다고도 칭찬했다.",
    words: ["除了", "夸", "你", "帅", "还", "夸", "你", "唱歌", "好听"]
  },
  {
    lesson: 11,
    chinese: "留学生有的住校内，有的住校外。",
    pinyin: "Liúxuéshēng yǒu de zhù xiào nèi, yǒu de zhù xiào wài.",
    meaning: "유학생 중 어떤 사람은 교내에 살고 어떤 사람은 교외에 산다.",
    words: ["留学生", "有的", "住", "校内", "有的", "住", "校外"]
  },
  {
    lesson: 11,
    chinese: "服务员有的服务热情，有的服务不热情。",
    pinyin: "Fúwùyuán yǒu de fúwù rèqíng, yǒu de fúwù bù rèqíng.",
    meaning: "종업원 중 어떤 사람은 서비스가 친절하고 어떤 사람은 친절하지 않다.",
    words: ["服务员", "有的", "服务", "热情", "有的", "服务", "不", "热情"]
  },
  {
    lesson: 11,
    chinese: "每个国家有每个国家的法律。",
    pinyin: "Měi ge guójiā yǒu měi ge guójiā de fǎlǜ.",
    meaning: "모든 나라에는 각 나라의 법률이 있다.",
    words: ["每个", "国家", "有", "每个", "国家的", "法律"]
  },
  {
    lesson: 11,
    chinese: "每个民族有每个民族的传统。",
    pinyin: "Měi ge mínzú yǒu měi ge mínzú de chuántǒng.",
    meaning: "모든 민족에게는 각 민족마다의 전통이 있다.",
    words: ["每个", "民族", "有", "每个", "民族的", "传统"]
  },
  {
    lesson: 11,
    chinese: "每个城市有每个城市的特色。",
    pinyin: "Měi ge chéngshì yǒu měi ge chéngshì de tèsè.",
    meaning: "모든 도시는 각 도시의 특색이 있다.",
    words: ["每个", "城市", "有", "每个", "城市的", "特色"]
  },
      {
    lesson: 12,
    chinese: "谁爱吃什么就取什么。",
    pinyin: "Shéi ài chī shénme jiù qǔ shénme.",
    meaning: "누구든 먹고 싶은 것을 가져다 먹어.",
    words: ["谁", "爱", "吃", "什么", "就", "取", "什么"]
  },
  {
    lesson: 12,
    chinese: "咱们刚搬了新房子，请朋友们来聚聚，吃顿饭吧？",
    pinyin: "Zánmen gāng bān le xīn fángzi, qǐng péngyoumen lái jù ju, chī dùn fàn ba?",
    meaning: "우리 막 새집으로 이사했는데, 친구들을 불러 모여서 식사 한 끼 할까요?",
    words: ["咱们", "刚", "搬了", "新房子", "请", "朋友们", "来", "聚聚", "吃", "顿", "饭", "吧"]
  },
  {
    lesson: 12,
    chinese: "好啊，我建议来个自助餐。",
    pinyin: "Hǎo a, wǒ jiànyì lái ge zìzhùcān.",
    meaning: "좋지요, 나는 뷔페 형식을 추천해요.",
    words: ["好啊", "我", "建议", "来个", "自助餐"]
  },
  {
    lesson: 12,
    chinese: "准备一些凉菜，再做几个热菜。",
    pinyin: "Zhǔnbèi yìxiē liángcài, zài zuò jǐ ge rècài.",
    meaning: "냉채 몇 가지를 준비하고, 다시 따뜻한 요리도 몇 가지 할게요.",
    words: ["准备", "一些", "凉菜", "再", "做", "几个", "热菜"]
  },
  {
    lesson: 12,
    chinese: "要准备酒吗？",
    pinyin: "Yào zhǔnbèi jiǔ ma?",
    meaning: "술을 준비해야 할까요?",
    words: ["要", "准备", "酒", "吗"]
  },
  {
    lesson: 12,
    chinese: "当然得准备了。",
    pinyin: "Dāngrán děi zhǔnbèi le.",
    meaning: "당연히 준비해야죠.",
    words: ["当然", "得", "准备", "了"]
  },
  {
    lesson: 12,
    chinese: "除了啤酒，再来点儿葡萄酒什么的。",
    pinyin: "Chúle píjiǔ, zài lái diǎnr pútáojiǔ shénme de.",
    meaning: "맥주 외에 와인 같은 것도 좀 두죠.",
    words: ["除了", "啤酒", "再", "来", "点儿", "葡萄酒", "什么的"]
  },
  {
    lesson: 12,
    chinese: "要不要白酒？",
    pinyin: "Yào bú yào báijiǔ?",
    meaning: "바이주는 필요할까요?",
    words: ["要不要", "白酒"]
  },
  {
    lesson: 12,
    chinese: "不要了吧？",
    pinyin: "Bú yào le ba?",
    meaning: "필요 없겠죠?",
    words: ["不要", "了", "吧"]
  },
  {
    lesson: 12,
    chinese: "白酒太厉害，喝了容易醉。",
    pinyin: "Báijiǔ tài lìhai, hē le róngyì zuì.",
    meaning: "바이주는 너무 세서 마시면 쉽게 취해요.",
    words: ["白酒", "太", "厉害", "喝了", "容易", "醉"]
  },
  {
    lesson: 12,
    chinese: "你怎么不吃啊？",
    pinyin: "Nǐ zěnme bù chī a?",
    meaning: "너는 어째서 안 먹니?",
    words: ["你", "怎么", "不", "吃", "啊"]
  },
  {
    lesson: 12,
    chinese: "我早上起得晚，还不太饿。",
    pinyin: "Wǒ zǎoshang qǐ de wǎn, hái bú tài è.",
    meaning: "난 아침에 늦게 일어나서 아직 별로 배가 고프지 않아.",
    words: ["我", "早上", "起得", "晚", "还", "不太", "饿"]
  },
  {
    lesson: 12,
    chinese: "你是不是在减肥？",
    pinyin: "Nǐ shì bú shì zài jiǎnféi?",
    meaning: "다이어트 하는 거 아니니?",
    words: ["你", "是不是", "在", "减肥"]
  },
  {
    lesson: 12,
    chinese: "你别笑话我。",
    pinyin: "Nǐ bié xiàohua wǒ.",
    meaning: "나를 비웃지 마.",
    words: ["你", "别", "笑话", "我"]
  },
  {
    lesson: 12,
    chinese: "这几个月我又长了好几斤，越来越胖了。",
    pinyin: "Zhè jǐ ge yuè wǒ yòu zhǎng le hǎo jǐ jīn, yuè lái yuè pàng le.",
    meaning: "최근 몇 개월 동안 내가 또 몇 근이나 쪄서 갈수록 뚱뚱해지고 있어.",
    words: ["这几个月", "我", "又", "长了", "好几斤", "越来越", "胖", "了"]
  },
  {
    lesson: 12,
    chinese: "你哪儿胖啊？身材多好啊！",
    pinyin: "Nǐ nǎr pàng a? Shēncái duō hǎo a!",
    meaning: "네가 어디가 뚱뚱한데? 몸매가 얼마나 좋은데!",
    words: ["你", "哪儿", "胖", "啊", "身材", "多", "好", "啊"]
  },
  {
    lesson: 12,
    chinese: "我真羡慕你，吃什么都长不胖。",
    pinyin: "Wǒ zhēn xiànmù nǐ, chī shénme dōu zhǎng bú pàng.",
    meaning: "난 네가 정말 부러워, 너는 뭘 먹어도 살이 안 찌잖아.",
    words: ["我", "真", "羡慕", "你", "吃", "什么", "都", "长不胖"]
  },
  {
    lesson: 12,
    chinese: "有口福啊！",
    pinyin: "Yǒu kǒufú a!",
    meaning: "정말 먹을 복이 있어!",
    words: ["有", "口福", "啊"]
  },
  {
    lesson: 12,
    chinese: "我觉得健康是最重要的。",
    pinyin: "Wǒ juéde jiànkāng shì zuì zhòngyào de.",
    meaning: "난 건강이 가장 중요하다고 생각해.",
    words: ["我", "觉得", "健康", "是", "最", "重要", "的"]
  },
  {
    lesson: 12,
    chinese: "胖瘦都是给别人看的。",
    pinyin: "Pàng shòu dōu shì gěi biérén kàn de.",
    meaning: "뚱뚱하고 마른 것은 모두 남에게 보여 주기 위한 거잖아.",
    words: ["胖瘦", "都", "是", "给", "别人", "看", "的"]
  },
  {
    lesson: 12,
    chinese: "身体好，自己觉得舒服比什么都强。",
    pinyin: "Shēntǐ hǎo, zìjǐ juéde shūfu bǐ shénme dōu qiáng.",
    meaning: "몸이 건강하고 스스로 편하게 느끼는 것이 무엇보다 중요해.",
    words: ["身体", "好", "自己", "觉得", "舒服", "比", "什么", "都", "强"]
  },
  {
    lesson: 12,
    chinese: "放心地吃吧。",
    pinyin: "Fàngxīn de chī ba.",
    meaning: "맘 놓고 먹어.",
    words: ["放心地", "吃", "吧"]
  },
  {
    lesson: 12,
    chinese: "饿瘦了，脸色也不好了。",
    pinyin: "È shòu le, liǎnsè yě bù hǎo le.",
    meaning: "배고파서 훌쭉해지면 안색도 안 좋아져.",
    words: ["饿瘦了", "脸色", "也", "不好", "了"]
  },
  {
    lesson: 12,
    chinese: "要是真想瘦一点儿，最好的办法是运动。",
    pinyin: "Yàoshi zhēn xiǎng shòu yìdiǎnr, zuì hǎo de bànfǎ shì yùndòng.",
    meaning: "만약 정말 조금 날씬해지고 싶다면 가장 좋은 방법은 운동이야.",
    words: ["要是", "真", "想", "瘦", "一点儿", "最好的", "办法", "是", "运动"]
  },
  {
    lesson: 12,
    chinese: "我也知道，可是天天坚持不容易。",
    pinyin: "Wǒ yě zhīdào, kěshì tiāntiān jiānchí bù róngyì.",
    meaning: "나도 알아, 하지만 매일 꾸준히 한다는 게 쉽지 않아.",
    words: ["我", "也", "知道", "可是", "天天", "坚持", "不", "容易"]
  },
  {
    lesson: 12,
    chinese: "一停下来，会更胖。",
    pinyin: "Yì tíng xiàlai, huì gèng pàng.",
    meaning: "한번 그만두면 더 뚱뚱해질 거야.",
    words: ["一", "停下来", "会", "更", "胖"]
  },
  {
    lesson: 12,
    chinese: "中国和美国的饮食习惯很不一样吧？",
    pinyin: "Zhōngguó hé Měiguó de yǐnshí xíguàn hěn bù yíyàng ba?",
    meaning: "중국과 미국은 음식 습관이 아주 다르지?",
    words: ["中国", "和", "美国的", "饮食习惯", "很", "不一样", "吧"]
  },
  {
    lesson: 12,
    chinese: "是，很不一样。",
    pinyin: "Shì, hěn bù yíyàng.",
    meaning: "응, 아주 달라.",
    words: ["是", "很", "不一样"]
  },
  {
    lesson: 12,
    chinese: "我喜欢吃中餐，可是有的时候很不习惯。",
    pinyin: "Wǒ xǐhuan chī Zhōngcān, kěshì yǒu de shíhou hěn bù xíguàn.",
    meaning: "나는 중국 음식을 좋아하지만 어떤 경우에는 정말 익숙하지 않아.",
    words: ["我", "喜欢", "吃", "中餐", "可是", "有的时候", "很", "不", "习惯"]
  },
  {
    lesson: 12,
    chinese: "比如说。",
    pinyin: "Bǐrú shuō.",
    meaning: "예를 든다면.",
    words: ["比如说"]
  },
  {
    lesson: 12,
    chinese: "喝酒的时候，主人太热情，总是让我喝。",
    pinyin: "Hē jiǔ de shíhou, zhǔrén tài rèqíng, zǒngshì ràng wǒ hē.",
    meaning: "술을 마실 때 주인이 너무 친절해서 늘 나에게 마시라고 해.",
    words: ["喝酒的时候", "主人", "太", "热情", "总是", "让", "我", "喝"]
  },
  {
    lesson: 12,
    chinese: "我常常不好意思不喝，有时候就喝多了。",
    pinyin: "Wǒ chángcháng bù hǎoyìsi bù hē, yǒu shíhou jiù hē duō le.",
    meaning: "나는 종종 안 마시기가 미안해서 어떤 때는 너무 많이 마셔.",
    words: ["我", "常常", "不好意思", "不", "喝", "有时候", "就", "喝多了"]
  },
  {
    lesson: 12,
    chinese: "这时候，只要你告诉他们你不能喝酒。",
    pinyin: "Zhè shíhou, zhǐyào nǐ gàosu tāmen nǐ bù néng hē jiǔ.",
    meaning: "이럴 때 네가 그들에게 술을 못 마신다고 말하기만 하면 돼.",
    words: ["这时候", "只要", "你", "告诉", "他们", "你", "不能", "喝酒"]
  },
  {
    lesson: 12,
    chinese: "他们不一定非让你喝不可。",
    pinyin: "Tāmen bù yídìng fēi ràng nǐ hē bùkě.",
    meaning: "그들이 반드시 너에게 마시지 않으면 안 된다고 하지는 않을 거야.",
    words: ["他们", "不一定", "非", "让", "你", "喝", "不可"]
  },
  {
    lesson: 12,
    chinese: "如果我是你，我就说谢谢，我不会喝酒。",
    pinyin: "Rúguǒ wǒ shì nǐ, wǒ jiù shuō xièxie, wǒ bú huì hē jiǔ.",
    meaning: "내가 만약 너라면 감사합니다, 저는 술을 잘 못합니다라고 말할 거야.",
    words: ["如果", "我", "是", "你", "我", "就", "说", "谢谢", "我", "不会", "喝酒"]
  },
  {
    lesson: 12,
    chinese: "或者说，我只能少来一点儿。",
    pinyin: "Huòzhě shuō, wǒ zhǐ néng shǎo lái yìdiǎnr.",
    meaning: "혹은 저는 조금밖에 마시지 못합니다라고 말할 거야.",
    words: ["或者", "说", "我", "只能", "少", "来", "一点儿"]
  },
  {
    lesson: 12,
    chinese: "好吧，以后我试试。",
    pinyin: "Hǎo ba, yǐhòu wǒ shì shi.",
    meaning: "알겠어, 나중에 해 볼게.",
    words: ["好吧", "以后", "我", "试试"]
  },
  {
    lesson: 12,
    chinese: "我去过美国。",
    pinyin: "Wǒ qù guo Měiguó.",
    meaning: "나는 미국에 가 본 적이 있어.",
    words: ["我", "去过", "美国"]
  },
  {
    lesson: 12,
    chinese: "我不习惯用刀叉。",
    pinyin: "Wǒ bù xíguàn yòng dāochā.",
    meaning: "나는 나이프와 포크를 사용하는 게 익숙하지 않아.",
    words: ["我", "不", "习惯", "用", "刀叉"]
  },
  {
    lesson: 12,
    chinese: "左手拿叉，右手拿刀，切肉切菜，实在麻烦。",
    pinyin: "Zuǒshǒu ná chā, yòushǒu ná dāo, qiē ròu qiē cài, shízài máfan.",
    meaning: "왼손으로 포크를 들고 오른손으로 나이프를 들고 고기와 채소를 자르려니 정말 불편했어.",
    words: ["左手", "拿", "叉", "右手", "拿", "刀", "切", "肉", "切", "菜", "实在", "麻烦"]
  },
  {
    lesson: 12,
    chinese: "吃鸡，吃鱼，吃面条儿，就更困难了。",
    pinyin: "Chī jī, chī yú, chī miàntiáor, jiù gèng kùnnan le.",
    meaning: "닭, 생선, 국수를 먹는 것은 더 어려웠어.",
    words: ["吃", "鸡", "吃", "鱼", "吃", "面条儿", "就", "更", "困难", "了"]
  },
  {
    lesson: 12,
    chinese: "这就跟我们不习惯用筷子一样。",
    pinyin: "Zhè jiù gēn wǒmen bù xíguàn yòng kuàizi yíyàng.",
    meaning: "그건 우리가 젓가락 사용하는 게 익숙하지 않은 것과 같네.",
    words: ["这", "就", "跟", "我们", "不", "习惯", "用", "筷子", "一样"]
  },
  {
    lesson: 12,
    chinese: "不练不行。",
    pinyin: "Bú liàn bù xíng.",
    meaning: "연습하지 않으면 안 돼.",
    words: ["不", "练", "不", "行"]
  },
  {
    lesson: 12,
    chinese: "你们吃早饭的习惯也和我们不太一样。",
    pinyin: "Nǐmen chī zǎofàn de xíguàn yě hé wǒmen bú tài yíyàng.",
    meaning: "너희의 아침 식사 습관도 우리와 별로 같지 않아.",
    words: ["你们", "吃", "早饭的", "习惯", "也", "和", "我们", "不太", "一样"]
  },
  {
    lesson: 12,
    chinese: "你们喜欢吃面包。",
    pinyin: "Nǐmen xǐhuan chī miànbāo.",
    meaning: "너희는 빵을 즐겨 먹어.",
    words: ["你们", "喜欢", "吃", "面包"]
  },
  {
    lesson: 12,
    chinese: "喝从冰箱里刚拿出来的凉牛奶。",
    pinyin: "Hē cóng bīngxiāng li gāng ná chūlai de liáng niúnǎi.",
    meaning: "냉장고에서 막 꺼낸 차가운 우유를 마셔.",
    words: ["喝", "从", "冰箱里", "刚", "拿出来的", "凉", "牛奶"]
  },
  {
    lesson: 12,
    chinese: "同时，还要喝一些果汁。",
    pinyin: "Tóngshí, hái yào hē yìxiē guǒzhī.",
    meaning: "동시에 과일 주스도 좀 마시잖아.",
    words: ["同时", "还", "要", "喝", "一些", "果汁"]
  },
  {
    lesson: 12,
    chinese: "我的肚子就受不了。",
    pinyin: "Wǒ de dùzi jiù shòu bù liǎo.",
    meaning: "내 배는 견디지 못할 거야.",
    words: ["我的", "肚子", "就", "受不了"]
  },
  {
    lesson: 12,
    chinese: "我习惯喝热豆浆，吃油条，再来一个煮鸡蛋。",
    pinyin: "Wǒ xíguàn hē rè dòujiāng, chī yóutiáo, zài lái yí ge zhǔ jīdàn.",
    meaning: "나는 따뜻한 더우장을 마시고, 여우탸오를 먹고, 또 삶은 달걀 하나를 먹는 데 익숙해.",
    words: ["我", "习惯", "喝", "热", "豆浆", "吃", "油条", "再", "来", "一个", "煮鸡蛋"]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuizData = [];
let currentMode = "meaning";
let wrongAnswers = [];
const questionCount = 15;
const orderQuestionCount = 15;
let selectedLessons = [8, 9, 10, 11, 12];

function toggleLesson(lesson, button) {
  const index = selectedLessons.indexOf(lesson);

  if (index === -1) {
    selectedLessons.push(lesson);
    button.classList.add("selected");
  } else {
    selectedLessons.splice(index, 1);
    button.classList.remove("selected");
  }

  const warning = document.getElementById("lesson-warning");

  if (selectedLessons.length === 0) {
    warning.textContent = "최소 한 과 이상 선택해야 해!";
  } else {
    warning.textContent =
      "선택된 범위: " +
      selectedLessons
        .sort((a, b) => a - b)
        .map(n => n + "과")
        .join(", ");
  }
}

function filterByLesson(data) {
  return data.filter(item => selectedLessons.includes(item.lesson));
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz(mode) {
  currentMode = mode;
currentQuestionIndex = 0;
score = 0;
wrongAnswers = [];

  const filteredData = filterByLesson(quizData);

if (selectedLessons.length === 0 || filteredData.length === 0) {
  alert("출제 범위를 하나 이상 선택해줘!");
  return;
}

shuffledQuizData = shuffleArray([...filteredData]).slice(0, Math.min(questionCount, filteredData.length));

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showQuestion();
}

function getQuestionText(question) {
  if (currentMode === "meaning") {
    document.getElementById("mode-title").textContent = "중국어 단어의 뜻은?";
    return question.chinese;
  }

  if (currentMode === "pinyin") {
    document.getElementById("mode-title").textContent = "중국어 단어의 병음은?";
    return question.chinese;
  }

  if (currentMode === "chinese") {
    document.getElementById("mode-title").textContent = "이 뜻에 해당하는 중국어는?";
    return question.meaning;
  }

  if (currentMode === "sentenceMeaning") {
    document.getElementById("mode-title").textContent = "중국어 문장의 해석은?";
    return question.chinese;
  }

  if (currentMode === "sentenceChinese") {
    document.getElementById("mode-title").textContent = "이 해석에 해당하는 중국어 문장은?";
    return question.meaning;
  }
}
function getAnswerKey() {
  if (currentMode === "meaning") {
    return "meaning";
  }

  if (currentMode === "pinyin") {
    return "pinyin";
  }

  if (currentMode === "chinese") {
    return "chinese";
  }

  if (currentMode === "sentenceMeaning") {
    return "meaning";
  }

  if (currentMode === "sentenceChinese") {
    return "chinese";
  }
}
function showQuestion() {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const answerKey = getAnswerKey();

  document.getElementById("progress").textContent =
    `문제 ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;

  document.getElementById("question").textContent = getQuestionText(currentQuestion);
  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const choices = makeChoices(currentQuestion, answerKey);

  choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;

    button.onclick = function () {
      checkAnswer(choice);
    };

    choicesDiv.appendChild(button);
  });
}

function makeChoices(correctQuestion, answerKey) {
  let choices = [correctQuestion[answerKey]];

  let dataSource;

  const isSentenceQuestion = sentenceData.includes(correctQuestion);

  if (isSentenceQuestion) {
    dataSource = sentenceData;
  } else {
    dataSource = quizData;
  }

  const wrongChoices = dataSource
    .filter(item => item[answerKey] !== correctQuestion[answerKey])
    .map(item => item[answerKey]);

  const randomWrongChoices = shuffleArray(wrongChoices).slice(0, 3);

  choices = choices.concat(randomWrongChoices);

  return shuffleArray(choices);
}

function checkAnswer(answer) {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const answerKey = getAnswerKey();
  const correctAnswer = currentQuestion[answerKey];
  const result = document.getElementById("result");

  if (answer === correctAnswer) {
  result.textContent = "정답입니다!";
  result.style.color = "blue";
  score++;
} else {
  result.textContent = `오답입니다. 정답은 ${correctAnswer}입니다.`;
  result.style.color = "red";

  wrongAnswers.push({
    question: getQuestionText(currentQuestion),
    selected: answer,
    correct: correctAnswer,
    chinese: currentQuestion.chinese,
    pinyin: currentQuestion.pinyin,
    meaning: currentQuestion.meaning
  });
}

  document.getElementById("score").textContent = `점수: ${score}`;

  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(button => {
    button.disabled = true;
  });

  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuizData.length) {
    if (currentMode === "order") {
      showOrderQuestion();
    } else {
      showQuestion();
    }
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("progress").textContent = "퀴즈 완료!";
  document.getElementById("mode-title").textContent = "결과";
  document.getElementById("question").textContent = "수고했어요!";
  document.getElementById("choices").innerHTML = "";

  let resultText = `총 ${shuffledQuizData.length}문제 중 ${score}문제를 맞혔습니다.`;

  if (wrongAnswers.length === 0) {
    resultText += "\n\n완벽해요! 틀린 문제가 없습니다.";
  } else {
    resultText += "\n\n[오답노트]\n";

    wrongAnswers.forEach((item, index) => {
      resultText += `\n${index + 1}. 문제: ${item.question}`;
      resultText += `\n내가 고른 답: ${item.selected}`;
      resultText += `\n정답: ${item.correct}`;
      resultText += `\n중국어: ${item.chinese}`;
      resultText += `\n병음: ${item.pinyin}`;
      resultText += `\n뜻: ${item.meaning}\n`;
    });
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("result").style.color = "black";

  document.getElementById("score").textContent =
    `최종 점수: ${score} / ${shuffledQuizData.length}`;

  const nextButton = document.getElementById("next-button");
  nextButton.textContent = "처음으로";
  nextButton.style.display = "block";

  nextButton.onclick = function () {
    goHome();
  };
}

function goHome() {
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("mode-box").style.display = "block";

  document.getElementById("result").textContent = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("score").textContent = "점수: 0";

  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";

 currentQuestionIndex = 0;
score = 0;
shuffledQuizData = [];
selectedWords = [];
currentOrderQuestion = null;
}
function startSentenceQuiz(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];

 const filteredData = filterByLesson(sentenceData);

if (selectedLessons.length === 0 || filteredData.length === 0) {
  alert("출제 범위를 하나 이상 선택해줘!");
  return;
}

const filteredData = filterByLesson(sentenceData);

if (selectedLessons.length === 0 || filteredData.length === 0) {
  alert("출제 범위를 하나 이상 선택해줘!");
  return;
}

shuffledQuizData = shuffleArray([...filteredData]).slice(0, Math.min(questionCount, filteredData.length));
  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showQuestion();
}
let orderQuizData = [];
let selectedWords = [];
let currentOrderQuestion = null;

function startOrderQuiz() {
  currentMode = "order";
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];

 const filteredSentenceData = filterByLesson(sentenceData);

if (selectedLessons.length === 0 || filteredSentenceData.length === 0) {
  alert("출제 범위를 하나 이상 선택해줘!");
  return;
}

const filteredSentenceData = filterByLesson(sentenceData);

if (selectedLessons.length === 0 || filteredSentenceData.length === 0) {
  alert("출제 범위를 하나 이상 선택해줘!");
  return;
}

orderQuizData = filteredSentenceData.filter(item => item.words && item.words.length > 0);

if (orderQuizData.length === 0) {
  alert("선택한 범위에 순서 배열 문제가 없어!");
  return;
}

shuffledQuizData = shuffleArray([...orderQuizData]).slice(0, Math.min(orderQuestionCount, orderQuizData.length));

if (orderQuizData.length === 0) {
  alert("선택한 범위에 순서 배열 문제가 없어!");
  return;
}

const filteredData = filterByLesson(quizData);

if (selectedLessons.length === 0 || filteredData.length === 0) {
  alert("출제 범위를 하나 이상 선택해줘!");
  return;
}

shuffledQuizData = shuffleArray([...filteredData]).slice(0, Math.min(questionCount, filteredData.length));

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showOrderQuestion();
}

function showOrderQuestion() {
  currentOrderQuestion = shuffledQuizData[currentQuestionIndex];
  selectedWords = [];

  document.getElementById("progress").textContent =
    `문제 ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;

  document.getElementById("mode-title").textContent = "해석에 맞게 중국어 문장 순서 배열하기";
  document.getElementById("question").textContent = currentOrderQuestion.meaning;
  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const selectedBox = document.createElement("div");
  selectedBox.id = "selected-words";
  choicesDiv.appendChild(selectedBox);

  const wordBox = document.createElement("div");
  wordBox.id = "word-buttons";
  choicesDiv.appendChild(wordBox);

  updateSelectedWords();

  const mixedWords = shuffleArray([...currentOrderQuestion.words]);

  mixedWords.forEach((word, index) => {
    const button = document.createElement("button");
    button.textContent = word;
    button.dataset.index = index;
    button.dataset.word = word;

    button.onclick = function () {
      selectedWords.push({
        word: word,
        index: index
      });

      button.disabled = true;
      updateSelectedWords();

      if (selectedWords.length === currentOrderQuestion.words.length) {
        checkOrderAnswer();
      }
    };

    wordBox.appendChild(button);
  });
}

function updateSelectedWords() {
  const selectedBox = document.getElementById("selected-words");
  selectedBox.innerHTML = "";

  const title = document.createElement("p");
  title.textContent = "선택한 순서:";
  selectedBox.appendChild(title);

  if (selectedWords.length === 0) {
    const emptyText = document.createElement("p");
    emptyText.textContent = "아직 선택한 단어가 없습니다.";
    emptyText.className = "empty-selected-text";
    selectedBox.appendChild(emptyText);
    return;
  }

  selectedWords.forEach((item, selectedIndex) => {
    const selectedButton = document.createElement("button");
    selectedButton.textContent = item.word;
    selectedButton.className = "selected-word-button";

    selectedButton.onclick = function () {
      selectedWords.splice(selectedIndex, 1);

      const originalButton = document.querySelector(
        `#word-buttons button[data-index="${item.index}"]`
      );

      if (originalButton) {
        originalButton.disabled = false;
      }

      document.getElementById("result").textContent = "";
      document.getElementById("next-button").style.display = "none";

      updateSelectedWords();
    };

    selectedBox.appendChild(selectedButton);
  });
}

function checkOrderAnswer() {
  const correctSentence = currentOrderQuestion.words.join("");
  const userSentence = selectedWords.map(item => item.word).join("");
  const result = document.getElementById("result");

  if (userSentence === correctSentence) {
    result.textContent = `정답입니다!\n${currentOrderQuestion.chinese}`;
    result.style.color = "blue";
    score++;
  } else {
    result.textContent =
      `오답입니다.\n정답: ${currentOrderQuestion.chinese}\n병음: ${currentOrderQuestion.pinyin}`;
    result.style.color = "red";

    wrongAnswers.push({
      question: currentOrderQuestion.meaning,
      selected: selectedWords.map(item => item.word).join(" "),
      correct: currentOrderQuestion.chinese,
      chinese: currentOrderQuestion.chinese,
      pinyin: currentOrderQuestion.pinyin,
      meaning: currentOrderQuestion.meaning
    });
  }

  document.getElementById("score").textContent = `점수: ${score}`;
  document.getElementById("next-button").style.display = "block";
}
