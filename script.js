const quizData = [
  { chinese: "沙发", pinyin: "shāfā", meaning: "소파" },
  { chinese: "抽", pinyin: "chōu", meaning: "(담배를) 피우다" },
  { chinese: "活儿", pinyin: "huór", meaning: "일" },
  { chinese: "气", pinyin: "qì", meaning: "성내다, 화내다" },
  { chinese: "批评", pinyin: "pīpíng", meaning: "비평하다, 꾸짖다" },
  { chinese: "社会", pinyin: "shèhuì", meaning: "사회" },
  { chinese: "平等", pinyin: "píngděng", meaning: "평등, 평등하다" },
  { chinese: "模范", pinyin: "mófàn", meaning: "모범, 모범적이다" },
  { chinese: "改变", pinyin: "gǎibiàn", meaning: "변하다, 바꾸다" },
  { chinese: "认错", pinyin: "rèncuò", meaning: "잘못을 인정하다" },
  { chinese: "今后", pinyin: "jīnhòu", meaning: "이제부터, 앞으로" },
  { chinese: "家务", pinyin: "jiāwù", meaning: "집안일, 가사" },
  { chinese: "劝", pinyin: "quàn", meaning: "권하다, 중재하다" },
  { chinese: "表现", pinyin: "biǎoxiàn", meaning: "표현하다, 태도, 모습" },
  { chinese: "演讲", pinyin: "yǎnjiǎng", meaning: "강연, 연설" },
  { chinese: "题目", pinyin: "tímù", meaning: "제목, 문제" },
  { chinese: "复杂", pinyin: "fùzá", meaning: "복잡하다" },
  { chinese: "到处", pinyin: "dàochù", meaning: "도처, 곳곳" },
  { chinese: "连", pinyin: "lián", meaning: "~조차도 / 连～也" },
  { chinese: "男人", pinyin: "nánrén", meaning: "남자" },
  { chinese: "认为", pinyin: "rènwéi", meaning: "여기다, 생각하다" },
  { chinese: "特点", pinyin: "tèdiǎn", meaning: "특징" },
  { chinese: "纸", pinyin: "zhǐ", meaning: "종이" },
  { chinese: "笔", pinyin: "bǐ", meaning: "필기구, 펜" },
  { chinese: "经理", pinyin: "jīnglǐ", meaning: "사장, 매니저" },
  { chinese: "秘书", pinyin: "mìshū", meaning: "비서" },
  { chinese: "报纸", pinyin: "bàozhǐ", meaning: "신문" },
  { chinese: "贵", pinyin: "guì", meaning: "귀한, 귀사의/귀하의" },
  { chinese: "客人", pinyin: "kèrén", meaning: "손님" },
  { chinese: "参观", pinyin: "cānguān", meaning: "참관하다, 견학하다" },
  { chinese: "简历", pinyin: "jiǎnlì", meaning: "이력서" },
  { chinese: "证明", pinyin: "zhèngmíng", meaning: "증명하다, 증명" },
  { chinese: "毕业证", pinyin: "bìyèzhèng", meaning: "졸업증서" },
  { chinese: "件", pinyin: "jiàn", meaning: "건, 개" },
  { chinese: "发展", pinyin: "fāzhǎn", meaning: "발전하다" },
  { chinese: "前途", pinyin: "qiántú", meaning: "전망, 앞날" },
  { chinese: "能力", pinyin: "nénglì", meaning: "능력" },
  { chinese: "技术", pinyin: "jìshù", meaning: "기술" },
  { chinese: "增加", pinyin: "zēngjiā", meaning: "증가하다" },
  { chinese: "收入", pinyin: "shōurù", meaning: "수입" },
  { chinese: "面试", pinyin: "miànshì", meaning: "면접을 치르다" },
  { chinese: "通知", pinyin: "tōngzhī", meaning: "통지하다, 알리다" },
  { chinese: "招", pinyin: "zhāo", meaning: "모집하다" },
  { chinese: "其中", pinyin: "qízhōng", meaning: "그중" },
  { chinese: "印象", pinyin: "yìnxiàng", meaning: "인상" },
  { chinese: "年龄", pinyin: "niánlíng", meaning: "나이, 연령" },
  { chinese: "比较", pinyin: "bǐjiào", meaning: "비교적" },
  { chinese: "熟悉", pinyin: "shúxī", meaning: "익숙하다, 잘 알다" },
  { chinese: "负责", pinyin: "fùzé", meaning: "책임지다, 책임감이 있다" },
  { chinese: "提高", pinyin: "tígāo", meaning: "향상시키다, 높이다" },
  { chinese: "喜糖", pinyin: "xǐtáng", meaning: "결혼 사탕" },
  { chinese: "喜事", pinyin: "xǐshì", meaning: "경사, 기쁜 일" },
  { chinese: "喜酒", pinyin: "xǐjiǔ", meaning: "결혼 축하주" },
  { chinese: "新娘", pinyin: "xīnniáng", meaning: "신부" },
  { chinese: "怪不得", pinyin: "guàibude", meaning: "과연, 그러기에, 어쩐지" },
  { chinese: "新郎", pinyin: "xīnláng", meaning: "신랑" },
  { chinese: "浪漫", pinyin: "làngmàn", meaning: "낭만적이다" },
  { chinese: "婚礼", pinyin: "hūnlǐ", meaning: "결혼식, 혼례" },
  { chinese: "日子", pinyin: "rìzi", meaning: "날짜" },
  { chinese: "顺", pinyin: "shùn", meaning: "순조롭다" },
  { chinese: "举", pinyin: "jǔ", meaning: "들다" },
  { chinese: "干杯", pinyin: "gānbēi", meaning: "건배하다" },
  { chinese: "拜", pinyin: "bài", meaning: "절하다" },
  { chinese: "恋爱", pinyin: "liàn’ài", meaning: "연애하다, 연애" },
  { chinese: "经过", pinyin: "jīngguò", meaning: "경험하다, 과정, 경과" },
  { chinese: "补充", pinyin: "bǔchōng", meaning: "보충하다" },
  { chinese: "同班同学", pinyin: "tóngbān tóngxué", meaning: "동급생, 같은 반 학우" },
  { chinese: "突然", pinyin: "tūrán", meaning: "갑자기" },
  { chinese: "故事", pinyin: "gùshi", meaning: "이야기" },
  { chinese: "精彩", pinyin: "jīngcǎi", meaning: "훌륭하다, 뛰어나다" },
  { chinese: "和美", pinyin: "héměi", meaning: "사이가 좋다, 화목하다" },
  { chinese: "白头到老", pinyin: "bái tóu dào lǎo", meaning: "백년해로하다" },
  { chinese: "白头偕老", pinyin: "bái tóu xié lǎo", meaning: "백년해로하다" },
  { chinese: "拿……来说", pinyin: "ná……lái shuō", meaning: "~으로 말하자면, ~의 경우에는" },
  { chinese: "主要", pinyin: "zhǔyào", meaning: "주로, 주요하다" },
  { chinese: "电视剧", pinyin: "diànshìjù", meaning: "드라마" },
  { chinese: "集", pinyin: "jí", meaning: "회, 편" },
  { chinese: "退休", pinyin: "tuìxiū", meaning: "은퇴하다" },
  { chinese: "打", pinyin: "dǎ", meaning: "마작, 트럼프 따위를 하다" },
  { chinese: "牌", pinyin: "pái", meaning: "카드" },
  { chinese: "麻将", pinyin: "májiàng", meaning: "마작" },
  { chinese: "教师", pinyin: "jiàoshī", meaning: "교사" },
  { chinese: "备课", pinyin: "bèi kè", meaning: "수업을 준비하다" },
  { chinese: "其他", pinyin: "qítā", meaning: "기타, 다른" },
  { chinese: "下载", pinyin: "xiàzài", meaning: "다운로드하다" },
  { chinese: "难道", pinyin: "nándào", meaning: "설마 ~하겠는가?" },
  { chinese: "歌曲", pinyin: "gēqǔ", meaning: "노래" },
  { chinese: "奇怪", pinyin: "qíguài", meaning: "이상하다, 의아하다" },
  { chinese: "相同", pinyin: "xiāngtóng", meaning: "똑같다, 서로 같다" },
  { chinese: "厨房", pinyin: "chúfáng", meaning: "주방" },
  { chinese: "书房", pinyin: "shūfáng", meaning: "서재" },
  { chinese: "静", pinyin: "jìng", meaning: "조용하다, 고요하다" },
  { chinese: "科学", pinyin: "kēxué", meaning: "과학적이다, 과학" },
  { chinese: "晒", pinyin: "shài", meaning: "햇볕을 쬐다" },
  { chinese: "阳台", pinyin: "yángtái", meaning: "베란다, 발코니" },
  { chinese: "建议", pinyin: "jiànyì", meaning: "제안하다, 건의하다" },
  { chinese: "自助餐", pinyin: "zìzhùcān", meaning: "뷔페" },
  { chinese: "葡萄酒", pinyin: "pútáojiǔ", meaning: "와인, 포도주" },
  { chinese: "白酒", pinyin: "báijiǔ", meaning: "바이주, 중국식 증류주" },
  { chinese: "醉", pinyin: "zuì", meaning: "취하다" },
  { chinese: "减肥", pinyin: "jiǎnféi", meaning: "다이어트하다, 살을 빼다" },
  { chinese: "笑话", pinyin: "xiàohua", meaning: "비웃다, 웃음거리" },
  { chinese: "身材", pinyin: "shēncái", meaning: "체격, 몸매" },
  { chinese: "口福", pinyin: "kǒufú", meaning: "먹을 복" },
  { chinese: "强", pinyin: "qiáng", meaning: "강하다, 낫다, 더 좋다" },
  { chinese: "坚持", pinyin: "jiānchí", meaning: "견지하다, 꾸준히 계속하다" },
  { chinese: "饮食", pinyin: "yǐnshí", meaning: "음식, 식생활" },
  { chinese: "中餐", pinyin: "Zhōngcān", meaning: "중국 음식" },
  { chinese: "非……不可", pinyin: "fēi……bùkě", meaning: "반드시 ~해야 한다" },
  { chinese: "刀", pinyin: "dāo", meaning: "칼, 나이프" },
  { chinese: "叉", pinyin: "chā", meaning: "포크" },
  { chinese: "左手", pinyin: "zuǒshǒu", meaning: "왼손" },
  { chinese: "右手", pinyin: "yòushǒu", meaning: "오른손" },
  { chinese: "切", pinyin: "qiē", meaning: "썰다, 자르다" },
  { chinese: "鸡", pinyin: "jī", meaning: "닭" },
  { chinese: "面条儿", pinyin: "miàntiáor", meaning: "면, 국수" },
  { chinese: "筷子", pinyin: "kuàizi", meaning: "젓가락" },
  { chinese: "冰箱", pinyin: "bīngxiāng", meaning: "냉장고" },
  { chinese: "牛奶", pinyin: "niúnǎi", meaning: "우유" },
  { chinese: "果汁", pinyin: "guǒzhī", meaning: "과일 주스" },
  { chinese: "豆浆", pinyin: "dòujiāng", meaning: "더우장, 콩 음료" },
  { chinese: "油条", pinyin: "yóutiáo", meaning: "여우탸오, 기름에 튀긴 음식" }
  ];

const sentenceData = [
  {
    chinese: "你今天怎么也回来晚了?",
    pinyin: "Nǐ jīntiān zěnme yě huílai wǎn le?",
    meaning: "당신 오늘 왜 이렇게 늦게 돌아왔어요?",
    words: ["你", "今天", "怎么", "也", "回来", "晚", "了"]
  },
  {
    chinese: "我来跟你一起做饭吧。",
    pinyin: "Wǒ lái gēn nǐ yìqǐ zuòfàn ba.",
    meaning: "내가 같이 식사 준비할게요.",
    words: ["我", "来", "跟", "你", "一起", "做饭", "吧"]
  },
  {
    chinese: "回来得并不晚，到楼上张师傅家坐了会儿。",
    pinyin: "Huílai de bìng bù wǎn, dào lóushàng Zhāng shīfu jiā zuò le huìr.",
    meaning: "전혀 늦지 않게 왔는데, 윗층 장 사부님 댁에 잠깐 앉아 있다 왔어요.",
    words: ["回来得", "并不", "晚", "到", "楼上", "张师傅家", "坐了", "会儿"]
  },
  {
    chinese: "他们家又吵架了。",
    pinyin: "Tāmen jiā yòu chǎojià le.",
    meaning: "그 집 또 싸웠어요.",
    words: ["他们家", "又", "吵架", "了"]
  },
  {
    chinese: "他们为什么又吵了?",
    pinyin: "Tāmen wèishénme yòu chǎo le?",
    meaning: "왜 또 싸웠대요?",
    words: ["他们", "为什么", "又", "吵", "了"]
  },
  {
    chinese: "张师傅一回家就躺在沙发上，边看电视边抽烟。",
    pinyin: "Zhāng shīfu yì huí jiā jiù tǎng zài shāfā shàng, biān kàn diànshì biān chōuyān.",
    meaning: "장 씨는 집에 오자마자 소파에 누워 TV를 보면서 담배를 펴요.",
    words: ["张师傅", "一", "回家", "就", "躺在", "沙发上", "边", "看电视", "边", "抽烟"]
  },
  {
    chinese: "他爱人下了班，又洗菜又做饭。",
    pinyin: "Tā àiren xià le bān, yòu xǐ cài yòu zuòfàn.",
    meaning: "그의 부인은 퇴근하고 와서 채소도 씻고 밥도 해요.",
    words: ["他爱人", "下了班", "又", "洗菜", "又", "做饭"]
  },
  {
    chinese: "张师傅一点儿忙也不帮。",
    pinyin: "Zhāng shīfu yìdiǎnr máng yě bù bāng.",
    meaning: "장 씨는 조금도 도와주지 않아요.",
    words: ["张师傅", "一点儿", "忙", "也", "不", "帮"]
  },
  {
    chinese: "这就是张师傅不对了。",
    pinyin: "Zhè jiù shì Zhāng shīfu bú duì le.",
    meaning: "이건 장 씨가 잘못했네요.",
    words: ["这", "就是", "张师傅", "不对", "了"]
  },
  {
    chinese: "两个人都上了一天的班，都挺累的，回到家，怎么能光让一个人干活儿呢?",
    pinyin: "Liǎng ge rén dōu shàng le yì tiān de bān, dōu tǐng lèi de, huí dào jiā, zěnme néng guāng ràng yí ge rén gàn huór ne?",
    meaning: "두 사람 다 하루 종일 일해서 피곤할 텐데, 집에 돌아와서 어떻게 한 사람만 일하게 할 수 있겠어요?",
    words: ["两个人", "都", "上了", "一天的班", "都", "挺累的", "回到家", "怎么能", "光", "让", "一个人", "干活儿", "呢"]
  },
  {
    chinese: "他爱人叫张师傅帮着一起做，张师傅不做，结果把他爱人气哭了。",
    pinyin: "Tā àiren jiào Zhāng shīfu bāngzhe yìqǐ zuò, Zhāng shīfu bú zuò, jiéguǒ bǎ tā àiren qì kū le.",
    meaning: "아내가 장 씨에게 같이 하자고 했는데 장 씨가 안 해서, 결국 아내를 화나게 해서 울렸어요.",
    words: ["他爱人", "叫", "张师傅", "帮着", "一起", "做", "张师傅", "不", "做", "结果", "把", "他爱人", "气哭", "了"]
  },
  {
    chinese: "现在两个人怎么样了?",
    pinyin: "Xiànzài liǎng ge rén zěnmeyàng le?",
    meaning: "지금 두 사람은 어때요?",
    words: ["现在", "两个人", "怎么样", "了"]
  },
  {
    chinese: "我批评了张师傅，给他讲了男女在社会上要平等，在家庭中也要平等。",
    pinyin: "Wǒ pīpíng le Zhāng shīfu, gěi tā jiǎng le nánnǚ zài shèhuì shàng yào píngděng, zài jiātíng zhōng yě yào píngděng.",
    meaning: "내가 장 씨를 꾸짖고, 남녀는 사회에서도 평등해야 하고 가정에서도 평등해야 한다고 말해 줬어요.",
    words: ["我", "批评了", "张师傅", "给", "他", "讲了", "男女", "在", "社会上", "要", "平等", "在", "家庭中", "也", "要", "平等"]
  },
  {
    chinese: "又把咱们俩的经验介绍了一下儿。",
    pinyin: "Yòu bǎ zánmen liǎ de jīngyàn jièshào le yíxiàr.",
    meaning: "그리고 우리 둘의 경험도 좀 소개해 줬어요.",
    words: ["又", "把", "咱们俩的", "经验", "介绍了", "一下儿"]
  },
  {
    chinese: "你没向他们夸夸我这个模范丈夫?",
    pinyin: "Nǐ méi xiàng tāmen kuākua wǒ zhège mófàn zhàngfu?",
    meaning: "당신, 그들에게 모범 남편인 나를 좀 칭찬하지 않았어요?",
    words: ["你", "没", "向", "他们", "夸夸", "我", "这个", "模范丈夫"]
  },
  {
    chinese: "正因为我夸了你，张师傅才改变了态度，向他爱人认了错，两个人一起高高兴兴地做了一顿饭。",
    pinyin: "Zhèng yīnwèi wǒ kuā le nǐ, Zhāng shīfu cái gǎibiàn le tàidu, xiàng tā àiren rèn le cuò, liǎng ge rén yìqǐ gāogāoxìngxìng de zuò le yí dùn fàn.",
    meaning: "바로 내가 당신을 칭찬했기 때문에 장 씨가 태도를 바꾸고, 아내에게 잘못을 인정하고, 두 사람이 즐겁게 함께 한 끼를 만들었어요.",
    words: ["正因为", "我", "夸了", "你", "张师傅", "才", "改变了", "态度", "向", "他爱人", "认了错", "两个人", "一起", "高高兴兴地", "做了", "一顿饭"]
  },
  {
    chinese: "希望他们俩今后再也不因为做家务的事吵架了。",
    pinyin: "Xīwàng tāmen liǎ jīnhòu zàiyě bù yīnwèi zuò jiāwù de shì chǎojià le.",
    meaning: "앞으로 그들이 다시는 집안일 하는 문제로 싸우지 않았으면 좋겠네요.",
    words: ["希望", "他们俩", "今后", "再也", "不", "因为", "做家务的事", "吵架", "了"]
  },
  {
    chinese: "你劝架劝得不错嘛!",
    pinyin: "Nǐ quànjià quàn de búcuò ma!",
    meaning: "당신 아주 중재를 잘했네요!",
    words: ["你", "劝架", "劝得", "不错", "嘛"]
  },
  {
    chinese: "你把咱们俩刚结婚时我的表现也告诉他们了?",
    pinyin: "Nǐ bǎ zánmen liǎ gāng jiéhūn shí wǒ de biǎoxiàn yě gàosu tāmen le?",
    meaning: "당신, 우리가 막 결혼했을 때 내 모습도 그들에게 말해 줬어요?",
    words: ["你", "把", "咱们俩", "刚结婚时", "我的", "表现", "也", "告诉", "他们", "了"]
  },
  {
    chinese: "不说那些，经验从哪儿说起呀?",
    pinyin: "Bù shuō nàxiē, jīngyàn cóng nǎr shuō qǐ ya?",
    meaning: "그런 걸 말하지 않으면 경험을 어디서부터 말하겠어요?",
    words: ["不", "说", "那些", "经验", "从", "哪儿", "说起", "呀"]
  },
  {
    chinese: "真不好意思，咱们俩的秘密全让人知道了。",
    pinyin: "Zhēn bù hǎoyìsi, zánmen liǎ de mìmì quán ràng rén zhīdao le.",
    meaning: "정말 부끄러워요, 우리 둘의 비밀이 다른 사람들에게 알려졌어요.",
    words: ["真", "不好意思", "咱们俩的", "秘密", "全", "让", "人", "知道", "了"]
  },
  {
    chinese: "我昨天睡了十个小时觉。",
    pinyin: "Wǒ zuótiān shuì le shí ge xiǎoshí jiào.",
    meaning: "나는 어제 잠을 열 시간 잤다.",
    words: ["我", "昨天", "睡了", "十个小时", "觉"]
  },
  {
    chinese: "下班后他洗了澡。",
    pinyin: "Xiàbān hòu tā xǐ le zǎo.",
    meaning: "그는 퇴근 후에 샤워를 했다.",
    words: ["下班后", "他", "洗了", "澡"]
  },
  {
    chinese: "今天我请你客。",
    pinyin: "Jīntiān wǒ qǐng nǐ kè.",
    meaning: "오늘은 내가 밥을 살게.",
    words: ["今天", "我", "请你", "客"]
  },
  {
    chinese: "我们要举行演讲比赛，帮我想想怎么讲。",
    pinyin: "Wǒmen yào jǔxíng yǎnjiǎng bǐsài, bāng wǒ xiǎngxiang zěnme jiǎng.",
    meaning: "우리 곧 웅변대회가 있는데, 내가 어떻게 말하면 좋을지 좀 생각해 줘.",
    words: ["我们", "要", "举行", "演讲比赛", "帮", "我", "想想", "怎么", "讲"]
  },
  {
    chinese: "演讲的题目是什么?",
    pinyin: "Yǎnjiǎng de tímù shì shénme?",
    meaning: "연설 주제가 뭔데?",
    words: ["演讲的", "题目", "是", "什么"]
  },
  {
    chinese: "男女平等。",
    pinyin: "Nánnǚ píngděng.",
    meaning: "남녀평등.",
    words: ["男女", "平等"]
  },
  {
    chinese: "这个问题很复杂，内容又太多，不好讲，你肯定有困难。",
    pinyin: "Zhège wèntí hěn fùzá, nèiróng yòu tài duō, bù hǎo jiǎng, nǐ kěndìng yǒu kùnnan.",
    meaning: "이 문제는 아주 복잡하고 내용도 너무 많아서 말하기 쉽지 않겠네. 너 분명 어려움이 있겠다.",
    words: ["这个", "问题", "很", "复杂", "内容", "又", "太", "多", "不好", "讲", "你", "肯定", "有", "困难"]
  },
  {
    chinese: "所以才请你帮我想想嘛。",
    pinyin: "Suǒyǐ cái qǐng nǐ bāng wǒ xiǎngxiang ma.",
    meaning: "그러니까 네가 좀 생각해 달라고 하는 거지.",
    words: ["所以", "才", "请", "你", "帮", "我", "想想", "嘛"]
  },
  {
    chinese: "我不知道从哪儿讲起。",
    pinyin: "Wǒ bù zhīdao cóng nǎr jiǎng qǐ.",
    meaning: "나는 어디서부터 말을 시작해야 할지 모르겠어.",
    words: ["我", "不", "知道", "从", "哪儿", "讲起"]
  },
  {
    chinese: "到处都有人谈男女平等，报上谈，电视里也谈。",
    pinyin: "Dàochù dōu yǒu rén tán nánnǚ píngděng, bàoshàng tán, diànshì lǐ yě tán.",
    meaning: "곳곳에서 남녀평등을 이야기해. 신문에서도 이야기하고, TV에서도 이야기하지.",
    words: ["到处", "都", "有人", "谈", "男女平等", "报上", "谈", "电视里", "也", "谈"]
  },
  {
    chinese: "谈来谈去，连一个最简单的问题也没谈清楚。",
    pinyin: "Tán lái tán qù, lián yí ge zuì jiǎndān de wèntí yě méi tán qīngchu.",
    meaning: "이야기를 하고 또 해도 가장 간단한 문제조차 분명히 설명하지 못했어.",
    words: ["谈来谈去", "连", "一个", "最简单的", "问题", "也", "没", "谈清楚"]
  },
  {
    chinese: "什么问题?",
    pinyin: "Shénme wèntí?",
    meaning: "무슨 문제?",
    words: ["什么", "问题"]
  },
  {
    chinese: "一般人都以为男人能做的事女人也能做，好像就是实现了男女平等了。",
    pinyin: "Yìbān rén dōu yǐwéi nánrén néng zuò de shì nǚrén yě néng zuò, hǎoxiàng jiù shì shíxiàn le nánnǚ píngděng le.",
    meaning: "보통 사람들은 남자가 할 수 있는 일을 여자도 할 수 있으면, 마치 그게 곧 남녀평등이 실현된 것처럼 생각해.",
    words: ["一般人", "都", "以为", "男人", "能做的事", "女人", "也", "能做", "好像", "就是", "实现了", "男女平等", "了"]
  },
  {
    chinese: "你怎么认为呢?",
    pinyin: "Nǐ zěnme rènwéi ne?",
    meaning: "너는 어떻게 생각해?",
    words: ["你", "怎么", "认为", "呢"]
  },
  {
    chinese: "男人有男人的特点，女人有女人的特点，只在一点上讨论，那就太简单了。",
    pinyin: "Nánrén yǒu nánrén de tèdiǎn, nǚrén yǒu nǚrén de tèdiǎn, zhǐ zài yì diǎn shàng tǎolùn, nà jiù tài jiǎndān le.",
    meaning: "남자는 남자의 특징이 있고 여자는 여자의 특징이 있는데, 한 가지 점만 놓고 토론하는 건 너무 단순한 거야.",
    words: ["男人", "有", "男人的", "特点", "女人", "有", "女人的", "特点", "只", "在", "一点上", "讨论", "那", "就", "太", "简单", "了"]
  },
  {
    chinese: "找来找去，没找到。",
    pinyin: "Zhǎo lái zhǎo qù, méi zhǎodào.",
    meaning: "이리저리 찾아도 찾지 못했다.",
    words: ["找来找去", "没", "找到"]
  },
  {
    chinese: "商量来商量去，他也不同意。",
    pinyin: "Shāngliang lái shāngliang qù, tā yě bù tóngyì.",
    meaning: "의논하고 또 해봐도 그는 역시 동의하지 않았다.",
    words: ["商量来商量去", "他", "也", "不同意"]
  },
  {
    chinese: "想来想去，怎么也想不起他叫什么名字。",
    pinyin: "Xiǎng lái xiǎng qù, zěnme yě xiǎng bu qǐ tā jiào shénme míngzi.",
    meaning: "생각하고 또 해봤지만, 어떻게 해도 그의 이름이 떠오르지 않는다.",
    words: ["想来想去", "怎么", "也", "想不起", "他", "叫", "什么", "名字"]
  },
  {
    chinese: "他说来说去都是自己夸自己。",
    pinyin: "Tā shuō lái shuō qù dōu shì zìjǐ kuā zìjǐ.",
    meaning: "그는 이 말 저 말을 하지만 모두 다 자기 자랑이다.",
    words: ["他", "说来说去", "都", "是", "自己", "夸", "自己"]
  },
  {
    chinese: "今天他没来，我以为是他病了，后来才知道是他孩子病了。",
    pinyin: "Jīntiān tā méi lái, wǒ yǐwéi shì tā bìng le, hòulái cái zhīdao shì tā háizi bìng le.",
    meaning: "오늘 그가 오지 않아서 나는 그가 아픈 거라고 생각했는데, 나중에 알고 보니 그의 아이가 병이 났던 것이었다.",
    words: ["今天", "他", "没", "来", "我", "以为", "是", "他", "病了", "后来", "才", "知道", "是", "他孩子", "病了"]
  },
  {
    chinese: "张师傅回到家一点活儿都不干，大家都认为这是不对的。",
    pinyin: "Zhāng shīfu huí dào jiā yìdiǎn huór dōu bù gàn, dàjiā dōu rènwéi zhè shì bú duì de.",
    meaning: "장 씨는 집에 돌아와서 일을 조금도 하지 않아서, 모두가 이것은 잘못이라고 생각한다.",
    words: ["张师傅", "回到家", "一点", "活儿", "都", "不", "干", "大家", "都", "认为", "这", "是", "不对的"]
  },
  {
    chinese: "今天路上车很多，我以为他不回来。",
    pinyin: "Jīntiān lùshang chē hěn duō, wǒ yǐwéi tā bù huílai.",
    meaning: "오늘 길에 차가 많아서 나는 그가 안 올 것이라고 생각했다.",
    words: ["今天", "路上", "车", "很多", "我", "以为", "他", "不", "回来"]
  },
  {
    chinese: "孩子改不了爱吃糖的习惯，结果牙都坏了。",
    pinyin: "Háizi gǎi bù liǎo ài chī táng de xíguàn, jiéguǒ yá dōu huài le.",
    meaning: "아이가 단 것을 좋아하는 습관을 고치지 못해서 결국 이가 다 상했다.",
    words: ["孩子", "改不了", "爱吃糖的", "习惯", "结果", "牙", "都", "坏了"]
  },
  {
    chinese: "他把约会的时间记错了，结果女朋友生气了。",
    pinyin: "Tā bǎ yuēhuì de shíjiān jì cuò le, jiéguǒ nǚpéngyou shēngqì le.",
    meaning: "그는 약속 시간을 잘못 기억해서 결국 여자친구가 화가 났다.",
    words: ["他", "把", "约会的", "时间", "记错了", "结果", "女朋友", "生气了"]
  },
  {
    chinese: "住的要好，吃的也要好。",
    pinyin: "Zhù de yào hǎo, chī de yě yào hǎo.",
    meaning: "사는 것도 좋아야 하고, 먹는 것도 좋아야 한다.",
    words: ["住的", "要", "好", "吃的", "也", "要", "好"]
  },
  {
    chinese: "上班的路上要注意安全，下班的路上也要注意安全。",
    pinyin: "Shàngbān de lùshang yào zhùyì ānquán, xiàbān de lùshang yě yào zhùyì ānquán.",
    meaning: "출근길에도 안전에 주의해야 하고, 퇴근길에도 안전에 주의해야 한다.",
    words: ["上班的", "路上", "要", "注意", "安全", "下班的", "路上", "也", "要", "注意", "安全"]
  },
  {
    chinese: "教室里边要安静，教室外边也要安静。",
    pinyin: "Jiàoshì lǐbian yào ānjìng, jiàoshì wàibian yě yào ānjìng.",
    meaning: "교실 안도 조용해야 하고, 교실 밖도 조용해야 한다.",
    words: ["教室里边", "要", "安静", "教室外边", "也", "要", "安静"]
  },
  {
    chinese: "看来看去，一个都不喜欢。",
    pinyin: "Kàn lái kàn qù, yí ge dōu bù xǐhuan.",
    meaning: "보고 또 봐도 하나도 마음에 들지 않는다.",
    words: ["看来看去", "一个", "都", "不", "喜欢"]
  },
  {
    chinese: "走来走去，又走回来了。",
    pinyin: "Zǒu lái zǒu qù, yòu zǒu huílai le.",
    meaning: "왔다 갔다 하다가 다시 돌아왔다.",
    words: ["走来走去", "又", "走回来", "了"]
  },
  {
    chinese: "讨论来讨论去，也没有好主意。",
    pinyin: "Tǎolùn lái tǎolùn qù, yě méiyǒu hǎo zhǔyi.",
    meaning: "토론하고 또 토론해도 좋은 생각이 없었다.",
    words: ["讨论来讨论去", "也", "没有", "好", "主意"]
  },
  {
    chinese: "连他的名字也没想起来。",
    pinyin: "Lián tā de míngzi yě méi xiǎng qǐlai.",
    meaning: "그의 이름조차도 떠올리지 못했다.",
    words: ["连", "他的", "名字", "也", "没", "想起来"]
  },
  {
    chinese: "连东南西北也不知道。",
    pinyin: "Lián dōng nán xī běi yě bù zhīdao.",
    meaning: "동서남북조차도 모른다.",
    words: ["连", "东南西北", "也", "不知道"]
  },
  {
    chinese: "连图书馆也没去过。",
    pinyin: "Lián túshūguǎn yě méi qù guo.",
    meaning: "도서관조차도 가 본 적이 없다.",
    words: ["连", "图书馆", "也", "没", "去过"]
  },
  {
    chinese: "我想找个干净勤劳的伴侣。",
    pinyin: "Wǒ xiǎng zhǎo ge gānjìng qínláo de bànlǚ.",
    meaning: "나는 깔끔하고 부지런한 배우자를 찾고 싶다.",
    words: ["我", "想", "找", "个", "干净", "勤劳的", "伴侣"]
  },
    {
    chinese: "我是来找工作的。",
    pinyin: "Wǒ shì lái zhǎo gōngzuò de.",
    meaning: "저는 일자리를 구하러 왔습니다.",
    words: ["我", "是", "来", "找工作", "的"]
  },
  {
    chinese: "喂，您好！麻烦您帮我叫一下儿刘山。",
    pinyin: "Wéi, nínhǎo! Máfan nín bāng wǒ jiào yíxiàr Liú Shān.",
    meaning: "여보세요, 안녕하세요! 실례지만 리우샨 씨를 좀 바꿔 주세요.",
    words: ["喂", "您好", "麻烦", "您", "帮", "我", "叫一下儿", "刘山"]
  },
  {
    chinese: "他早就不在这儿干了。",
    pinyin: "Tā zǎo jiù bú zài zhèr gàn le.",
    meaning: "그는 진작에 여기에서 일하지 않았어요.",
    words: ["他", "早就", "不", "在", "这儿", "干", "了"]
  },
  {
    chinese: "他去哪儿了?",
    pinyin: "Tā qù nǎr le?",
    meaning: "그는 어디로 갔나요?",
    words: ["他", "去", "哪儿", "了"]
  },
  {
    chinese: "他开了一家电脑公司，自己当老板了。",
    pinyin: "Tā kāi le yì jiā diànnǎo gōngsī, zìjǐ dāng lǎobǎn le.",
    meaning: "그는 컴퓨터 회사를 차려서 본인이 사장이 되었어요.",
    words: ["他", "开了", "一家", "电脑公司", "自己", "当", "老板", "了"]
  },
  {
    chinese: "真没想到。",
    pinyin: "Zhēn méi xiǎngdào.",
    meaning: "정말 뜻밖이네요.",
    words: ["真", "没", "想到"]
  },
  {
    chinese: "您知道怎么和他联系吗?",
    pinyin: "Nín zhīdao zěnme hé tā liánxì ma?",
    meaning: "그와 어떻게 연락해야 하는지 아시나요?",
    words: ["您", "知道", "怎么", "和", "他", "联系", "吗"]
  },
  {
    chinese: "我给你他的手机号码好吧。",
    pinyin: "Wǒ gěi nǐ tā de shǒujī hàomǎ hǎo ba.",
    meaning: "그의 휴대전화 번호를 알려 드릴게요.",
    words: ["我", "给", "你", "他的", "手机号码", "好", "吧"]
  },
  {
    chinese: "他走以前留下的。",
    pinyin: "Tā zǒu yǐqián liúxià de.",
    meaning: "그가 떠나기 전에 남겨 둔 거예요.",
    words: ["他", "走", "以前", "留下", "的"]
  },
  {
    chinese: "您等一下儿，我拿纸和笔。",
    pinyin: "Nín děng yíxiàr, wǒ ná zhǐ hé bǐ.",
    meaning: "잠시만 기다려 주세요. 제가 종이와 펜을 가져올게요.",
    words: ["您", "等一下儿", "我", "拿", "纸", "和", "笔"]
  },
  {
    chinese: "好了，您说吧。",
    pinyin: "Hǎo le, nín shuō ba.",
    meaning: "됐습니다. 말씀하세요.",
    words: ["好了", "您", "说", "吧"]
  },
  {
    chinese: "记下来了吗?",
    pinyin: "Jì xialai le ma?",
    meaning: "받아 적으셨나요?",
    words: ["记下来", "了", "吗"]
  },
  {
    chinese: "记下来了，谢谢！",
    pinyin: "Jì xialai le, xièxie!",
    meaning: "다 적었어요. 감사합니다!",
    words: ["记下来", "了", "谢谢"]
  },
  {
    chinese: "请问，王经理在吗?",
    pinyin: "Qǐngwèn, Wáng jīnglǐ zài ma?",
    meaning: "실례하지만 왕 사장님 계신가요?",
    words: ["请问", "王经理", "在", "吗"]
  },
  {
    chinese: "有什么事?",
    pinyin: "Yǒu shénme shì?",
    meaning: "무슨 일이시죠?",
    words: ["有", "什么", "事"]
  },
  {
    chinese: "我是他的秘书。",
    pinyin: "Wǒ shì tā de mìshū.",
    meaning: "제가 그분의 비서입니다.",
    words: ["我", "是", "他的", "秘书"]
  },
  {
    chinese: "您好，我是来找工作的。",
    pinyin: "Nínhǎo, wǒ shì lái zhǎo gōngzuò de.",
    meaning: "안녕하세요. 저는 일자리를 구하러 왔습니다.",
    words: ["您好", "我", "是", "来", "找工作", "的"]
  },
  {
    chinese: "我看到报纸上有贵公司的广告。",
    pinyin: "Wǒ kàndào bàozhǐ shàng yǒu guì gōngsī de guǎnggào.",
    meaning: "신문에서 귀사의 광고를 봤습니다.",
    words: ["我", "看到", "报纸上", "有", "贵公司的", "广告"]
  },
  {
    chinese: "王经理陪客人参观去了。",
    pinyin: "Wáng jīnglǐ péi kèrén cānguān qù le.",
    meaning: "왕 사장님은 손님을 모시고 참관하러 가셨어요.",
    words: ["王经理", "陪", "客人", "参观", "去", "了"]
  },
  {
    chinese: "请先把您的简历给我一份。",
    pinyin: "Qǐng xiān bǎ nín de jiǎnlì gěi wǒ yí fèn.",
    meaning: "우선 저에게 이력서를 한 부 주세요.",
    words: ["请", "先", "把", "您的", "简历", "给", "我", "一份"]
  },
  {
    chinese: "您看这些够吗?",
    pinyin: "Nín kàn zhèxiē gòu ma?",
    meaning: "이 정도면 충분한가요?",
    words: ["您", "看", "这些", "够", "吗"]
  },
  {
    chinese: "有学历证明吗?",
    pinyin: "Yǒu xuélì zhèngmíng ma?",
    meaning: "학력 증명서가 있나요?",
    words: ["有", "学历证明", "吗"]
  },
  {
    chinese: "这是毕业证的复印件。",
    pinyin: "Zhè shì bìyèzhèng de fùyìnjiàn.",
    meaning: "이것은 졸업증서의 복사본입니다.",
    words: ["这", "是", "毕业证的", "复印件"]
  },
  {
    chinese: "经理一回来，我就交给他。",
    pinyin: "Jīnglǐ yì huílai, wǒ jiù jiāo gěi tā.",
    meaning: "사장님이 돌아오시면 바로 전해 드릴게요.",
    words: ["经理", "一", "回来", "我", "就", "交给", "他"]
  },
  {
    chinese: "什么时候面试请等我们的电话。",
    pinyin: "Shénme shíhou miànshì qǐng děng wǒmen de diànhuà.",
    meaning: "언제 면접을 볼지는 저희 전화를 기다려 주세요.",
    words: ["什么时候", "面试", "请", "等", "我们的", "电话"]
  },
  {
    chinese: "你为什么要做这份工作?",
    pinyin: "Nǐ wèishénme yào zuò zhè fèn gōngzuò?",
    meaning: "당신은 왜 이 일을 하려고 하나요?",
    words: ["你", "为什么", "要", "做", "这份", "工作"]
  },
  {
    chinese: "我对这份工作感兴趣。",
    pinyin: "Wǒ duì zhè fèn gōngzuò gǎn xìngqù.",
    meaning: "저는 이 일에 흥미가 있습니다.",
    words: ["我", "对", "这份", "工作", "感兴趣"]
  },
  {
    chinese: "现在电脑公司很多，你为什么想来我们公司?",
    pinyin: "Xiànzài diànnǎo gōngsī hěn duō, nǐ wèishénme xiǎng lái wǒmen gōngsī?",
    meaning: "지금 컴퓨터 회사가 아주 많은데, 왜 우리 회사에 오려고 하나요?",
    words: ["现在", "电脑公司", "很多", "你", "为什么", "想", "来", "我们公司"]
  },
  {
    chinese: "你们是一家新开的公司，发展很快。",
    pinyin: "Nǐmen shì yì jiā xīn kāi de gōngsī, fāzhǎn hěn kuài.",
    meaning: "귀사는 새로 시작한 회사이고, 발전이 매우 빠릅니다.",
    words: ["你们", "是", "一家", "新开的", "公司", "发展", "很", "快"]
  },
  {
    chinese: "我认为在这里工作有前途。",
    pinyin: "Wǒ rènwéi zài zhèlǐ gōngzuò yǒu qiántú.",
    meaning: "저는 이곳에서 일하는 것이 전망이 밝다고 생각합니다.",
    words: ["我", "认为", "在", "这里", "工作", "有", "前途"]
  },
  {
    chinese: "你说的有前途是什么意思?",
    pinyin: "Nǐ shuō de yǒu qiántú shì shénme yìsi?",
    meaning: "당신이 말한 전망이 밝다는 무슨 뜻인가요?",
    words: ["你", "说的", "有前途", "是", "什么", "意思"]
  },
  {
    chinese: "在工作中锻炼，提高工作能力和技术水平，也希望快点儿增加收入。",
    pinyin: "Zài gōngzuò zhōng duànliàn, tígāo gōngzuò nénglì hé jìshù shuǐpíng, yě xīwàng kuài diǎnr zēngjiā shōurù.",
    meaning: "일을 하면서 단련하고, 업무 능력과 기술 수준을 높일 수 있으며, 수입도 빨리 늘어나기를 바랍니다.",
    words: ["在", "工作中", "锻炼", "提高", "工作能力", "和", "技术水平", "也", "希望", "快点儿", "增加", "收入"]
  },
  {
    chinese: "我们这儿的工作很忙，有时候周末也不能休息。",
    pinyin: "Wǒmen zhèr de gōngzuò hěn máng, yǒu shíhou zhōumò yě bù néng xiūxi.",
    meaning: "우리 회사 일은 매우 바쁩니다. 어떤 때는 주말에도 쉬지 못합니다.",
    words: ["我们这儿的", "工作", "很", "忙", "有时候", "周末", "也", "不能", "休息"]
  },
  {
    chinese: "我很年轻，喜欢紧张的生活。",
    pinyin: "Wǒ hěn niánqīng, xǐhuan jǐnzhāng de shēnghuó.",
    meaning: "저는 아직 젊고, 바쁘고 긴장감 있는 생활을 좋아합니다.",
    words: ["我", "很", "年轻", "喜欢", "紧张的", "生活"]
  },
  {
    chinese: "我母亲常说，不忙不幸福。",
    pinyin: "Wǒ mǔqīn cháng shuō, bù máng bù xìngfú.",
    meaning: "제 어머니는 자주 바쁘지 않으면 행복하지 않다고 말씀하십니다.",
    words: ["我母亲", "常", "说", "不忙", "不", "幸福"]
  },
  {
    chinese: "我觉得她说得有道理。",
    pinyin: "Wǒ juéde tā shuō de yǒu dàoli.",
    meaning: "저는 어머니 말씀이 일리가 있다고 생각합니다.",
    words: ["我", "觉得", "她", "说得", "有", "道理"]
  },
  {
    chinese: "今天的面试就到这儿，结果怎么样请等我们的通知。",
    pinyin: "Jīntiān de miànshì jiù dào zhèr, jiéguǒ zěnmeyàng qǐng děng wǒmen de tōngzhī.",
    meaning: "오늘의 면접은 여기까지입니다. 결과가 어떨지는 저희의 통지를 기다려 주세요.",
    words: ["今天的", "面试", "就", "到", "这儿", "结果", "怎么样", "请", "等", "我们的", "通知"]
  },
  {
    chinese: "我们公司每年都招一些新职员。",
    pinyin: "Wǒmen gōngsī měinián dōu zhāo yìxiē xīn zhíyuán.",
    meaning: "우리 회사는 해마다 새 직원을 좀 모집합니다.",
    words: ["我们公司", "每年", "都", "招", "一些", "新职员"]
  },
  {
    chinese: "其中有不少中年人给我留下了很好的印象。",
    pinyin: "Qízhōng yǒu bù shǎo zhōngniánrén gěi wǒ liúxià le hěn hǎo de yìnxiàng.",
    meaning: "그중 적지 않은 중년 지원자가 제게 아주 좋은 인상을 남겼습니다.",
    words: ["其中", "有", "不少", "中年人", "给", "我", "留下了", "很好的", "印象"]
  },
  {
    chinese: "他们年龄比较大，都工作过一段时间。",
    pinyin: "Tāmen niánlíng bǐjiào dà, dōu gōngzuò guo yí duàn shíjiān.",
    meaning: "그분들은 나이가 비교적 많고 모두 어느 정도 일해 본 적이 있습니다.",
    words: ["他们", "年龄", "比较", "大", "都", "工作过", "一段", "时间"]
  },
  {
    chinese: "他们懂技术，有经验，能够很快熟悉工作。",
    pinyin: "Tāmen dǒng jìshù, yǒu jīngyàn, nénggòu hěn kuài shúxī gōngzuò.",
    meaning: "그들은 기술을 알고 경험이 있으며 일을 빨리 익힐 수 있습니다.",
    words: ["他们", "懂", "技术", "有", "经验", "能够", "很快", "熟悉", "工作"]
  },
  {
    chinese: "工作起来认真，负责，我对他们很满意。",
    pinyin: "Gōngzuò qǐlai rènzhēn, fùzé, wǒ duì tāmen hěn mǎnyì.",
    meaning: "일할 때 성실하고 책임감도 있어서 저는 그분들에게 매우 만족합니다.",
    words: ["工作起来", "认真", "负责", "我", "对", "他们", "很", "满意"]
  },
  {
    chinese: "当然，来面试的大学毕业生也不少。",
    pinyin: "Dāngrán, lái miànshì de dàxué bìyèshēng yě bù shǎo.",
    meaning: "물론 면접을 보러 오는 대학 졸업생들도 적지 않습니다.",
    words: ["当然", "来", "面试的", "大学毕业生", "也", "不少"]
  },
  {
    chinese: "有一些也成了我们的新职员。",
    pinyin: "Yǒu yìxiē yě chéng le wǒmen de xīn zhíyuán.",
    meaning: "그중 일부는 우리 회사의 신입 직원이 되었습니다.",
    words: ["有", "一些", "也", "成了", "我们的", "新职员"]
  },
  {
    chinese: "他们热情，爱学习，技术和能力都提高得很快。",
    pinyin: "Tāmen rèqíng, ài xuéxí, jìshù hé nénglì dōu tígāo de hěn kuài.",
    meaning: "그들은 열정적이고 배우기를 좋아하며 기술과 능력도 매우 빨리 향상됩니다.",
    words: ["他们", "热情", "爱", "学习", "技术", "和", "能力", "都", "提高得", "很快"]
  },
  {
    chinese: "我对他们也很满意。",
    pinyin: "Wǒ duì tāmen yě hěn mǎnyì.",
    meaning: "저는 그들에 대해서도 매우 만족합니다.",
    words: ["我", "对", "他们", "也", "很", "满意"]
  },
  {
    chinese: "我把你的手机号记下来。",
    pinyin: "Wǒ bǎ nǐ de shǒujī hào jì xialai.",
    meaning: "내가 너의 휴대전화 번호를 적어 둘게.",
    words: ["我", "把", "你的", "手机号", "记下来"]
  },
  {
    chinese: "新书发下来了。",
    pinyin: "Xīn shū fā xialai le.",
    meaning: "새 책이 배부되었다.",
    words: ["新书", "发下来", "了"]
  },
  {
    chinese: "我玩起来常常忘了时间。",
    pinyin: "Wǒ wán qǐlai chángcháng wàng le shíjiān.",
    meaning: "나는 놀다 보면 자주 시간을 잊는다.",
    words: ["我", "玩起来", "常常", "忘了", "时间"]
  },
  {
    chinese: "天气热起来了，夏天快到了。",
    pinyin: "Tiānqì rè qǐlai le, xiàtiān kuài dào le.",
    meaning: "날씨가 더워졌고, 여름이 곧 다가온다.",
    words: ["天气", "热起来", "了", "夏天", "快", "到", "了"]
  },
  {
    chinese: "我是昨天晚上刚到北京的。",
    pinyin: "Wǒ shì zuótiān wǎnshang gāng dào Běijīng de.",
    meaning: "나는 어젯밤에 막 베이징에 도착한 것이다.",
    words: ["我", "是", "昨天晚上", "刚", "到", "北京", "的"]
  },
  {
    chinese: "他们是从中国南方来的。",
    pinyin: "Tāmen shì cóng Zhōngguó nánfāng lái de.",
    meaning: "그들은 중국 남방에서 온 것이다.",
    words: ["他们", "是", "从", "中国南方", "来", "的"]
  },
  {
    chinese: "你们究竟是来干什么的呢?",
    pinyin: "Nǐmen jiūjìng shì lái gàn shénme de ne?",
    meaning: "너희들은 도대체 무엇을 하러 온 것이니?",
    words: ["你们", "究竟", "是", "来", "干", "什么", "的", "呢"]
  },
  {
    chinese: "不发达，我不回家。",
    pinyin: "Bù fādá, wǒ bù huí jiā.",
    meaning: "출세하지 않으면 집에 돌아가지 않겠다.",
    words: ["不", "发达", "我", "不", "回家"]
  },
  {
    chinese: "你今天不做作业不能出去玩儿。",
    pinyin: "Nǐ jīntiān bù zuò zuòyè bù néng chūqù wánr.",
    meaning: "너는 오늘 숙제를 하지 않으면 나가 놀 수 없다.",
    words: ["你", "今天", "不", "做", "作业", "不能", "出去", "玩儿"]
  },
  {
    chinese: "他们早就研究过这个问题了。",
    pinyin: "Tāmen zǎo jiù yánjiū guo zhège wèntí le.",
    meaning: "그들은 진작에 이 문제를 연구한 적이 있다.",
    words: ["他们", "早就", "研究过", "这个", "问题", "了"]
  },
  {
    chinese: "秘书早就把你的简历交给经理了。",
    pinyin: "Mìshū zǎo jiù bǎ nǐ de jiǎnlì jiāo gěi jīnglǐ le.",
    meaning: "비서는 진작에 너의 이력서를 사장에게 넘겼다.",
    words: ["秘书", "早就", "把", "你的", "简历", "交给", "经理", "了"]
  },
  {
    chinese: "我早就熟悉这儿的饭馆儿了。",
    pinyin: "Wǒ zǎo jiù shúxī zhèr de fànguǎnr le.",
    meaning: "나는 진작에 이곳의 음식점에 익숙해졌다.",
    words: ["我", "早就", "熟悉", "这儿的", "饭馆儿", "了"]
  },
  {
    chinese: "课文背下来了吗?",
    pinyin: "Kèwén bèi xialai le ma?",
    meaning: "본문 외웠니?",
    words: ["课文", "背下来", "了", "吗"]
  },
  {
    chinese: "她陪奶奶买东西去了。",
    pinyin: "Tā péi nǎinai mǎi dōngxi qù le.",
    meaning: "그녀는 할머니를 모시고 물건을 사러 갔다.",
    words: ["她", "陪", "奶奶", "买", "东西", "去", "了"]
  },
  {
    chinese: "他陪老师看病去了。",
    pinyin: "Tā péi lǎoshī kàn bìng qù le.",
    meaning: "그는 선생님을 모시고 병원에 갔다.",
    words: ["他", "陪", "老师", "看病", "去", "了"]
  },
  {
    chinese: "爸爸陪孩子换钱去了。",
    pinyin: "Bàba péi háizi huàn qián qù le.",
    meaning: "아빠는 아이를 데리고 환전하러 갔다.",
    words: ["爸爸", "陪", "孩子", "换钱", "去", "了"]
  },
  {
    chinese: "领导不负责不行。",
    pinyin: "Lǐngdǎo bù fùzé bù xíng.",
    meaning: "지도자가 책임감이 없으면 안 된다.",
    words: ["领导", "不", "负责", "不", "行"]
  },
  {
    chinese: "成绩不及格不发毕业证。",
    pinyin: "Chéngjì bù jígé bù fā bìyèzhèng.",
    meaning: "성적이 모자라면 졸업증서를 발급하지 않는다.",
    words: ["成绩", "不", "及格", "不", "发", "毕业证"]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuizData = [];
let currentMode = "meaning";
let wrongAnswers = [];
const questionCount = 15;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz(mode) {
  currentMode = mode;
currentQuestionIndex = 0;
score = 0;
wrongAnswers = [];

  shuffledQuizData = shuffleArray([...quizData]).slice(0, questionCount);

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

  shuffledQuizData = shuffleArray([...sentenceData]).slice(0, Math.min(questionCount, sentenceData.length));

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

  orderQuizData = sentenceData.filter(item => item.words && item.words.length > 0);
  shuffledQuizData = shuffleArray([...orderQuizData]).slice(0, Math.min(questionCount, orderQuizData.length));

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
